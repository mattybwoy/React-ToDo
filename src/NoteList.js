import React, { Component } from "react";

class NoteList extends Component {
constructor(props) {
  super(props)
  this.state = { todo: [], currentItem:{ value: '', key:'' }, checked: false }
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

 handleChange(event) {
   this.setState({currentItem:{value: event.target.value, key:Date.now()}});
 }

 handleSubmit(event) {
   this.state.todo.push(this.state.currentItem.value)
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
    <form id= 'todo-form' onSubmit = {this.handleSubmit}>
      <label>
        Task: <input type='text' value={this.state.currentItem.value}onChange = {this.handleChange}/>
      </label>
      <button type = 'submit'>Add</button>
      <button type = 'subm it' onClick ={this.resetForm}>Reset</button>
      </form>
      
    You have {this.state.todo.length} Tasks

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