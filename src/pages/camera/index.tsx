import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import ImagePreview from "./ImagePreview";
import styled, { createGlobalStyle } from "styled-components";
import TagIcon from "@assets/svg/cameraTag.svg";
import CameraButtonIcon from "@assets/svg/cameraButton-223.svg";
import CameraVector from "@assets/svg/camera-vector.svg";

function CameraApp() {
  const [dataUri, setDataUri] = useState("");
  function handleTakePhoto(dataUri: string) {
    // Do stuff with the photo...
    console.log("takePhoto");
    setDataUri(dataUri);
  }

  function handleTakePhotoAnimationDone(dataUri: string) {
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
  const isFullscreen = true;

  return (
    <>
      <SImageSearchTitle>
        <span>이미지 검색</span>
        <TagIcon />
      </SImageSearchTitle>

      <div style={{ height: "90vh" }}>
        {dataUri ? (
          <ImagePreview
            dataUri={dataUri}
            isFullscreen={isFullscreen}
            setDataUri={setDataUri}
          />
        ) : (
          <Camera
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
            idealFacingMode={FACING_MODES.ENVIRONMENT}
          />
        )}
      </div>
    </>
  );
}

export default CameraApp;

const SImageSearchTitle = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  z-index: 10;

  color: var(--Pale-White, var(--True-White, #fff));
  font-family: "Noto Sans KR";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */

  padding: 16px 24px;
  width: 375px;

  align-items: center;
`;

/*
const GlobalStyle = createGlobalStyle`
  #outer-circle {
    background: var(--Truth-Yellow, #EBFF00);
    width: 36px;
    height: 36px;

    left: -16px;

    margin-top: 10px;

  }
  #inner-circle {
    background-image: url(assets/svg/camera-vector.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-color: transparent;

    width: 30px;
    height: 30px;

    left: 0;
    top: 0;

    margin:  3px 0 0 3px;
  }

`;
*/
