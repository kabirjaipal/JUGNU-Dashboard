import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const FooterSocials = [
  {
    link: "https:www.youtube.com/techboy2",
    icon: <AiFillYoutube />,
  },
  {
    link: "https:www.instagram.com/kabirjaipal_2004",
    icon: <AiFillInstagram />,
  },
  {
    link: "https://www.linkedin.com/in/kabir-jaipal-a1427223a/",
    icon: <AiFillLinkedin />,
  },
  {
    link: "https://discord.gg/PcUVWApWN3",
    icon: <FaDiscord />,
  },
];

const FooterLinks = [
  {
    name: `AboutUS`,
    url: `/about`,
  },
  {
    name: `ContactUS`,
    url: `/contact`,
  },
];

export { FooterLinks, FooterSocials };
