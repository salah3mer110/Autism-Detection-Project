import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import AboutAndContact from "../components/sections/AboutAndContact";
import ContactUsForm from "../components/sections/ConactUsForm";
const AboutAndContactContent = {
  title: "Get in Touch",
  desc: "Have questions? Need support? Get in touch with us!",
};
function ContactUs({ onShowSignIn }) {
  return (
    <div>
      <div className="pt-24 relative bg-[var(--primary)] font-nunito min-h-screen">
        <section className="w-[1350px] mx-auto">
          <Header onShowSignIn={onShowSignIn} />
        </section>
        <section className="h-[600px]">
          <AboutAndContact AboutAndContactContent={AboutAndContactContent} />
        </section>
        <section className="h-[591px]"></section>
        <section className="absolute z-50 top-[586px] w-[86%] left-1/2 transform -translate-x-1/2  flex justify-center shadow-2xl">
          <ContactUsForm />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
