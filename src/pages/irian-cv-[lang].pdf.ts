import ReactPDF from '@react-pdf/renderer';
import type {APIRoute} from 'astro';
import {CvPdf} from '../components/cv/CvPdf';
import {defaultLanguageTag} from '../i18n/i18n';

export const GET: APIRoute = async function () {
  // TODO: Move this implementation to function 'renderToBuffer' when it's implemented in Typescript in the library.
  const pdfStream = await ReactPDF.renderToStream(CvPdf(defaultLanguageTag));

  // Reading the stream
  const chunks = [];
  for await (const chunk of pdfStream) {
    chunks.push(chunk);
  }

  //@ts-expect-error It doesn't like that it's not typed correctly, but this works.
  const buffer = Buffer.concat(chunks);

  return new Response(buffer);
};

export function getStaticPaths() {
  return [{params: {lang: defaultLanguageTag}}];
}
