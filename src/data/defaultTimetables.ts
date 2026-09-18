import { DayOfWeek, Grade, MasterTimetable, ScheduleItem, SessionType } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { getGradeCurriculumLesson } from "./gradeCurriculums";

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  type: "homeroom" | "specialist";
  specialistSubject?: string;
  assignedClasses?: string[];
  subjects: string[];
  teachingPeriods: number;
  concurrentPeriods?: number;
  totalPeriods?: number;
}

export const DEFAULT_TEACHERS: TeacherInfo[] = [
  // 13 GIÁO VIÊN CHỦ NHIỆM (PHÂN HIỆU TÂN HOÀ A)
  { id: "oanh_1a1", name: "Cô Oanh", role: "GVCN 1A1", type: "homeroom", assignedClasses: ["1A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV", "TNXH"], teachingPeriods: 21, concurrentPeriods: 2, totalPeriods: 23 },
  { id: "diem_1b", name: "Cô Diễm", role: "GVCN 1B", type: "homeroom", assignedClasses: ["1B"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "minh_2a1", name: "Cô Minh", role: "GVCN 2A1", type: "homeroom", assignedClasses: ["2A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV"], teachingPeriods: 18, concurrentPeriods: 5, totalPeriods: 23 },
  { id: "hoa_2a", name: "Cô Hoa", role: "GVCN 2A", type: "homeroom", assignedClasses: ["2A"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV", "TNXH"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "loan_3a1", name: "Cô Loan", role: "GVCN 3A1", type: "homeroom", assignedClasses: ["3A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV", "TCT", "TNXH"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "thuong_3a2", name: "Cô Thương", role: "GVCN 3A2", type: "homeroom", assignedClasses: ["3A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "CN", "TNXH"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "thiet_3b", name: "Thầy Thiết", role: "GVCN 3B", type: "homeroom", assignedClasses: ["3B"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "TNXH", "CN"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "luong_4a1", name: "Thầy Lượng", role: "GVCN 4A1", type: "homeroom", assignedClasses: ["4A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "TCTV"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "tam_4a2", name: "Cô Tâm (4A2)", role: "GVCN 4A2", type: "homeroom", assignedClasses: ["4A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCTV", "LS&ĐL"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "van_4b", name: "Cô Vân", role: "GVCN 4B", type: "homeroom", assignedClasses: ["4B"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "TCTV", "CN", "LS&ĐL"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "ngan_5a1", name: "Cô Ngân", role: "GVCN 5A1", type: "homeroom", assignedClasses: ["5A1"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "KH", "LS&ĐL"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "hong_5a2", name: "Cô Hồng", role: "GVCN 5A2", type: "homeroom", assignedClasses: ["5A2"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "ĐĐ"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },
  { id: "tloan_5b", name: "Cô T.Loan", role: "GVCN 5B", type: "homeroom", assignedClasses: ["5B"], subjects: ["Tiếng Việt", "Toán", "HĐTN", "TCT", "KH", "LS&ĐL"], teachingPeriods: 19, concurrentPeriods: 4, totalPeriods: 23 },

  // CÁC GIÁO VIÊN BỘ MÔN & CHUYÊN THEO TKB PHÂN HIỆU TÂN HOÀ A
  { id: "phuoc_bm", name: "Thầy Phước (P)", role: "GV Bộ môn (Kí hiệu P)", type: "specialist", specialistSubject: "Đạo đức", assignedClasses: ["1A1", "1B", "2A1", "2A", "5A2"], subjects: ["ĐĐ(P)", "TCT(P)", "TNXH(P)", "TCTV(P)", "LS&ĐL(P)"], teachingPeriods: 19, totalPeriods: 19 },
  { id: "thinh_gdtc", name: "Thầy T (Thịnh)", role: "GV Chuyên GDTC & HĐTN (Kí hiệu T)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["1A1", "1B", "2A1", "2A", "3A1", "3A2", "3B"], subjects: ["GDTC(T)", "HĐTN(T)", "BĐNK(T)"], teachingPeriods: 20, totalPeriods: 20 },
  { id: "thang_gdtc", name: "Thầy Th (GDTC)", role: "GV Chuyên GDTC & HĐTN (Kí hiệu Th)", type: "specialist", specialistSubject: "Giáo dục Thể chất", assignedClasses: ["3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"], subjects: ["GDTC(Th)", "HĐTN(Th)"], teachingPeriods: 20, totalPeriods: 20 },
  { id: "hang_bm", name: "Cô Hằng (H)", role: "GV Bộ môn (Kí hiệu H)", type: "specialist", specialistSubject: "Khoa học", assignedClasses: ["3A1", "3B", "4A1", "4A2", "4B", "5A1", "5B"], subjects: ["ĐĐ(H)", "TNXH(H)", "KH(H)", "CN(H)", "LS&ĐL(H)"], teachingPeriods: 19, totalPeriods: 19 },
  { id: "trang_ta", name: "Cô Trang (TR)", role: "GV Chuyên Tiếng Anh (Kí hiệu TR)", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3A2", "3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"], subjects: ["Tiếng Anh", "TA(TR)"], teachingPeriods: 24, totalPeriods: 24 },
  { id: "quynh_ta", name: "Cô Quỳnh (Q)", role: "GV Chuyên Tiếng Anh (Kí hiệu Q)", type: "specialist", specialistSubject: "Tiếng Anh", assignedClasses: ["3A1", "3A2"], subjects: ["Tiếng Anh", "TA(Q)"], teachingPeriods: 8, totalPeriods: 8 },
  { id: "tb_bm", name: "Thầy/Cô TB", role: "GV Bộ môn (Kí hiệu TB)", type: "specialist", specialistSubject: "Đạo đức", assignedClasses: ["2A", "5A1", "5A2"], subjects: ["ĐĐ(TB)", "CN(TB)", "KH(TB)"], teachingPeriods: 6, totalPeriods: 6 },
  { id: "tam_an", name: "Nguyễn Thị Thanh Tâm", role: "GV Chuyên Âm nhạc", type: "specialist", specialistSubject: "Âm nhạc", assignedClasses: ["1A1", "1B", "2A1", "2A", "3A1", "3A2", "3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"], subjects: ["Âm nhạc", "AN", "BDAN"], teachingPeriods: 20, totalPeriods: 20 },
  { id: "thy_mt", name: "Cô Thy", role: "GV Chuyên Mĩ thuật", type: "specialist", specialistSubject: "Mĩ thuật", assignedClasses: ["1A1", "1B", "2A1", "2A", "3A1", "3A2", "3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"], subjects: ["Mĩ thuật", "MT"], teachingPeriods: 20, totalPeriods: 20 },
  { id: "phuong_th", name: "Cô D.Phương", role: "GV Chuyên Tin học", type: "specialist", specialistSubject: "Tin học", assignedClasses: ["1A1", "1B", "2A1", "2A", "3A1", "3A2", "3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"], subjects: ["Tin học", "TH"], teachingPeriods: 10, totalPeriods: 10 },
];

export const DEFAULT_CLASSES = ["1A1", "1B", "2A1", "2A", "3A1", "3A2", "3B", "4A1", "4A2", "4B", "5A1", "5A2", "5B"];

// Master timetable matrix based on the uploaded school timetable (THỰC HIỆN TỪ TUẦN 2 - 14/09/2026)
export const DEFAULT_MASTER_TIMETABLE: MasterTimetable = {
  schoolName: "Trường Tiểu Học Tân Thạnh (Phân hiệu Tân Hoà A)",
  effectiveDate: "Áp dụng từ Tuần 2 (14/09/2026 - 18/09/2026)",
  version: "2026_tan_hoa_a_v2_exact",
  classes: DEFAULT_CLASSES,
  slots: {
    // ==========================================
    // THỨ HAI (14/09/2026)
    // ==========================================
    "Thứ Hai_Sáng_1": { "1A1": "HĐTN", "1B": "HĐTN", "2A1": "HĐTN", "2A": "HĐTN", "3A1": "HĐTN", "3A2": "HĐTN", "3B": "HĐTN", "4A1": "HĐTN", "4A2": "HĐTN", "4B": "HĐTN", "5A1": "HĐTN", "5A2": "HĐTN", "5B": "HĐTN" },
    "Thứ Hai_Sáng_2": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "TV", "2A": "TV", "3A1": "TV", "3A2": "TV", "3B": "TV", "4A1": "TV", "4A2": "TV", "4B": "TV", "5A1": "TV", "5A2": "TV", "5B": "TV" },
    "Thứ Hai_Sáng_3": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "TV", "2A": "TV", "3A1": "TV", "3A2": "TV", "3B": "TV", "4A1": "TV", "4A2": "TV", "4B": "TV", "5A1": "TV", "5A2": "TV", "5B": "TV" },
    "Thứ Hai_Sáng_4": { "1A1": "T", "1B": "T", "2A1": "T", "2A": "T", "3A1": "T", "3A2": "T", "3B": "T", "4A1": "T", "4A2": "T", "4B": "T", "5A1": "T", "5A2": "T", "5B": "T" },
    "Thứ Hai_Sáng_5": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },

    "Thứ Hai_Chiều_1": { "1A1": "ĐĐ(P)", "1B": "Tiếng Việt", "2A1": "GDTC(T)", "2A": "TV", "3A1": "ĐĐ(H)", "3A2": "CN", "3B": "MT", "4A1": "TV", "4A2": "TV", "4B": "TA(TR)", "5A1": "KH", "5A2": "GDTC(Th)", "5B": "AN" },
    "Thứ Hai_Chiều_2": { "1A1": "TNXH", "1B": "TV", "2A1": "TCTV", "2A": "GDTC(T)", "3A1": "TNXH", "3A2": "TA(TR)", "3B": "ĐĐ(H)", "4A1": "TCT", "4A2": "AN", "4B": "GDTC(Th)", "5A1": "KH(TB)", "5A2": "MT", "5B": "T" },
    "Thứ Hai_Chiều_3": { "1A1": "TCTV", "1B": "MT", "2A1": "TCTV", "2A": "ĐĐ(TB)", "3A1": "TNXH(H)", "3A2": "GDTC(T)", "3B": "AN", "4A1": "TCT", "4A2": "LS&ĐL", "4B": "GDTC(Th)", "5A1": "LS&ĐL", "5A2": "CN(TB)", "5B": "TA(TR)" },

    // ==========================================
    // THỨ BA (15/09/2026)
    // ==========================================
    "Thứ Ba_Sáng_1": { "1A1": "GDTC(T)", "1B": "Tiếng Việt", "2A1": "TNXH(P)", "2A": "MT", "3A1": "T", "3A2": "AN", "3B": "GDTC(Th)", "4A1": "KH(H)", "4A2": "T", "4B": "T", "5A1": "T", "5A2": "T", "5B": "TA(TR)" },
    "Thứ Ba_Sáng_2": { "1A1": "HDTN(T)", "1B": "Tiếng Việt", "2A1": "T", "2A": "TCT(P)", "3A1": "MT", "3A2": "T", "3B": "T", "4A1": "CN(H)", "4A2": "AN", "4B": "TA(TR)", "5A1": "TV", "5A2": "TV", "5B": "GDTC(Th)" },
    "Thứ Ba_Sáng_3": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "GDTC(T)", "2A": "TNXH", "3A1": "TV", "3A2": "TV", "3B": "TA(TR)", "4A1": "MT", "4A2": "KH(H)", "4B": "TV", "5A1": "AN", "5A2": "ĐĐ", "5B": "T" },
    "Thứ Ba_Sáng_4": { "1A1": "Tiếng Việt", "1B": "GDTC(T)", "2A1": "AN", "2A": "TCTV(P)", "3A1": "TCT", "3A2": "TCT", "3B": "TV", "4A1": "GDTC(Th)", "4A2": "TV", "4B": "CN", "5A1": "TA(TR)", "5A2": "TV", "5B": "TV" },
    "Thứ Ba_Sáng_5": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },

    "Thứ Ba_Chiều_1": { "1A1": "Tiếng Việt", "1B": "ĐĐ(P)", "2A1": "TV", "2A": "T", "3A1": "AN", "3A2": "MT", "3B": "Tin học", "4A1": "TA(TR)", "4A2": "TV", "4B": "LS&ĐL", "5A1": "ĐĐ(H)", "5A2": "HĐTN(Th)", "5B": "TCT" },
    "Thứ Ba_Chiều_2": { "1A1": "TCTV", "1B": "TNXH", "2A1": "HDTN(T)", "2A": "TV", "3A1": "Tin học", "3A2": "TA(Q)", "3B": "MT", "4A1": "AN", "4A2": "GDTC(Th)", "4B": "ĐĐ(H)", "5A1": "KH", "5A2": "TA(TR)", "5B": "KH" },
    "Thứ Ba_Chiều_3": { "1A1": "T", "1B": "TCTV", "2A1": "TV", "2A": "GDTC(T)", "3A1": "TA(Q)", "3A2": "Tin học", "3B": "BDAN", "4A1": "T", "4A2": "TA(TR)", "4B": "KH(H)", "5A1": "HĐTN(Th)", "5A2": "MT", "5B": "LS&ĐL" },

    // ==========================================
    // THỨ TƯ (16/09/2026)
    // ==========================================
    "Thứ Tư_Sáng_1": { "1A1": "Tiếng Việt", "1B": "Tin học", "2A1": "T", "2A": "T", "3A1": "GDTC(T)", "3A2": "T", "3B": "T", "4A1": "TV", "4A2": "T", "4B": "TA(TR)", "5A1": "CN(H)", "5A2": "LS&ĐL(P)", "5B": "BDAN" },
    "Thứ Tư_Sáng_2": { "1A1": "Tiếng Việt", "1B": "AN", "2A1": "TCTV", "2A": "Tin học", "3A1": "HDTN(T)", "3A2": "ĐĐ(H)", "3B": "TA(TR)", "4A1": "TV", "4A2": "TV", "4B": "T", "5A1": "T", "5A2": "T", "5B": "TV" },
    "Thứ Tư_Sáng_3": { "1A1": "TCT(p)", "1B": "Tiếng Việt", "2A1": "Tin học", "2A": "HDTN(T)", "3A1": "TA(Q)", "3A2": "BDAN", "3B": "TV", "4A1": "LS&ĐL(H)", "4A2": "TA(TR)", "4B": "HĐTN(Th)", "5A1": "TV", "5A2": "TV", "5B": "TV" },
    "Thứ Tư_Sáng_4": { "1A1": "Tin học", "1B": "Tiếng Việt", "2A1": "TV", "2A": "AN", "3A1": "T", "3A2": "TA(Q)", "3B": "TV", "4A1": "TA(TR)", "4A2": "KH(H)", "4B": "TCT", "5A1": "TV", "5A2": "TV", "5B": "HĐTN(Th)" },
    "Thứ Tư_Sáng_5": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },

    "Thứ Tư_Chiều_1": { "1A1": "MT", "1B": "GDTC(T)", "2A1": "ĐĐ(P)", "2A": "TCTV", "3A1": "TV", "3A2": "TV", "3B": "GDTC(Th)", "4A1": "T", "4A2": "ĐĐ(H)", "4B": "Tin học", "5A1": "TA(TR)", "5A2": "AN", "5B": "T" },
    "Thứ Tư_Chiều_2": { "1A1": "AN", "1B": "HDTN(T)", "2A1": "TV", "2A": "TNXH(P)", "3A1": "TV", "3A2": "TV", "3B": "TNXH", "4A1": "HĐTN(Th)", "4A2": "CN(H)", "4B": "MT", "5A1": "Tin học", "5A2": "TA(TR)", "5B": "TV" },
    "Thứ Tư_Chiều_3": { "1A1": "GDTC(T)", "1B": "T", "2A1": "TV", "2A": "TCTV(P)", "3A1": "BDAN", "3A2": "TNXH", "3B": "CN", "4A1": "KH(H)", "4A2": "TA(TR)", "4B": "GDTC(Th)", "5A1": "MT", "5A2": "Tin học", "5B": "LS&ĐL" },

    // ==========================================
    // THỨ NĂM (17/09/2026)
    // ==========================================
    "Thứ Năm_Sáng_1": { "1A1": "BDNK(T)", "1B": "Tiếng Việt", "2A1": "T", "2A": "T", "3A1": "T", "3A2": "TV", "3B": "T", "4A1": "T", "4A2": "T", "4B": "KH(H)", "5A1": "T", "5A2": "LS&ĐL(P)", "5B": "TA(TR)" },
    "Thứ Năm_Sáng_2": { "1A1": "TNXH(P)", "1B": "Tiếng Việt", "2A1": "TCT", "2A": "TV", "3A1": "TV", "3A2": "TV", "3B": "TV", "4A1": "TV", "4A2": "GDTC(Th)", "4B": "TA(TR)", "5A1": "TV", "5A2": "BDAN", "5B": "ĐĐ(H)" },
    "Thứ Năm_Sáng_3": { "1A1": "TCTV", "1B": "TCT(P)", "2A1": "TV", "2A": "BDAN", "3A1": "TCT", "3A2": "TA(Q)", "3B": "HDTN(T)", "4A1": "TA(TR)", "4A2": "TV", "4B": "T", "5A1": "TV", "5A2": "GDTC(Th)", "5B": "CN(H)" },
    "Thứ Năm_Sáng_4": { "1A1": "BDAN", "1B": "TNXH(P)", "2A1": "TV", "2A": "TV", "3A1": "TA(Q)", "3A2": "T", "3B": "ĐĐ(H)", "4A1": "GDTC(Th)", "4A2": "TCTV", "4B": "TV", "5A1": "TCT", "5A2": "TA(TR)", "5B": "T" },
    "Thứ Năm_Sáng_5": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },

    "Thứ Năm_Chiều_1": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "TCT(P)", "2A": "GDTC(T)", "3A1": "TV", "3A2": "TCT", "3B": "TV", "4A1": "LS&ĐL(H)", "4A2": "HĐTN(Th)", "4B": "TV", "5A1": "TA(TR)", "5A2": "T", "5B": "Tin học" },
    "Thứ Năm_Chiều_2": { "1A1": "Tiếng Việt", "1B": "TCTV", "2A1": "TNXH(P)", "2A": "TV", "3A1": "TNXH(H)", "3A2": "HDTN(T)", "3B": "TCT", "4A1": "TCTV", "4A2": "Tin học", "4B": "TCTV", "5A1": "GDTC(Th)", "5A2": "TV", "5B": "TA(TR)" },
    "Thứ Năm_Chiều_3": { "1A1": "T", "1B": "T", "2A1": "TCTV(P)", "2A": "TV", "3A1": "CN(H)", "3A2": "GDTC(T)", "3B": "TNXH", "4A1": "Tin học", "4A2": "TA(TR)", "4B": "LS&ĐL", "5A1": "LS&ĐL", "5A2": "KH(TB)", "5B": "GDTC(Th)" },

    // ==========================================
    // THỨ SÁU (18/09/2026)
    // ==========================================
    "Thứ Sáu_Sáng_1": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "MT", "2A": "T", "3A1": "T", "3A2": "T", "3B": "TA(TR)", "4A1": "T", "4A2": "T", "4B": "T", "5A1": "T", "5A2": "T", "5B": "T" },
    "Thứ Sáu_Sáng_2": { "1A1": "Tiếng Việt", "1B": "Tiếng Việt", "2A1": "BDAN", "2A": "TV", "3A1": "HĐTN", "3A2": "HĐTN", "3B": "T", "4A1": "TA(TR)", "4A2": "MT", "4B": "TV", "5A1": "HĐTN", "5A2": "TV", "5B": "TV" },
    "Thứ Sáu_Sáng_3": { "1A1": "Tiếng Việt", "1B": "HĐTN", "2A1": "T", "2A": "TV", "3A1": "MT", "3A2": "TA(Q)", "3B": "TCT", "4A1": "TV", "4A2": "LS&ĐL", "4B": "TV", "5A1": "BDAN", "5A2": "TA(TR)", "5B": "KH" },
    "Thứ Sáu_Sáng_4": { "1A1": "HĐTN", "1B": "BDAN", "2A1": "HĐTN", "2A": "HĐTN", "3A1": "TA(Q)", "3A2": "MT", "3B": "HĐTN", "4A1": "HĐTN", "4A2": "HĐTN", "4B": "HĐTN", "5A1": "TA(TR)", "5A2": "HĐTN", "5B": "HĐTN" },
    "Thứ Sáu_Sáng_5": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },

    "Thứ Sáu_Chiều_1": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },
    "Thứ Sáu_Chiều_2": { "1A1": "", "1B": "", "2A1": "", "2A": "", "3A1": "", "3A2": "", "3B": "", "4A1": "", "4A2": "", "4B": "", "5A1": "", "5A2": "", "5B": "" },
    "Thứ Sáu_Chiều_3": { "1A1": "SHCM", "1B": "SHCM", "2A1": "SHCM", "2A": "SHCM", "3A1": "SHCM", "3A2": "SHCM", "3B": "SHCM", "4A1": "SHCM", "4A2": "SHCM", "4B": "SHCM", "5A1": "SHCM", "5A2": "SHCM", "5B": "SHCM" },
  }
};

