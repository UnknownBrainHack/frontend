import React, { useCallback, useState } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import UploadIcon from '../../../images/file.svg';
import EmptyImage from '../../../images/Empty.png';
import { DropZone, DropZoneInput, DropZoneWrapper } from "./styled";

export default function DropArea({ disabled = false, image }) {
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
        <DropZone {...getRootProps()} className="dropzone">
          <DropZoneWrapper className="dropzone__wrapper">
            {!disabled && (
              <DropZoneInput {...getInputProps()} className="dropzone__input" />
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {!uploadedImage && <img src={UploadIcon} alt="Upload File" />}
            {!uploadedImage && <p>Upload file</p>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={disabled ? image : uploadedImage && "../../images/Help.svg"}
              placeholder="empty"
              alt=""
              layout="fill"
            />
          </DropZoneWrapper>
        </DropZone>
      )}
    </Dropzone>
  );
}

DropArea.propTypes = {
  disabled: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
