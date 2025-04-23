import Activities from "./Activities";
const activities = {
  steps: [
    {
      number: "01",
      header: "Upload a Video of Your Child",
      desc: "Our experts or AI will analyze their behavior",
    },
    {
      number: "02",
      header: "Receive a Personalized Report",
      desc: "Get insights on potential autism levels and recommended activities.",
    },
    {
      number: "03",
      header: "Start the Development Journey",
      desc: "Try suggested activities to support your child's growth",
    },
  ],
};
function HowWebsiteHelp() {
  return (
    <Activities
      activities={activities.steps}
      innerHeaderFontSize="24"
      fontType="font-nunito"
      innerHeaderFontWeight="font-bold"
      childWidth="w-[calc(27.5%)]"
    >
      How Does Our Website Help You?
    </Activities>
  );
}

export default HowWebsiteHelp;
