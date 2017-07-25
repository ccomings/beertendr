import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class BeerIndexItem extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/beers/${this.props.id}`}>
          <ul className="index-list-item">
            <li><img src={this.props.beer.image_url} className="list-images"/>
            </li>
            <li><h4>{this.props.beer.name}</h4></li>
            <li><h4>{this.props.beer.brewery.name}</h4></li>
            <li><h4>{this.props.beer.abv}</h4></li>
            <li><h4>{this.props.beer.ibu}</h4></li>
          </ul>
        </Link>
      </div>
    );
  }
}

export default withRouter(BeerIndexItem);
