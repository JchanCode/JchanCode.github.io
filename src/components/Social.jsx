import React from "react";

const SocialShare = [
  {
    iconName: "facebook",
    link: "https://www.facebook.com/jonas.chan.92",
  },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/jonas_chann/",
  },
  {
    iconName:"linkedin",
    link: "https://www.linkedin.com/in/jonaschan/"
  },
  {
    iconName:"github",
    link: "https://github.com/JchanCode"
  },
  {
    iconName:"email",
    link: "mailto:ijonass@gmail.com"
  }
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/assets/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
