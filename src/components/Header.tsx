import React, { useState, useRef, useEffect } from "react";
import { Grade, SchoolInfo } from "../types";
import { DEFAULT_TEACHERS } from "../data/defaultTimetables";
import { getWeekDateRange, getAll35Weeks, detectCurrentSchoolWeek, TET_HOLIDAY_2027 } from "../utils/dateHelper";
import { 
  Settings, 
  FileDown, 
  UploadCloud, 
  BookOpen, 
  Sparkles,
  Calendar,
  Layers,
  ChevronDown,
  FileText,
  Archive,
  Check,
  User,
  Users,
  FileCheck2,
  Clock,
  Sun
} from "lucide-react";

interface HeaderProps {
  schoolInfo: SchoolInfo;
  onUpdateSchoolInfo: (info: SchoolInfo) => void;
  onOpenConfigModal: () => void;
  onOpenTeacherSelectModal?: () => void;
  onOpenUploadTKB: () => void;
  onOpenWordExportModal: () => void;
  onOpenQuizModal?: (subject?: string) => void;
  onExportTKBWord: () => void;
  onExportWeeklyWord: () => void;
  onExportScheduleWord: () => void;
  onExportKHBDWithLBGFirstPage?: () => void;
  onExportCombinedWord: () => void;
  onExportAllThreeFiles: () => void;
  activeTab: "timetable" | "schedule" | "lessonPlan" | "syncHub" | "integration" | "quizzes";
  setActiveTab: (tab: "timetable" | "schedule" | "lessonPlan" | "syncHub" | "integration" | "quizzes") => void;
  availableClasses: string[];
}

