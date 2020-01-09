import React from 'react';

class Flat extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clicked: false
    };
  }

  handleClick = (id) => {
    this.setState({ clicked: !this.state.clicked })
    this.props.selectFlat([this.props.lat, this.props.lng])
    this.props.setClickedId(id)
  }

  render() {
    return(
      <div className={ this.props.clickedId === this.props.id ? "card active" : "card"} style={{ backgroundImage: `url(${ this.props.url }), linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)` }} onClick={ () => this.handleClick(this.props.id)}>
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
