import { LessonInfo } from "./gradeCurriculums";

// ============================================================================
// KẾ HOẠCH GIÁO DỤC KHỐI 5 (KHDH NĂM HỌC 2025-2026) - CHUẨN SGK KẾT NỐI TRI THỨC
// ============================================================================

// 1. TIẾNG VIỆT 5 (7 tiết / tuần x 35 tuần = 245 tiết)
export const TV5_LESSONS: Record<number, { title: string; sub: string; note: string }[]> = {
  1: [
    { title: "Bài 1: Thanh âm của gió (Tiết 1: Đọc)", sub: "Đọc", note: "Cảm nhận vẻ đẹp thiên nhiên và thanh âm cuộc sống quanh em." },
    { title: "Bài 1: Thanh âm của gió (Tiết 2: LTVC: Luyện tập về danh từ, động từ, tính từ)", sub: "Luyện từ và câu", note: "Ôn tập và nhận diện danh từ, động từ, tính từ trong ngữ cảnh." },
    { title: "Bài 1: Thanh âm của gió (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Hình thành phương pháp tưởng tượng, sáng tạo chi tiết cho bài kể chuyện." },
    { title: "Bài 2: Cánh đồng hoa (Tiết 1: Đọc)", sub: "Đọc", note: "BVMT: Tình yêu cảnh sắc quê hương, không bẻ hoa bẻ cành." },
    { title: "Bài 2: Cánh đồng hoa (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Phát triển năng lực cảm thụ văn học và mở rộng vốn từ." },
    { title: "Bài 2: Cánh đồng hoa (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo - tiếp)", sub: "Viết", note: "Rèn luyện kĩ năng xây dựng cốt truyện và nhân vật sáng tạo." },
    { title: "Bài 2: Cánh đồng hoa (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc văn bản về thế giới tuổi thơ và tình bạn bè." },
  ],
  2: [
    { title: "Bài 3: Tuổi Ngựa (Tiết 1: Đọc)", sub: "Đọc", note: "Ước mơ tuổi thơ bay bổng, tình cảm gắn bó tha thiết với người mẹ." },
    { title: "Bài 3: Tuổi Ngựa (Tiết 2: LTVC: Đại từ)", sub: "Luyện từ và câu", note: "Nhận biết khái niệm và công dụng của đại từ xưng hô." },
    { title: "Bài 3: Tuổi Ngựa (Tiết 3: Viết: Lập dàn ý cho bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Xây dựng dàn ý 3 phần cho bài văn kể chuyện sáng tạo." },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 1: Đọc)", sub: "Đọc", note: "Kỉ niệm êm đềm bên bến sông quê hương, tình bạn gắn bó." },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Giáo dục tình yêu quê hương, bến nước, dòng sông." },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 3: Viết: Viết bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Thực hành viết bài văn kể lại câu chuyện có chi tiết tưởng tượng mới." },
    { title: "Bài 4: Bến sông tuổi thơ (Tiết 4: Nói và nghe: Những câu chuyện thú vị)", sub: "Nói và nghe", note: "Tự tin chia sẻ trước tập thể câu chuyện vui, giàu ý nghĩa." },
  ],
  3: [
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 1: Đọc)", sub: "Đọc", note: "Lắng nghe sự kì diệu của mầm sống thiên nhiên, lòng nhân ái." },
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 2: LTVC: Luyện tập về đại từ)", sub: "Luyện từ và câu", note: "Sử dụng đại từ thay thế chính xác trong câu và đoạn văn." },
    { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Tự rà soát lỗi chính tả, diễn đạt và chỉnh sửa chi tiết sáng tạo." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 1: Đọc)", sub: "Đọc", note: "Tinh thần thể thao, nghị lực vượt khó vươn lên thành tài." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Ý chí kiên trì rèn luyện, tình đoàn kết đồng đội." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 3: Viết: Tìm hiểu cách viết báo cáo công việc)", sub: "Viết", note: "Nắm vững thể thức và cấu trúc bản báo cáo công việc." },
    { title: "Bài 6: Ngôi sao sân cỏ (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc bài viết về gương nghị lực rèn luyện thể thao." },
  ],
  4: [
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 1: Đọc)", sub: "Đọc", note: "Khơi gợi niềm đam mê tìm tòi, khám phá thế giới xung quanh." },
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 2: LTVC: Luyện tập về đại từ - tiếp theo)", sub: "Luyện từ và câu", note: "Rèn kĩ năng dùng đại từ tránh lặp từ trong đoạn văn." },
    { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 3: Viết: Viết báo cáo công việc)", sub: "Viết", note: "Thực hành lập văn bản báo cáo công việc học tập hoặc lao động." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 1: Đọc)", sub: "Đọc", note: "Trí tưởng tượng phong phú về vũ trụ và tương lai nhân loại." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Tình yêu khoa học và khám phá thế giới tự nhiên kì thú." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 3: Viết: Đánh giá, chỉnh sửa báo cáo công việc)", sub: "Viết", note: "Hoàn thiện bản báo cáo công việc rõ ràng, trung thực." },
    { title: "Bài 8: Hành tinh kì lạ (Tiết 4: Nói và nghe: Những điểm vui chơi lí thú)", sub: "Nói và nghe", note: "Thuyết trình giới thiệu địa điểm du lịch, vui chơi em yêu thích." },
  ],
  5: [
    { title: "Bài 9: Trước cổng trời (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp hùng vĩ của vùng cao phía Bắc, tình yêu quê hương đất nước." },
    { title: "Bài 9: Trước cổng trời (Tiết 2: LTVC: Từ đồng nghĩa)", sub: "Luyện từ và câu", note: "Nhận biết từ đồng nghĩa hoàn toàn và không hoàn toàn." },
    { title: "Bài 9: Trước cổng trời (Tiết 3: Viết: Tìm hiểu cách viết bài văn tả phong cảnh)", sub: "Viết", note: "Quan sát và lựa chọn trình tự miêu tả cảnh thiên nhiên." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 1: Đọc)", sub: "Đọc", note: "BVMT: Khám phá vẻ đẹp nguyên sơ của rừng nguyên sinh nhiệt đới." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Giáo dục ý thức bảo vệ tài nguyên rừng và muông thú quý hiếm." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 3: Viết: Tìm hiểu cách viết bài văn tả phong cảnh - tiếp)", sub: "Viết", note: "Kĩ thuật miêu tả bao quát và chi tiết điểm nổi bật của cảnh vật." },
    { title: "Bài 10: Kì diệu rừng xanh (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc bài văn, bài thơ ca ngợi cảnh đẹp non sông gấm vóc." },
  ],
  6: [
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 1: Đọc)", sub: "Đọc", note: "Niềm tự hào về di sản thiên nhiên thế giới độc nhất vô nhị của Việt Nam." },
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 2: LTVC: Luyện tập về từ đồng nghĩa)", sub: "Luyện từ và câu", note: "Lựa chọn từ đồng nghĩa tinh tế, gợi cảm khi viết câu văn." },
    { title: "Bài 11: Hang Sơn Đoòng - Những điều kì thú (Tiết 3: Viết: Viết mở bài và kết bài cho bài văn tả phong cảnh)", sub: "Viết", note: "Rèn kĩ năng viết mở bài trực tiếp/gián tiếp và kết bài mở rộng/không mở rộng." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 1: Đọc)", sub: "Đọc", note: "Chủ quyền biển đảo và kiệt tác thiên nhiên vịnh Hạ Long." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Giáo dục tình yêu biển đảo thiêng liêng của Tổ quốc." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 3: Viết: Quan sát phong cảnh)", sub: "Viết", note: "Rèn kĩ năng dùng đa giác quan để quan sát và ghi chép chi tiết phong cảnh." },
    { title: "Bài 12: Những hòn đảo trên vịnh Hạ Long (Tiết 4: Nói và nghe: Bảo tồn động vật hoang dã)", sub: "Nói và nghe", note: "Kêu gọi hành động bảo vệ thú rừng và cân bằng hệ sinh thái." },
  ],
  7: [
    { title: "Bài 13: Mầm non (Tiết 1: Đọc)", sub: "Đọc", note: "Sức sống tiềm tàng kì diệu của vạn vật khi mùa xuân đến." },
    { title: "Bài 13: Mầm non (Tiết 2: LTVC: Từ đa nghĩa)", sub: "Luyện từ và câu", note: "Phân biệt nghĩa gốc và nghĩa chuyển của từ đa nghĩa." },
    { title: "Bài 13: Mầm non (Tiết 3: Viết: Lập dàn ý cho bài văn tả phong cảnh)", sub: "Viết", note: "Lập dàn ý miêu tả một cảnh đẹp nơi em sinh sống." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 1: Đọc)", sub: "Đọc", note: "Khám phá hiện tượng núi lửa và thiên nhiên hùng vĩ trên Trái Đất." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Tìm hiểu cấu tạo địa chất và tác động của núi lửa đối với tự nhiên." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 3: Viết: Viết đoạn văn tả phong cảnh)", sub: "Viết", note: "Thực hành viết đoạn văn miêu tả cảnh sông nước hoặc núi non." },
    { title: "Bài 14: Những ngọn núi nóng rẫy (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc tư liệu về những hiện tượng tự nhiên kì thú trên thế giới." },
  ],
  8: [
    { title: "Bài 15: Bài ca về mặt trời (Tiết 1: Đọc)", sub: "Đọc", note: "Nguồn năng lượng vô tận của mặt trời và lòng biết ơn thiên nhiên." },
    { title: "Bài 15: Bài ca về mặt trời (Tiết 2: LTVC: Luyện tập về từ đa nghĩa)", sub: "Luyện từ và câu", note: "Đặt câu phân biệt nghĩa gốc và các nghĩa chuyển của từ đa nghĩa." },
    { title: "Bài 15: Bài ca về mặt trời (Tiết 3: Viết: Viết bài văn tả phong cảnh)", sub: "Viết", note: "Viết bài văn hoàn chỉnh miêu tả cảnh thiên nhiên quê hương." },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 1: Đọc)", sub: "Đọc", note: "Khám phá sa mạc lớn nhất thế giới với hệ sinh thái độc đáo." },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Ý chí thích nghi kiên cường của sinh vật và con người trên sa mạc." },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn tả phong cảnh)", sub: "Viết", note: "Tự chấm và sửa bài theo tiêu chí miêu tả cảnh sinh động." },
    { title: "Bài 16: Xin chào, Xa-ha-ra (Tiết 4: Nói và nghe: Cảnh đẹp thiên nhiên)", sub: "Nói và nghe", note: "Thuyết minh giới thiệu cảnh quan thiên nhiên kì vĩ mà em ấn tượng." },
  ],
  9: [
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 1: Ôn luyện đọc - hiểu)", sub: "Ôn tập", note: "Ôn tập các bài đọc chủ điểm 1 và 2." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 2: Luyện từ và câu)", sub: "Ôn tập", note: "Củng cố danh từ, động từ, tính từ, đại từ, từ đồng nghĩa, từ đa nghĩa." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 3: Kĩ năng viết)", sub: "Ôn tập", note: "Ôn tập văn kể chuyện sáng tạo và văn tả phong cảnh." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 4: Luyện tập thực hành)", sub: "Ôn tập", note: "Luyện giải đề cương và các dạng bài tập thực hành giữa kì." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 5: Củng cố kĩ năng nói và nghe)", sub: "Ôn tập", note: "Rèn kĩ năng tự tin trao đổi, thuyết trình trước đám đông." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 6: Kiểm tra Đọc)", sub: "Kiểm tra", note: "Kiểm tra đọc thành tiếng và đọc hiểu văn bản theo quy định." },
    { title: "Ôn tập và đánh giá giữa HKI (Tiết 7: Kiểm tra Đọc hiểu - Viết)", sub: "Kiểm tra", note: "Kiểm tra chính tả và bài viết hoàn chỉnh giữa học kì 1." },
  ],
  10: [
    { title: "Bài 17: Thư gửi các học sinh (Tiết 1: Đọc)", sub: "Đọc", note: "Bác Hồ căn dặn học sinh ngày khai trường đầu tiên, ý thức học tập vì đất nước." },
    { title: "Bài 17: Thư gửi các học sinh (Tiết 2: LTVC: Sử dụng từ điển)", sub: "Luyện từ và câu", note: "Hình thành kĩ năng tra từ điển giấy và từ điển trực tuyến an toàn." },
    { title: "Bài 17: Thư gửi các học sinh (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", note: "Cấu trúc đoạn văn nêu cảm nghĩ về nhân vật sách truyền cảm hứng." },
    { title: "Bài 18: Tấm gương tự học (Tiết 1: Đọc)", sub: "Đọc", note: "Tinh thần ham học hỏi, tự giác rèn luyện của danh nhân." },
    { title: "Bài 18: Tấm gương tự học (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Học tập phương pháp tự học và nghiên cứu khoa học suốt đời." },
    { title: "Bài 18: Tấm gương tự học (Tiết 3: Viết: Tìm ý cho đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", note: "Thu thập dẫn chứng và đặc điểm tiêu biểu của nhân vật em mến mộ." },
    { title: "Bài 18: Tấm gương tự học (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc sách về những tấm gương vượt khó học giỏi của nước ta." },
  ],
  11: [
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 1: Đọc)", sub: "Đọc", note: "Học đi đôi với hành, sáng tạo từ những trải nghiệm thực tế." },
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 2: LTVC: Luyện tập sử dụng từ điển)", sub: "Luyện từ và câu", note: "Thực hành tra nghĩa gốc, nghĩa chuyển và từ ghép trong từ điển." },
    { title: "Bài 19: Trải nghiệm để sáng tạo (Tiết 3: Viết: Viết đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", note: "Viết đoạn văn mạch lạc làm nổi bật phẩm chất của nhân vật sách." },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 1: Đọc)", sub: "Đọc", note: "Bền bỉ vượt qua khó khăn, tôi luyện ý chí để đạt thành công." },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Bài học về sự kiên trì, không nản lòng trước thất bại." },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một cuốn sách)", sub: "Viết", note: "Góp ý chéo cho bạn và sửa câu từ giàu hình ảnh, cảm xúc hơn." },
    { title: "Bài 20: Khổ luyện thành tài (Tiết 4: Nói và nghe: Cuốn sách tôi yêu)", sub: "Nói và nghe", note: "Giới thiệu cuốn sách yêu thích và lan tỏa văn hóa đọc đến lớp." },
  ],
  12: [
    { title: "Bài 21: Thế giới trong trang sách (Tiết 1: Đọc)", sub: "Đọc", note: "Sách mở ra chân trời tri thức và bồi đắp tâm hồn nhân hậu." },
    { title: "Bài 21: Thế giới trong trang sách (Tiết 2: LTVC: Dấu gạch ngang)", sub: "Luyện từ và câu", note: "Nắm vững 3 tác dụng chính của dấu gạch ngang trong câu văn." },
    { title: "Bài 21: Thế giới trong trang sách (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", note: "Cách biểu đạt cảm xúc chân thành về câu chuyện ý nghĩa." },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 1: Đọc)", sub: "Đọc", note: "Kỉ niệm tuổi thơ bên những câu chuyện cổ tích bà kể." },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Giá trị nhân văn sâu sắc của truyện cổ dân gian Việt Nam." },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 3: Viết: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", note: "Xác định chi tiết gây xúc động nhất trong câu chuyện để nêu cảm nghĩ." },
    { title: "Bài 22: Từ những câu chuyện ấu thơ (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc truyện cổ tích, ngụ ngôn ca ngợi lòng hiếu thảo, thật thà." },
  ],
  13: [
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 1: Đọc)", sub: "Đọc", note: "Tác phẩm kinh điển của Tô Hoài về tình bạn, khát vọng tự do và hòa bình." },
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 2: LTVC: Luyện tập về dấu gạch ngang)", sub: "Luyện từ và câu", note: "Sử dụng dấu gạch ngang đánh dấu lời đối thoại và phần chú thích." },
    { title: "Bài 23: Giới thiệu sách Dế Mèn phiêu lưu kí (Tiết 3: Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", note: "Thực hành viết đoạn văn cảm xúc về câu chuyện Dế Mèn." },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 1: Đọc)", sub: "Đọc", note: "Tấm gương tự học kiên trì phi thường của học giả nổi tiếng thế giới." },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Tự học là con đường ngắn nhất dẫn đến đỉnh cao tri thức." },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một câu chuyện)", sub: "Viết", note: "Chỉnh sửa bài viết, bồi dưỡng kĩ năng dùng từ ngữ gợi cảm xúc." },
    { title: "Bài 24: Tinh thần học tập của nhà Phi-lít (Tiết 4: Nói và nghe: Lợi ích của tự học)", sub: "Nói và nghe", note: "Thảo luận nhóm về các phương pháp tự học hiệu quả ở nhà." },
  ],
  14: [
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp thanh bình huyền ảo của đêm trăng trên công trường sông Đà." },
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 2: LTVC: Biện pháp điệp từ, điệp ngữ)", sub: "Luyện từ và câu", note: "Tác dụng nhấn mạnh, tạo nhịp điệu và cảm xúc của phép điệp." },
    { title: "Bài 25: Tiếng đàn ba-la-lai-ca trên sông Đà (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", note: "Phân tích cấu trúc đoạn văn chia sẻ cảm xúc về bài thơ hay." },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 1: Đọc)", sub: "Đọc", note: "Nghệ thuật bắt nguồn từ trí tưởng tượng và khả năng quan sát tinh tế." },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Phát huy năng lực sáng tạo nghệ thuật trong đời sống hằng ngày." },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 3: Viết: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", note: "Ghi lại những từ ngữ, hình ảnh thơ độc đáo chạm tới trái tim." },
    { title: "Bài 26: Trí tưởng tượng phong phú (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc các tác phẩm thơ ca viết về quê hương, đất nước." },
  ],
  15: [
    { title: "Bài 27: Tranh làng Hồ (Tiết 1: Đọc)", sub: "Đọc", note: "Tự hào dòng tranh dân gian Đông Hồ - di sản văn hóa quý báu của dân tộc." },
    { title: "Bài 27: Tranh làng Hồ (Tiết 2: LTVC: Luyện tập về điệp từ, điệp ngữ)", sub: "Luyện từ và câu", note: "Vận dụng điệp từ, điệp ngữ sáng tạo trong đoạn văn miêu tả." },
    { title: "Bài 27: Tranh làng Hồ (Tiết 3: Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", note: "Viết đoạn văn hoàn chỉnh bày tỏ cảm nghĩ về bài thơ Tranh làng Hồ." },
    { title: "Bài 28: Tập hát quan họ (Tiết 1: Đọc)", sub: "Đọc", note: "Bảo tồn dân ca quan họ Bắc Ninh - di sản phi vật thể nhân loại." },
    { title: "Bài 28: Tập hát quan họ (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Nét đẹp thanh lịch, mến khách và giao duyên của người quan họ." },
    { title: "Bài 28: Tập hát quan họ (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn thể hiện tình cảm, cảm xúc về một bài thơ)", sub: "Viết", note: "Rà soát tính mạch lạc và sức biểu cảm của đoạn văn." },
    { title: "Bài 28: Tập hát quan họ (Tiết 4: Nói và nghe: Chương trình nghệ thuật em yêu thích)", sub: "Nói và nghe", note: "Chia sẻ cảm xúc về một buổi biểu diễn âm nhạc, nghệ thuật truyền thống." },
  ],
  16: [
    { title: "Bài 29: Chú ốc sên bay (Tiết 1: Đọc)", sub: "Đọc", note: "Ước mơ không giới hạn và sự sáng tạo kì diệu trong nghệ thuật điện ảnh hoạt hình." },
    { title: "Bài 29: Chú ốc sên bay (Tiết 2: LTVC: Kết từ)", sub: "Luyện từ và câu", note: "Nhận diện kết từ và tác dụng nối các từ ngữ, vế câu." },
    { title: "Bài 29: Chú ốc sên bay (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình)", sub: "Viết", note: "Cách miêu tả ngoại hình, tính cách và hành động của nhân vật hoạt hình." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp duyên dáng và khổ công tập luyện của nghệ thuật múa cổ điển." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Tôn vinh sự kiên trì theo đuổi đam mê nghệ thuật chân chính." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 3: Viết: Tìm ý cho đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình)", sub: "Viết", note: "Ghi chép các chi tiết nổi bật của nhân vật hoạt hình em ấn tượng nhất." },
    { title: "Bài 30: Nghệ thuật múa ba lê (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc bài viết về các loại hình nghệ thuật sân khấu đặc sắc." },
  ],
  17: [
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 1: Đọc)", sub: "Đọc", note: "Kiến trúc Chùa Một Cột - biểu tượng văn hóa ngàn năm của Thăng Long Hà Nội." },
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 2: LTVC: Luyện tập về kết từ)", sub: "Luyện từ và câu", note: "Đặt câu sử dụng cặp kết từ biểu thị quan hệ nguyên nhân, điều kiện, tương phản." },
    { title: "Bài 31: Một ngôi chùa độc đáo (Tiết 3: Viết: Viết đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình)", sub: "Viết", note: "Hoàn thiện đoạn văn giới thiệu nhân vật hoạt hình giàu hình ảnh." },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 1: Đọc)", sub: "Đọc", note: "Nghệ thuật múa rối nước truyền thống và nhân vật chú Tễu hóm hỉnh, lạc quan." },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 2: Đọc hiểu và luyện tập)", sub: "Đọc", note: "Gìn giữ bản sắc văn hóa dân gian Việt Nam cho thế hệ mai sau." },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn giới thiệu nhân vật trong một bộ phim hoạt hình)", sub: "Viết", note: "Đọc soát lỗi chính tả, hoàn chỉnh lời giới thiệu sinh động." },
    { title: "Bài 32: Sự tích chú Tễu (Tiết 4: Nói và nghe: Bộ phim yêu thích)", sub: "Nói và nghe", note: "Trình bày trước lớp về bộ phim hoạt hình giàu ý nghĩa giáo dục em từng xem." },
  ],
  18: [
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 1: Ôn luyện đọc)", sub: "Ôn tập", note: "Ôn luyện đọc diễn cảm các bài đọc học kì 1." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 2: Ôn tập từ và câu)", sub: "Ôn tập", note: "Tổng kết hệ thống từ loại và dấu câu đã học trong học kì 1." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 3: Kĩ năng viết)", sub: "Ôn tập", note: "Củng cố các dạng bài văn miêu tả và đoạn văn biểu cảm." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 4: Luyện đề tổng hợp)", sub: "Ôn tập", note: "Luyện giải đề cương đánh giá định kì cuối học kì 1." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 5: Luyện đề tổng hợp - tiếp)", sub: "Ôn tập", note: "Rèn kĩ năng làm bài kiểm tra tự luận và trắc nghiệm." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 6: Kiểm tra Đọc)", sub: "Kiểm tra", note: "Đánh giá kĩ năng đọc thành tiếng và đọc hiểu học kì 1." },
    { title: "Ôn tập và đánh giá cuối HKI (Tiết 7: Kiểm tra Viết)", sub: "Kiểm tra", note: "Kiểm tra viết bài văn hoàn chỉnh cuối học kì 1." },
  ]
};

