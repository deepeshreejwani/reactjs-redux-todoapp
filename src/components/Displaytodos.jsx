import React from "react";
import { addTodos, removeTodos, updateTodo } from "../redux/reducer";
import { connect } from "react-redux";
import Todoitem from "./Todoitem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
  };
};

const Displaytodos = (props) => {
  return (
    <div className="displaytodos">
      <ul>
        <div>
          {props.todos.length > 0
            ? props.todos.map((item) => {
                return (
                  <Todoitem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                  />
                );
              })
            : null}
        </div>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Displaytodos);
