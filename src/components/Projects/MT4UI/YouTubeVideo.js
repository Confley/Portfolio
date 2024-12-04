import React from "react";

const Video = (props) => {
  return (
    <>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          title={`Video explicativo - ${props.url}`}  // Asegura que sea único con la URL
          // src={`https://www.youtube.com/embed/${props.url}`}
          src={`https://www.youtube.com/embed/${props.url}?rel=0&vq=hd1080&modestbranding=1&autohide=1&showinfo=0`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
};

export default Video;
