import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutAndContact from "../components/sections/AboutAndContact";
import MissionAndVision from "../components/sections/MissionAndVision";
import WhatWeOffer from "../components/sections/WhatWeOffer";
import AboutUsImgs from "../components/sections/AboutUsImgs";
const AboutAndContactContent = {
  title: "About Us",
  desc: "Empowering Families, Supporting Children with Autism",
};
function AboutUs({ onShowSignIn }) {
  return (
    <div className="pt-24 relative bg-[var(--primary)] font-nunito min-h-screen">
      <section className="w-[1350px] mx-auto">
        <Header onShowSignIn={onShowSignIn} />
      </section>
      <section className="h-[600px]">
        <AboutAndContact AboutAndContactContent={AboutAndContactContent} />
      </section>
      <section className="absolute z-50 top-[628px] left-1/2 transform -translate-x-1/2 w-[87%] flex justify-center">
        <AboutUsImgs />
      </section>
      <section>
        <MissionAndVision />
      </section>
      <section>
        <WhatWeOffer />
      </section>
      <section className="pt-20">
        <Footer />
      </section>
    </div>
  );
}

export default AboutUs;
