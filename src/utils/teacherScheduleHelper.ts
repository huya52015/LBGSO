import { DayOfWeek, Grade, LessonPlan, MasterTimetable, ScheduleItem, SchoolInfo, TeacherType } from "../types";
import { DEFAULT_CLASSES, DEFAULT_TEACHERS, generateWeeklyScheduleFromTimetable, TeacherInfo } from "../data/defaultTimetables";
import { generateFullWeekLessonPlans } from "../data/curriculumData";

/**
 * Filter schedule items to strictly include only periods directly taught by the teacher
 * (e.g., removing specialist subjects from a homeroom teacher's personal schedule)
 */
export function filterPersonalTeacherSchedule(
  items: ScheduleItem[],
  teacherType: TeacherType = "homeroom"
): ScheduleItem[] {
  if (teacherType === "specialist") {
    // For specialist teachers, all items in their schedule are already their taught periods
    return items;
  }
  // For homeroom teachers, exclude specialist subjects taught by other teachers
  return items.filter((it) => {
    // Exclude school-wide meeting from classroom teaching plan if needed, but allow if desired
    const n = it.note || "";
    const rawSub = it.lessonTitle || "";

    const hasSpecialistNote = 
      n.includes("GV Chuyên") || 
      n.includes("GV Bộ môn") || 
      n.includes("GV Dạy tiết") || 
      n.includes("PHT:") || 
      n.includes("PCGD:") || 
      n.includes("Thầy T") ||
      n.includes("Thầy Thịnh") ||
      n.includes("Thầy Th") ||
      n.includes("Cô Hằng") ||
      n.includes("Cô Trang") ||
      n.includes("Cô Quỳnh") ||
      n.includes("Thầy/Cô TB") ||
      n.includes("Cô Nương") ||
      n.includes("Cô D.Phương") ||
      n.includes("Cô Thy") ||
      n.includes("Cô Nguyễn Thị Thanh Tâm") ||
      n.includes("Thầy Phước") ||
      n.includes("Cô Nhàn") ||
      n.includes("Phan Ngọc Quan");

    if (hasSpecialistNote) return false;

    // Also check raw subject tags in parenthesis
    const hasSpecialistTag = 
      /\((P|p|T|t|Th|th|H|h|TR|tr|Q|q|TB|tb|Thy|thy|Tâm|tâm|Phước|Phương)\)/.test(rawSub);

    if (hasSpecialistTag) return false;

    // Check specialist subject types for homeroom teachers
    const sUpper = (it.subject || "").toUpperCase();
    if (
      sUpper.includes("TIN HỌC") ||
      sUpper.includes("MĨ THUẬT") ||
      sUpper.includes("ÂM NHẠC") ||
      sUpper.includes("GIÁO DỤC THỂ CHẤT") ||
      sUpper.includes("TIẾNG ANH") ||
      sUpper.includes("BỒI DƯỠNG NĂNG KHIẾU")
    ) {
      return false;
    }

    return true;
  });
}

/**
 * Generate full teaching schedule & lesson plans specifically for any teacher in the school
 */
export function getScheduleAndPlansForTeacher(
  teacher: TeacherInfo,
  masterTimetable: MasterTimetable,
  currentSchoolInfo: SchoolInfo,
  week?: number
): {
  schoolInfo: SchoolInfo;
  scheduleItems: ScheduleItem[];
  personalScheduleItems: ScheduleItem[];
  lessonPlans: LessonPlan[];
} {
  const selectedWeek = week || currentSchoolInfo.week || 1;
  const isHomeroom = teacher.type === "homeroom";
  
  let targetClass = currentSchoolInfo.className;
  let targetGrade = currentSchoolInfo.grade;

  if (isHomeroom && teacher.assignedClasses && teacher.assignedClasses.length > 0) {
    targetClass = teacher.assignedClasses[0];
    const gNum = parseInt(targetClass.charAt(0)) as Grade;
    if (!isNaN(gNum) && gNum >= 1 && gNum <= 5) {
      targetGrade = gNum;
    }
  }

  const teacherSchoolInfo: SchoolInfo = {
    ...currentSchoolInfo,
    teacherName: teacher.name,
    teacherType: teacher.type as TeacherType,
    specialistSubject: teacher.specialistSubject || currentSchoolInfo.specialistSubject || "Tiếng Anh",
    assignedClasses: teacher.assignedClasses || (isHomeroom ? [targetClass] : DEFAULT_CLASSES),
    className: targetClass,
    grade: targetGrade,
    week: selectedWeek,
  };

  // Generate the full schedule from the master timetable
  const rawSchedule = generateWeeklyScheduleFromTimetable(
    masterTimetable,
    teacherSchoolInfo.className,
    teacherSchoolInfo.teacherName,
    teacherSchoolInfo.week,
    teacherSchoolInfo.startDate,
    teacherSchoolInfo.teacherType,
    teacherSchoolInfo.specialistSubject,
    teacherSchoolInfo.assignedClasses
  );

  // Filter personal schedule (excluding specialist periods for GVCN)
  const personalSchedule = filterPersonalTeacherSchedule(rawSchedule, teacherSchoolInfo.teacherType);

  // Generate Lesson Plans (KHBD) specifically for this teacher's taught subjects
  const scheduleForPlans = isHomeroom ? personalSchedule : rawSchedule;
  const plans = generateFullWeekLessonPlans(teacherSchoolInfo, scheduleForPlans);

  return {
    schoolInfo: teacherSchoolInfo,
    scheduleItems: rawSchedule,
    personalScheduleItems: personalSchedule,
    lessonPlans: plans,
  };
}
