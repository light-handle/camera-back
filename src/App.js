import logo from './logo.svg';
import './App.css';
import Webcam from 'react-webcam';
import React, { useState, useRef } from 'react';

function App() {
  const [imageSrc, setImageSrc] = useState(null);

  const onTakePhoto = (dataUri) => {
    setImageSrc(dataUri);
  }

  return (
    <div className="App">
      <Webcam
        audio={false}
        height={350}
        width={350}
        screenshotFormat="image/jpeg"
        onTakePhoto={onTakePhoto}
        facingMode="environment"
      />
      {imageSrc ? (
        <img src={imageSrc} alt="Webcam capture" />
      ) : null}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
