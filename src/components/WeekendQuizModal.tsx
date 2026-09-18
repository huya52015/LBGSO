import React, { useState, useEffect } from "react";
import { SchoolInfo } from "../types";
import { 
  getRequiredQuizSubjects, 
  getSubjectQuiz, 
  getLoigiaihaySubjectUrl, 
  SubjectQuiz, 
  QuizQuestion 
} from "../data/loigiaihayQuizzes";
import { exportSingleQuizDocx, exportAllWeeklyQuizzesDocx } from "../utils/quizDocxExporter";
import {
  X,
  FileDown,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Download,
  RotateCcw,
  Sparkles,
  Award,
  Calendar,
  Layers,
  Clock
} from "lucide-react";

interface WeekendQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolInfo: SchoolInfo;
  initialSubject?: string;
  onNotifyExport: (type: string, title: string, exportFn: () => Promise<any>) => void;
}

export const WeekendQuizModal: React.FC<WeekendQuizModalProps> = ({
  isOpen,
  onClose,
  schoolInfo,
  initialSubject,
  onNotifyExport,
}) => {
  const subjects = getRequiredQuizSubjects(schoolInfo.grade);
  const [selectedSubject, setSelectedSubject] = useState<string>(
    initialSubject && subjects.includes(initialSubject) ? initialSubject : subjects[0] || "Toán"
  );

  // Synchronize when initialSubject or grade changes
  useEffect(() => {
    if (initialSubject && subjects.includes(initialSubject)) {
      setSelectedSubject(initialSubject);
    } else if (!subjects.includes(selectedSubject)) {
      setSelectedSubject(subjects[0] || "Toán");
    }
  }, [initialSubject, schoolInfo.grade]);

  // Selected Answers State: questionId -> 'A' | 'B' | 'C' | 'D'
  const [userAnswers, setUserAnswers] = useState<Record<string, "A" | "B" | "C" | "D">>({});
  const [showResults, setShowResults] = useState(false);

  if (!isOpen) return null;

  const currentQuiz: SubjectQuiz = getSubjectQuiz(
    schoolInfo.grade,
    selectedSubject,
    schoolInfo.week
  );

  const handleSelectOption = (qId: string, key: "A" | "B" | "C" | "D") => {
    if (showResults) return; // Prevent changing after submission
    setUserAnswers((prev) => ({
      ...prev,
      [qId]: key,
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    currentQuiz.questions.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: currentQuiz.questions.length,
      points: Math.round((correct / currentQuiz.questions.length) * 10 * 10) / 10,
    };
  };

  const scoreResult = calculateScore();

  const handleExportCurrent = () => {
    onNotifyExport(
      `quiz-${selectedSubject}`,
      `Phiếu Trắc Nghiệm Cuối Tuần ${schoolInfo.week} - Môn ${selectedSubject}`,
      () => exportSingleQuizDocx(schoolInfo, currentQuiz)
    );
  };

  const handleExportAll = () => {
    onNotifyExport(
      "quiz-all",
      `Trọn Bộ Phiếu Trắc Nghiệm Cuối Tuần ${schoolInfo.week} (${subjects.length} Môn)`,
      () => exportAllWeeklyQuizzesDocx(schoolInfo)
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-150">
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden font-sans">
        {/* Header */}
        <div className="px-5 py-3.5 bg-black text-white flex items-center justify-between border-b-2 border-black shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-white text-black border border-white">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-serif font-black text-sm text-white uppercase tracking-wider">
                  Phiếu Bài Tập Trắc Nghiệm Cuối Tuần {schoolInfo.week}
                </h3>
                <span className="text-[10px] bg-emerald-500 text-black font-bold px-1.5 py-0.2 font-mono">
                  {schoolInfo.startDate} - {schoolInfo.endDate}
                </span>
                <span className="text-[10px] bg-stone-700 text-stone-200 px-1.5 py-0.2 font-mono">
                  Lớp {schoolInfo.className} (Khối {schoolInfo.grade})
                </span>
              </div>
              <p className="text-[11px] text-stone-300 font-serif">
                Đồng bộ theo Lịch báo giảng & Kế hoạch bài dạy • Nguồn tham khảo:{" "}
                <a
                  href="https://loigiaihay.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-emerald-300 hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  Loigiaihay.com <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCurrent}
              className="hidden sm:flex items-center gap-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold uppercase border border-white cursor-pointer"
              title="Tải phiếu Word A4 môn đang xem"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Word ({selectedSubject})</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Subject Tab Bar */}
        <div className="bg-stone-100 border-b border-black px-4 py-2 flex items-center justify-between gap-2 overflow-x-auto shrink-0">
          <div className="flex items-center gap-1.5">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSelectedSubject(s);
                  setUserAnswers({});
                  setShowResults(false);
                }}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border border-black cursor-pointer whitespace-nowrap ${
                  selectedSubject === s
                    ? "bg-black text-white shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                    : "bg-white text-stone-800 hover:bg-stone-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="shrink-0 flex items-center gap-1.5">
            <a
              href={currentQuiz.loigiaihayUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-300 transition-colors"
              title="Mở chuyên mục phiếu bài tập trên Loigiaihay.com"
            >
              <ExternalLink className="w-3 h-3 text-blue-700" />
              <span className="hidden sm:inline">Trang Loigiaihay</span>
            </a>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 bg-[#fdfdfc]">
          {/* Worksheet Mock Heading */}
          <div className="border border-black p-4 bg-white shadow-[2px_2px_0px_rgba(0,0,0,1)] font-serif">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-stone-300 pb-3">
              <div>
                <div className="text-xs font-bold uppercase text-black">
                  {schoolInfo.departmentName} - {schoolInfo.schoolName}
                </div>
                <div className="text-xs text-stone-700 mt-0.5">
                  Lớp: <span className="font-bold">{schoolInfo.className}</span> • Giáo viên:{" "}
                  <span className="font-bold">{schoolInfo.teacherName}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-stone-600 font-mono">
                  Tuần {schoolInfo.week} • Thứ 2 ngày {schoolInfo.startDate} đến Thứ 6 ngày {schoolInfo.endDate}
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  Thời gian: {currentQuiz.timeAllowedMinutes} phút • {currentQuiz.questions.length} câu trắc nghiệm
                </div>
              </div>
            </div>

            <div className="text-center my-3">
              <h4 className="font-serif font-black text-base sm:text-lg text-black uppercase tracking-wide">
                {currentQuiz.title}
              </h4>
              <p className="text-xs text-stone-600 italic mt-0.5">
                {currentQuiz.subtitle}
              </p>
            </div>

            {showResults && (
              <div className="p-3 bg-emerald-50 border-2 border-emerald-600 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-emerald-700" />
                  <div>
                    <div className="font-bold text-sm text-emerald-950">
                      KẾT QUẢ ĐẠT ĐƯỢC: {scoreResult.points} / 10 ĐIỂM
                    </div>
                    <div className="text-xs text-emerald-800">
                      Đúng {scoreResult.correct}/{scoreResult.total} câu hỏi trắc nghiệm
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1 px-3 py-1 bg-white hover:bg-stone-100 text-black text-xs font-bold border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Làm Lại</span>
                </button>
              </div>
            )}

            {/* Questions List */}
            <div className="space-y-5 mt-4">
              {currentQuiz.questions.map((q) => {
                const selected = userAnswers[q.id];
                const isCorrect = selected === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-3.5 border transition-all ${
                      showResults
                        ? isCorrect
                          ? "border-emerald-500 bg-emerald-50/40"
                          : "border-red-500 bg-red-50/40"
                        : "border-stone-300 bg-stone-50/60"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="font-bold text-sm text-black mb-2 leading-relaxed">
                        <span className="text-stone-900 font-serif">Câu {q.questionNumber}: </span>
                        {q.question}
                      </div>
                      {showResults && (
                        <div className="shrink-0">
                          {isCorrect ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 border border-emerald-300 font-mono">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Chính xác
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-red-800 bg-red-100 px-2 py-0.5 border border-red-300 font-mono">
                              <AlertCircle className="w-3.5 h-3.5 text-red-600" /> Sai (Đáp án: {q.correctAnswer})
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {q.options.map((opt) => {
                        const isThisSelected = selected === opt.key;
                        const isThisCorrect = opt.key === q.correctAnswer;

                        let optClasses = "border border-stone-300 bg-white text-stone-900 hover:bg-stone-100";
                        if (showResults) {
                          if (isThisCorrect) {
                            optClasses = "border-2 border-emerald-600 bg-emerald-100 text-emerald-950 font-bold";
                          } else if (isThisSelected && !isThisCorrect) {
                            optClasses = "border-2 border-red-500 bg-red-100 text-red-950 line-through";
                          } else {
                            optClasses = "border border-stone-200 bg-white text-stone-500 opacity-70";
                          }
                        } else if (isThisSelected) {
                          optClasses = "border-2 border-black bg-stone-900 text-white font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]";
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => handleSelectOption(q.id, opt.key)}
                            disabled={showResults}
                            className={`p-2.5 text-left text-xs rounded-none transition-all flex items-start gap-2 cursor-pointer ${optClasses}`}
                          >
                            <span className="font-mono font-bold shrink-0">{opt.key}.</span>
                            <span className="leading-snug">{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {showResults && (
                      <div className="mt-3 p-2.5 bg-white border border-stone-300 text-xs text-stone-700 leading-relaxed font-serif">
                        <span className="font-bold text-emerald-900">
                          Lời giải chi tiết (Loigiaihay.com):{" "}
                        </span>
                        {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-5 py-3.5 bg-stone-100 border-t-2 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            {!showResults ? (
              <button
                type="button"
                onClick={() => setShowResults(true)}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Nộp Bài & Xem Đáp Án Chi Tiết</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handleResetQuiz}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-stone-200 text-black text-xs font-bold uppercase tracking-wider border border-black shadow-[1px_1px_0px_rgba(0,0,0,1)] cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Làm Lại Lần Nữa</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* Download single subject word */}
            <button
              type="button"
              onClick={handleExportCurrent}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-white hover:bg-stone-100 text-black text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-colors cursor-pointer"
              title={`Tải file Word A4 môn ${selectedSubject}`}
            >
              <Download className="w-4 h-4 text-emerald-700" />
              <span>Tải Word ({selectedSubject})</span>
            </button>

            {/* Download all subjects word */}
            <button
              type="button"
              onClick={handleExportAll}
              className="flex items-center gap-1.5 px-4 py-2 bg-black hover:bg-stone-800 text-white text-xs font-bold uppercase tracking-wider border border-black shadow-[2px_2px_0px_rgba(0,0,0,0.3)] transition-colors cursor-pointer"
              title="Tải 1 file Word trọn gói tất cả các môn của tuần này"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Tải Trọn Bộ Word ({subjects.length} Môn)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
