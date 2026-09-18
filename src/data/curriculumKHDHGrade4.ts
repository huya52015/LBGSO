import { LessonInfo } from "./gradeCurriculums";

// ============================================================================
// KẾ HOẠCH GIÁO DỤC KHỐI 4 (KHDH NĂM HỌC 2025-2026) - CHUẨN KẾT NỐI TRI THỨC
// ĐẦY ĐỦ CHI TIẾT HOẠT ĐỘNG DẠY (GV) VÀ HOẠT ĐỘNG HỌC (HS) CHUẨN CV 2345
// ============================================================================

export interface KHDHLessonItem {
  title: string;
  sub?: string;
  note: string;
  actGV?: string;
  actHS?: string;
}

// 1. TIẾNG VIỆT 4 (7 tiết / tuần)
export const TV4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "Bài 1: Điều kì diệu (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Mỗi người một vẻ đáng quý, tự tin vào nét riêng của mình.",
      actGV: "GV cho HS quan sát tranh khởi động; đọc mẫu diễn cảm toàn bài 'Điều kì diệu'; hướng dẫn chia 3 đoạn, luyện đọc từ khó (kì diệu, rực rỡ, nét riêng); hướng dẫn HS đọc theo nhóm 3; hỗ trợ các nhóm đọc đúng tốc độ và ngắt nghỉ đúng dấu câu.",
      actHS: "HS lắng nghe GV đọc mẫu, theo dõi SGK; luyện đọc từ khó theo hướng dẫn; nối tiếp nhau đọc từng đoạn trong nhóm; thảo luận trả lời 4 câu hỏi tìm hiểu bài; chia sẻ về nét riêng của bản thân với bạn cùng bàn."
    },
    {
      title: "Bài 1: Điều kì diệu (Tiết 2: LTVC: Danh từ)",
      sub: "Luyện từ và câu",
      note: "Nhận biết khái niệm danh từ chỉ người, vật, hiện tượng, thời gian.",
      actGV: "GV giao nhiệm vụ phân loại các từ in đậm trong đoạn văn mẫu; hướng dẫn HS rút ra ghi nhớ về khái niệm Danh từ; tổ chức trò chơi 'Tiếp sức tìm nhanh danh từ' theo 4 nhóm; nhận xét, chốt kiến thức trọng tâm.",
      actHS: "HS đọc ngữ liệu trong SGK, thảo luận nhóm đôi xếp các từ vào bảng phân loại (người, vật, hiện tượng, thời gian); phát biểu ghi nhớ; làm bài tập 1, 2 vào vở bài tập; thi đua tiếp sức tìm danh từ trên bảng phụ."
    },
    {
      title: "Bài 1: Điều kì diệu (Tiết 3: Viết: Tìm hiểu đoạn văn và câu chủ đề)",
      sub: "Viết",
      note: "Cấu trúc đoạn văn và vai trò của câu chủ đề mở đoạn, kết đoạn.",
      actGV: "GV trình chiếu 2 đoạn văn mẫu; hướng dẫn HS nhận diện câu chủ đề đứng ở đầu đoạn (diễn dịch) hoặc cuối đoạn (quy nạp); đặt câu hỏi gợi mở phân tích mối quan hệ giữa câu chủ đề và các câu phát triển ý; hướng dẫn thực hành.",
      actHS: "HS đọc thầm các đoạn văn trong SGK; dùng bút chì gạch chân câu chủ đề; thảo luận nhóm về vai trò định hướng nội dung của câu chủ đề; hoàn thành phiếu bài tập nhận diện câu chủ đề."
    },
    {
      title: "Bài 2: Thi nhạc (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Bản giao hưởng thiên nhiên độc đáo của các nghệ sĩ côn trùng.",
      actGV: "GV mở đoạn âm thanh tiếng dế mèn, ve sầu, cào cào kêu tạo hứng thú; đọc mẫu bài 'Thi nhạc' với giọng sinh động; hướng dẫn HS chia đoạn, luyện đọc từ ngữ miêu tả âm thanh và động tác của các con vật.",
      actHS: "HS lắng nghe âm thanh đoán tên con vật; theo dõi bài đọc, đọc nối tiếp từng đoạn theo cặp; luyện đọc câu dài miêu tả bản nhạc giao hưởng của ve sầu và dế mèn; thảo luận câu hỏi 1, 2."
    },
    {
      title: "Bài 2: Thi nhạc (Tiết 2: Đọc hiểu và luyện tập)",
      sub: "Đọc",
      note: "Tình yêu nghệ thuật và cảm thụ âm thanh thiên nhiên kì thú.",
      actGV: "GV hướng dẫn HS thảo luận câu hỏi 3, 4, 5 trong SGK; chốt ý nghĩa bài đọc: ca ngợi tình yêu thiên nhiên, đam mê nghệ thuật và nét độc đáo của mỗi thí sinh trong hội thi; hướng dẫn đọc diễn cảm đoạn thầy giáo Vàng Anh chấm thi.",
      actHS: "HS thảo luận nhóm 4 trả lời câu hỏi tìm hiểu bài; nhận xét tài năng biểu diễn của từng nghệ sĩ côn trùng; luyện đọc diễn cảm với giọng tươi vui, hào hứng; thi đọc diễn cảm trước lớp."
    },
    {
      title: "Bài 2: Thi nhạc (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn nêu ý kiến)",
      sub: "Viết",
      note: "Cách lập luận, đưa lí lẽ và dẫn chứng bảo vệ ý kiến của mình.",
      actGV: "GV giới thiệu đoạn văn nêu ý kiến mẫu; hướng dẫn HS phân tích 3 phần: Nêu ý kiến (mở đoạn), Nêu lí lẽ và dẫn chứng (thân đoạn), Khẳng định lại ý kiến (kết đoạn); giao đề bài thực hành.",
      actHS: "HS đọc kĩ đoạn văn mẫu trong SGK; chỉ ra câu mở đoạn, các lí lẽ và dẫn chứng tác giả sử dụng; thảo luận nhóm đôi tìm lí lẽ cho một đề bài cụ thể; ghi chép dàn ý vào vở."
    },
    {
      title: "Bài 2: Thi nhạc (Tiết 4: Nói và nghe: Kể chuyện đã đọc hoặc đã nghe)",
      sub: "Nói và nghe",
      note: "Kể câu chuyện về niềm đam mê nghệ thuật hoặc lòng dũng cảm.",
      actGV: "GV hướng dẫn các tiêu chí kể chuyện: giọng kể tự nhiên, ánh mắt cử chỉ biểu cảm, nội dung đúng chủ đề đam mê nghệ thuật hoặc nghị lực sống; chia lớp thành các nhóm nhỏ thực hành kể chuyện.",
      actHS: "HS nhớ lại câu chuyện đã đọc trong sách báo; lần lượt kể lại trong nhóm 4; các bạn trong nhóm lắng nghe, nhận xét và đặt câu hỏi giao lưu; 2-3 đại diện tự tin kể trước lớp."
    }
  ],
  2: [
    {
      title: "Bài 3: Anh em sinh đôi (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Tình anh em ruột thịt và sự gắn bó, thấu hiểu lẫn nhau.",
      actGV: "GV cho HS xem tranh anh em sinh đôi; đọc mẫu toàn bài; hướng dẫn đọc đúng ngữ điệu của hai nhân vật Long và Tiến; hướng dẫn chia 3 đoạn và luyện đọc từ khó.",
      actHS: "HS quan sát tranh, nêu cảm nhận; luyện đọc nối tiếp đoạn theo nhóm; chú ý ngữ điệu thể hiện sự ngạc nhiên và tình cảm gắn bó của hai anh em; trả lời câu hỏi đọc hiểu 1, 2."
    },
    {
      title: "Bài 3: Anh em sinh đôi (Tiết 2: LTVC: Danh từ chung, danh từ riêng)",
      sub: "Luyện từ và câu",
      note: "Phân biệt và quy tắc viết hoa danh từ riêng chỉ người, địa lí.",
      actGV: "GV đưa bảng phụ so sánh danh từ chung (học sinh, sông, núi) và danh từ riêng (Long, Hồng, Ba Vì); hướng dẫn quy tắc viết hoa chữ cái đầu của danh từ riêng; tổ chức luyện tập bài 1, 2, 3.",
      actHS: "HS quan sát, so sánh sự khác nhau về ý nghĩa và cách viết giữa danh từ chung và danh từ riêng; làm bài tập nhận diện và viết hoa danh từ riêng chỉ người, địa lí vào vở."
    },
    {
      title: "Bài 3: Anh em sinh đôi (Tiết 3: Viết: Tìm ý cho đoạn văn nêu ý kiến)",
      sub: "Viết",
      note: "Tìm ý cho đoạn văn bày tỏ suy nghĩ về một câu chuyện hoặc tấm gương.",
      actGV: "GV nêu đề bài: Bày tỏ suy nghĩ về một nhân vật giàu nghị lực hoặc một câu chuyện đã học; hướng dẫn các bước tìm ý: Em thích nhân vật nào? Nhân vật có nét gì đáng quý? Bài học rút ra là gì?",
      actHS: "HS chọn nhân vật yêu thích; suy nghĩ và ghi nhanh các ý chính ra nháp theo sơ đồ tư duy; trao đổi ý tưởng với bạn cùng bàn; hoàn thiện bảng tìm ý của cá nhân."
    },
    {
      title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Tự tin thể hiện khả năng của bản thân, không mặc cảm tự ti.",
      actGV: "GV đọc mẫu bài 'Công chúa và người dẫn chuyện'; hướng dẫn HS đọc phân vai (người dẫn chuyện, mẹ, cô giáo, cô bé); luyện đọc lời thoại giàu cảm xúc.",
      actHS: "HS lắng nghe, theo dõi; luyện đọc phân vai trong nhóm 4; thể hiện rõ tâm trạng từ buồn bã, lo lắng chuyển sang tự hào, rạng rỡ của bạn nhỏ; thảo luận câu hỏi trong SGK."
    },
    {
      title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 2: Đọc hiểu và luyện tập)",
      sub: "Đọc",
      note: "Mỗi vai diễn, công việc trong tập thể đều có ý nghĩa quan trọng.",
      actGV: "GV điều hành HS thảo luận câu hỏi: Vì sao vai người dẫn chuyện lại quan trọng không kém vai công chúa? Chốt thông điệp: Bất kì vị trí nào trong tập thể cũng đều đáng quý nếu làm hết mình.",
      actHS: "HS trả lời câu hỏi, liên hệ bản thân trong các hoạt động của lớp; luyện đọc lại đoạn cuối bài với giọng hào hứng; rút ra bài học về sự tự tin và cống hiến."
    },
    {
      title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 3: Viết: Viết đoạn văn nêu ý kiến)",
      sub: "Viết",
      note: "Thực hành viết đoạn văn nêu suy nghĩ về một nhân vật giàu nghị lực.",
      actGV: "GV nhắc lại cấu trúc đoạn văn nêu ý kiến (câu mở đoạn, lí lẽ, dẫn chứng, câu kết đoạn); hướng dẫn cách dùng từ ngữ liên kết câu; quan sát và hỗ trợ HS trong quá trình viết.",
      actHS: "HS dựa vào dàn ý đã lập ở tiết trước, viết đoạn văn hoàn chỉnh vào vở (từ 5-7 câu); đọc lại, tự kiểm tra chính tả và dấu câu; một số HS đọc đoạn văn trước lớp."
    },
    {
      title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 4: Đọc mở rộng)",
      sub: "Đọc mở rộng",
      note: "Tìm đọc bài viết, câu chuyện về tình bạn và lòng nhân ái.",
      actGV: "GV hướng dẫn HS mang sách truyện đã chuẩn bị; hướng dẫn ghi chép vào Phiếu đọc sách: tên cuốn sách, tác giả, nhân vật em yêu thích, chi tiết xúc động nhất.",
      actHS: "HS đọc sách truyện cá nhân trong 15 phút; điền thông tin vào Phiếu đọc sách; chia sẻ cuốn sách hay với các bạn trong nhóm."
    }
  ],
  3: [
    {
      title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Tôn trọng cuộc sống và đặc điểm tự nhiên của mỗi loài sinh vật.",
      actGV: "GV đọc mẫu bài đọc; hướng dẫn HS chia đoạn, luyện đọc từ khó; tổ chức đọc nối tiếp theo cặp; hướng dẫn tìm hiểu nội dung cuộc trò chuyện giữa thằn lằn và tắc kè.",
      actHS: "HS đọc nối tiếp đoạn; trả lời các câu hỏi trong SGK; nhận xét sự khác biệt về tập tính sinh hoạt của hai loài vật; hiểu được thông điệp hãy là chính mình."
    },
    {
      title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 2: LTVC: Luyện tập về danh từ)",
      sub: "Luyện từ và câu",
      note: "Rèn kĩ năng nhận diện danh từ và viết đúng chính tả danh từ riêng.",
      actGV: "GV giao hệ thống bài tập phân loại danh từ, tìm danh từ riêng trong đoạn văn; hướng dẫn cách sửa lỗi viết hoa chưa đúng; chấm chữa bài cho HS.",
      actHS: "HS làm bài tập cá nhân vào vở; đổi vở kiểm tra kết quả theo cặp; chữa lỗi chính tả viết hoa danh từ riêng; phát biểu giải thích căn cứ viết hoa."
    },
    {
      title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 3: Viết: Trả bài viết đoạn văn nêu ý kiến)",
      sub: "Viết",
      note: "Sửa lỗi diễn đạt, liên kết câu trong đoạn văn nêu ý kiến.",
      actGV: "GV nhận xét chung về ưu điểm và hạn chế của cả lớp; chữa các lỗi ngữ pháp, dùng từ, câu chủ đề phổ biến lên bảng; hướng dẫn HS tự sửa bài của mình.",
      actHS: "HS nhận lại bài viết, đọc lời nhận xét của GV; tham gia chữa lỗi chung trên bảng; tự viết lại các câu văn mắc lỗi vào vở; đọc đoạn văn sau khi sửa cho bạn nghe."
    },
    {
      title: "Bài 6: Nghệ sĩ trống (Tiết 1: Đọc)",
      sub: "Đọc",
      note: "Nghị lực theo đuổi ước mơ âm nhạc của cô bé Milo gan dạ.",
      actGV: "GV giới thiệu tranh ảnh cô bé Milo chơi trống; đọc mẫu với giọng truyền cảm, nhấn giọng ở các chi tiết miêu tả sự kiên trì vượt khó; hướng dẫn đọc đoạn khó.",
      actHS: "HS quan sát tranh, lắng nghe GV đọc; luyện đọc từ khó và câu văn dài; đọc nối tiếp theo nhóm 4; tìm các chi tiết thể hiện niềm đam mê đánh trống của cô bé."
    },
    {
      title: "Bài 6: Nghệ sĩ trống (Tiết 2: Đọc hiểu và luyện tập)",
      sub: "Đọc",
      note: "Ý chí vượt qua định kiến giới tính để thành công trong nghệ thuật.",
      actGV: "GV hướng dẫn HS thảo luận câu hỏi: Milo đã vượt qua những định kiến xã hội như thế nào? Ý nghĩa của tiếng vỗ tay tán thưởng cuối bài; chốt nội dung giáo dục bình đẳng giới.",
      actHS: "HS thảo luận nhóm, nêu suy nghĩ về sự kiên trì theo đuổi ước mơ; luyện đọc diễn cảm đoạn Milo biểu diễn trong đêm nhạc; tự hào chia sẻ ước mơ tương lai của mình."
    },
    {
      title: "Bài 6: Nghệ sĩ trống (Tiết 3: Viết: Tìm hiểu cách viết bài văn thuật lại một sự việc)",
      sub: "Viết",
      note: "Cấu trúc bài văn thuật lại sự việc theo trình tự thời gian.",
      actGV: "GV phân tích bài văn mẫu thuật lại một sự việc; hướng dẫn HS xác định 3 phần: Mở bài (giới thiệu sự việc), Thân bài (diễn biến sự việc theo thời gian), Kết bài (cảm nghĩ); đặt câu hỏi gợi ý.",
      actHS: "HS đọc bài văn mẫu trong SGK; chỉ ra các từ ngữ chỉ thời gian (sáng sớm, sau đó, tiếp theo, cuối cùng); hoàn thành bài tập phân tích bố cục vào vở."
    },
    {
      title: "Bài 6: Nghệ sĩ trống (Tiết 4: Nói và nghe: Kể về một hoạt động tập thể)",
      sub: "Nói và nghe",
      note: "Chia sẻ về chuyến tham quan dã ngoại hoặc ngày hội trường.",
      actGV: "GV nêu gợi ý: Em hãy kể lại một hoạt động tập thể em đã tham gia (hội thao, tham quan dã ngoại, Tết Trung thu); hướng dẫn cách trình bày mạch lạc, tự nhiên.",
      actHS: "HS chọn hoạt động tập thể đáng nhớ nhất; ghi nhớ các mốc thời gian chính; thực hành kể cho bạn cùng bàn nghe; 2-3 HS đại diện tự tin chia sẻ trước toàn lớp."
    }
  ]
};

