import useWindowSize from "../hooks/useWindowSize";

const Socials = () => {
  const socialsArray: {
    icon: string;
    link: string;
  }[] = [
    {
      icon: "/socials/facebook.png",
      link: "https://www.facebook.com/makoonsplayschool",
    },
    {
      icon: "/socials/insta.png",
      link: "https://instagram.com/makoonsplayschool",
    },
    {
      icon: "/socials/linkedin.png",
      link: "https://www.linkedin.com/company/makoons-play-school",
    },
    {
      icon: "/socials/pinterest.png",
      link: "https://www.pinterest.com/Makoonsplayschool",
    },
    { icon: "/socials/twitter.png", link: "https://twitter.com/makoonsschool" },
    {
      icon: "/socials/youtube.png",
      link: "https://www.youtube.com/makoonsplayschool",
    },
    {
      icon: "/socials/whatsapp.png",
      link: "https://api.whatsapp.com/send?phone=919821182455",
    },
    { icon: "/socials/gmail.png", link: "mailto:info@makoons.com" },
  ];
  const { width } = useWindowSize();
  return (
    <div className="max-w-screen flex justify-center gap-4 mt-5">
      {socialsArray.map((social) => {
        return (
          <img
            src={social.icon}
            key={social.link}
            onClick={() => window.open(social.link, "_blank")}
            height={width! <= 320 ? 20 : width! <= 500 ? 25 : 30}
            width={width! <= 320 ? 20 : width! <= 500 ? 25 : 30}
            alt="social-icon"
            className="cursor-pointer text-teal-800"
          />
        );
      })}
    </div>
  );
};

export default Socials;
