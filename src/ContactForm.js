import React, { Component } from 'react'

 class ContactForm extends Component {
    constructor(props){

        super(props);
        this.state={name:""};
       
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){

        this.setState({name:event.target.value});
    }


  render() {
    return (
      <div>
        <h2>Contact Form</h2>
        <form>


         <label htmlFor='name'>Name:</label>
         <input type="text" onChange={this.handleChange} placeholder='type here'/>
         <p>You Types:<b>{this.state.name}</b></p>

        </form>
      </div>
    )
  }
}
export default ContactForm;
