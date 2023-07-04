import type {APIRoute} from "astro";
import ReactPDF from "@react-pdf/renderer";
import TestPdf from "../components/cv/TestPdf"

export const get: APIRoute = async function get ({params, request}) {
    // TODO: Move this implementation to function 'renderToBuffer' when it's implemented in Typescript in the library.
    const pdfStream = await ReactPDF.renderToStream(TestPdf())

    // Reading the stream
    const chunks= [];
    for await (let chunk of pdfStream) {
        chunks.push(chunk);
    }

    //@ts-expect-error It doesn't like that it's not typed correctly, but this works.
    const buffer = Buffer.concat(chunks);

    // Serializing to string
    // Inspiration: https://github.com/withastro/astro/blob/255636cc7b4ed5f72045f75a2411ebd84a2bdb0d/packages/astro/test/fixtures/non-html-pages/src/pages/placeholder.png.ts
    return {
        body: buffer.toString('binary'),
        encoding: 'binary'
    };
}