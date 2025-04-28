import Button from "../common/Button";
import InputForm from "../common/InputForm";
import LoginHeader from "../common/LoginHeader";
import SignUpInToggleBtn from "../common/SignUpInToggleBtn";

const inputs = [
  {
    name: "email",
    placeholder: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
  },
];

function SignInForm({
  handleHasAccount,
  hasAccount,
  handleChange,
  formData,
  setFormData,
  handleSubmit,
}) {
  return (
    <div className="max-w-sm w-full text-gray-600 space-y-5">
      <LoginHeader>Log in to your account</LoginHeader>
      <form className="">
        <InputForm inputs={inputs} onChange={handleChange} values={formData} />

        <Button
          margin="mt-14"
          padding="py-2 px-3"
          width="w-full"
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </form>
      <button className="w-full flex items-center justify-center gap-x-3 py-2.5 border text-sm font-medium bg-[#EEEEEE] hover:bg-gray-50 duration-150 active:bg-gray-100">
        {/* <!-- SVG for Google Sign In --> */}
        <img
          src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
          alt="Google"
          className="w-5 h-5"
        />
        {/* <!-- Comment: Google Icon SVG here --> */}
        Continue with Google
      </button>
      <SignUpInToggleBtn
        handleHasAccount={handleHasAccount}
        hasAccount={hasAccount}
      />
    </div>
  );
}

export default SignInForm;
