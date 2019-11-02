import React, { Component } from "react";
import "./searchPanelStyle.css";
class ItemStatusFiltr extends Component {
  render() {
    const buttons = [
      { name: "all", label: "All" },
      { name: "done", label: "Done" },
      { name: "active", label: "Active" }
    ];

    const btn = buttons.map(elem => {
      let classEl =
        elem.name === this.props.isShow ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          key={elem.name}
          onClick={() => this.props.showStatusItem(elem.name)}
          className={`btn-status btn ${classEl}`}
        >
          {elem.label}
        </button>
      );
    });
    return <div className="btn-group">{btn}</div>;
  }
}
export default ItemStatusFiltr;
