import { Link } from "react-router-dom";
import heroImage from "../assets/Images/Home/hero.jpeg";
import Button from "./common/Button";
function HeroSection() {
  return (
    <div className="hero-container  flex items-center justify-between py-6">
      <div className="">
        <div className="hero-leftContent w-[447px] ">
          <h2 className="font-bold text-[44px] mb-5">
            Support Your Child’s Growth with Interactive Activities Designed for
            Autism
          </h2>
          <p className="text-[20px] w-[402px] font-medium mb-5">
            We help you understand your child’s needs by analyzing their
            behavior and recommending personalized activities to enhance their
            development
          </p>
          <Link to="/UploadVideo">
            <Button>Upload a Video +</Button>
          </Link>
        </div>
      </div>
      <div className=" h-[704px] w-[704px]  overflow-hidden">
        <img
          className="hero-img w-full h-full rounded-full object-cover"
          src={heroImage}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
