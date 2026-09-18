import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  PageBreak,
  convertInchesToTwip,
} from "docx";
import { SchoolInfo } from "../types";
import { SubjectQuiz, getSubjectQuiz, getRequiredQuizSubjects } from "../data/loigiaihayQuizzes";
import { saveDocxFile } from "./docxExporter";

/**
 * Converts pt to half-points for docx (e.g. 13pt -> 26)
 */
function toHalfPoints(pt: number): number {
  return pt * 2;
}

/**
 * Creates header table for student worksheet (Trường, Lớp, Họ tên, Điểm số, Lời phê)
 */
function createWorksheetHeaderTable(
  schoolInfo: SchoolInfo,
  quiz: SubjectQuiz,
  fontFamily: string,
  fontSizePt: number
): Table {
  const fSz = toHalfPoints(fontSizePt);
  const smSz = toHalfPoints(Math.max(10, fontSizePt - 2));

  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
      bottom: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
      left: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
      right: { style: BorderStyle.SINGLE, size: 6, color: "000000" },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: "888888" },
      insideVertical: { style: BorderStyle.SINGLE, size: 4, color: "888888" },
    },
    rows: [
      // Row 1: Student info and School
      new TableRow({
        children: [
          new TableCell({
            width: { size: 65, type: WidthType.PERCENTAGE },
            margins: { top: 100, bottom: 100, left: 150, right: 150 },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${schoolInfo.departmentName.toUpperCase()} - ${schoolInfo.schoolName.toUpperCase()}`,
                    bold: true,
                    size: smSz,
                    font: fontFamily,
                  }),
                ],
              }),
              new Paragraph({
                spacing: { before: 60 },
                children: [
                  new TextRun({ text: "Họ và tên học sinh: ", bold: true, size: fSz, font: fontFamily }),
                  new TextRun({ text: "........................................................................", size: fSz, font: fontFamily }),
                ],
              }),
              new Paragraph({
                spacing: { before: 60 },
                children: [
                  new TextRun({ text: "Lớp: ", bold: true, size: fSz, font: fontFamily }),
                  new TextRun({ text: `${schoolInfo.className}    `, bold: true, size: fSz, font: fontFamily }),
                  new TextRun({ text: "Giáo viên: ", bold: true, size: fSz, font: fontFamily }),
                  new TextRun({ text: `${schoolInfo.teacherName}`, size: fSz, font: fontFamily }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 35, type: WidthType.PERCENTAGE },
            margins: { top: 100, bottom: 100, left: 120, right: 120 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: "ĐIỂM SỐ", bold: true, size: fSz, font: fontFamily }),
                ],
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 80, after: 80 },
                children: [
                  new TextRun({ text: "......... / 10", bold: true, size: toHalfPoints(fontSizePt + 3), font: fontFamily }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: "Lời phê của thầy cô giáo:", italics: true, size: smSz, font: fontFamily }),
                ],
              }),
              new Paragraph({
                children: [
                  new TextRun({ text: "................................................", size: smSz, font: fontFamily }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

/**
 * Builds standard Word document for a single subject quiz worksheet
 */
export async function exportSingleQuizDocx(
  schoolInfo: SchoolInfo,
  quiz: SubjectQuiz
): Promise<{ blob: Blob; filename: string; url: string }> {
  const fontFamily = schoolInfo.fontFamily || "Times New Roman";
  const fontSizePt = schoolInfo.fontSize || 13;
  const fSz = toHalfPoints(fontSizePt);
  const titleSz = toHalfPoints(fontSizePt + 4);
  const subSz = toHalfPoints(fontSizePt + 1);
  const smSz = toHalfPoints(Math.max(10, fontSizePt - 2));

  const docChildren: any[] = [];

  // 1. Worksheet Header Table
  docChildren.push(createWorksheetHeaderTable(schoolInfo, quiz, fontFamily, fontSizePt));

  // 2. Title Section
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 240, after: 60 },
      children: [
        new TextRun({
          text: `PHIẾU BÀI TẬP TRẮC NGHIỆM CUỐI TUẦN ${quiz.week}`.toUpperCase(),
          bold: true,
          size: titleSz,
          font: fontFamily,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: [
        new TextRun({
          text: `MÔN: ${quiz.subject.toUpperCase()} - KHỐI ${quiz.grade} (LỚP ${schoolInfo.className})`,
          bold: true,
          size: subSz,
          font: fontFamily,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: `Thực hiện: Từ Thứ Hai ngày ${schoolInfo.startDate} đến Thứ Sáu ngày ${schoolInfo.endDate}`,
          italics: true,
          size: smSz,
          font: fontFamily,
        }),
        new TextRun({
          text: `  •  Thời gian làm bài: ${quiz.timeAllowedMinutes} phút`,
          bold: true,
          size: smSz,
          font: fontFamily,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: `Chủ đề bài học: ${quiz.subtitle}`,
          italics: true,
          size: smSz,
          font: fontFamily,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: `(Nguồn tài liệu tham khảo chính thức: ${quiz.loigiaihayUrl} - Sách GDPT 2018)`,
          size: smSz,
          color: "555555",
          font: fontFamily,
        }),
      ],
    })
  );

  // 3. Section I: Questions
  docChildren.push(
    new Paragraph({
      spacing: { before: 120, after: 120 },
      children: [
        new TextRun({
          text: "I. PHẦN TRẮC NGHIỆM KHÁCH QUAN",
          bold: true,
          size: subSz,
          font: fontFamily,
        }),
      ],
    }),
    new Paragraph({
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: "Khoanh tròn vào chữ cái đặt trước câu trả lời đúng nhất (A, B, C hoặc D):",
          italics: true,
          size: fSz,
          font: fontFamily,
        }),
      ],
    })
  );

  // Render each question
  quiz.questions.forEach((q) => {
    docChildren.push(
      new Paragraph({
        spacing: { before: 140, after: 80 },
        children: [
          new TextRun({
            text: `Câu ${q.questionNumber}: `,
            bold: true,
            size: fSz,
            font: fontFamily,
          }),
          new TextRun({
            text: q.question,
            size: fSz,
            font: fontFamily,
          }),
        ],
      })
    );

    // Options grid / lines
    q.options.forEach((opt) => {
      docChildren.push(
        new Paragraph({
          indent: { left: convertInchesToTwip(0.3) },
          spacing: { before: 40, after: 40 },
          children: [
            new TextRun({
              text: `${opt.key}. `,
              bold: true,
              size: fSz,
              font: fontFamily,
            }),
            new TextRun({
              text: opt.text,
              size: fSz,
              font: fontFamily,
            }),
          ],
        })
      );
    });
  });

  // 4. Section II: Answers & Detailed Explanations
  docChildren.push(
    new Paragraph({
      spacing: { before: 300, after: 120 },
      children: [
        new TextRun({
          text: "II. ĐÁP ÁN VÀ HƯỚNG DẪN GIẢI CHI TIẾT (CHUẨN LOIGIAIHAY.COM)",
          bold: true,
          size: subSz,
          font: fontFamily,
        }),
      ],
    })
  );

  // Quick Answer Summary Table
  const answerHeaderCells = quiz.questions.map(
    (q) =>
      new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: `Câu ${q.questionNumber}`, bold: true, size: smSz, font: fontFamily })],
          }),
        ],
      })
  );

  const answerValueCells = quiz.questions.map(
    (q) =>
      new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: q.correctAnswer, bold: true, size: fSz, color: "006600", font: fontFamily })],
          }),
        ],
      })
  );

  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({ children: answerHeaderCells }),
        new TableRow({ children: answerValueCells }),
      ],
    })
  );

  // Detailed Explanations
  docChildren.push(
    new Paragraph({
      spacing: { before: 180, after: 80 },
      children: [
        new TextRun({
          text: "Giải thích chi tiết từng câu:",
          bold: true,
          italics: true,
          size: fSz,
          font: fontFamily,
        }),
      ],
    })
  );

  quiz.questions.forEach((q) => {
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({
            text: `• Câu ${q.questionNumber} (Chọn ${q.correctAnswer}): `,
            bold: true,
            size: smSz,
            font: fontFamily,
          }),
          new TextRun({
            text: q.explanation,
            size: smSz,
            font: fontFamily,
          }),
        ],
      })
    );
  });

  // Footer note
  docChildren.push(
    new Paragraph({
      spacing: { before: 240 },
      alignment: AlignmentType.RIGHT,
      children: [
        new TextRun({
          text: `Tân Thạnh, ngày ${schoolInfo.endDate} - Giáo viên bộ môn ký duyệt: ${schoolInfo.teacherName}`,
          italics: true,
          size: smSz,
          font: fontFamily,
        }),
      ],
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.7),
              right: convertInchesToTwip(0.6),
              bottom: convertInchesToTwip(0.7),
              left: convertInchesToTwip(0.75),
            },
          },
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const cleanSubject = quiz.subject.replace(/[^a-zA-Z0-9\u00C0-\u1EF9]/g, "_");
  const filename = `Phieu_Trac_Nghiem_Tuan_${quiz.week}_Lop_${schoolInfo.className}_${cleanSubject}.docx`;
  return saveDocxFile(blob, filename);
}

/**
 * Builds a single combined Word document with ALL weekly quiz worksheets for the selected grade:
 * - Grade 1-3: Toán, Tiếng Việt, Đạo đức, HĐTN, TNXH
 * - Grade 4-5: Toán, Tiếng Việt, Đạo đức, HĐTN, Khoa học, Lịch sử và Địa lí
 */
export async function exportAllWeeklyQuizzesDocx(
  schoolInfo: SchoolInfo
): Promise<{ blob: Blob; filename: string; url: string }> {
  const fontFamily = schoolInfo.fontFamily || "Times New Roman";
  const fontSizePt = schoolInfo.fontSize || 13;
  const subjects = getRequiredQuizSubjects(schoolInfo.grade);

  const sections: any[] = [];

  for (let idx = 0; idx < subjects.length; idx++) {
    const subject = subjects[idx];
    const quiz = getSubjectQuiz(schoolInfo.grade, subject, schoolInfo.week);
    const docChildren: any[] = [];

    // Header Table
    docChildren.push(createWorksheetHeaderTable(schoolInfo, quiz, fontFamily, fontSizePt));

    // Title
    docChildren.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 240, after: 60 },
        children: [
          new TextRun({
            text: `PHIẾU BÀI TẬP TRẮC NGHIỆM CUỐI TUẦN ${quiz.week}`.toUpperCase(),
            bold: true,
            size: toHalfPoints(fontSizePt + 4),
            font: fontFamily,
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: `MÔN: ${quiz.subject.toUpperCase()} - KHỐI ${quiz.grade} (LỚP ${schoolInfo.className})`,
            bold: true,
            size: toHalfPoints(fontSizePt + 1),
            font: fontFamily,
          }),
        ],
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 140 },
        children: [
          new TextRun({
            text: `Thực hiện: Từ ngày ${schoolInfo.startDate} đến ngày ${schoolInfo.endDate}  •  Thời gian: ${quiz.timeAllowedMinutes} phút`,
            italics: true,
            size: toHalfPoints(Math.max(10, fontSizePt - 2)),
            font: fontFamily,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 140 },
        children: [
          new TextRun({
            text: `Nội dung ôn tập trọng tâm: ${quiz.subtitle} (Tham khảo: ${quiz.loigiaihayUrl})`,
            italics: true,
            size: toHalfPoints(Math.max(10, fontSizePt - 2)),
            font: fontFamily,
          }),
        ],
      })
    );

    // Section I
    docChildren.push(
      new Paragraph({
        spacing: { before: 120, after: 80 },
        children: [
          new TextRun({
            text: "I. PHẦN TRẮC NGHIỆM KHÁCH QUAN",
            bold: true,
            size: toHalfPoints(fontSizePt + 1),
            font: fontFamily,
          }),
        ],
      }),
      new Paragraph({
        spacing: { after: 140 },
        children: [
          new TextRun({
            text: "Khoanh tròn vào chữ cái đặt trước câu trả lời đúng nhất (A, B, C hoặc D):",
            italics: true,
            size: toHalfPoints(fontSizePt),
            font: fontFamily,
          }),
        ],
      })
    );

    // Questions
    quiz.questions.forEach((q) => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 120, after: 60 },
          children: [
            new TextRun({
              text: `Câu ${q.questionNumber}: `,
              bold: true,
              size: toHalfPoints(fontSizePt),
              font: fontFamily,
            }),
            new TextRun({
              text: q.question,
              size: toHalfPoints(fontSizePt),
              font: fontFamily,
            }),
          ],
        })
      );

      q.options.forEach((opt) => {
        docChildren.push(
          new Paragraph({
            indent: { left: convertInchesToTwip(0.3) },
            spacing: { before: 30, after: 30 },
            children: [
              new TextRun({
                text: `${opt.key}. `,
                bold: true,
                size: toHalfPoints(fontSizePt),
                font: fontFamily,
              }),
              new TextRun({
                text: opt.text,
                size: toHalfPoints(fontSizePt),
                font: fontFamily,
              }),
            ],
          })
        );
      });
    });

    // Section II: Answers
    docChildren.push(
      new Paragraph({
        spacing: { before: 240, after: 100 },
        children: [
          new TextRun({
            text: "II. ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT (CHUẨN LOIGIAIHAY.COM)",
            bold: true,
            size: toHalfPoints(fontSizePt + 1),
            font: fontFamily,
          }),
        ],
      })
    );

    // Answer table
    const headerCells = quiz.questions.map(
      (q) =>
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `Câu ${q.questionNumber}`,
                  bold: true,
                  size: toHalfPoints(Math.max(10, fontSizePt - 2)),
                  font: fontFamily,
                }),
              ],
            }),
          ],
        })
    );

    const valCells = quiz.questions.map(
      (q) =>
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: q.correctAnswer,
                  bold: true,
                  size: toHalfPoints(fontSizePt),
                  color: "006600",
                  font: fontFamily,
                }),
              ],
            }),
          ],
        })
    );

    docChildren.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [new TableRow({ children: headerCells }), new TableRow({ children: valCells })],
      })
    );

    // Explanations
    quiz.questions.forEach((q) => {
      docChildren.push(
        new Paragraph({
          spacing: { before: 60, after: 40 },
          children: [
            new TextRun({
              text: `• Câu ${q.questionNumber} (Đáp án ${q.correctAnswer}): `,
              bold: true,
              size: toHalfPoints(Math.max(10, fontSizePt - 2)),
              font: fontFamily,
            }),
            new TextRun({
              text: q.explanation,
              size: toHalfPoints(Math.max(10, fontSizePt - 2)),
              font: fontFamily,
            }),
          ],
        })
      );
    });

    sections.push({
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.7),
            right: convertInchesToTwip(0.6),
            bottom: convertInchesToTwip(0.7),
            left: convertInchesToTwip(0.75),
          },
        },
      },
      children: docChildren,
    });
  }

  const doc = new Document({
    sections,
  });

  const blob = await Packer.toBlob(doc);
  const filename = `Tron_Bo_Phieu_Trac_Nghiem_Cuoi_Tuan_${schoolInfo.week}_Lop_${schoolInfo.className}_Tat_Ca_Mon.docx`;
  return saveDocxFile(blob, filename);
}