// 2. TOÁN 5 (5 tiết / tuần)
export const TOAN5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "Bài 1. Ôn tập số tự nhiên (Tiết 1)", note: "Ôn tập đọc, viết, so sánh số tự nhiên và cấu tạo thập phân của số." },
    { title: "Bài 1. Ôn tập số tự nhiên (Tiết 2)", note: "Luyện tập thứ tự các số và biểu diễn số trên tia số." },
    { title: "Bài 2. Ôn tập các phép tính với số tự nhiên (Tiết 1)", note: "Củng cố phép cộng và phép trừ các số tự nhiên có nhiều chữ số." },
    { title: "Bài 2. Ôn tập các phép tính với số tự nhiên (Tiết 2)", note: "Củng cố phép nhân, phép chia và tính giá trị biểu thức." },
    { title: "Bài 3. Ôn tập phân số (Tiết 1)", note: "Khái niệm phân số, tính chất cơ bản và rút gọn phân số." },
  ],
  2: [
    { title: "Bài 3. Ôn tập phân số (Tiết 2)", note: "Quy đồng mẫu số và so sánh các phân số." },
    { title: "Bài 4. Phân số thập phân (Tiết 1)", note: "Nhận biết phân số thập phân và viết phân số dưới dạng phân số thập phân." },
    { title: "Bài 5. Ôn tập các phép tính với phân số (Tiết 1)", note: "Phép cộng và phép trừ hai phân số cùng và khác mẫu số." },
    { title: "Bài 5. Ôn tập các phép tính với phân số (Tiết 2)", note: "Phép nhân và phép chia phân số, tính nhanh." },
    { title: "Bài 5. Ôn tập các phép tính với phân số (Tiết 3)", note: "Giải bài toán có lời văn liên quan đến phân số." },
  ],
  3: [
    { title: "Bài 6. Cộng, trừ hai phân số khác mẫu số (Tiết 1)", note: "Quy tắc quy đồng và thực hiện cộng hai phân số khác mẫu số." },
    { title: "Bài 6. Cộng, trừ hai phân số khác mẫu số (Tiết 2)", note: "Quy tắc quy đồng và thực hiện trừ hai phân số khác mẫu số." },
    { title: "Bài 7. Hỗn số (Tiết 1)", note: "Khái niệm hỗn số, phần nguyên và phần phân số của hỗn số." },
    { title: "Bài 7. Hỗn số (Tiết 2)", note: "Chuyển đổi hỗn số thành phân số và ngược lại." },
    { title: "Bài 8. Ôn tập hình học và đo lường (Tiết 1)", note: "Ôn tập chu vi, diện tích hình chữ nhật, hình vuông, hình bình hành." },
  ],
  4: [
    { title: "Bài 8. Ôn tập hình học và đo lường (Tiết 2)", note: "Ôn tập các đơn vị đo độ dài, khối lượng và diện tích đã học." },
    { title: "Bài 9. Luyện tập chung (Tiết 1)", note: "Luyện tập tổng hợp các phép tính phân số và hỗn số." },
    { title: "Bài 9. Luyện tập chung (Tiết 2)", note: "Giải toán liên quan đến tỉ số và rút về đơn vị." },
    { title: "Bài 9. Luyện tập chung (Tiết 3)", note: "Vận dụng kiến thức hình học và đo lường vào thực tế." },
    { title: "Bài 10. Khái niệm số thập phân (Tiết 1)", note: "Hình thành khái niệm số thập phân từ phân số thập phân." },
  ],
  5: [
    { title: "Bài 10. Khái niệm số thập phân (Tiết 2)", note: "Cấu tạo số thập phân: phần nguyên, phần thập phân và hàng của chữ số." },
    { title: "Bài 10. Khái niệm số thập phân (Tiết 3)", note: "Đọc, viết các số thập phân và xác định giá trị theo vị trí." },
    { title: "Bài 11. So sánh các số thập phân (Tiết 1)", note: "Quy tắc so sánh hai số thập phân theo từng hàng." },
    { title: "Bài 11. So sánh các số thập phân (Tiết 2)", note: "Sắp xếp dãy số thập phân theo thứ tự từ bé đến lớn và ngược lại." },
    { title: "Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 1)", note: "Chuyển đổi số đo độ dài về dạng số thập phân." },
  ],
  6: [
    { title: "Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 2)", note: "Chuyển đổi số đo khối lượng về dạng số thập phân." },
    { title: "Bài 12. Viết số đo đại lượng dưới dạng số thập phân (Tiết 3)", note: "Chuyển đổi số đo diện tích về dạng số thập phân." },
    { title: "Bài 13. Làm tròn số thập phân (Tiết 1)", note: "Quy tắc làm tròn số thập phân đến hàng đơn vị, hàng phần mười." },
    { title: "Bài 13. Làm tròn số thập phân (Tiết 2)", note: "Luyện tập làm tròn số thập phân trong đo lường và tính toán thực tế." },
    { title: "Bài 14. Luyện tập chung (Tiết 1)", note: "Củng cố so sánh và làm tròn số thập phân." },
  ],
  7: [
    { title: "Bài 14. Luyện tập chung (Tiết 2)", note: "Chuyển đổi linh hoạt số đo đại lượng dưới dạng số thập phân." },
    { title: "Bài 15. Ki-lô-mét vuông. Héc-ta (Tiết 1)", note: "Đơn vị đo diện tích ki-lô-mét vuông (km2) và bảng quy đổi." },
    { title: "Bài 15. Ki-lô-mét vuông. Héc-ta (Tiết 2)", note: "Đơn vị đo diện tích héc-ta (ha) và ứng dụng đo diện tích đất đai, rừng." },
    { title: "Bài 16. Các đơn vị đo diện tích (Tiết 1)", note: "Hệ thống bảng đơn vị đo diện tích hoàn chỉnh từ km2 đến mm2." },
    { title: "Bài 16. Các đơn vị đo diện tích (Tiết 2)", note: "Luyện tập chuyển đổi các đơn vị đo diện tích có hai tên đơn vị đo." },
  ],
  8: [
    { title: "Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 1)", note: "Thực hành đo đạc diện tích sân trường và phòng học bằng công cụ số." },
    { title: "Bài 17. Thực hành và trải nghiệm với một số đơn vị đo đại lượng (Tiết 2)", note: "Ước lượng và tính toán diện tích đất canh tác ở địa phương." },
    { title: "Bài 18. Luyện tập chung (Tiết 1)", note: "Ôn tập bảng đơn vị đo đại lượng và số thập phân." },
    { title: "Bài 18. Luyện tập chung (Tiết 2)", note: "Giải bài toán thực tế có liên quan đến chuyển đổi số đo." },
    { title: "Bài 19. Phép cộng số thập phân (Tiết 1)", note: "Kĩ thuật đặt tính thẳng cột và thực hiện phép cộng số thập phân." },
  ],
  9: [
    { title: "Bài 19. Phép cộng số thập phân (Tiết 2)", note: "Tính chất giao hoán và kết hợp của phép cộng số thập phân." },
    { title: "Bài 20. Phép trừ số thập phân (Tiết 1)", note: "Kĩ thuật đặt tính và thực hiện phép trừ hai số thập phân." },
    { title: "Bài 20. Phép trừ số thập phân (Tiết 2)", note: "Giải bài toán thực tế liên quan đến phép trừ số thập phân." },
    { title: "Bài 21. Phép nhân số thập phân (Tiết 1)", note: "Quy tắc nhân một số thập phân với một số tự nhiên." },
    { title: "Bài 21. Phép nhân số thập phân (Tiết 2)", note: "Quy tắc nhân hai số thập phân với nhau." },
  ],
  10: [
    { title: "Bài 21. Phép nhân số thập phân (Tiết 3)", note: "Tính chất phép nhân số thập phân và tính bằng cách thuận tiện nhất." },
    { title: "Bài 22. Phép chia số thập phân (Tiết 1)", note: "Chia một số thập phân cho một số tự nhiên." },
    { title: "Bài 22. Phép chia số thập phân (Tiết 2)", note: "Chia một số tự nhiên cho một số tự nhiên mà thương là số thập phân." },
    { title: "Bài 22. Phép chia số thập phân (Tiết 3)", note: "Chia một số tự nhiên cho một số thập phân." },
    { title: "Bài 22. Phép chia số thập phân (Tiết 4)", note: "Chia một số thập phân cho một số thập phân." },
  ],
  11: [
    { title: "Bài 23. Nhân, chia số thập phân với 10; 100; 1000;... (Tiết 1)", note: "Quy tắc dịch dấu phẩy sang phải khi nhân với 10, 100, 1000..." },
    { title: "Bài 23. Nhân, chia số thập phân với 10; 100; 1000;... (Tiết 2)", note: "Quy tắc dịch dấu phẩy sang trái khi chia cho 10, 100, 1000... hoặc nhân 0,1; 0,01..." },
    { title: "Bài 24. Luyện tập chung (Tiết 1)", note: "Luyện tập tính toán bốn phép tính với số thập phân." },
    { title: "Bài 24. Luyện tập chung (Tiết 2)", note: "Giải toán có lời văn nhiều bước tính với số thập phân." },
    { title: "Bài 24. Luyện tập chung (Tiết 3)", note: "Vận dụng tính nhanh và ước lượng kết quả phép tính số thập phân." },
  ],
  12: [
    { title: "Bài 25. Hình tam giác. Diện tích hình tam giác (Tiết 1)", note: "Cấu tạo hình tam giác: đáy và đường cao tương ứng." },
    { title: "Bài 25. Hình tam giác. Diện tích hình tam giác (Tiết 2)", note: "Xây dựng công thức tính diện tích hình tam giác: S = (a x h) : 2." },
    { title: "Bài 25. Hình tam giác. Diện tích hình tam giác (Tiết 3)", note: "Luyện tập tính diện tích hình tam giác vuông và tam giác thường." },
    { title: "Bài 25. Hình tam giác. Diện tích hình tam giác (Tiết 4)", note: "Giải bài toán thực tế liên quan đến diện tích mảnh đất hình tam giác." },
    { title: "Bài 26. Hình thang. Diện tích hình thang (Tiết 1)", note: "Đặc điểm hình thang: hai đáy song song, hai cạnh bên, đường cao." },
  ],
  13: [
    { title: "Bài 26. Hình thang. Diện tích hình thang (Tiết 2)", note: "Công thức tính diện tích hình thang: S = (a + b) x h : 2." },
    { title: "Bài 26. Hình thang. Diện tích hình thang (Tiết 3)", note: "Luyện tập tính diện tích hình thang có các đáy và đường cao cho trước." },
    { title: "Bài 26. Hình thang. Diện tích hình thang (Tiết 4)", note: "Giải bài toán thực tế tính diện tích thửa ruộng hình thang." },
    { title: "Bài 27. Đường tròn. Chu vi và diện tích hình tròn (Tiết 1)", note: "Khái niệm tâm, bán kính (r) và đường kính (d) của hình tròn." },
    { title: "Bài 27. Đường tròn. Chu vi và diện tích hình tròn (Tiết 2)", note: "Công thức tính chu vi hình tròn: C = d x 3,14 hoặc C = r x 2 x 3,14." },
  ],
  14: [
    { title: "Bài 27. Đường tròn. Chu vi và diện tích hình tròn (Tiết 3)", note: "Công thức tính diện tích hình tròn: S = r x r x 3,14." },
    { title: "Bài 27. Đường tròn. Chu vi và diện tích hình tròn (Tiết 4)", note: "Luyện tập tính chu vi và diện tích mặt bàn, bánh xe hình tròn." },
    { title: "Bài 27. Đường tròn. Chu vi và diện tích hình tròn (Tiết 5)", note: "Giải bài toán phức hợp liên quan đến chu vi và diện tích hình tròn." },
    { title: "Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình (Tiết 1)", note: "Thực hành dùng compa vẽ hoa văn, ghép hình từ các hình phẳng." },
    { title: "Bài 28. Thực hành và trải nghiệm đo, vẽ, lắp ghép, tạo hình (Tiết 2)", note: "STEM: Sáng tạo mô hình kiến trúc từ các mảnh ghép tam giác, hình thang." },
  ],
  15: [
    { title: "Bài 29. Luyện tập chung (Tiết 1)", note: "Củng cố tính diện tích tam giác, hình thang, hình tròn." },
    { title: "Bài 29. Luyện tập chung (Tiết 2)", note: "Giải bài toán tính diện tích các hình phẳng phức hợp ghép nối." },
    { title: "Bài 29. Luyện tập chung (Tiết 3)", note: "Vận dụng ước lượng vật liệu và diện tích xây dựng thực tế." },
    { title: "Bài 30. Ôn tập số thập phân (Tiết 1)", note: "Củng cố cấu tạo số, đọc, viết và so sánh số thập phân." },
    { title: "Bài 30. Ôn tập số thập phân (Tiết 2)", note: "Chuyển đổi số thập phân và phân số thập phân." },
  ],
  16: [
    { title: "Bài 30. Ôn tập số thập phân (Tiết 3)", note: "Luyện tập làm tròn số thập phân trong các trường hợp thực tiễn." },
    { title: "Bài 31. Ôn tập các phép tính với số thập phân (Tiết 1)", note: "Ôn tập phép cộng và phép trừ số thập phân." },
    { title: "Bài 31. Ôn tập các phép tính với số thập phân (Tiết 2)", note: "Ôn tập phép nhân số thập phân và nhân nhẩm." },
    { title: "Bài 31. Ôn tập các phép tính với số thập phân (Tiết 3)", note: "Ôn tập phép chia số thập phân." },
    { title: "Bài 31. Ôn tập các phép tính với số thập phân (Tiết 4)", note: "Tính giá trị biểu thức và tìm thành phần chưa biết." },
  ],
  17: [
    { title: "Bài 32. Ôn tập một số hình phẳng (Tiết 1)", note: "Hệ thống hóa đặc điểm và công thức chu vi các hình phẳng." },
    { title: "Bài 32. Ôn tập một số hình phẳng (Tiết 2)", note: "Hệ thống hóa công thức tính diện tích các hình phẳng đã học." },
    { title: "Bài 33. Ôn tập diện tích, chu vi một số hình phẳng (Tiết 1)", note: "Luyện tập giải toán liên quan đến chu vi và diện tích." },
    { title: "Bài 33. Ôn tập diện tích, chu vi một số hình phẳng (Tiết 2)", note: "Giải bài toán so sánh diện tích giữa các hình." },
    { title: "Bài 33. Ôn tập diện tích, chu vi một số hình phẳng (Tiết 3)", note: "Vận dụng tính toán chi phí lát gạch, trồng cỏ theo diện tích." },
  ],
  18: [
    { title: "Bài 34: Ôn tập đo lường (Tiết 1)", note: "Ôn tập bảng đơn vị đo độ dài và khối lượng." },
    { title: "Bài 34: Ôn tập đo lường (Tiết 2)", note: "Ôn tập bảng đơn vị đo diện tích và chuyển đổi đơn vị đo." },
    { title: "Bài 35: Ôn tập chung (Tiết 1)", note: "Luyện giải đề ôn tập cuối học kì 1 - Phần số và phép tính." },
    { title: "Bài 35: Ôn tập chung (Tiết 2)", note: "Luyện giải đề ôn tập cuối học kì 1 - Phần hình học và đo lường." },
    { title: "Bài 35: Ôn tập chung (Tiết 3)", note: "Luyện giải đề kiểm tra khảo sát chất lượng cuối học kì 1." },
  ]
};

