import React, { Component } from "react";


class NoteList extends Component {
constructor(props) {
  super(props)
  this.state = { value: '', todo: [], checked: false }
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   this.state.todo.push(this.state.value)
   this.setState({todo: this.state.todo});
   this.setState({...this.setState, value: ''})
   event.preventDefault();
 }

 handleCheckboxChange = event =>
   this.setState({checked: event.target.checked})
 
   resetForm = () => {this.setState({
       ...this.state,
       value: '',
       todo: []
     })
   }
  
render() {
  return (
    <div className = 'Personal NoteList'>
    <form onSubmit = {this.handleSubmit}>
      <label>
        Task: <input type='text' value={this.state.value}onChange = {this.handleChange}/>
      </label>
      <input type = 'submit' value = 'Add'/ >
      <input type='button' value='Reset' onClick ={this.resetForm}/>
      </form>
    {/* You have {this.state.todo.length} */}
    You have {this.state.todo.filter(todo => !todo.checked).length} tasks remaining
      {this.state.todo.map((todo, index) => {
        return (<p key ={index}>{todo}
        <input type='checkbox' />
        </p>)
        })
      }
      </div>
  )
}

}

export default NoteList