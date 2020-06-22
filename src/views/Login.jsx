import React from "react";
import { connect } from "react-redux"; 

const Login = ({ user }) => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Bonjour, je suis {user.name} alias {user.nickname}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