// 2. TOÁN 4 (5 tiết / tuần)
export const TOAN4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "Bài 1. Ôn tập các số đến 100 000 (Tiết 1)",
      note: "Đọc, viết, cấu tạo thập phân và so sánh các số trong phạm vi 100 000.",
      actGV: "GV gắn các thẻ số lên bảng; yêu cầu HS đọc, phân tích cấu tạo thập phân của số có 5 chữ số; tổ chức cho HS làm bài 1, bài 2 (SGK trang 6); quan sát, giúp đỡ HS còn lúng túng khi đọc số có chữ số 0; chấm chữa bài.",
      actHS: "HS quan sát bảng số, đọc to các số có 5 chữ số; viết số vào bảng con theo lời đọc của GV; làm việc cá nhân bài tập 1, 2 vào vở; đổi vở kiểm tra chéo kết quả với bạn bên cạnh."
    },
    {
      title: "Bài 1. Ôn tập các số đến 100 000 (Tiết 2)",
      note: "Thứ tự số, làm tròn số và xác định số lớn nhất, bé nhất.",
      actGV: "GV hướng dẫn HS ôn lại quy tắc làm tròn số đến hàng chục, hàng trăm, hàng nghìn; tổ chức trò chơi 'Ai nhanh ai đúng' làm bài tập 3, 4; củng cố kĩ năng tìm số liền trước, số liền sau.",
      actHS: "HS tham gia trò chơi tiếp sức xác định thứ tự dãy số; làm việc nhóm đôi thực hành làm tròn số đến hàng nghìn; trình bày bài giải bài toán có lời văn vào vở."
    },
    {
      title: "Bài 2. Ôn tập các phép tính trong phạm vi 100 000 (Tiết 1)",
      note: "Thực hiện phép cộng, phép trừ các số có đến 5 chữ số.",
      actGV: "GV yêu cầu HS nêu lại quy tắc đặt tính và tính cộng, trừ (thẳng cột, tính từ phải sang trái); gọi HS lên bảng thực hiện phép tính có nhớ; nhận xét, khắc sâu kĩ thuật cộng trừ có nhớ.",
      actHS: "HS thực hiện đặt tính vào bảng con; 2 HS lên bảng lớp tính toán; cả lớp theo dõi, nhận xét; làm bài tập 1, 2, 3 trong SGK vào vở."
    },
    {
      title: "Bài 2. Ôn tập các phép tính trong phạm vi 100 000 (Tiết 2)",
      note: "Thực hiện phép nhân, phép chia có dư và tính giá trị biểu thức.",
      actGV: "GV ôn tập kĩ thuật nhân số có 5 chữ số với số có 1 chữ số, phép chia có dư; hướng dẫn thứ tự thực hiện trong biểu thức có dấu ngoặc; bao quát lớp và giúp đỡ học sinh.",
      actHS: "HS nhắc lại bảng nhân, bảng chia; thực hành tính toán cẩn thận; làm bài tập tính giá trị biểu thức; giải bài toán thực tế về tính tiền mua hàng."
    },
    {
      title: "Bài 3. Số chẵn, số lẻ (Tiết 1)",
      note: "Nhận biết dấu hiệu số chẵn (tận cùng 0, 2, 4, 6, 8) và số lẻ (1, 3, 5, 7, 9).",
      actGV: "GV viết dãy số tự nhiên từ 0 đến 20; cho HS khoanh tròn các số chia hết cho 2; hình thành khái niệm số chẵn và số lẻ dựa vào chữ số tận cùng; tổ chức trò chơi phân loại số.",
      actHS: "HS quan sát, phát hiện quy luật số chẵn tận cùng là 0, 2, 4, 6, 8 và số lẻ tận cùng là 1, 3, 5, 7, 9; giơ thẻ Đ/S khi GV đọc số; làm bài tập nhận diện số chẵn, lẻ vào vở."
    }
  ],
  2: [
    {
      title: "Bài 3. Số chẵn, số lẻ (Tiết 2)",
      note: "Vận dụng tính chất số chẵn, số lẻ giải bài toán thực tế.",
      actGV: "GV nêu các bài toán ứng dụng: Đánh số nhà trên đường phố (bên chẵn, bên lẻ), sắp xếp bàn ghế; hướng dẫn HS nhận biết quy luật tổng hai số chẵn, hai số lẻ.",
      actHS: "HS thảo luận nhóm giải thích vì sao số nhà lại chia thành dãy chẵn và dãy lẻ; thực hành giải các bài toán đố vui số học; làm bài tập 1, 2 trang 12 SGK."
    },
    {
      title: "Bài 4. Biểu thức chứa chữ (Tiết 1)",
      note: "Làm quen với biểu thức chứa một chữ và tính giá trị biểu thức khi a thay đổi.",
      actGV: "GV đưa ra tình huống thực tế: Lan có 3 cái kẹo, mẹ cho thêm a cái kẹo -> Lan có 3 + a cái kẹo; giới thiệu biểu thức chứa một chữ; hướng dẫn tính giá trị biểu thức khi a = 2, a = 5.",
      actHS: "HS quan sát tình huống, nhận biết biểu thức chứa một chữ; thực hành thay chữ bằng số và tính giá trị; làm việc theo cặp bài tập tính giá trị biểu thức vào vở."
    },
    {
      title: "Bài 4. Biểu thức chứa chữ (Tiết 2)",
      note: "Biểu thức chứa hai chữ: dạng a + b, a - b, a x b.",
      actGV: "GV mở rộng biểu thức chứa hai chữ; hướng dẫn tính giá trị khi biết giá trị cụ thể của a và b; củng cố công thức tính chu vi hình chữ nhật P = (a + b) x 2.",
      actHS: "HS thay giá trị của a và b vào biểu thức, tính toán cẩn thận; vận dụng biểu thức tính chu vi và diện tích hình chữ nhật; chữa bài trên bảng lớp."
    },
    {
      title: "Bài 4. Biểu thức chứa chữ (Tiết 3)",
      note: "Biểu thức chứa ba chữ: dạng a + b + c và ứng dụng tính chu vi tam giác.",
      actGV: "GV giới thiệu biểu thức a + b + c và công thức tính chu vi hình tam giác có 3 cạnh là a, b, c; hướng dẫn HS tính giá trị biểu thức với các số đo cụ thể.",
      actHS: "HS viết công thức tính chu vi hình tam giác; thực hành thay số tính chu vi tam giác với a, b, c cho trước; làm bài tập 1, 2, 3 SGK."
    },
    {
      title: "Bài 5. Giải bài toán có ba bước tính (Tiết 1)",
      note: "Phân tích đề bài, xác định sơ đồ tóm tắt cho bài toán ba bước tính.",
      actGV: "GV hướng dẫn HS đọc kĩ đề bài toán; hướng dẫn phân tích đề: Bài toán cho biết gì? Bài toán hỏi gì? Cần tìm đại lượng trung gian nào trước? Hướng dẫn vẽ sơ đồ đoạn thẳng.",
      actHS: "HS đọc đề bài, dùng bút chì gạch chân dữ liệu đã cho và yêu cầu cần tìm; cùng GV phân tích sơ đồ bài toán; xác định thứ tự 3 bước giải."
    }
  ]
};

