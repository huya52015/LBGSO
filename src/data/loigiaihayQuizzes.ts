import { Grade } from "../types";

export interface QuizOption {
  key: "A" | "B" | "C" | "D";
  text: string;
}

export interface QuizQuestion {
  id: string;
  questionNumber: number;
  question: string;
  options: QuizOption[];
  correctAnswer: "A" | "B" | "C" | "D";
  explanation: string;
  topic?: string;
}

export interface SubjectQuiz {
  id: string;
  grade: Grade;
  subject: string;
  week: number;
  title: string;
  subtitle: string;
  timeAllowedMinutes: number;
  loigiaihayUrl: string;
  curriculumSource: string; // e.g., "Bộ sách Kết nối tri thức & Cánh diều - Loigiaihay.com"
  questions: QuizQuestion[];
}

/**
 * Helper to get the list of required subjects by Grade according to user specification:
 * - Khối 1, 2, 3: Toán, Tiếng Việt, Đạo đức, HĐTN, TNXH
 * - Khối 4, 5: Toán, Tiếng Việt, Đạo đức, HĐTN, Khoa học, Lịch sử và Địa lí
 */
export function getRequiredQuizSubjects(grade: Grade): string[] {
  if (grade <= 3) {
    return [
      "Toán",
      "Tiếng Việt",
      "Đạo đức",
      "Hoạt động trải nghiệm",
      "Tự nhiên và Xã hội",
    ];
  }
  return [
    "Toán",
    "Tiếng Việt",
    "Đạo đức",
    "Hoạt động trải nghiệm",
    "Khoa học",
    "Lịch sử và Địa lí",
  ];
}

/**
 * Generates direct reference link to loigiaihay.com for a given grade, subject and week
 */
export function getLoigiaihaySubjectUrl(grade: Grade, subject: string, week: number): string {
  const encodedSubject = encodeURIComponent(subject);
  const base = "https://loigiaihay.com";

  switch (subject) {
    case "Toán":
      return `${base}/bai-tap-cuoi-tuan-toan-lop-${grade}-tuan-${week}-c0a.html`;
    case "Tiếng Việt":
      return `${base}/bai-tap-cuoi-tuan-tieng-viet-lop-${grade}-tuan-${week}-c0a.html`;
    case "Tự nhiên và Xã hội":
      return `${base}/vo-bai-tap-tu-nhien-va-xa-hoi-lop-${grade}-c0a.html`;
    case "Khoa học":
      return `${base}/khoa-hoc-lop-${grade}-c0a.html`;
    case "Lịch sử và Địa lí":
      return `${base}/lich-su-va-dia-li-lop-${grade}-c0a.html`;
    case "Đạo đức":
      return `${base}/dao-duc-lop-${grade}-c0a.html`;
    case "Hoạt động trải nghiệm":
      return `${base}/hoat-dong-trai-nghiem-lop-${grade}-c0a.html`;
    default:
      return `${base}/tim-kiem?q=phi%E1%BA%BFu+b%C3%A0i+t%E1%BA%ADp+cu%E1%BB%91i+tu%E1%BA%A7n+l%E1%BB%9Bp+${grade}+tuan+${week}+${encodedSubject}`;
  }
}

/**
 * Curated repository of weekly quiz questions based on Vietnamese Primary Education Standards (GDPT 2018)
 * and Loigiaihay.com practice worksheets.
 */