// 3. KHOA HỌC 5 (2 tiết / tuần)
export const KH5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1)", note: "Tìm hiểu các thành phần chính của đất: mùn, khoáng chất, không khí, nước." },
    { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 2)", note: "Vai trò sống còn của đất đối với sự sinh trưởng và phát triển của thực vật." }
  ],
  2: [
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 1)", note: "Nguyên nhân gây ô nhiễm đất do hóa chất và rác thải sinh hoạt." },
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 2)", note: "Tác hại của xói mòn đất ở vùng đồi dốc và biện pháp chống xói mòn." }
  ],
  3: [
    { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 3)", note: "Biện pháp bảo vệ và cải tạo đất nông nghiệp sạch, an toàn." },
    { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 1)", note: "Khái niệm và cách tạo ra một hỗn hợp trong đời sống." }
  ],
  4: [
    { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 2)", note: "Thực hành phân biệt hỗn hợp và dung dịch qua thí nghiệm hòa tan." },
    { title: "Bài 4: Đặc điểm của chất ở trạng thái rắn, lỏng, khí (Tiết 1)", note: "Tính chất đặc trưng của chất ở trạng thái rắn, lỏng và khí." }
  ],
  5: [
    { title: "Bài 4: Sự biến đổi trạng thái của chất (Tiết 2)", note: "Hiện tượng nóng chảy, đông đặc, bay hơi và ngưng tụ." },
    { title: "Bài 5: Sự biến đổi hoá học của chất (Tiết 1)", note: "Phân biệt biến đổi vật lí và biến đổi hoá học qua thí nghiệm đốt cháy." }
  ],
  6: [
    { title: "Bài 5: Sự biến đổi hoá học của chất (Tiết 2)", note: "Ứng dụng và tác hại của biến đổi hoá học trong cuộc sống." },
    { title: "Bài 6: Ôn tập chủ đề Chất (Tiết 1)", note: "Hệ thống hóa kiến thức về đất, chất rắn, lỏng, khí và biến đổi hoá học." }
  ],
  7: [
    { title: "Bài 7: Vai trò của năng lượng (Tiết 1)", note: "Năng lượng mặt trời, gió, nước chảy đối với đời sống sinh vật." },
    { title: "Bài 7: Vai trò của năng lượng (Tiết 2)", note: "Các dạng năng lượng và sự chuyển hóa năng lượng hằng ngày." }
  ],
  8: [
    { title: "Bài 8: Sử dụng năng lượng điện (Tiết 1)", note: "Nguồn điện, dòng điện và các thiết bị tiêu thụ điện phổ biến." },
    { title: "Bài 8: Sử dụng năng lượng điện (Tiết 2)", note: "Sử dụng điện an toàn, tiết kiệm và phòng tránh tai nạn điện giật." }
  ],
  9: [
    { title: "Bài 9: Mạch điện đơn giản. Vật dẫn điện và cách điện (Tiết 1)", note: "Lắp ráp mạch điện thắp sáng bóng đèn đơn giản với pin và dây dẫn." },
    { title: "Ôn tập giữa HK1 (Tiết 18)", note: "Hệ thống hóa kiến thức khoa học đã học từ tuần 1 đến tuần 8." }
  ],
  10: [
    { title: "Bài 9: Mạch điện đơn giản. Vật dẫn điện và cách điện (Tiết 2)", note: "Phân loại vật dẫn điện và vật cách điện qua thí nghiệm." },
    { title: "Bài 10: Năng lượng chất đốt (Tiết 1)", note: "Các loại chất đốt rắn, lỏng, khí (than, củi, xăng dầu, khí gas)." }
  ],
  11: [
    { title: "Bài 10: Năng lượng chất đốt (Tiết 2)", note: "Phòng chống cháy nổ và ô nhiễm môi trường khi dùng chất đốt." },
    { title: "Bài 11: Sử dụng năng lượng mặt trời, gió, nước chảy (Tiết 1)", note: "Khai thác năng lượng sạch: pin mặt trời, cối xay gió, thủy điện." }
  ],
  12: [
    { title: "Bài 11: Sử dụng năng lượng mặt trời, gió, nước chảy (Tiết 2)", note: "Ưu điểm của năng lượng tái tạo và xu hướng năng lượng xanh tương lai." },
    { title: "Bài 11: Sử dụng năng lượng mặt trời, gió, nước chảy (Tiết 3)", note: "STEM: Chế tạo mô hình chong chóng gió phát điện hoặc bình nước nóng năng lượng." }
  ],
  13: [
    { title: "Bài 12: Ôn tập chủ đề Năng lượng (Tiết 25)", note: "Tổng kết các dạng năng lượng và ý thức tiết kiệm năng lượng." },
    { title: "Bài 13: Sinh sản của thực vật có hoa (Tiết 1)", note: "Cấu tạo hoa: nhị hoa, nhụy hoa và chức năng sinh sản." }
  ],
  14: [
    { title: "Bài 13: Sinh sản của thực vật có hoa (Tiết 2)", note: "Quá trình thụ phấn, thụ tinh, hình thành quả và hạt." },
    { title: "Bài 14: Sự phát triển của cây con (Tiết 1)", note: "Cây con mọc lên từ hạt: cấu tạo của hạt và điều kiện nảy mầm." }
  ],
  15: [
    { title: "Bài 14: Sự phát triển của cây con (Tiết 2)", note: "Cây con mọc lên từ một số bộ phận của cây mẹ (thân, cành, lá, rễ)." },
    { title: "Bài 14: Sự phát triển của cây con (Tiết 3)", note: "Thực hành gieo hạt và ghi nhật ký theo dõi sự sinh trưởng của mầm cây." }
  ],
  16: [
    { title: "Bài 15: Sinh sản của động vật (Tiết 1)", note: "Động vật đẻ trứng và động vật đẻ con." },
    { title: "Bài 15: Sinh sản của động vật (Tiết 2)", note: "Sự phát triển của phôi thai và sự chăm sóc con non của động vật." }
  ],
  17: [
    { title: "Bài 16: Vòng đời và sự phát triển của động vật (Tiết 1)", note: "Dạy học ngoài trời: Vòng đời của bướm, muỗi, ếch (biến thái hoàn toàn)." },
    { title: "Bài 16: Vòng đời và sự phát triển của động vật (Tiết 2)", note: "Tích hợp liên môn Công nghệ Bài 6: Vòng đời động vật có ích cho cây trồng." }
  ],
  18: [
    { title: "Ôn tập cuối HK1 (Tiết 35)", note: "Hệ thống hóa toàn bộ kiến thức Khoa học học kì 1." },
    { title: "Kiểm tra cuối HK1 (Tiết 36)", note: "Đánh giá định kì môn Khoa học 5 học kì 1 theo Thông tư 27." }
  ]
};

