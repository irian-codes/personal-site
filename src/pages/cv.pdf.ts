import ReactPDF from '@react-pdf/renderer';
import type {APIRoute} from 'astro';
import TestPdf from '../components/cv/TestPdf';

export const GET: APIRoute = async function (context) {
  // TODO: Move this implementation to function 'renderToBuffer' when it's implemented in Typescript in the library.
  const pdfStream = await ReactPDF.renderToStream(TestPdf());

  // Reading the stream
  const chunks = [];
  for await (let chunk of pdfStream) {
    chunks.push(chunk);
  }

  //@ts-expect-error It doesn't like that it's not typed correctly, but this works.
  const buffer = Buffer.concat(chunks);

  return new Response(buffer);
};
