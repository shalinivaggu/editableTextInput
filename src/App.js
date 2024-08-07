import {Component} from 'react'
import {GlobalDiv, Form, InnerDiv, Btn, Input, Para} from './styledComponents'
import './App.css'

// Replace your code here
class App extends Component {
  state = {text: '', save: false}

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onClickSubmit = event => {
    event.preventDefault()
    this.setState(prevState => ({save: !prevState.save}))
  }

  render() {
    const {text, save} = this.state
    return (
      <GlobalDiv>
        <Form onSubmit={this.onClickSubmit}>
          <h1>Editable Text Input</h1>
          {save ? (
            <InnerDiv>
              <Para>{text}</Para>
              <div>
                <Btn type="submit">Edit</Btn>
              </div>
            </InnerDiv>
          ) : (
            <InnerDiv>
              <Input type="text" onChange={this.onChangeText} value={text} />
              <Btn type="submit">Save</Btn>
            </InnerDiv>
          )}
        </Form>
      </GlobalDiv>
    )
  }
}

export default App