// 4. LỊCH SỬ VÀ ĐỊA LÍ 5 (2 tiết / tuần)
export const LSDL5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1)", note: "Vị trí địa lí hình chữ S, tiếp giáp các nước và vùng biển Việt Nam." },
    { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 2)", note: "Ý nghĩa thiêng liêng của Quốc kì cờ đỏ sao vàng, Quốc huy và bài Tiến quân ca." }
  ],
  2: [
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 1)", note: "Đặc điểm địa hình: 3/4 diện tích là đồi núi, đồng bằng màu mỡ." },
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 2)", note: "Tài nguyên khoáng sản phong phú và việc khai thác hợp lý." }
  ],
  3: [
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 3)", note: "Khí hậu nhiệt đới gió mùa ẩm và sự phân hóa khí hậu Bắc - Nam." },
    { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 4)", note: "Mạng lưới sông ngòi dày đặc: Sông Hồng, sông Cửu Long và giá trị bồi đắp phù sa." }
  ],
  4: [
    { title: "Bài 3: Biển, đảo Việt Nam (Tiết 1)", note: "Chủ quyền biển đảo thiêng liêng: Hoàng Sa, Trường Sa và vùng đặc quyền kinh tế." },
    { title: "Bài 3: Biển, đảo Việt Nam (Tiết 2)", note: "Tiềm năng kinh tế biển: thủy hải sản, cảng biển, dầu khí và du lịch biển đảo." }
  ],
  5: [
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 1)", note: "Đại gia đình 54 dân tộc anh em đoàn kết cùng chung sống." },
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 2)", note: "Đặc điểm quy mô dân số, gia tăng dân số và mật độ phân bố dân cư." }
  ],
  6: [
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 3)", note: "Phong tục tập quán và trang phục truyền thống của các vùng miền." },
    { title: "Bài 4: Dân cư và dân tộc ở Việt Nam (Tiết 4)", note: "Chính sách bình đẳng, đoàn kết và tương trợ giữa các dân tộc." }
  ],
  7: [
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 1)", note: "Nhà nước Văn Lang: Vua Hùng dựng nước, kinh đô Phong Châu." },
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 2)", note: "Đời sống vật chất, tinh thần người Việt cổ: Trống đồng Đông Sơn, bánh chưng bánh giầy." }
  ],
  8: [
    { title: "Bài 5: Nhà nước Văn Lang, Nhà nước Âu Lạc (Tiết 3)", note: "Nhà nước Âu Lạc: An Dương Vương xây thành Cổ Loa, chế tạo nỏ thần." },
    { title: "Bài 6: Vương quốc Phù Nam (Tiết 16)", note: "Nền văn hóa Óc Eo và sự phát triển rực rỡ của Vương quốc Phù Nam cổ." }
  ],
  9: [
    { title: "Bài 7: Vương quốc Chăm-pa (Tiết 1)", note: "Sự hình thành và lãnh thổ Vương quốc Chăm-pa ở dải đất miền Trung." },
    { title: "Bài 7: Vương quốc Chăm-pa (Tiết 2)", note: "Di sản kiến trúc tháp Chăm, điêu khắc đá và văn hóa độc đáo." }
  ],
  10: [
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 1)", note: "Khởi nghĩa Hai Bà Trưng (năm 40) - đòn sấm sét đầu tiên vào ách đô hộ." },
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 2)", note: "Khởi nghĩa Bà Triệu, Lý Bí thành lập nhà nước Vạn Xuân." }
  ],
  11: [
    { title: "Bài 8: Đấu tranh giành độc lập thời kì Bắc thuộc (Tiết 3)", note: "Chiến thắng Bạch Đằng năm 938 của Ngô Quyền chấm dứt hơn 1000 năm Bắc thuộc." },
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 1)", note: "Năm 1010, Lý Thái Tổ dời đô từ Hoa Lư về thành Thăng Long." }
  ],
  12: [
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 2)", note: "Xây dựng Văn Miếu - Quốc Tử Giám, đắp đê Cơ Xá bảo vệ mùa màng." },
    { title: "Bài 9: Triều Lý và việc định đô ở Thăng Long (Tiết 3)", note: "Lý Thường Kiệt và bản tuyên ngôn độc lập đầu tiên 'Nam quốc sơn hà'." }
  ],
  13: [
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên (Tiết 1)", note: "Nhà Trần thành lập, củng cố đắp đê và chính sách 'ngụ binh ư nông'." },
    { title: "Bài 10: Triều Trần xây dựng đất nước và kháng chiến chống quân Mông – Nguyên (Tiết 2)", note: "Hội nghị Diên Hồng và tinh thần 'Sát Thát' của quân dân Đại Việt." }
  ],
  14: [
    { title: "Bài 10: Triều Trần kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 3)", note: "Trần Hưng Đạo và thiên tài quân sự trong 3 lần đại thắng Mông - Nguyên." },
    { title: "Bài 10: Triều Trần kháng chiến chống quân Mông – Nguyên xâm lược (Tiết 4)", note: "Chiến thắng Bạch Đằng năm 1288 đập tan hoàn toàn mưu đồ xâm lược của giặc." }
  ],
  15: [
    { title: "Bài 11: Ôn tập (Tiết 1)", note: "Hệ thống hóa các triều đại buổi đầu lịch sử từ Hùng Vương đến nhà Trần." },
    { title: "Bài 11: Ôn tập (Tiết 2)", note: "Vận dụng kiến thức lịch sử và địa lí Việt Nam giải bài tập trắc nghiệm." }
  ],
  16: [
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 1)", note: "Lê Lợi dựng cờ khởi nghĩa Lam Sơn và Hội thề Lũng Nhai gắn kết anh hào." },
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 2)", note: "Nguyễn Trãi và áng hùng văn 'Bình Ngô đại cáo' tuyên bố độc lập." }
  ],
  17: [
    { title: "Bài 12: Khởi nghĩa Lam Sơn và Triều Hậu Lê (Tiết 3)", note: "Triều Hậu Lê ban hành Bộ luật Hồng Đức - bộ luật tiến bộ bậc nhất thời phong kiến." },
    { title: "Bài 13: Triều Nguyễn (Tiết 1)", note: "Nguyễn Ánh lập nên triều Nguyễn, đặt kinh đô tại Huế." }
  ],
  18: [
    { title: "Ôn tập cuối kì I (Tiết 35)", note: "Hệ thống hóa toàn diện kiến thức Lịch sử và Địa lí kì 1." },
    { title: "Kiểm tra và đánh giá cuối học kì I (Tiết 36)", note: "Kiểm tra định kì cuối HKI môn Lịch sử và Địa lí 5." }
  ]
};

