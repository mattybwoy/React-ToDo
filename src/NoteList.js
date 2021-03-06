import React, { Component } from "react";
import './Notelist.css'
import logo from './logo.svg'
import {library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash);

class NoteList extends Component {
constructor(props) {
  super(props)
  this.state = { todo: [], currentItem: { value: '', key:'' }, checked: false }
  
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.deleteItem = this.deleteItem.bind(this);
}

 handleChange(event) {
   this.setState({currentItem:{value: event.target.value, key:Date.now()}});
 }

 handleSubmit(event) {
   if (this.state.currentItem.value ==='') {
     alert("Please enter a task");
   } 
   else {
   this.setState(previousState => ({
     todo: [...previousState.todo, this.state.currentItem]
   }) ) 
    // this.state.todo.push(this.state.currentItem)
    this.setState({...this.State, currentItem:{value:''}})
  }
   event.preventDefault();
 }

 handleCheckboxChange = event =>
   this.setState({checked: event.target.checked})

   resetForm = () => {this.setState({
       todo: [],
     })
   }


   deleteItem(key) {
     const filteredItems = this.state.todo.filter(item => item.key!==key);
     this.setState({
     todo: filteredItems
     })
  }
  
render() {
  console.log(this.state.todo)
  return (
    <div className = 'Personal NoteList'>
    <form id= 'todo-form' onSubmit = {this.handleSubmit}>
      <label>
      <input type='text' placeholder= 'Enter Task' value={this.state.currentItem.value}onChange = {this.handleChange}/>
      </label>
      <button id = "addB" type = 'submit'>Add</button>
      <button id = "resetB" type = 'reset' onClick ={this.resetForm}>Reset</button>
      </form>
      
    <strong>You have {this.state.todo.length} Tasks Remaining</strong>

      {this.state.todo.map((item) => {
        return (<div className="list" key={item.key}><p>{item.value} <input type='checkbox' />
        <span>
        <FontAwesomeIcon className="faicons" onClick={() => this.deleteItem(item.key)} icon= 'trash' title='deletion'/>
        </span>
        </p>
        </div>)
        })
      }
      <footer><strong>A MATTYBWOY CREATION</strong><br/>Powered by React<br></br>
      <img src = {logo} alt="https://reactjs.org/" width= "40"></img>
      </footer>
      </div>
  )
}

}

export default NoteList