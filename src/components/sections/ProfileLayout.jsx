import Img from "../common/Img";
import ProfileImg from "../../assets/Images/Profile/Profile.png";
import { FaCamera } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
const img = {
  imgUrl: ProfileImg,
  title: "ProfileImg",
};
function ProfileLayout() {
  return (
    <div className="flex gap-3 bg-[var(--fifth)] w-full items-center h-[603px] ">
      <div className="relative h-full">
        <button className="absolute top-0 left-0 z-50 bg-[var(--fifth)] py-2 px-3">
          <FaCamera className="w-[44px] h-[38px]" />
        </button>
        <Img imgs={img} imgHeight="h-full" />
      </div>
      <div className="relative w-[63%] h-full">
        <div></div>
        <button className="absolute top-[523px] right-[36px] flex items-center gap-[10px] font-semibold text-[var(--secondary)] py-[10px] px-3  border-2 border-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] transition-all duration-200">
          {<GoPencil className="w-[18.8px] h-[18.8px]" />}
          <span>Edit Profile</span>
        </button>
      </div>
    </div>
  );
}

export default ProfileLayout;