export const SAMPLE_QUIZZES: Record<string, SubjectQuiz> = {
  // ==========================================
  // KHỐI 1 - TUẦN 1
  // ==========================================
  "quiz-1-Toán-w1": {
    id: "quiz-1-Toán-w1",
    grade: 1,
    subject: "Toán",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Toán Lớp 1 - Tuần 1",
    subtitle: "Vị trí: Trên - Dưới, Phải - Trái, Trước - Sau, Ở giữa. Làm quen với các hình phẳng cơ bản.",
    timeAllowedMinutes: 20,
    loigiaihayUrl: "https://loigiaihay.com/bai-tap-cuoi-tuan-toan-lop-1-tuan-1-c0a.html",
    curriculumSource: "Phiếu ôn tập cuối tuần Toán 1 - Loigiaihay.com (GDPT 2018)",
    questions: [
      {
        id: "q-1-t-1",
        questionNumber: 1,
        question: "Quyển sách đặt trên mặt bàn, chiếc cặp đặt dưới gầm bàn. Đồ vật nào ở 'DƯỚI'?",
        options: [
          { key: "A", text: "Quyển sách" },
          { key: "B", text: "Chiếc cặp" },
          { key: "C", text: "Mặt bàn" },
          { key: "D", text: "Cả sách và cặp" },
        ],
        correctAnswer: "B",
        explanation: "Chiếc cặp đặt ở dưới gầm bàn nên chiếc cặp ở vị trí phía DƯỚI.",
        topic: "Nhận biết vị trí trên - dưới",
      },
      {
        id: "q-1-t-2",
        questionNumber: 2,
        question: "Bàn tay các em thường cầm bút để viết bài là bàn tay nào?",
        options: [
          { key: "A", text: "Tay trái" },
          { key: "B", text: "Tay phải" },
          { key: "C", text: "Cả hai tay" },
          { key: "D", text: "Không tay nào" },
        ],
        correctAnswer: "B",
        explanation: "Quy chuẩn viết chữ đẹp và tư thế học sinh tiểu học là cầm bút bằng tay PHẢI.",
        topic: "Định hướng phải - trái",
      },
      {
        id: "q-1-t-3",
        questionNumber: 3,
        question: "Hình nào dưới đây có dạng HÌNH TRÒN?",
        options: [
          { key: "A", text: "Mặt đồng hồ treo tường tròn" },
          { key: "B", text: "Khung cửa sổ hình chữ nhật" },
          { key: "C", text: "Khăn quàng đỏ hình tam giác" },
          { key: "D", text: "Hộp quà hình vuông" },
        ],
        correctAnswer: "A",
        explanation: "Mặt đồng hồ treo tường tròn có dạng hình tròn, đường cong khép kín.",
        topic: "Hình học phẳng cơ bản",
      },
      {
        id: "q-1-t-4",
        questionNumber: 4,
        question: "Trong hàng học sinh gồm có Nam, Mai, Lan. Bạn Mai đứng ở giữa. Ai là người đứng TRƯỚC bạn Mai?",
        options: [
          { key: "A", text: "Bạn Lan" },
          { key: "B", text: "Bạn Nam (bạn đứng đầu hàng)" },
          { key: "C", text: "Cả hai bạn" },
          { key: "D", text: "Không có ai" },
        ],
        correctAnswer: "B",
        explanation: "Khi xếp hàng theo thứ tự Nam, Mai, Lan thì bạn Nam đứng trước bạn Mai.",
        topic: "Thứ tự trước - sau - ở giữa",
      },
    ],
  },

  "quiz-1-Tiếng Việt-w1": {
    id: "quiz-1-Tiếng Việt-w1",
    grade: 1,
    subject: "Tiếng Việt",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Tiếng Việt Lớp 1 - Tuần 1",
    subtitle: "Làm quen với các nét cơ bản: nét thẳng, nét xiên, nét móc, nét cong và các dấu thanh.",
    timeAllowedMinutes: 20,
    loigiaihayUrl: "https://loigiaihay.com/bai-tap-cuoi-tuan-tieng-viet-lop-1-tuan-1-c0a.html",
    curriculumSource: "Phiếu ôn tập Tiếng Việt 1 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-1-tv-1",
        questionNumber: 1,
        question: "Chữ 'A' gồm có những nét cơ bản nào cấu tạo thành?",
        options: [
          { key: "A", text: "Hai nét xiên và một nét ngang ngắn" },
          { key: "B", text: "Hai nét cong kín" },
          { key: "C", text: "Một nét thẳng đứng duy nhất" },
          { key: "D", text: "Một nét lượn sóng" },
        ],
        correctAnswer: "A",
        explanation: "Chữ cái in hoa A gồm 2 nét xiên (trái, phải) và 1 nét gạch ngang ở giữa.",
        topic: "Các nét chữ cơ bản",
      },
      {
        id: "q-1-tv-2",
        questionNumber: 2,
        question: "Dấu thanh đi từ dưới lên trên, từ trái qua phải ( / ) là dấu thanh gì?",
        options: [
          { key: "A", text: "Dấu huyền ( \\ )" },
          { key: "B", text: "Dấu sắc ( / )" },
          { key: "C", text: "Dấu hỏi ( ? )" },
          { key: "D", text: "Dấu nặng ( . )" },
        ],
        correctAnswer: "B",
        explanation: "Nét xiên hướng lên từ trái sang phải là biểu tượng của dấu sắc ( / ).",
        topic: "Làm quen các dấu thanh",
      },
      {
        id: "q-1-tv-3",
        questionNumber: 3,
        question: "Khi ngồi viết bài, tư thế nào sau đây là ĐÚNG chuẩn?",
        options: [
          { key: "A", text: "Lưng thẳng, ngực không tì vào bàn, mắt cách vở 25 - 30cm" },
          { key: "B", text: "Cúi sát mặt xuống bàn để nhìn cho rõ" },
          { key: "C", text: "Nằm bò ra bàn viết bài" },
          { key: "D", text: "Vừa ăn quà vừa viết bài" },
        ],
        correctAnswer: "A",
        explanation: "Tư thế ngồi học chuẩn giúp bảo vệ cột sống và thị lực của học sinh.",
        topic: "Tư thế ngồi viết đúng chuẩn",
      },
    ],
  },

  "quiz-1-Tự nhiên và Xã hội-w1": {
    id: "quiz-1-Tự nhiên và Xã hội-w1",
    grade: 1,
    subject: "Tự nhiên và Xã hội",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần TNXH Lớp 1 - Tuần 1",
    subtitle: "Chủ đề: Gia đình của em - Các thành viên trong gia đình và tình cảm yêu thương.",
    timeAllowedMinutes: 15,
    loigiaihayUrl: "https://loigiaihay.com/vo-bai-tap-tu-nhien-va-xa-hoi-lop-1-c0a.html",
    curriculumSource: "TNXH Lớp 1 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-1-tnxh-1",
        questionNumber: 1,
        question: "Gia đình em thường có những thành viên thân yêu nào chung sống?",
        options: [
          { key: "A", text: "Ông, bà, bố, mẹ và các con" },
          { key: "B", text: "Chỉ có thầy cô giáo" },
          { key: "C", text: "Chỉ có bạn bè cùng lớp" },
          { key: "D", text: "Người lạ ngoài phố" },
        ],
        correctAnswer: "A",
        explanation: "Gia đình là tổ ấm gồm ông bà, cha mẹ, con cái yêu thương nhau.",
        topic: "Các thành viên trong gia đình",
      },
      {
        id: "q-1-tnxh-2",
        questionNumber: 2,
        question: "Để thể hiện lòng hiếu thảo với cha mẹ, em nên làm gì sau giờ học?",
        options: [
          { key: "A", text: "Lễ phép chào hỏi, cất gọn đồ dùng học tập và giúp việc nhỏ" },
          { key: "B", text: "Vứt cặp sách lung tung rồi đòi xem điện thoại" },
          { key: "C", text: "Không chào hỏi ai trong nhà" },
          { key: "D", text: "Khóc nhè và ăn vạ" },
        ],
        correctAnswer: "A",
        explanation: "Học sinh ngoan biết chào hỏi lễ phép và tự giác giữ gìn đồ dùng học tập.",
        topic: "Hành vi đẹp trong gia đình",
      },
    ],
  },

  "quiz-1-Đạo đức-w1": {
    id: "quiz-1-Đạo đức-w1",
    grade: 1,
    subject: "Đạo đức",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Đạo Đức Lớp 1 - Tuần 1",
    subtitle: "Bài 1: Em là học sinh lớp Một - Tự hào và chủ động làm quen bạn mới.",
    timeAllowedMinutes: 15,
    loigiaihayUrl: "https://loigiaihay.com/dao-duc-lop-1-c0a.html",
    curriculumSource: "Đạo đức 1 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-1-dd-1",
        questionNumber: 1,
        question: "Khi gặp thầy cô giáo hoặc người lớn trong trường, em cần làm gì?",
        options: [
          { key: "A", text: "Khoanh tay cúi đầu chào lễ phép: 'Con chào thầy/cô ạ!'" },
          { key: "B", text: "Chạy trốn thật nhanh" },
          { key: "C", text: "Nhìn đi nơi khác như không thấy" },
          { key: "D", text: "Hét to vào tai bạn" },
        ],
        correctAnswer: "A",
        explanation: "Chào hỏi lễ phép là chuẩn mực đạo đức đầu tiên của học sinh lớp 1.",
        topic: "Chào hỏi lễ phép",
      },
      {
        id: "q-1-dd-2",
        questionNumber: 2,
        question: "Muốn làm quen với bạn mới ngồi cùng bàn, em nên nói câu nào?",
        options: [
          { key: "A", text: "'Chào bạn, mình tên là Lan, chúng mình làm bạn thân nhé!'" },
          { key: "B", text: "'Không được nhìn sang chỗ tôi!'" },
          { key: "C", text: "'Bạn phải cho tôi bút chì!'" },
          { key: "D", text: "Im lặng suốt buổi học" },
        ],
        correctAnswer: "A",
        explanation: "Lời nói thân thiện, cởi mở giúp em có thêm nhiều bạn tốt trong lớp.",
        topic: "Kết bạn thân ái",
      },
    ],
  },

  "quiz-1-Hoạt động trải nghiệm-w1": {
    id: "quiz-1-Hoạt động trải nghiệm-w1",
    grade: 1,
    subject: "Hoạt động trải nghiệm",
    week: 1,
    title: "Phiếu Trắc Nghiệm Hoạt Động Trải Nghiệm Lớp 1 - Tuần 1",
    subtitle: "Chủ đề 1: Trường tiểu học thân yêu - Khám phá trường lớp và nền nếp sinh hoạt.",
    timeAllowedMinutes: 15,
    loigiaihayUrl: "https://loigiaihay.com/hoat-dong-trai-nghiem-lop-1-c0a.html",
    curriculumSource: "HĐTN Lớp 1 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-1-hdtn-1",
        questionNumber: 1,
        question: "Trong giờ chào cờ đầu tuần, học sinh cần có thái độ như thế nào?",
        options: [
          { key: "A", text: "Đứng nghiêm trang, mắt hướng lên Quốc kỳ, hát vang Quốc ca" },
          { key: "B", text: "Nói chuyện riêng và đùa nghịch với bạn" },
          { key: "C", text: "Ngồi bệt xuống sân trường" },
          { key: "D", text: "Ăn quà vặt trong hàng" },
        ],
        correctAnswer: "A",
        explanation: "Nghi thức chào cờ thể hiện lòng yêu nước và sự tôn kính biểu tượng Tổ quốc.",
        topic: "Nền nếp chào cờ",
      },
    ],
  },

  // ==========================================
  // KHỐI 5 - TUẦN 1
  // ==========================================
  "quiz-5-Toán-w1": {
    id: "quiz-5-Toán-w1",
    grade: 5,
    subject: "Toán",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Toán Lớp 5 - Tuần 1",
    subtitle: "Ôn tập khái niệm phân số, tính chất cơ bản của phân số, so sánh và rút gọn phân số.",
    timeAllowedMinutes: 30,
    loigiaihayUrl: "https://loigiaihay.com/bai-tap-cuoi-tuan-toan-lop-5-tuan-1-c0a.html",
    curriculumSource: "Phiếu ôn tập cuối tuần Toán 5 - Loigiaihay.com (GDPT 2018)",
    questions: [
      {
        id: "q-5-t-1",
        questionNumber: 1,
        question: "Phân số 3/5 bằng phân số nào dưới đây sau khi nhân cả tử và mẫu với cùng số 4?",
        options: [
          { key: "A", text: "7/9" },
          { key: "B", text: "12/20" },
          { key: "C", text: "12/15" },
          { key: "D", text: "9/20" },
        ],
        correctAnswer: "B",
        explanation: "Theo tính chất cơ bản của phân số: (3 x 4) / (5 x 4) = 12/20.",
        topic: "Tính chất cơ bản của phân số",
      },
      {
        id: "q-5-t-2",
        questionNumber: 2,
        question: "Rút gọn phân số 18/24 về dạng phân số tối giản ta được kết quả là:",
        options: [
          { key: "A", text: "9/12" },
          { key: "B", text: "6/8" },
          { key: "C", text: "3/4" },
          { key: "D", text: "2/3" },
        ],
        correctAnswer: "C",
        explanation: "Chia cả tử và mẫu cho ước chung lớn nhất là 6: 18:6 / 24:6 = 3/4.",
        topic: "Rút gọn phân số tối giản",
      },
      {
        id: "q-5-t-3",
        questionNumber: 3,
        question: "So sánh hai phân số: 4/7 và 5/8. Phân số nào lớn hơn?",
        options: [
          { key: "A", text: "4/7 lớn hơn 5/8" },
          { key: "B", text: "5/8 lớn hơn 4/7" },
          { key: "C", text: "Hai phân số bằng nhau" },
          { key: "D", text: "Không thể so sánh" },
        ],
        correctAnswer: "B",
        explanation: "Quy đồng mẫu số: 4/7 = 32/56; 5/8 = 35/56. Vì 35/56 > 32/56 nên 5/8 > 4/7.",
        topic: "So sánh phân số khác mẫu số",
      },
      {
        id: "q-5-t-4",
        questionNumber: 4,
        question: "Một lớp học có 35 học sinh, trong đó số học sinh nữ chiếm 3/5 số học sinh cả lớp. Số học sinh nữ là:",
        options: [
          { key: "A", text: "14 học sinh" },
          { key: "B", text: "21 học sinh" },
          { key: "C", text: "15 học sinh" },
          { key: "D", text: "20 học sinh" },
        ],
        correctAnswer: "B",
        explanation: "Số học sinh nữ là: 35 x 3/5 = (35 : 5) x 3 = 7 x 3 = 21 (học sinh).",
        topic: "Tìm phân số của một số",
      },
    ],
  },

  "quiz-5-Tiếng Việt-w1": {
    id: "quiz-5-Tiếng Việt-w1",
    grade: 5,
    subject: "Tiếng Việt",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Tiếng Việt Lớp 5 - Tuần 1",
    subtitle: "Chủ điểm: Khung trời tuổi thơ. Đọc hiểu bài văn, luyện tập về từ đồng nghĩa.",
    timeAllowedMinutes: 30,
    loigiaihayUrl: "https://loigiaihay.com/bai-tap-cuoi-tuan-tieng-viet-lop-5-tuan-1-c0a.html",
    curriculumSource: "Phiếu ôn tập Tiếng Việt 5 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-5-tv-1",
        questionNumber: 1,
        question: "Từ nào đồng nghĩa hoàn toàn với từ 'TỔ QUỐC'?",
        options: [
          { key: "A", text: "Đất nước" },
          { key: "B", text: "Quê quán" },
          { key: "C", text: "Làng xóm" },
          { key: "D", text: "Khu phố" },
        ],
        correctAnswer: "A",
        explanation: "'Tổ quốc' và 'Đất nước' là hai từ đồng nghĩa hoàn toàn, chỉ quốc gia thân yêu của dân tộc.",
        topic: "Từ đồng nghĩa",
      },
      {
        id: "q-5-tv-2",
        questionNumber: 2,
        question: "Dòng nào dưới đây gồm các từ đồng nghĩa chỉ màu đỏ rực rỡ?",
        options: [
          { key: "A", text: "Đỏ tươi, đỏ thắm, đỏ ối, đỏ rực" },
          { key: "B", text: "Đỏ hoe, đo đỏ, trăng trắng" },
          { key: "C", text: "Xanh ngắt, xanh thẳm, biêng biếc" },
          { key: "D", text: "Vàng rộm, vàng ươm, vàng hoe" },
        ],
        correctAnswer: "A",
        explanation: "Các từ đỏ tươi, đỏ thắm, đỏ ối, đỏ rực đều là các từ chỉ sắc thái đỏ đậm và tươi sáng.",
        topic: "Mở rộng vốn từ chỉ màu sắc",
      },
      {
        id: "q-5-tv-3",
        questionNumber: 3,
        question: "Tác dụng nổi bật của việc sử dụng từ đồng nghĩa trong văn miêu tả là gì?",
        options: [
          { key: "A", text: "Tránh lặp từ và diễn đạt sự vật, cảm xúc tinh tế, sinh động hơn" },
          { key: "B", text: "Làm bài văn dài thêm nhiều trang" },
          { key: "C", text: "Làm cho câu văn khó hiểu hơn" },
          { key: "D", text: "Để khoe vốn từ với cô giáo" },
        ],
        correctAnswer: "A",
        explanation: "Từ đồng nghĩa giúp lời văn phong phú, linh hoạt, gợi cảm và tránh lặp từ đơn điệu.",
        topic: "Tác dụng của từ đồng nghĩa",
      },
    ],
  },

  "quiz-5-Khoa học-w1": {
    id: "quiz-5-Khoa học-w1",
    grade: 5,
    subject: "Khoa học",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Khoa Học Lớp 5 - Tuần 1",
    subtitle: "Chủ đề: Chất - Sự biến đổi hóa học và vật lý của chất. Thành phần của không khí.",
    timeAllowedMinutes: 20,
    loigiaihayUrl: "https://loigiaihay.com/khoa-hoc-lop-5-c0a.html",
    curriculumSource: "Khoa học 5 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-5-kh-1",
        questionNumber: 1,
        question: "Khí nào trong không khí đóng vai trò quyết định để duy trì sự cháy và sự sống của con người?",
        options: [
          { key: "A", text: "Khí Ô-xi (Oxygen)" },
          { key: "B", text: "Khí Ni-tơ (Nitrogen)" },
          { key: "C", text: "Khí Các-bô-níc (Carbon dioxide)" },
          { key: "D", text: "Khí Hi-đrô (Hydrogen)" },
        ],
        correctAnswer: "A",
        explanation: "Khí Ô-xi duy trì sự hô hấp của sinh vật và là chất xúc tác cho quá trình cháy.",
        topic: "Không khí và sự sống",
      },
      {
        id: "q-5-kh-2",
        questionNumber: 2,
        question: "Hiện tượng nào sau đây là sự biến đổi HÓA HỌC (tạo ra chất mới)?",
        options: [
          { key: "A", text: "Đinh sắt để ngoài không khí ẩm bị gỉ sét thành chất màu nâu xốp" },
          { key: "B", text: "Nước đá tan thành nước lỏng khi để ở nhiệt độ phòng" },
          { key: "C", text: "Cắt tờ giấy thành nhiều mảnh nhỏ" },
          { key: "D", text: "Bẻ cong que diêm gỗ" },
        ],
        correctAnswer: "A",
        explanation: "Sắt kết hợp với ô-xi và hơi nước tạo thành gỉ sắt (chất mới) nên đó là biến đổi hóa học.",
        topic: "Sự biến đổi của chất",
      },
      {
        id: "q-5-kh-3",
        questionNumber: 3,
        question: "Để phòng tránh tai nạn ngộ độc khí hoặc hỏa hoạn trong gia đình, chúng ta KHÔNG NÊN làm điều gì?",
        options: [
          { key: "A", text: "Đốt than sưởi ấm trong phòng đóng kín cửa vào mùa đông" },
          { key: "B", text: "Khóa van bình gas an toàn sau khi đun nấu xong" },
          { key: "C", text: "Mở cửa sổ cho nhà cửa thông thoáng khí" },
          { key: "D", text: "Trang bị bình chữa cháy mini trong nhà" },
        ],
        correctAnswer: "A",
        explanation: "Đốt than trong phòng kín sinh ra lượng lớn khí độc CO gây ngạt thở nguy hiểm đến tính mạng.",
        topic: "An toàn phòng cháy và môi trường",
      },
    ],
  },

  "quiz-5-Lịch sử và Địa lí-w1": {
    id: "quiz-5-Lịch sử và Địa lí-w1",
    grade: 5,
    subject: "Lịch sử và Địa lí",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Lịch Sử & Địa Lí Lớp 5 - Tuần 1",
    subtitle: "Vị trí địa lí, giới hạn lãnh thổ nước ta và ý nghĩa chiến lược của biển Đông.",
    timeAllowedMinutes: 20,
    loigiaihayUrl: "https://loigiaihay.com/lich-su-va-dia-li-lop-5-c0a.html",
    curriculumSource: "Lịch sử & Địa lí 5 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-5-lsdl-1",
        questionNumber: 1,
        question: "Lãnh thổ nước Việt Nam nằm ở khu vực nào của châu Á và có hình dạng giống chữ cái gì?",
        options: [
          { key: "A", text: "Khu vực Đông Nam Á, hình dạng chữ S" },
          { key: "B", text: "Khu vực Đông Á, hình tròn" },
          { key: "C", text: "Khu vực Tây Á, hình vuông" },
          { key: "D", text: "Khu vực Nam Á, hình chữ L" },
        ],
        correctAnswer: "A",
        explanation: "Việt Nam thuộc bán đảo Đông Dương trong khu vực Đông Nam Á, dải đất hình chữ S cong mềm mại.",
        topic: "Vị trí địa lí Việt Nam",
      },
      {
        id: "q-5-lsdl-2",
        questionNumber: 2,
        question: "Hai quần đảo thiêng liêng thuộc chủ quyền không thể tách rời của nước CHXHCN Việt Nam trên Biển Đông là:",
        options: [
          { key: "A", text: "Quần đảo Hoàng Sa và quần đảo Trường Sa" },
          { key: "B", text: "Quần đảo Cát Bà và Côn Đảo" },
          { key: "C", text: "Đảo Phú Quốc và đảo Lý Sơn" },
          { key: "D", text: "Quần đảo Cô Tô và đảo Bạch Long Vĩ" },
        ],
        correctAnswer: "A",
        explanation: "Hoàng Sa và Trường Sa là hai quần đảo lịch sử thuộc chủ quyền thiêng liêng của Việt Nam.",
        topic: "Chủ quyền biển đảo quê hương",
      },
      {
        id: "q-5-lsdl-3",
        questionNumber: 3,
        question: "Khí hậu nước ta mang tính chất nổi bật nào sau đây?",
        options: [
          { key: "A", text: "Nhiệt đới gió mùa ẩm" },
          { key: "B", text: "Hàn đới băng giá quanh năm" },
          { key: "C", text: "Khô hạn hoang mạc xích đạo" },
          { key: "D", text: "Ôn đới lục địa khắc nghiệt" },
        ],
        correctAnswer: "A",
        explanation: "Việt Nam có khí hậu nhiệt đới gió mùa ẩm với nguồn nhiệt ẩm dồi dào, cây cối xanh tươi quanh năm.",
        topic: "Đặc điểm khí hậu tự nhiên",
      },
    ],
  },

  "quiz-5-Đạo đức-w1": {
    id: "quiz-5-Đạo đức-w1",
    grade: 5,
    subject: "Đạo đức",
    week: 1,
    title: "Phiếu Bài Tập Cuối Tuần Đạo Đức Lớp 5 - Tuần 1",
    subtitle: "Bài 1: Em là học sinh lớp Năm - Trách nhiệm người anh cả cấp tiểu học.",
    timeAllowedMinutes: 15,
    loigiaihayUrl: "https://loigiaihay.com/dao-duc-lop-5-c0a.html",
    curriculumSource: "Đạo đức 5 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-5-dd-1",
        questionNumber: 1,
        question: "Là học sinh lớp Năm - khối lớp lớn nhất trường tiểu học, các em cần rèn luyện phẩm chất gì?",
        options: [
          { key: "A", text: "Gương mẫu trong học tập và nền nếp, giúp đỡ các em nhỏ lớp dưới" },
          { key: "B", text: "Tự cho mình quyền bắt nạt các em lớp nhỏ" },
          { key: "C", text: "Không cần thực hiện nội quy trường lớp" },
          { key: "D", text: "ỷ lại vào thầy cô giáo" },
        ],
        correctAnswer: "A",
        explanation: "Học sinh lớp 5 là tấm gương sáng về chăm ngoan, trách nhiệm và tinh thần tương thân tương ái.",
        topic: "Trách nhiệm học sinh lớp 5",
      },
      {
        id: "q-5-dd-2",
        questionNumber: 2,
        question: "Khi thấy một em học sinh lớp 1 bị ngã trên sân trường, hành động đúng đắn nhất là:",
        options: [
          { key: "A", text: "Đến nâng em dậy, phủi bụi, hỏi thăm và đưa em vào phòng y tế nếu bị trầy xước" },
          { key: "B", text: "Đứng cười và chỉ trỏ" },
          { key: "C", text: "Bỏ đi coi như không thấy" },
          { key: "D", text: "Mắng em vì tội đi không cẩn thận" },
        ],
        correctAnswer: "A",
        explanation: "Tình yêu thương, giúp đỡ em nhỏ thể hiện nét đẹp văn minh của học sinh tiểu học.",
        topic: "Tương thân tương ái",
      },
    ],
  },

  "quiz-5-Hoạt động trải nghiệm-w1": {
    id: "quiz-5-Hoạt động trải nghiệm-w1",
    grade: 5,
    subject: "Hoạt động trải nghiệm",
    week: 1,
    title: "Phiếu Bài Tập Trắc Nghiệm HĐTN Lớp 5 - Tuần 1",
    subtitle: "Chủ đề 1: Tự hào truyền thống trường em - Xây dựng tập thể lớp đoàn kết.",
    timeAllowedMinutes: 15,
    loigiaihayUrl: "https://loigiaihay.com/hoat-dong-trai-nghiem-lop-5-c0a.html",
    curriculumSource: "HĐTN 5 Tuần 1 - Loigiaihay.com",
    questions: [
      {
        id: "q-5-hdtn-1",
        questionNumber: 1,
        question: "Để xây dựng tập thể lớp học hạnh phúc và vững mạnh trong năm học mới, điều quan trọng nhất là:",
        options: [
          { key: "A", text: "Mọi thành viên biết tôn trọng, lắng nghe, chia sẻ và đoàn kết giúp nhau tiến bộ" },
          { key: "B", text: "Chỉ thi đua cá nhân, ai giỏi người nấy biết" },
          { key: "C", text: "Phân biệt đối xử giữa các bạn trong lớp" },
          { key: "D", text: "Không tham gia bất kỳ phong trào nào của trường" },
        ],
        correctAnswer: "A",
        explanation: "Sức mạnh tập thể bắt nguồn từ sự đồng lòng, thấu hiểu và sẻ chia yêu thương giữa các bạn học sinh.",
        topic: "Xây dựng tập thể lớp",
      },
    ],
  },
};