// 3. KHOA HỌC 4 (2 tiết / tuần)
export const KH4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "Bài 1. Một số tính chất và vai trò của nước (Tiết 1)",
      note: "Nước là chất lỏng trong suốt, không màu, không mùi, không vị, không có hình dạng nhất định.",
      actGV: "GV chuẩn bị các cốc nước lọc, sữa, nước cam; hướng dẫn HS quan sát, ngửi, nếm để phát hiện tính chất: không màu, không mùi, không vị, trong suốt; làm thí nghiệm rót nước vào các bình có hình dạng khác nhau; kết luận nước không có hình dạng nhất định.",
      actHS: "HS làm việc theo nhóm 4: quan sát các cốc chất lỏng, ghi lại kết quả nhận xét vào phiếu học tập; cử đại diện nhóm làm thí nghiệm đổ nước vào chai, cốc, đĩa và rút ra kết luận; báo cáo trước lớp."
    },
    {
      title: "Bài 1. Một số tính chất và vai trò của nước (Tiết 2)",
      note: "Nước chảy từ cao xuống thấp, lan ra khắp phía và thấm qua một số chất.",
      actGV: "GV làm thí nghiệm đổ nước lên tấm kính nghiêng (nước chảy từ cao xuống thấp và lan ra khắp phía); thí nghiệm nước thấm qua vải, giấy và không thấm qua nilông; hướng dẫn liên hệ mái nhà lợp ngói dốc để thoát nước.",
      actHS: "HS quan sát thí nghiệm, thảo luận giải thích hiện tượng; liên hệ thực tế tại sao áo mưa làm bằng nilông; nêu các vai trò thiết yếu của nước đối với đời sống con người, động thực vật."
    }
  ],
  2: [
    {
      title: "Bài 2. Sự chuyển thể của nước (Tiết 1)",
      note: "Hiện tượng bay hơi, ngưng tụ, đông đặc và nóng chảy của nước.",
      actGV: "GV làm thí nghiệm đun sôi nước (bay hơi), đặt đĩa lạnh lên miệng cốc nước nóng (ngưng tụ); lấy viên đá ra ngoài không khí (nóng chảy) và để nước vào ngăn đá (đông đặc); hướng dẫn vẽ sơ đồ chuyển thể của nước.",
      actHS: "HS quan sát hiện tượng bốc hơi và đọng giọt nước dưới đáy đĩa; thảo luận nhóm phân biệt 4 hiện tượng: bay hơi, ngưng tụ, đông đặc, nóng chảy; hoàn thành sơ đồ chuyển thể vào vở."
    },
    {
      title: "Bài 2. Sự chuyển thể của nước (Tiết 2)",
      note: "Vòng tuần hoàn của nước trong tự nhiên: Mưa, mây và dòng chảy.",
      actGV: "GV trình chiếu video hoạt hình mô phỏng vòng tuần hoàn của nước trong tự nhiên (nước bốc hơi thành mây, mây ngưng tụ thành mưa rơi xuống đất); đặt câu hỏi gợi mở; hướng dẫn HS vẽ sơ đồ vòng tuần hoàn.",
      actHS: "HS xem video, thảo luận nhóm đôi mô tả lại các giai đoạn của vòng tuần hoàn nước; vẽ và tô màu sơ đồ vòng tuần hoàn của nước; thuyết trình sản phẩm của nhóm trước lớp."
    }
  ]
};

