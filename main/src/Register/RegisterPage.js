import { React, useEffect, useState } from "react";
import LogIn from "./LogIn";
import { SignUp } from "./SignUp";

export const RegisterPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 767;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div>
      <div>
        <h1 className="ui header centered">🎉 Welcome to crypto stax 🤝 </h1>
      </div>
      <div className="ui placeholder segment container">
        <div className="ui two column very relaxed stackable grid">
          <div className="column">
            <LogIn />
          </div>
          <div className="middle aligned column">
            <SignUp />
          </div>
        </div>
        <div
          className={`${
            isMobile
              ? "ui hidden message horizontal divider"
              : "ui visible vertical  divider"
          }`}
        >
          Or
        </div>
      </div>
    </div>
  );
};
