import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SearchIndexItem extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(e) {
    e.preventDefault();
    this.props.receiveSelectedBeerId(this.props.item.id);
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.props.item.name}
      </div>
    );
  }
}

export default withRouter(SearchIndexItem);
