import { Grade } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { findGrade5Integration } from "./grade5IntegrationPlan";
import {
  TV5_LESSONS, TOAN5_LESSONS, KH5_LESSONS, LSDL5_LESSONS, DD5_LESSONS, CN5_LESSONS, HDTN5_LESSONS, GDTC5_LESSONS, TCTV5_LESSONS, TCT5_LESSONS
} from "./curriculumKHDHGrade5";
import {
  TV4_LESSONS, TOAN4_LESSONS, KH4_LESSONS, LSDL4_LESSONS, DD4_LESSONS, CN4_LESSONS, HDTN4_LESSONS, TCTV4_LESSONS, TCT4_LESSONS
} from "./curriculumKHDHGrade4";
import {
  TV3_LESSONS, TOAN3_LESSONS, TNXH3_LESSONS, DD3_LESSONS, HDTN3_LESSONS, CN3_LESSONS, TH3_LESSONS, TCTV3_LESSONS, TCT3_LESSONS
} from "./curriculumKHDHGrade3";
import {
  TV1_LESSONS, TOAN1_LESSONS, TNXH1_LESSONS, DD1_LESSONS, HDTN1_LESSONS, TCTV1_LESSONS, TCT1_LESSONS
} from "./curriculumKHDHGrade1";
import {
  TV2_LESSONS, TOAN2_LESSONS, TNXH2_LESSONS, DD2_LESSONS, HDTN2_LESSONS, TCTV2_LESSONS, TCT2_LESSONS
} from "./curriculumKHDHGrade2";

export interface LessonInfo {
  lessonTitle: string;
  subSubject?: string;
  curriculumPeriod: number | string;
  songTitle?: string;
  composer?: string;
  songLyrics?: string;
  integrationNotes?: string;
  specificCompetencies?: string[];
  aiIntegration?: string;
  digitalCompetence?: string;
  humanRights?: string;
  defense?: string;
  nutrition?: string;
  environment?: string;
  stem?: string;
  lifeSkills?: string;
  teacherMaterials?: string[];
  studentMaterials?: string[];
  act1Teacher?: string;
  act1Student?: string;
  act2Teacher?: string;
  act2Student?: string;
  act3Teacher?: string;
  act3Student?: string;
  act4Teacher?: string;
  act4Student?: string;
  actGV?: string;
  actHS?: string;
}

// -------------------------------------------------------------
// KHỐI 1 CURRICULUM MAPPING (Tuần 1 - Tuần 35)
// -------------------------------------------------------------
export const GRADE_1_CURRICULUM: Record<string, (week: number, periodInWeek: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = TV1_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: itm.sub,
        curriculumPeriod: (week - 1) * 12 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    const bàiNum = (week - 1) * 5 + Math.ceil(p / 2);
    return {
      lessonTitle: `Bài ${bàiNum}: Luyện đọc & Luyện viết âm vần mới (Tiết ${(p % 2) + 1})`,
      subSubject: "Âm vần",
      curriculumPeriod: (week - 1) * 12 + p,
      integrationNotes: "Tích hợp rèn phát âm chuẩn và kỹ năng viết đúng chính tả."
    };
  },

  "toán": (week: number, p: number) => {
    const list = TOAN1_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Bài toán tuần ${week} - Tiết ${p}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Rèn luyện tư duy số học và kỹ năng tính toán."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = TNXH1_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Bài học TNXH tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khám phá tự nhiên và môi trường sống xung quanh em."
    };
  },

  "đạo đức": (week: number) => {
    const itm = DD1_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Bài đạo đức tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Giáo dục chuẩn mực hành vi đạo đức và phẩm chất tốt đẹp."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const itm = HDTN1_LESSONS[week];
    if (itm) {
      const title = p === 1 ? itm.shdc : p === 2 ? itm.gdcd : itm.shl;
      return {
        lessonTitle: title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note
      };
    }
    return {
      lessonTitle: p === 1 ? `Sinh hoạt dưới cờ tuần ${week}` : p === 2 ? `HĐGDCĐ theo chủ đề tuần ${week}` : `Sinh hoạt lớp tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Phát triển năng lực thích ứng và kỹ năng hoạt động xã hội."
    };
  },

  "tctv": (week: number, p: number) => {
    const list = TCTV1_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Tiếng Việt",
        curriculumPeriod: `TCTV${p}`,
        integrationNotes: itm.note
      };
    }
    return {
      lessonTitle: `TCTV (Tiết ${p}): Luyện tập Tiếng Việt tuần ${week}`,
      subSubject: "Tăng cường Tiếng Việt",
      curriculumPeriod: `TCTV${p}`,
      integrationNotes: "Rèn kĩ năng đọc, viết và diễn đạt câu."
    };
  },

  "tct": (week: number, p: number) => {
    const list = TCT1_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Toán",
        curriculumPeriod: `TCT${p}`,
        integrationNotes: itm.note
      };
    }
    return {
      lessonTitle: `TCT (Tiết ${p}): Luyện tập thực hành Toán tuần ${week}`,
      subSubject: "Tăng cường Toán",
      curriculumPeriod: `TCT${p}`,
      integrationNotes: "Củng cố kĩ năng đếm, tính toán và giải toán."
    };
  }
};

// -------------------------------------------------------------
// KHỐI 2 CURRICULUM MAPPING (Tuần 1 - Tuần 35)
// -------------------------------------------------------------
export const GRADE_2_CURRICULUM: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = TV2_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: itm.sub,
        curriculumPeriod: (week - 1) * 10 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Tiếng Việt 2 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 10 + p,
      integrationNotes: "Phát triển năng lực ngôn ngữ và cảm thụ văn học tiểu học."
    };
  },

  "toán": (week: number, p: number) => {
    const list = TOAN2_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 5 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Toán 2 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Rèn luyện tư duy logic và kỹ năng giải toán lớp 2."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = TNXH2_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Bài học TNXH 2 tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khám phá tự nhiên và môi trường sống lớp 2."
    };
  },

  "đạo đức": (week: number) => {
    const itm = DD2_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Đạo đức 2 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Rèn luyện nhân cách và lối sống văn minh."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const itm = HDTN2_LESSONS[week];
    if (itm) {
      const title = p === 1 ? itm.shdc : p === 2 ? itm.gdcd : itm.shl;
      return {
        lessonTitle: title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}` : p === 2 ? `HĐGDCĐ Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Trải nghiệm rèn nếp sống và kỹ năng công dân số."
    };
  },

  "tctv": (week: number, p: number) => {
    const list = TCTV2_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Tiếng Việt",
        curriculumPeriod: `TCTV${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCTV (Tiết ${p}): Luyện tập Tiếng Việt 2 tuần ${week}`,
      subSubject: "Tăng cường Tiếng Việt",
      curriculumPeriod: `TCTV${p}`,
      integrationNotes: "Rèn kĩ năng đọc trơn, viết đúng chính tả."
    };
  },

  "tct": (week: number, p: number) => {
    const list = TCT2_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Toán",
        curriculumPeriod: `TCT${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCT (Tiết ${p}): Luyện tập thực hành Toán 2 tuần ${week}`,
      subSubject: "Tăng cường Toán",
      curriculumPeriod: `TCT${p}`,
      integrationNotes: "Củng cố phép cộng, trừ có nhớ và giải toán."
    };
  }
};

// -------------------------------------------------------------
// KHỐI 4 CURRICULUM MAPPING (Tuần 1 - Tuần 35)
// -------------------------------------------------------------
export const GRADE_4_CURRICULUM: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = TV4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: itm.sub,
        curriculumPeriod: (week - 1) * 7 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Tiếng Việt 4 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Phát triển toàn diện năng lực Đọc - Viết - Nói & Nghe lớp 4."
    };
  },

  "toán": (week: number, p: number) => {
    const list = TOAN4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 5 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Toán 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Phát triển tư duy logic và kỹ năng toán học lớp 4."
    };
  },

  "khoa học": (week: number, p: number) => {
    const list = KH4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Khoa học 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khám phá khoa học tự nhiên theo chương trình GDPT 2018."
    };
  },

  "lịch sử và địa lí": (week: number, p: number) => {
    const list = LSDL4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Lịch sử & Địa lí 4 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Bồi dưỡng lòng yêu nước và hiểu biết địa lí quê hương."
    };
  },

  "đạo đức": (week: number) => {
    const itm = DD4_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Đạo đức 4 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Bồi dưỡng phẩm chất nhân ái, trung thực, trách nhiệm."
    };
  },

  "công nghệ": (week: number) => {
    const itm = CN4_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Công nghệ 4 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Ứng dụng kỹ thuật trồng trọt và công nghệ đời sống."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const itm = HDTN4_LESSONS[week];
    if (itm) {
      const title = p === 1 ? itm.shdc : p === 2 ? itm.gdcd : itm.shl;
      return {
        lessonTitle: title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: p === 1 ? `HĐ SHDC Tuần ${week}` : p === 2 ? `HĐ GDTCĐ Tuần ${week}` : `HĐ SHL Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Rèn luyện phẩm chất và kỹ năng sống học đường."
    };
  },

  "tctv": (week: number, p: number) => {
    const list = TCTV4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Tiếng Việt",
        curriculumPeriod: `TCTV${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCTV (Tiết ${p}): Luyện tập Tiếng Việt 4 tuần ${week}`,
      subSubject: "Tăng cường Tiếng Việt",
      curriculumPeriod: `TCTV${p}`,
      integrationNotes: "Rèn kĩ năng viết đoạn văn và ngữ pháp."
    };
  },

  "tct": (week: number, p: number) => {
    const list = TCT4_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Toán",
        curriculumPeriod: `TCT${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCT (Tiết ${p}): Luyện tập thực hành Toán 4 tuần ${week}`,
      subSubject: "Tăng cường Toán",
      curriculumPeriod: `TCT${p}`,
      integrationNotes: "Củng cố phép tính và giải bài toán có lời văn."
    };
  }
};

