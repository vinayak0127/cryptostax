import React from "react";

const SignUpModal = ({ closeModal, hideDisplay }) => {
  return (
    <div className="ui">
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            closeModal(false);
            hideDisplay("block");
          }}
        >
          <i className="close icon"></i>
        </button>
      </div>
      <div className="ui modalContent ">
        <div className="modalBody">
          <div class="ui form">
            <div class="field">
              <div class="field">
                <label>Email</label>
                <div class="ui left icon input">
                  <input type="email" placeholder="Email" />
                  <i class="mail icon"></i>
                </div>
              </div>
              <label>Username</label>
              <div class="ui left icon input">
                <input type="text" placeholder="Username" />
                <i class="user icon"></i>
              </div>
            </div>
            <div class="field">
              <label>Password</label>
              <div class="ui left icon input">
                <input type="password" placeholder="Password" />
                <i class="lock icon"></i>
              </div>
            </div>
            <div class="ui animated vertical button secondary" tabindex="0">
              <div class="visible content"> SignUp</div>
              <div class="hidden content">
                <i class="check icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