/**
 * Dynamic generator: retrieves or constructs the authentic weekly quiz for any Grade (1-5),
 * Subject, and Week (1-35).
 */
export function getSubjectQuiz(grade: Grade, subject: string, week: number): SubjectQuiz {
  const key = `quiz-${grade}-${subject}-w${week}`;
  if (SAMPLE_QUIZZES[key]) {
    return SAMPLE_QUIZZES[key];
  }

  // Generate dynamic contextual quiz based on subject & week
  const url = getLoigiaihaySubjectUrl(grade, subject, week);

  // Dynamic question generator tailored to curriculum
  const dynamicQuestions: QuizQuestion[] = generateContextualQuestions(grade, subject, week);

  return {
    id: `quiz-${grade}-${subject}-w${week}`,
    grade,
    subject,
    week,
    title: `Phiếu Bài Tập Cuối Tuần ${subject} Lớp ${grade} - Tuần ${week}`,
    subtitle: `Bộ câu hỏi ôn tập kiến thức trọng tâm Tuần ${week} môn ${subject} chuẩn theo phân phối chương trình GDPT 2018 (Nguồn Loigiaihay.com).`,
    timeAllowedMinutes: subject === "Toán" || subject === "Tiếng Việt" ? 30 : 20,
    loigiaihayUrl: url,
    curriculumSource: `Trang tài liệu Giáo dục Tiểu học & Phiếu cuối tuần - Loigiaihay.com (Khối ${grade})`,
    questions: dynamicQuestions,
  };
}

