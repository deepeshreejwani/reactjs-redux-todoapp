import React, { useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Todoitem = (props) => {
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  const { item, updateTodo } = props;
  return (
    <li key={item.id} className="card">
      <div className="row">
        <div className="col-8">
          <textarea
            ref={inputRef}
            disabled={inputRef}
            defaultValue={item.item}
            onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
          />
        </div>
        <div className="col-4">
          <div className="btns">
            <button onClick={() => changeFocus()}>
              <AiFillEdit />
            </button>
            <button onClick={() => props.removeTodo(item.id)}>
              <IoClose />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Todoitem;
