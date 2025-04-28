import { useState } from "react";
import SignInForm from "../components/sections/SignInForm";
import SignUpForm from "../components/sections/SignUpForm";
import { FaTimes } from "react-icons/fa";

function SignIn({ onCloseSignIn }) {
  const [hasAccount, setHasAccount] = useState(true);
  const [signUpMobility, setSignUpMobility] = useState(1);
  const [formData, setFormData] = useState(
    !hasAccount
      ? {
          fullname: "",
          childFullname: "",
          email: "",
          childAge: "",
          skill: "",
          preferredActivities: "",
          password: "",
          confirmPassword: "",
        }
      : {
          email: "",
          password: "",
        }
  );

  function handleChange(fieldName, value) {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  }

  function handleHasAccount(e) {
    e.preventDefault();
    setHasAccount((account) => !account);
    setSignUpMobility(1);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({});
  };
  return (
    <div
      className={`fixed z-[100] inset-0 w-full flex justify-center items-center font-nunito`}
    >
      <div
        className="absolute inset-0 z-[-1] w-full h-full bg-[#000] opacity-40"
        onClick={onCloseSignIn}
      ></div>
      <div className=" relative w-[60%] bg-[var(--fifth)] flex flex-col items-center justify-center px-4 py-10">
        <FaTimes
          onClick={onCloseSignIn}
          className="absolute right-3 top-3 w-6 h-6 text-[#8E8585] rounded-full transition-all hover:text-[#555555] duration-100 cursor-pointer"
        />
        {hasAccount ? (
          <SignInForm
            handleHasAccount={handleHasAccount}
            hasAccount={hasAccount}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        ) : (
          <SignUpForm
            handleHasAccount={handleHasAccount}
            hasAccount={hasAccount}
            signUpMobility={signUpMobility}
            setSignUpMobility={setSignUpMobility}
            handleChange={handleChange}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default SignIn;
