import FacebookIcon from "remixicon-react/FacebookBoxLineIcon";
import InstagramIcon from "remixicon-react/InstagramLineIcon";
import LinkedinIcon from "remixicon-react/LinkedinBoxLineIcon";
import PinterestIcon from "remixicon-react/PinterestLineIcon";
import TwitterIcon from "remixicon-react/TwitterLineIcon";
import YouTubeIcon from "remixicon-react/YoutubeLineIcon";
import WhatsappIcon from "remixicon-react/WhatsappLineIcon";
import MailIcon from "remixicon-react/MailLineIcon";
import { RemixiconReactIconComponentType } from "remixicon-react";
import useWindowSize from "../hooks/useWindowSize";

const Socials = () => {
  const socialsArray: {
    icon: RemixiconReactIconComponentType;
    link: string;
  }[] = [
    { icon: FacebookIcon, link: "https://www.facebook.com/makoonsplayschool" },
    { icon: InstagramIcon, link: "https://instagram.com/makoonsplayschool" },
    {
      icon: LinkedinIcon,
      link: "https://www.linkedin.com/company/makoons-play-school",
    },
    {
      icon: PinterestIcon,
      link: "https://www.pinterest.com/Makoonsplayschool",
    },
    { icon: TwitterIcon, link: "https://twitter.com/makoonsschool" },
    { icon: YouTubeIcon, link: "https://www.youtube.com/makoonsplayschool" },
    {
      icon: WhatsappIcon,
      link: "https://api.whatsapp.com/send?phone=919821182455",
    },
    { icon: MailIcon, link: "mailto:info@makoons.com" },
  ];
  const { width } = useWindowSize();
  return (
    <div className="max-w-screen flex justify-center gap-4 mt-5">
      {socialsArray.map((social) => {
        const Icon = social.icon;
        return (
          <Icon
            onClick={() => window.open(social.link, "_blank")}
            size={width! <= 320 ? 20 : width! <= 500 ? 25 : 30}
            className="cursor-pointer text-teal-800"
          />
        );
      })}
    </div>
  );
};

export default Socials;
