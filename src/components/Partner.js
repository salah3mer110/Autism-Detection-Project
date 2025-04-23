import Creativa from "../assets/Images/Home/Creativa.png";
import Khan from "../assets/Images/Home/Khan.png";
import Online from "../assets/Images/Home/Online.png";
const partnerImgs = [
  {
    imageUrl: Creativa,
    header: "Creativa image",
  },
  {
    imageUrl: Khan,
    header: "Khan image",
  },
  {
    imageUrl: Online,
    header: "Online image",
  },
];
function Partner() {
  return (
    <div className={`text-center py-24 flex justify-center items-center`}>
      <div className={`w-[86%]`}>
        <h2 className={`font-bold text-[44px] mb-12`}>Our Partner</h2>
        <div className="w-full flex justify-center">
          <div className="flex justify-between w-[78%] ">
            {partnerImgs.map((image, index) => (
              <img
                key={index}
                src={image.imageUrl}
                alt={image.header}
                className="w-[263px] h-[204px] object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