// 5. ĐẠO ĐỨC 5 (1 tiết / tuần)
export const DD5_LESSONS: Record<number, { title: string; note: string }> = {
  1: { title: "Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 1)", note: "Nhận biết công lao to lớn của các anh hùng liệt sĩ, thương binh và người có công." },
  2: { title: "Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 2)", note: "Bày tỏ lòng biết ơn qua các việc làm thiết thực: thăm viếng nghĩa trang, giúp đỡ mẹ VNAH." },
  3: { title: "Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 3)", note: "Thực hành chăm sóc di tích lịch sử và đài tưởng niệm tại địa phương." },
  4: { title: "Bài 1. Biết ơn những người có công với quê hương, đất nước (Tiết 4)", note: "Tuyên truyền lối sống 'Uống nước nhớ nguồn' trong gia đình và trường lớp." },
  5: { title: "Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 1)", note: "Mỗi người có nét riêng về ngoại hình, tính cách, sở thích và hoàn cảnh sống." },
  6: { title: "Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 2)", note: "Không trêu chọc, kì thị bạn bè có sự khác biệt về dân tộc, ngôn ngữ, khuyết tật." },
  7: { title: "Bài 2. Tôn trọng sự khác biệt của người khác (Tiết 3)", note: "Hòa nhập, hợp tác và tôn trọng quan điểm, ý kiến riêng của mọi người." },
  8: { title: "Bài 3. Vượt qua khó khăn (Tiết 1)", note: "Nhận biết khó khăn trong học tập và đời sống là điều tất yếu ai cũng gặp phải." },
  9: { title: "Ôn tập tổng hợp giữa học kì I (Tiết 9)", note: "Củng cố các chuẩn mực đạo đức: Biết ơn người có công và Tôn trọng sự khác biệt." },
  10: { title: "Bài 3. Vượt qua khó khăn (Tiết 2)", note: "Rèn luyện ý chí kiên định, không nản lòng trước trở ngại, thử thách." },
  11: { title: "Bài 3. Vượt qua khó khăn (Tiết 3)", note: "Tìm kiếm sự hỗ trợ đúng lúc từ thầy cô, cha mẹ khi gặp khó khăn." },
  12: { title: "Bài 3. Vượt qua khó khăn (Tiết 4)", note: "Thực hành giải quyết tình huống vượt khó vươn lên trong học tập." },
  13: { title: "Bài 4. Bảo vệ cái đúng, cái tốt (Tiết 1)", note: "Phân biệt được hành vi đúng - sai, tốt - xấu trong các tình huống thực tiễn." },
  14: { title: "Bài 4. Bảo vệ cái đúng, cái tốt (Tiết 2)", note: "Dũng cảm bênh vực bạn bè khi bị đối xử bất công hoặc bắt nạt." },
  15: { title: "Bài 4. Bảo vệ cái đúng, cái tốt (Tiết 3)", note: "Kiên quyết đấu tranh chống gian lận trong học tập và thi cử." },
  16: { title: "Bài 5. Bảo vệ môi trường sống (Tiết 1)", note: "Nhận biết trách nhiệm bảo vệ nguồn nước, không khí và cảnh quan thiên nhiên." },
  17: { title: "Ôn tập tổng hợp cuối học kì I (Tiết 17)", note: "Đánh giá quá trình rèn luyện đạo đức, kĩ năng sống của bản thân trong học kì 1." },
  18: { title: "Bài 5. Bảo vệ môi trường sống (Tiết 2)", note: "Thực hành phân loại rác tại nguồn và nói không với rác thải nhựa dùng một lần." }
};

