import React, { useState } from "react";

import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css"

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const [imageURL, setImageURL] = useState(propertyDetails.image);

  return (
    <div className="flexColCenter uploadWrapper">
      {!imageURL ? (
        <div className="flexColCenter uploadZone">
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
