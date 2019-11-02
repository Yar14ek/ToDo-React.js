import React, { Component } from "react";
import ItemStatusFiltr from "./ItemStatusFiltr";
import "./searchPanelStyle.css";
class SearchPanel extends Component {
  state = {
    label: ""
  };
  onChangeList = e => {
    const label = e.target.value;
    this.setState({ label });
    this.props.filter(label);
  };

  render() {
    const { showStatusItem, isShow } = this.props;
    return (
      <div className="d-flex align-items-center mb-1">
        <input
          className="search-input form-control"
          type="text"
          placeholder="Found"
          onChange={this.onChangeList}
          value={this.state.label}
        />
        <ItemStatusFiltr
          showStatusItem={text => showStatusItem(text)}
          isShow={isShow}
        />
      </div>
    );
  }
}
export default SearchPanel;
