import { Grade, LessonActivity } from "../types";

/**
 * Helper to extract clean lesson core name
 */
function cleanLessonName(title: string): string {
  return title
    .replace(/^Bài\s*\d+:\s*/i, "")
    .replace(/^Tiết\s*\d+:\s*/i, "")
    .replace(/\s*\(Tiết\s*\d+[^)]*\)/i, "")
    .trim();
}

/**
 * Generate rich, structured activities for any elementary subject
 * strictly adhering to CV 2345/BGDĐT-GDTH:
 * - Clear distinction of:
 *   + GV làm gì cho HS: GV giao nhiệm vụ gì, câu hỏi/ngữ liệu nào, hướng dẫn và chốt kiến thức gì.
 *   + HS làm nội dung gì: HS tiếp nhận, đọc/viết/tính/thực hành nội dung cụ thể gì, báo cáo ra sao, tự sửa bài thế nào.
 */
export function generateSubjectSpecificActivities(
  subject: string,
  lessonTitle: string,
  grade: Grade | number,
  curriculumPeriod: number | string,
  subSubject?: string,
  integrationNotes?: string
): LessonActivity[] {
  const subLower = subject.toLowerCase();
  const titleLower = lessonTitle.toLowerCase();
  const cleanTitle = cleanLessonName(lessonTitle);

  // 1. TIẾNG VIỆT
  if (subLower.includes("tiếng việt") || subLower === "tv" || subLower.includes("tăng cường tiếng việt")) {
    const isDoc = subSubject?.toLowerCase().includes("đọc") || titleLower.includes("đọc") || (!subSubject && (curriculumPeriod as number) % 4 <= 2);
    const isViet = subSubject?.toLowerCase().includes("viết") || titleLower.includes("viết") || titleLower.includes("chính tả");
    const isLtvc = subSubject?.toLowerCase().includes("luyện từ và câu") || subSubject?.toLowerCase().includes("ltvc") || titleLower.includes("từ ngữ") || titleLower.includes("câu") || titleLower.includes("đại từ") || titleLower.includes("từ đồng nghĩa");
    const isNoiNghe = subSubject?.toLowerCase().includes("nói và nghe") || titleLower.includes("nói và nghe") || titleLower.includes("kể chuyện");

    if (isDoc) {
      return [
        {
          name: "1. Khởi động (5 phút)",
          objective: "Kích hoạt kiến thức nền tảng, tạo hứng thú và tâm thế tích cực bước vào bài đọc mới.",
          teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Trình chiếu tranh minh họa bài đọc "${cleanTitle}" lên bảng tương tác / màn hình tivi.
- Đặt câu hỏi gợi mở: "Các em quan sát tranh và cho cô/thầy biết: Bức tranh vẽ cảnh gì? Các nhân vật trong tranh đang làm gì và có cảm xúc như thế nào?"
2. Hướng dẫn & điều hành:
- Cho học sinh suy nghĩ cá nhân trong 1 phút, sau đó thảo luận nhóm đôi trao đổi nhanh.
- Gọi 2-3 học sinh xung phong chia sẻ ý kiến trước lớp.
3. Đánh giá & Giới thiệu bài:
- GV nhận xét câu trả lời, tuyên dương sự quan sát tinh tế của học sinh.
- Kết nối dẫn dắt vào bài đọc: "${lessonTitle}".`,
          studentActivity: `1. Tiếp nhận nhiệm vụ:
- Mở SGK Tiếng Việt Lớp ${grade}, quan sát hình ảnh minh họa trên màn hình và trong sách.
2. Thao tác cụ thể (HS làm nội dung gì):
- Làm việc cá nhân: Quan sát chi tiết cảnh vật, nét mặt, hành động của nhân vật trong tranh.
- Thảo luận cặp đôi: Chia sẻ với bạn bên cạnh những điều mình phát hiện được qua tranh ảnh.
3. Báo cáo kết quả:
- 2-3 HS giơ tay phát biểu ý kiến: Nêu rõ cảnh vật, màu sắc và cảm nhận ban đầu của mình.
- Các bạn lắng nghe, nhận xét bổ sung thêm chi tiết bạn chưa nói tới.
4. Tâm thế bước vào bài học: Lắng nghe lời dẫn của thầy cô, mở vở ghi tên bài đọc.`
        },
        {
          name: "2. Khám phá: Luyện đọc thành tiếng & Tìm hiểu từ ngữ (15 phút)",
          objective: `Đọc đúng, trôi chảy toàn bài "${cleanTitle}", phát âm chuẩn từ ngữ khó, ngắt nghỉ hơi đúng ngữ pháp và nhịp thơ/câu văn.`,
          teacherActivity: `1. Đọc mẫu toàn bài:
- GV đọc mẫu toàn bài đọc với giọng truyền cảm, nhấn giọng ở những từ ngữ gợi tả, gợi cảm, ngắt nghỉ đúng dấu câu và nhịp cảm xúc.
2. Hướng dẫn chia đoạn & Luyện đọc câu khó:
- GV hướng dẫn cả lớp chia bài làm các đoạn (hoặc các khổ thơ).
- Chỉ định các từ ngữ dễ phát âm sai (phụ âm đầu, dấu thanh, vần khó) và câu dài cần ngắt giọng: Ghi từ khó lên góc bảng.
- Đọc mẫu từ khó và câu dài, bắt nhịp cho học sinh đọc lại.
3. Tổ chức luyện đọc nối tiếp theo nhóm:
- Yêu cầu HS luyện đọc từng đoạn trong nhóm 4: Mỗi bạn đọc 1 đoạn nối tiếp nhau đến hết bài.
- GV đi vòng quanh các nhóm, lắng nghe, phát hiện lỗi phát âm hoặc ngắt nghỉ sai để kịp thời hỗ trợ, sửa chữa cho từng em.`,
          studentActivity: `1. Lắng nghe & Theo dõi:
- Dùng ngón tay/thước kẻ chỉ theo từng câu chữ trong SGK, lắng nghe thầy cô đọc mẫu, cảm nhận nhịp điệu bài đọc.
2. Luyện đọc từ ngữ và câu khó:
- Cả lớp đồng thanh đọc các từ khó trên bảng lớp theo hướng dẫn của GV.
- Cá nhân đứng dậy luyện đọc câu văn dài, chú ý lấy hơi và ngắt nghỉ đúng chỗ đánh dấu.
3. Thực hành đọc đoạn theo nhóm (HS làm nội dung gì):
- Luyện đọc nhóm 4: Lần lượt từng bạn đọc to một đoạn, các bạn trong nhóm theo dõi và chỉ ra chỗ đọc sai nếu có.
- Đại diện 3-4 nhóm đứng dậy đọc nối tiếp các đoạn trước lớp.
- Học sinh cả lớp nhận xét giọng đọc của bạn: Đọc đã to, rõ ràng, ngắt nghỉ đúng chưa.`
        },
        {
          name: "3. Luyện tập: Tìm hiểu nội dung bài & Đọc diễn cảm (10 phút)",
          objective: "Hiểu nội dung chính, các chi tiết nghệ thuật và thông điệp nhân văn mà tác giả gửi gắm qua bài đọc.",
          teacherActivity: `1. Giao nhiệm vụ tìm hiểu bài (GV làm gì cho HS):
- Nêu lần lượt các câu hỏi đọc hiểu trong SGK gắn với từng đoạn của bài "${cleanTitle}".
- Giao nhiệm vụ cho các nhóm: Nhóm 1-2 thảo luận Câu hỏi 1 & 2; Nhóm 3-4 thảo luận Câu hỏi 3 & 4.
2. Hướng dẫn & Hỗ trợ:
- Gợi ý từ khóa giúp học sinh tìm thấy chi tiết trả lời ngay trong bài đọc.
- Đặt câu hỏi kích thích tư duy nâng cao: "Chi tiết nào trong bài làm em xúc động hoặc ấn tượng nhất? Vì sao?"
3. Điều hành báo cáo & Chốt ý nghĩa bài đọc:
- Mời đại diện các nhóm đứng dậy trả lời. Cho các bạn khác phản biện, bổ sung.
- GV chuẩn hóa câu trả lời, chốt lại nội dung và ý nghĩa sâu sắc của bài đọc lên bảng. Hướng dẫn đọc diễn cảm lại đoạn hay nhất.`,
          studentActivity: `1. Tiếp nhận nhiệm vụ đọc hiểu:
- Đọc thầm lại bài đọc, dùng bút chì gạch chân các chi tiết, từ ngữ trả lời cho từng câu hỏi trong SGK.
2. Thảo luận nhóm (HS làm nội dung gì):
- Các thành viên trong nhóm sôi nổi trao đổi, thống nhất câu trả lời cho nhiệm vụ được phân công.
3. Báo cáo & Tranh luận:
- Đại diện nhóm tự tin đứng dậy phát biểu câu trả lời rõ ràng, mạch lạc.
- Các nhóm khác lắng nghe, nhận xét, bổ sung ý kiến hoặc nêu cách hiểu khác của nhóm mình.
4. Luyện đọc diễn cảm:
- Lắng nghe thầy cô chốt ý nghĩa bài đọc.
- Luyện đọc lại đoạn văn/khổ thơ tâm đắc với giọng đọc diễn cảm, giàu cảm xúc.`
        },
        {
          name: "4. Vận dụng & Liên hệ thực tiễn (5 phút)",
          objective: "Vận dụng thông điệp bài học vào cuộc sống hàng ngày, rèn luyện phẩm chất tốt đẹp và năng lực tự học.",
          teacherActivity: `1. Giao tình huống vận dụng (GV làm gì cho HS):
- Đặt câu hỏi liên hệ: "Sau khi học xong bài đọc '${cleanTitle}', em rút ra được bài học gì cho bản thân? Em sẽ làm gì để thể hiện điều đó trong gia đình và trường lớp?"
- Nhắc nhở nội dung tích hợp (Kỹ năng sống, Bảo vệ môi trường, Quyền con người, AI/Năng lực số nếu có).
2. Nhận xét tiết học & Dặn dò:
- Tuyên dương các bạn đọc to, diễn cảm và tích cực phát biểu xây dựng bài.
- Dặn dò HS về nhà đọc lại bài cho người thân nghe và chuẩn bị bài học tiếp theo.`,
          studentActivity: `1. Suy nghĩ & Liên hệ bản thân (HS làm nội dung gì):
- Suy nghĩ và liên hệ với cuộc sống thực tế của chính mình (về tình cảm gia đình, tình bạn bè, chăm sóc cây cối, tôn trọng người khác...).
- 2-3 HS tự tin xung phong chia sẻ bài học thực tế trước lớp.
2. Tiếp nhận dặn dò:
- Ghi nhớ lời thầy cô dặn dò, luyện đọc bài thêm ở nhà và tự giác chuẩn bị bài mới.`
        }
      ];
    }

    if (isViet) {
      return [
        {
          name: "1. Khởi động (5 phút)",
          objective: "Ôn lại kỹ năng viết chữ, tạo hứng thú và chuẩn bị tư thế ngồi viết chuẩn cho học sinh.",
          teacherActivity: `1. Giao nhiệm vụ khởi động:
- Cho cả lớp khởi động bằng trò chơi "Bút xinh khéo tay" hoặc vận động nhẹ các khớp ngón tay, cổ tay theo điệu nhạc.
- Nhắc lại quy tắc tư thế ngồi viết chuẩn: Lưng thẳng, ngực không tì vào bàn, đầu hơi cúi, mắt cách vở 25-30cm, tay phải cầm bút, tay trái tì nhẹ mép vở.
2. Đánh giá & Dẫn dắt:
- Nhận xét tư thế ngồi của học sinh, giới thiệu bài viết hôm nay: "${lessonTitle}".`,
          studentActivity: `1. Khởi động các ngón tay:
- Xoay nhẹ cổ tay, gập duỗi các ngón tay theo nhịp nhạc vui tươi.
2. Chỉnh đốn tư thế ngồi viết:
- Ngồi ngay ngắn, lưng thẳng, hai bàn chân đặt vuông góc trên sàn, mở vở Tập viết / Vở bài tập sạch sẽ.`
        },
        {
          name: "2. Khám phá: Hướng dẫn quy trình viết / Phân tích chữ mẫu / Đoạn văn mẫu (12 phút)",
          objective: `Nắm chắc cấu tạo nét chữ, quy tắc chính tả hoặc cấu trúc đoạn văn cần viết trong bài "${cleanTitle}".`,
          teacherActivity: `1. Giới thiệu mẫu viết (GV làm gì cho HS):
- Treo chữ mẫu / Trình chiếu đoạn văn chính tả mẫu lên bảng lớp.
- Đọc mẫu đoạn văn chính tả hoặc phân tích cấu tạo chữ hoa (độ cao, độ rộng, gồm những nét cơ bản nào).
2. Hướng dẫn phân tích & Viết mẫu:
- Đặt câu hỏi: "Chữ hoa này gồm mấy nét? Cao mấy li? Khoảng cách giữa các con chữ là bao nhiêu?"
- Viết mẫu từng nét lên bảng lớp vừa viết vừa thuyết minh chi tiết điểm đặt bút, điểm dừng bút, chỗ lượn nét.
- Chỉ định các từ dễ viết sai chính tả (phụ âm đầu, vần, dấu thanh) cho HS luyện viết bảng con.
3. Quan sát & Sửa sai trên bảng con:
- Yêu cầu HS viết từ khó / chữ hoa vào bảng con. GV quan sát cả lớp, chọn một số bảng viết đẹp và một số bảng còn lỗi (nghiêng nét, sai li) để nhận xét, uốn nắn.`,
          studentActivity: `1. Quan sát & Phân tích mẫu:
- Quan sát chữ mẫu / đoạn văn mẫu trên bảng lớp. Lắng nghe thầy cô phân tích cấu tạo từng nét chữ.
2. Thao tác trên bảng con (HS làm nội dung gì):
- Cầm phấn đúng quy cách, viết chữ hoa hoặc các từ ngữ khó vào bảng con.
- Giơ bảng con ngay ngắn theo khẩu lệnh của giáo viên.
3. Nhận xét & Khắc phục lỗi:
- Quan sát bài của bạn được GV nhận xét trên bảng, đối chiếu với bảng con của mình để tự điều chỉnh nét chữ cho chuẩn li, đẹp mắt.`
        },
        {
          name: "3. Luyện tập: Thực hành viết vào vở & Hướng dẫn cá nhân (13 phút)",
          objective: "Thực hành viết đúng, viết đẹp, đúng khoảng cách, đều nét và giữ vở sạch đẹp.",
          teacherActivity: `1. Giao nhiệm vụ thực hành viết vở (GV làm gì cho HS):
- Nêu rõ yêu cầu số dòng cần viết: Viết mấy dòng chữ hoa, viết mấy dòng từ ứng dụng, viết đoạn chính tả (hoặc viết đoạn văn 4-5 câu theo gợi ý).
- Nhắc nhở học sinh giữ khoảng cách giữa các chữ bằng một thân con chữ o.
2. Theo dõi & Hỗ trợ từng học sinh:
- GV đi từng bàn quan sát, cầm tay uốn nắn cho những em viết nét còn run, chưa đúng độ cao li hoặc sai khoảng cách.
- Nhắc nhở kịp thời những em ngồi sai tư thế hoặc để mắt quá sát mặt bàn.`,
          studentActivity: `1. Thực hành viết vở (HS làm nội dung gì):
- Tập trung cao độ, viết cẩn thận từng nét chữ vào vở Tập viết / Vở chính tả / Vở bài tập.
- Nắn nót viết đúng dòng kẻ, đúng độ cao con chữ, giữ trang vở sạch sẽ không quăn mép.
- Đối với bài viết đoạn văn: Tự giác viết các câu văn hoàn chỉnh theo đúng cấu trúc ngữ pháp và ý tưởng cá nhân.
2. Tự kiểm tra:
- Đọc lại bài viết của mình, tự dò lại dấu thanh, dấu chấm câu và sửa các lỗi viết nhầm (nếu có).`
        },
        {
          name: "4. Đánh giá, chữa bài & Vận dụng (5 phút)",
          objective: "Nhận xét, đánh giá sản phẩm bài viết, rèn luyện tính cẩn thận và thói quen giữ gìn sách vở.",
          teacherActivity: `1. Thu bài & Chấm chữa bài:
- GV chọn 5-7 bài viết tại lớp, chấm điểm và nhận xét trực tiếp ưu điểm, nhược điểm về nét chữ, độ cao, khoảng cách và chính tả.
- Tuyên dương những học sinh có nét chữ tiến bộ, trình bày sạch đẹp.
2. Củng cố & Dặn dò:
- Nhắc lại quy tắc chính tả vừa học. Dặn HS về nhà luyện viết thêm phần bài tập về nhà.`,
          studentActivity: `1. Đánh giá chéo & Quan sát bài viết mẫu:
- Đổi vở cho bạn bên cạnh cùng kiểm tra chéo nét chữ và phát hiện lỗi.
- Quan sát bài viết đẹp của bạn được cô biểu dương trên bảng để học tập.
2. Thu dọn đồ dùng: Đóng nắp bút, cất bảng con và vở gọn gàng vào ngăn bàn.`
        }
      ];
    }

    if (isLtvc) {
      return [
        {
          name: "1. Khởi động (5 phút)",
          objective: "Kích hoạt kiến thức từ ngữ đã học, tạo không khí vui tươi, hứng khởi.",
          teacherActivity: `1. Giao nhiệm vụ khởi động:
- Tổ chức trò chơi nhanh: "Ong tìm hoa" hoặc "Truyền điện" với các câu hỏi ngắn liên quan đến kiến thức bài trước.
2. Đánh giá & Dẫn nhập:
- Nhận xét phần trả lời của học sinh, giới thiệu bài học Luyện từ và câu: "${lessonTitle}".`,
          studentActivity: `1. Tham gia trò chơi khởi động:
- Lắng nghe luật chơi, nhanh nhẹn giơ tay tiếp nhận câu hỏi và trả lời to, rõ ràng.
2. Kết nối bài mới: Chú ý lắng nghe thầy cô giới thiệu bài mới, mở SGK Tiếng Việt.`
        },
        {
          name: "2. Khám phá: Nhận diện hiện tượng ngôn ngữ & Rút ra ghi nhớ (15 phút)",
          objective: `Hiểu rõ khái niệm, đặc điểm và quy tắc sử dụng của hiện tượng từ ngữ/ngữ pháp trong bài "${cleanTitle}".`,
          teacherActivity: `1. Giao ngữ liệu mẫu (GV làm gì cho HS):
- Trình chiếu đoạn ngữ liệu mẫu trong SGK lên bảng phụ hoặc máy chiếu.
- Giao nhiệm vụ: "Các em hãy đọc thầm ngữ liệu và tìm các từ in đậm/từ được gạch chân. Thảo luận nhóm 2 xem các từ đó có điểm gì giống và khác nhau?"
2. Hướng dẫn & Dẫn dắt học sinh khám phá:
- Đặt câu hỏi gợi mở từng bước giúp học sinh tự phát hiện quy luật từ ngữ/ngữ pháp.
- Ghi nhận các phát biểu của học sinh lên bảng lớp thành bảng so sánh trực quan.
3. Chốt kiến thức & Rút ra Ghi nhớ:
- Tổng hợp ý kiến, kết luận bản chất kiến thức và mời 2-3 học sinh đọc to khung Ghi nhớ trong SGK.`,
          studentActivity: `1. Phân tích ngữ liệu (HS làm nội dung gì):
- Đọc thầm đoạn văn ngữ liệu, dùng bút chì gạch chân các từ ngữ trọng tâm theo yêu cầu của GV.
2. Thảo luận cặp đôi:
- Trao đổi với bạn cùng bàn về ý nghĩa, từ loại hoặc tác dụng của các từ ngữ đó trong câu.
3. Báo cáo & Rút ra kết luận:
- Đại diện học sinh xung phong phát biểu ý kiến.
- Đọc to phần Ghi nhớ trong SGK, nhắc lại định nghĩa và ví dụ minh họa cùng cả lớp.`
        },
        {
          name: "3. Luyện tập: Thực hành bài tập trên phiếu / Vở bài tập (12 phút)",
          objective: "Vận dụng kiến thức vừa học để giải quyết chính xác các bài tập trong SGK.",
          teacherActivity: `1. Giao bài tập luyện tập (GV làm gì cho HS):
- Hướng dẫn lần lượt Bài tập 1, Bài tập 2, Bài tập 3 trong SGK.
- Phân công: Bài 1 làm việc cá nhân vào vở; Bài 2 thảo luận nhóm đôi làm vào phiếu học tập; Bài 3 làm việc cá nhân viết câu.
2. Quan sát & Giúp đỡ:
- GV đi quanh lớp quan sát tiến độ làm bài, hỗ trợ giải thích thêm cho những em chưa hiểu rõ yêu cầu đề bài.
3. Điều hành chữa bài:
- Mời học sinh lên bảng điền từ / nối câu / viết câu hoàn chỉnh.
- Tổ chức cho lớp nhận xét, phân tích đúng sai, chốt đáp án chuẩn mực.`,
          studentActivity: `1. Thực hành giải bài tập (HS làm nội dung gì):
- Đọc kỹ yêu cầu từng bài tập trong SGK / Vở bài tập.
- Làm Bài 1 vào vở: Tìm và phân loại từ ngữ chính xác.
- Thảo luận cặp đôi hoàn thành Bài 2 trên phiếu học tập.
- Viết 1-2 câu hoàn chỉnh có sử dụng từ ngữ vừa học vào vở cho Bài 3.
2. Báo cáo bài làm:
- 3 HS đại diện lên bảng làm bài tập. Các bạn dưới lớp đối chiếu kết quả bài làm của mình.
- Nhận xét bài làm của bạn trên bảng về độ chính xác và cách dùng từ.`
        },
        {
          name: "4. Vận dụng & Đặt câu thực tế (5 phút)",
          objective: "Vận dụng từ ngữ, ngữ pháp vào giao tiếp hàng ngày và viết văn.",
          teacherActivity: `1. Giao thử thách vận dụng:
- Yêu cầu HS đặt một câu hoàn chỉnh về chủ đề gia đình, trường học hoặc thiên nhiên có sử dụng kiến thức vừa học.
2. Đánh giá & Dặn dò:
- Gọi 2 HS đọc câu văn vừa đặt. Khen ngợi câu văn hay, giàu hình ảnh. Dặn dò ôn tập bài ở nhà.`,
          studentActivity: `1. Thao tác vận dụng:
- Nhanh chóng đặt 1 câu văn hay vào vở nháp. Đứng dậy đọc câu văn của mình trước lớp.
2. Lắng nghe nhận xét của bạn và thầy cô, ghi nhớ để vận dụng vào bài tập làm văn.`
        }
      ];
    }

    // Default Nói và nghe
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Tạo tâm thế cởi mở, tự tin nói trước đám đông cho học sinh.",
        teacherActivity: `1. Giao nhiệm vụ: Cho cả lớp hát bài hát vui nhộn hoặc chơi trò chơi "Nói nhanh - Nói đúng".
2. Dẫn dắt vào bài Nói và nghe: "${lessonTitle}".`,
        studentActivity: `1. Hát và vận động theo nhạc, hào hứng bước vào tiết học Nói và nghe.
2. Lắng nghe hướng dẫn của thầy cô.`
      },
      {
        name: "2. Khám phá: Nắm bắt nội dung câu chuyện / chủ đề trao đổi (12 phút)",
        objective: "Nắm vững cốt truyện, các nhân vật hoặc các gợi ý chính của chủ đề nói.",
        teacherActivity: `1. Kể chuyện mẫu hoặc giới thiệu chủ đề nói (GV làm gì cho HS):
- Kể mẫu câu chuyện 2 lần kết hợp trình chiếu tranh minh họa từng đoạn (hoặc gợi mở chủ đề trao đổi).
- Đặt câu hỏi gợi ý cho từng tranh: "Tranh 1 vẽ nhân vật nào? Chuyện gì đã xảy ra? Nhân vật đã nói và làm gì?"
2. Hướng dẫn kỹ năng nói:
- Nhắc nhở HS tư thế đứng nói đàng hoàng, tự tin, mắt nhìn vào người nghe, nói to rõ ràng, kết hợp nét mặt và cử chỉ tự nhiên.`,
        studentActivity: `1. Lắng nghe & Quan sát tranh:
- Lắng nghe cô kể chuyện, chú ý giọng điệu của từng nhân vật và các mốc sự kiện chính.
2. Trả lời câu hỏi gợi ý:
- Giơ tay trả lời các câu hỏi về nội dung từng bức tranh, ghi nhớ diễn biến câu chuyện.`
      },
      {
        name: "3. Luyện tập: Thực hành kể chuyện / Trao đổi theo cặp và trước lớp (15 phút)",
        objective: "Rèn luyện kỹ năng nói mạch lạc, dùng từ chính xác và kỹ năng lắng nghe bạn nói.",
        teacherActivity: `1. Tổ chức luyện nói theo cặp:
- Yêu cầu học sinh quay mặt vào nhau, lần lượt kể từng đoạn cho bạn nghe và đóng góp ý kiến cho nhau.
- GV đi quan sát, động viên những em còn rụt rè, hướng dẫn các em nói trôi chảy.
2. Tổ chức thi nói / kể chuyện trước lớp:
- Mời 2-3 học sinh hoặc nhóm đóng vai nhân vật lên biểu diễn trước lớp.
- Khuyến khích cả lớp vỗ tay cổ vũ và nhận xét theo các tiêu chí: Nội dung đúng, giọng kể tự nhiên, cử chỉ phù hợp.`,
        studentActivity: `1. Thực hành nói theo cặp (HS làm nội dung gì):
- Bạn A kể đoạn 1-2, bạn B lắng nghe rồi kể tiếp đoạn 3-4. Góp ý cho nhau về giọng điệu và cử chỉ.
2. Thi kể chuyện trước lớp:
- Đại diện tự tin bước lên bục giảng, kể lại câu chuyện hoặc bày tỏ ý kiến về chủ đề trước toàn thể thầy cô và bạn bè.
- Học sinh dưới lớp lắng nghe chăm chú, vỗ tay cổ vũ và nhận xét bình chọn bạn nói hay nhất.`
      },
      {
        name: "4. Vận dụng & Ý nghĩa câu chuyện (5 phút)",
        objective: "Rút ra bài học đạo đức, liên hệ bản thân và rèn luyện thói quen kể chuyện cho gia đình nghe.",
        teacherActivity: `1. Đặt câu hỏi khai thác ý nghĩa:
- "Qua câu chuyện/chủ đề này, em học tập được điều gì ở các nhân vật?"
2. Dặn dò học sinh về nhà kể lại câu chuyện cho ông bà, bố mẹ nghe.`,
        studentActivity: `1. Nêu suy nghĩ và bài học rút ra từ câu chuyện.
2. Ghi nhớ nhiệm vụ về nhà chia sẻ lại câu chuyện cùng người thân trong gia đình.`
      }
    ];
  }

  // 2. TOÁN
  if (subLower.includes("toán") || subLower === "toan" || subLower.includes("tăng cường toán")) {
    const isLuyenTap = titleLower.includes("luyện tập") || titleLower.includes("ôn tập");

    if (isLuyenTap) {
      return [
        {
          name: "1. Khởi động (5 phút)",
          objective: "Tạo không khí sôi nổi, ôn lại các bảng tính, quy tắc toán học đã học.",
          teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Tổ chức trò chơi "Bắn tên" hoặc "Ai nhanh ai đúng" để ôn tập nhanh các phép tính/công thức liên quan đến bài học.
- Đưa ra 4-5 câu hỏi tính nhẩm nhanh trên màn hình máy chiếu.
2. Điều hành & Nhận xét:
- Nhận xét tốc độ tính nhẩm và sự chính xác của học sinh, tuyên dương cả lớp.
- Dẫn dắt vào bài luyện tập: "${lessonTitle}".`,
          studentActivity: `1. Tham gia trò chơi khởi động:
- Lắng nghe câu hỏi tính nhẩm, suy nghĩ nhanh và giơ tay giành quyền trả lời to, dõng dạc.
2. Kết nối bài học: Chuẩn bị bảng con, vở bài tập Toán, bút chì, thước kẻ trên bàn học.`
        },
        {
          name: "2. Luyện tập thực hành: Hoàn thành các bài tập cơ bản (15 phút)",
          objective: `Rèn luyện kỹ năng tính toán chuẩn xác, thành thạo các bước giải bài tập theo chuẩn kiến thức lớp ${grade}.`,
          teacherActivity: `1. Giao nhiệm vụ Bài tập 1 & Bài tập 2 (GV làm gì cho HS):
- Nêu yêu cầu Bài tập 1 (Tính nhẩm / Đặt tính rồi tính): Yêu cầu HS làm việc cá nhân trên bảng con hoặc vở bài tập.
- Nêu yêu cầu Bài tập 2 (Tìm thành phần chưa biết / Tính giá trị biểu thức): Cho HS làm vào vở.
2. Hướng dẫn & Hỗ trợ học sinh:
- GV đi bao quát lớp, theo dõi cách đặt tính thẳng hàng cột của học sinh, nhắc nhở giữ gìn vở sạch sẽ.
- Hỗ trợ trực tiếp cho các em còn chậm, hướng dẫn lại các bước tính trung gian hoặc quy đồng mẫu số/nhớ số.
3. Tổ chức sửa bài:
- Gọi học sinh lên bảng chữa bài. Yêu cầu học sinh giải thích rõ cách thực hiện từng bước tính toán.
- GV chốt đáp án đúng, phân tích các lỗi sai học sinh hay mắc phải để cả lớp cùng rút kinh nghiệm.`,
          studentActivity: `1. Thực hiện Bài tập 1 (HS làm nội dung gì):
- Đọc kỹ đề bài trong SGK.
- Đặt tính thẳng hàng cột (đối với phép cộng, trừ, nhân, chia) vào bảng con/vở bài tập, tính toán cẩn thận từng hàng từ phải sang trái.
- Giơ bảng con cho thầy cô kiểm tra.
2. Thực hiện Bài tập 2 vào vở:
- Làm bài tập vào vở toán, áp dụng đúng thứ tự thực hiện phép tính (trong ngoặc trước, nhân chia trước, cộng trừ sau).
- 2 HS lên bảng lớp thực hiện bài giải.
3. Nhận xét & Chữa bài:
- Lắng nghe bạn trên bảng trình bày cách tính, nhận xét bài làm của bạn.
- Tự đối chiếu với bài làm trong vở của mình, dùng bút chì sửa lại các chỗ còn nhầm lẫn.`
        },
        {
          name: "3. Luyện tập nâng cao: Giải toán có lời văn / Toán thực tế (12 phút)",
          objective: "Phát triển tư duy logic, năng lực giải quyết vấn đề toán học thực tiễn qua bài toán có lời văn.",
          teacherActivity: `1. Giao nhiệm vụ Bài toán có lời văn (GV làm gì cho HS):
- Trình chiếu đề bài toán thực tế trong SGK lên bảng phụ / màn hình.
- Hướng dẫn học sinh phân tích đề bài: "Bài toán cho biết gì? Bài toán hỏi gì? Muốn tìm kết quả ta phải thực hiện phép tính nào?"
- Giao nhiệm vụ cho các nhóm bàn: Tóm tắt bài toán và thảo luận tìm lời giải.
2. Hướng dẫn & Giúp đỡ:
- Hướng dẫn HS viết câu lời giải rõ nghĩa, đặt phép tính kèm đơn vị đo chuẩn xác, viết đáp số rõ ràng.
- Khuyến khích học sinh khá giỏi tìm thêm cách giải khác (nếu có).
3. Tổ chức báo cáo & Đánh giá:
- Mời đại diện 1 nhóm lên bảng trình bày bài giải hoàn chỉnh.
- GV cùng cả lớp nhận xét câu lời giải, phép tính, đơn vị và đáp số. Chốt phương pháp giải chuẩn.`,
          studentActivity: `1. Phân tích đề bài (HS làm nội dung gì):
- 1 HS đọc to đề bài trước lớp, cả lớp đọc thầm theo trong SGK.
- Dùng bút chì gạch chân dữ kiện "cho biết" và câu hỏi "cần tìm" trong đề bài.
2. Tóm tắt và giải bài toán vào vở:
- Viết tóm tắt bài toán bằng sơ đồ đoạn thẳng hoặc lời văn ngắn gọn.
- Trình bày bài giải vào vở theo đúng 3 bước: Lời giải -> Phép tính (kèm danh số) -> Đáp số.
3. Báo cáo & Nhận xét bài làm:
- 1 HS lên bảng trình bày bài giải.
- Các bạn dưới lớp nhận xét lời giải của bạn đã gãy gọn chưa, phép tính đã chuẩn chưa. Tự sửa bài vào vở.`
        },
        {
          name: "4. Vận dụng & Củng cố (5 phút)",
          objective: "Khắc sâu kiến thức trọng tâm, liên hệ ứng dụng tính toán trong mua sắm, đo đạc đời sống.",
          teacherActivity: `1. Đưa ra tình huống toán học thực tế:
- Đặt câu hỏi đố nhanh liên quan đến việc tính tiền chợ, đo chiều dài bàn học hoặc tính số lượng đồ dùng.
2. Nhận xét tiết học & Giao việc về nhà:
- Tuyên dương các cá nhân và tổ học tập tích cực, tính toán nhanh và chính xác.
- Nhắc nhở HS hoàn thiện các bài tập chưa xong và chuẩn bị bài mới.`,
          studentActivity: `1. Suy nghĩ và giải câu đố toán học thực tế của thầy cô.
2. Ghi chép dặn dò của giáo viên vào sổ tay, cất dọn sách vở ngăn nắp.`
        }
      ];
    }

    // Hình thành kiến thức mới
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích hoạt kiến thức nền tảng đã biết, tạo tình huống có vấn đề dẫn dắt vào bài học mới.",
        teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Tạo tình huống thực tế hoặc trò chơi vui nhộn dẫn dắt vào vấn đề toán học mới.
- Đặt câu hỏi gợi mở tạo sự tò mò: "Làm thế nào để chúng ta có thể tính được kết quả của bài toán này?"
2. Nhận xét & Dẫn dắt vào bài mới: "${lessonTitle}".`,
        studentActivity: `1. Quan sát tình huống khởi động của giáo viên, suy nghĩ và đưa ra dự đoán ban đầu.
2. Hào hứng tiếp nhận thử thách toán học mới, mở SGK trang tương ứng.`
      },
      {
        name: "2. Khám phá: Hình thành kiến thức & Quy tắc toán học mới (15 phút)",
        objective: `Học sinh tự khám phá, hiểu rõ bản chất khái niệm, công thức hoặc quy tắc tính toán của bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ học tập (GV làm gì cho HS):
- Sử dụng đồ dùng trực quan (que tính, mô hình khối, hình vẽ minh họa phân số/hình học) trình diễn tình huống toán học.
- Yêu cầu HS thao tác trên bộ đồ dùng học toán cá nhân: Lấy các que tính/mảnh ghép tương ứng.
- Đặt hệ thống câu hỏi dẫn dắt: Phân tích từng bước thao tác để đi đến phép tính hoặc công thức tổng quát.
2. Hướng dẫn học sinh thảo luận nhóm:
- Tổ chức cho HS thảo luận nhóm 4: So sánh kết quả thao tác đồ dùng và rút ra nhận xét chung.
- GV đi quan sát, trợ giúp các nhóm gặp khó khăn trong thao tác đồ dùng học tập.
3. Chuẩn hóa kiến thức & Chốt quy tắc:
- Mời đại diện nhóm trình bày cách làm và kết quả.
- GV chuẩn hóa kiến thức trên bảng lớp, hình thành công thức / quy tắc tính toán trọng tâm. Mời 2-3 HS nhắc lại quy tắc.`,
        studentActivity: `1. Thao tác trên đồ dùng học toán (HS làm nội dung gì):
- Lấy bộ thực hành Toán cá nhân, đếm và xếp các khối vuông, que tính hoặc mảnh ghép theo hướng dẫn của GV.
- Quan sát mô hình trực quan của giáo viên trên bảng chiếu.
2. Thảo luận nhóm:
- Trao đổi với các bạn trong nhóm về kết quả quan sát và thao tác. Tìm ra quy luật chuyển đổi hoặc cách tính.
3. Báo cáo & Tiếp thu quy tắc mới:
- Đại diện nhóm tự tin đứng dậy giải thích cách làm của nhóm mình.
- Lắng nghe thầy cô chốt kiến thức, đồng thanh đọc lại quy tắc/công thức mới và ghi nhớ vào vở.`
      },
      {
        name: "3. Luyện tập: Thực hành áp dụng quy tắc vào bài tập (12 phút)",
        objective: "Áp dụng ngay quy tắc vừa khám phá để làm đúng các bài tập cơ bản trong SGK.",
        teacherActivity: `1. Giao bài tập thực hành (GV làm gì cho HS):
- Hướng dẫn HS làm Bài tập 1 (Áp dụng trực tiếp quy tắc vừa học) vào bảng con/vở.
- Hướng dẫn làm Bài tập 2 vào vở bài tập.
2. Theo dõi, uốn nắn & Sửa lỗi:
- GV đi kiểm tra từng bàn, chú ý quan sát những học sinh còn thao tác chậm hoặc nhầm lẫn bước tính để trực tiếp chỉ dẫn.
3. Tổ chức nhận xét, đánh giá:
- Cho HS đổi vở chấm chéo theo cặp. GV gọi một số HS đọc kết quả hoặc lên bảng viết.
- GV nhận xét, khen ngợi các em thực hiện đúng và nhanh.`,
          studentActivity: `1. Thực hành làm bài tập (HS làm nội dung gì):
- Đọc kỹ đề bài, áp dụng quy tắc vừa học để tính toán từng bài tập vào vở hoặc bảng con.
- Kiểm tra lại các bước tính và kết quả trước khi giơ bảng con.
2. Trao đổi chéo vở: Đổi vở với bạn bên cạnh, đối chiếu kết quả theo hướng dẫn của GV.
3. Lên bảng trình bày bài làm và lắng nghe nhận xét của thầy cô.`
      },
      {
        name: "4. Vận dụng & Liên hệ thực tế (5 phút)",
        objective: "Củng cố quy tắc, biết ứng dụng kiến thức vào thực tế cuộc sống xung quanh.",
        teacherActivity: `1. Đưa ra bài toán vận dụng nhanh:
- Nêu một tình huống thực tế gắn liền với kiến thức vừa học (ước lượng đồ vật, tính toán số liệu lớp học...).
2. Đánh giá tiết học & Hướng dẫn về nhà:
- Nhận xét tinh thần học tập của lớp. Dặn dò HS ghi nhớ quy tắc và làm bài tập về nhà.`,
        studentActivity: `1. Nhanh nhẹn tính toán và trả lời câu hỏi vận dụng của GV.
2. Ôn lại quy tắc trong đầu, thu dọn đồ dùng học tập ngay ngắn.`
      }
    ];
  }

  // 3. TỰ NHIÊN VÀ XÃ HỘI (Lớp 1, 2, 3)
  if (subLower.includes("tự nhiên và xã hội") || subLower === "tnxh") {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Khơi gợi tò mò, tạo tâm thế khám phá thiên nhiên và cuộc sống xung quanh.",
        teacherActivity: `1. Giao nhiệm vụ khởi động:
- Bắt nhịp bài hát vui nhộn hoặc tổ chức đố vui về chủ đề bài học "${cleanTitle}".
2. Dẫn dắt vào bài mới: Khích lệ học sinh bước vào hành trình tìm hiểu khoa học đời sống.`,
        studentActivity: `1. Cả lớp hát vang và vỗ tay theo bài hát khởi động.
2. Hào hứng lắng nghe lời giới thiệu bài của thầy cô.`
      },
      {
        name: "2. Khám phá: Quan sát tranh ảnh, vật thật & Khám phá tri thức (15 phút)",
        objective: `Nhận biết được các đặc điểm, hiện tượng, vai trò thực tế trong bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ quan sát (GV làm gì cho HS):
- Phát phiếu quan sát / Trình chiếu các hình ảnh thực tế trong SGK lên màn hình.
- Nêu nhiệm vụ cho các nhóm 4: "Quan sát các hình 1, 2, 3 trong SGK, thảo luận trả lời: Em nhìn thấy những gì? Việc làm nào là đúng/an toàn? Việc làm nào là sai/nguy hiểm? Vì sao?"
2. Hướng dẫn & Hỗ trợ:
- GV đến từng nhóm, gợi ý câu hỏi để học sinh đào sâu chi tiết trong tranh.
3. Điều hành báo cáo & Chốt kiến thức:
- Mời đại diện các nhóm báo cáo. Cho các nhóm khác nhận xét, bổ sung ý kiến.
- GV tổng kết, chốt lại bài học khoa học chuẩn xác, liên hệ thực tế cuộc sống của các em.`,
        studentActivity: `1. Thao tác quan sát và thảo luận nhóm (HS làm nội dung gì):
- Mở SGK, quan sát từng chi tiết trong hình ảnh / mẫu vật thật.
- Thảo luận sôi nổi trong nhóm 4: Chỉ ra các hành vi an toàn, hành vi nguy hiểm hoặc đặc điểm của sự vật trong tranh.
- Ghi chép tóm tắt ý kiến của nhóm vào phiếu học tập.
2. Báo cáo kết quả:
- Đại diện nhóm tự tin đứng dậy chỉ tranh và giải thích lý do cho cả lớp nghe.
- Các bạn lắng nghe, nhận xét và đặt câu hỏi cho nhóm bạn.`
      },
      {
        name: "3. Luyện tập & Xử lý tình huống (10 phút)",
        objective: "Rèn luyện kỹ năng ứng xử, biết đưa ra lời khuyên đúng đắn và an toàn.",
        teacherActivity: `1. Giao tình huống thực tế (GV làm gì cho HS):
- Đưa ra 2 tình huống thực tế thường gặp ở gia đình hoặc trường học liên quan đến bài học.
- Yêu cầu các nhóm thảo luận: "Nếu em ở trong tình huống đó, em sẽ làm gì và khuyên bạn thế nào?"
2. Tổ chức đóng vai & Nhận xét:
- Mời 1-2 cặp học sinh lên sắm vai xử lý tình huống trước lớp.
- GV nhận xét cách ứng xử của học sinh, biểu dương những hành động đẹp, an toàn và văn minh.`,
        studentActivity: `1. Thảo luận xử lý tình huống (HS làm nội dung gì):
- Cùng bạn trong nhóm phân vai: Người gây ra tình huống và người đưa ra lời khuyên.
- Thực hành lời thoại và cử chỉ phù hợp, lễ phép.
2. Biểu diễn đóng vai trước lớp:
- Lên biểu diễn tự nhiên, tự tin trước thầy cô và bạn bè.
- Cả lớp quan sát, nhận xét và tán thành cách giải quyết hay của bạn.`
      },
      {
        name: "4. Vận dụng: Cam kết hành động thực tế (5 phút)",
        objective: "Hình thành thói quen sống an toàn, yêu quý thiên nhiên và giữ gìn sức khỏe gia đình.",
        teacherActivity: `1. Giao nhiệm vụ cam kết hành động:
- Hướng dẫn HS nêu 1-2 việc làm cụ thể bản thân sẽ thực hiện ngay tại nhà để giữ gìn vệ sinh / an toàn / bảo vệ sức khỏe.
2. Dặn dò học sinh chia sẻ cùng cha mẹ và người thân.`,
        studentActivity: `1. Suy nghĩ và tự giác xung phong nêu việc làm tốt của bản thân trước lớp.
2. Ghi nhớ thực hiện đúng những điều đã học khi về nhà.`
      }
    ];
  }

  // 4. KHOA HỌC (Lớp 4, 5)
  if (subLower.includes("khoa học") || subLower === "kh") {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích thích trí tò mò khoa học, đặt ra câu hỏi khám phá thế giới tự nhiên.",
        teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Cho học sinh xem video clip ngắn hoặc làm một thí nghiệm vui nhỏ tạo sự bất ngờ.
- Đặt câu hỏi kích thích suy nghĩ: "Tại sao hiện tượng này lại xảy ra? Điều gì sẽ xuất hiện tiếp theo?"
2. Dẫn dắt vào bài học: "${lessonTitle}".`,
        studentActivity: `1. Chăm chú theo dõi hiện tượng khoa học, hào hứng dự đoán nguyên nhân.
2. Tiếp nhận câu hỏi khởi động, chuẩn bị bước vào tìm hiểu bài mới.`
      },
      {
        name: "2. Khám phá: Thí nghiệm, quan sát & Tìm hiểu tri thức khoa học (15 phút)",
        objective: `Nắm vững tính chất, quy luật, vai trò của sự vật, hiện tượng trong bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ thí nghiệm / quan sát (GV làm gì cho HS):
- Phát dụng cụ thí nghiệm (hoặc phiếu quan sát mô hình) cho các nhóm học sinh.
- Hướng dẫn các bước tiến hành an toàn: Nêu rõ từng bước thao tác, cách ghi nhận dữ liệu vào Phiếu thí nghiệm.
- Đặt câu hỏi định hướng: "Các em dự đoán điều gì xảy ra? Khi tiến hành xong, kết quả thực tế có đúng như dự đoán không? Vì sao?"
2. Hướng dẫn & Theo dõi:
- GV đi kiểm tra từng nhóm, nhắc nhở giữ an toàn và vệ sinh dụng cụ thí nghiệm, hỗ trợ các nhóm xử lý sự cố.
3. Tổ chức báo cáo & Kết luận khoa học:
- Mời đại diện các nhóm lên bảng trình bày kết quả thí nghiệm. So sánh đối chiếu số liệu giữa các nhóm.
- GV chốt lại bản chất hiện tượng khoa học chuẩn xác, giải thích nguyên nhân bằng ngôn ngữ dễ hiểu.`,
        studentActivity: `1. Tiến hành thí nghiệm / quan sát (HS làm nội dung gì):
- Phân công nhiệm vụ trong nhóm 4: Nhóm trưởng điều hành, thư ký ghi chép, các thành viên thao tác dụng cụ.
- Làm việc cẩn thận theo đúng quy trình hướng dẫn của GV, chú ý an toàn.
- Quan sát kỹ hiện tượng, ghi nhận kết quả trung thực vào phiếu học tập của nhóm.
2. Báo cáo & Thảo luận:
- Đại diện nhóm tự tin đọc kết quả quan sát và rút ra kết luận ban đầu của nhóm.
- Đối chiếu với kết quả của nhóm bạn, cùng trao đổi nếu có sự khác biệt.
3. Lắng nghe thầy cô chốt kiến thức khoa học, ghi nội dung chính vào vở.`
      },
      {
        name: "3. Luyện tập: Vẽ sơ đồ tư duy / Giải thích hiện tượng thực tế (10 phút)",
        objective: "Hệ thống hóa kiến thức khoa học và vận dụng giải thích các hiện tượng xung quanh.",
        teacherActivity: `1. Giao bài tập củng cố (GV làm gì cho HS):
- Yêu cầu HS hoàn thành sơ đồ tư duy hoặc giải thích 2 hiện tượng đời sống liên quan đến bài học.
2. Quan sát & Hướng dẫn: Giúp đỡ học sinh nối kết các mắt xích kiến thức logic.
3. Nhận xét bài làm: Khen ngợi những sơ đồ tư duy vẽ đẹp, khoa học, đầy đủ ý.`,
        studentActivity: `1. Hoàn thành sơ đồ tư duy (HS làm nội dung gì):
- Vẽ hoặc điền vào sơ đồ tóm tắt kiến thức trọng tâm vào vở ghi.
- Giải thích nguyên nhân của hiện tượng đời sống theo đúng kiến thức khoa học vừa học.
2. Đổi bài kiểm tra với bạn bên cạnh, bổ sung các ý còn thiếu.`
      },
      {
        name: "4. Vận dụng: Ứng dụng thực tiễn & Bảo vệ môi trường (5 phút)",
        objective: "Vận dụng kiến thức khoa học để bảo vệ môi trường, tài nguyên thiên nhiên và cuộc sống gia đình.",
        teacherActivity: `1. Giao nhiệm vụ vận dụng thực tiễn:
- Đưa ra thông điệp hành động (tiết kiệm nước, bảo vệ đất, giảm rác thải nhựa, an toàn điện...).
2. Tổng kết & Dặn dò: Đánh giá tiết học, dặn dò tìm hiểu thêm tài liệu trên nguồn số an toàn.`,
        studentActivity: `1. Nêu hành động cụ thể bản thân và gia đình sẽ làm để ứng dụng kiến thức khoa học.
2. Ghi nhận lời dặn dò của thầy cô.`
      }
    ];
  }

  // 5. LỊCH SỬ VÀ ĐỊA LÍ (Lớp 4, 5)
  if (subLower.includes("lịch sử") || subLower.includes("địa lí") || subLower.includes("ls&đl") || subLower.includes("lsdl")) {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Khơi dậy niềm tự hào dân tộc, tình yêu quê hương đất nước và hứng thú khám phá lịch sử, địa lí.",
        teacherActivity: `1. Giao nhiệm vụ khởi động:
- Chiếu hình ảnh di tích lịch sử / phong cảnh thiên nhiên đặc sắc liên quan đến bài học "${cleanTitle}".
- Đố học sinh nhận diện địa danh hoặc sự kiện lịch sử qua hình ảnh.
2. Dẫn dắt vào bài mới: "${lessonTitle}".`,
        studentActivity: `1. Quan sát hình ảnh, hào hứng suy đoán tên địa danh/sự kiện lịch sử.
2. Chuẩn bị SGK Lịch sử & Địa lí, bản đồ/lược đồ học tập.`
      },
      {
        name: "2. Khám phá: Đọc tư liệu, quan sát lược đồ & Khám phá sự kiện/vùng đất (15 phút)",
        objective: `Nắm được vị trí địa lí, đặc điểm tự nhiên - dân cư hoặc diễn biến, ý nghĩa lịch sử trọng tâm của bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ đọc và khai thác tư liệu (GV làm gì cho HS):
- Treo bản đồ / lược đồ lên bảng lớp và trình chiếu các đoạn tư liệu lịch sử / bảng số liệu địa lí.
- Giao nhiệm vụ cho các nhóm:
  + Nhóm Địa lí: Xác định vị trí trên lược đồ, đọc bảng số liệu, nêu đặc điểm khí hậu, địa hình, kinh tế.
  + Nhóm Lịch sử: Đọc tư liệu, lập niên biểu các mốc thời gian chính, phân tích hành động của nhân vật lịch sử.
2. Hướng dẫn học sinh khai thác bản đồ:
- Hướng dẫn cách đọc bảng chú giải, chỉ đúng ranh giới, hướng mũi tên trên lược đồ.
3. Tổ chức báo cáo & Chốt kiến thức:
- Mời đại diện học sinh lên bảng chỉ lược đồ và thuyết minh.
- GV chuẩn hóa kiến thức, làm nổi bật ý nghĩa lịch sử và vẻ đẹp thiên nhiên, con người Việt Nam.`,
        studentActivity: `1. Làm việc với tư liệu và lược đồ (HS làm nội dung gì):
- Đọc kỹ đoạn tư liệu trong SGK, gạch chân các mốc thời gian, số liệu quan trọng.
- Quan sát lược đồ, dùng ngón tay xác định vị trí các con sông, dãy núi, thành phố hoặc hướng tiến công của quân ta.
- Thảo luận nhóm, hoàn thành phiếu học tập.
2. Báo cáo & Lên bảng chỉ lược đồ:
- Đại diện nhóm tự tin cầm que chỉ lên bảng lớp, chỉ đúng vị trí trên bản đồ/lược đồ và trình bày lưu loát.
- Cả lớp lắng nghe, nhận xét cách chỉ bản đồ và câu trả lời của bạn.
3. Ghi chép nội dung cốt lõi vào vở.`
      },
      {
        name: "3. Luyện tập: Thảo luận ý nghĩa & Hoàn thành bảng tổng kết (10 phút)",
        objective: "Khắc sâu kiến thức qua bài tập trắc nghiệm, điền bảng số liệu hoặc vẽ sơ đồ thời gian.",
        teacherActivity: `1. Giao bài tập luyện tập:
- Yêu cầu HS hoàn thành bảng so sánh hoặc sơ đồ dòng thời gian các sự kiện chính vào vở bài tập.
2. Hướng dẫn & Đánh giá: Quan sát, nhận xét và chữa bài cho học sinh.`,
        studentActivity: `1. Làm bài tập vào vở (HS làm nội dung gì):
- Điền các thông tin vào bảng tổng kết hoặc nối các mốc thời gian với sự kiện lịch sử tương ứng.
2. Kiểm tra chéo kết quả cùng bạn ngồi cạnh.`
      },
      {
        name: "4. Vận dụng: Tự hào truyền thống & Bảo vệ quê hương (5 phút)",
        objective: "Bồi dưỡng lòng yêu nước, ý thức bảo vệ chủ quyền biên giới, biển đảo (TT 08/2024).",
        teacherActivity: `1. Giao câu hỏi liên hệ: "Chúng ta cần làm gì để gìn giữ di tích lịch sử / bảo vệ chủ quyền và phát triển quê hương?"
2. Nhận xét tiết học & Dặn dò về nhà.`,
        studentActivity: `1. Bày tỏ lòng biết ơn các thế hệ cha anh, nêu ý thức bảo vệ môi trường, học tập tốt để xây dựng quê hương.
2. Ghi nhớ dặn dò của giáo viên.`
      }
    ];
  }

  // 6. ĐẠO ĐỨC (Lớp 1-5)
  if (subLower.includes("đạo đức") || subLower === "dd" || subLower.includes("dao duc")) {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Tạo cảm xúc tích cực, hướng tới các chuẩn mực hành vi đạo đức tốt đẹp.",
        teacherActivity: `1. Giao nhiệm vụ khởi động: Cho cả lớp nghe/hát bài hát mang thông điệp nhân văn về tình yêu thương, kính trọng người lớn.
2. Kết nối giới thiệu bài Đạo đức: "${lessonTitle}".`,
        studentActivity: `1. Hát hòa giọng theo nhạc, cảm nhận ý nghĩa lời ca.
2. Mở SGK Đạo đức chuẩn bị bài học.`
      },
      {
        name: "2. Khám phá: Phân tích truyện kể / Tranh tình huống đạo đức (15 phút)",
        objective: `Hiểu rõ chuẩn mực hành vi đạo đức, vì sao cần thực hiện và hậu quả nếu vi phạm trong bài "${cleanTitle}".`,
        teacherActivity: `1. Kể chuyện hoặc trình chiếu tranh tình huống (GV làm gì cho HS):
- Kể câu chuyện đạo đức / Chiếu tranh tình huống trong SGK lên màn hình.
- Đặt câu hỏi phân tích hành vi: "Bạn trong tranh đã làm gì? Hành vi đó đúng hay sai? Em cảm thấy như thế nào về việc làm của bạn?"
2. Hướng dẫn học sinh thảo luận nhóm:
- Chia nhóm thảo luận, khuyến khích học sinh bày tỏ quan điểm thật của mình một cách thẳng thắn, cởi mở.
3. Chuẩn hóa hành vi đạo đức:
- Lắng nghe ý kiến các nhóm. GV chốt lại chuẩn mực hành vi đạo đức cần rèn luyện: Nêu rõ lý do vì sao cần làm như vậy.`,
        studentActivity: `1. Lắng nghe và quan sát tranh tình huống (HS làm nội dung gì):
- Chăm chú theo dõi diễn biến tình huống, nhận diện hành vi đúng - sai của từng nhân vật.
2. Thảo luận nhóm:
- Sôi nổi tranh luận trong nhóm, đưa ra lý lẽ vì sao ủng hộ hoặc phản đối hành vi của nhân vật.
3. Trình bày trước lớp:
- Đại diện phát biểu quan điểm của nhóm.
- Lắng nghe cô giáo phân tích, tự rút ra chuẩn mực đạo đức cần noi theo.`
      },
      {
        name: "3. Luyện tập: Bày tỏ ý kiến & Xử lý tình huống thực tế (10 phút)",
        objective: "Rèn luyện năng lực đánh giá hành vi và kỹ năng ứng xử phù hợp trong đời sống.",
        teacherActivity: `1. Giao bài tập bày tỏ ý kiến (GV làm gì cho HS):
- Đưa ra 3 ý kiến/nhận định: Sử dụng thẻ Xanh (Tán thành), thẻ Đỏ (Không tán thành).
- Cho các nhóm thực hành sắm vai xử lý tình huống giả định khó xử.
2. Nhận xét & Uốn nắn: Phân tích lý do vì sao nên chọn cách xử lý nhân ái, trung thực và trách nhiệm.`,
        studentActivity: `1. Bày tỏ ý kiến bằng thẻ màu (HS làm nội dung gì):
- Giơ thẻ Xanh hoặc Đỏ theo hiệu lệnh của cô giáo, giải thích vì sao mình tán thành hoặc không tán thành.
2. Thực hành xử lý tình huống:
- Lên bảng đóng vai xử lý tình huống, đưa ra lời khuyên lịch sự, đúng mực cho bạn bè.`
      },
      {
        name: "4. Vận dụng: Tự liên hệ & Cam kết rèn luyện (5 phút)",
        objective: "Biến nhận thức đạo đức thành hành vi, thói quen tốt trong cuộc sống hàng ngày.",
        teacherActivity: `1. Giao nhiệm vụ tự liên hệ: "Em đã làm được những việc gì thể hiện chuẩn mực đạo đức này? Thời gian tới em sẽ khắc phục điều gì?"
2. Tổng kết bài học, khen ngợi những chia sẻ chân thành của học sinh.`,
        studentActivity: `1. Trung thực tự nhìn nhận lại bản thân, chia sẻ trước lớp những việc tốt mình đã làm và điều mình cần sửa đổi.
2. Cam kết thực hiện thói quen tốt mỗi ngày tại gia đình và lớp học.`
      }
    ];
  }

  // 7. CÔNG NGHỆ (Lớp 3, 4, 5)
  if (subLower.includes("công nghệ") || subLower === "cn" || subLower.includes("tin học & công nghệ")) {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Khơi gợi hứng thú với các sản phẩm công nghệ, sáng chế và đời sống tiện ích.",
        teacherActivity: `1. Đố vui về các vật dụng công nghệ quen thuộc trong gia đình (đèn học, quạt điện, dụng cụ thủ công).
2. Giới thiệu bài Công nghệ: "${lessonTitle}".`,
        studentActivity: `1. Nhanh nhẹn đoán tên các sản phẩm công nghệ.
2. Chuẩn bị SGK và đồ dùng thực hành môn Công nghệ.`
      },
      {
        name: "2. Khám phá: Tìm hiểu cấu tạo, tác dụng & Quy trình công nghệ (15 phút)",
        objective: `Hiểu rõ cấu tạo, nguyên lý hoạt động an toàn hoặc quy trình tạo ra sản phẩm trong bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ tìm hiểu (GV làm gì cho HS):
- Cho học sinh quan sát vật thật / mô hình hoặc tranh sơ đồ cấu tạo trong SGK.
- Đặt câu hỏi: "Sản phẩm này gồm những bộ phận chính nào? Mỗi bộ phận có tác dụng gì? Khi sử dụng cần chú ý điều gì để đảm bảo an toàn?"
2. Hướng dẫn & Giúp đỡ:
- Hướng dẫn học sinh đọc kỹ các bước quy trình kỹ thuật.
3. Chốt kiến thức: Chuẩn hóa tác dụng từng bộ phận và quy tắc an toàn khi sử dụng thiết bị công nghệ.`,
        studentActivity: `1. Quan sát và phân tích mô hình (HS làm nội dung gì):
- Chỉ rõ từng bộ phận của sản phẩm trên hình vẽ / vật thật.
- Đọc kỹ phần hướng dẫn quy trình sử dụng an toàn trong SGK.
2. Thảo luận nhóm:
- Trao đổi về những nguy cơ mất an toàn (chập điện, bỏng, hỏng hóc) và cách phòng tránh.
3. Ghi nhớ quy trình kỹ thuật vào vở.`
      },
      {
        name: "3. Luyện tập & Thực hành thao tác kỹ thuật (10 phút)",
        objective: "Rèn luyện kỹ năng thực hành đúng quy trình, an toàn và khéo léo.",
        teacherActivity: `1. Giao nhiệm vụ thực hành (GV làm gì cho HS):
- Hướng dẫn học sinh thực hành các bước lắp ghép, sử dụng hoặc vẽ phác thảo mô hình sản phẩm.
2. Quan sát & Nhắc nhở an toàn: GV đi từng bàn uốn nắn, đảm bảo học sinh tuân thủ nghiêm ngặt an toàn điện và an toàn dụng cụ.`,
        studentActivity: `1. Thực hành thao tác (HS làm nội dung gì):
- Tiến hành thực hành lắp ghép hoặc mô phỏng quy trình theo đúng các bước hướng dẫn.
2. Kiểm tra sản phẩm: Đối chiếu sản phẩm của mình với tiêu chí đánh giá kỹ thuật.`
      },
      {
        name: "4. Vận dụng: Sử dụng an toàn & Tiết kiệm năng lượng (5 phút)",
        objective: "Biết sử dụng sản phẩm công nghệ an toàn, tiết kiệm điện năng tại gia đình.",
        teacherActivity: `1. Giao nhiệm vụ vận dụng: Nhắc nhở thói quen tắt thiết bị khi không sử dụng, bảo quản đồ dùng gia đình bền đẹp.
2. Nhận xét tiết học và dặn dò.`,
        studentActivity: `1. Nêu các hành động tiết kiệm điện và bảo vệ thiết bị tại nhà mình.
2. Thu dọn đồ dùng thực hành gọn gàng, vệ sinh khu vực học tập.`
      }
    ];
  }

  // 8. HOẠT ĐỘNG TRẢI NGHIỆM (Lớp 1-5)
  if (subLower.includes("hoạt động trải nghiệm") || subLower.includes("hđtn") || subLower.includes("hdtn")) {
    const isSHDC = subSubject?.toLowerCase().includes("dưới cờ") || titleLower.includes("sinh hoạt dưới cờ") || titleLower.includes("shdc");
    const isSHL = subSubject?.toLowerCase().includes("lớp") || titleLower.includes("sinh hoạt lớp") || titleLower.includes("shl");

    if (isSHDC) {
      return [
        {
          name: "1. Nghi lễ Chào cờ (10 phút)",
          objective: "Thực hiện nghiêm trang nghi lễ Chào cờ đầu tuần, giáo dục lòng yêu nước và ý thức tổ chức kỷ luật.",
          teacherActivity: `1. Tổ chức tập hợp & Nghi lễ Chào cờ (GV làm gì cho HS):
- Hướng dẫn học sinh cả lớp xếp hàng ngay ngắn theo khối lớp dưới sân cờ, chỉnh đốn trang phục, mũ nón, khăn quàng đỏ.
- Phối hợp cùng Tổng phụ trách Đội điều hành nghi lễ Chào cờ trang nghiêm toàn trường (Quốc ca, Đội ca).
2. Đánh giá thi đua tuần qua:
- Lắng nghe Ban Giám hiệu và Ban Chỉ huy Liên đội nhận xét, đánh giá kết quả thi đua tuần trước.`,
          studentActivity: `1. Thực hiện nghi lễ Chào cờ:
- Đứng trang nghiêm theo đội hình hàng dọc, mắt hướng về Quốc kỳ.
- Đặt tay chào (đối với Đội viên đeo khăn quàng đỏ), hát vang Quốc ca và Đội ca với niềm tự hào dân tộc.
2. Lắng nghe nhận xét thi đua: Chú ý lắng nghe đánh giá thi đua, ghi nhận ưu điểm và tồn tại của lớp mình.`
        },
        {
          name: "2. Hoạt động trải nghiệm theo chủ đề dưới cờ (15 phút)",
          objective: `Tham gia giao lưu, tìm hiểu và trải nghiệm chủ đề tuần: "${cleanTitle}".`,
          teacherActivity: `1. Điều hành hoạt động chủ đề (GV làm gì cho HS):
- Hướng dẫn học sinh lớp mình theo dõi các tiết mục văn nghệ, tiểu phẩm tuyên truyền hoặc phần phát động chủ đề của Liên đội.
- Khuyến khích học sinh lớp mình tích cực giơ tay tham gia trả lời câu hỏi giao lưu, đố vui của Ban tổ chức.
2. Quản lý nền nếp: Nhắc nhở học sinh cổ vũ văn minh, giữ trật tự chung trong toàn trường.`,
          studentActivity: `1. Tham gia hoạt động chủ đề (HS làm nội dung gì):
- Chăm chú theo dõi các tiểu phẩm, bài phát động chủ đề dưới cờ.
- Hào hứng giơ tay tham gia giao lưu, trả lời các câu hỏi đố vui và tự tin bày tỏ suy nghĩ trước toàn trường.
2. Cổ vũ nhiệt tình cho các bạn biểu diễn trên sân khấu.`
        },
        {
          name: "3. Tiếp nhận nhiệm vụ tuần mới (7 phút)",
          objective: "Nắm vững kế hoạch, mục tiêu thi đua của nhà trường và Liên đội trong tuần học mới.",
          teacherActivity: `1. Phổ biến nhiệm vụ trọng tâm:
- GVCN nhắc nhở nhanh các chỉ tiêu phấn đấu trong tuần: Đi học chuyên cần, bảo đảm ATGT trước cổng trường, giữ gìn vệ sinh chung, phong trào "Hoa điểm tốt".
2. Khích lệ tinh thần thi đua của cả lớp.`,
          studentActivity: `1. Lắng nghe và ghi nhớ các nhiệm vụ thi đua trọng tâm của tuần mới.
2. Đồng thanh hô khẩu hiệu quyết tâm thi đua đạt tuần học tốt.`
        },
        {
          name: "4. Di chuyển trật tự về lớp học (3 phút)",
          objective: "Rèn luyện nếp di chuyển trật tự, chuẩn bị tâm thế cho tiết học tiếp theo.",
          teacherActivity: `1. Điều hành học sinh di chuyển:
- Hướng dẫn học sinh thu dọn ghế ngồi, xếp hàng di chuyển trật tự về phòng học theo thứ tự các khối lớp.`,
          studentActivity: `1. Cầm ghế ngay ngắn, di chuyển theo hàng lối về lớp học trong trật tự, chuẩn bị sách vở cho tiết học tiếp theo.`
        }
      ];
    }

    if (isSHL) {
      return [
        {
          name: "1. Khởi động (5 phút)",
          objective: "Tạo không khí ấm áp, vui tươi, gắn kết tinh thần đoàn kết tập thể lớp cuối tuần.",
          teacherActivity: `1. Giao nhiệm vụ: Cho cả lớp hát vang bài hát tập thể hoặc chơi trò chơi nhỏ "Lời yêu thương".
2. Dẫn dắt vào buổi Sinh hoạt lớp cuối tuần: "${lessonTitle}".`,
          studentActivity: `1. Đồng thanh hát và vỗ tay vui vẻ cùng các bạn trong lớp.
2. Ổn định chỗ ngồi, chuẩn bị sổ tay và phiếu tự đánh giá cá nhân.`
        },
        {
          name: "2. Sơ kết tuần & Đánh giá thi đua các tổ (15 phút)",
          objective: "Đánh giá trung thực kết quả học tập và rèn luyện của các tổ trong tuần qua, biểu dương điển hình tiên tiến.",
          teacherActivity: `1. Điều hành ban cán sự lớp báo cáo (GV làm gì cho HS):
- Mời Lớp trưởng và các Tổ trưởng lần lượt lên báo cáo tình hình học tập, chuyên cần, vệ sinh và nền nếp của tổ.
2. GVCN nhận xét, đánh giá chung:
- Phân tích những mặt tiến bộ vượt bậc của lớp (các bạn đạt nhiều điểm tốt, giúp đỡ bạn, vệ sinh lớp sạch sẽ).
- Nhắc nhở chân tình, nghiêm túc những tồn tại (nói chuyện riêng, quên đồ dùng, đi học muộn) và hướng dẫn biện pháp khắc phục.
3. Tuyên dương, khen thưởng:
- Biểu dương Tổ dẫn đầu thi đua và các cá nhân tiêu biểu trong tuần.`,
          studentActivity: `1. Báo cáo thi đua (HS làm nội dung gì):
- Các tổ trưởng đứng dậy báo cáo trung thực điểm thi đua và các trường hợp cần khen thưởng/nhắc nhở của tổ.
- Lớp trưởng nhận xét chung toàn lớp.
2. Lắng nghe và tự kiểm điểm:
- Cả lớp chú ý lắng nghe cô chủ nhiệm nhận xét, tự soi lại bản thân để rút kinh nghiệm.
- Vỗ tay chúc mừng tổ xuất sắc và các bạn đạt thành tích tốt.`
        },
        {
          name: "3. Sinh hoạt theo chủ đề tuần (10 phút)",
          objective: `Thực hiện hoạt động trải nghiệm theo chủ đề sinh hoạt lớp: "${cleanTitle}".`,
          teacherActivity: `1. Giao nhiệm vụ hoạt động chủ đề:
- Hướng dẫn học sinh thảo luận nhóm về chủ đề tuần (chia sẻ bài học bổ ích, làm thiệp chúc mừng, đóng góp ý tưởng xây dựng góc học tập).
2. Quan sát & Điều hành chia sẻ: Mời các nhóm chia sẻ sản phẩm hoặc suy nghĩ của mình.`,
          studentActivity: `1. Hoạt động theo chủ đề (HS làm nội dung gì):
- Thảo luận theo tổ, cùng bạn hoàn thành nhiệm vụ trải nghiệm theo chủ đề.
2. Trình bày sản phẩm hoặc chia sẻ câu chuyện ý nghĩa trước lớp.`
        },
        {
          name: "4. Phương hướng tuần mới & Dặn dò nghỉ cuối tuần (5 phút)",
          objective: "Xác định mục tiêu thi đua tuần tới, nhắc nhở an toàn phòng chống tai nạn thương tích trong ngày nghỉ.",
          teacherActivity: `1. Phổ biến phương hướng tuần mới:
- Đặt ra các mục tiêu trọng tâm cần đạt trong tuần tới. Phân công nhiệm vụ cụ thể cho từng tổ và ban cán sự.
2. Nhắc nhở an toàn cuối tuần:
- Dặn dò học sinh phòng tránh đuối nước, an toàn giao thông, phụ giúp gia đình việc nhà trong ngày nghỉ.`,
          studentActivity: `1. Ghi chép các chỉ tiêu thi đua tuần mới vào sổ ghi nhớ.
2. Lắng nghe lời dặn dò an toàn của GVCN, thu dọn vệ sinh lớp học trước khi ra về.`
        }
      ];
    }

    // Tiết 2: HĐGDCĐ
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích hoạt cảm xúc, tạo tâm thế sẵn sàng trải nghiệm chủ đề bài học.",
        teacherActivity: `1. Giao nhiệm vụ: Tổ chức trò chơi tập thể hoặc vận động theo bài hát vui nhộn liên quan đến chủ đề "${cleanTitle}".
2. Dẫn nhập vào hoạt động giáo dục theo chủ đề.`,
        studentActivity: `1. Hào hứng tham gia trò chơi, hòa mình vào không khí vui vẻ của lớp.
2. Mở Vở bài tập Hoạt động trải nghiệm chuẩn bị bài học.`
      },
      {
        name: "2. Khám phá: Nhận diện & Trải nghiệm thực tế (15 phút)",
        objective: `Nhận biết các kỹ năng sống, thói quen tích cực và bài học ứng xử trong bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao nhiệm vụ trải nghiệm (GV làm gì cho HS):
- Đưa ra tình huống thực tế hoặc đoạn phim / câu chuyện ngắn về chủ đề bài học.
- Đặt câu hỏi thảo luận: "Em quan sát thấy điều gì? Nếu là em, em sẽ cảm thấy thế nào và sẽ hành động ra sao?"
2. Hướng dẫn học sinh chia sẻ trải nghiệm cá nhân:
- Khuyến khích từng em kể lại những câu chuyện thực tế mình đã từng gặp trong cuộc sống.
3. Chốt thông điệp ý nghĩa của hoạt động: Chuẩn hóa kỹ năng ứng xử đẹp, nhân ái và văn minh.`,
        studentActivity: `1. Khám phá chủ đề (HS làm nội dung gì):
- Lắng nghe tình huống, quan sát tranh minh họa trong SGK.
- Suy nghĩ và trao đổi theo cặp: Chia sẻ cảm xúc và những trải nghiệm thực tế của chính mình với bạn.
2. Báo cáo trước lớp:
- 3-4 HS xung phong chia sẻ câu chuyện của mình trước thầy cô và bạn bè.
- Lắng nghe thông điệp bài học và ghi nhớ để thực hành.`
      },
      {
        name: "3. Luyện tập: Thực hành kỹ năng / Xử lý tình huống (10 phút)",
        objective: "Rèn luyện và củng cố kỹ năng thông qua sắm vai hoặc làm sản phẩm trải nghiệm.",
        teacherActivity: `1. Giao nhiệm vụ thực hành:
- Chia nhóm sắm vai xử lý các tình huống khó xử hoặc hướng dẫn làm một sản phẩm sáng tạo nhỏ (bưu thiếp, vẽ tranh cảm xúc).
2. Hỗ trợ & Đánh giá: Hướng dẫn học sinh thể hiện cử chỉ, lời nói lịch sự, chuẩn mực.`,
        studentActivity: `1. Thực hành theo nhóm (HS làm nội dung gì):
- Phân công vai diễn trong nhóm hoặc bắt tay làm sản phẩm trải nghiệm cùng các bạn.
2. Thể hiện tiểu phẩm hoặc trưng bày sản phẩm: Tự tin biểu diễn trước lớp, đón nhận những lời khen ngợi của cô và bạn bè.`
      },
      {
        name: "4. Vận dụng: Lan tỏa hành động tích cực (5 phút)",
        objective: "Vận dụng kỹ năng đã học vào thực tế đời sống hàng ngày tại gia đình và cộng đồng.",
        teacherActivity: `1. Giao nhiệm vụ vận dụng: Nhắc nhở HS thực hiện thường xuyên kỹ năng vừa học trong giao tiếp với cha mẹ, thầy cô, bạn bè.
2. Đánh giá tiết học và tuyên dương học sinh tích cực.`,
        studentActivity: `1. Nêu quyết tâm rèn luyện kỹ năng sống tốt đẹp mỗi ngày.
2. Ghi nhớ bài học và tự giác thực hiện khi về nhà.`
      }
    ];
  }

  // 9. TIN HỌC (Lớp 3, 4, 5)
  if (subLower.includes("tin học") || subLower === "th" || subLower.includes("tin hoc")) {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích hoạt kiến thức công nghệ số, tạo sự hứng khởi và rèn luyện quy tắc an toàn phòng máy.",
        teacherActivity: `1. Giao nhiệm vụ khởi động:
- Đặt câu hỏi đố vui về các thiết bị phần cứng (bàn phím, chuột, màn hình) hoặc tình huống số thường gặp.
- Nhắc nhở quy tắc an toàn điện trong phòng máy tính.
2. Dẫn dắt vào bài mới: "${lessonTitle}".`,
        studentActivity: `1. Lắng nghe câu hỏi, hào hứng giơ tay trả lời.
2. Ổn định chỗ ngồi tại máy tính được phân công, kiểm tra chuột và bàn phím.`
      },
      {
        name: "2. Khám phá: Thao tác mẫu & Quy trình thực hiện trên phần mềm (15 phút)",
        objective: `Nắm vững các bước thao tác, biểu tượng lệnh và nguyên lý hoạt động của bài "${cleanTitle}".`,
        teacherActivity: `1. Chuyển giao thao tác mẫu (GV làm gì cho HS):
- Trình chiếu màn hình máy tính của giáo viên lên màn hình lớn phòng máy.
- Thao tác mẫu chậm rãi 2 lần từng bước kỹ thuật (khởi động phần mềm, chọn công cụ, lưu tệp).
- Đặt câu hỏi kiểm tra: "Để thực hiện thao tác này, chúng ta cần bấm vào nút lệnh nào? Khi gặp sự cố ta cần bấm phím gì?"
2. Hướng dẫn & Lưu ý an toàn thông tin:
- Nhắc nhở quy tắc bảo mật mật khẩu, không tải tệp lạ và quy tắc bản quyền số.`,
        studentActivity: `1. Quan sát thao tác mẫu (HS làm nội dung gì):
- Chăm chú theo dõi từng cú nhấp chuột và phím tắt của giáo viên trên màn hình chiếu.
- Ghi nhớ thứ tự các bước thực hiện vào sổ tay hoặc SGK Tin học.
2. Trả lời câu hỏi: Nêu lại quy trình từng bước cho cả lớp cùng nghe.`
      },
      {
        name: "3. Luyện tập: Trực tiếp thực hành trên máy tính cá nhân (12 phút)",
        objective: "Thực hiện thành thạo các thao tác trên máy tính, hoàn thành sản phẩm số theo yêu cầu bài học.",
        teacherActivity: `1. Giao bài tập thực hành (GV làm gì cho HS):
- Nêu rõ nhiệm vụ thực hành: Mở phần mềm, thực hiện yêu cầu bài tập trong SGK (hoặc bài tập trên tệp mẫu) và lưu tệp với tên của mình.
2. Quan sát & Hỗ trợ kỹ thuật:
- GV đi từng dãy máy, cầm tay chỉ chuột cho những học sinh thao tác còn ngập ngừng.
- Hướng dẫn học sinh cách tự sửa lỗi khi bấm nhầm phím.
3. Đánh giá sản phẩm:
- Chiếu bài thực hành xuất sắc của một học sinh lên màn hình lớn để cả lớp cùng quan sát, học tập.`,
        studentActivity: `1. Thao tác trên máy tính (HS làm nội dung gì):
- Tự giác khởi động phần mềm và thực hiện các bước thao tác trên máy tính của mình.
- Tự tin gõ phím, di chuyển chuột, hoàn thành nội dung bài tập theo đúng hướng dẫn.
- Lưu tệp bài làm vào thư mục cá nhân đúng quy định.
2. Hỗ trợ bạn bên cạnh: Giúp đỡ bạn cùng bàn nếu bạn gặp sự cố kỹ thuật nhỏ.
3. Quan sát bài làm mẫu của bạn trên màn hình lớn và rút kinh nghiệm.`
      },
      {
        name: "4. Vận dụng: Thử thách sáng tạo số & Tắt máy an toàn (5 phút)",
        objective: "Vận dụng kỹ năng tin học để tạo sản phẩm hữu ích, tắt máy tính đúng quy trình kỹ thuật.",
        teacherActivity: `1. Giao thử thách số mở rộng:
- Gợi ý cách ứng dụng kỹ năng vừa học để trang trí văn bản, vẽ thiệp hoặc tìm kiếm thông tin học tập an toàn.
2. Hướng dẫn tắt máy:
- Nhắc nhở quy trình thoát phần mềm và tắt máy (Start -> Shut down), không tắt nguồn đột ngột.`,
        studentActivity: `1. Thoát khỏi phần mềm đang làm việc.
2. Thực hiện lệnh tắt máy tính đúng quy trình, xếp gọn bàn phím và chuột, đẩy ghế ngay ngắn trước khi rời phòng máy.`
      }
    ];
  }

  // 10. MĨ THUẬT
  if (subLower.includes("mĩ thuật") || subLower.includes("mỹ thuật") || subLower.includes("mt")) {
    return [
      {
        name: "1. Khởi động (5 phút)",
        objective: "Kích thích cảm xúc thẩm mĩ, tạo hứng thú khám phá màu sắc và hình khối.",
        teacherActivity: `1. Trưng bày tác phẩm mĩ thuật / sản phẩm thủ công mẫu phong phú, bắt mắt.
2. Đặt câu hỏi gợi mở: "Các em thấy bức tranh / sản phẩm này sử dụng những màu sắc nào? Hình khối gì nổi bật nhất?"
3. Dẫn dắt vào bài Mĩ thuật: "${lessonTitle}".`,
        studentActivity: `1. Quan sát sản phẩm mẫu, bày tỏ sự thích thú về màu sắc và bố cục.
2. Chuẩn bị sẵn sàng giấy vẽ, màu vẽ, đất nặn hoặc vật liệu tái chế trên bàn học.`
      },
      {
        name: "2. Khám phá: Quan sát mẫu & Hướng dẫn các bước tạo hình (12 phút)",
        objective: `Nắm vững các bước tạo hình, cách phối màu và cách thể hiện ý tưởng trong bài "${cleanTitle}".`,
        teacherActivity: `1. Hướng dẫn phân tích sản phẩm (GV làm gì cho HS):
- Phân tích chi tiết đặc điểm hình thể, mảng màu chính - phụ, nét vẽ đặc trưng.
2. Hướng dẫn các bước thực hiện:
- Bước 1: Vẽ phác mảng hình chính, hình phụ cân đối trên trang giấy.
- Bước 2: Vẽ chi tiết các bộ phận, làm nổi bật điểm nhấn.
- Bước 3: Vẽ màu có đậm - nhạt, sáng - tối hài hòa, tạo chiều sâu cho tác phẩm.
- Làm mẫu một công đoạn khó cho học sinh quan sát trực tiếp.`,
        studentActivity: `1. Quan sát giáo viên hướng dẫn các bước tạo hình.
2. Nhận biết cách vẽ hình cân đối, không quá to hoặc quá nhỏ so với khổ giấy.
3. Lựa chọn ý tưởng và gam màu yêu thích cho sản phẩm của mình.`
      },
      {
        name: "3. Luyện tập: Thực hành sáng tạo sản phẩm cá nhân / nhóm (15 phút)",
        objective: "Tự do sáng tạo sản phẩm mĩ thuật độc đáo theo cảm xúc và kỹ năng của bản thân.",
        teacherActivity: `1. Giao nhiệm vụ thực hành sáng tạo:
- Yêu cầu học sinh thực hành vẽ tranh hoặc tạo hình sản phẩm (sử dụng vật liệu tái chế thân thiện môi trường).
2. Quan sát, động viên & Gợi ý:
- GV đi quanh lớp, động viên các em tự tin thể hiện nét vẽ, gợi ý cách phối màu tương phản hoặc bổ túc đẹp mắt.`,
        studentActivity: `1. Thực hành sáng tạo (HS làm nội dung gì):
- Say mê vẽ hình, cắt dán hoặc nặn tạo hình sản phẩm của riêng mình.
- Phối màu khéo léo, chú ý vẽ màu đều tay, làm rõ hình ảnh chính của bức tranh.
2. Giữ gìn vệ sinh lớp học: Không vứt giấy vụn bừa bãi, đậy nắp bút màu cẩn thận.`
      },
      {
        name: "4. Trưng bày, chia sẻ 'Phòng tranh nhí' & Vận dụng (5 phút)",
        objective: "Tự tin giới thiệu sản phẩm của mình, biết nhận xét và trân trọng cái đẹp trong tác phẩm của bạn.",
        teacherActivity: `1. Tổ chức triển lãm "Phòng tranh nhí":
- Hướng dẫn học sinh đính tác phẩm lên bảng lớp hoặc góc trưng bày mĩ thuật.
- Mời học sinh giới thiệu về bức tranh của mình và nhận xét sản phẩm của bạn.
2. Đánh giá & Tuyên dương:
- Khen ngợi sự sáng tạo và độc đáo của các tác phẩm. Khích lệ tinh thần yêu nghệ thuật.`,
        studentActivity: `1. Trưng bày sản phẩm lên bảng lớp cùng các bạn.
2. Đứng trước lớp tự tin chia sẻ: "Bức tranh của em vẽ về điều gì? Em thích nhất chi tiết nào?"
3. Nhận xét sản phẩm của bạn: Bày tỏ sự yêu thích về sự phối màu và nét vẽ sáng tạo của bạn.`
      }
    ];
  }

  // 11. GIÁO DỤC THỂ CHẤT
  if (subLower.includes("thể chất") || subLower.includes("gdtc")) {
    return [
      {
        name: "1. Mở đầu & Khởi động (6 phút)",
        objective: "Tập hợp lớp ngay ngắn, làm nóng cơ thể và chuẩn bị các khớp sẵn sàng vận động.",
        teacherActivity: `1. Tập hợp & Phổ biến nhiệm vụ (GV làm gì cho HS):
- Tập hợp lớp thành 2-4 hàng ngang trên sân tập. Điểm số, kiểm tra sĩ số và trang phục, giày thể thao của học sinh.
- Phổ biến mục tiêu buổi học: "${lessonTitle}".
2. Hướng dẫn khởi động:
- Đứng trước gương mặt hàng ngũ, chỉ huy lớp xoay kỹ các khớp: Cổ tay kết hợp cổ chân, khớp vai, cánh tay, hông, đầu gối.
- Cho học sinh chạy nhẹ nhàng 1 vòng quanh sân tập.`,
        studentActivity: `1. Tập hợp nhanh nhẹn theo khẩu lệnh của cán sự lớp, đứng nghiêm trang, trang phục gọn gàng.
2. Thực hiện các động tác khởi động:
- Xoay tròn đều các khớp theo tiếng hô nhịp nhàng của thầy cô và cán sự thể dục.
- Chạy nhẹ nhàng giữ cự ly đều đặn quanh sân trường.`
      },
      {
        name: "2. Khám phá: Làm mẫu & Học kỹ thuật động tác mới (12 phút)",
        objective: `Nắm vững khẩu lệnh và thực hiện đúng biên độ kỹ thuật động tác của bài "${cleanTitle}".`,
        teacherActivity: `1. Thị phạm động tác mẫu (GV làm gì cho HS):
- GV đứng ở vị trí cả lớp dễ quan sát nhất, làm mẫu toàn bộ động tác 1 lần với nhịp chuẩn.
- Làm mẫu chậm lần 2 kết hợp phân tích kỹ thuật từng nhịp (hướng tay, tư thế chân, thân người).
2. Hướng dẫn học sinh tập thử:
- Bắt nhịp chậm rãi cho cả lớp tập theo từng nhịp 1 - 2 - 3 - 4.
- Quan sát, nhắc nhở và sửa sai ngay cho những học sinh giơ tay chưa thẳng hoặc chân sai tư thế.`,
        studentActivity: `1. Quan sát động tác mẫu (HS làm nội dung gì):
- Chăm chú theo dõi tư thế của thầy cô giáo, lắng nghe phân tích điểm mấu chốt của động tác.
2. Thực hành tập theo nhịp:
- Đứng đúng tư thế, thực hiện động tác dứt khoát, chuẩn xác theo khẩu lệnh đếm của thầy cô.
- Tự điều chỉnh biên độ động tác theo sự uốn nắn của giáo viên.`
      },
      {
        name: "3. Luyện tập: Tập theo tổ & Trò chơi vận động rèn luyện (12 phút)",
        objective: "Thuần thục động tác qua luyện tập nhóm và rèn luyện thể lực qua trò chơi bổ trợ.",
        teacherActivity: `1. Phân chia tổ luyện tập:
- Giao nhiệm vụ cho các Tổ trưởng điều hành tổ mình luyện tập theo đội hình chữ U hoặc hàng ngang.
- GV đi kiểm tra từng tổ, uốn nắn tư thế và động viên các em.
2. Tổ chức trò chơi vận động:
- Giới thiệu luật chơi trò chơi vận động nhanh - khéo, tạo không khí hào hứng và an toàn.
- Làm trọng tài phân định thắng thua, tuyên dương tổ chiến thắng.`,
        studentActivity: `1. Luyện tập theo tổ (HS làm nội dung gì):
- Luyện tập nghiêm túc theo khẩu lệnh chỉ huy của tổ trưởng.
- Quan sát và hỗ trợ bạn cùng tổ sửa động tác cho thật đều và đẹp.
2. Hào hứng tham gia trò chơi vận động: Chạy nhanh nhẹn, tiếp sức chuẩn xác, chấp hành nghiêm luật chơi và giữ an toàn.`
      },
      {
        name: "4. Kết thúc & Hồi tĩnh (5 phút)",
        objective: "Đưa cơ thể về trạng thái hồi tĩnh bình thường, đánh giá buổi tập và dặn dò.",
        teacherActivity: `1. Hướng dẫn thả lỏng hồi tĩnh:
- Cho học sinh rũ lỏng các khớp cổ tay, cơ bắp đùi, hít thở sâu và vươn thở nhẹ nhàng.
2. Nhận xét & Dặn dò:
- Đánh giá tinh thần luyện tập, khen ngợi các tổ và cá nhân thực hiện động tác đều đẹp.
- Dặn dò học sinh thói quen tập thể dục buổi sáng tại nhà.`,
        studentActivity: `1. Thả lỏng toàn thân, hít sâu thở chậm theo nhịp điệu nhẹ nhàng.
2. Lắng nghe cô giáo nhận xét, tự giác duy trì rèn luyện thân thể mỗi ngày.`
      }
    ];
  }

  // DEFAULT / CÁC MÔN CÒN LẠI (Fallback chuẩn mực)
  return [
    {
      name: "1. Khởi động (5 phút)",
      objective: "Tạo không khí học tập tích cực, hứng khởi và kết nối kiến thức nền tảng vào bài mới.",
      teacherActivity: `1. Giao nhiệm vụ khởi động (GV làm gì cho HS):
- Tổ chức trò chơi khởi động vui nhộn hoặc câu hỏi đố vui kích hoạt tư duy liên quan đến bài "${cleanTitle}".
2. Nhận xét & Dẫn dắt: Kết nối câu trả lời của học sinh vào bài học mới.`,
      studentActivity: `1. Tham gia trò chơi khởi động hào hứng cùng cả lớp.
2. Chú ý lắng nghe lời giới thiệu bài của thầy cô, mở sách vở chuẩn bị bài mới.`
    },
    {
      name: "2. Khám phá (15 phút)",
      objective: `Hình thành kiến thức mới và các kỹ năng trọng tâm của bài học: "${cleanTitle}".`,
      teacherActivity: `1. Chuyển giao nhiệm vụ học tập (GV làm gì cho HS):
- Trình chiếu ngữ liệu / tranh ảnh / vật mẫu của bài học lên bảng.
- Giao nhiệm vụ cụ thể: Nêu rõ câu hỏi thảo luận, các nội dung cần khám phá và yêu cầu ghi chép.
2. Hướng dẫn & Quan sát:
- Hướng dẫn HS làm việc cá nhân kết hợp thảo luận nhóm 4.
- GV đi bao quát lớp, kịp thời trợ giúp các học sinh còn lúng túng.
3. Chốt kiến thức chuẩn xác:
- Mời đại diện các nhóm báo cáo kết quả.
- GV nhận xét, chuẩn hóa kiến thức trọng tâm ghi bảng lớp.`,
      studentActivity: `1. Tiếp nhận nhiệm vụ và nghiên cứu ngữ liệu (HS làm nội dung gì):
- Quan sát kỹ tranh ảnh/vật mẫu, đọc thông tin trong SGK.
- Thảo luận nhóm sôi nổi, thống nhất câu trả lời cho các câu hỏi của GV.
2. Báo cáo kết quả:
- Đại diện nhóm tự tin đứng dậy trình bày trước lớp.
- Các bạn lắng nghe, nhận xét bổ sung ý kiến.
3. Ghi nhớ kiến thức cốt lõi vào vở bài tập.`
    },
    {
      name: "3. Luyện tập - Thực hành (12 phút)",
      objective: "Củng cố và rèn luyện kỹ năng qua các bài tập và tình huống vận dụng cụ thể.",
      teacherActivity: `1. Giao bài tập thực hành (GV làm gì cho HS):
- Hướng dẫn cụ thể từng bài tập trong SGK / Vở bài tập.
2. Theo dõi & Uốn nắn:
- Quan sát từng bàn, uốn nắn các sai sót và giúp đỡ học sinh hoàn thành bài làm.
3. Chữa bài & Đánh giá:
- Tổ chức cho học sinh báo cáo kết quả, nhận xét và khen ngợi các bài làm tốt.`,
      studentActivity: `1. Thực hành làm bài tập (HS làm nội dung gì):
- Tập trung làm bài tập cá nhân vào vở hoặc phiếu học tập.
2. Đổi vở kiểm tra chéo: Đối chiếu kết quả với bạn bên cạnh.
3. Chữa bài theo hướng dẫn của giáo viên và sửa các lỗi sai (nếu có).`
    },
    {
      name: "4. Vận dụng (5 phút)",
      objective: "Khắc sâu kiến thức, liên hệ thực tiễn đời sống hàng ngày.",
      teacherActivity: `1. Giao câu hỏi/thử thách vận dụng thực tế gắn với bài "${cleanTitle}".
2. Nhận xét tiết học và dặn dò chuẩn bị cho bài học tiếp theo.`,
      studentActivity: `1. Suy nghĩ và tự tin xung phong trả lời câu hỏi vận dụng thực tế.
2. Tiếp thu dặn dò của thầy cô, cất gọn sách vở đồ dùng học tập.`
    }
  ];
}