export const DAYS_OF_WEEK: DayOfWeek[] = ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu"];

// Helper to calculate weekly dates (Monday to Friday) from startDateStr
export function getWeekDates(startDateStr: string = "14/09/2026"): string[] {
  const parts = startDateStr.split(/[\/\-]/);
  if (parts.length >= 2) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parts[2] ? parseInt(parts[2], 10) : 2026;
    if (!isNaN(day) && !isNaN(month)) {
      const start = new Date(year, month - 1, day);
      return Array.from({ length: 5 }, (_, i) => {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        const dd = String(d.getDate()).padStart(2, "0");
        const mm = String(d.getMonth() + 1).padStart(2, "0");
        const yyyy = d.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
      });
    }
  }
  return ["14/09/2026", "15/09/2026", "16/09/2026", "17/09/2026", "18/09/2026"];
}

// Check if a cell slot matches a specialist teacher or subject
export function isSlotMatchingTeacherOrSubject(
  cellText: string,
  teacherName: string,
  specialistSubject?: string
): boolean {
  if (!cellText || cellText.trim() === "" || cellText === "SHCM") return false;
  const lowerCell = cellText.toLowerCase().trim();
  const lowerName = teacherName.toLowerCase().trim();

  // Match specialist teacher tags from parentheses
  if (lowerName.includes("thịnh") || lowerName === "thầy t" || lowerName.includes("thầy t ")) {
    return lowerCell.includes("(t)") || lowerCell.includes("(thịnh)") || lowerCell.includes("thịnh");
  }
  if (lowerName.includes("thầy th") || lowerName === "thầy th") {
    return lowerCell.includes("(th)");
  }
  if (lowerName.includes("phước")) {
    return lowerCell.includes("(p)") || lowerCell.includes("(phước)") || lowerCell.includes("phước");
  }
  if (lowerName.includes("hằng")) {
    return lowerCell.includes("(h)") || lowerCell.includes("(hằng)");
  }
  if (lowerName.includes("trang")) {
    return lowerCell.includes("(tr)") || lowerCell.includes("(trang)") || lowerCell.includes("ta(tr)");
  }
  if (lowerName.includes("quỳnh")) {
    return lowerCell.includes("(q)") || lowerCell.includes("(quỳnh)") || lowerCell.includes("ta(q)");
  }
  if (lowerName.includes("tb")) {
    return lowerCell.includes("(tb)");
  }
  if (lowerName.includes("phương")) {
    return lowerCell.includes("(phương)") || lowerCell.includes("phương") || lowerCell.startsWith("th");
  }
  if (lowerName.includes("thy")) {
    return lowerCell.includes("(thy)") || lowerCell.includes("thy") || lowerCell.startsWith("mt");
  }
  if (lowerName.includes("tâm")) {
    return lowerCell.includes("(tâm)") || lowerCell.includes("tâm") || lowerCell.startsWith("an") || lowerCell.startsWith("bdan");
  }
  if (lowerName.includes("nương")) {
    return lowerCell.includes("(nương)") || lowerCell.includes("nương");
  }
  if (lowerName.includes("nhàn")) {
    return lowerCell.includes("(nhàn)") || lowerCell.includes("nhàn");
  }
  if (lowerName.includes("quan")) {
    return lowerCell.includes("(quan)") || lowerCell.includes("quan");
  }

  // Check matching by specialist subject keywords
  if (specialistSubject) {
    const sSub = specialistSubject.toLowerCase();
    if (sSub.includes("tiếng anh") || sSub.includes("anh văn")) {
      return lowerCell.includes("ta") || lowerCell.includes("tiếng anh");
    }
    if (sSub.includes("tin học")) {
      return lowerCell.includes("th") || lowerCell.includes("tin học") || lowerCell.includes("t.học");
    }
    if (sSub.includes("âm nhạc")) {
      return lowerCell.includes("an") || lowerCell.includes("bdan") || lowerCell.includes("bđan") || lowerCell.includes("âm nhạc");
    }
    if (sSub.includes("mĩ thuật") || sSub.includes("mỹ thuật")) {
      return lowerCell.includes("mt") || lowerCell.includes("mĩ thuật");
    }
    if (sSub.includes("thể chất") || sSub.includes("gdtc")) {
      return lowerCell.includes("gdtc") || lowerCell.includes("bđnk") || lowerCell.includes("bdnk") || lowerCell.includes("thể chất");
    }
  }

  // General tag match
  const nameParts = lowerName.split(" ");
  const lastName = nameParts[nameParts.length - 1];
  if (lastName && (lowerCell.includes(`(${lastName})`) || lowerCell.includes(lastName))) {
    return true;
  }

  return false;
}

