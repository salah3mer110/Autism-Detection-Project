function SignUpInToggleBtn({ handleHasAccount, hasAccount }) {
  return (
    <p className="text-center">
      {hasAccount ? `Don't have an account?` : `Already have an account?`}
      <a
        href="javascript:void(0)"
        className="font-medium text-[var(--secondary)] ml-2 hover:text-[#00AA60]"
        onClick={handleHasAccount}
      >
        {hasAccount ? `Sign up` : `Sign in`}
      </a>
    </p>
  );
}

export default SignUpInToggleBtn;