// -------------------------------------------------------------
// KHỐI 5 CURRICULUM MAPPING (Tuần 1 - Tuần 35)
// -------------------------------------------------------------
export const GRADE_5_CURRICULUM: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = TV5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: itm.sub,
        curriculumPeriod: (week - 1) * 7 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Tiếng Việt 5 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Chuẩn kiến thức kỹ năng Tiếng Việt 5 GDPT 2018."
    };
  },

  "toán": (week: number, p: number) => {
    const list = TOAN5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 5 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Toán 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán học ứng dụng và tư duy phân số, số thập phân."
    };
  },

  "khoa học": (week: number, p: number) => {
    const list = KH5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Khoa học 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khám phá khoa học tự nhiên lớp 5."
    };
  },

  "lịch sử và địa lí": (week: number, p: number) => {
    const list = LSDL5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Lịch sử & Địa lí 5 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Lịch sử hào hùng và địa lí Việt Nam."
    };
  },

  "đạo đức": (week: number) => {
    const itm = DD5_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Đạo đức 5 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Bồi dưỡng phẩm chất công dân toàn cầu."
    };
  },

  "công nghệ": (week: number) => {
    const itm = CN5_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Công nghệ 5 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Khám phá kỹ thuật và công nghệ ứng dụng."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const itm = HDTN5_LESSONS[week];
    if (itm) {
      const title = p === 1 ? itm.shdc : p === 2 ? itm.gdcd : itm.shl;
      return {
        lessonTitle: title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}` : p === 2 ? `HĐGDCĐ Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Hoạt động trải nghiệm sáng tạo và rèn luyện kỹ năng."
    };
  },

  "tctv": (week: number, p: number) => {
    const list = TCTV5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Tiếng Việt",
        curriculumPeriod: `TCTV${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCTV (Tiết ${p}): Luyện tập Tiếng Việt 5 tuần ${week}`,
      subSubject: "Tăng cường Tiếng Việt",
      curriculumPeriod: `TCTV${p}`,
      integrationNotes: "Rèn kĩ năng viết bài văn và phân tích ngôn từ."
    };
  },

  "tct": (week: number, p: number) => {
    const list = TCT5_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Toán",
        curriculumPeriod: `TCT${p}`,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TCT (Tiết ${p}): Luyện tập thực hành Toán 5 tuần ${week}`,
      subSubject: "Tăng cường Toán",
      curriculumPeriod: `TCT${p}`,
      integrationNotes: "Củng cố phân số, số thập phân và giải toán tỉ lệ."
    };
  }
};

// -------------------------------------------------------------
// KHỐI 3 CURRICULUM MAPPING (Tuần 1 - Tuần 35)
// -------------------------------------------------------------
export const GRADE_3_CURRICULUM: Record<string, (week: number, p: number) => LessonInfo> = {
  "tiếng việt": (week: number, p: number) => {
    const list = TV3_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: itm.sub,
        curriculumPeriod: (week - 1) * 7 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Tiếng Việt 3 - Tuần ${week} (Tiết ${p})`,
      subSubject: p % 2 === 1 ? "Đọc" : "Viết",
      curriculumPeriod: (week - 1) * 7 + p,
      integrationNotes: "Chương trình Tiếng Việt 3 Kết nối tri thức."
    };
  },

  "toán": (week: number, p: number) => {
    const list = TOAN3_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 5 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Toán 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 5 + p,
      integrationNotes: "Toán lớp 3 GDPT 2018."
    };
  },

  "tự nhiên và xã hội": (week: number, p: number) => {
    const list = TNXH3_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        curriculumPeriod: (week - 1) * 2 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `TNXH 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: (week - 1) * 2 + p,
      integrationNotes: "Khám phá tự nhiên và xã hội lớp 3."
    };
  },

  "đạo đức": (week: number) => {
    const itm = DD3_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Đạo đức 3 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Bồi dưỡng phẩm chất đạo đức lớp 3."
    };
  },

  "hoạt động trải nghiệm": (week: number, p: number) => {
    const itm = HDTN3_LESSONS[week];
    if (itm) {
      const title = p === 1 ? itm.shdc : p === 2 ? itm.gdcd : itm.shl;
      return {
        lessonTitle: title,
        curriculumPeriod: (week - 1) * 3 + p,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: p === 1 ? `SHDC Tuần ${week}` : p === 2 ? `HĐGDCĐ Tuần ${week}` : `Sinh hoạt lớp Tuần ${week}`,
      curriculumPeriod: (week - 1) * 3 + p,
      integrationNotes: "Rèn luyện nếp sống và kỹ năng xã hội."
    };
  },

  "công nghệ": (week: number) => {
    const itm = CN3_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Công nghệ 3 - Tuần ${week}`,
      curriculumPeriod: week,
      integrationNotes: "Tự nhiên và công nghệ ứng dụng."
    };
  },

  "tin học": (week: number, p: number) => {
    const itm = TH3_LESSONS[week];
    if (itm) {
      return {
        lessonTitle: itm.title,
        curriculumPeriod: week,
        integrationNotes: itm.note,
        actGV: (itm as any).actGV,
        actHS: (itm as any).actHS
      };
    }
    return {
      lessonTitle: `Tin học 3 - Tuần ${week} (Tiết ${p})`,
      curriculumPeriod: week,
      integrationNotes: "Tích hợp năng lực số CV 3456."
    };
  },

  "tctv": (week: number, p: number) => {
    const list = TCTV3_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Tiếng Việt",
        curriculumPeriod: `TCTV${p}`,
        integrationNotes: itm.note
      };
    }
    return {
      lessonTitle: `TCTV (Tiết ${p}): Luyện tập Tiếng Việt 3 tuần ${week}`,
      subSubject: "Tăng cường Tiếng Việt",
      curriculumPeriod: `TCTV${p}`,
      integrationNotes: "Rèn kĩ năng đọc hiểu và viết câu đoạn."
    };
  },

  "tct": (week: number, p: number) => {
    const list = TCT3_LESSONS[week];
    if (list && list[p - 1]) {
      const itm = list[p - 1];
      return {
        lessonTitle: itm.title,
        subSubject: "Tăng cường Toán",
        curriculumPeriod: `TCT${p}`,
        integrationNotes: itm.note
      };
    }
    return {
      lessonTitle: `TCT (Tiết ${p}): Luyện tập thực hành Toán 3 tuần ${week}`,
      subSubject: "Tăng cường Toán",
      curriculumPeriod: `TCT${p}`,
      integrationNotes: "Củng cố tính toán và giải toán có lời văn."
    };
  }
};

