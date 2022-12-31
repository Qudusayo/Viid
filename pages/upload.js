import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import styles from "./../styles/Upload.module.scss";
import Button from "../components/Button/Button";
import Loader from "../components/Loader/Loader";

export default function upload() {
  const [fileEntry, setFileEntry] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    setFileEntry(true);
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className={styles.Upload}>
      <div>
        <div
          {...getRootProps()}
          className={[
            styles.UploadContainer,
            isDragActive && styles.UploadContainerHover,
          ].join(" ")}
        >
          {!fileEntry ? (
            <>
              {!isDragActive ? (
                <>
                  <h2>Send a Video</h2>
                  <p>
                    Quickly send a video to a colleague, friend, or client.
                    <br />
                    Get feedback with comments.
                  </p>
                  <Button title={"Upload your Video"} />
                  <input {...getInputProps()} />
                  <div className={styles.Zipped}>
                    <div></div>
                    <span>OR</span>
                    <div></div>
                  </div>
                  <h3>Drag and Drop here</h3>
                  <p>Supported file types: MP4, MOV, MKV, AVI, WMV, FLV, GIF</p>
                </>
              ) : (
                <>
                  <div>
                    <span>Drop Files Here</span>
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={styles.UploadContainerActive}>
              <Loader />
              <h3>Uploading to IPFS</h3>
              <small>
                Do not close this tab or browser till the file is fully
                uploaded!
              </small>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
