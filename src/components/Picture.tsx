import headerMobile from "../assets/bg-header-mobile.svg";
import headerDesktop from "../assets/bg-header-desktop.svg";

const Picture = () => {
  return (
    <header className="bg-[#5CA5A5]">
      <picture>
        <source media="(min-width: 1024px)" srcSet={headerDesktop} />
        <img src={headerMobile} alt="header image" />
      </picture>
    </header>
  );
};

export default Picture;