// 4. LỊCH SỬ VÀ ĐỊA LÍ 4 (2 tiết / tuần)
export const LSDL4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí (Tiết 1)",
      note: "Làm quen bản đồ, lược đồ và bảng số liệu thống kê.",
      actGV: "GV giới thiệu các phương tiện học tập: Bản đồ hành chính Việt Nam, lược đồ, tranh ảnh lịch sử, hiện vật; hướng dẫn các bước đọc bản đồ: đọc tên bản đồ, xem bảng chú giải, xác định phương hướng (Bắc - Nam - Đông - Tây).",
      actHS: "HS quan sát bản đồ treo tường và bản đồ trong SGK; chỉ ra các kí hiệu trên bảng chú giải (thủ đô, thành phố, sông, núi); thực hành chỉ phương hướng trên bản đồ; trả lời các câu hỏi trong SGK."
    },
    {
      title: "Bài 1. Làm quen với phương tiện học tập môn Lịch sử và Địa lí (Tiết 2)",
      note: "Kĩ năng đọc chú giải, xác định phương hướng trên bản đồ địa lí.",
      actGV: "GV hướng dẫn HS cách khai thác thông tin từ tranh ảnh lịch sử và trục thời gian; tổ chức cho HS thực hành đọc bảng số liệu dân số, diện tích các vùng miền; củng cố phương pháp học tập phân môn.",
      actHS: "HS quan sát tranh ảnh hiện vật thời tiền sử, thảo luận về đời sống của người xưa; thực hành đọc trục thời gian; làm bài tập trắc nghiệm củng cố kiến thức trong SGK."
    }
  ],
  2: [
    {
      title: "Bài 2. Thiên nhiên và con người vùng Trung du và miền núi Bắc Bộ (Tiết 1)",
      note: "Đặc điểm địa hình đồi núi cao, hiểm trở và dãy Hoàng Liên Sơn hùng vĩ.",
      actGV: "GV chỉ trên lược đồ địa hình vùng Trung du và miền núi Bắc Bộ; giới thiệu dãy Hoàng Liên Sơn hùng vĩ với đỉnh Phan-xi-păng; phân tích đặc điểm khí hậu mát mẻ, có tuyết rơi vào mùa đông trên đỉnh núi cao.",
      actHS: "HS quan sát lược đồ địa hình, xác định vị trí dãy Hoàng Liên Sơn và đỉnh Phan-xi-păng; thảo luận về đặc điểm khí hậu và cảnh quan vùng núi cao; ghi chép nội dung chính vào vở."
    },
    {
      title: "Bài 2. Thiên nhiên và con người vùng Trung du và miền núi Bắc Bộ (Tiết 2)",
      note: "Đỉnh Phan-xi-păng - nóc nhà Đông Dương và khí hậu mát mẻ quanh năm.",
      actGV: "GV trình chiếu hình ảnh thị xã Sa Pa mờ sương và đỉnh Phan-xi-păng; hướng dẫn HS tìm hiểu tiềm năng phát triển du lịch sinh thái và nghỉ dưỡng của vùng núi Bắc Bộ; đặt câu hỏi gợi mở.",
      actHS: "HS quan sát tranh ảnh Sa Pa, chia sẻ cảm nghĩ về cảnh đẹp thiên nhiên; thảo luận nhóm đôi về những thuận lợi và khó khăn của địa hình đồi núi đối với đời sống người dân."
    }
  ]
};

