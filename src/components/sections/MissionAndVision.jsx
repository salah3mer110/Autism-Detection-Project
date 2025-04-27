import { FaArrowDown } from "react-icons/fa6";
function MissionAndVision() {
  return (
    <div className=" flex justify-center h-full pt-24">
      <div className=" w-[86%] flex pt-40 pb-20">
        <div className="w-[45%] flex mt-10">
          <h3 className="font-bold text-[48px] ">Mission & Vision</h3>
          <FaArrowDown className="w-[49.04px] h-[62.75px] rotate-[-51.07deg] ml-8" />
        </div>
        <div className="font-medium text-[32px] w-[50%]">
          <p className="mb-8">
            Our mission is to provide parents with the right tools and resources
            to support their child’s development. Through interactive
            activities, expert insights, and personalized guidance, we aim to
            create a positive and engaging learning environment for children
            with autism
          </p>
          <p>
            Our vision is To make early autism support accessible to all
            families, helping every child reach their full potential
          </p>
        </div>
      </div>
    </div>
  );
}

export default MissionAndVision;
