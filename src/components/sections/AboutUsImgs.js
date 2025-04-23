import Educational_Videos from "../../assets/Images/Home/Educational_Videos.png";
import Fun_Games from "../../assets/Images/Home/Fun_Games.png";
import Creative_Drawing from "../../assets/Images/Home/Creative_Drawing.png";
import Interactive_Communication from "../../assets/Images/Home/Interactive_Communication.png";
import Img from "../common/Img";
const imgs = [
  {
    imgUrl: Educational_Videos,
    title: "Educational_Videos",
  },
  {
    imgUrl: Fun_Games,
    title: "Fun_Games",
  },
  {
    imgUrl: Creative_Drawing,
    title: "Creative_Drawing",
  },
  {
    imgUrl: Interactive_Communication,
    title: "Interactive_Communication",
  },
];
function AboutUsImgs() {
  return (
    <div className="flex w-full justify-between">
      {imgs.map((img, index) => (
        <Img imgs={img} key={index} />
      ))}
    </div>
  );
}

export default AboutUsImgs;
