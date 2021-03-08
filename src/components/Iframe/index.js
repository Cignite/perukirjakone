import React from "react";
import Iframe from "react-iframe";

import styles from "./styles.scss";

const videoURL = "https://media.publit.io/file/PERUX/Perukirjakone.html";

const VideoIframe = () => (
  <>
    <section className="section is-medium">
      <div className="container">
        <header className="section-header">
          <h1 className="title is-spaced is-2 has-text-weight-bold">
            MITEN SE TOIMII?
          </h1>
        </header>

        <div className="videoPlayer">
          <Iframe
            url={videoURL}
            height={"366"}
            allowfullscreen
            width={"650"}
            className={styles.videoPlayer}
            display="initial"
            position="relative"
          />
        </div>
      </div>
    </section>
  </>
);

export default VideoIframe;
