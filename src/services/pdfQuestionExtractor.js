import * as pdfjsLib from "pdfjs-dist";
import Tesseract from "tesseract.js";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

export async function extractQuestionsFromPDF(file) {

  const buffer = await file.arrayBuffer();

  const pdf = await pdfjsLib.getDocument({
    data: buffer,
  }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {

    const page = await pdf.getPage(i);

    const content =
      await page.getTextContent();

    text += content.items
      .map(item => item.str)
      .join(" ");

    text += "\n";

  }

  return text;

}

export async function extractOCR(imageFile) {

  const result =
    await Tesseract.recognize(
      imageFile,
      "eng"
    );

  return result.data.text;

}