// 6. CÔNG NGHỆ 5 (1 tiết / tuần)
export const CN5_LESSONS: Record<number, { title: string; note: string }> = {
  1: { title: "Bài 1. Vai trò của công nghệ (Tiết 1)", note: "Công nghệ làm thay đổi đời sống con người, nâng cao năng suất lao động." },
  2: { title: "Bài 1. Vai trò của công nghệ (Tiết 2)", note: "Mối quan hệ mật thiết giữa tự nhiên, con người và sự tiến bộ công nghệ." },
  3: { title: "Bài 2. Nhà sáng chế (Tiết 1)", note: "Tìm hiểu tiểu sử và phát minh của các nhà sáng chế vĩ đại: Ê-đi-xơn, Nô-ben." },
  4: { title: "Bài 2. Nhà sáng chế (Tiết 2)", note: "Những nhà sáng chế Việt Nam với máy gặt lúa, máy bay không người lái tự chế." },
  5: { title: "Bài 2. Nhà sáng chế (Tiết 3)", note: "Phẩm chất cần có của nhà phát minh: quan sát tinh tế, kiên trì, đam mê sáng tạo." },
  6: { title: "Bài 2. Nhà sáng chế (Tiết 4)", note: "Thực hành đề xuất ý tưởng sáng chế cải tiến một đồ dùng học tập quen thuộc." },
  7: { title: "Bài 3. Tìm hiểu thiết kế (Tiết 1)", note: "Khái niệm thiết kế kĩ thuật và vai trò của bản vẽ thiết kế." },
  8: { title: "Bài 3. Tìm hiểu thiết kế (Tiết 2)", note: "Quy trình thiết kế 5 bước: Xác định vấn đề - Đề xuất ý tưởng - Thiết kế - Thử nghiệm - Hoàn thiện." },
  9: { title: "Bài 4. Thiết kế sản phẩm (Tiết 1)", note: "Lựa chọn vật liệu tái chế (bìa carton, chai nhựa) để chuẩn bị thiết kế sản phẩm." },
  10: { title: "Bài 4. Thiết kế sản phẩm (Tiết 2)", note: "Vẽ phác thảo bản thiết kế hộp đựng bút hoặc giá để sách mini." },
  11: { title: "Bài 4. Thiết kế sản phẩm (Tiết 3)", note: "Cắt gọt, lắp ráp chi tiết theo đúng bản vẽ thiết kế đã duyệt." },
  12: { title: "Bài 4. Thiết kế sản phẩm (Tiết 4)", note: "Trưng bày, thuyết minh sản phẩm và nhận xét đánh giá chéo." },
  13: { title: "Bài 5. Sử dụng điện thoại (Tiết 1)", note: "Cấu tạo và các chức năng cơ bản của điện thoại cố định và di động." },
  14: { title: "Bài 5. Sử dụng điện thoại (Tiết 2)", note: "Văn hóa giao tiếp lịch sự khi nghe và gọi điện thoại." },
  15: { title: "Bài 5. Sử dụng điện thoại (Tiết 3)", note: "Sử dụng các số điện thoại khẩn cấp: 111, 112, 113, 114, 115 khi gặp nguy hiểm." },
  16: { title: "Bài 5. Sử dụng điện thoại (Tiết 4)", note: "An toàn sử dụng: Không vừa sạc vừa dùng, bảo vệ mắt và quyền riêng tư số." },
  17: { title: "Ôn tập cuối học kì I (Tiết 17)", note: "Hệ thống hóa kiến thức công nghệ và đời sống kì 1." },
  18: { title: "Kiểm tra định kỳ cuối kì I (Tiết 18)", note: "Kiểm tra đánh giá chất lượng môn Công nghệ 5 học kì 1." }
};

