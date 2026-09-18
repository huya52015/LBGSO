// Helper utilities for calculating weekly dates and school calendar periods
// Standard base start date for Week 1: 07/09/2026 (Monday)
// Total study weeks: 35 weeks (Ministry of Education & Training GDPT 2018 standards)
// Lunar New Year Holiday (Nghỉ Tết Nguyên Đán Đinh Mùi 2027): 2 weeks (14 days) after Week 20

export interface WeekDateInfo {
  week: number;
  startDate: string; // DD/MM/YYYY (Monday)
  endDate: string;   // DD/MM/YYYY (Friday)
  dates: string[];   // Array of 5 dates: [Monday, Tuesday, Wednesday, Thursday, Friday]
  formattedRange: string; // "07/09/2026 - 11/09/2026"
  semester: 1 | 2;   // Học kỳ I (1-18) hoặc Học kỳ II (19-35)
  isPostTet?: boolean; // Các tuần sau Tết (Tuần 21 trở đi) đã cộng bù 2 tuần nghỉ Tết
  note?: string;
}

export interface TetHolidayInfo {
  name: string;
  durationWeeks: number;
  durationDays: number;
  startDate: string; // DD/MM/YYYY
  endDate: string;   // DD/MM/YYYY
  afterWeek: number; // Nghỉ sau tuần 20
  description: string;
}

export const TET_HOLIDAY_2027: TetHolidayInfo = {
  name: "Nghỉ Tết Nguyên Đán Đinh Mùi 2027",
  durationWeeks: 2,
  durationDays: 14,
  startDate: "25/01/2027",
  endDate: "07/02/2027",
  afterWeek: 20,
  description: "Nghỉ 2 tuần từ 25/01/2027 đến hết 07/02/2027 (Mùng 1 Tết là ngày 06/02/2027)",
};

/**
 * Calculates start and end dates for a given school week (1 -> 35).
 * - Tuần 1: 07/09/2026 -> 11/09/2026
 * - Tuần 2: 14/09/2026 -> 18/09/2026
 * - ...
 * - Tuần 20: 18/01/2027 -> 22/01/2027
 * - [2 TUẦN NGHỈ TẾT NGUYÊN ĐÁN ĐINH MÙI: 25/01/2027 -> 07/02/2027 (+14 ngày offset)]
 * - Tuần 21: 08/02/2027 -> 12/02/2027 (bắt đầu lại sau 2 tuần nghỉ Tết)
 * - ...
 * - Tuần 35: 17/05/2027 -> 21/05/2027 (Hoàn thành năm học trước 31/05)
 */
export function getWeekDateRange(week: number = 1, baseStartDateStr: string = "07/09/2026"): WeekDateInfo {
  const parts = baseStartDateStr.split(/[\/\-]/);
  const baseDay = parseInt(parts[0], 10) || 7;
  const baseMonth = parseInt(parts[1], 10) || 9;
  const baseYear = parts[2] ? parseInt(parts[2], 10) : 2026;

  const validWeek = Math.max(1, Math.min(35, Math.round(week)));

  // Base offset: (week - 1) * 7 days
  let offsetDays = (validWeek - 1) * 7;

  // After Week 20, add 14 days (2 weeks of Lunar New Year holiday break)
  const isPostTet = validWeek > TET_HOLIDAY_2027.afterWeek;
  if (isPostTet) {
    offsetDays += TET_HOLIDAY_2027.durationDays;
  }

  // Month in JS Date is 0-indexed: 9 -> 8
  const monday = new Date(baseYear, baseMonth - 1, baseDay + offsetDays);

  const dates = Array.from({ length: 5 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  });

  const startDate = dates[0];
  const endDate = dates[4];
  const semester: 1 | 2 = validWeek <= 18 ? 1 : 2;

  let note = "";
  if (validWeek === 20) {
    note = "Tuần 20 (Chuẩn bị nghỉ Tết 2 tuần)";
  } else if (validWeek === 21) {
    note = "Tuần 21 (Bắt đầu sau 2 tuần nghỉ Tết Nguyên Đán)";
  } else if (validWeek === 35) {
    note = "Tuần 35 (Tổng kết năm học 2026 - 2027)";
  }

  return {
    week: validWeek,
    startDate,
    endDate,
    dates,
    formattedRange: `${startDate} - ${endDate}`,
    semester,
    isPostTet,
    note,
  };
}

