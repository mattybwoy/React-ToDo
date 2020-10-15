import React, { Component } from "react";
import './Notelist.css'
import {library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash);

class NoteList extends Component {
constructor(props) {
  super(props)
  this.state = { todo: [], currentItem:{ value: '', key:'' }, checked: false }
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.deleteItem = this.deleteItem.bind(this);
}

 handleChange(event) {
   this.setState({currentItem:{value: event.target.value, key:Date.now()}});
 }

 handleSubmit(event) {
   this.state.todo.push(this.state.currentItem.value)
   this.setState({todo: this.state.todo});
   this.setState({...this.State, currentItem:{value:''}})
   event.preventDefault();
 }

 handleCheckboxChange = event =>
   this.setState({checked: event.target.checked})

   resetForm = () => {this.setState({
       ...this.state,
       currentItem:{
       value:''},
       todo: []
     })
   }

   deleteItem(key) {
     const filteredItems = this.state.todo.filter(item => item.key!==key);
     this.setState({
     todo:filteredItems
     })
   }
  
render() {
  return (
    <div className = 'Personal NoteList'>
    <form id= 'todo-form' onSubmit = {this.handleSubmit}>
      <label>
      <input type='text' placeholder= 'Enter Task' value={this.state.currentItem.value}onChange = {this.handleChange}/>
      </label>
      <button type = 'submit'>Add</button>
      <button type = 'submit' onClick ={this.resetForm}>Reset</button>
      </form>
      
    You have {this.state.todo.length} Tasks

      {this.state.todo.map((item) => {
        return (<div className="list" key={item.key}><p>{item} <input type='checkbox' />
        <span>
        <FontAwesomeIcon className="faicons" icon= 'trash' onClick={() => this.deleteItem(item.key)}/>
        </span>
        </p>
        </div>)
        })
      }
      </div>
  )
}

}

export default NoteList