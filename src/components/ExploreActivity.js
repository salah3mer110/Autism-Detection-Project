// export default ExploreActivity;
import Activities from "./Activities";
import Educational_Videos from "../assets/Images/Home/Educational_Videos.png";
import Fun_Games from "../assets/Images/Home/Fun_Games.png";
import Creative_Drawing from "../assets/Images/Home/Creative_Drawing.png";
import Interactive_Communication from "../assets/Images/Home/Interactive_Communication.png";
const activities = {
  displayMode: "image",
  steps: [
    {
      imageUrl: Educational_Videos,
      header: "Educational Videos",
      desc: "Short, engaging videos to improve communication and understanding",
    },
    {
      imageUrl: Fun_Games,
      header: "Fun Games",
      desc: "Play-based activities to enhance cognitive and motor skills",
    },
    {
      imageUrl: Creative_Drawing,
      header: "Creative Drawing",
      desc: "Art-based exercises to boost creativity and fine motor skills",
    },
    {
      imageUrl: Interactive_Communication,
      header: "Interactive Communication",
      desc: "Tools to help your child improve social and language skills",
    },
  ],
};

function ExploreActivity() {
  return (
    <Activities
      activities={activities.steps}
      bgColor=""
      color=""
      padding="py-10"
      displayMode={activities.displayMode}
      width="w-[calc(90%)]"
      childWidth="w-[263px]"
      headerWidth="w-[339px]"
      innerHeaderFontSize="24"
      descSize="text-[20px]"
      fontWeight="font-normal"
      innerHeaderFontWeight="semibold"
      fontType="font-poppins"
    >
      Explore Our Activities
    </Activities>
  );
}

export default ExploreActivity;
