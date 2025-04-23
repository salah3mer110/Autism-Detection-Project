import LoginHeader from "../../components/common/LoginHeader";
import SignUpInToggleBtn from "../../components/common/SignUpInToggleBtn";
import Button from "../../components/common/Button";
import InputForm from "../../components/common/InputForm";
import SignUpCircle from "../../components/common/SignUpCircle";
import SignUpLine from "../../components/common/SignUpLine";
const inputs = {
  1: [
    {
      placeholder: "Fullname",
    },
    {
      placeholder: "Child Fullname",
    },
    {
      placeholder: "Email Address",
    },
  ],
  2: [
    {
      placeholder: "Child Age",
    },
    {
      placeholder: "Skill you want to develop",
    },
    {
      placeholder: "Preferred Activities ",
    },
  ],
  3: [
    {
      placeholder: "Password",
    },
    {
      placeholder: "confirm password",
    },
  ],
};
function SignUpForm({
  handleHasAccount,
  hasAccount,
  onNext,
  signUpMobility,
  onBack,
}) {
  return (
    <div className="max-w-sm w-full text-gray-600 space-y-5">
      <LoginHeader>Sign Up</LoginHeader>
      <div className="flex items-center justify-center">
        <SignUpCircle bgColor="bg-[var(--secondary)]">1</SignUpCircle>
        <SignUpLine
          bgColor={`${
            signUpMobility >= 2 ? `bg-[var(--secondary)]` : `bg-[#B5B5B5]`
          }`}
        />
        <SignUpCircle
          bgColor={`${
            signUpMobility >= 2 ? `bg-[var(--secondary)]` : `bg-[#8E8585]`
          }`}
        >
          2
        </SignUpCircle>
        <SignUpLine
          bgColor={`${
            signUpMobility === 3 ? `bg-[var(--secondary)]` : `bg-[#B5B5B5]`
          }`}
        />
        <SignUpCircle
          bgColor={`${
            signUpMobility === 3 ? `bg-[var(--secondary)]` : `bg-[#8E8585]`
          }`}
        >
          3
        </SignUpCircle>
      </div>
      <form className="">
        <InputForm inputs={inputs[signUpMobility <= 3 ? signUpMobility : 3]} />
        <div
          className={`${
            signUpMobility !== 1 ? `flex justify-between` : `text-end`
          }`}
        >
          {signUpMobility !== 1 && (
            <Button margin="mt-14" padding="py-2 px-6" onClick={onBack}>
              Back
            </Button>
          )}

          <Button margin="mt-14" padding="py-2 px-6" onClick={onNext}>
            {signUpMobility === 3 ? `Sign Up` : `Next`}
          </Button>
        </div>
      </form>
      <SignUpInToggleBtn
        handleHasAccount={handleHasAccount}
        hasAccount={hasAccount}
      />
    </div>
  );
}

export default SignUpForm;
