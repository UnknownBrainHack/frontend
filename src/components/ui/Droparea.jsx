import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Dropzone from 'react-dropzone';

import UploadIcon from '../../images/file.svg';
import EmptyImage from '../../images/Empty.png';

export default function Droparea() {
  const [uploadedImage, setUploadedImage] = useState(EmptyImage);
  const onDrop = useCallback((acceptedFiles) => {
    const reader = new FileReader();
    const [file] = acceptedFiles;

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setUploadedImage(UploadIcon);
    }
  }, []);

  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="dropzone">
          <div className="dropzone__wrapper">
            <input {...getInputProps()} className="dropzone__input" />
            <Image src={UploadIcon} alt="Upload File" />
            <p>Upload file</p>
            <Image
              src={uploadedImage}
              placeholder="empty"
              alt=""
              layout="fill"
            />
          </div>
        </div>
      )}
    </Dropzone>
  );
}
