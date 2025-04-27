function Game({ title, desc, img, children }) {
  return (
    <div className="w-[334px] p-4 bg-[var(--primary)] flex items-center flex-col">
      <img src={img} alt={title} className="w-[302px] h-[232px]" />
      <div className="w-[302px] mt-2 mb-2 font-poppins">
        <h3 className="text-[20px] font-medium ">{title}</h3>
        <p className="text-[18px] font-medium text-[#333333]">{desc}</p>
      </div>
      {children}
    </div>
  );
}

export default Game;
