import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";


const SocialMediaIcons = () => {
  return (
    <div className="flex flex-col justify-center md:justify-start  gap-3">
      <a
        className="flex gap-3"
        href="https://www.linkedin.com/in/victor-chiemerie"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={linkedin} className="bg-primary-500" />
        <span className="text-primary-500 font-bold text-lg">LinkedIn</span>
      </a>
      <a
        className="flex gap-3"
        href="https://twitter.com/Victorjheart"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={twitter} className="bg-primary-500" />
        <span className="text-primary-500 font-bold text-lg">Twitter</span>
      </a>
      <a
        className="flex gap-3"
        href="https://www.facebook.com/victor.adebowale.779/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook} className="bg-primary-500" />
        <span className="text-primary-500 font-bold text-lg">Facebook</span>
      </a>
      <a
        className="flex gap-3"
        href="https://www.instagram.com/victor_jheart/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={instagram} className="bg-primary-500 " />
        <span className="text-primary-500 font-bold text-lg">Instagram</span>
      </a>
    </div>
  );
};

export default SocialMediaIcons;