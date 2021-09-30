import React from "react";

const LogIn = () => {
  return (
    <div>
      <div class="ui form">
        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input type="text" placeholder="Username" />
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input type="password" />
            <i class="lock icon"></i>
          </div>
        </div>
        <div class="ui animated button secondary" tabindex="0">
          <div class="visible content"> ✔ Login</div>
          <div class="hidden content">
            <i class="right arrow icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