// 5. ĐẠO ĐỨC 4 (1 tiết / tuần)
export const DD4_LESSONS: Record<number, KHDHLessonItem> = {
  1: {
    title: "Bài 1. Biết ơn người lao động (Tiết 1)",
    note: "Hiểu được mọi nghề nghiệp chân chính đều đáng quý và đáng trân trọng.",
    actGV: "GV trình chiếu video phóng sự về công việc của cô bác lao công, người nông dân trên đồng ruộng, chú công nhân xây dựng; nêu câu hỏi gợi mở về vai trò của người lao động đối với cuộc sống; tổ chức thảo luận nhóm.",
    actHS: "HS xem video, bày tỏ cảm xúc về sự vất vả của người lao động; thảo luận nhóm 4 xử lí các tình huống trong SGK; đại diện nhóm sắm vai thể hiện lời nói, hành động lễ phép và biết ơn người lao động."
  },
  2: {
    title: "Bài 1. Biết ơn người lao động (Tiết 2)",
    note: "Bày tỏ thái độ kính trọng và biết ơn cô chú lao công, bác nông dân, chú công nhân.",
    actGV: "GV hướng dẫn HS phân tích các hành vi thể hiện lòng biết ơn: chào hỏi lễ phép, giữ gìn vệ sinh chung, trân trọng hạt cơm bát gạo; tổ chức trò chơi 'Bày tỏ ý kiến' (Đồng tình / Không đồng tình).",
    actHS: "HS giơ thẻ bày tỏ thái độ trước các hành vi; chia sẻ những việc làm cụ thể của bản thân để giúp đỡ và bày tỏ lòng biết ơn đối với người lao động xung quanh em."
  },
  3: {
    title: "Bài 1. Biết ơn người lao động (Tiết 3)",
    note: "Thực hành giữ gìn sản phẩm lao động và giúp đỡ người lao động vừa sức.",
    actGV: "GV tổ chức hoạt động viết thư hoặc vẽ tranh gửi lời cảm ơn tới một người lao động mà em yêu quý (bác bảo vệ trường, cô lao công, cha mẹ); hướng dẫn triển lãm sản phẩm.",
    actHS: "HS viết bưu thiếp hoặc vẽ tranh thể hiện lòng biết ơn; trưng bày sản phẩm trên góc học tập của lớp; thuyết trình ngắn gọn về sản phẩm của mình."
  }
};

