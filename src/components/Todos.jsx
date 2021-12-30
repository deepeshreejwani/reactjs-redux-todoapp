import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const add = () => {
    if (todo === "") {
      alert("Input is Empty Add Todo");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
      });
      setTodo("");
    }
  };
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        placeholder="Add a Item"
        value={todo}
      />
      <button className="add-btn" onClick={() => add()}>
        <GoPlus />
      </button>
      <br />
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
