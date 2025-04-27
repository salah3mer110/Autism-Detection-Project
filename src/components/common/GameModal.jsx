import { FaArrowLeft } from "react-icons/fa6";

function GameModal({ onCloseGame, selectedGame }) {
  return (
    <>
      <FaArrowLeft
        className="w-[32px] h-[32px] ml-4 mt-4 cursor-pointer"
        onClick={onCloseGame}
      />
      <div className="w-[75%] h-svh mx-auto border-2 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={selectedGame.url}
          className="w-full h-svh"
          allowFullScreen
          title="Game"
        />
      </div>
    </>
  );
}

export default GameModal;
