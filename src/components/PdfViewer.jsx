import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

const PdfViewer = ({ pdfFileName, visible }) => {
    const [loadingError, setLoadingError] = useState(null);

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    if (!visible) return null;

    const pdfUrl = "../src/assets/pdfs/Resume_RAUSHAN.pdf";

    return (
        <div>
            <Document
                file={pdfUrl}
                onLoadError={(error) => setLoadingError(error.message)}>
                {loadingError ? (
                    <p>Error: {loadingError}</p>
                ) : (
                    <Page pageNumber={1} />
                )}
            </Document>
        </div>
    );
};

export default PdfViewer;