// Helper to categorize subject shorthand for sequential weekly period counting
export function getSubjectCategory(raw: string, day: DayOfWeek, period: number): string {
  const clean = raw.trim();
  const cUpper = clean.toUpperCase();

  if (clean === "SHCM") {
    return "SHCM";
  }

  // 1. Tăng cường Tiếng Việt (TCTV)
  if (cUpper.includes("TCTV") || cUpper.includes("T. CƯỜNG TV") || cUpper.includes("T.CƯỜNG TV")) {
    return "TCTV";
  }
  // 2. Tiếng Việt chính khóa
  if (clean === "TV" || clean.startsWith("TV ") || clean === "Tiếng Việt" || clean.includes("Tiếng Việt")) {
    return "TV";
  }
  // 3. Tăng cường Toán (TCT)
  if (cUpper.includes("TCT") || cUpper.includes("T. CƯỜNG T") || cUpper.includes("T.CƯỜNG T")) {
    return "TCT";
  }
  // 4. Toán chính khóa
  if (clean === "T" || clean.startsWith("T ") || clean === "Toán" || clean.includes("Toán")) {
    return "TOAN";
  }
  // 5. Hoạt động trải nghiệm (HĐTN)
  if (cUpper.includes("HĐTN (CC)") || clean === "CC" || ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Hai" && period === 1)) {
    return "HDTN_SHDC";
  }
  if (cUpper.includes("HĐTN (SHL)") || clean === "SHL" || ((cUpper.includes("HĐTN") || cUpper.includes("HDTN")) && day === "Thứ Sáu" && period === 4)) {
    return "HDTN_SHL";
  }
  if (cUpper.includes("HĐTN") || cUpper.includes("HDTN")) {
    return "HDTN_GDCD";
  }
  // 6. Lịch sử và Địa lí
  if (cUpper.includes("LS-ĐL") || cUpper.includes("LS&ĐL") || clean === "LS" || clean === "ĐL" || clean.includes("Lịch sử") || clean.includes("Địa lí")) {
    return "LSDL";
  }
  // 7. Khoa học
  if (clean === "KH" || clean.includes("Khoa học")) {
    return "KH";
  }
  // 8. Tự nhiên và Xã hội
  if (cUpper.includes("TNXH") || clean.includes("Tự nhiên và Xã hội")) {
    return "TNXH";
  }
  // 9. Đạo đức
  if (clean.includes("ĐĐ") || clean.includes("Đạo đức")) {
    return "DD";
  }
  // 10. Công nghệ
  if (clean === "CN" || clean.startsWith("CN ") || clean.includes("Công nghệ")) {
    return "CN";
  }
  // 11. Tiếng Anh
  if (cUpper.includes("TA") || clean.includes("Tiếng Anh") || clean.includes("Anh văn")) {
    return "TA";
  }
  // 12. Tin học
  if (cUpper.includes("TH") || clean.includes("Tin học") || clean.includes("T.học")) {
    return "TH";
  }
  // 13. Giáo dục Thể chất
  if (cUpper.includes("GDTC") || clean.includes("Thể chất") || clean === "TD") {
    return "GDTC";
  }
  // 14. Âm nhạc
  if (cUpper.includes("AN") || clean.includes("Âm nhạc") || cUpper.includes("BDAN")) {
    return "AN";
  }
  // 15. Mĩ thuật
  if (cUpper.includes("MT") || clean.includes("Mĩ thuật") || cUpper.includes("BDMT")) {
    return "MT";
  }

  return clean;
}

