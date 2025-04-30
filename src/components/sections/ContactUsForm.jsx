import Button from "../common/Button";
import InputForm from "../common/InputForm";
import ContactWay from "../common/ContactWay";
import { MdOutlineMail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
const inputs = [
  {
    placeholder: "Full name",
  },
  {
    placeholder: "Email",
  },
  {
    placeholder: "Message",
  },
];
function ConactUsForm() {
  return (
    <div className="flex gap-3 bg-[var(--fifth)] w-full items-center h-[603px] justify-evenly">
      <div className="w-[45%] h-[80%]">
        <div className="h-full">
          <div>
            <h2 className="text-[34px] font-bold mb-2">Contact Us</h2>
            <p className="text-[20px] font-bold">
              Feel free to contact us any time . we will get back to you as soon
              as we can !
            </p>
          </div>
          <div className="w-full mt-16">
            <InputForm inputs={inputs} />
            <Button margin="mt-14" padding="py-2 px-3" width="w-full">
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#E0E0E0] w-[42%] h-[75%] flex justify-center items-center">
        <div className="w-[85%] gap-5 h-[74%]">
          <div>
            <h2 className="text-[34px] font-bold">Info</h2>
          </div>
          <div className="mt-[6.75rem]">
            <ContactWay
              contactIcon={<MdOutlineMail className="w-[24px] h-[24px]" />}
            >
              Email: support@yourwebsite.com
            </ContactWay>
            <ContactWay contactIcon={<LuPhone className="w-[24px] h-[24px]" />}>
              Phone: +123 456 7890
            </ContactWay>
            <ContactWay
              contactIcon={<SlLocationPin className="w-[24px] h-[24px]" />}
            >
              Address : 6 al haram street , cairo
            </ContactWay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConactUsForm;
