import "../../styles/banner.css";

function Banner({ text, imgBanner }) {
  return (
    <div className="BannerContainer">
      <img className="BackgroundContainer" src={imgBanner} alt="banner cover" />
      <div className="TextBanner">{text}</div>
    </div>
  );
}

export default Banner;
