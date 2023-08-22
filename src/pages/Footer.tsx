import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container text-muted py-4 py-lg-5">
        <ul className="list-inline">
          <li className="list-inline-item me-4">
            <a href="https://www.facebook.com/rj.bardillon/" target="__blank">
              <FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#000000"}}/>
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a href="https://www.instagram.com/romskybardillon/" target="__blank">
              <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#000000"}}/>
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a href="https://twitter.com/romskybardillon" target="__blank">
              <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#000000"}}/>
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a href="https://www.youtube.com/channel/UCEaVuIgvPAaJbGjJISg9VWA" target="__blank">
              <FontAwesomeIcon icon={faYoutube} size="2xl" style={{color: "#000000"}}/>
            </a>
          </li>
        </ul>
        <p className="mb-0">Copyright © 2023 Romeo Jr Bardillon</p>
      </div>
    </footer>
  );
};

export default Footer;
