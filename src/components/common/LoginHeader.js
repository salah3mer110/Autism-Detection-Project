function LoginHeader({ children }) {
  return (
    <div className="text-center pb-8">
      <div className="mt-5">
        <h3 className="text-[var(--secondary)] text-2xl font-bold sm:text-3xl">
          {children}
        </h3>
      </div>
    </div>
  );
}

export default LoginHeader;
