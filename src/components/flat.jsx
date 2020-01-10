import React from 'react';

class Flat extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick = (id) => {
    this.props.selectFlat([this.props.flat.lat, this.props.flat.lng])
    this.props.setClickedId(id)
  }

  render() {
    return(
      <div className={ this.props.clickedId === this.props.flat.id ? "card active" : "card"} style={{ backgroundImage: `url(${ this.props.flat.imageUrl }), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)` }} onClick={ () => this.handleClick(this.props.flat.id)}>
        <div className="card-category">{ this.props.flat.price } { this.props.flat.priceCurrency }</div>
        <div className="card-description">
          <h2>{ this.props.flat.name }</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
