import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import Todolist from "./components/ToDoList";
import ItemAddForm from "./components/ItemAddForm";

class App extends Component {
  maxId = 10;//generate id
  state = {
    todoData: [
      this.criateItem("Nid a job"),
      this.criateItem("Drink koffee"),
      this.criateItem("Avesome React App"),
      this.criateItem("Finish this App")
    ],
    isShow: "all",
    term: ""
  };
  criateItem(label) {
    return {
      label,
      done: false,
      important: false,
      id: this.maxId++
    };
  }
  deliteItem(id) {
    this.setState(({ todoData }) => {
      const [...newArr] = todoData;
      newArr.forEach((el, i) => {
        if (el.id === id) {
          newArr.splice(i, 1);
        }
      });
      return { todoData: newArr };
    });
  }
  addItem(text) {
    const newItem = this.criateItem(text);
    this.setState(({ todoData }) => {
      const [...newArr] = todoData;
      newArr.push(newItem);
      return { todoData: newArr };
    });
  }
  togleProps(arr, id, propName) {
    const [...newArr] = arr;
    newArr.forEach(el => {
      if (el.id === id) {
        el[propName] = !el[propName];
      }
    });
    return newArr;
  }
  onTogleDone(id) {
    this.setState(({ todoData }) => {
      return { todoData: this.togleProps(todoData, id, "done") };
    });
  }
  onToglImportant(id) {
    this.setState(({ todoData }) => {
      return { todoData: this.togleProps(todoData, id, "important") };
    });
  }
  showStatusItem(text) {
    this.setState({
      isShow: text
    });
  }
  filter(text) {
    this.setState({
      term: text
    });
  }

  render() {
    const { todoData, isShow, term } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    const style = {
      width: "400px",
      margin: "0 auto"
    };
    return (
      <div style={style}>
        <AppHeader done={doneCount} todo={todoCount} />
        <SearchPanel
          filter={text => this.filter(text)}
          showStatusItem={text => {
            this.showStatusItem(text);
          }}
          isShow={isShow}
        />
        <Todolist
          todos={todoData}
          isShow={isShow}
          term={term}
          deliteItem={id => this.deliteItem(id)}
          onTogleDone={id => this.onTogleDone(id)}
          onToglImportant={id => this.onToglImportant(id)}
        />
        <ItemAddForm addItem={text => this.addItem(text)} />
      </div>
    );
  }
}
export default App;