// -------------------------------------------------------------
// SPECIALIST SUBJECT CURRICULUM (Môn Chuyên theo từng khối)
// -------------------------------------------------------------
export function getSpecialistLessonInfo(
  specialistSubject: string,
  grade: Grade,
  week: number,
  periodInWeek: number
): LessonInfo {
  const subLower = specialistSubject.toLowerCase();

  // 1. TIẾNG ANH (Lớp 1, 2, 3, 4, 5)
  if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower.includes("ta")) {
    const curP = (week - 1) * 4 + ((periodInWeek - 1) % 4) + 1;
    if (grade === 1) {
      const units1 = ["School Things", "Colors", "Numbers 1-5", "Family", "My Body", "Animals", "Toys", "Food"];
      const uName = units1[(week - 1) % units1.length];
      return {
        lessonTitle: `Unit ${Math.min(week, 8)}: ${uName} - Lesson ${((periodInWeek - 1) % 2) + 1}`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp nhận biết âm thanh và từ vựng Tiếng Anh 1 sinh động.",
        specificCompetencies: [
          `Nhận diện và phát âm chuẩn các từ vựng chủ đề ${uName} trong Tiếng Anh 1.`,
          "Hào hứng tham gia các trò chơi ngôn ngữ, vận động theo bài hát Tiếng Anh."
        ]
      };
    }
    if (grade === 2) {
      const units2 = ["In the Classroom", "My House", "At the Zoo", "My Birthday", "Shapes", "Clothes", "Sports", "Activities"];
      const uName = units2[(week - 1) % units2.length];
      return {
        lessonTitle: `Unit ${Math.min(week, 8)}: ${uName} - Lesson ${((periodInWeek - 1) % 2) + 1}`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp học qua chơi (STEM / Play-based learning).",
        specificCompetencies: [
          `Nắm vững từ vựng và mẫu câu giao tiếp đơn giản chủ đề ${uName}.`,
          "Tự tin đối thoại theo cặp và phản xạ với giáo viên."
        ]
      };
    }
    if (grade === 3) {
      return {
        lessonTitle: `Unit ${Math.min(week, 10)}: My School & Friends - Lesson ${((periodInWeek - 1) % 3) + 1} (Vocabulary & Phonics)`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp trò chơi tương tác số, rèn luyện 4 kỹ năng Nghe - Nói - Đọc - Viết."
      };
    }
    if (grade === 4) {
      return {
        lessonTitle: `Unit ${Math.min(week, 10)}: My Week & Daily Activities - Lesson ${((periodInWeek - 1) % 3) + 1} (Communication & Grammar)`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS: Sử dụng thẻ từ vựng số Flashcard, luyện phát âm chuẩn."
      };
    }
    // Grade 5
    const g5Ta = findGrade5Integration("Tiếng Anh", week, periodInWeek);
    return {
      lessonTitle: g5Ta?.lessonTitle || `Unit ${Math.min(week, 10)}: All About Us & Life Skills - Lesson ${((periodInWeek - 1) % 3) + 1} (Grammar & Skills)`,
      curriculumPeriod: curP,
      integrationNotes: g5Ta ? `${g5Ta.integrationCode}: ${g5Ta.description}` : "Tích hợp AI: Phát âm chuẩn xác qua giọng đọc máy (1.A1.1), NLS 1.1.CB1a."
    };
  }

  // 2. TIN HỌC (Lớp 1-5)
  if (subLower.includes("tin học") || subLower.includes("th")) {
    const curP = (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1;
    if (grade <= 2) {
      return {
        lessonTitle: `Làm quen thế giới số: Trò chơi rèn luyện tư duy logic (Tiết ${((periodInWeek - 1) % 2) + 1})`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp phát triển Năng lực số (CV 3456) và an toàn thiết bị điện tử."
      };
    }
    if (grade === 3) {
      return {
        lessonTitle: `Chủ đề ${Math.min(week, 6)}: Máy tính và em - Thao tác chuột và bàn phím (Tiết ${((periodInWeek - 1) % 2) + 1})`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS 1.1.CB1a: Khám phá thiết bị số an toàn, bảo vệ mắt."
      };
    }
    if (grade === 4) {
      return {
        lessonTitle: `Chủ đề ${Math.min(week, 6)}: Soạn thảo văn bản và chèn hình ảnh minh họa (Tiết ${((periodInWeek - 1) % 2) + 1})`,
        curriculumPeriod: curP,
        integrationNotes: "Tích hợp NLS: Kỹ năng định dạng tài liệu số chuẩn A4, bảo mật thông tin."
      };
    }
    const g5Th = findGrade5Integration("Tin học", week, periodInWeek);
    return {
      lessonTitle: g5Th?.lessonTitle || `Chủ đề ${Math.min(week, 6)}: Khám phá thế giới số & Ứng dụng AI trong học tập (Tiết ${((periodInWeek - 1) % 2) + 1})`,
      curriculumPeriod: curP,
      integrationNotes: g5Th ? `${g5Th.integrationCode}: ${g5Th.description}` : "Tích hợp NLS (CV 3456): 1.1.CB1a, 5.2.CB1a, An toàn thông tin mạng."
    };
  }

  // 3. ÂM NHẠC
  if (subLower.includes("âm nhạc") || subLower.includes("an")) {
    const isEnhance = subLower.includes("tăng cường") || subLower.includes("bồi dưỡng") || subLower.includes("bdan") || subLower.includes("tcan") || periodInWeek > 1;
    const detail = getDetailedMusicLesson(grade, week, isEnhance, isEnhance ? "Chiều" : "Sáng");
    let integNotes = detail.integrationNotes;
    if (grade === 5) {
      const g5An = findGrade5Integration("Âm nhạc", week, periodInWeek);
      if (g5An) {
        integNotes = `${g5An.integrationCode}: ${g5An.description} (${detail.integrationNotes})`;
      }
    }
    return {
      lessonTitle: detail.lessonTitle,
      songTitle: detail.songTitle,
      composer: detail.composer,
      songLyrics: detail.songLyrics,
      curriculumPeriod: isEnhance ? `TC${week}` : week,
      integrationNotes: integNotes,
      specificCompetencies: detail.specificCompetencies,
      teacherMaterials: detail.teacherMaterials,
      studentMaterials: detail.studentMaterials,
      act1Teacher: detail.activities[0]?.teacherActivity,
      act1Student: detail.activities[0]?.studentActivity,
      act2Teacher: detail.activities[1]?.teacherActivity,
      act2Student: detail.activities[1]?.studentActivity,
      act3Teacher: detail.activities[2]?.teacherActivity,
      act3Student: detail.activities[2]?.studentActivity,
      act4Teacher: detail.activities[3]?.teacherActivity,
      act4Student: detail.activities[3]?.studentActivity,
    };
  }

  // 4. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower.includes("mỹ thuật") || subLower.includes("mt")) {
    if (grade === 5) {
      const g5Mt = findGrade5Integration("Mĩ thuật", week, periodInWeek);
      return {
        lessonTitle: g5Mt?.lessonTitle || `Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương Lớp 5 - Sáng tạo sản phẩm từ vật liệu tái chế`,
        curriculumPeriod: week,
        integrationNotes: g5Mt ? `${g5Mt.integrationCode}: ${g5Mt.description}` : "Tích hợp STEM: Tái chế rác thải nhựa, bảo vệ môi trường."
      };
    }
    return {
      lessonTitle: `Chủ đề ${Math.min(week, 8)}: Sắc màu quê hương Lớp ${grade} - Sáng tạo sản phẩm từ vật liệu tái chế`,
      curriculumPeriod: week,
      integrationNotes: "Tích hợp STEM: Tái chế rác thải nhựa, bảo vệ môi trường."
    };
  }

  // 5. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    if (grade === 5) {
      const g5Gdtc = findGrade5Integration("GDTC", week, periodInWeek);
      return {
        lessonTitle: g5Gdtc?.lessonTitle || `Bài tập phát triển chung & Đội hình đội ngũ Lớp 5 (Tiết ${((periodInWeek - 1) % 2) + 1})`,
        curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
        integrationNotes: g5Gdtc ? `${g5Gdtc.integrationCode}: ${g5Gdtc.description}` : "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
      };
    }
    return {
      lessonTitle: `Bài tập phát triển chung & Đội hình đội ngũ Lớp ${grade} (Tiết ${((periodInWeek - 1) % 2) + 1})`,
      curriculumPeriod: (week - 1) * 2 + ((periodInWeek - 1) % 2) + 1,
      integrationNotes: "Tích hợp GDDD: Lợi ích vận động và chế độ uống nước đầy đủ."
    };
  }

  // 6. HĐTN
  if (grade === 5) {
    const g5Hdtn = findGrade5Integration("HĐTN", week, periodInWeek);
    if (g5Hdtn) {
      return {
        lessonTitle: g5Hdtn.lessonTitle || `HĐTN Lớp 5 - Tuần ${week}`,
        curriculumPeriod: (week - 1) * 3 + periodInWeek,
        integrationNotes: `${g5Hdtn.integrationCode}: ${g5Hdtn.description}`
      };
    }
  }
  return {
    lessonTitle: `HĐTN Lớp ${grade} - Hoạt động giáo dục theo chủ đề tuần ${week}`,
    curriculumPeriod: week,
    integrationNotes: "Tích hợp rèn nếp sống tự lập và kỹ năng giao tiếp."
  };
}

