import { formatFileSize } from "../../../utils/fileSize";
import { FC, useState } from "react";
import { FormSubmissionSpinner } from "../../spinner/spinner";
import { DownloadIcon } from "../../assets/icons";

type DocumentURI = `https://${string}.${
  | "png"
  | "pdf"
  | "jpg"
  | "docx"
  | "odt"
  | "jpeg"}`;

interface DocumentCardProps {
  label: string;
  fileSize: number;
  URI: string;
  propertyName: string;
}

const DocumentCard: FC<DocumentCardProps> = ({
  label,
  fileSize,
  URI,
  propertyName,
}) => {
  const [preparingDownload, setPreparingDownload] = useState(false);
  const downloadDocument = async (URI: string, label: string) => {
    setPreparingDownload(true);
    try {
      const response = await fetch(URI);
      const blob = await response.blob();

      const fileName = URI.substring(URI.lastIndexOf("/") + 1);
      const fileExtension = fileName.substring(fileName.lastIndexOf(".") + 1);
      const downloadName = `TAAS_${propertyName}_${label}.${fileExtension}`;

      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.download = downloadName;

      document.body.appendChild(link);

      link.click();

      link.parentNode?.removeChild(link);
    } catch (error) {
      console.log(error);
    } finally {
      setPreparingDownload(false);
    }
  };
  return (
    <div className="flex justify-between items-center bg-t-purple p-4 rounded-lg bg-pp-green-2">
      <div>
        <h3 title={label} className="text-base text-white line-clamp-1">
          {label}
        </h3>
        <p className="mt-1.5 text-sm text-pp-gray">
          {formatFileSize(fileSize)}
        </p>
      </div>
      <button
        onClick={() => downloadDocument(URI, label)}
        type="button"
        title="download document"
        className="p-2 bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center"
      >
        {preparingDownload ? <FormSubmissionSpinner /> : <DownloadIcon />}
      </button>
    </div>
  );
};

export { DocumentCard };
