import React from 'react';
import Flat from './flat';

class FlatList extends React.Component {
  render() {
    return(
      <div className="flat-list">
        { this.props.flatList.map(flat => <Flat key={ flat.id } name={ flat.name } price={ flat.price } currency={ flat.priceCurrency } url={ flat.imageUrl } />)}
      </div>
    )
  }
}

export default FlatList;