// 7. HOẠT ĐỘNG TRẢI NGHIỆM 5 (3 tiết / tuần)
export const HDTN5_LESSONS: Record<number, { shdc: string; gdcd: string; shl: string; note: string }> = {
  1: {
    shdc: "SHDC: Chào năm học mới",
    gdcd: "HĐGDCĐ: Chúng mình đã lớn",
    shl: "SHL: Bậc thang trưởng thành",
    note: "Tự hào là học sinh lớp cuối cấp tiểu học, xác định mục tiêu năm học mới."
  },
  2: {
    shdc: "SHDC: Ngày hội câu lạc bộ",
    gdcd: "HĐGDCĐ: Từng bước trưởng thành",
    shl: "SHL: Tiến bộ trong việc nhà",
    note: "Rèn nếp sống tự lập, chủ động phụ giúp việc nhà vừa sức."
  },
  3: {
    shdc: "SHDC: Hoạt động vui Trung Thu",
    gdcd: "HĐGDCĐ: Niềm vui nhân đôi, nỗi buồn chia nửa",
    shl: "SHL: Cân bằng cảm xúc",
    note: "Biết lắng nghe, đồng cảm và điều hòa cảm xúc tích cực."
  },
  4: {
    shdc: "SHDC: Thực hành cân bằng cảm xúc",
    gdcd: "HĐGDCĐ: Sự trưởng thành của học sinh lớp 5",
    shl: "SHL: Thể hiện cảm xúc phù hợp",
    note: "Ứng xử lịch thiệp, tôn trọng thầy cô và bạn bè trong mọi tình huống."
  },
  5: {
    shdc: "SHDC: Vui trung thu cùng bạn",
    gdcd: "HĐGDCĐ: Các vấn đề nảy sinh trong mối quan hệ bạn bè và cách giải quyết",
    shl: "SHL: Thực hành giải quyết vấn đề nảy sinh trong tình bạn",
    note: "Kĩ năng hòa giải bất đồng và xây dựng tình bạn đoàn kết."
  },
  6: {
    shdc: "SHDC: Sách bút đồng hành cùng em",
    gdcd: "HĐGDCĐ: Những vấn đề nảy sinh giữa tình bạn trong học tập và rèn luyện",
    shl: "SHL: Hợp tác để thực hiện sản phẩm chung",
    note: "Tinh thần làm việc nhóm hiệu quả, tôn trọng ý kiến đóng góp của bạn."
  },
  7: {
    shdc: "SHDC: Ngày hội trao đổi sách",
    gdcd: "HĐGDCĐ: Giữ gìn tình bạn",
    shl: "SHL: Nuôi dưỡng tình bạn",
    note: "Lan tỏa văn hóa chia sẻ sách và gìn giữ tình bạn bè trong sáng."
  },
  8: {
    shdc: "SHDC: Trò chuyện về chủ đề 'Khoa học sáng tạo'",
    gdcd: "HĐGDCĐ: Kế hoạch hoạt động 'Cùng làm nên kỉ niệm'",
    shl: "SHL: Cùng làm nên kỉ niệm",
    note: "Ghi dấu kỉ niệm đẹp năm cuối cấp tiểu học cùng tập thể lớp."
  },
  9: {
    shdc: "SHDC: Phát động tổ chức sự kiện về truyền thống tôn sư trọng đạo",
    gdcd: "HĐGDCĐ: Sự kiện về truyền thống tôn sư trọng đạo",
    shl: "SHL: Giới thiệu về truyền thống nhà trường",
    note: "Tri ân thầy cô giáo nhân dịp ngày Nhà giáo Việt Nam 20/11."
  },
  10: {
    shdc: "SHDC: Các truyền thống của nhà trường",
    gdcd: "HĐGDCĐ: Tâm sự thầy - trò",
    shl: "SHL: Giải quyết một số vấn đề nảy sinh trong mối quan hệ thầy trò",
    note: "Bày tỏ lòng kính trọng, biết ơn sự tận tụy dạy dỗ của thầy cô giáo."
  },
  11: {
    shdc: "SHDC: Văn nghệ về chủ đề 'Tình thầy trò'",
    gdcd: "HĐGDCĐ: Vun đắp tình thầy trò",
    shl: "SHL: Sản phẩm tri ân thầy cô",
    note: "Tự tay làm bưu thiếp, vẽ tranh, viết văn tri ân thầy cô."
  },
  12: {
    shdc: "SHDC: Lễ kỉ niệm ngày nhà giáo Việt Nam 20-11",
    gdcd: "HĐGDCĐ: Chuẩn bị chào mừng ngày nhà giáo Việt Nam 20-11",
    shl: "SHL: Chào mừng ngày nhà giáo Việt Nam 20-11",
    note: "Tổ chức chương trình văn nghệ và lời chúc mừng ngày 20/11 ấm áp."
  },
  13: {
    shdc: "SHDC: Chủ động tham gia chi tiêu tiết kiệm",
    gdcd: "HĐGDCĐ: Sổ tay ghi chép chi tiêu trong gia đình",
    shl: "SHL: Ghi chép chi tiêu",
    note: "Giáo dục tài chính: Thói quen ghi chép nhật kí chi tiêu thông minh."
  },
  14: {
    shdc: "SHDC: Phát triển thư viện",
    gdcd: "HĐGDCĐ: Ý tưởng kinh doanh",
    shl: "SHL: Thực hiện khảo sát nhu cầu khách hàng",
    note: "Khám phá ý tưởng kinh doanh gây quỹ từ thiện và phục vụ cộng đồng."
  },
  15: {
    shdc: "SHDC: Chào mừng ngày thành lập Quân đội nhân dân Việt Nam 22-12",
    gdcd: "HĐGDCĐ: Việc cần làm để thực hiện kế hoạch kinh doanh",
    shl: "SHL: Kinh doanh hiệu quả",
    note: "Tri ân chú bộ đội Cụ Hồ, rèn luyện tác phong kỉ luật nghiêm túc."
  },
  16: {
    shdc: "SHDC: Xây dựng quỹ nhân ái",
    gdcd: "HĐGDCĐ: Xây dựng kế hoạch kinh doanh",
    shl: "SHL: Kế hoạch kinh doanh của lớp",
    note: "Xây dựng quỹ ủng hộ bạn nghèo vượt khó đến trường."
  },
  17: {
    shdc: "SHDC: Gia đình yêu thương",
    gdcd: "HĐGDCĐ: Trách nhiệm của em trong gia đình",
    shl: "SHL: Những việc làm gây lãng phí trong cuộc sống hằng ngày",
    note: "Tránh lãng phí điện nước, thực phẩm, biết quan tâm ông bà cha mẹ."
  },
  18: {
    shdc: "SHDC: Lòng biết ơn",
    gdcd: "HĐGDCĐ: Biết ơn người thân trong gia đình",
    shl: "SHL: Thể hiện lòng biết ơn với người thân",
    note: "Sơ kết học kì 1, bày tỏ lòng hiếu thảo và biết ơn cha mẹ."
  }
};