// 6. CÔNG NGHỆ 4 (1 tiết / tuần)
export const CN4_LESSONS: Record<number, KHDHLessonItem> = {
  1: {
    title: "Bài 1. Lợi ích của hoa và cây cảnh (Tiết 1)",
    note: "Hoa và cây cảnh làm đẹp cảnh quan, thanh lọc không khí và mang lại giá trị kinh tế.",
    actGV: "GV cho HS xem các hình ảnh công viên, phòng khách, ban công có trang trí hoa và cây cảnh; hướng dẫn HS phân tích lợi ích: làm đẹp cảnh quan, thanh lọc không khí, mang lại giá trị kinh tế; tổ chức thảo luận nhóm.",
    actHS: "HS quan sát tranh ảnh thực tế, kể tên các loại hoa cây cảnh trồng ở nhà mình; thảo luận nhóm liệt kê 3 lợi ích nổi bật của cây xanh; trình bày ý kiến trước lớp."
  },
  2: {
    title: "Bài 1. Lợi ích của hoa và cây cảnh (Tiết 2)",
    note: "Ý nghĩa của hoa trong các ngày lễ hội, ngày Tết cổ truyền của dân tộc.",
    actGV: "GV giới thiệu các loài hoa đặc trưng ngày Tết: hoa đào, hoa mai, hoa cúc; hướng dẫn HS tìm hiểu ý nghĩa may mắn, sung túc của hoa ngày lễ hội; giáo dục tình yêu thiên nhiên.",
    actHS: "HS quan sát tranh ảnh ngày Tết, chia sẻ về loài hoa gia đình thường chưng vào dịp Tết; vẽ một loài hoa em yêu thích và ghi lời chúc năm mới."
  }
};

