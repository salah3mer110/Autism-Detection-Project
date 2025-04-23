import Button from "../common/Button";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud, FiCheckCircle } from "react-icons/fi";

const FileUploader = ({
  onFilesSelected,
  setFiles,
  setIsUploaded,
  isUploaded,
  files,
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "video/*": [".mp4", ".mov", ".avi", ".mkv"],
    },
    maxSize: 50 * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      const fileObjects = acceptedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type,
        file, // This is the actual File object we'll upload
      }));
      setFiles(fileObjects);
      setIsUploaded(false);
      if (onFilesSelected) {
        onFilesSelected(fileObjects);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={`flex justify-center items-center h-[450px] border-2 border-[var(--secondary)] p-4 rounded-lg cursor-pointer text-center border-dashed bg-[#FCF7F2] transition-all duration-150 hover:bg-[var(--primary)]
      }`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-4">
        {isUploaded ? (
          <>
            <FiCheckCircle className="w-28 h-28 text-green-500" />
            <p className="text-[26px] font-bold">
              Video Uploaded Successfully!
            </p>
          </>
        ) : (
          <>
            {isDragActive ? (
              <p className="text-[26px] font-bold">Drop the video here</p>
            ) : (
              <>
                <FiUploadCloud className="w-28 h-28" />
                <p className="text-[26px] font-bold">Drop video here</p>
                <div className="flex items-center space-x-4">
                  <div className="h-px bg-gray-300 w-8"></div>
                  <span className="text-[#333333] text-[30px] font-medium">
                    Or
                  </span>
                  <div className="h-px bg-gray-300 w-8"></div>
                </div>
                <Button>Upload Video</Button>
              </>
            )}
          </>
        )}

        {files.length > 0 && !isUploaded && (
          <div className="mt-4">
            <p className="font-medium">Selected video:</p>
            <ul className="mt-2">
              {files.map((file, index) => {
                const fileUrl = URL.createObjectURL(file.file);
                return (
                  <li key={index} className="text-sm">
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--secondary)] hover:underline"
                      onClick={(e) => {
                        // Clean up the object URL when component unmounts or file changes
                        return () => URL.revokeObjectURL(fileUrl);
                      }}
                    >
                      {file.name} - {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

// function FileUploader({ onFilesSelected }) {
//   const [files, setFiles] = useState([]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: {
//       "video/*": [".mp4", ".mov", ".avi", ".mkv"],
//     }, // accept only video files
//     maxSize: 50 * 1024 * 1024, // increased to 50MB for videos
//     multiple: false, // single file upload for videos
//     onDrop: (acceptedFiles) => {
//       const fileObjects = acceptedFiles.map((file) => ({
//         name: file.name,
//         size: file.size,
//         preview: URL.createObjectURL(file),
//         file, // include the actual file object
//       }));
//       setFiles(fileObjects);
//       if (onFilesSelected) {
//         onFilesSelected(fileObjects);
//       }
//     },
//   });

//   return (
//     <div
//       {...getRootProps()}
//       className={`border-2 border-[var(--secondary)] p-4 rounded-lg cursor-pointer text-center  border-dashed bg-[#FCF7F2] ${
//         isDragActive && "hover:bg-[var(--primary)]"
//       }`}
//     >
//       <input {...getInputProps()} />
//       <div className="flex flex-col items-center space-y-4">
//         <FiUploadCloud className="w-28 h-28" />

//         {isDragActive ? (
//           <p className="text-[26px] font-bold">Drop the video here</p>
//         ) : (
//           <>
//             <p className="text-xl font-medium text-gray-700">Drop video here</p>
//             <div className="flex items-center space-x-4">
//               <div className="h-px bg-gray-300 w-8"></div>
//               <span className="text-[#333333] text-[30px] font-medium">Or</span>
//               <div className="h-px bg-gray-300 w-8"></div>
//             </div>
//             <Button>Upload a Video</Button>
//           </>
//         )}
//       </div>

//       {files.length > 0 && (
//         <ul className="mt-3">
//           {files.map((file, index) => (
//             <li key={index} className="text-sm">
//               {file.name} - {Math.round(file.size / 1024)} KB
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default FileUploader;
// {
//   /* <div
// {...getRootProps()}
// className={`border-2 border-[var(--secondary)] p-4 rounded-lg cursor-pointer text-center  border-dashed bg-[#FCF7F2] ${
//   isDragActive ? "bg-[var(--primary)]" : "hover:bg-[var(--primary)]"
// }`}
// >
// <input {...getInputProps()} />
// <div className="flex flex-col items-center space-y-4">
//   <FiUploadCloud className="w-28 h-28" />

//   {isDragActive ? (
//     <p className="text-[26px] font-bold">Drop the video here</p>
//   ) : (
//     <>
//       <p className="text-xl font-medium text-gray-700">Drop video here</p>
//       <div className="flex items-center space-x-4">
//         <div className="h-px bg-gray-300 w-8"></div>
//         <span className="text-[#333333] text-[30px] font-medium">Or</span>
//         <div className="h-px bg-gray-300 w-8"></div>
//       </div>
//       <Button>Upload a Video</Button>
//     </>
//   )}
// </div>

// {files.length > 0 && (
//   <div className="mt-6 p-3 bg-blue-50 rounded-md">
//     <p className="font-medium text-sm">Selected video:</p>
//     <p className="text-sm mt-1">
//       {files[0].name} - {(files[0].size / (1024 * 1024)).toFixed(2)} MB
//     </p>
//   </div>

// </div> */
// }
