import {
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaFacebook,
  FaYoutube,
  FaHeart,
} from "react-icons/fa";

const LinkedinLink = "https://in.linkedin.com/company/e-cell-gcoea";

const YoutubeLink = "https://www.youtube.com/@e-cellgcoea";

const InstagramLink = "https://www.instagram.com/ecellgcoea/";

const FacebookLink = "https://www.facebook.com/ecellgcoea/";

export default function Social() {
  return (
    <div>
      <div className="flex items-center gap-4 pt-2">
        <a
          href={InstagramLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          <FaInstagram size={20} />
        </a>

        <a
          href={FacebookLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          <FaFacebook size={20} />
        </a>

        <a
          href={YoutubeLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Youtube"
          className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          <FaYoutube size={20} />
        </a>

        <a
          href={LinkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
