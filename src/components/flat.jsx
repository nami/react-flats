import React from 'react';

class Flat extends React.Component {
  render() {
    return(
      <div className="card" style={{ backgroundImage: `url(${ this.props.url }), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)` }}>
        <div className="card-category">{ this.props.price } { this.props.currency }</div>
        <div className="card-description">
          <h2>{ this.props.name }</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
