import { React, useState } from "react";
import SignUpModal from "./SignUpModal";

const ShowSignUpBtn = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isDisplay, setDisplay] = useState("");
  return (
    <>
      <div
        className="ui animated button secondary"
        tabindex="0"
        style={{ display: isDisplay }}
      >
        <div className="visible content"> ✔ SighUp</div>
        <div
          className="hidden content OpenModalBtn"
          onClick={() => {
            setOpenModal(true);
            setDisplay("none");
          }}
        >
          <i className="signup icon"></i>
        </div>
      </div>
      <div>{openModal && <SignUpModal closeModal={setOpenModal} hideDisplay={setDisplay} />}</div>
    </>
  );
};

export const SignUp = () => {
  return (
    <>
      <ShowSignUpBtn />
    </>
  );
};
