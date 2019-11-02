import React, { Fragment } from "react";
import './todolist.css'
const TodolistItem = props => {
  const {
    label,
    deliteItem,
    onToglImportant,
    onTogleDone,
    done,
    important
  } = props;

  const style = {
    color: important ? "steelblue" : "black",
    fontWeight: important ? "bold" : "normal"
  };
  const classNames = done ? "todo-list-item done" : "todo-list-item";

  return (
    <Fragment>
      <span className={classNames}>
        <span
          className="todo-list-item-label "
          style={style}
          onClick={() => onTogleDone()}
        >
          {label}
        </span>
      </span>
      <div >
      <button
        type="button"
        className="btn btn-outline-success btn-sm item-btn"
        onClick={() => onToglImportant()}
      >
        <i className="fa fa-exclamation" />
      </button>
      <button type="button" className="btn btn-outline-danger btn-sm item-btn">
        <i className="fa fa-trash-o" onClick={deliteItem} />
      </button>
      </div>
    </Fragment>
  );
};

export default TodolistItem;
