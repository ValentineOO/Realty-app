import React, { useEffect, useRef, useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dchwohzvr",
        uploadPreset: "crzreztm",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setImageURL(result.info.secure_url);
        }
      }
    );
  });

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div
          className="flexColCenter uploadZone"
          onClick={() => widgetRef.current?.open()}
        >
          <AiOutlineCloudUpload size={50} color="grey" />
        </div>
      ) : (
        <div className="uploadedImage">
          <img src={imageURL} alt="" />
          <span>Upload Image</span>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
