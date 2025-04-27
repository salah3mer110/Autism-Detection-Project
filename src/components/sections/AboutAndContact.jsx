import Star from "../iconsComponents/Star";

function AboutAndContact({ AboutAndContactContent }) {
  return (
    <div
      className={`relative bg-[var(--secondary)] text-[var(--primary)] flex flex-col items-center h-full text-center`}
    >
      <Star
        className={`absolute z-60 fill-[#fff] w-[27px] h-[27px] top-[100px] right-[550px]`}
      />
      <h2 className="absolute top-[114px] font-bold text-[48px]">
        {AboutAndContactContent.title}
      </h2>
      <p className="font-medium text-[34px] absolute top-[222px] ">
        {AboutAndContactContent.desc}
      </p>
    </div>
  );
}

export default AboutAndContact;
