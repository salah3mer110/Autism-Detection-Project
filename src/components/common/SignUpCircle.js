function SignUpCircle({ bgColor, children }) {
  return (
    <div
      className={`cursor-default rounded-full ${bgColor} w-8 h-8 text-[var(--fifth)] font-semibold text-[18px] flex items-center justify-center`}
    >
      {children}
    </div>
  );
}

export default SignUpCircle;
