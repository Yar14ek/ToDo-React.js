import React from "react";
import TodolistItem from "./TodolistItem";
import "./todolist.css";
const Todolist = ({
  todos,
  deliteItem,
  onToglImportant,
  onTogleDone,
  isShow,
  term
}) => {
  let showLIst = [];
  if (isShow === "all") {
    [...showLIst] = todos;
  } else {
    let active = [],
      done = [];
    todos.forEach(elem => (elem.done ? done.push(elem) : active.push(elem)));
    isShow==='done'?[...showLIst] = done:[...showLIst] = active
  }
  const item2 = showLIst.filter(elem=>{
    if(term.length===0){
      return elem
    }
    return elem.label.toLowerCase().indexOf(term.toLowerCase())>-1
  })
  
  const item = item2.map(elem => {
    const { id, ...elemProps } = elem;

    return (
      <li key={id} className="list-group-item d-flex justify-content-between">
        <TodolistItem
          {...elemProps}
          deliteItem={() => deliteItem(id)}
          onTogleDone={() => onTogleDone(id)}
          onToglImportant={() => onToglImportant(id)}
        />
      </li>
    );
  })

  return <ul className="list-group ">{item}</ul>;
};
export default Todolist;
