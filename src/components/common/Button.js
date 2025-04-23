function Button({ children, padding, width, margin, position, onClick }) {
  return (
    <button
      className={`${position} bg-[var(--secondary)] text-[var(--fifth)] px-3 py-[10px] ${margin} ${width} font-poppins hover:bg-[#00AA60] transition-all duration-200 ${padding}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
