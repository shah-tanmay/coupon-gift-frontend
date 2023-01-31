import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../../firebase";
import { toast } from "react-toastify";
import Button from "../../Button";
import Input from "../../Input";
import CustomModal, { ModalProps } from "../../Modal";

const ComingSoonModal = (props: ModalProps) => {
  const [email, setEmail] = useState<string>("");
  const getEmail = async () => {
    const docRef = await addDoc(collection(db, "coming-soon-mails"), {
      email,
    });
    if (docRef.id != null) {
      toast.success("You'll be notified once our site is live!");
    }
  };
  return (
    <CustomModal {...props}>
      <div className="w-full grid place-items-center text-center font-serif">
        <div className="lg:text-[40px] md:text-[30px] text-[25px] uppercase font-bold">
          Sign up now !
        </div>
        <div className="lg:text-[25px] md:text-[20px] text-[16px]">
          And be the first to know when we go live!
        </div>
        <Input
          placeholder="Enter your email here."
          className="my-5"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <div className="lg:pb-3 md:pb-5 pb-16">
          <Button text="Subscribe Now" onClick={getEmail} />
        </div>
      </div>
    </CustomModal>
  );
};

export default ComingSoonModal;
