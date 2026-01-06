import React from 'react';

interface BannerProps {
    message: string;
    backgroundColor?: string;
    textColor?: string;
}

const Banner: React.FC<BannerProps> = ({
    message,
    backgroundColor = 'green',
    textColor = 'white',
}) => {
    const bannerStyle: React.CSSProperties = {
      backgroundColor,
      color: textColor,
      padding: "10px 20px",
      textAlign: "center",
      borderRadius: "5px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      backgroundImage: 'url("/my-one/src/assets/Search_Icon.png")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    };

    return <div style={bannerStyle}>{message}</div>;
};

export default Banner;