import React from 'react';
import Flat from './flat';

class FlatList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clickedId: null
    };
  }

  setClickedId = (id) => {
    this.setState({ clickedId: id })
  }

  render() {
    return(
      <div className="flat-list">
        { this.props.flatList
          .map(flat =>
            <Flat key={ flat.id }
                  id={ flat.id }
                  name={ flat.name }
                  price={ flat.price }
                  currency={ flat.priceCurrency }
                  url={ flat.imageUrl }
                  lat={ flat.lat }
                  lng={ flat.lng}
                  setClickedId={ this.setClickedId }
                  clickedId={ this.state.clickedId }
                  selectFlat={ this.props.selectFlat } />)}
      </div>
    )
  }
}

export default FlatList;
