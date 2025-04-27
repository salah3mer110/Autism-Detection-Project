import GameModal from "../components/common/GameModal";
import GamesContainer from "../components/common/GamesContainer";
import Sidebar from "../components/common/SideBar";
import Game from "../components/common/Game";
import chessOnlineImg from "../assets/Images/Activities/Games/Chess.jpg";
import ticToeImg from "../assets/Images/Activities/Games/TicToe.jpeg";
import ludoWorldImg from "../assets/Images/Activities/Games/LudoWorld.jpg";
import gtaImg from "../assets/Images/Activities/Games/gta.jpg";
import { useState } from "react";
import Button from "../components/common/Button";

const games = [
  {
    id: 1,
    title: "Chess Online",
    desc: "Play chess against the computer or friends",
    imgUrl: chessOnlineImg,
    url: "https://html5.gamedistribution.com/b80ebde6ee1b4adfaa96398a4261db80/?gd_sdk_referrer_url=https://www.example.com/games/chess-online",
  },
  {
    id: 2,
    title: "Tic Toe",
    desc: "Classic X and O game",
    imgUrl: ticToeImg,
    url: "https://html5.gamedistribution.com/28ca14de47374a79adfb2a64460f6219/?gd_sdk_referrer_url=https://www.example.com/games/tic-toe}",
  },
  {
    id: 3,
    title: "GTA: Grand Vegas Crime",
    desc: "Play real world GTA game",
    imgUrl: gtaImg,
    url: "https://html5.gamedistribution.com/828864726be944c2bff67fa68d505e96/?gd_sdk_referrer_url=https://gamedistribution.com/games/gta:-grand-vegas-crime/",
  },
];

function Activities() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [isGameOpen, setIsGameOpen] = useState(false);
  function handleGameClick(gameId) {
    const game = games.find((g) => g.id === gameId);
    setSelectedGame(game);
    setIsGameOpen(true);
  }
  function handleGameClose() {
    setIsGameOpen(false);
  }
  return (
    <div className="flex font-nunito ">
      <Sidebar />
      {isGameOpen ? (
        <GameModal onCloseGame={handleGameClose} selectedGame={selectedGame} />
      ) : (
        <GamesContainer>
          {games.map((game, index) => (
            <Game
              img={game.imgUrl}
              desc={game.desc}
              title={game.title}
              key={index}
            >
              <Button padding="px-8" onClick={() => handleGameClick(index + 1)}>
                Play
              </Button>
            </Game>
          ))}
        </GamesContainer>
      )}
    </div>
  );
}
export default Activities;
