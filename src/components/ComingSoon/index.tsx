import { useState } from "react";
import Lottie from "react-lottie";
import Button from "../Button";
import useWindowSize from "../hooks/useWindowSize";
import Socials from "../Socials";
import ComingSoonModal from "./ComingSoonModal";
import Confetti from "./confetti-lottie.json";
import Rocket from "./rocket-lottie.json";

const ComingSoon = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const rocketDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Rocket,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const confettiDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Confetti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { width } = useWindowSize();
  return (
    <>
      <div className="h-screen w-screen grid place-items-center text-center bg-[#fbe134]">
        {/* <div className="absolute"> */}
        <div className="md:w-[500px] w-[300px] md:h-[500px] h-[500px]">
          <Lottie options={rocketDefaultOptions} />
        </div>
        {/* </div> */}
        <div className="absolute w-screen h-screen">
          <Lottie options={confettiDefaultOptions} />
        </div>
        <div className="absolute w-screen grid place-items-center h-screen">
          <div className="flex flex-col">
            <div className="w-full flex justify-center">
              <img
                src="/logo.png"
                height={width! <= 430 ? 300 : 400}
                width={width! <= 430 ? 300 : 400}
                alt="logo"
              />
            </div>
            <div className="uppercase lg:text-[100px] md:text-[70px] text-[50px] font-bold text-center font-serif">
              Coming <br />
              Soon
            </div>
            <div className="lg:text-[35px] md:text-[30px] text-[22px] font-thin">
              We will be celebrating the launch of our new site very soon!
            </div>
            <div className="mt-5">
              <Button
                text="Notify Me!"
                onClick={() => setIsOpen(true)}
                className={`${isOpen && "-z-10 relative"}`}
              />
              <ComingSoonModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
              />
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
