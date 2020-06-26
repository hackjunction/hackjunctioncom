import React from "react";
import "./style.scss";

import Image from "../Image";

const LogoHeader = ({ logo, punchline, link, linkText }) => {
    return (
        <div className="LogoHeader">
            <Image
                className="LogoHeader--logo"
                image={logo}
                alt="logo"
                height={150}
                width={400}
                crop={"fit"}
            />
            <span className="LogoHeader--punchline">{punchline}</span>
            {link ? (
                <a className="LogoHeader--link" href={link}>
                    z<span className="LogoHeader--link__text">{linkText}</span>
                </a>
            ) : null}
        </div>
    );
};

export default LogoHeader;
