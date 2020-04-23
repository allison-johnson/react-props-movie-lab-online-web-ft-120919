import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    console.log(this.props.image)
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
// it('uses the poster prop as a background image, rendering only the necessary HTML', () => {
//   const cardFront = shallow(<CardFront poster="you spin me right round"/>)
//   expect(cardFront.html()).to.equal('<div class="card-front" style="background-image:url(you spin me right round)"></div>')
// })