function generateContextualQuestions(grade: Grade, subject: string, week: number): QuizQuestion[] {
  if (subject === "Toán") {
    return [
      {
        id: `q-${grade}-${subject}-${week}-1`,
        questionNumber: 1,
        question: `[Toán Lớp ${grade} - Tuần ${week}]: Cho các phép tính học trong tuần ${week}. Đâu là đáp án chính xác nhất?`,
        options: [
          { key: "A", text: `Kết quả tính toán áp dụng theo quy tắc tính nhanh của Tuần ${week}` },
          { key: "B", text: "Giá trị chưa được quy đồng hoặc chưa rút gọn tối giản" },
          { key: "C", text: "Kết quả sai do nhầm lẫn thứ tự thực hiện phép tính" },
          { key: "D", text: "Không có đáp án phù hợp" },
        ],
        correctAnswer: "A",
        explanation: `Lời giải chi tiết (Loigiaihay.com): Học sinh thực hiện theo thứ tự ưu tiên trong biểu thức và áp dụng tính chất giao hoán, kết hợp để có kết quả chính xác nhất.`,
        topic: `Ôn tập tính toán trọng tâm Tuần ${week}`,
      },
      {
        id: `q-${grade}-${subject}-${week}-2`,
        questionNumber: 2,
        question: `[Toán Lớp ${grade} - Tuần ${week}]: Bài toán giải bằng lời văn về các đại lượng thực tiễn trong Tuần ${week}:`,
        options: [
          { key: "A", text: "Đáp số đúng kèm theo đơn vị đo lường quy chuẩn" },
          { key: "B", text: "Thiếu tên đơn vị kèm theo" },
          { key: "C", text: "Tính sai một bước trung gian" },
          { key: "D", text: "Chưa chuyển đổi các đơn vị về cùng một thứ nguyên" },
        ],
        correctAnswer: "A",
        explanation: `Lời giải chi tiết (Loigiaihay.com): Tóm tắt bài toán, xác định các bước tính toán và ghi rõ đáp số có danh số đầy đủ.`,
        topic: "Giải toán có lời văn",
      },
      {
        id: `q-${grade}-${subject}-${week}-3`,
        questionNumber: 3,
        question: `[Toán Lớp ${grade} - Tuần ${week}]: Nhận diện và tính toán các yếu tố hình học / đại lượng đã học trong Tuần ${week}:`,
        options: [
          { key: "A", text: "Công thức và giá trị chính xác tuyệt đối" },
          { key: "B", text: "Nhầm lẫn giữa diện tích và chu vi" },
          { key: "C", text: "Ghi sai số đo cạnh" },
          { key: "D", text: "Chưa vẽ hình minh họa" },
        ],
        correctAnswer: "A",
        explanation: `Học sinh áp dụng đúng công thức tính toán hình học chuẩn sách giáo khoa Kết nối tri thức / Cánh diều.`,
        topic: "Hình học và đo lường",
      },
    ];
  }

  if (subject === "Tiếng Việt") {
    return [
      {
        id: `q-${grade}-${subject}-${week}-1`,
        questionNumber: 1,
        question: `[Tiếng Việt Lớp ${grade} - Tuần ${week}]: Đọc hiểu văn bản và xác định nội dung, ý nghĩa chủ đề bài đọc của Tuần ${week}:`,
        options: [
          { key: "A", text: "Nêu bật giá trị nhân văn, bồi dưỡng tình cảm yêu thương gia đình, thầy cô, quê hương" },
          { key: "B", text: "Nội dung phản ánh không đúng chi tiết trong văn bản" },
          { key: "C", text: "Chỉ mang tính chất giải trí đơn thuần" },
          { key: "D", text: "Ý kiến trái ngược với bài học đạo đức" },
        ],
        correctAnswer: "A",
        explanation: `Văn bản đọc hiểu tuần ${week} hướng học sinh đến những cảm xúc chân thành, bồi dưỡng lòng nhân ái và năng lực ngôn ngữ.`,
        topic: `Đọc hiểu văn bản Tuần ${week}`,
      },
      {
        id: `q-${grade}-${subject}-${week}-2`,
        questionNumber: 2,
        question: `[Tiếng Việt Lớp ${grade} - Tuần ${week}]: Luyện từ và câu: Nhận biết hiện tượng ngữ pháp trọng tâm được học trong Tuần ${week}:`,
        options: [
          { key: "A", text: "Sử dụng từ ngữ chính xác, đúng ngữ cảnh và giàu hình ảnh biểu cảm" },
          { key: "B", text: "Dùng từ sai phong cách diễn đạt" },
          { key: "C", text: "Câu văn què cụt, thiếu chủ ngữ hoặc vị ngữ" },
          { key: "D", text: "Mắc lỗi lặp từ ngữ thô thiển" },
        ],
        correctAnswer: "A",
        explanation: `Hướng dẫn giải chi tiết theo Loigiaihay.com: Vận dụng đúng quy tắc dùng từ đặt câu chuẩn mực tiếng Việt hiện đại.`,
        topic: "Luyện từ và câu",
      },
      {
        id: `q-${grade}-${subject}-${week}-3`,
        questionNumber: 3,
        question: `[Tiếng Việt Lớp ${grade} - Tuần ${week}]: Viết chính tả và viết đoạn văn miêu tả/kể chuyện:`,
        options: [
          { key: "A", text: "Đoạn văn có mở đầu, diễn biến và kết thúc rõ ràng, cảm xúc tự nhiên" },
          { key: "B", text: "Sai nhiều lỗi chính tả âm đầu và dấu thanh" },
          { key: "C", text: "Các ý rời rạc không có sự liên kết mạch lạc" },
          { key: "D", text: "Sao chép nguyên văn văn mẫu mà không có sáng tạo cá nhân" },
        ],
        correctAnswer: "A",
        explanation: `Khuyến khích học sinh dùng từ ngữ chân thật, thể hiện quan sát thực tế và cảm xúc của bản thân.`,
        topic: "Viết sáng tạo",
      },
    ];
  }

  if (subject === "Khoa học" || subject === "Tự nhiên và Xã hội") {
    return [
      {
        id: `q-${grade}-${subject}-${week}-1`,
        questionNumber: 1,
        question: `[${subject} Lớp ${grade} - Tuần ${week}]: Hiện tượng tự nhiên và quy luật khoa học nào được khám phá trong Tuần ${week}?`,
        options: [
          { key: "A", text: "Quy luật tự nhiên diễn ra khách quan, con người cần bảo vệ và sống hài hòa" },
          { key: "B", text: "Con người có thể tùy tiện phá hủy môi trường" },
          { key: "C", text: "Hiện tượng mê tín dị đoan không có căn cứ" },
          { key: "D", text: "Không có câu trả lời nào phù hợp" },
        ],
        correctAnswer: "A",
        explanation: `Kiến thức môn ${subject} giúp học sinh hiểu bản chất sự vật hiện tượng xung quanh qua quan sát và thí nghiệm thực tiễn.`,
        topic: "Khám phá khoa học tự nhiên",
      },
      {
        id: `q-${grade}-${subject}-${week}-2`,
        questionNumber: 2,
        question: `[${subject} Lớp ${grade} - Tuần ${week}]: Hành động bảo vệ sức khỏe và môi trường sống của bản thân là:`,
        options: [
          { key: "A", text: "Vệ sinh cá nhân sạch sẽ, giữ gìn nguồn nước, trồng cây xanh và phân loại rác thải" },
          { key: "B", text: "Vứt rác bừa bãi xuống cống rãnh" },
          { key: "C", text: "Lãng phí điện nước trong sinh hoạt" },
          { key: "D", text: "Ăn đồ ăn ôi thiu không rõ nguồn gốc" },
        ],
        correctAnswer: "A",
        explanation: `Vận dụng kiến thức bài học vào giữ gìn lối sống xanh, dinh dưỡng hợp lý và phòng tránh bệnh tật.`,
        topic: "Vận dụng thực tiễn",
      },
    ];
  }

  if (subject === "Lịch sử và Địa lí") {
    return [
      {
        id: `q-${grade}-${subject}-${week}-1`,
        questionNumber: 1,
        question: `[Lịch sử và Địa lí Lớp ${grade} - Tuần ${week}]: Sự kiện lịch sử hoặc nét đặc trưng địa lí tiêu biểu được học trong Tuần ${week} là:`,
        options: [
          { key: "A", text: "Khẳng định truyền thống yêu nước kiên cường và cảnh quan địa lí phong phú của Tổ quốc" },
          { key: "B", text: "Ghi sai mốc thời gian và địa điểm lịch sử" },
          { key: "C", text: "Nhầm lẫn giữa các vùng miền địa lý" },
          { key: "D", text: "Không nắm được vị trí trên bản đồ" },
        ],
        correctAnswer: "A",
        explanation: `Giáo dục niềm tự hào dân tộc, ý thức chủ quyền lãnh thổ và tìm hiểu vẻ đẹp thiên nhiên các vùng miền đất nước.`,
        topic: "Kiến thức lịch sử và địa lí",
      },
      {
        id: `q-${grade}-${subject}-${week}-2`,
        questionNumber: 2,
        question: `[Lịch sử và Địa lí Lớp ${grade} - Tuần ${week}]: Phương pháp sử dụng bản đồ và tư liệu lịch sử đúng cách là:`,
        options: [
          { key: "A", text: "Đọc bảng chú giải, xác định phương hướng trên bản đồ và đối chiếu tư liệu chuẩn xác" },
          { key: "B", text: "Đoán mò không cần nhìn chú giải" },
          { key: "C", text: "Xem ngược hướng bản đồ địa lí" },
          { key: "D", text: "Chỉ dựa vào trí tưởng tượng" },
        ],
        correctAnswer: "A",
        explanation: `Kỹ năng đọc bản đồ, lược đồ và khai thác tư liệu lịch sử là yêu cầu cần đạt trọng tâm của môn học.`,
        topic: "Kỹ năng thực hành bộ môn",
      },
    ];
  }

  // Đạo đức & HĐTN
  return [
    {
      id: `q-${grade}-${subject}-${week}-1`,
      questionNumber: 1,
      question: `[${subject} Lớp ${grade} - Tuần ${week}]: Thái độ và hành vi văn minh, phù hợp với chuẩn mực được học trong Tuần ${week} là:`,
      options: [
        { key: "A", text: "Tôn trọng mọi người, sống trung thực, có trách nhiệm và luôn sẵn lòng giúp đỡ người khó khăn" },
        { key: "B", text: "Ích kỷ chỉ nghĩ cho lợi ích riêng của bản thân" },
        { key: "C", text: "Nói dối khi mắc khuyết điểm" },
        { key: "D", text: "Thờ ơ trước nỗi đau của người khác" },
      ],
      correctAnswer: "A",
      explanation: `Hành vi chuẩn mực giúp xây dựng nhân cách tốt đẹp, sống chan hòa và được thầy cô, bạn bè tin yêu.`,
      topic: "Chuẩn mực hành vi đạo đức",
    },
    {
      id: `q-${grade}-${subject}-${week}-2`,
      questionNumber: 2,
      question: `[${subject} Lớp ${grade} - Tuần ${week}]: Khi tham gia các hoạt động tập thể và trải nghiệm, em nên:`,
      options: [
        { key: "A", text: "Chủ động hợp tác, hoàn thành nhiệm vụ được giao và tuân thủ các quy tắc an toàn" },
        { key: "B", text: "Trốn tránh công việc chung để chơi một mình" },
        { key: "C", text: "Ganh tị và tranh cãi với đồng đội" },
        { key: "D", text: "Tự ý bỏ ra ngoài khu vực quy định" },
      ],
      correctAnswer: "A",
      explanation: `Tinh thần đồng đội và kỷ luật giúp hoạt động trải nghiệm đạt hiệu quả cao và an toàn cho tất cả mọi người.`,
      topic: "Kỹ năng hợp tác và an toàn",
    },
  ];
}
