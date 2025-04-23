import { useState } from "react";
import SignInForm from "../components/sections/SignInForm";
import SignUpForm from "../components/sections/SignUpForm";
import { FaTimes } from "react-icons/fa";

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

function SignIn({ onCloseSignIn }) {
  const [hasAccount, setHasAccount] = useState(-1);
  const [signUpMobility, setSignUpMobility] = useState(1);
  function handleHasAccount(e) {
    e.preventDefault();
    setHasAccount((account) => -account);
    setSignUpMobility(1);
  }

  function handleSignUpNext(e) {
    e.preventDefault();
    if (signUpMobility < 3) setSignUpMobility((mobility) => mobility + 1);
  }
  function handleSignUpBack(e) {
    e.preventDefault();
    if (signUpMobility > 1) setSignUpMobility((mobility) => mobility - 1);
  }
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
        {hasAccount === -1 ? (
          <SignInForm
            handleHasAccount={handleHasAccount}
            hasAccount={hasAccount}
          />
        ) : (
          <SignUpForm
            handleHasAccount={handleHasAccount}
            hasAccount={hasAccount}
            onNext={handleSignUpNext}
            onBack={handleSignUpBack}
            signUpMobility={signUpMobility}
            setSignUpMobility={setSignUpMobility}
          />
        )}
      </div>
    </div>
  );
}

export default SignIn;
{
  /* <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-x-3">
              <input
                type="checkbox"
                id="remember-me-checkbox"
                class="checkbox-item peer hidden"
              />
              <label
                for="remember-me-checkbox"
                class="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
              ></label>
              <span>Remember me</span>
            </div>
            <a
              href="javascript:void(0)"
              class="text-center text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </a>
          </div> */
}

{
  /* <div>
            <label class="font-medium"> Email </label>
            <input
              type="email"
              required
              class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div>
          <div>
            <label class="font-medium"> Password </label>
            <input
              type="password"
              required
              class="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            />
          </div> */
}
{
  /* <div className="fixed z-[100] inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-30 z-[-1]"></div> */
}
