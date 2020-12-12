import Btn from './btn/btn'
import Logo from './logo/logo'
import './page_profile.css'
import { useState } from 'react'
import React from "react";
import Webcam from "react-webcam";
var f = ''
export default function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    f=<img src={imageSrc}/>
    setOn(0)
  }, [webcamRef, setImgSrc]);

let [on, setOn] = useState(0)

function camera(){ setOn(1)}
  if (on == 1) return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <Btn text='Cделать фото'func={()=>capture()}/>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      ) }
    </>
  );
  else {
    return (
      <div className="main_profile" id='profile'>
        <Logo />
        <div className="field">
          <div className="foto">{f}</div>
          <div className='name'>name</div>
          <Btn text="foto" func={() => camera()} />
        </div>
      </div>
    );
  }
};



