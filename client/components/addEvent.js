// import React from 'react';
// import {connect} from 'react-redux';
// import {submitEvent, handleChange} from '../store/event'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import EventForm from './eventForm'

// class AddEvent extends React.Component{
//   constructor(props){
//     super(props)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   componentDidMount(){
//     this.props.me()
//     console.log('CDM PROPS', this.props)
//   }

//   handleSubmit(event){
//     event.preventDefault()
//     const organizerId = this.props.user.id
//     const eventForm = {...this.props.eventForm, ...organizerId}
//     this.props.submitEvent(eventForm)
//     // this.props.clearFormChange()
//   }

//   render(){

//   return (
//     <div>
//       <EventForm {...this.props.eventForm} handleChange={this.props.handleChange} handleSubmit={this.handleSubmit} classes={this.classes}/>
//     </div>
//     );
//   }
// }

// const mapStateToProps = function(state){
//   return {
//     eventForm: state.eventForm
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//    return {
//      submitEvent: (event) => dispatch(submitEvent(event)),
//      handleChange: (event) => {
//        const form = {[event.target.name]: event.target.value}
//        dispatch(handleChange(form))
//      }
//    }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AddEvent)
