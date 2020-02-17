import React from 'react'
import Typed from 'typed.js'

export default class TypedReactTagline extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    // const { strings } = this.props;
    const strings = [
      '<strong>Warriors</strong> > worriers',
      'Give a <i>S*#T?</i> ...Picket!',
      'Make your future',
      'Stand up and shout',
      'Unite and fight'
    ]
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 60,
      loop: true
    }
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy()
  }

  render() {
    return (
      <div className="wrap">
        <div className="type-wrap">
          <span
            style={{whiteSpace: 'pre'}}
            ref={el => {
              this.el = el
            }}
          />
        </div>
      </div>
    )
  }
}

// ReactDOM.render(
// 	<TypedReactDemo
//     strings={[
//     	'Some <i>strings</i> are slanted',
//       'Some <strong>strings</strong> are bold',
//       'HTML characters &times; &copy;'
//     ]}
//   />,
//   document.getElementById('react-root')
// );
