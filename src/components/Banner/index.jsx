import "../../styles/banner.css";

function Banner({ text, imgBanner }) {
  return (
    <div class="BannerContainer">
      <img class="BackgroundContainer" src={imgBanner} alt="banner cover" />
      <div class="TextBanner">{text}</div>
    </div>
  );
}

export default Banner;
