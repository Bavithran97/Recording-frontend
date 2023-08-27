import React from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import "./Data.css";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/sign-in");
  };
  return (
    <div className="data-container">
      <div className="recorder">
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status">{status}</p>
              <button className="start-button" onClick={startRecording}>
                Start Webcam Recording
              </button>
              <button className="stop-button" onClick={stopRecording}>
                Stop Webcam Recording
              </button>
              <video
                className="recorded-video"
                src={mediaBlobUrl}
                controls
                autoPlay
                loop
              />
            </div>
          )}
        />
      </div>
      <div className="recorder">
        <ReactMediaRecorder
          screen
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status">{status}</p>
              <button className="start-button" onClick={startRecording}>
                Start Screen Recording
              </button>
              <button className="stop-button" onClick={stopRecording}>
                Stop Screen Recording
              </button>
              <video
                className="recorded-video"
                src={mediaBlobUrl}
                controls
                autoPlay
                loop
              />
            </div>
          )}
        />
      </div>
      <div className="recorder">
        <ReactMediaRecorder
          audio
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div>
              <p className="status">{status}</p>
              <button className="start-button" onClick={startRecording}>
                Start Audio Recording
              </button>
              <button className="stop-button" onClick={stopRecording}>
                Stop Audio Recording
              </button>
              <audio
                className="recorded-audio"
                src={mediaBlobUrl}
                controls
                autoPlay
                loop
              />
            </div>
          )}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Data;
