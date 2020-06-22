import React, { useState } from "react";
import { connect } from "react-redux";
import { changeName } from "../actions/userActions";

const User = (props) => {
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeName(name);
  };
  return (
    <div>
      <p>Le nom actuel est {props.user.name}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="changename">Changement du nom</label>
          <input
            type="text"
            name="changename"
            onChange={handleChangeName}
            placeholder="changement de nom..."
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name) => dispatch(changeName(name)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
