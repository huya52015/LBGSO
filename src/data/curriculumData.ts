import { Grade, LessonPlan, ScheduleItem } from "../types";
import { getDetailedMusicLesson } from "./musicLessonDetails";
import { getDetailedEnglishLesson } from "./englishLessonDetails";
import { generateSubjectSpecificActivities } from "../utils/lessonActivityGenerator";

export interface SubjectCurriculum {
  subject: string;
  periodsPerWeek: number;
  totalPeriods: number;
}

export const GRADE_SUBJECTS: Record<Grade, SubjectCurriculum[]> = {
  1: [
    { subject: "Tiếng Việt", periodsPerWeek: 12, totalPeriods: 420 },
    { subject: "Toán", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  2: [
    { subject: "Tiếng Việt", periodsPerWeek: 10, totalPeriods: 350 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tự chọn Tiếng Anh", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  3: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tin học & Công nghệ", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  4: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  5: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ]
};

// Rich default lesson plans with 2 columns, all CV 2345 sections, and specific integrations for all 5 grades
export const SAMPLE_LESSON_PLANS: Record<string, LessonPlan> = {
  // LỚP 5 - TUẦN 1 - TIẾT 1 HĐTN (Sinh hoạt dưới cờ)
  "5-w1-hdtn-1": {
    id: "5-w1-hdtn-1",
    grade: 5,
    subject: "Hoạt động trải nghiệm",
    subSubject: "Sinh hoạt dưới cờ",
    periodNumber: 1,
    curriculumPeriod: 1,
    lessonTitle: "Sinh hoạt dưới cờ: CHÀO NĂM HỌC MỚI",
    week: 1,
    dayOfWeek: "Thứ Hai",
    dateStr: "07/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    departmentName: "UBND Xã Tân Thạnh",
    branchName: "Điểm Tân Bình",
    objectives: {
      specificCompetencies: [
        "Học sinh thực hiện nghiêm trang nghi lễ chào cờ đầu năm học mới. Thể hiện niềm tự hào và quyết tâm phấn đấu trong năm học cuối cấp tiểu học.",
        "Rèn luyện kỹ năng sinh hoạt tập thể, lắng nghe phát động chủ đề năm học mới của Liên đội và BGH nhà trường."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học: Tự giác chuẩn bị trang phục chỉnh tề, thực hiện đúng nội quy chào cờ.",
        "Năng lực giao tiếp và hợp tác: Tự tin giao lưu, hòa nhập cùng các bạn và thầy cô trong không khí ngày hội tựu trường."
      ],
      qualities: [
        "Yêu nước: Tự hào về mái trường, kính trọng Quốc kỳ và hát vang Quốc ca, Đội ca.",
        "Trách nhiệm, chăm chỉ: Có ý thức phấn đấu trở thành con ngoan trò giỏi, gương mẫu cho học sinh các khối lớp dưới."
      ],
      integrations: {
        humanRights: "QCN: Quyền được học tập trong môi trường giáo dục an toàn, thân thiện và tôn trọng nhân phẩm.",
        lifeSkills: "KNS: Kỹ năng lắng nghe tích cực, tự tin trước tập thể đông người và giữ gìn trật tự nơi công cộng.",
        ai: "1.A1.1 - Khởi đầu năm học mới với tinh thần chủ động tìm hiểu tri thức và công nghệ số."
      }
    },
    materials: {
      teacher: ["Kế hoạch tuần 1, sổ chủ nhiệm, bài phát động thi đua chào năm học mới, hệ thống âm thanh cờ hoa nhà trường."],
      student: ["Trang phục chỉnh tề (áo đồng phục trắng, khăn quàng đỏ, bảng tên), ghế ngồi theo quy định."]
    },
    activities: [
      {
        name: "1. Nghi lễ Chào cờ (Khởi động - 10 phút)",
        objective: "Tạo tâm thế trang nghiêm, phấn khởi bước vào năm học mới.",
        teacherActivity: "Hướng dẫn học sinh tập hợp theo hàng lối ngay ngắn, chỉnh đốn trang phục. Phối hợp với Tổng phụ trách Đội điều hành nghi lễ Chào cờ toàn trường (Nghiêm - Chào cờ - Quốc ca - Đội ca). Lắng nghe BGH nhà trường phát biểu chào mừng năm học mới.",
        studentActivity: "Đứng nghiêm trang hướng về Quốc kỳ, hát vang Quốc ca và Đội ca với tinh thần tự hào dân tộc. Chú ý lắng nghe thông điệp chào mừng năm học mới."
      },
      {
        name: "2. Hoạt động trải nghiệm theo chủ đề (Khám phá & Giao lưu - 15 phút)",
        objective: "Giao lưu, tạo sự gắn kết và tinh thần quyết tâm trong năm học mới.",
        teacherActivity: "Tổng phụ trách và GVCN điều hành chương trình giao lưu 'Chào năm học mới': Các tiết mục văn nghệ chào mừng của đội văn nghệ măng non; đại diện học sinh khối 5 phát biểu quyết tâm năm học cuối cấp.",
        studentActivity: "Cổ vũ nồng nhiệt các tiết mục văn nghệ, chăm chú lắng nghe lời hứa quyết tâm và vỗ tay hưởng ứng phong trào thi đua."
      },
      {
        name: "3. Luyện tập / Thực hành nhiệm vụ tuần 1 (7 phút)",
        objective: "Nắm vững nội quy và các nhiệm vụ trọng tâm tuần đầu tiên.",
        teacherActivity: "GVCN phổ biến nhanh các yêu cầu nền nếp tuần 1: Ổn định sĩ số, nề nếp ra vào lớp, giữ gìn vệ sinh khuôn viên trường lớp, an toàn giao thông trước cổng trường và phong trào 'Đôi bạn cùng tiến'.",
        studentActivity: "Lắng nghe, tiếp thu chỉ tiêu thi đua của tổ/lớp và cam kết thực hiện nghiêm túc."
      },
      {
        name: "4. Vận dụng / Dặn dò (3 phút)",
        objective: "Chuyển trạng thái học tập nền nếp, chuẩn bị vào tiết học trên lớp.",
        teacherActivity: "Nhận xét ý thức chào cờ của học sinh. Hướng dẫn các em thu dọn ghế (nếu có) và xếp hàng di chuyển trật tự về phòng học.",
        studentActivity: "Cầm ghế ngay ngắn, xếp hàng di chuyển trật tự theo hướng dẫn của giáo viên chủ nhiệm."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },

  // LỚP 5 - TUẦN 3 (Theo tài liệu mẫu Lớp 5A Tân Thạnh của user)
  "5-w3-hdtn-1": {
    id: "5-w3-hdtn-1",
    grade: 5,
    subject: "Hoạt động trải nghiệm",
    periodNumber: 1,
    curriculumPeriod: 7,
    lessonTitle: "Sinh hoạt dưới cờ: HOẠT ĐỘNG VUI TRUNG THU",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    departmentName: "UBND Xã Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh tích cực tham gia các hoạt động biểu diễn, trải nghiệm không khí ngày Tết Trung Thu truyền thống, thể hiện tinh thần tập thể, vui vẻ và tự tin."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp và hợp tác thông qua việc phối hợp tổ chức lễ hội và trang trí mâm cỗ.",
        "Năng lực tự chủ và tự học khi chuẩn bị sản phẩm lồng đèn, tiết mục."
      ],
      qualities: [
        "Nhân ái, trách nhiệm, tôn trọng các nét đẹp văn hóa truyền thống của quê hương."
      ],
      integrations: {
        ai: "1.D1.1 - Nhận biết máy thông minh/AI có thể hỗ trợ tạo hình ảnh, nhạc nền và gợi ý kịch bản lễ hội.",
        digitalCompetence: "2.3.CB1a - Giao tiếp, chia sẻ thông điệp vui tươi, văn minh trong môi trường số.",
        humanRights: "Quyền trẻ em được vui chơi, giải trí và tham gia các hoạt động văn hóa, nghệ thuật.",
        nutrition: "GDDD: Nhận biết giá trị dinh dưỡng của mâm ngũ quả, bánh trung thu an toàn vệ sinh.",
        stem: "STEM: Sáng tạo lồng đèn từ vật liệu tái chế."
      }
    },
    materials: {
      teacher: ["Tivi, loa máy, lồng đèn mẫu, mâm cỗ Trung Thu mô hình."],
      student: ["Lồng đèn tự làm, vật liệu trang trí mâm ngũ quả của tổ."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Tạo không khí vui tươi, phấn khởi chào mừng lễ hội Trung Thu.",
        teacherActivity: "Tổ chức cho toàn trường làm lễ Chào cờ nghiêm trang. Sau đó điều hành văn nghệ khởi động bài hát 'Chiếc đèn ông sao'.",
        studentActivity: "Học sinh thực hiện nghi thức chào cờ nghiêm túc. Đồng thanh hát vang và vỗ tay theo nhịp bài hát."
      },
      {
        name: "2. Khám phá",
        objective: "Giúp học sinh hiểu được ý nghĩa của Tết Trung Thu và nét đẹp văn hóa truyền thống.",
        teacherActivity: "Tổng phụ trách Đội giới thiệu ý nghĩa lịch sử ngày Tết Trung Thu, giới thiệu mâm cỗ và tục rước đèn phá cỗ.",
        studentActivity: "Lắng nghe chăm chú, tham gia trả lời câu hỏi đố vui về chú Cuội, chị Hằng."
      },
      {
        name: "3. Luyện tập / Thực hành",
        objective: "Rèn luyện sự khéo léo và tinh thần làm việc nhóm.",
        teacherActivity: "Tổ chức cuộc thi trưng bày lồng đèn giữa các lớp. GVCN hướng dẫn các tổ học sinh lớp 5A tự sắp xếp sản phẩm của mình lên bàn trưng bày.",
        studentActivity: "Các tổ phân công nhau đặt lồng đèn tự làm lên bàn, trang trí mâm ngũ quả nhỏ của tổ."
      },
      {
        name: "4. Vận dụng",
        objective: "Chia sẻ niềm vui Trung Thu đến gia đình và cộng đồng.",
        teacherActivity: "Nhận xét, tuyên dương các tổ hoạt động xuất sắc. Dặn dò HS mang lồng đèn về rước đèn cùng người thân.",
        studentActivity: "Chia sẻ cảm nghĩ về ngày hội. Ghi nhớ mang lồng đèn về nhà đón Trung thu an toàn."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-tv-1": {
    id: "5-w3-tv-1",
    grade: 5,
    subject: "Tiếng Việt",
    subSubject: "Đọc",
    periodNumber: 2,
    curriculumPeriod: 15,
    lessonTitle: "Tiết 15: TIẾNG HẠT NẢY MẦM",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Đọc đúng, trôi chảy và bước đầu biết đọc diễn cảm bài thơ 'Tiếng hạt nảy mầm'. Hiểu nội dung, thông điệp ý nghĩa: Lắng nghe và thấu cảm với những điều kỳ diệu xung quanh và thế giới tinh tế của trẻ em."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học thông qua luyện đọc cá nhân.",
        "Năng lực giải quyết vấn đề qua trả lời câu hỏi đọc hiểu."
      ],
      qualities: [
        "Nhân ái, biết trân trọng cuộc sống và thế giới thiên nhiên."
      ],
      integrations: {
        ai: "1.A1.1 - Nhận biết con người có cảm xúc thật trước vẻ đẹp thiên nhiên, AI chỉ mô phỏng theo dữ liệu được nạp.",
        digitalCompetence: "1.1.CB1a - Biết tìm kiếm hình ảnh hạt nảy mầm từ nguồn học liệu số an toàn do GV cung cấp.",
        environment: "Bảo vệ môi trường: Yêu quý cây xanh, chăm sóc mầm cây non quanh trường lớp."
      }
    },
    materials: {
      teacher: ["Sách giáo khoa, máy chiếu trình chiếu bài thơ, tranh ảnh minh họa hạt nảy mầm."],
      student: ["Sách giáo khoa Tiếng Việt 5, vở ghi bài."]
    },
    activities: [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích thích trí tò mò, tạo tâm thế học tập hứng khởi và kết nối vào bài thơ 'Tiếng hạt nảy mầm'.",
        teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Trình chiếu clip ngắn 30 giây hoặc tranh ảnh mầm cây xanh mướt đang nhú lên từ lòng đất nâu.
- Đặt câu hỏi kích hoạt trí tưởng tượng: "Theo em, hạt giống có phát ra tiếng động khi nảy mầm không? Nếu có, âm thanh đó sẽ như thế nào?"
2. Dẫn dắt vào bài mới: Giới thiệu bài thơ "Tiếng hạt nảy mầm" của tác giả Tô Hà.`,
        studentActivity: `1. Tiếp nhận nhiệm vụ khởi động (HS làm nội dung gì):
- Chăm chú quan sát hình ảnh mầm non trên màn chiếu.
- Suy nghĩ và tự do chia sẻ cảm nhận cá nhân (Có/Không/Tiếng thì thầm tí tách của mầm non cựa mình).
2. Lắng nghe cô giáo giới thiệu bài, mở SGK Tiếng Việt 5 tập 1 trang 12 và ghi tên bài vào vở.`
      },
      {
        name: "2. Khám phá: Luyện đọc đúng & Tìm hiểu từ khó (15 phút)",
        objective: "Đọc đúng, trôi chảy, ngắt nghỉ đúng nhịp thơ; phát hiện và giải nghĩa các từ khó trong văn bản.",
        teacherActivity: `1. Đọc mẫu toàn bài (GV làm gì cho HS):
- Đọc mẫu diễn cảm toàn bài thơ với giọng nhẹ nhàng, trong trẻo, nhịp điệu êm ái, tha thiết.
- Hướng dẫn chia đoạn: Bài thơ gồm 4 khổ thơ.
2. Hướng dẫn luyện đọc từng khổ kết hợp giải nghĩa từ:
- Hướng dẫn ngắt nhịp thơ 2/3 hoặc 3/2: "Hạt nảy mầm / tí tách // Lặng thầm / giữa đất nâu".
- Ghi bảng và hướng dẫn phát âm các từ khó, dễ lẫn: "nảy mầm", "xôn xao", "lặng thầm", "cựa mình".
- Giải nghĩa các từ chú giải cuối bài trong SGK.
3. Tổ chức luyện đọc nối tiếp theo cặp: GV đi quan sát, uốn nắn tư thế cầm sách và sửa lỗi phát âm cho học sinh.`,
        studentActivity: `1. Lắng nghe cô đọc mẫu (HS làm nội dung gì):
- Dùng ngón tay / bút chì dò theo từng dòng thơ trong SGK, chú ý cách ngắt nhịp và nhấn giọng ở các từ ngữ gợi tả.
2. Luyện đọc từ khó và câu thơ dài:
- 4 học sinh nối tiếp nhau đọc 4 khổ thơ trước lớp.
- Đồng thanh và cá nhân phát âm đúng các từ khó: "nảy mầm", "xôn xao", "lặng thầm".
3. Luyện đọc theo cặp đôi: Em đọc bạn nghe và đổi vai, hỗ trợ sửa lỗi đọc cho bạn.`
      },
      {
        name: "3. Luyện tập: Tìm hiểu nội dung bài thơ & Luyện đọc diễn cảm (12 phút)",
        objective: "Hiểu nội dung, thông điệp bài thơ và bước đầu biết đọc diễn cảm với giọng điệu phù hợp.",
        teacherActivity: `1. Chuyển giao nhiệm vụ đọc hiểu (GV làm gì cho HS):
- Yêu cầu HS đọc thầm toàn bài và thảo luận nhóm đôi trả lời 3 câu hỏi trong SGK:
  + Câu 1: Hạt mầm cần những điều kiện gì từ đất mẹ và thiên nhiên để cựa mình nảy mầm?
  + Câu 2: Tìm những hình ảnh, âm thanh thể hiện sự sống đang sinh sôi nảy nở trong bài thơ?
  + Câu 3: Bài thơ muốn gửi gắm đến chúng ta thông điệp gì về thiên nhiên và tình yêu thương?
2. Điều hành thảo luận & Chuẩn hóa đáp án:
- Mời đại diện các nhóm báo cáo. GV nhận xét, khen ngợi và chốt nội dung chính: Vẻ đẹp kỳ diệu của sự sống bắt đầu từ những điều nhỏ bé, âm thầm.
3. Hướng dẫn đọc diễn cảm: Tổ chức thi đọc diễn cảm khổ thơ 1 và khổ thơ 2 giữa các tổ.`,
        studentActivity: `1. Thảo luận đọc hiểu theo cặp (HS làm nội dung gì):
- Đọc thầm lại bài thơ, trao đổi sôi nổi cùng bạn cùng bàn để trả lời các câu hỏi trong phiếu.
- Đại diện nhóm tự tin giơ tay trả lời trước lớp: "Hạt mầm cần đất ẩm, ánh nắng ấm áp và sự nâng niu; Tiếng nảy mầm là âm thanh của sự sống sinh sôi".
2. Luyện đọc diễn cảm:
- Tự giác chọn khổ thơ mình yêu thích nhất, dùng bút chì đánh dấu chỗ ngắt nghỉ và nhấn giọng.
- Tham gia thi đọc diễn cảm trước lớp với phong thái tự tin, giọng đọc truyền cảm.
- Lắng nghe bạn đọc và nhận xét bình chọn bạn đọc hay nhất.`
      },
      {
        name: "4. Vận dụng: Liên hệ thực tiễn & Học thuộc lòng (5 phút)",
        objective: "Khắc sâu tình yêu thiên nhiên cây cỏ, có ý thức chăm sóc cây xanh quanh trường lớp và gia đình.",
        teacherActivity: `1. Giao nhiệm vụ vận dụng thực tế:
- Đặt câu hỏi liên hệ: "Để những mầm cây trong khuôn viên trường và ở nhà lớn nhanh, xanh tốt, em sẽ làm những việc gì?"
- Hướng dẫn học sinh nhẩm học thuộc lòng 2 khổ thơ em thích.
2. Nhận xét tiết học & Dặn dò: Tuyên dương các bạn đọc to, rõ ràng và diễn cảm tốt.`,
        studentActivity: `1. Bày tỏ suy nghĩ và cam kết hành động: "Em sẽ tưới nước cho bồn hoa của lớp mỗi buổi sáng, không bẻ cành hái lá non".
2. Nhẩm học thuộc lòng 2 khổ thơ tâm đắc và ghi nhớ việc thực hiện chăm sóc cây tại nhà.`
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-tv-2": {
    id: "5-w3-tv-2",
    grade: 5,
    subject: "Tiếng Việt",
    subSubject: "Luyện từ và câu",
    periodNumber: 3,
    curriculumPeriod: 16,
    lessonTitle: "Tiết 16: LUYỆN TẬP VỀ ĐẠI TỪ",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh củng cố kiến thức về đại từ xưng hô, đại từ chỉ định; biết cách tìm và sử dụng đại từ đúng ngữ cảnh trong văn bản đọc viết."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp ngôn ngữ mạch lạc.",
        "Năng lực tự học và giải quyết bài tập cá nhân."
      ],
      qualities: [
        "Chăm chỉ rèn luyện từ ngữ tiếng Việt; trung thực trong làm bài tập."
      ],
      integrations: {
        ai: "2.A1.1 - Hiểu rằng AI có thể gợi ý đại từ xưng hô phù hợp ngữ cảnh nhưng người học cần kiểm tra và xưng hô lễ phép.",
        digitalCompetence: "5.2.CB1a - Sử dụng bảng phân loại đại từ trên slide/bảng tương tác để kiểm tra kết quả."
      }
    },
    materials: {
      teacher: ["Phiếu bài tập nhóm, bảng phụ ghi các đoạn văn mẫu."],
      student: ["Vở bài tập Tiếng Việt 5, bút."]
    },
    activities: [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Ôn lại khái niệm và các loại đại từ đã học qua trò chơi nhỏ kích hoạt tư duy.",
        teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Tổ chức trò chơi "Bắn tên tìm đại từ": GV đọc nhanh một câu văn, HS bắn tên bạn nêu nhanh đại từ có trong câu.
2. Dẫn dắt vào bài mới: "Hôm nay chúng ta sẽ cùng thực hành bài Luyện tập về đại từ để dùng từ thật chuẩn xác".`,
        studentActivity: `1. Tiếp nhận nhiệm vụ và tham gia trò chơi (HS làm nội dung gì):
- Chú ý lắng nghe câu đố của GV, phản xạ nhanh tìm đại từ (tôi, chúng tôi, nó, hắn, đây, đó).
2. Mở Vở bài tập Tiếng Việt 5 trang 18 và ghi bài vào vở.`
      },
      {
        name: "2. Khám phá & Nhận diện: Phân loại đại từ trong đoạn văn mẫu (12 phút)",
        objective: "Nhận biết đại từ xưng hô và đại từ thay thế trong ngữ cảnh đoạn văn cụ thể.",
        teacherActivity: `1. Chuyển giao ngữ liệu (GV làm gì cho HS):
- Treo bảng phụ chứa đoạn văn mẫu: 'Hôm qua, Lan bị ốm. Cô giáo đến thăm bạn ấy. Bạn ấy rất vui mừng...'.
- Nêu câu hỏi yêu cầu: 'Tìm các từ dùng để xưng hô và các từ dùng để thay thế cho danh từ Lan trong đoạn văn trên? Tác dụng của việc thay thế đó là gì?'
2. Hướng dẫn học sinh thảo luận: Phân tích việc dùng đại từ tránh lặp từ nhiều lần trong đoạn văn.
3. Chốt kiến thức ghi nhớ: Đại từ dùng để xưng hô hoặc để thay thế danh từ, động từ, tính từ trong câu.`,
        studentActivity: `1. Phân tích ngữ liệu (HS làm nội dung gì):
- Đọc thầm đoạn văn trên bảng phụ, dùng bút chì gạch chân các đại từ: 'cô giáo', 'bạn ấy'.
- Thảo luận theo cặp: Nêu rõ 'bạn ấy' thay thế cho 'Lan' để câu văn không bị lặp lại từ 'Lan' nhiều lần.
2. Đọc lại phần ghi nhớ trong SGK và nhắc lại định nghĩa đại từ trước lớp.`
      },
      {
        name: "3. Luyện tập: Làm bài tập 1 và bài tập 2 trong VBT (15 phút)",
        objective: "Thực hành xác định đại từ và đặt câu có sử dụng đại từ đúng quy tắc ngữ pháp, xưng hô lễ phép.",
        teacherActivity: `1. Giao bài tập 1 (GV làm gì cho HS):
- Yêu cầu HS đọc đề Bài 1: Tìm đại từ trong các câu ca dao, tục ngữ đã cho.
- Hướng dẫn HS làm bài vào Vở bài tập. Đi quan sát và hướng dẫn các bạn còn lúng túng.
2. Giao bài tập 2:
- Yêu cầu HS viết 2 câu văn kể về một người bạn, trong đó có sử dụng đại từ xưng hô phù hợp.
3. Tổ chức nhận xét & Chữa bài:
- Chiếu bài làm của 2 học sinh lên bảng, mời cả lớp nhận xét, góp ý cách dùng từ chuẩn mực.`,
        studentActivity: `1. Thực hành làm bài tập cá nhân (HS làm nội dung gì):
- Đọc kỹ đề bài 1 trong VBT Tiếng Việt, gạch chân chính xác các đại từ trong từng câu thơ.
- Làm bài tập 2: Tự đặt 2 câu văn vào vở, ví dụ: 'Minh là bạn thân của em. Bạn ấy rất chăm học'.
2. Đổi vở kiểm tra chéo cùng bạn cùng bàn.
3. Lên bảng chữa bài và sửa các lỗi sai theo nhận xét của giáo viên.`
      },
      {
        name: "4. Vận dụng: Xưng hô thanh lịch, văn minh trong học đường (5 phút)",
        objective: "Vận dụng đại từ xưng hô đúng mực, lịch sự với thầy cô, bạn bè và người lớn tuổi.",
        teacherActivity: `1. Đưa ra tình huống giao tiếp thực tế:
- Tình huống: 'Khi nói chuyện với bạn cùng lớp và khi nói chuyện với thầy cô giáo, em cần chọn đại từ xưng hô như thế nào cho đúng mực?'
2. Nhận xét tiết học, nhắc nhở nếp xưng hô thanh lịch nơi trường lớp.`,
        studentActivity: `1. Bày tỏ ý kiến: 'Với bạn bè em xưng mình - bạn, cậu - tớ; với thầy cô em xưng em và gọi thầy/cô kính trọng'.
2. Ghi nhớ nguyên tắc giao tiếp văn minh và dọn dẹp sách vở ngăn nắp.`
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-toan-1": {
    id: "5-w3-toan-1",
    grade: 5,
    subject: "Toán",
    periodNumber: 4,
    curriculumPeriod: 11,
    lessonTitle: "Bài 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh hiểu và thực hiện được quy trình cộng, trừ hai phân số khác mẫu số bằng cách quy đồng mẫu số rồi thực hiện phép tính."
      ],
      generalCompetencies: [
        "Phát triển năng lực tư duy toán học và năng lực giải quyết vấn đề toán học thực tiễn."
      ],
      qualities: [
        "Cẩn thận, chính xác trong tính toán, chăm chỉ làm bài tập toán học."
      ],
      integrations: {
        ai: "4.C4.1 - Hiểu AI áp dụng thuật toán logic quy đồng mẫu số để tính toán nhanh, con người cần kiểm tra bước trung gian.",
        digitalCompetence: "5.2.CB1a - Sử dụng công cụ tương tác kéo thả phân số trên màn hình để kiểm tra đáp án."
      }
    },
    materials: {
      teacher: ["Bộ đồ dùng dạy học Toán 5, phiếu học tập nhóm."],
      student: ["Bộ thực hành Toán 5, bảng con, nháp."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Ôn tập cộng, trừ hai phân số cùng mẫu số.",
        teacherActivity: "Yêu cầu 2 học sinh lên bảng làm phép tính: 3/7 + 2/7 và 5/9 - 1/9.",
        studentActivity: "Thực hiện phép tính trên bảng lớp, cả lớp làm nháp. Nêu quy tắc: Cộng/trừ tử số và giữ nguyên mẫu số."
      },
      {
        name: "2. Khám phá",
        objective: "Tìm ra cách cộng hai phân số khác mẫu số.",
        teacherActivity: "Nêu bài toán thực tế: 'Bạn Nam uống 1/2 cốc nước, bạn Mai uống 1/3 cốc nước. Hỏi cả hai uống bao nhiêu phần cốc nước?' Đặt phép tính: 1/2 + 1/3. Hỏi cách làm?",
        studentActivity: "Phát hiện mẫu số khác nhau nên không cộng trực tiếp được. Đề xuất quy đồng mẫu số hai phân số về cùng mẫu số rồi cộng."
      },
      {
        name: "3. Luyện tập",
        objective: "Thực hiện thành thạo phép tính cộng hai phân số khác mẫu số.",
        teacherActivity: "Hướng dẫn HS làm Bài 1, Bài 2 trong SGK. Quan sát, uốn nắn những em tính toán chậm.",
        studentActivity: "Làm bài cá nhân vào vở. Lên bảng trình bày các phép tính quy đồng và cộng: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
      },
      {
        name: "4. Vận dụng",
        objective: "Giải quyết bài toán thực tế đơn giản.",
        teacherActivity: "Giao bài toán đố: Một mảnh vườn trồng hoa hết 1/3 diện tích, trồng rau hết 2/5 diện tích. Hỏi tổng diện tích trồng hoa và rau chiếm bao nhiêu phần?",
        studentActivity: "Tính nhanh: 1/3 + 2/5 = 5/15 + 6/15 = 11/15 diện tích mảnh vườn."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-kh-1": {
    id: "5-w3-kh-1",
    grade: 5,
    subject: "Khoa học",
    periodNumber: 1,
    curriculumPeriod: 5,
    lessonTitle: "Bài 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT (TIẾT 3)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh trình bày được các biện pháp bảo vệ môi trường đất, chống xói mòn và ô nhiễm đất trong nông nghiệp và đời sống sinh hoạt."
      ],
      generalCompetencies: [
        "Năng lực giải quyết vấn đề qua đề xuất các giải pháp bảo vệ đất đai địa phương."
      ],
      qualities: [
        "Trách nhiệm bảo vệ môi trường xung quanh, có ý thức tiết kiệm tài nguyên."
      ],
      integrations: {
        environment: "Bảo vệ môi trường: Trồng rừng đầu nguồn, làm ruộng bậc thang, hạn chế thuốc trừ sâu.",
        nutrition: "GDDD: Đất sạch cung cấp nông sản sạch, giàu dinh dưỡng cho bữa ăn gia đình.",
        ai: "4.A1.1 - Nhận biết AI hỗ trợ phân tích chất lượng đất qua ảnh vệ tinh để cảnh báo xói mòn."
      }
    },
    materials: {
      teacher: ["Hình ảnh xói mòn đất, ruộng bậc thang, video ngắn về xói mòn đất."],
      student: ["Giấy A3, bút dạ màu làm việc nhóm."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Ôn lại nguyên nhân gây ô nhiễm và xói mòn đất.",
        teacherActivity: "Hỏi: 'Những hoạt động nào của con người trực tiếp làm đất bị ô nhiễm?'",
        studentActivity: "Trả lời: Sử dụng quá nhiều phân bón hóa học, phun thuốc trừ sâu bừa bãi, vứt rác thải nhựa."
      },
      {
        name: "2. Khám phá",
        objective: "Nhận diện các biện pháp chống xói mòn, bảo vệ đất.",
        teacherActivity: "Chiếu hình ảnh ruộng bậc thang, trồng cây gây rừng, bón phân hữu cơ. Đặt câu hỏi thảo luận: 'Tại sao trồng rừng lại chống được xói mòn đất?'",
        studentActivity: "Thảo luận nhóm 4. Trả lời: Rễ cây giữ đất bám chặt, lá cây cản bớt lực nước mưa rơi trực tiếp làm trôi đất mặt."
      },
      {
        name: "3. Luyện tập",
        objective: "Hệ thống hóa các biện pháp bảo vệ đất.",
        teacherActivity: "Yêu cầu học sinh làm bảng hệ thống phân loại biện pháp: Biện pháp chống xói mòn và Biện pháp chống ô nhiễm đất.",
        studentActivity: "Làm bài nhóm vào giấy A3: Chống xói mòn (trồng rừng, làm ruộng bậc thang); Chống ô nhiễm (sử dụng phân hữu cơ bón đất, phân loại rác thải tại nguồn)."
      },
      {
        name: "4. Vận dụng",
        objective: "Vận động mọi người bảo vệ đất tại địa phương.",
        teacherActivity: "Yêu cầu HS viết 1 thông điệp ngắn kêu gọi gia đình không vứt túi ni-lông ra vườn đất nhà mình.",
        studentActivity: "Viết thông điệp: 'Hãy bón phân xanh, giữ sạch đất lành!' và dán góc học tập."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "5-w3-cn-1": {
    id: "5-w3-cn-1",
    grade: 5,
    subject: "Công nghệ",
    periodNumber: 2,
    curriculumPeriod: 3,
    lessonTitle: "Bài 2: NHÀ SÁNG CHẾ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh bước đầu hiểu khái niệm nhà sáng chế, nhận biết được vai trò và một số đóng góp to lớn của các nhà sáng chế nổi tiếng trong lịch sử nhân loại."
      ],
      generalCompetencies: [
        "Năng lực giải quyết vấn đề và sáng tạo; năng lực tự tìm hiểu thông tin qua bài đọc."
      ],
      qualities: [
        "Chăm chỉ, đam mê khám phá khoa học kỹ thuật."
      ],
      integrations: {
        ai: "4.D1.1 - Từ vấn đề thực tế nảy sinh ý tưởng phát minh; AI hỗ trợ thử nghiệm và mô phỏng sáng chế.",
        digitalCompetence: "1.1.CB1a - Tra cứu tiểu sử nhà sáng chế Thomas Edison trên thư viện số."
      }
    },
    materials: {
      teacher: ["Hình ảnh Thomas Edison, hình ảnh chiếc bóng đèn sợi đốt đầu tiên."],
      student: ["Sách giáo khoa Công nghệ 5."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Kích thích tư duy sáng tạo của học sinh.",
        teacherActivity: "Hỏi: 'Khi tối trời, chúng ta bật đèn điện lên. Ai là người đã nghĩ ra chiếc bóng đèn điện đầu tiên?' Dẫn dắt vào bài mới.",
        studentActivity: "Trả lời: Thomas Edison (Ê-đi-xơn)."
      },
      {
        name: "2. Khám phá",
        objective: "Tìm hiểu về cuộc đời và sự nghiệp sáng chế của Thomas Edison.",
        teacherActivity: "Tổ chức đọc câu chuyện về Thomas Edison trong SGK Công nghệ 5. Hướng dẫn thảo luận nhóm về đức tính kiên trì của ông.",
        studentActivity: "Đọc câu chuyện nối tiếp. Thảo luận: Thomas Edison đã thất bại hàng nghìn lần trước khi tìm ra sợi dây tóc bóng đèn hoàn hảo."
      },
      {
        name: "3. Luyện tập",
        objective: "Xác định các đức tính của một nhà sáng chế.",
        teacherActivity: "Hỏi: 'Theo em, một nhà sáng chế cần có những đức tính gì?' Trình bày bảng phụ các đáp án lựa chọn.",
        studentActivity: "Lựa chọn và ghi vào vở: Kiên trì, say mê quan sát, ham học hỏi, không sợ thất bại."
      },
      {
        name: "4. Vận dụng",
        objective: "Khơi gợi ý tưởng sáng tạo trong học sinh.",
        teacherActivity: "Hỏi: 'Nếu được sáng chế một đồ vật giúp việc học của em dễ dàng hơn, em sẽ sáng chế thứ gì?'",
        studentActivity: "Phát biểu tự do: Hộp bút tự động dọn dẹp, bút thông minh viết không mỏi tay, thước kẻ phát sáng."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },

  // LỚP 1 - MẪU TIẾNG VIỆT & TOÁN (Khối 1 chuẩn CV 2345)
  "1-w1-tv-1": {
    id: "1-w1-tv-1",
    grade: 1,
    subject: "Tiếng Việt",
    subSubject: "Đọc",
    periodNumber: 1,
    curriculumPeriod: 1,
    lessonTitle: "Bài 1: Làm quen với trường lớp, bạn bè, đồ dùng học tập (Tiết 1)",
    week: 1,
    dayOfWeek: "Thứ Hai",
    dateStr: "07/09/2026",
    teacherName: "Nguyễn Thị Phương",
    className: "1A",
    schoolName: "Trường Tiểu học Chibi",
    objectives: {
      specificCompetencies: [
        "Làm quen với thầy cô, bạn bè, môi trường lớp học mới; gọi đúng tên các đồ dùng học tập cơ bản (bảng con, phấn, bút chì, hộp bút, thước kẻ)."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, tự tin giới thiệu họ tên, sở thích với thầy cô và các bạn trong lớp."
      ],
      qualities: [
        "Yêu quý trường lớp, bạn bè, có ý thức giữ gìn đồ dùng học tập cẩn thận."
      ],
      integrations: {
        humanRights: "Quyền con người: Giúp HS nhận biết quyền được học tập, vui chơi, kết bạn trong môi trường an toàn; biết tôn trọng thầy cô và bạn bè.",
        lifeSkills: "Kĩ năng sống: Rèn kĩ năng chào hỏi, giới thiệu bản thân, giữ gìn đồ dùng học tập và thực hiện nền nếp lớp học.",
        ai: "1.A1.1 - Nhận diện AI trong cuộc sống (robot trợ giảng, máy tính) và hiểu con người mới có tình cảm bạn bè thật sự."
      }
    },
    materials: {
      teacher: ["Tranh minh họa lớp học, bộ thẻ từ đồ dùng học tập, tivi trình chiếu."],
      student: ["Bộ đồ dùng học tập Tiếng Việt 1, bảng con, phấn."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Tạo không khí vui tươi, gắn kết học sinh ngày đầu đến lớp.",
        teacherActivity: "Bắt nhịp cả lớp hát bài 'Trường chúng cháu là trường mầm non' và giới thiệu chuyển tiếp lên lớp 1 Tiểu học.",
        studentActivity: "Hát đồng thanh, vỗ tay theo nhịp, ngồi ngay ngắn theo tổ."
      },
      {
        name: "2. Khám phá",
        objective: "Nhận biết các khu vực trong trường lớp và làm quen bạn bè.",
        teacherActivity: "Tổ chức trò chơi 'Bắt tay làm quen'. Cho HS lần lượt đứng dậy giới thiệu tên và sở thích của mình.",
        studentActivity: "Tự tin đứng lên nói: 'Chào các bạn, mình tên là... Sở thích của mình là...'."
      },
      {
        name: "3. Luyện tập",
        objective: "Nhận diện và sắp xếp đồ dùng học tập đúng cách.",
        teacherActivity: "Giơ từng đồ dùng học tập lên (bút chì, thước, tẩy, bảng con) và hướng dẫn cách cầm, cách đặt trên bàn ngay ngắn.",
        studentActivity: "Lấy đúng đồ dùng theo hiệu lệnh của giáo viên, đặt gọn gàng phía góc phải bàn học."
      },
      {
        name: "4. Vận dụng",
        objective: "Hình thành thói quen chào hỏi và giữ gìn đồ dùng.",
        teacherActivity: "Dặn dò học sinh khi tan học chào thầy cô, bố mẹ và cất đồ dùng vào cặp cẩn thận.",
        studentActivity: "Thực hành chào bạn cùng bàn và xếp đồ dùng vào ngăn cặp gọn gàng."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  },
  "1-w1-toan-1": {
    id: "1-w1-toan-1",
    grade: 1,
    subject: "Toán",
    periodNumber: 4,
    curriculumPeriod: 1,
    lessonTitle: "Tiết học đầu tiên - Làm quen với môn Toán",
    week: 1,
    dayOfWeek: "Thứ Hai",
    dateStr: "07/09/2026",
    teacherName: "Nguyễn Thị Phương",
    className: "1A",
    schoolName: "Trường Tiểu học Chibi",
    objectives: {
      specificCompetencies: [
        "Làm quen với sách Toán 1, bộ đồ dùng học Toán 1; nhận biết các biểu tượng, đồ vật, số lượng đơn giản trong thực tế."
      ],
      generalCompetencies: [
        "Năng lực tự chủ lấy đúng bộ thực hành Toán, quan sát tranh ảnh toán học sinh động."
      ],
      qualities: [
        "Yêu thích môn Toán, cẩn thận giữ gìn các que tính, khối hình."
      ],
      integrations: {
        ai: "1.A2.1 - Nhận biết nhân vật Rô-bốt trong sách là một đại diện tiêu biểu của AI hỗ trợ con người học tập Toán.",
        digitalCompetence: "5.2.CB1a - Làm quen với việc quan sát hình ảnh toán học trên màn hình tivi/bảng tương tác."
      }
    },
    materials: {
      teacher: ["Sách Toán 1, bộ thực hành Toán 1 phóng to, hình ảnh bạn Rô-bốt."],
      student: ["Sách Toán 1, hộp que tính, khối lập phương."]
    },
    activities: [
      {
        name: "1. Khởi động",
        objective: "Tạo sự tò mò, hứng thú với cuốn sách Toán mới.",
        teacherActivity: "Cho HS quan sát bìa sách Toán 1 có hình bạn Rô-bốt ngộ nghĩnh và đố: 'Đố các em bạn này là ai?'",
        studentActivity: "Quan sát và reo vui: 'Bạn Rô-bốt!' Thảo luận tại sao bạn Rô-bốt lại học cùng chúng ta."
      },
      {
        name: "2. Khám phá",
        objective: "Khám phá cấu trúc sách và bộ đồ dùng học Toán.",
        teacherActivity: "Hướng dẫn mở từng trang sách, chỉ các biểu tượng học tập: Bàn tay (Khám phá), Cây bút (Hoạt động), Con ong (Luyện tập).",
        studentActivity: "Mở sách theo tay cô, đọc theo tên các biểu tượng trong sách."
      },
      {
        name: "3. Luyện tập",
        objective: "Thực hành mở hộp đồ dùng Toán và nhận biết các vật thể.",
        teacherActivity: "Yêu cầu HS mở hộp đồ dùng, lấy ra 1 que tính màu đỏ, 1 khối vuông nhỏ.",
        studentActivity: "Mở hộp nhẹ nhàng, chọn đúng đồ dùng giơ lên cao cho cô giáo kiểm tra."
      },
      {
        name: "4. Vận dụng",
        objective: "Đếm số đồ vật quanh lớp học.",
        teacherActivity: "Đố học sinh tìm trong lớp có mấy cái quạt trần, mấy chiếc bảng đen.",
        studentActivity: "Quan sát xung quanh lớp và đếm to: 4 cái quạt, 1 chiếc bảng đen."
      }
    ],
    postLessonAdjustment: "..........................................................................................................................................................................."
  }
};

export const CURRICULUM_GRADES: Grade[] = [1, 2, 3, 4, 5];

/**
 * Generate full week Lesson Plans (KHBD) for all items in the schedule
 * When schoolInfo.teacherType === "homeroom", specialist subjects (taught by specialist teachers)
 * are excluded by default so that homeroom teachers only generate KHBD for their directly taught subjects.
 */
export function generateFullWeekLessonPlans(
  schoolInfo: any,
  scheduleItems: ScheduleItem[],
  options?: { includeSpecialistInHomeroom?: boolean }
): LessonPlan[] {
  const plans: LessonPlan[] = [];
  const isHomeroom = schoolInfo.teacherType === "homeroom";
  const includeSpecialist = options?.includeSpecialistInHomeroom ?? false;

  // For homeroom teachers, filter out specialist subjects taught by specialist teachers.
  // Note: Tiết 1 HĐTN (Sinh hoạt dưới cờ / Chào cờ) is fully preserved for lesson planning (KHBD) as required by CV 2345/BGDĐT-GDTH.
  const targetItems = isHomeroom && !includeSpecialist
    ? scheduleItems.filter((it) => {
        if (!it.note) return true;
        const n = it.note;
        return !n.includes("GV Chuyên") &&
               !n.includes("GV Bộ môn") &&
               !n.includes("GV Dạy tiết") &&
               !n.includes("PHT:") &&
               !n.includes("PCGD:") &&
               !n.includes("Thầy Thịnh") &&
               !n.includes("Cô Nương") &&
               !n.includes("Cô D.Phương") &&
               !n.includes("Cô Thy") &&
               !n.includes("Cô Nguyễn Thị Thanh Tâm") &&
               !n.includes("Thầy Phước") &&
               !n.includes("Cô Nhàn") &&
               !n.includes("Phan Ngọc Quan") &&
               !n.includes("Tú Trinh") &&
               !n.includes("Lê Thị Hồng Thủy");
      })
    : scheduleItems;

  // Sort items strictly in chronological order: Day -> Session (Sáng -> Chiều) -> Timetable Period
  const dayOrder: Record<string, number> = {
    "Thứ Hai": 1,
    "Thứ Ba": 2,
    "Thứ Tư": 3,
    "Thứ Năm": 4,
    "Thứ Sáu": 5,
    "Thứ Bảy": 6,
    "Chủ Nhật": 7,
  };

  const sortedItems = [...targetItems].sort((a, b) => {
    const dDiff = (dayOrder[a.day] || 99) - (dayOrder[b.day] || 99);
    if (dDiff !== 0) return dDiff;
    const sDiff = (a.session === "Sáng" ? 1 : 2) - (b.session === "Sáng" ? 1 : 2);
    if (sDiff !== 0) return sDiff;
    return a.period - b.period;
  });

  const dayCounters: Record<string, number> = {};

  sortedItems.forEach((item, idx) => {
    const day = item.day;
    dayCounters[day] = (dayCounters[day] || 0) + 1;
    const currentPeriodInDay = dayCounters[day];

    const itemGrade = (parseInt(item.className.charAt(0)) as Grade) || schoolInfo.grade || 5;

    const subLowerCheck = item.subject.toLowerCase();
    const isSpecialSubject = subLowerCheck.includes("tiếng anh") || subLowerCheck.includes("anh văn") || subLowerCheck.includes("ta") || subLowerCheck.includes("âm nhạc") || subLowerCheck.includes("an");

    // Check if we have an existing sample plan STRICTLY for this grade AND week AND matching subject & curriculum period
    const normSub = item.subject.toLowerCase();
    const sampleKey = !isSpecialSubject ? Object.keys(SAMPLE_LESSON_PLANS).find(k => {
      const sp = SAMPLE_LESSON_PLANS[k];
      if (sp.grade !== itemGrade) return false;
      if (sp.week !== schoolInfo.week) return false;
      const spSub = sp.subject.toLowerCase();
      const subMatches = normSub.includes(spSub) || 
                         spSub.includes(normSub.replace(/\s*\d+$/, "")) ||
                         (normSub.includes("hđtn") && spSub.includes("trải nghiệm")) ||
                         (normSub.includes("trải nghiệm") && spSub.includes("hđtn"));
      if (!subMatches) return false;
      return (
        sp.curriculumPeriod === item.curriculumPeriod ||
        sp.lessonTitle.toLowerCase().trim() === item.lessonTitle.toLowerCase().trim()
      );
    }) : null;

    if (sampleKey && SAMPLE_LESSON_PLANS[sampleKey]) {
      const sp = SAMPLE_LESSON_PLANS[sampleKey];
      plans.push({
        ...sp,
        id: `plan-${item.id}-${idx}`,
        scheduleItemId: item.id,
        orderInLBG: idx + 1,
        grade: itemGrade,
        week: schoolInfo.week,
        dayOfWeek: item.day,
        dateStr: item.dateStr || schoolInfo.startDate,
        session: item.session,
        timetablePeriod: item.period,
        periodNumber: currentPeriodInDay,
        curriculumPeriod: item.curriculumPeriod || currentPeriodInDay,
        teacherName: schoolInfo.teacherName,
        className: item.className || schoolInfo.className,
        schoolName: schoolInfo.schoolName,
        departmentName: schoolInfo.departmentName,
        branchName: schoolInfo.branchName,
      });
      return;
    }

    // Dynamic tailored plan according to subject and grade
    const subLower = item.subject.toLowerCase();
    const titleLower = item.lessonTitle.toLowerCase();

    let specificCompetencies = [
      `Nắm vững kiến thức trọng tâm của bài: ${item.lessonTitle}. Thực hiện đúng các kỹ năng đặc thù môn ${item.subject} theo chuẩn chương trình GDPT 2018 lớp ${itemGrade}.`
    ];
    let teacherMaterials = [
      `Kế hoạch bài dạy, bài giảng điện tử tương tác, tranh ảnh minh họa, phiếu học tập môn ${item.subject} lớp ${itemGrade}.`
    ];
    let studentMaterials = [
      `Sách giáo khoa môn ${item.subject} lớp ${itemGrade}, vở bài tập, đồ dùng học tập cá nhân.`
    ];

    let musicDetail: any = null;
    let englishDetail: any = null;

    if (subLower.includes("tiếng việt") || subLower === "tv" || subLower.includes("tăng cường tiếng việt")) {
      specificCompetencies = [
        `Đọc đúng, diễn cảm, hiểu nội dung tư tưởng và các giá trị nghệ thuật trong bài "${item.lessonTitle}".`,
        `Thực hành kỹ năng dùng từ, đặt câu, viết đoạn văn/bài văn rõ ràng, sinh động; rèn luyện kỹ năng giao tiếp và lắng nghe tích cực.`
      ];
      teacherMaterials = [
        `Sách giáo khoa Tiếng Việt Lớp ${itemGrade}, bài giảng điện tử tương tác, bảng phụ viết đoạn luyện đọc/câu văn hay, thẻ từ ngữ.`
      ];
      studentMaterials = [
        `Sách giáo khoa Tiếng Việt Lớp ${itemGrade}, Vở bài tập Tiếng Việt, vở ghi chép, bảng con, bút mực.`
      ];
    } else if (subLower.includes("toán") || subLower === "toan" || subLower.includes("tăng cường toán")) {
      specificCompetencies = [
        `Nắm vững khái niệm, quy tắc tính toán và phương pháp giải toán trong bài "${item.lessonTitle}".`,
        `Phát triển năng lực tư duy toán học, tính toán chuẩn xác, linh hoạt và vận dụng kiến thức giải bài toán thực tế.`
      ];
      teacherMaterials = [
        `Bộ đồ dùng dạy học Toán Lớp ${itemGrade}, mô hình trực quan, bài giảng trình chiếu các bước giải, phiếu bài tập nhóm.`
      ];
      studentMaterials = [
        `Sách giáo khoa Toán Lớp ${itemGrade}, Vở bài tập Toán, bảng con, phấn/bút dạ, que tính/bộ thực hành Toán cá nhân.`
      ];
    } else if (subLower.includes("khoa học") || subLower === "kh") {
      specificCompetencies = [
        `Nhận biết các hiện tượng, thành phần và quy luật tự nhiên trong bài "${item.lessonTitle}". Rèn luyện phương pháp quan sát, thí nghiệm và tư duy khoa học thực nghiệm.`,
        "Biết bảo vệ tài nguyên thiên nhiên, giữ gìn môi trường sống xung quanh và ứng dụng kiến thức khoa học vào cuộc sống hàng ngày."
      ];
      teacherMaterials = [
        `Mẫu vật thí nghiệm thực tế, tranh ảnh/video thực địa khoa học, kính lúp, dụng cụ thí nghiệm an toàn, phiếu quan sát nhóm.`
      ];
      studentMaterials = [
        `Sách giáo khoa Khoa học Lớp ${itemGrade}, Vở bài tập Khoa học, bút chì màu, mẫu vật theo hướng dẫn của giáo viên.`
      ];
    } else if (subLower.includes("tự nhiên và xã hội") || subLower.includes("tnxh")) {
      specificCompetencies = [
        `Tìm hiểu, quan sát và nêu được các đặc điểm nổi bật về tự nhiên, con người và môi trường sống xung quanh trong bài "${item.lessonTitle}".`,
        "Rèn luyện kỹ năng chăm sóc bản thân, phòng tránh tai nạn thương tích và bảo vệ môi trường sống xanh - sạch - đẹp."
      ];
      teacherMaterials = [
        `Sách giáo khoa TNXH Lớp ${itemGrade}, tranh ảnh phóng to về chủ đề bài học, video thực tế, phiếu học tập theo cặp.`
      ];
      studentMaterials = [
        `Sách giáo khoa TNXH Lớp ${itemGrade}, Vở bài tập TNXH, bộ sưu tập tranh ảnh gia đình/nhà trường theo yêu cầu bài học.`
      ];
    } else if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls&đl") || subLower.includes("lsdl")) {
      specificCompetencies = [
        `Nắm được các mốc thời gian, sự kiện, nhân vật lịch sử tiêu biểu hoặc đặc điểm địa lí tự nhiên, dân cư, kinh tế trong bài "${item.lessonTitle}".`,
        "Hình thành niềm tự hào về truyền thống dân tộc, lòng yêu quê hương đất nước và ý thức giữ gìn di sản văn hóa."
      ];
      teacherMaterials = [
        `Bản đồ/lược đồ lịch sử - địa lí Việt Nam, bài giảng điện tử tương tác, tranh ảnh tư liệu lịch sử quý giá, video tư liệu ngắn.`
      ];
      studentMaterials = [
        `Sách giáo khoa Lịch sử & Địa lí Lớp ${itemGrade}, Vở bài tập, tập bản đồ/lược đồ cá nhân.`
      ];
    } else if (subLower.includes("đạo đức") || subLower === "đđ" || subLower === "dd") {
      specificCompetencies = [
        `Nhận biết các chuẩn mực hành vi đạo đức, hiểu ý nghĩa của việc thực hiện hành vi tốt trong bài "${item.lessonTitle}".`,
        "Biết đồng tình với cái đúng, phê phán hành vi sai trái; rèn luyện thói quen cư xử văn minh, trung thực, nhân ái mỗi ngày."
      ];
      teacherMaterials = [
        `Sách giáo khoa Đạo đức Lớp ${itemGrade}, video/tranh tình huống đạo đức, thẻ tình huống sắm vai, bài giảng điện tử.`
      ];
      studentMaterials = [
        `Sách giáo khoa Đạo đức Lớp ${itemGrade}, Vở bài tập Đạo đức, thẻ bày tỏ ý kiến (Đúng - Sai/Đồng tình - Không đồng tình).`
      ];
    } else if (subLower.includes("công nghệ") || subLower === "cn") {
      specificCompetencies = [
        `Nắm được kiến thức công nghệ cơ bản, quy trình kỹ thuật và thao tác thực hành an toàn trong bài "${item.lessonTitle}".`,
        "Phát triển tư duy thiết kế, rèn luyện kỹ năng khéo léo và thói quen bảo quản, sử dụng đồ dùng công nghệ tiết kiệm, bền đẹp."
      ];
      teacherMaterials = [
        `Vật mẫu kỹ thuật thật, dụng cụ và vật liệu thực hành mẫu của giáo viên, video clip hướng dẫn từng bước kỹ thuật.`
      ];
      studentMaterials = [
        `Sách giáo khoa Công nghệ Lớp ${itemGrade}, Vở bài tập Công nghệ, bộ vật liệu thực hành theo hướng dẫn (giấy, kéo, que kem, hạt mầm,...).`
      ];
    } else if (subLower.includes("tiếng anh") || subLower.includes("anh văn") || subLower.includes("ta")) {
      englishDetail = getDetailedEnglishLesson(itemGrade, schoolInfo.week, item.lessonTitle, item.period);
      specificCompetencies = englishDetail.specificCompetencies;
      teacherMaterials = englishDetail.teacherMaterials;
      studentMaterials = englishDetail.studentMaterials;
    } else if (subLower.includes("tin học") || subLower.includes("th")) {
      specificCompetencies = [
        `Nắm vững các thao tác và kiến thức công nghệ số trong bài "${item.lessonTitle}". Rèn luyện Năng lực số (CV 3456/BGDĐT-GDTH) và tư duy logic.`,
        "Biết cách sử dụng thiết bị số an toàn, bảo mật thông tin cá nhân và tuân thủ quy tắc phòng máy tính."
      ];
      teacherMaterials = [
        "Phòng máy vi tính nối mạng an toàn, máy chiếu/màn hình lớn, phần mềm học tập mô phỏng, bài giảng điện tử.",
        "Tài liệu hướng dẫn an toàn thông tin số cho học sinh tiểu học."
      ];
      studentMaterials = [
        `Sách giáo khoa Tin học Lớp ${itemGrade}, vở thực hành, máy tính cá nhân trong phòng máy.`
      ];
    } else if (subLower.includes("âm nhạc") || subLower.includes("an")) {
      const isEnhance = subLower.includes("tăng cường") || subLower.includes("bồi dưỡng") || subLower.includes("tcan") || subLower.includes("bdan") || (item.session === "Chiều");
      musicDetail = getDetailedMusicLesson(itemGrade, schoolInfo.week, isEnhance, item.session === "Chiều" ? "Chiều" : "Sáng");
      specificCompetencies = musicDetail.specificCompetencies;
      teacherMaterials = musicDetail.teacherMaterials;
      studentMaterials = musicDetail.studentMaterials;
    } else if (subLower.includes("mĩ thuật") || subLower.includes("mt")) {
      specificCompetencies = [
        `Nhận biết và ứng dụng các yếu tố tạo hình (đường nét, màu sắc, hình khối) trong bài "${item.lessonTitle}".`,
        "Sáng tạo sản phẩm mĩ thuật độc đáo từ các vật liệu quen thuộc, thân thiện với môi trường (STEM) và tự tin trưng bày, chia sẻ cảm xúc."
      ];
      teacherMaterials = [
        `Sản phẩm mĩ thuật mẫu phong phú, bài giảng trình chiếu các bước tạo hình, bảng đính triển lãm 'Phòng tranh nhí'.`
      ];
      studentMaterials = [
        `Sách giáo khoa Mĩ thuật Lớp ${itemGrade}, giấy vẽ A4, màu vẽ (sáp màu/màu nước), đất nặn hoặc vật liệu thủ công tái chế.`
      ];
    } else if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
      specificCompetencies = [
        `Thực hiện đúng biên độ kỹ thuật động tác và khẩu lệnh chỉ huy trong bài "${item.lessonTitle}". Nâng cao thể lực, sự nhanh nhẹn và phản xạ vận động.`,
        "Hình thành thói quen rèn luyện thân thể mỗi ngày, giữ gìn kỷ luật trật tự và đảm bảo an toàn tuyệt đối khi tập luyện."
      ];
      teacherMaterials = [
        `Sân bãi tập luyện sạch sẽ, thoáng mát, còi chỉ huy, đồng hồ bấm giờ, tranh kỹ thuật động tác thể dục, dụng cụ trò chơi vận động.`
      ];
      studentMaterials = [
        `Trang phục thể thao gọn gàng, giày bata đúng quy định, bình nước cá nhân.`
      ];
    } else if (subLower.includes("hđtn") || subLower.includes("hoạt động trải nghiệm") || subLower.includes("hdtn")) {
      const cPeriod = typeof item.curriculumPeriod === "number" ? item.curriculumPeriod : (parseInt(String(item.curriculumPeriod || 0), 10) || 0);
      const isPeriod1 = (item.period === 1 && item.day === "Thứ Hai") || 
                        item.subSubject === "Sinh hoạt dưới cờ" || 
                        item.lessonTitle.toLowerCase().includes("sinh hoạt dưới cờ") ||
                        item.lessonTitle.toLowerCase().includes("shdc") ||
                        (cPeriod > 0 && cPeriod % 3 === 1);

      const isPeriod3 = item.subSubject === "Sinh hoạt lớp" || 
                        item.lessonTitle.toLowerCase().includes("sinh hoạt lớp") ||
                        item.lessonTitle.toLowerCase().includes("shl") ||
                        (cPeriod > 0 && cPeriod % 3 === 0);

      if (isPeriod1) {
        specificCompetencies = [
          `Thực hiện nghiêm túc, trang nghiêm nghi lễ Chào cờ đầu tuần theo quy định Đội TNTP Hồ Chí Minh. Nâng cao lòng tự hào dân tộc và ý thức kỷ luật học đường.`,
          `Chủ động, tích cực tham gia hoạt động trải nghiệm, giao lưu theo chủ đề dưới cờ: "${item.lessonTitle}". Nắm vững chỉ tiêu thi đua tuần học mới của nhà trường và Liên đội.`
        ];
        teacherMaterials = [
          "Kế hoạch tuần, sổ theo dõi nền nếp lớp, bài phát động thi đua theo chủ đề dưới cờ của nhà trường và Liên đội.",
          "Hệ thống âm thanh, micro, cờ Tổ quốc phục vụ nghi lễ."
        ];
        studentMaterials = [
          "Trang phục học sinh chỉnh tề, sạch đẹp (áo đồng phục, khăn quàng đỏ, bảng tên, mũ/ghế ngồi theo quy định)."
        ];
      } else if (isPeriod3) {
        specificCompetencies = [
          `Đánh giá được những ưu điểm và hạn chế trong các hoạt động học tập, rèn luyện nền nếp của bản thân và tập thể lớp trong tuần qua.`,
          `Rèn luyện năng lực tự quản, tự tin phát biểu ý kiến, thống nhất phương hướng thi đua tuần mới và tham gia sinh hoạt theo chủ đề: "${item.lessonTitle}".`
        ];
        teacherMaterials = [
          "Sổ chủ nhiệm, bảng tổng hợp điểm thi đua các tổ trong tuần, kế hoạch hoạt động tuần tiếp theo."
        ];
        studentMaterials = [
          "Sổ theo dõi thi đua của ban cán sự lớp, sổ ghi chép cá nhân, phiếu tự đánh giá rèn luyện."
        ];
      } else {
        specificCompetencies = [
          `Khám phá kiến thức mới, rèn luyện kỹ năng và hình thành thói quen tích cực gắn với chủ đề bài học: "${item.lessonTitle}".`,
          `Tự tin bày tỏ ý kiến, lắng nghe và hợp tác hiệu quả cùng bạn bè trong các hoạt động trải nghiệm thực tế.`
        ];
        teacherMaterials = [
          "Kế hoạch bài dạy, bài giảng điện tử/tranh ảnh minh họa chủ đề, phiếu học tập nhóm, thẻ tình huống thực tế."
        ];
        studentMaterials = [
          `Sách giáo khoa/Vở bài tập Hoạt động trải nghiệm Lớp ${itemGrade}, đồ dùng học tập, vật liệu trải nghiệm theo hướng dẫn của GV.`
        ];
      }
    }

    // Determine final activities with rich pedagogical steps (HĐGV: GV cần nội dung gì cho HS | HĐHS: HS làm nội dung gì)
    let finalActivities: any[] = [];
    if (musicDetail) {
      finalActivities = musicDetail.activities;
    } else if (englishDetail) {
      finalActivities = englishDetail.activities;
    } else {
      finalActivities = generateSubjectSpecificActivities(
        item.subject,
        item.lessonTitle,
        itemGrade,
        item.curriculumPeriod || currentPeriodInDay,
        item.subSubject,
        item.integrationNotes
      );
      // If item has specific pedagogical activities from KHDH, seamlessly integrate them into the activities
      if (item.actGV && item.actHS && finalActivities.length >= 2) {
        finalActivities[1] = {
          ...finalActivities[1],
          teacherActivity: `${finalActivities[1].teacherActivity}\n\n★ HƯỚNG DẪN DẠY HỌC TRỌNG TÂM THEO KHDH (GV LÀM GÌ CHO HS):\n${item.actGV}`,
          studentActivity: `${finalActivities[1].studentActivity}\n\n★ NỘI DUNG HOẠT ĐỘNG HỌC THEO KHDH (HS LÀM NỘI DUNG GÌ):\n${item.actHS}`,
        };
      }
    }

    // Dynamic CV 2345 plan
    plans.push({
      id: `plan-${item.id}-${idx}`,
      scheduleItemId: item.id,
      orderInLBG: idx + 1,
      grade: itemGrade,
      subject: item.subject,
      subSubject: item.subSubject,
      lessonTitle: musicDetail ? musicDetail.lessonTitle : (englishDetail ? englishDetail.lessonTitle : item.lessonTitle),
      session: item.session,
      timetablePeriod: item.period,
      periodNumber: currentPeriodInDay,
      curriculumPeriod: item.curriculumPeriod || currentPeriodInDay,
      week: schoolInfo.week,
      dayOfWeek: item.day,
      dateStr: item.dateStr || schoolInfo.startDate,
      teacherName: schoolInfo.teacherName,
      className: item.className || schoolInfo.className,
      schoolName: schoolInfo.schoolName,
      departmentName: schoolInfo.departmentName,
      branchName: schoolInfo.branchName,
      songTitle: musicDetail ? musicDetail.songTitle : undefined,
      composer: musicDetail ? musicDetail.composer : undefined,
      songLyrics: musicDetail ? musicDetail.songLyrics : undefined,
      englishVocabulary: englishDetail ? englishDetail.vocabulary : undefined,
      sentencePatterns: englishDetail ? englishDetail.sentencePatterns : undefined,
      actGV: item.actGV,
      actHS: item.actHS,
      objectives: {
        specificCompetencies,
        generalCompetencies: [
          "Năng lực tự chủ và tự học: Tự giác chuẩn bị đầy đủ sách vở, đồ dùng học tập, chủ động hoàn thành nhiệm vụ cá nhân.",
          "Năng lực giao tiếp và hợp tác: Tích cực thảo luận nhóm, biết lắng nghe, tôn trọng và chia sẻ ý kiến với bạn bè.",
          "Năng lực giải quyết vấn đề và sáng tạo: Biết vận dụng kiến thức bài học để xử lý tình huống linh hoạt."
        ],
        qualities: [
          "Yêu nước, nhân ái: Tự hào về văn hóa, con người Việt Nam, yêu thương và giúp đỡ mọi người xung quanh.",
          "Chăm chỉ, trung thực: Cần cù trong học tập, trung thực trong làm bài và sinh hoạt lớp.",
          "Trách nhiệm: Có ý thức bảo vệ của công, giữ gìn vệ sinh chung và bảo vệ môi trường sống."
        ],
        integrations: {
          ai: item.integrationNotes?.includes("AI") 
            ? (item.integrationNotes.split("|").find(s => s.includes("AI"))?.trim() || "Tích hợp AI: Làm quen ứng dụng công nghệ trí tuệ nhân tạo hỗ trợ học tập.")
            : undefined,
          digitalCompetence: item.integrationNotes?.includes("NLS") 
            ? (item.integrationNotes.split("|").find(s => s.includes("NLS"))?.trim() || "Tích hợp Năng lực số (CV 3456/BGDĐT-GDTH): Khám phá và sử dụng công nghệ số an toàn.")
            : undefined,
          humanRights: item.integrationNotes?.includes("QCN") 
            ? (item.integrationNotes.split("|").find(s => s.includes("QCN"))?.trim() || "Giáo dục quyền trẻ em (QCN): Tôn trọng sự khác biệt, bình đẳng và an toàn thân thể.")
            : undefined,
          defense: (item.integrationNotes?.includes("GDQPAN") || item.integrationNotes?.includes("quốc phòng")) 
            ? (item.integrationNotes.split("|").find(s => s.includes("GDQPAN") || s.includes("quốc phòng"))?.trim() || "Lồng ghép GDQPAN (TT 08/2024): Tự hào truyền thống yêu nước, ý thức bảo vệ chủ quyền quê hương.")
            : undefined,
          nutrition: item.integrationNotes?.includes("GDDD") 
            ? (item.integrationNotes.split("|").find(s => s.includes("GDDD"))?.trim() || "Giáo dục Dinh dưỡng học đường (GDDD): Lựa chọn thực phẩm lành mạnh, giữ gìn sức khỏe.")
            : undefined,
          stem: item.integrationNotes?.includes("STEM") 
            ? (item.integrationNotes.split("|").find(s => s.includes("STEM"))?.trim() || "Giáo dục STEM / Học thông qua chơi: Vận dụng kiến thức liên môn giải quyết vấn đề thực tiễn.")
            : undefined,
        }
      },
      materials: {
        teacher: teacherMaterials,
        student: studentMaterials
      },
      activities: finalActivities,
      postLessonAdjustment: "..........................................................................................................................................................................."
    });
  });

  return plans;
}
