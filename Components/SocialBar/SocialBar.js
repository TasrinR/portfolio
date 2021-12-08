import React from "react";
import styles from "./SocialBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function SocialBar() {
  return (
    <div className={styles.socialBarWrapper}>
      <div>
        <a href="https://github.com/TasrinR" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kanij-tasrin-4a97231b9/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div>
        <a href="https://chatwith.io/s/kanij-tasrin" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </div>
  );
}

export default SocialBar;