// Helper to generate full weekly schedule items for a specific class (GVCN)
export function generateScheduleForClass(
  master: MasterTimetable,
  targetClass: string,
  week: number,
  startDateStr: string = "07/09/2026",
  teacherName: string = "Nguyễn Hoàng Tuấn"
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr);
  const subjectCounters: Record<string, number> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const subjectRaw = (master.slots[key]?.[targetClass] || "").trim();
      if (subjectRaw && subjectRaw !== "") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Sáng",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }

    // Chiều (Tiết 1 -> 3)
    for (let p = 1; p <= 3; p++) {
      const key = `${day}_Chiều_${p}`;
      const subjectRaw = (master.slots[key]?.[targetClass] || "").trim();
      if (subjectRaw && subjectRaw !== "") {
        const cat = getSubjectCategory(subjectRaw, day, p);
        subjectCounters[cat] = (subjectCounters[cat] || 0) + 1;
        const pInW = subjectCounters[cat];

        const item = mapRawSubjectToScheduleItem(
          subjectRaw,
          day,
          dates[dIdx],
          "Chiều",
          p,
          targetClass,
          week,
          teacherName,
          undefined,
          pInW
        );
        if (item) items.push(item);
      }
    }
  });

  return items;
}

// Helper to generate full weekly schedule items for a Specialist Teacher (GV Chuyên Bộ Môn)
export function generateSpecialistSchedule(
  master: MasterTimetable,
  teacherName: string,
  specialistSubject: string,
  week: number,
  startDateStr: string = "07/09/2026",
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  const items: ScheduleItem[] = [];
  const dates = getWeekDates(startDateStr);
  const classSubjectCounters: Record<string, Record<string, number>> = {};

  DAYS_OF_WEEK.forEach((day, dIdx) => {
    // Sáng (Tiết 1 -> 5)
    for (let p = 1; p <= 5; p++) {
      const key = `${day}_Sáng_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Sáng",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }

    // Chiều (Tiết 1 -> 3)
    for (let p = 1; p <= 3; p++) {
      const key = `${day}_Chiều_${p}`;
      const slotRow = master.slots[key] || {};

      assignedClasses.forEach((cls) => {
        const cell = (slotRow[cls] || "").trim();
        if (cell && cell !== "SHCM" && isSlotMatchingTeacherOrSubject(cell, teacherName, specialistSubject)) {
          if (!classSubjectCounters[cls]) classSubjectCounters[cls] = {};
          const cat = getSubjectCategory(cell, day, p);
          classSubjectCounters[cls][cat] = (classSubjectCounters[cls][cat] || 0) + 1;
          const pInW = classSubjectCounters[cls][cat];

          const item = mapRawSubjectToScheduleItem(
            cell,
            day,
            dates[dIdx],
            "Chiều",
            p,
            cls,
            week,
            teacherName,
            specialistSubject,
            pInW
          );
          if (item) items.push(item);
        }
      });
    }
  });

  // Always append school-wide Friday afternoon SHCM for specialist teachers
  const shcmSlot = master.slots["Thứ Sáu_Chiều_3"];
  if (shcmSlot) {
    const shcmItem = mapRawSubjectToScheduleItem(
      "SHCM",
      "Thứ Sáu",
      dates[4] || "18/09/2026",
      "Chiều",
      3,
      assignedClasses[0] || "Toàn trường",
      week,
      teacherName,
      specialistSubject
    );
    if (shcmItem) items.push(shcmItem);
  }

  return items;
}

// Unified weekly schedule generator based on SchoolInfo
export function generateWeeklyScheduleFromTimetable(
  master: MasterTimetable,
  targetClass: string,
  teacherName: string,
  week: number,
  startDateStr: string,
  teacherType: "homeroom" | "specialist" = "homeroom",
  specialistSubject: string = "Tiếng Anh",
  assignedClasses: string[] = DEFAULT_CLASSES
): ScheduleItem[] {
  if (teacherType === "specialist") {
    return generateSpecialistSchedule(master, teacherName, specialistSubject, week, startDateStr, assignedClasses);
  }
  return generateScheduleForClass(master, targetClass, week, startDateStr, teacherName);
}

// Helper to map shorthand cell string to detailed Lesson Plan Item
export function mapRawSubjectToScheduleItem(
  raw: string,
  day: DayOfWeek,
  dateStr: string,
  session: SessionType,
  period: number,
  className: string,
  week: number,
  teacherName: string,
  specialistSubject?: string,
  subjectPeriodInWeek?: number
): ScheduleItem {
  const clean = raw.trim();
  const gradeNum = ((parseInt(className.charAt(0)) as Grade) || 5) as Grade;

  if (clean === "SHCM") {
    return {
      id: `item-${day}-${session}-${period}-${className}-${Math.random().toString(36).substring(2, 7)}`,
      day,
      dateStr,
      session,
      period,
      subject: "SINH HOẠT CHUYÊN MÔN",
      subSubject: "Sinh hoạt chuyên môn",
      curriculumPeriod: `SHCM${week}`,
      lessonTitle: `Sinh hoạt chuyên môn toàn trường tuần ${week}`,
      integrationNotes: "Tập huấn chuyên môn & Đổi mới PPDH theo CT GDPT 2018",
      note: "Toàn trường",
      teacherName,
      className,
    };
  }

  let subject = `TIẾNG VIỆT ${gradeNum}`;
  let subSubject = "";
  let lessonTitle = clean;
  let curriculumPeriod: string | number = week * 4 + period;
  let integrationNotes = "";
  let note = "";
  let actGV: string | undefined = undefined;
  let actHS: string | undefined = undefined;

  // 1. Detect Teacher Annotation Note from parenthesis
  if (clean.endsWith("(T)") || clean.includes("(T)") || clean.includes("(Thịnh)")) {
    note = "GV Chuyên GDTC: Thầy T (Thịnh)";
  } else if (clean.endsWith("(Th)") || clean.includes("(Th)")) {
    note = "GV Chuyên GDTC: Thầy Th";
  } else if (clean.includes("(TR)") || clean.includes("(Trang)") || clean.includes("TA(TR)")) {
    note = "GV Chuyên TA: Cô Trang (TR)";
  } else if (clean.includes("(Q)") || clean.includes("(Quỳnh)") || clean.includes("TA(Q)")) {
    note = "GV Chuyên TA: Cô Quỳnh (Q)";
  } else if (clean.includes("(Nương)")) {
    note = "GV Chuyên TA: Cô Nương";
  } else if (clean.includes("(Phương)")) {
    note = "GV Chuyên TH: Cô D.Phương";
  } else if (clean.includes("(Thy)")) {
    note = "GV Chuyên MT: Cô Thy";
  } else if (clean.includes("(Tâm)")) {
    note = "GV Chuyên AN: Cô Nguyễn Thị Thanh Tâm";
  } else if (clean.endsWith("(P)") || clean.includes("(P)") || clean.includes("(Phước)")) {
    note = "GV Bộ môn: Thầy Phước (P)";
  } else if (clean.endsWith("(H)") || clean.includes("(H)") || clean.includes("(Hằng)")) {
    note = "GV Bộ môn: Cô Hằng (H)";
  } else if (clean.endsWith("(TB)") || clean.includes("(TB)")) {
    note = "GV Bộ môn: Thầy/Cô TB";
  } else if (clean.includes("(Nhàn)")) {
    note = "GV Bộ môn: Cô Nhàn";
  } else if (clean.includes("(Quan)")) {
    note = "PHT: Phan Ngọc Quan";
  }

  // 2. BỒI DƯỠNG NĂNG KHIẾU (BĐNK)
  if (clean.includes("BĐNK") || clean.includes("BDNK")) {
    subject = `BỒI DƯỠNG NĂNG KHIẾU ${gradeNum}`;
    subSubject = "Bồi dưỡng TDTT & Thể chất";
    if (!note) note = "GV Chuyên GDTC: Thầy T (Thịnh)";
    lessonTitle = `Bồi dưỡng năng khiếu: Rèn luyện kĩ năng vận động và thể lực tuần ${week}`;
    curriculumPeriod = `BĐNK${week}`;
    integrationNotes = "Phát triển tố chất thể lực, sức bền và rèn luyện thể thao học đường";
  }

  // 3. TIẾNG ANH (TA)
  else if ((clean.includes("TA") || clean.includes("Anh văn") || clean.includes("Tiếng Anh")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIẾNG ANH ${gradeNum}`;
    if (!note) note = clean.includes("Q") ? "GV Chuyên TA: Cô Quỳnh (Q)" : "GV Chuyên TA: Cô Trang (TR)";
    const pInW = subjectPeriodInWeek || ((period % 4) + 1);
    const englishDetail = getDetailedEnglishLesson(gradeNum, week, undefined, pInW);
    lessonTitle = englishDetail.lessonTitle;
    curriculumPeriod = (week - 1) * 4 + ((pInW - 1) % 4) + 1;
    integrationNotes = englishDetail.integrationNotes;
  }

  // 3. TIN HỌC (TH)
  else if ((clean.includes("TH") || clean.includes("T.học") || clean.includes("Tin học")) && !clean.includes("CN") && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `TIN HỌC ${gradeNum}`;
    if (!note) note = "GV Chuyên TH: Cô D.Phương";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Tin học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp NLS (CV 3456/BGDĐT-GDTH)";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 4. CÔNG NGHỆ (CN)
  else if (clean === "CN" || clean.startsWith("CN ") || clean.includes("Công nghệ") || clean.includes("CN (Nhàn)")) {
    subject = `CÔNG NGHỆ ${gradeNum}`;
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "công nghệ", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & Kĩ năng ứng dụng";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 5. ÂM NHẠC (AN / BDAN)
  else if ((clean.includes("AN") || clean.includes("Âm nhạc") || clean.includes("BDAN")) && !clean.includes("HĐTN") && !clean.includes("HDTN") && !clean.includes("Quan")) {
    subject = `ÂM NHẠC ${gradeNum}`;
    const isEnhance = clean.includes("BDAN") || clean.includes("Bồi dưỡng") || session === "Chiều";
    subSubject = isEnhance ? "Bồi dưỡng Âm nhạc" : "Âm nhạc";
    if (!note) note = "GV Chuyên AN: Cô Nguyễn Thị Thanh Tâm";
    const musicDetail = getDetailedMusicLesson(gradeNum, week, isEnhance, session as any);
    lessonTitle = musicDetail.lessonTitle;
    curriculumPeriod = isEnhance ? `BD${week}` : week;
    integrationNotes = musicDetail.integrationNotes;
  }

  // 6. MĨ THUẬT (MT / BDMT)
  else if ((clean.includes("MT") || clean.includes("Mĩ thuật") || clean.includes("BDMT")) && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `MĨ THUẬT ${gradeNum}`;
    const isEnhance = clean.includes("BDMT") || clean.includes("Bồi dưỡng");
    subSubject = isEnhance ? "Bồi dưỡng Mĩ thuật" : "Mĩ thuật";
    if (!note) note = "GV Chuyên MT: Cô Thy";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "Mĩ thuật", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp STEM sáng tạo & QCN";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 7. GIÁO DỤC THỂ CHẤT (GDTC)
  else if ((clean.includes("GDTC") || clean.includes("Thể chất") || clean === "TD") && !clean.includes("HĐTN") && !clean.includes("HDTN")) {
    subject = `GIÁO DỤC THỂ CHẤT ${gradeNum}`;
    subSubject = gradeNum === 5 ? "Thể dục" : "Giáo dục thể chất";
    if (!note) note = "GV Chuyên GDTC: Thầy Thịnh";
    const pInW = subjectPeriodInWeek || ((period % 2) + 1);
    const info = getGradeCurriculumLesson(gradeNum, "Giáo dục thể chất", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp rèn luyện thể lực & tác phong nhanh nhẹn";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 8. HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN)
  else if (clean.includes("HĐTN (CC)") || clean === "CC" || ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Hai" && period === 1)) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt dưới cờ";
    note = "Chào cờ đầu tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 1);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp QCN, KNS, Giáo dục truyền thống";
    actGV = info.actGV;
    actHS = info.actHS;
  } else if (clean.includes("HĐTN (SHL)") || clean === "SHL" || ((clean.includes("HĐTN") || clean.includes("HDTN")) && day === "Thứ Sáu" && period === 4)) {
    subject = "HĐTN";
    subSubject = "Sinh hoạt lớp";
    note = "Sinh hoạt cuối tuần";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 3);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp KNS, Tự đánh giá & Kế hoạch tuần tới";
    actGV = info.actGV;
    actHS = info.actHS;
  } else if (clean.includes("HĐTN") || clean.includes("HDTN")) {
    subject = "HĐTN";
    subSubject = "Hoạt động giáo dục theo chủ đề";
    if (!note && clean.includes("Thy")) note = "GV Chuyên MT: Cô Thy";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const info = getGradeCurriculumLesson(gradeNum, "hoạt động trải nghiệm", week, 2);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp KNS & QCN";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 9. LỊCH SỬ VÀ ĐỊA LÍ (LS-ĐL, LS, ĐL)
  else if (clean.includes("LS-ĐL") || clean === "LS" || clean === "ĐL" || clean.includes("Lịch sử") || clean.includes("Địa lí")) {
    subject = `LỊCH SỬ VÀ ĐỊA LÍ ${gradeNum}`;
    subSubject = clean.includes("ĐL") && !clean.includes("LS") ? "Địa lí" : (clean.includes("LS") && !clean.includes("ĐL") ? "Lịch sử" : "Lịch sử và Địa lí");
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "lịch sử và địa lí", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục lòng yêu nước, bảo vệ chủ quyền biên giới & biển đảo";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 10. TỰ NHIÊN VÀ XÃ HỘI (TNXH)
  else if (clean.includes("TNXH") || (clean.includes("Phước") && clean.includes("TNXH"))) {
    subject = `TỰ NHIÊN VÀ XÃ HỘI ${gradeNum}`;
    if (!note) note = "GV Bộ môn: Thầy Phước";
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "tự nhiên và xã hội", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp giáo dục môi trường & chăm sóc sức khỏe";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 11. KHOA HỌC (KH)
  else if (clean === "KH" || clean.includes("Khoa học")) {
    subject = `KHOA HỌC ${gradeNum}`;
    const pInW = subjectPeriodInWeek || ((day === "Thứ Hai" || day === "Thứ Ba") ? 1 : 2);
    const info = getGradeCurriculumLesson(gradeNum, "khoa học", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Tích hợp tư duy khoa học thực nghiệm & STEM";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 12. ĐẠO ĐỨC (ĐĐ)
  else if (clean.includes("ĐĐ") || clean.includes("Đạo đức")) {
    subject = `ĐẠO ĐỨC ${gradeNum}`;
    if (!note && clean.includes("Quan")) note = "PHT: Phan Ngọc Quan";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "đạo đức", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "Giáo dục đạo đức & Quyền con người";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 13. TĂNG CƯỜNG TIẾNG VIỆT (TCTV)
  else if (clean === "TCTV" || clean.includes("TCTV") || clean.includes("T. cường TV") || clean.includes("T.cường TV")) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    subSubject = "Tăng cường Tiếng Việt";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tctv", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod || `TCTV${pInW}`;
    integrationNotes = info.integrationNotes || "Rèn luyện kĩ năng đọc, viết và diễn đạt lưu loát";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 14. TĂNG CƯỜNG TOÁN (TCT)
  else if (clean === "TCT" || clean.includes("TCT") || clean.includes("T. cường T") || clean.includes("T.cường T")) {
    subject = `TOÁN ${gradeNum}`;
    subSubject = "Tăng cường Toán";
    if (!note && clean.includes("Phước")) note = "GV Bộ môn: Thầy Phước";
    if (!note && clean.includes("Nhàn")) note = "GV Bộ môn: Cô Nhàn";
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tct", week, pInW);
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod || `TCT${pInW}`;
    integrationNotes = info.integrationNotes || "Củng cố kĩ năng tính toán và giải toán có lời văn";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 15. TIẾNG VIỆT (TV)
  else if (clean === "TV" || clean === "Tiếng Việt" || clean.includes("Tiếng Việt")) {
    subject = `TIẾNG VIỆT ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "tiếng việt", week, Math.min(pInW, 12));
    lessonTitle = info.lessonTitle;
    subSubject = info.subSubject || "";
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  // 16. TOÁN (T)
  else if (clean === "T" || clean === "Toán" || clean.includes("Toán")) {
    subject = `TOÁN ${gradeNum}`;
    const pInW = subjectPeriodInWeek || 1;
    const info = getGradeCurriculumLesson(gradeNum, "toán", week, Math.min(pInW, 5));
    lessonTitle = info.lessonTitle;
    curriculumPeriod = info.curriculumPeriod;
    integrationNotes = info.integrationNotes || "";
    actGV = info.actGV;
    actHS = info.actHS;
  }

  return {
    id: `item-${day}-${session}-${period}-${className}-${Math.random().toString(36).substring(2, 7)}`,
    day,
    dateStr,
    session,
    period,
    subject,
    subSubject,
    curriculumPeriod,
    lessonTitle,
    integrationNotes,
    note,
    teacherName,
    className,
    actGV,
    actHS,
  };
}
