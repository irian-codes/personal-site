import ReactPDF from '@react-pdf/renderer';
import type {APIRoute} from 'astro';
import {CvPdf} from '../components/cv/CvPdf';
import type {LanguageTag} from '../i18n/i18n';

export const GET: APIRoute = async function (context) {
  // Grabbing language from Astro URL params (https://docs.astro.build/en/core-concepts/endpoints/#params-and-dynamic-routing)
  const locale = context.params.lang as LanguageTag | undefined;

  // TODO: Move this implementation to function 'renderToBuffer' when it's implemented in Typescript in the library.
  const pdfStream = await ReactPDF.renderToStream(CvPdf(locale ?? 'en'));

  // Reading the stream
  const chunks = [];
  for await (let chunk of pdfStream) {
    chunks.push(chunk);
  }

  //@ts-expect-error It doesn't like that it's not typed correctly, but this works.
  const buffer = Buffer.concat(chunks);

  return new Response(buffer);
};

export function getStaticPaths() {
  return [
    {params: {lang: 'en'}},
    {params: {lang: 'es'}},
    {params: {lang: 'ca'}},
  ];
}
