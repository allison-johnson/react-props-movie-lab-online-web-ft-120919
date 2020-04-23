import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = () => {
    // implement meeeee! See the readme for instructions
    if(this.props.IMDBRating) {
      return (
        <img src={imgMapper[this.props.IMDBRating]} alt="" />
      )
    } else {
      return (<h4>No Rating Found</h4>)
    }//if/else
    
  }//generateRatingElement

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement() }
        <span />
        <h5 className="genres">{this.props.genres.join(", ")}</h5>
      </div>
    )
  }
}

// it("correctly renders the title prop", () => {
//   expect(text).to.contain('Rolling in the Deep')
// })

// it("correctly renders the genres prop as comma seperated strings", () => {
//   expect(text).to.contain(genres.join(', '))
// })

// it("renders 'No Rating Found' in an <h4> if the IMDBRating prop is null", () => {
//   const nullRating = shallow(<CardBack title="Rolling in the Deep" genres={['s']} IMDBRating={null} />)
//   expect(nullRating.find('h4').text().toLowerCase()).to.equal('no rating found')
// })

// it("renders an <img> tag if the IMDBRating prop is valid", () => {
//   expect(cardBack.find('img').exists()).to.equal(true)
// })
