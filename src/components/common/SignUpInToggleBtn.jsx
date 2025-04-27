function SignUpInToggleBtn({ handleHasAccount, hasAccount }) {
  return (
    <p className="text-center">
      {hasAccount === -1
        ? `Don't have an account?`
        : `Already have an account?`}
      <a
        href="javascript:void(0)"
        className="font-medium text-[var(--secondary)] ml-2 hover:text-[#00AA60]"
        onClick={handleHasAccount}
      >
        {hasAccount === -1 ? `Sign up` : `Sign in`}
      </a>
    </p>
  );
}

export default SignUpInToggleBtn;