/**
 * Returns an array of all 35 study weeks in the 2026 - 2027 school year,
 * with accurate dates, semester division, and Tết holiday integration.
 */
export function getAll35Weeks(): WeekDateInfo[] {
  return Array.from({ length: 35 }, (_, i) => getWeekDateRange(i + 1, "07/09/2026"));
}

/**
 * Automatically detects the current school week from a given date (defaults to today).
 * Checks if the date falls in Weeks 1-35 or within the 2-week Tết holiday break.
 */
export function detectCurrentSchoolWeek(referenceDate: Date = new Date()): {
  week: number;
  isTetBreak: boolean;
  message: string;
  weekInfo: WeekDateInfo;
} {
  const refTime = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate()).getTime();

  // Parse Base Monday: 07/09/2026
  const baseStart = new Date(2026, 8, 7).getTime(); // 07/09/2026

  // If before school starts
  if (refTime < baseStart) {
    const w1 = getWeekDateRange(1);
    return {
      week: 1,
      isTetBreak: false,
      message: "Chưa tới ngày khai giảng (07/09/2026) • Mặc định Tuần 1",
      weekInfo: w1,
    };
  }

  // Parse Tet Holiday Range: 25/01/2027 -> 07/02/2027
  const tetStart = new Date(2027, 0, 25).getTime(); // 25/01/2027
  const tetEnd = new Date(2027, 1, 7, 23, 59, 59).getTime(); // 07/02/2027

  if (refTime >= tetStart && refTime <= tetEnd) {
    const w20 = getWeekDateRange(20);
    return {
      week: 20,
      isTetBreak: true,
      message: "🌸 Đang trong thời gian 2 tuần Nghỉ Tết Nguyên Đán Đinh Mùi (25/01/2027 - 07/02/2027)",
      weekInfo: w20,
    };
  }

  // Check which week 1 -> 35
  const allWeeks = getAll35Weeks();
  for (const w of allWeeks) {
    const [sDay, sMonth, sYear] = w.startDate.split("/").map(Number);
    const [eDay, eMonth, eYear] = w.endDate.split("/").map(Number);
    // Sunday of the week is endDate + 2 days
    const mondayTime = new Date(sYear, sMonth - 1, sDay).getTime();
    const sundayTime = new Date(eYear, eMonth - 1, eDay + 2, 23, 59, 59).getTime();

    if (refTime >= mondayTime && refTime <= sundayTime) {
      return {
        week: w.week,
        isTetBreak: false,
        message: `Hôm nay thuộc Tuần ${w.week} (${w.formattedRange})`,
        weekInfo: w,
      };
    }
  }

  // If beyond Week 35
  const lastWeek = allWeeks[allWeeks.length - 1];
  const [lastDay, lastMonth, lastYear] = lastWeek.endDate.split("/").map(Number);
  const endSchoolYear = new Date(lastYear, lastMonth - 1, lastDay).getTime();

  if (refTime > endSchoolYear) {
    return {
      week: 35,
      isTetBreak: false,
      message: "Đã hoàn thành 35 tuần năm học 2026 - 2027 • Tuần 35",
      weekInfo: lastWeek,
    };
  }

  // Fallback to Week 2 if around September 2026
  const defaultWeek = getWeekDateRange(2);
  return {
    week: 2,
    isTetBreak: false,
    message: "Thời gian mặc định: Tuần 2",
    weekInfo: defaultWeek,
  };
}

/**
 * Calculates 5 weekday dates (Monday to Friday) from a given startDate (e.g. "14/09/2026")
 */
export function calculateWeekDates(startDateStr: string = "07/09/2026"): string[] {
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
  return ["07/09/2026", "08/09/2026", "09/09/2026", "10/09/2026", "11/09/2026"];
}

/**
 * Returns formatted label: "Thứ Hai (14/09/2026)"
 */
export function formatDayWithDate(dayName: string, dateStr: string): string {
  return `${dayName} (${dateStr})`;
}
