import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialIconWrapper = ({ Component, ...restProps }) => {
  return <Component bgColor="#fff" fgColor="#333" {...restProps} />;
};

export default function Footer() {
  const today = new Date();

  return (
    <footer className="p-10 flex flex-col justify-center items-center">
      <div className="font-fontinBold mb-3">
        &copy; {today.getFullYear()} Samvera
      </div>
      <ul className="flex flex-row">
        <li>
          <SocialIconWrapper
            Component={SocialIcon}
            url="https://twitter.com/SamveraRepo"
          />
        </li>
        <li>
          <SocialIconWrapper
            Component={SocialIcon}
            url="https://github.com/samvera"
          />
        </li>
      </ul>
    </footer>
  );
}
