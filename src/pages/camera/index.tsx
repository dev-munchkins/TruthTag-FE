import React, { useState, useEffect, useRef } from "react";
import CameraPhoto, { FACING_MODES } from "jslib-html5-camera-photo";

function Camera() {
  const [dataUri, setDataUri] = useState("");
  const videoRef = useRef<HTMLVideoElement | null>(null); // HTMLVideoElement 타입을 명시합니다.
  const cameraPhotoRef = useRef<CameraPhoto | null>(null);

  useEffect(() => {
    // 컴포넌트가 마운트된 후 CameraPhoto 인스턴스 생성
    if (videoRef.current !== null) {
      cameraPhotoRef.current = new CameraPhoto(videoRef.current);
    }
  }, []);

  const startCamera = (idealFacingMode: any, idealResolution: any) => {
    if (cameraPhotoRef.current) {
      cameraPhotoRef.current
        .startCamera(idealFacingMode, idealResolution)
        .then(() => {
          console.log("camera is started !");
        })
        .catch((error) => {
          console.error("Camera not started!", error);
        });
    }
  };

  const startCameraMaxResolution = (idealFacingMode: {} | undefined) => {
    if (cameraPhotoRef.current) {
      cameraPhotoRef.current
        .startCameraMaxResolution(idealFacingMode)
        .then(() => {
          console.log("camera is started !");
        })
        .catch((error) => {
          console.error("Camera not started!", error);
        });
    }
  };

  const takePhoto = () => {
    if (cameraPhotoRef.current) {
      const config = {
        sizeFactor: 1,
      };
      const dataUri = cameraPhotoRef.current.getDataUri(config);
      setDataUri(dataUri);
    }
  };

  const stopCamera = () => {
    if (cameraPhotoRef.current) {
      cameraPhotoRef.current
        .stopCamera()
        .then(() => {
          console.log("Camera stopped!");
        })
        .catch((error) => {
          console.log("No camera to stop:", error);
        });
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <button
        onClick={() => {
          let facingMode = FACING_MODES.ENVIRONMENT;
          let idealResolution = { width: 640, height: 480 };
          startCamera(facingMode, idealResolution);
        }}
      >
        {" "}
        Start environment facingMode resolution ideal 640 by 480{" "}
      </button>

      <button
        onClick={() => {
          let facingMode = FACING_MODES.USER;
          startCamera(facingMode, {});
        }}
      >
        {" "}
        Start user facingMode resolution default{" "}
      </button>

      <button
        onClick={() => {
          let facingMode = FACING_MODES.USER;
          startCameraMaxResolution(facingMode);
        }}
      >
        {" "}
        Start user facingMode resolution maximum{" "}
      </button>

      <button onClick={takePhoto}> Take photo </button>

      <button onClick={stopCamera}> Stop </button>

      <video ref={videoRef} autoPlay={true} />
      <img alt="imgCamera" src={dataUri} />
    </div>
  );
}

export default Camera;
