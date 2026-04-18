import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  { icon: faGithub, href: "https://github.com/rmbardillon" },
  { icon: faLinkedinIn, href: "https://www.linkedin.com/in/romeo-jr-b-45bb0012a/" },
  { icon: faFacebook, href: "https://www.facebook.com/rj.bardillon/" },
  { icon: faInstagram, href: "https://www.instagram.com/romskybardillon/" },
  { icon: faTwitter, href: "https://twitter.com/romskybardillon" },
  {
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCEaVuIgvPAaJbGjJISg9VWA",
  },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Romeo Jr Bardillon
      </p>
      <div className="flex items-center gap-4">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={s.icon} className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