// 7. HOẠT ĐỘNG TRẢI NGHIỆM 4 (3 tiết / tuần)
export const HDTN4_LESSONS: Record<number, { shdc: string; gdcd: string; shl: string; note: string; actGV?: string; actHS?: string }> = {
  1: {
    shdc: "SHDC: Khai giảng năm học mới rộn ràng",
    gdcd: "HĐGDCĐ: Giới thiệu về bản thân và sở thích của em",
    shl: "SHL: Bầu ban cán sự lớp và xây dựng nội quy",
    note: "Khởi động năm học mới hào hứng, kết nối tình bạn bè.",
    actGV: "GV tổ chức nghi lễ chào cờ đầu tuần trang nghiêm; điều hành hoạt động giao lưu 'Giới thiệu bản thân và sở thích'; hướng dẫn lớp bầu ban cán sự và xây dựng nội quy lớp học dân chủ, tích cực.",
    actHS: "HS thực hiện nghi thức chào cờ, hát Quốc ca nghiêm trang; tự tin đứng trước lớp giới thiệu họ tên, sở thích, ước mơ; tham gia biểu quyết bầu ban cán sự lớp và cam kết thực hiện nội quy."
  },
  2: {
    shdc: "SHDC: Phát động phong trào 'Vở sạch chữ đẹp'",
    gdcd: "HĐGDCĐ: Nền nếp học tập và kỉ luật tự giác",
    shl: "SHL: Chia sẻ kinh nghiệm học tốt các môn",
    note: "Rèn thói quen tự giác học tập và chuẩn bị sách vở chu đáo.",
    actGV: "GV phát động phong trào giữ vở sạch chữ đẹp; hướng dẫn thảo luận xây dựng góc học tập ngăn nắp và thời gian biểu cá nhân; điều hành sinh hoạt lớp sơ kết tuần.",
    actHS: "HS trưng bày vở mẫu sạch đẹp; chia sẻ bí quyết rèn chữ và cách chuẩn bị bài trước khi đến lớp; tự giác nhận xét ưu khuyết điểm của bản thân trong tuần qua."
  }
};

