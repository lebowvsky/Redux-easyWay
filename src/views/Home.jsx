import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName, changeNickname } from "../actions/userActions";

const Home = (props) => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeName(name);
    props.changeNickname(nickname);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="name">Nom </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleName}
            placeholder="nom..."
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="nickname">Surnom </label>
          <input
            type="text"
            name="nickname"
            id="nickname"
            onChange={handleNickname}
            placeholder="surnom..."
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => {
      dispatch(changeName(name));
    },
    changeNickname: (nickname) => {
      dispatch(changeNickname(nickname));
    },
  };
};

export default connect(null, mapDispatchToProps)(Home);
