import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";

function CameraApp() {
  const [dataUri, setDataUri] = useState(null);
  function handleTakePhoto(dataUri: any) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  function handleTakePhotoAnimationDone(dataUri: any) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  function handleCameraError(error: any) {
    console.log("handleCameraError", error);
  }

  function handleCameraStart(stream: any) {
    console.log("handleCameraStart");
  }

  function handleCameraStop() {
    console.log("handleCameraStop");
  }
  const isFullscreen = false;

  return (
    <>
    <div>이미지 검색</div>
      <div>
        {dataUri ? (
          <ImagePreview dataUri={dataUri} isFullscreen={isFullscreen} />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
        )}
        <button
          onClick={() => {
            setDataUri(null);
          }}
        >
          다시찍기
        </button>
      </div>
    </>
  );
}

export default CameraApp;
