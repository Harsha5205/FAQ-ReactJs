// Write your code here.
import './index.css'
import {Component} from 'react'

class Question extends Component {
  state = {isActive: false}

  buttonClicked = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  render() {
    const {isActive} = this.state
    const {faqsData} = this.props
    const {questionText, answerText} = faqsData
    const plusMinusImage = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altProp = isActive ? 'minus' : 'plus'

    return (
      <li className="list-item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <img
            src={plusMinusImage}
            alt={altProp}
            onClick={this.buttonClicked}
          />
        </div>
        {isActive && <hr className="horizontal-line" />}
        {isActive && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}

export default Question
