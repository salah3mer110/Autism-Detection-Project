import autismImage from "../assets/Images/Home/autism.png";
function WhatIsAutism() {
  return (
    <div className="w-[calc(85%)] flex justify-between items-center py-24">
      <div className="relative">
        <div className="bg-[var(--secondary)] w-[293px] h-[322px] absolute top-[169px] left-[196px] z-0"></div>
        <img
          className="w-[456px] h-[456px] relative"
          src={autismImage}
          alt="Autism Image"
        />
      </div>
      <div className="w-[501px]">
        <h2 className="text-[44px] font-bold w-[89%]">
          What is Autism Spectrum Disorder?
        </h2>
        <p className="text-[20px] font-medium w-full">
          Autism Spectrum Disorder (ASD) is a neurological condition that
          affects how a child interacts with the world around them.
          Understanding autism is the first step in helping your child grow and
          develop
        </p>
      </div>
    </div>
  );
}

export default WhatIsAutism;
