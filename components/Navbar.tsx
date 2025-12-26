import { SiGmail, SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export const Navbar = () => {
  return (
    <div className="px-5 z-10 fixed top-0 bg-zinc-100 w-full lg:px-8 py-4 flex justify-between border-b items-center">
      <div className="font-black opacity-85 select-none">ManvirSingh.</div>
      <div className="flex gap-x-5 lg:gap-x-6">
        <a
          href="https://github.com/sorcererofcoding1212"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl lg:text-2xl lg:cursor-pointer opacity-70" />
        </a>
        <a
          href="mailto:manvirtaneja451@gmail.com"
          title="manvirtaneja451@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGmail className="text-xl lg:text-2xl lg:cursor-pointer opacity-70" />
        </a>
        <a
          href="https://linkedin.com/in/manvir-singh-453931261"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin className="text-xl lg:text-2xl lg:cursor-pointer opacity-70" />
        </a>
      </div>
    </div>
  );
};
