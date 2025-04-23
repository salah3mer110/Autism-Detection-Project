import EngagingActivities from "../../assets/Images/AboutUs/Engaging_Activities.png";
import ExpertInsights from "../../assets/Images/AboutUs/Expert_Insights_&_Guidance.png";
import PersonalizedAssessments from "../../assets/Images/AboutUs/Personalized_Autism_Assessments.png";
import Activities from "../Activities.js";
const activities = {
  displayMode: "image",
  steps: [
    {
      imageUrl: PersonalizedAssessments,
      header: "Personalized Autism Assessments ",
      desc: "Understand your child’s behavior through video analysis",
    },
    {
      imageUrl: EngagingActivities,
      header: "Engaging Activities ",
      desc: " Games, videos, and interactive exercises designed for growth",
    },
    {
      imageUrl: ExpertInsights,
      header: "Expert Insights & Guidance",
      desc: "Trusted information to help you navigate your journey",
    },
  ],
};

function WhatWeOffer() {
  return (
    <Activities
      activities={activities.steps}
      bgColor=""
      color=""
      padding="py-10"
      displayMode={activities.displayMode}
      width="w-[calc(80%)]"
      childWidth="w-[312px]"
      headerFontSize="48"
      innerHeaderFontSize="32"
      fontWeight="font-medium"
      descSize="text-[24px]"
      imgHeight="117"
      imgWidth="117"
      contianerWidth="312"
      contianerPadding="p-4"
      contianerBgColor="var(--fifth)"
      innerHeaderFontWeight="bold"
      hover="hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      What We Offer
    </Activities>
  );
}

export default WhatWeOffer;