// -------------------------------------------------------------
// SMART GENERATOR FOR PEDAGOGICAL ACTIVITIES (CV 2345/BGDĐT-GDTH)
// -------------------------------------------------------------
export function generateSmartKHDHActivities(
  lessonTitle: string,
  subject: string,
  grade: number,
  period: number | string,
  subSubject?: string
): { actGV: string; actHS: string } {
  const normSub = subject.toLowerCase().trim();
  const cleanTitle = lessonTitle.replace(/^Bài\s+\d+[:.]\s*/i, "").trim();

  if (normSub.includes("tiếng việt") || normSub === "tctv" || normSub.includes("tctv")) {
    const sub = (subSubject || "").toLowerCase();
    if (sub.includes("đọc") || cleanTitle.toLowerCase().includes("đọc")) {
      return {
        actGV: `1. Khởi động & Đọc mẫu (GV làm gì cho HS): GV cho HS quan sát tranh khởi động; đọc mẫu diễn cảm toàn bài "${cleanTitle}" với giọng truyền cảm, ngắt nghỉ đúng dấu câu; hướng dẫn chia đoạn và phát hiện từ ngữ khó đọc, câu dài cần nhấn giọng.
2. Luyện đọc nối tiếp theo nhóm: Tổ chức cho HS đọc nối tiếp từng đoạn trong nhóm đôi hoặc nhóm 4; GV đi vòng quanh lớp lắng nghe, kịp thời hướng dẫn sửa sai phát âm.
3. Hướng dẫn tìm hiểu bài: Nêu các câu hỏi đọc hiểu trong SGK; gợi ý từ khóa; chốt nội dung, ý nghĩa bài đọc và hướng dẫn đọc diễn cảm đoạn hay nhất.`,
        actHS: `1. Tiếp nhận & Theo dõi (HS làm nội dung gì): HS quan sát hình ảnh minh họa; dùng ngón tay/thước kẻ theo dõi GV đọc mẫu; luyện phát âm từ khó và ngắt nghỉ câu dài.
2. Luyện đọc theo nhóm: Lần lượt từng bạn đọc to một đoạn trong nhóm; lắng nghe, góp ý sửa phát âm cho bạn cùng nhóm.
3. Thảo luận & Đọc diễn cảm: Thảo luận nhóm trả lời các câu hỏi tìm hiểu bài trong SGK; xung phong phát biểu rút ra ý nghĩa bài đọc; luyện đọc diễn cảm với giọng điệu phù hợp.`
      };
    }
    if (sub.includes("từ và câu") || sub.includes("ltvc") || cleanTitle.toLowerCase().includes("ltvc")) {
      return {
        actGV: `1. Giao nhiệm vụ ngữ liệu (GV làm gì cho HS): GV đưa các ví dụ mẫu/ngữ liệu trong SGK lên bảng; hướng dẫn HS nhận diện từ loại, biện pháp nghệ thuật hoặc quy tắc ngữ pháp của bài "${cleanTitle}".
2. Hình thành quy tắc / Ghi nhớ: Đặt câu hỏi gợi mở để HS tự phát hiện và rút ra bài học ghi nhớ; chuẩn hóa định nghĩa kiến thức trọng tâm lên bảng.
3. Hướng dẫn thực hành & Chữa bài: Giao hệ thống bài tập 1, 2, 3 trong SGK; quan sát hỗ trợ HS gặp khó khăn; tổ chức trò chơi củng cố và chấm chữa bài.`,
        actHS: `1. Khám phá ngữ liệu (HS làm nội dung gì): Đọc kĩ các câu/đoạn văn mẫu trong SGK; dùng bút chì gạch chân từ ngữ hoặc dấu câu cần tìm hiểu; thảo luận nhóm đôi.
2. Phát biểu quy tắc: Xung phong phát biểu rút ra ghi nhớ; nhắc lại kiến thức trọng tâm trước lớp.
3. Luyện tập thực hành: Làm việc cá nhân hoàn thành các bài tập vào vở; đổi vở kiểm tra kết quả chéo với bạn cùng bàn; tự sửa lỗi theo lời chữa của GV.`
      };
    }
    if (sub.includes("viết") || sub.includes("chính tả") || sub.includes("tập làm văn") || cleanTitle.toLowerCase().includes("viết")) {
      return {
        actGV: `1. Phân tích yêu cầu đề bài (GV làm gì cho HS): GV nêu đề bài "${cleanTitle}"; hướng dẫn HS phân tích cấu trúc đoạn văn, bài văn hoặc quy tắc chính tả; gợi ý các ý chính và từ ngữ giàu hình ảnh.
2. Hướng dẫn viết bài: Nhắc nhở tư thế ngồi viết, cách trình bày thụt đầu dòng, sử dụng dấu câu và liên kết câu; bao quát lớp, hỗ trợ HS còn lúng túng.
3. Nhận xét & Chữa lỗi: Hướng dẫn tiêu chí đánh giá; mời 2-3 HS đọc bài viết; chấm chữa trực tiếp và chỉ ra các lỗi dùng từ, chính tả phổ biến để cả lớp rút kinh nghiệm.`,
        actHS: `1. Tiếp nhận nhiệm vụ (HS làm nội dung gì): Đọc kĩ đề bài và các câu hỏi gợi ý trong SGK; phác thảo nhanh dàn ý ra nháp.
2. Thực hành viết bài: Viết đoạn văn/bài văn hoàn chỉnh vào vở một cách nắn nót, cẩn thận; chú ý dùng từ gợi cảm và đặt câu đúng ngữ pháp.
3. Tự soát lỗi & Chia sẻ: Đọc lại toàn bộ bài viết, tự dùng bút chì sửa lỗi chính tả, dấu câu; đọc bài viết cho bạn bên cạnh nghe và góp ý.`
      };
    }
    return {
      actGV: `1. Nêu mục tiêu & Giao nhiệm vụ (GV làm gì cho HS): GV giới thiệu chủ đề "${cleanTitle}"; nêu rõ yêu cầu cần đạt về kĩ năng nói, nghe và chia sẻ trước tập thể.
2. Tổ chức thực hành: Hướng dẫn các bước chuẩn bị nội dung và phong thái tự tin khi giao tiếp; chia nhóm luyện nói; quan sát và khích lệ HS rụt rè.
3. Đánh giá & Rút kinh nghiệm: Mời đại diện các nhóm phát biểu/kể chuyện; hướng dẫn cả lớp nhận xét, đặt câu hỏi giao lưu; tuyên dương sự tiến bộ của HS.`,
      actHS: `1. Chuẩn bị nội dung (HS làm nội dung gì): Nhớ lại trải nghiệm hoặc câu chuyện liên quan đến chủ đề; ghi nhanh các từ khóa chính cần trình bày ra nháp.
2. Thực hành trong nhóm: Lần lượt từng bạn trình bày ý kiến hoặc kể chuyện trước nhóm; các thành viên khác chú ý lắng nghe và đặt câu hỏi.
3. Báo cáo trước lớp: Tự tin đứng trước lớp chia sẻ câu chuyện/ý kiến của mình; trả lời các câu hỏi giao lưu của thầy cô và bạn bè.`
    };
  }

  if (normSub.includes("toán") || normSub === "tct" || normSub.includes("tct")) {
    return {
      actGV: `1. Khởi động & Nêu tình huống xuất phát (GV làm gì cho HS): GV đưa ra bài toán thực tế hoặc trò chơi kết nối kiến thức bài "${cleanTitle}"; hướng dẫn HS quan sát mô hình, bảng số hoặc hình vẽ trực quan.
2. Khám phá kiến thức mới: Đặt câu hỏi dẫn dắt để HS phát hiện quy tắc tính, công thức hoặc tính chất toán học mới; chốt lại thuật toán chuẩn hóa lên bảng.
3. Hướng dẫn luyện tập & Chữa bài: Giao các bài tập thực hành trong SGK; hướng dẫn HS phân tích bài toán có lời văn (cho biết gì, hỏi gì); quan sát lớp, hướng dẫn HS lúng túng và chấm chữa bài chi tiết.`,
      actHS: `1. Quan sát & Khám phá (HS làm nội dung gì): Mở SGK, quan sát dữ liệu và suy nghĩ giải quyết tình huống xuất phát; thao tác trên đồ dùng học tập hoặc bảng con.
2. Rút ra quy tắc: Thảo luận nhóm đôi hoặc phát biểu cá nhân nêu cách làm, công thức vừa tìm được; nhắc lại quy tắc toán học.
3. Thực hành làm bài tập: Làm việc cá nhân giải bài tập 1, 2, 3 vào vở; 2 HS lên bảng làm bài; đổi vở kiểm tra kết quả chéo; tự chữa bài theo hướng dẫn của GV.`
    };
  }

  if (normSub.includes("khoa học") || normSub.includes("tự nhiên và xã hội") || normSub.includes("tnxh")) {
    return {
      actGV: `1. Khởi động & Đặt câu hỏi thắc mắc (GV làm gì cho HS): GV chiếu hình ảnh, video hoặc vật thật liên quan đến "${cleanTitle}"; gợi mở vấn đề kích thích trí tò mò khoa học của học sinh.
2. Hướng dẫn quan sát & Thí nghiệm: Phát phiếu học tập; hướng dẫn các nhóm tiến hành thí nghiệm đơn giản hoặc phân tích tranh ảnh trong SGK; theo dõi, bảo đảm an toàn cho HS.
3. Tổng kết & Vận dụng thực tế: Mời đại diện các nhóm báo cáo kết quả quan sát/thí nghiệm; GV chuẩn hóa kiến thức khoa học; liên hệ giáo dục bảo vệ môi trường, chăm sóc sức khỏe và ứng dụng vào đời sống.`,
      actHS: `1. Dự đoán ban đầu (HS làm nội dung gì): Quan sát mẫu vật/tranh ảnh trong SGK, đưa ra các phán đoán khoa học ban đầu về hiện tượng.
2. Làm việc nhóm: Phân công nhiệm vụ trong nhóm, tiến hành thao tác thí nghiệm hoặc quan sát chi tiết; ghi kết quả thảo luận vào phiếu học tập.
3. Báo cáo & Rút ra bài học: Đại diện nhóm tự tin trình bày kết quả; lắng nghe nhận xét từ nhóm bạn; nêu những việc làm cụ thể trong gia đình, trường học để vận dụng kiến thức.`
    };
  }

  if (normSub.includes("lịch sử") || normSub.includes("địa lí") || normSub.includes("lsdl") || normSub.includes("ls&đl")) {
    return {
      actGV: `1. Khởi động & Giới thiệu tư liệu (GV làm gì cho HS): GV giới thiệu bản đồ, lược đồ, tranh ảnh hiện vật lịch sử hoặc bảng số liệu địa lí về "${cleanTitle}"; hướng dẫn phương pháp khai thác thông tin.
2. Tổ chức tìm hiểu kiến thức: Giao nhiệm vụ cho các nhóm tìm hiểu diễn biến sự kiện, ý nghĩa nhân vật lịch sử hoặc đặc điểm địa hình, khí hậu, tài nguyên, đời sống con người; đi tới các nhóm hỗ trợ giải đáp.
3. Chuẩn hóa & Giáo dục lòng yêu nước: Mời đại diện các nhóm báo cáo; GV chuẩn hóa kiến thức, chỉ bản đồ/lược đồ; khắc sâu niềm tự hào dân tộc và tình yêu quê hương đất nước.`,
      actHS: `1. Khai thác tư liệu (HS làm nội dung gì): Quan sát bản đồ, tranh ảnh và đọc thông tin trong SGK; ghi nhớ các mốc thời gian, địa danh hoặc số liệu nổi bật.
2. Thảo luận nhóm: Cùng các bạn trong nhóm trao đổi, hoàn thành câu hỏi trong phiếu học tập; chuẩn bị nội dung thuyết trình.
3. Báo cáo & Bày tỏ cảm nghĩ: Cử đại diện lên bảng chỉ lược đồ/bản đồ và thuyết trình; nêu suy nghĩ, lòng biết ơn cha ông hoặc ý thức bảo vệ tài nguyên quê hương.`
    };
  }

  if (normSub.includes("đạo đức")) {
    return {
      actGV: `1. Khởi động & Khám phá chuẩn mực (GV làm gì cho HS): GV kể câu chuyện đạo đức, chiếu video tình huống liên quan đến "${cleanTitle}"; khơi gợi cảm xúc và hướng dẫn HS nhận diện hành vi chuẩn mực.
2. Hướng dẫn phân tích hành vi: Tổ chức thảo luận nhóm về các việc làm đúng/sai, ý nghĩa của hành vi văn minh đối với bản thân và cộng đồng; chốt bài học ghi nhớ.
3. Luyện tập xử lí tình huống & Vận dụng: Đưa ra các tình huống thực tế; tổ chức cho HS sắm vai xử lí tình huống; hướng dẫn HS lập kế hoạch tự rèn luyện hành vi hàng ngày.`,
      actHS: `1. Cảm thụ câu chuyện (HS làm nội dung gì): Lắng nghe, chia sẻ cảm xúc về cách ứng xử của nhân vật trong tình huống xuất phát.
2. Thảo luận & Đánh giá: Làm việc nhóm chỉ ra các biểu hiện của hành vi tốt, hành vi chưa tốt; giải thích vì sao cần thực hiện chuẩn mực đạo đức đó.
3. Sắm vai & Cam kết hành động: Tham gia sắm vai giải quyết tình huống; tự đề ra những việc làm cụ thể ở nhà và ở trường để thực hiện tốt lời dạy của bài học.`
    };
  }

  if (normSub.includes("hoạt động trải nghiệm") || normSub.includes("hđtn")) {
    return {
      actGV: `1. Khởi động & Nêu ý nghĩa chủ đề (GV làm gì cho HS): GV tổ chức trò chơi tập thể hoặc nghi thức tuần; giới thiệu ý nghĩa chủ đề trải nghiệm "${cleanTitle}".
2. Điều hành hoạt động trải nghiệm: Hướng dẫn các nhóm tham gia hoạt động rèn luyện kĩ năng sống, xây dựng nề nếp hoặc sáng tạo sản phẩm; động viên, khích lệ HS tích cực tham gia.
3. Đánh giá & Giao nhiệm vụ rèn luyện: Tổ chức cho HS tự đánh giá và đánh giá chéo; GV tổng kết, tuyên dương cá nhân/tổ xuất sắc; giao việc rèn luyện tại gia đình.`,
      actHS: `1. Tham gia nhiệt tình (HS làm nội dung gì): Hòa mình vào các hoạt động tập thể, trò chơi, bài hát của lớp với tinh thần hào hứng, đoàn kết.
2. Trải nghiệm kĩ năng: Thảo luận nhóm, thực hành các thao tác kĩ năng sống hoặc tạo ra sản phẩm chung của nhóm; tự tin chia sẻ cảm xúc trước tập thể.
3. Tự đánh giá & Cam kết: Tự đánh giá sự tiến bộ của bản thân sau tiết trải nghiệm; ghi nhớ các việc cần làm ở nhà và thực hiện nghiêm túc.`
    };
  }

  if (normSub.includes("công nghệ")) {
    return {
      actGV: `1. Khám phá vật thật & Quy trình (GV làm gì cho HS): GV giới thiệu sản phẩm công nghệ hoặc mẫu vật cây trồng liên quan đến "${cleanTitle}"; hướng dẫn HS phân tích các bước thực hiện kĩ thuật.
2. Hướng dẫn thao tác mẫu: GV thao tác mẫu chậm rãi từng bước kĩ thuật; nhấn mạnh các điểm cần chú ý về độ an toàn và thẩm mĩ; phát dụng cụ cho các nhóm.
3. Tổ chức thực hành & Đánh giá: Hướng dẫn HS thực hành; quan sát, sửa sai kịp thời; tổ chức trưng bày sản phẩm và đánh giá theo tiêu chí kĩ thuật.`,
      actHS: `1. Quan sát mẫu (HS làm nội dung gì): Chú ý theo dõi GV giới thiệu và thao tác mẫu; ghi nhớ trình tự các bước kĩ thuật.
2. Thực hành cá nhân/nhóm: Nhận dụng cụ, tự thực hiện các thao tác theo đúng quy trình; giúp đỡ bạn bên cạnh hoàn thành sản phẩm.
3. Trưng bày & Nhận xét: Đặt sản phẩm lên bàn trưng bày; cùng các bạn quan sát, nhận xét và bình chọn sản phẩm đẹp, đúng kĩ thuật nhất.`
    };
  }

  if (normSub.includes("tin học")) {
    return {
      actGV: `1. Nêu nhiệm vụ & Thao tác mẫu (GV làm gì cho HS): GV giới thiệu phần mềm hoặc chức năng mới trong bài "${cleanTitle}"; thao tác mẫu trên máy chiếu từng bước rõ ràng.
2. Giao bài thực hành máy tính: Hướng dẫn HS mở tệp, thực hiện theo phiếu hướng dẫn thực hành; bao quát phòng máy tính, hướng dẫn HS lúng túng thao tác chuột, bàn phím.
3. Nhận xét & Đánh giá sản phẩm: Chiếu sản phẩm của 2-3 HS lên màn hình lớn; nhận xét ưu điểm, chỉ ra lỗi thao tác và chốt kĩ năng trọng tâm.`,
      actHS: `1. Chú ý theo dõi (HS làm nội dung gì): Quan sát GV hướng dẫn trên màn hình chiếu; ghi nhớ các phím tắt và thao tác chuột cần thiết.
2. Thực hành trên máy tính: Tự giác thao tác trên máy tính của mình theo yêu cầu bài tập; trao đổi nhẹ nhàng với bạn cùng máy khi gặp khó khăn.
3. Lưu tệp & Báo cáo: Lưu sản phẩm vào thư mục học tập cá nhân; tự tin giới thiệu kết quả bài làm của mình.`
    };
  }

  // Fallback generic
  return {
    actGV: `1. Giao nhiệm vụ học tập (GV làm gì cho HS): GV giới thiệu mục tiêu bài học "${cleanTitle}"; nêu rõ các câu hỏi định hướng và yêu cầu cần đạt; hướng dẫn HS mở SGK trang tương ứng.
2. Hướng dẫn & Hỗ trợ: GV quan sát các nhóm làm việc, kịp thời phát hiện những khó khăn của học sinh để gợi ý, hướng dẫn giải quyết; khuyến khích các em tự tin phát biểu.
3. Nhận xét & Chốt kiến thức: Tổ chức cho HS báo cáo kết quả; chuẩn hóa câu trả lời, chốt nội dung trọng tâm của bài học và dặn dò HS chuẩn bị bài sau.`,
    actHS: `1. Tiếp nhận nhiệm vụ (HS làm nội dung gì): Mở SGK, quan sát dữ liệu/hình ảnh theo hướng dẫn của GV; lắng nghe và ghi nhớ yêu cầu bài tập.
2. Thao tác thực hiện: Làm việc cá nhân (suy nghĩ, viết nháp, tính toán, thao tác); tích cực trao đổi, thảo luận với bạn trong nhóm để thống nhất kết quả.
3. Báo cáo & Hoàn thiện: Cử đại diện trình bày kết quả trước lớp; lắng nghe ý kiến nhận xét của bạn và thầy cô; tự giác chữa bài cẩn thận vào vở.`
  };
}

