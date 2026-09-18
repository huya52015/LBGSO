import React, { useState } from "react";
import { SchoolInfo } from "../types";
import { getRequiredQuizSubjects, getLoigiaihaySubjectUrl, getSubjectQuiz, SubjectQuiz } from "../data/loigiaihayQuizzes";
import { exportSingleQuizDocx, exportAllWeeklyQuizzesDocx } from "../utils/quizDocxExporter";
import { 
  FileCheck2, 
  Download, 
  ExternalLink, 
  Sparkles, 
  BookOpen, 
  CheckCircle, 
  HelpCircle,
  Clock,
  Printer,
  X,
  Layers,
  ChevronRight
} from "lucide-react";

interface WeekendQuizBarProps {
  schoolInfo: SchoolInfo;
  onOpenQuizModal: (subject?: string) => void;
  onNotifyExport: (type: string, title: string, exportFn: () => Promise<any>) => void;
}

export const WeekendQuizBar: React.FC<WeekendQuizBarProps> = ({
  schoolInfo,
  onOpenQuizModal,
  onNotifyExport,
}) => {
  const subjects = getRequiredQuizSubjects(schoolInfo.grade);
  const [downloadingSubject, setDownloadingSubject] = useState<string | null>(null);

  const handleDownloadSingle = (subject: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const quiz = getSubjectQuiz(schoolInfo.grade, subject, schoolInfo.week);
    onNotifyExport(
      `quiz-${subject}`,
      `Phiếu Trắc Nghiệm Cuối Tuần ${schoolInfo.week} - Môn ${subject}`,
      () => exportSingleQuizDocx(schoolInfo, quiz)
    );
  };

  const handleDownloadAll = () => {
    onNotifyExport(
      "quiz-all-subjects",
      `Trọn Bộ Phiếu Trắc Nghiệm Cuối Tuần ${schoolInfo.week} (Tất Cả Các Môn Lớp ${schoolInfo.className})`,
      () => exportAllWeeklyQuizzesDocx(schoolInfo)
    );
  };

  return (
    <div className="bg-white border-2 border-black p-3.5 sm:p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] mb-6 transition-all">
      {/* Top Banner Row */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-b-2 border-stone-200 pb-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-black text-white shrink-0 shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
            <FileCheck2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-serif font-black text-sm text-black uppercase tracking-wider">
                PHIẾU BÀI TẬP TRẮC NGHIỆM CUỐI TUẦN
              </span>
              <span className="text-[10px] bg-emerald-100 text-emerald-950 font-bold px-2 py-0.5 border border-emerald-400 font-mono">
                Tuần {schoolInfo.week} ({schoolInfo.startDate} - {schoolInfo.endDate})
              </span>
              <span className="text-[10px] bg-stone-100 text-stone-900 font-bold px-2 py-0.5 border border-stone-300 font-mono">
                Khối {schoolInfo.grade} • Lớp {schoolInfo.className}
              </span>
            </div>
            <p className="text-[11px] text-stone-600 font-serif mt-0.5">
              Đồng bộ theo Lịch báo giảng & KHBD Tuần {schoolInfo.week} • Tải trực tiếp từ nguồn tham khảo{" "}
              <a
                href="https://loigiaihay.com"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-800 hover:underline font-bold inline-flex items-center gap-0.5"
              >
                Loigiaihay.com <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
              </a>
            </p>
          </div>
        </div>

        {/* Global Batch Download Button */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <button
            onClick={() => onOpenQuizModal()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
            title="Xem chi tiết các câu hỏi trắc nghiệm và lời giải"
          >
            <BookOpen className="w-3.5 h-3.5 text-stone-700" />
            <span>Xem & Làm Trực Tuyến</span>
          </button>

          <button
            onClick={handleDownloadAll}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-colors cursor-pointer"
            title="Tải 1 tệp Word gồm phiếu trắc nghiệm tất cả các môn của tuần này"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tải Trọn Bộ Word ({subjects.length} Môn)</span>
          </button>
        </div>
      </div>

      {/* Subject Chips & Quick Actions */}
      <div className="pt-3">
        <div className="text-[10px] uppercase font-bold text-stone-500 tracking-wider mb-2 flex items-center justify-between">
          <span>
            {schoolInfo.grade <= 3
              ? "CÁC MÔN HỌC BẮT BUỘC KHỐI 1, 2, 3 (Toán, Tiếng Việt, Đạo đức, HĐTN, TNXH):"
              : "CÁC MÔN HỌC BẮT BUỘC KHỐI 4, 5 (Toán, Tiếng Việt, Đạo đức, HĐTN, Khoa học, Lịch sử & Địa lí):"}
          </span>
          <span className="text-stone-400 font-normal">Nhấn vào môn để xem câu hỏi hoặc tải Word</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {subjects.map((subject) => {
            const loigiaihayUrl = getLoigiaihaySubjectUrl(schoolInfo.grade, subject, schoolInfo.week);
            return (
              <div
                key={subject}
                onClick={() => onOpenQuizModal(subject)}
                className="group relative bg-stone-50 hover:bg-amber-50/60 border border-black p-2.5 flex flex-col justify-between transition-all cursor-pointer shadow-[1px_1px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="font-serif font-bold text-xs text-black group-hover:text-amber-950 truncate">
                      {subject}
                    </span>
                    <a
                      href={loigiaihayUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(e) => e.stopPropagation()}
                      className="text-stone-400 hover:text-blue-700 p-0.5"
                      title={`Mở trang Loigiaihay.com môn ${subject}`}
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono">
                    Tuần {schoolInfo.week} • Lớp {schoolInfo.grade}
                  </div>
                </div>

                <div className="mt-2.5 pt-2 border-t border-stone-200 flex items-center justify-between gap-1">
                  <a
                    href={loigiaihayUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-0.5 px-1.5 py-0.5 bg-stone-100 hover:bg-stone-200 text-blue-900 text-[9px] font-bold border border-stone-400 cursor-pointer shadow-[1px_1px_0px_rgba(0,0,0,0.1)]"
                    title={`Mở bài tập trên Loigiaihay.com môn ${subject}`}
                  >
                    <span>Loigiaihay</span>
                    <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                  </a>
                  <button
                    onClick={(e) => handleDownloadSingle(subject, e)}
                    className="flex items-center gap-0.5 px-1.5 py-0.5 bg-black hover:bg-stone-800 text-white text-[9px] font-bold uppercase border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
                    title={`Tải phiếu bài tập Word A4 môn ${subject}`}
                  >
                    <Download className="w-2.5 h-2.5 text-emerald-300" />
                    <span>Word</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
