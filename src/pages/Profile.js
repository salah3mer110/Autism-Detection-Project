import AboutAndContact from "../components/sections/AboutAndContact";
import ProfileLayout from "../components/sections/ProfileLayout";
import Header from "../layouts/Header";
const AboutAndContactContent = {
  title: "Profile",
  desc: "",
};

function Profile({ onShowSignIn }) {
  return (
    <div className="pt-24  relative bg-[var(--primary)] font-nunito min-h-screen">
      <section className="w-[1350px] mx-auto">
        <Header onShowSignIn={onShowSignIn} />
      </section>
      <section className="h-[317px]">
        <AboutAndContact AboutAndContactContent={AboutAndContactContent} />
      </section>
      <section className="absolute z-50 top-[355px] w-[86%] left-1/2 transform -translate-x-1/2  flex justify-center shadow-xl">
        <ProfileLayout />
      </section>
      <section className="h-[941px]"></section>
    </div>
  );
}

export default Profile;