export const Header: React.FC<HeaderProps> = ({
  schoolInfo,
  onUpdateSchoolInfo,
  onOpenConfigModal,
  onOpenTeacherSelectModal,
  onOpenUploadTKB,
  onOpenWordExportModal,
  onExportTKBWord,
  onExportWeeklyWord,
  onExportScheduleWord,
  onExportKHBDWithLBGFirstPage,
  onExportCombinedWord,
  onExportAllThreeFiles,
  activeTab,
  setActiveTab,
  availableClasses,
}) => {
  const [isExportDropdownOpen, setIsExportDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const grades: Grade[] = [1, 2, 3, 4, 5];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsExportDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleGradeChange = (newGrade: Grade) => {
    const classForGrade = availableClasses.find(c => c.startsWith(String(newGrade))) || `${newGrade}A`;
    let tName = schoolInfo.teacherName;
    if (schoolInfo.teacherType === "homeroom") {
      const matched = DEFAULT_TEACHERS.find(t => t.type === "homeroom" && t.assignedClasses?.includes(classForGrade));
      if (matched) tName = matched.name;
    }
    onUpdateSchoolInfo({
      ...schoolInfo,
      grade: newGrade,
      className: classForGrade,
      teacherName: tName,
    });
  };

  const handleTeacherChange = (newTeacherName: string) => {
    const matched = DEFAULT_TEACHERS.find((t) => t.name === newTeacherName);
    if (!matched) {
      onUpdateSchoolInfo({ ...schoolInfo, teacherName: newTeacherName });
      return;
    }
    if (matched.type === "homeroom") {
      const cls = matched.assignedClasses?.[0] || schoolInfo.className;
      const gNum = parseInt(cls.charAt(0)) as Grade;
      onUpdateSchoolInfo({
        ...schoolInfo,
        teacherName: matched.name,
        teacherType: "homeroom",
        className: cls,
        grade: !isNaN(gNum) && gNum >= 1 && gNum <= 5 ? gNum : schoolInfo.grade,
        assignedClasses: [cls],
      });
    } else {
      onUpdateSchoolInfo({
        ...schoolInfo,
        teacherName: matched.name,
        teacherType: "specialist",
        specialistSubject: matched.specialistSubject || "Tiếng Anh",
        assignedClasses: matched.assignedClasses || availableClasses,
      });
    }
  };

  const handleClassChange = (newClass: string) => {
    const gradeNum = parseInt(newClass.charAt(0)) as Grade;
    let tName = schoolInfo.teacherName;
    if (schoolInfo.teacherType === "homeroom") {
      const matched = DEFAULT_TEACHERS.find(t => t.type === "homeroom" && t.assignedClasses?.includes(newClass));
      if (matched) tName = matched.name;
    }
    onUpdateSchoolInfo({
      ...schoolInfo,
      className: newClass,
      grade: !isNaN(gradeNum) && gradeNum >= 1 && gradeNum <= 5 ? gradeNum : schoolInfo.grade,
      teacherName: tName,
    });
  };

  const [autoDetectMsg, setAutoDetectMsg] = useState<string | null>(null);

  const handleWeekChange = (newWeek: number) => {
    const range = getWeekDateRange(newWeek, "07/09/2026");
    onUpdateSchoolInfo({
      ...schoolInfo,
      week: newWeek,
      startDate: range.startDate,
      endDate: range.endDate,
    });
  };

  const handleAutoDetectCurrentWeek = () => {
    const detected = detectCurrentSchoolWeek(new Date());
    onUpdateSchoolInfo({
      ...schoolInfo,
      week: detected.week,
      startDate: detected.weekInfo.startDate,
      endDate: detected.weekInfo.endDate,
    });
    setAutoDetectMsg(detected.message);
    setTimeout(() => setAutoDetectMsg(null), 7000);
  };

  return (
    <header className="bg-[#fdfdfc] text-[#1a1a1a] border-b border-black sticky top-0 z-40">
      {/* Editorial Top Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 border-b border-black flex flex-col md:flex-row md:items-end md:justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-serif font-black tracking-tight uppercase leading-none text-black">
              EduPlan Pro
            </h1>
            <span className="text-[10px] font-mono uppercase bg-black text-white px-2 py-0.5 tracking-wider font-bold">
              Word A4 • CV 2345
            </span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] mt-1.5 font-bold text-stone-600">
            Hệ Thống Tự Động Hoá Xuất Word A4 (.TKB • .LBG • .KHBD)
          </p>
        </div>

        <div className="flex flex-col md:items-end text-left md:text-right leading-snug border-l-2 md:border-l-0 border-black pl-3 md:pl-0">
          <div className="flex items-center md:justify-end gap-1.5">
            <span className="text-sm font-serif italic font-semibold text-stone-900">
              GV: {schoolInfo.teacherName}
            </span>
            <span className={`text-[9px] uppercase px-1.5 py-0.5 border font-bold ${
              schoolInfo.teacherType === "specialist"
                ? "bg-amber-100 text-amber-950 border-amber-900"
                : "bg-black text-white border-black"
            }`}>
              {schoolInfo.teacherType === "specialist" ? `GV Chuyên ${schoolInfo.specialistSubject || ""}` : `GVCN ${schoolInfo.className}`}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-stone-600 font-medium">
            {schoolInfo.schoolName} {schoolInfo.branchName ? `— ${schoolInfo.branchName}` : ""}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold mt-0.5">
            {schoolInfo.teacherType === "specialist" 
              ? `Phân công ${schoolInfo.assignedClasses?.length || 0} lớp • Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`
              : `Khối ${schoolInfo.grade} • Lớp ${schoolInfo.className} • Tuần ${schoolInfo.week} (${schoolInfo.startDate} - ${schoolInfo.endDate})`}
          </span>
        </div>
      </div>

      {/* Control Strip */}
      <nav className="border-b border-black bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-wrap items-center justify-between gap-y-2 py-2">
          {/* Left: Grade, Class, and Week Switcher */}
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 py-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">Khối:</span>
              <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {grades.map((g) => (
                  <button
                    key={g}
                    onClick={() => handleGradeChange(g)}
                    className={`px-2.5 py-1 text-xs font-bold transition-colors border-r last:border-r-0 border-black ${
                      schoolInfo.grade === g
                        ? "bg-black text-white"
                        : "bg-white text-stone-800 hover:bg-stone-200"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Class Dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">Lớp:</span>
              <select
                value={schoolInfo.className}
                onChange={(e) => handleClassChange(e.target.value)}
                className="bg-white text-stone-900 text-xs font-bold border border-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                {availableClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    Lớp {cls}
                  </option>
                ))}
              </select>
            </div>

            {/* Teacher Select Dropdown */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">GV:</span>
              <select
                value={schoolInfo.teacherName}
                onChange={(e) => handleTeacherChange(e.target.value)}
                className="bg-white text-stone-900 text-xs font-bold border border-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer max-w-[155px] truncate"
                title="Chọn Giáo viên để lập LBG và KHBD riêng"
              >
                <optgroup label="-- 10 GV CHỦ NHIỆM --">
                  {DEFAULT_TEACHERS.filter((t) => t.type === "homeroom").map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.assignedClasses?.[0]})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="-- 8 GV BỘ MÔN & CHUYÊN --">
                  {DEFAULT_TEACHERS.filter((t) => t.type === "specialist").map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name} ({t.specialistSubject})
                    </option>
                  ))}
                </optgroup>
              </select>
            </div>

            {/* Week Dropdown with 35 weeks & 2-week Tet holiday break */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700">Tuần:</span>
              <select
                value={schoolInfo.week}
                onChange={(e) => handleWeekChange(parseInt(e.target.value) || 1)}
                className="bg-white text-stone-900 text-xs font-bold border border-black px-2 py-1 focus:outline-none focus:ring-1 focus:ring-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer max-w-[190px]"
                title="Chọn tuần học trong năm (Hệ thống tự động tính thứ Hai - thứ Sáu và bù 2 tuần nghỉ Tết)"
              >
                <optgroup label="-- HỌC KỲ I (Tuần 1 - Tuần 18) --">
                  {getAll35Weeks().filter(w => w.week <= 18).map((w) => (
                    <option key={w.week} value={w.week}>
                      Tuần {w.week} ({w.startDate.slice(0, 5)} - {w.endDate.slice(0, 5)})
                    </option>
                  ))}
                </optgroup>
                <optgroup label="-- TRƯỚC TẾT (Tuần 19 - Tuần 20) --">
                  {getAll35Weeks().filter(w => w.week === 19 || w.week === 20).map((w) => (
                    <option key={w.week} value={w.week}>
                      Tuần {w.week} ({w.startDate.slice(0, 5)} - {w.endDate.slice(0, 5)}) {w.week === 20 ? "★" : ""}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="-- 🌸 NGHỈ TẾT (25/01/2027 - 07/02/2027) --">
                  <option disabled value={999}>
                    🌸 Nghỉ Tết Nguyên Đán 2 tuần (Đã bù vào T21)
                  </option>
                </optgroup>
                <optgroup label="-- HỌC KỲ II (Tuần 21 - Tuần 35) [Sau Tết] --">
                  {getAll35Weeks().filter(w => w.week >= 21).map((w) => (
                    <option key={w.week} value={w.week}>
                      Tuần {w.week} ({w.startDate.slice(0, 5)} - {w.endDate.slice(0, 5)}) {w.week === 21 ? "[Sau Tết]" : ""}
                    </option>
                  ))}
                </optgroup>
              </select>

              {/* Real-time automatic week updater button */}
              <button
                type="button"
                onClick={handleAutoDetectCurrentWeek}
                className="flex items-center gap-1 bg-white hover:bg-stone-200 text-stone-900 border border-black px-2 py-1 text-xs font-bold shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
                title="Nhấp để tự động cập nhật tuần học và ngày theo thời gian thực"
              >
                <Clock className="w-3.5 h-3.5 text-blue-700" />
                <span className="hidden sm:inline">Tự Động</span>
              </button>
            </div>
          </div>

          {/* Right: Actions, Font Size & Export Hub */}
          <div className="flex items-center flex-wrap gap-2 py-1">
            {/* Open 16 Teachers Modal Button */}
            {onOpenTeacherSelectModal && (
              <button
                type="button"
                onClick={onOpenTeacherSelectModal}
                className="flex items-center gap-1 text-[10px] uppercase font-bold px-2.5 py-1.5 border border-black bg-amber-100 hover:bg-amber-200 text-amber-950 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
                title="Bảng chọn 16 Giáo viên và lập LBG - KHBD riêng biệt"
              >
                <User className="w-3.5 h-3.5" />
                <span>16 Giáo Viên</span>
              </button>
            )}


            {/* Font selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-stone-700 hidden sm:inline">Cỡ Chữ:</span>
              <div className="flex border border-black overflow-hidden bg-white shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                {([12, 13, 14] as const).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => onUpdateSchoolInfo({ ...schoolInfo, fontSize: sz })}
                    className={`px-2 py-1 text-[10px] font-bold border-r last:border-r-0 border-black transition-colors ${
                      schoolInfo.fontSize === sz
                        ? "bg-black text-white"
                        : "bg-white text-stone-800 hover:bg-stone-200"
                    }`}
                    title={`Cỡ chữ xuất Word ${sz}pt`}
                  >
                    {sz}pt
                  </button>
                ))}
              </div>
            </div>

            {/* Update Timetable Button */}
            <button
              onClick={onOpenUploadTKB}
              className="flex items-center gap-1 text-[10px] uppercase font-bold px-3 py-1.5 border border-dashed border-black bg-white hover:bg-stone-200 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              title="Đưa tệp Excel hoặc dán TKB nhà trường"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đưa TKB Lên</span>
            </button>

            {/* Config Teacher & School */}
            <button
              onClick={onOpenConfigModal}
              className="flex items-center gap-1 text-[10px] uppercase font-bold px-3 py-1.5 border border-black bg-white hover:bg-stone-200 transition-colors shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              title="Đổi thông tin Giáo viên, Trường, Phân hiệu, Lớp"
            >
              <Settings className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Đổi TT GV & Lớp</span>
            </button>

            {/* Prominent Word A4 Export Hub Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-stretch shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                <button
                  onClick={onOpenWordExportModal}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider hover:bg-stone-800 transition-colors cursor-pointer"
                  title="Mở Bảng Xuất Word A4 Đầy Đủ"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Xuất Word A4 (.TKB • .LBG • .KHBD)</span>
                </button>
                <button
                  onClick={() => setIsExportDropdownOpen(!isExportDropdownOpen)}
                  className="px-2 bg-stone-900 hover:bg-stone-800 text-white border-l border-stone-700 transition-colors cursor-pointer"
                  title="Chọn nhanh lệnh tải Word"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExportDropdownOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {/* Dropdown Menu */}
              {isExportDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-72 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] z-50 py-1 text-xs">
                  <div className="px-3 py-1.5 bg-stone-100 border-b border-black text-[10px] uppercase font-bold text-stone-700">
                    Lệnh Tải Nhanh Word A4 (Font {schoolInfo.fontSize}pt)
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportTKBWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">1. Tải TKB Word A4</div>
                      <div className="text-[10px] text-stone-500">Thời khóa biểu lớp {schoolInfo.className}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportScheduleWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">2. Tải LBG Word A4</div>
                      <div className="text-[10px] text-stone-500">Lịch báo giảng tuần {schoolInfo.week}</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportWeeklyWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">3. Tải KHBD Word A4</div>
                      <div className="text-[10px] text-stone-500">Cả tuần T2-T6 (Giáo án tách rời)</div>
                    </div>
                  </button>

                  {onExportKHBDWithLBGFirstPage && (
                    <button
                      onClick={() => {
                        setIsExportDropdownOpen(false);
                        onExportKHBDWithLBGFirstPage();
                      }}
                      className="w-full text-left px-3 py-2.5 hover:bg-stone-100 flex items-center gap-2 border-b-2 border-black transition-colors bg-stone-50 cursor-pointer"
                    >
                      <FileText className="w-4 h-4 text-black shrink-0" />
                      <div>
                        <div className="font-serif font-bold text-black text-xs flex items-center gap-1.5">
                          <span>4. KHBD (Trang 1: LBG + KHBD T2-T6)</span>
                          <span className="text-[8px] bg-black text-white px-1 py-0.2 font-mono font-bold">CHUẨN</span>
                        </div>
                        <div className="text-[10px] text-stone-600 font-medium">Trang đầu LBG, kế tiếp KHBD từ T2 đến T6</div>
                      </div>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportAllThreeFiles();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <Archive className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">5. Tải 3 Tệp Riêng Biệt</div>
                      <div className="text-[10px] text-stone-500">Tự động tải 1_TKB, 2_LBG, 3_KHBD</div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsExportDropdownOpen(false);
                      onExportCombinedWord();
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-stone-100 flex items-center gap-2 border-b border-stone-200 transition-colors cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-black shrink-0" />
                    <div>
                      <div className="font-serif font-bold text-black text-xs">6. Tải 1 Tệp Word Gộp Tất Cả</div>
                      <div className="text-[10px] text-stone-500">Gộp TKB + LBG + KHBD</div>
                    </div>
                  </button>

                  <div className="p-2 bg-stone-100">
                    <button
                      onClick={() => {
                        setIsExportDropdownOpen(false);
                        onOpenWordExportModal();
                      }}
                      className="w-full py-1.5 bg-black text-white text-[10px] font-bold uppercase tracking-wider hover:bg-stone-800 text-center transition-colors cursor-pointer"
                    >
                      Mở Bảng Tùy Chọn Đầy Đủ
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Tabs Strip with Editorial Sharpness */}
      <div className="bg-[#faf9f5] border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("timetable")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "timetable"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>1. Thời Khóa Biểu</span>
            </button>

            <button
              onClick={() => setActiveTab("schedule")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "schedule"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>2. Lịch Báo Giảng</span>
            </button>

            <button
              onClick={() => setActiveTab("lessonPlan")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "lessonPlan"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>3. Kế Hoạch Bài Dạy (CV 2345)</span>
            </button>

            <button
              onClick={() => setActiveTab("syncHub")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "syncHub"
                  ? "bg-amber-400 text-black border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] ring-1 ring-black"
                  : "bg-amber-100/90 text-amber-950 border-amber-800 hover:bg-amber-200"
              }`}
              title="Xem bảng trạng thái đồng bộ TKB - LBG - KHBD của toàn bộ 18 Giáo viên nhà trường"
            >
              <Users className="w-3.5 h-3.5 text-amber-950" />
              <span className="font-sans font-bold">4. Bảng Đồng Bộ 18 GV</span>
            </button>

            <button
              onClick={() => setActiveTab("integration")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "integration"
                  ? "bg-black text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-white text-stone-800 border-stone-400 hover:border-black hover:bg-stone-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>5. Khung Tích Hợp (AI & NLS)</span>
            </button>

            <button
              onClick={() => setActiveTab("quizzes")}
              className={`px-4 py-1.5 text-xs uppercase tracking-wider font-bold border transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === "quizzes"
                  ? "bg-emerald-700 text-white border-black shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                  : "bg-emerald-50 text-emerald-950 border-emerald-600 hover:bg-emerald-100"
              }`}
              title="Thanh tải và làm phiếu bài tập trắc nghiệm cuối tuần nguồn Loigiaihay.com"
            >
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>6. Phiếu Trắc Nghiệm Cuối Tuần</span>
            </button>
          </div>

          <div className="hidden lg:flex items-center text-[10px] uppercase font-bold tracking-wider text-stone-500">
            <span>Chuẩn A4 • Lề: 20-20-25-17.5mm • Font {schoolInfo.fontSize}pt</span>
          </div>
        </div>
      </div>

      {/* Real-time calendar notice or Tet holiday notification banner */}
      {(autoDetectMsg || schoolInfo.week === 20 || schoolInfo.week === 21) && (
        <div className="bg-amber-50 border-b border-amber-300 px-4 sm:px-8 py-1.5 text-xs text-amber-950 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold">📅 Lịch Học 35 Tuần & Nghỉ Tết:</span>
            <span>
              {autoDetectMsg ? autoDetectMsg : (
                schoolInfo.week === 20 
                  ? "Tuần 20 (18/01 - 22/01/2027) là tuần cuối trước kỳ Nghỉ Tết Nguyên Đán. Sau tuần 20, toàn trường nghỉ Tết 2 tuần (25/01/2027 - 07/02/2027)!"
                  : "Tuần 21 (08/02 - 12/02/2027) là tuần bắt đầu lại sau 2 tuần nghỉ Tết Nguyên Đán Đinh Mùi (đã tự động cộng 14 ngày offset)!"
              )}
            </span>
          </div>
          {autoDetectMsg && (
            <button 
              type="button" 
              onClick={() => setAutoDetectMsg(null)}
              className="text-stone-500 hover:text-black font-bold text-[11px] px-1 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      )}
    </header>
  );
};
