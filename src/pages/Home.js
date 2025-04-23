import HeroSection from "../components/HeroSection";
import Header from "../layouts/Header";
import HowWebsiteHelp from "../components/HowWebsiteHelp";
import WhatIsAutism from "../components/WhatIsAutism";
import ExploreActivity from "../components/ExploreActivity";
import Partner from "../components/Partner";
import Footer from "../layouts/Footer";
import Star from "../components/iconsComponents/Star";

function Home({ onShowSignIn }) {
  return (
    <div className="pt-24 bg-[var(--primary)] font-nunito min-h-screen">
      <Star
        className={`absolute z-60 fill-[#F6BC3F] w-[27px] h-[27px] top-[500px] left-[43px]`}
      />
      <Star className="absolute z-[60] fill-[#5C30FF] w-[63px] h-[63px] top-[589px] left-[489px]" />
      <Star
        className={`absolute z-60 fill-[#fff] w-[27px] h-[27px] top-[1071px] left-[245px]`}
      />
      <Star
        className={`fill-[#fff] w-[27px] h-[27px] absolute z-60 top-[1193px] right-[112px]`}
      />
      <Star
        className={`fill-[var(--secondary)] w-[27px] h-[27px] absolute z-60 top-[2034px] right-[160px]`}
      />
      <section className="w-[1350px] mx-auto pb-20">
        <Header onShowSignIn={onShowSignIn} />
        <HeroSection />
      </section>
      <section>
        <HowWebsiteHelp />
      </section>
      <section className="flex justify-center">
        <WhatIsAutism />
      </section>
      <section>
        <ExploreActivity />
      </section>
      <section>
        <Partner />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Home;
