const handleDownloadPDF = () => {
  const downloadUrl = `https://docs.google.com/document/d/129_znZkEIdG3b5r_DzQAIJFkBZL_0oI-w7O2DWRMJAc/edit?usp=sharing`;

  // Create a temporary link and trigger download
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.target = "_blank";
  link.download = "Sijo_Sam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function DownloadResume() {
  return (
    <button onClick={handleDownloadPDF} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-950 text-white text-sm font-medium rounded-sm hover:bg-gray-800 transition-colors">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      Download PDF
    </button>
  );
}