// 8. GIÁO DỤC THỂ CHẤT 5 (2 tiết / tuần)
export const GDTC5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 1)", note: "Tập hợp hàng dọc, dóng hàng, điểm số; quay phải, quay trái." },
    { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 2)", note: "Tập hợp hàng ngang, dóng hàng, dàn hàng và dồn hàng." }
  ],
  2: [
    { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 3)", note: "Biến đổi đội hình từ một hàng dọc thành hai, ba hàng dọc và ngược lại." },
    { title: "Bài 1: Bài tập phối hợp đội hình đội ngũ (Tiết 4)", note: "Đi đều, vòng phải, vòng trái và đứng lại." }
  ],
  3: [
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 1)", note: "Động tác tiến, lùi, sang phải, sang trái đều bước." },
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 2)", note: "Biến đổi đội hình từ một hàng ngang thành nhiều hàng ngang." }
  ],
  4: [
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 3)", note: "Phối hợp đi đều kết hợp đếm nhịp và vỗ tay nhịp nhàng." },
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 4)", note: "Trò chơi vận động: 'Kết bạn' và 'Chạy tiếp sức'." }
  ],
  5: [
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 5)", note: "Kiểm tra kĩ năng đội hình đội ngũ theo tổ." },
    { title: "Bài 2: Bài tập phối hợp biến đổi đội hình (Tiết 6)", note: "Tổng kết chuyên đề Đội hình đội ngũ." }
  ],
  6: [
    { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 1)", note: "Đi đều vòng bên phải, đi đều vòng bên trái theo hiệu lệnh." },
    { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 2)", note: "Phối hợp đi đều đổi chân khi sai nhịp." }
  ],
  7: [
    { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 3)", note: "Luyện tập đi đều chữ U, chữ S trong sân trường." },
    { title: "Bài 3: Bài tập phối hợp đi đều vòng các hướng (Tiết 4)", note: "Trò chơi: 'Mèo đuổi chuột' phát triển sức bền." }
  ],
  8: [
    { title: "Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 1)", note: "Bài thể dục phát triển chung với dụng cụ gậy ngắn." },
    { title: "Bài 1: Động tác vươn thở, động tác tay, động tác chân với gậy (Tiết 2)", note: "Hoàn thiện 3 động tác vươn thở, tay, chân với gậy." }
  ],
  9: [
    { title: "Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 1)", note: "Kĩ thuật phối hợp gậy với động tác lườn và vặn mình." },
    { title: "Bài 2: Động tác bụng, động tác vặn mình, động tác toàn thân với gậy (Tiết 2)", note: "Động tác bụng gập sâu, toàn thân vươn cao với gậy." }
  ],
  10: [
    { title: "Bài 2: Động tác bụng, động tác vặn mình, toàn thân với gậy (Tiết 3)", note: "Ôn tập 6 động tác đầu bài thể dục phát triển chung với gậy." },
    { title: "Bài 3: Động tác nhảy và động tác điều hòa với gậy (Tiết 1)", note: "Kĩ thuật bật nhảy nhịp nhàng và hít thở điều hòa." }
  ],
  11: [
    { title: "Bài 3: Động tác nhảy và động tác điều hòa với gậy (Tiết 2)", note: "Hoàn thiện bài thể dục phát triển chung với gậy liên hoàn 8 động tác." },
    { title: "Hoàn thiện bài thể dục phát triển chung với gậy (Tiết 1)", note: "Luyện tập đồng đều theo tổ trên nền nhạc." }
  ],
  12: [
    { title: "Hoàn thiện bài thể dục phát triển chung với gậy (Tiết 2)", note: "Tổ chức biểu diễn thi đua bài thể dục giữa các tổ." },
    { title: "Ôn bài thể dục phát triển chung với gậy", note: "Đánh giá kĩ năng thực hiện bài thể dục dụng cụ." }
  ],
  13: [
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 1)", note: "Tư thế chuẩn bị và kĩ thuật lăn nghiêng sang phải, sang trái." },
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 2)", note: "Kĩ thuật lăn ngửa ôm gối trên đệm thể dục an toàn." }
  ],
  14: [
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 3)", note: "Phối hợp chạy đà nhẹ và lăn nghiêng tiếp đất." },
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 4)", note: "Trò chơi vận động rèn sự dẻo dai và khéo léo." }
  ],
  15: [
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 5)", note: "Luyện tập lăn tròn liên hoàn trên thảm an toàn." },
    { title: "Bài 1: Bài tập rèn luyện kĩ năng lăn (Tiết 6)", note: "Kiểm tra đánh giá kĩ năng lăn cơ bản." }
  ],
  16: [
    { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 1)", note: "Tư thế ngồi xổm chống tay, giấu đầu và cuộn tròn người." },
    { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 2)", note: "Thực hành lộn xuôi trên đệm mềm dưới sự bảo hiểm của giáo viên." }
  ],
  17: [
    { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 3)", note: "Hoàn thiện kĩ thuật lộn xuôi đứng dậy thăng bằng." },
    { title: "Bài 2: Bài tập rèn luyện kĩ năng lộn xuôi (Tiết 4)", note: "Phối hợp chạy chậm - nhảy bật - lộn xuôi khéo léo." }
  ],
  18: [
    { title: "Ôn tập và đánh giá học kì 1 (Tiết 35)", note: "Ôn tập tổng hợp các kĩ năng vận động cơ bản kì 1." },
    { title: "Sơ kết đánh giá học kì 1 (Tiết 36)", note: "Đánh giá xếp loại thể lực học sinh lớp 5 học kì 1." }
  ]
};

// 9. TĂNG CƯỜNG TIẾNG VIỆT & TĂNG CƯỜNG TOÁN KHỐI 5 THEO TUẦN (TCTV & TCT)
export const TCTV5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "TCTV (Tiết 1): Luyện tập về từ đồng nghĩa và phân biệt sắc thái từ đồng nghĩa", note: "Rèn cách đặt câu phân biệt từ ngữ trang trọng và thân mật." },
    { title: "TCTV (Tiết 2): Rèn kĩ năng viết đoạn văn mở bài cho bài văn kể chuyện sáng tạo", note: "Luyện cách mở bài gián tiếp cuốn hút người đọc." }
  ],
  2: [
    { title: "TCTV (Tiết 1): Luyện tập về đại từ xưng hô trong giao tiếp", note: "Cách dùng đại từ thể hiện sự lễ phép và tôn trọng người nghe." },
    { title: "TCTV (Tiết 2): Rèn kĩ năng lập dàn ý và xây dựng đoạn kết bài sáng tạo", note: "Tạo kết thúc bất ngờ, để lại ấn tượng sâu sắc." }
  ],
  3: [
    { title: "TCTV (Tiết 1): Rèn kĩ năng dùng đại từ thay thế để tránh lặp từ trong đoạn văn", note: "Luyện tập thay thế từ ngữ trong văn bản ngắn." },
    { title: "TCTV (Tiết 2): Thực hành viết bài văn kể chuyện sáng tạo hoàn chỉnh", note: "Chữa lỗi liên kết câu và dùng dấu câu chính xác." }
  ],
  4: [
    { title: "TCTV (Tiết 1): Luyện tập lập văn bản báo cáo công việc", note: "Rèn thể thức, bố cục và ngôn ngữ hành chính chuẩn mực." },
    { title: "TCTV (Tiết 2): Rèn đọc diễn cảm văn bản khoa học viễn tưởng 'Hành tinh kì lạ'", note: "Nhấn giọng các thuật ngữ và hình ảnh tưởng tượng kì thú." }
  ],
  5: [
    { title: "TCTV (Tiết 1): Mở rộng vốn từ về Tổ quốc và rèn viết câu có từ đồng nghĩa", note: "Đặt câu ca ngợi vẻ đẹp giang sơn gấm vóc Việt Nam." },
    { title: "TCTV (Tiết 2): Rèn kĩ năng quan sát và ghi chép chi tiết miêu tả cảnh sông nước", note: "Lựa chọn các hình ảnh âm thanh, màu sắc tiêu biểu." }
  ]
};

export const TCT5_LESSONS: Record<number, { title: string; note: string }[]> = {
  1: [
    { title: "TCT (Tiết 1): Luyện tập chuyển đổi phân số và phân số thập phân", note: "Rèn kĩ thuật đưa phân số về mẫu số 10, 100, 1000." },
    { title: "TCT (Tiết 2): Thực hành giải bài toán về tìm một thành phần chưa biết của phân số", note: "Vận dụng tính chất cơ bản của phân số để tìm x." }
  ],
  2: [
    { title: "TCT (Tiết 1): Luyện tập cộng, trừ hỗn số và đổi hỗn số ra phân số", note: "Rèn kĩ năng tính toán cẩn thận và rút gọn kết quả." },
    { title: "TCT (Tiết 2): Thực hành giải toán có lời văn liên quan đến tỉ lệ thuận và tỉ lệ nghịch", note: "Phân tích mối tương quan và chọn phương pháp rút về đơn vị." }
  ],
  3: [
    { title: "TCT (Tiết 1): Luyện tập bảng đơn vị đo độ dài và đơn vị đo khối lượng", note: "Viết số đo dưới dạng số thập phân và phân số." },
    { title: "TCT (Tiết 2): Thực hành giải toán về đại lượng diện tích: đề-ca-mét vuông, héc-tô-mét vuông", note: "Chuyển đổi và so sánh diện tích đất đai thực tế." }
  ],
  4: [
    { title: "TCT (Tiết 1): Luyện tập đơn vị đo diện tích héc-ta (ha) và ứng dụng thực tiễn", note: "Tính diện tích cánh đồng, khu rừng, trường học theo héc-ta." },
    { title: "TCT (Tiết 2): Thực hành giải toán tổng hợp về các đơn vị đo đại lượng", note: "Giải bài toán có lời văn 2-3 bước tính." }
  ],
  5: [
    { title: "TCT (Tiết 1): Luyện tập đọc, viết và phân tích cấu tạo số thập phân", note: "Xác định giá trị theo hàng của phần nguyên và phần thập phân." },
    { title: "TCT (Tiết 2): Thực hành so sánh các số thập phân và xếp thứ tự dãy số", note: "Quy tắc so sánh từ hàng cao nhất đến hàng thấp nhất." }
  ]
};