// 8. TCTV & TCT 4
export const TCTV4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "TCTV (Tiết 1): Rèn viết đoạn văn nêu ý kiến và xác định câu chủ đề",
      note: "Rèn cách mở đoạn và kết đoạn rõ ràng.",
      actGV: "GV hướng dẫn HS phân tích câu chủ đề trong đoạn văn nêu ý kiến; giao bài tập thực hành viết đoạn văn bày tỏ suy nghĩ về một việc tốt; hướng dẫn sửa lỗi diễn đạt.",
      actHS: "HS xác định câu chủ đề trong đoạn văn; viết đoạn văn 5 câu nêu ý kiến vào vở; trao đổi bài với bạn để sửa lỗi chính tả và dùng từ."
    },
    {
      title: "TCTV (Tiết 2): Luyện tập phân loại danh từ chỉ người, vật, thời gian",
      note: "Luyện bài tập điền danh từ vào bảng phân loại.",
      actGV: "GV cho HS làm bài tập phân loại danh từ theo nhóm; tổ chức trò chơi 'Truy tìm danh từ' trong đoạn thơ; chấm chữa bài.",
      actHS: "HS điền danh từ vào bảng phân loại trong vở bài tập; tham gia trò chơi tiếp sức; nêu các danh từ chỉ đồ dùng học tập trong lớp."
    }
  ]
};

export const TCT4_LESSONS: Record<number, KHDHLessonItem[]> = {
  1: [
    {
      title: "TCT (Tiết 1): Luyện tập đọc, viết và so sánh các số có sáu chữ số",
      note: "Xác định giá trị theo hàng và lớp của từng chữ số.",
      actGV: "GV gắn bảng các hàng và lớp (lớp đơn vị, lớp nghìn); yêu cầu HS đọc và phân tích cấu tạo số; hướng dẫn so sánh hai số có nhiều chữ số.",
      actHS: "HS đọc số, viết số vào bảng con theo lời đọc; phân tích giá trị của từng chữ số theo hàng; hoàn thành bài tập so sánh số vào vở."
    },
    {
      title: "TCT (Tiết 2): Thực hành đặt tính và tính cộng, trừ các số có nhiều chữ số",
      note: "Rèn kĩ thuật tính cẩn thận, thẳng cột.",
      actGV: "GV giao bài tập đặt tính cộng trừ có nhớ; quan sát, sửa lỗi đặt tính lệch cột và quên nhớ; củng cố quy tắc tính toán cẩn thận.",
      actHS: "HS đặt tính thẳng cột vào vở; thực hiện tính từ phải sang trái; kiểm tra lại kết quả bằng phép tính ngược lại; chữa bài trên bảng."
    }
  ]
};
