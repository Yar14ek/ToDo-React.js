import React, { Component, Fragment } from "react";
import "./style.css";

class ItemAddForm extends Component {
  state = {
    label: "",
    error: false
  };
  onChangeLable = e => {
    this.setState({
      label: e.target.value
    });
  };
  onSubmit = e => {
    if (this.state.label === "") {
      e.preventDefault();
      this.setState({
        error: true
      });
    } else {
      const { addItem } = this.props;
      e.preventDefault();
      addItem(this.state.label);
      this.setState({
        label: "",
        error: false
      });
    }
  };

  render() {
    const error = this.state.error ? <h1 className="warning">Enter text</h1> : null;
    return (
      <Fragment>
        <form
          className="item-add-form d-flex justify-content-between"
          onSubmit={this.onSubmit}
          >
          <input
            type="text"
            className="form-control col-8"
            onChange={this.onChangeLable}
            placeholder="Enter ToDo"
            value={this.state.label}
            />
          <button className="btn col-3 btn-outline-secondary">Add item</button>
        </form>
            {error}
      </Fragment>
    );
  }
}

export default ItemAddForm;
