import LoginHeader from "../common/LoginHeader";
import SignUpInToggleBtn from "../common/SignUpInToggleBtn";
import Button from "../common/Button";
import InputForm from "../common/InputForm";
import SignUpCircle from "../common/SignUpCircle";
import SignUpLine from "../common/SignUpLine";

const inputs = {
  1: [
    { name: "fullname", placeholder: "Fullname", type: "text" },
    { name: "childFullname", placeholder: "Child Fullname", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
  ],
  2: [
    { name: "childAge", placeholder: "Child Age", type: "number" },
    { name: "skill", placeholder: "Skill you want to develop", type: "text" },
    {
      name: "preferredActivities",
      placeholder: "Preferred Activities",
      type: "text",
    },
  ],
  3: [
    { name: "password", placeholder: "Password", type: "password" },
    {
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
    },
  ],
};

function SignUpForm({
  handleHasAccount,
  hasAccount,
  signUpMobility,
  setSignUpMobility,
  handleChange,
  formData,
  handleSubmit,
}) {
  function handleSignUpNext(e, btnType) {
    e.preventDefault();
    if (btnType === "Create Account") handleSubmit(e);

    if (signUpMobility < 3) setSignUpMobility((mobility) => mobility + 1);
  }
  function handleSignUpBack(e) {
    e.preventDefault();
    if (signUpMobility > 1) setSignUpMobility((mobility) => mobility - 1);
  }

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
        <InputForm
          inputs={inputs[signUpMobility <= 3 ? signUpMobility : 3]}
          onChange={handleChange}
          values={formData}
        />

        <div
          className={`${
            signUpMobility !== 1 ? `flex justify-between` : `text-end`
          }`}
        >
          {signUpMobility !== 1 && (
            <Button
              margin="mt-14"
              padding="py-2 px-6"
              onClick={handleSignUpBack}
            >
              Back
            </Button>
          )}

          <Button margin="mt-14" padding="py-2 px-6" onClick={handleSignUpNext}>
            {signUpMobility === 3 ? `Create Account` : `Next`}
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
