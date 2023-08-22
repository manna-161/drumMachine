import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  const [sound, setSound] = useState("");
  const [volume, setVolume] = useState(100);

  // const songs = [
  //   {button: 'Q', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', name: 'Heater 1', id: 'padQ'}
  // ]

  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "KeyQ":
        soundAudio("Q", "Heater 1");
        break;
      case "KeyW":
        soundAudio("W", "Heater 2");
        break;
      case "KeyE":
        soundAudio("E", "Heater 3");
        break;
      case "KeyA":
        soundAudio("A", "Heater 4");
        break;
      case "KeyS":
        soundAudio("S", "Clap");
        break;
      case "KeyD":
        soundAudio("D", "Open HH");
        break;
      case "KeyZ":
        soundAudio("Z", "Kick-n'-Hat");
        break;
      case "KeyX":
        soundAudio("X", "Kick");
        break;
      case "KeyC":
        soundAudio("C", "Closed-HH");
        break;
      default:
        return;
    }
  });
  const changeVolume = (e) => {
    let audioVolume = document.querySelectorAll("audio");
    setVolume(e.target.value);
    audioVolume.forEach((item) => {
      item.volume = e.target.value / 100;
    });
  };

  const soundAudio = (kek, name) => {
    const song = document.getElementById(kek);
    let playBtn = song.closest("div");
    setSound(name);
    song.play();
    playBtn.classList.add("active");
    song.onended = () => {
      playBtn.classList.remove("active");
    };
  };

  return (
    <>
      <div className="wrapper" id="drum-machine">
        <div className="padsControl">
          <div
            className="drum-pad"
            id="padQ"
            onClick={() => soundAudio("Q", "Heater 1")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              className="clip"
              id="Q"
            ></audio>
            Q
          </div>
          <div
            className="drum-pad"
            id="padW"
            onClick={() => soundAudio("W", "Heater 2")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              className="clip"
              id="W"
            ></audio>
            W
          </div>
          <div
            className="drum-pad"
            id="padE"
            onClick={() => soundAudio("E", "Heater 3")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              className="clip"
              id="E"
            ></audio>
            E
          </div>
          <div
            className="drum-pad"
            id="padA"
            onClick={() => soundAudio("A", "Heater 4")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              className="clip"
              id="A"
            ></audio>
            A
          </div>
          <div
            className="drum-pad"
            id="padS"
            onClick={() => soundAudio("S", "Clap")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              className="clip"
              id="S"
            ></audio>
            S
          </div>
          <div
            className="drum-pad"
            id="padD"
            onClick={() => soundAudio("D", "Open HH")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              className="clip"
              id="D"
            ></audio>
            D
          </div>
          <div
            className="drum-pad"
            id="padZ"
            onClick={() => soundAudio("Z", "Kick-n'-Hat")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              className="clip"
              id="Z"
            ></audio>
            Z
          </div>
          <div
            className="drum-pad"
            id="padX"
            onClick={() => soundAudio("X", "Kick")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              className="clip"
              id="X"
            ></audio>
            X
          </div>
          <div
            className="drum-pad"
            id="padC"
            onClick={() => soundAudio("C", "Closed-HH")}
          >
            <audio
              controls
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              className="clip"
              id="C"
            ></audio>
            C
          </div>
        </div>
        <div className="panelControl ">
          <div className="brand">
            <div>FCC</div>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </div>
          <div className="switchBtnBlock">
            <div>Power</div>
            <div className="switch-btn switch-on"></div>
          </div>
          <div className="displayBlock">
            <p id="display" className="display">
              {sound}
            </p>
          </div>

          <input
            value={volume}
            id="volume"
            step="1"
            type="range"
            className="range"
            min="0"
            max="100"
            onChange={changeVolume}
          />
          <div>
            <div>Bank</div>
            <div className="switch-btn switch-on"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