function finalizeLessonActivities(
  info: LessonInfo,
  subject: string,
  grade: number,
  period: number | string
): LessonInfo {
  if (info.actGV && info.actHS) return info;
  const smart = generateSmartKHDHActivities(info.lessonTitle, subject, grade, period, info.subSubject);
  return {
    ...info,
    actGV: info.actGV || smart.actGV,
    actHS: info.actHS || smart.actHS,
  };
}

// -------------------------------------------------------------
// MASTER LOOKUP FUNCTION: GET EXACT LESSON BY GRADE & SUBJECT
// -------------------------------------------------------------
export function getGradeCurriculumLesson(
  grade: Grade,
  subject: string,
  week: number,
  periodInWeek: number = 1
): LessonInfo {
  const normSub = subject.toLowerCase().trim();

  // Pick curriculum dictionary by grade
  let gradeDict = GRADE_5_CURRICULUM;
  if (grade === 1) gradeDict = GRADE_1_CURRICULUM;
  else if (grade === 2) gradeDict = GRADE_2_CURRICULUM;
  else if (grade === 3) gradeDict = GRADE_3_CURRICULUM;
  else if (grade === 4) gradeDict = GRADE_4_CURRICULUM;
  else if (grade === 5) gradeDict = GRADE_5_CURRICULUM;

  // 1. Priority matching for TCTV & TCT to prevent collision with Tiếng Việt and Toán
  if (normSub === "tctv" || normSub.includes("tctv") || normSub.includes("tăng cường tiếng việt") || normSub.includes("t. cường tv") || normSub.includes("t.cường tv")) {
    if (gradeDict["tctv"]) {
      const res = gradeDict["tctv"](week, periodInWeek);
      return finalizeLessonActivities(res, "TCTV", grade, periodInWeek);
    }
  }
  if (normSub === "tct" || normSub.includes("tct") || normSub.includes("tăng cường toán") || normSub.includes("t. cường t") || normSub.includes("t.cường t")) {
    if (gradeDict["tct"]) {
      const res = gradeDict["tct"](week, periodInWeek);
      return finalizeLessonActivities(res, "TCT", grade, periodInWeek);
    }
  }

  // 2. Match regular subject keys (ordered by length descending so longer compound keys match first)
  const sortedEntries = Object.entries(gradeDict).sort((a, b) => b[0].length - a[0].length);
  for (const [key, fn] of sortedEntries) {
    if (normSub.includes(key) || key.includes(normSub)) {
      const res = fn(week, periodInWeek);
      // Synchronize Grade 5 official integration plan
      if (grade === 5) {
        const g5 = findGrade5Integration(subject, week, periodInWeek);
        if (g5) {
          if (!res.integrationNotes || !res.integrationNotes.includes(g5.integrationCode)) {
            res.integrationNotes = res.integrationNotes 
              ? `${g5.integrationCode}: ${g5.description} (${res.integrationNotes})`
              : `${g5.integrationCode}: ${g5.description}`;
          }
          if (res.lessonTitle.includes(`Tuần ${week}`) && g5.lessonTitle) {
            res.lessonTitle = g5.lessonTitle;
          }
        }
      }
      return finalizeLessonActivities(res, subject, grade, periodInWeek);
    }
  }

  // Fallback for specialist subjects
  if (normSub.includes("tiếng anh") || normSub.includes("anh văn") || normSub.includes("ta") ||
      normSub.includes("tin học") || normSub.includes("th") ||
      normSub.includes("âm nhạc") || normSub.includes("an") ||
      normSub.includes("mĩ thuật") || normSub.includes("mt") ||
      normSub.includes("thể chất") || normSub.includes("gdtc")) {
    const spec = getSpecialistLessonInfo(subject, grade, week, periodInWeek);
    return finalizeLessonActivities(spec, subject, grade, periodInWeek);
  }

  const g5Fallback = grade === 5 ? findGrade5Integration(subject, week, periodInWeek) : undefined;
  const fallbackRes = {
    lessonTitle: g5Fallback?.lessonTitle || `${subject} Lớp ${grade} - Bài học tuần ${week} (Tiết ${periodInWeek})`,
    curriculumPeriod: (week - 1) * 2 + periodInWeek,
    integrationNotes: g5Fallback 
      ? `${g5Fallback.integrationCode}: ${g5Fallback.description}`
      : `Tích hợp GDPT 2018 môn ${subject} Lớp ${grade}.`
  };
  return finalizeLessonActivities(fallbackRes, subject, grade, periodInWeek);
}
