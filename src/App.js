import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todo/Todos'
import AddTodo from './components/Todo/AddTodo'
import About from './components/Intro/About'
import Weather from './components/weather/Weather'
import {v1} from 'uuid';
import './AllTodosClass.css';


 class App extends React.Component{
  state = {
    todos:[
      {
        id: v1(), 
        title: 'Take out the trash',
        completed: false
      },
      {
        id: v1(), 
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: v1(), 
        title: 'Team Meeting',
        completed: false
      }

    ]
    

  }

  checkBox = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  delTodo = (id) =>{
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }


  addTodo = (title) => {
    const newTodo = {
      id: v1(),
      title: title,
      completed: false
    }
      this.setState({todos: [...this.state.todos, newTodo]});

    
  }

  render() {

    return (
      <Router>
        <div className="App">
          <div className="container">
            {/* Adding Header section to all pages */}
            <Header />
            {/* Adding About(intro) section */}
            <Route exact path="/" component={About} />

            {/* Adding Todo app */}
            <Route  path="/Todo_app" render={props => (
              <React.Fragment> 
                {/* passing addTodo up the tree */}
                <AddTodo addTodo={this.addTodo}/> 
                <div className="AllTodosClass">
                  <Todos todos={this.state.todos} checkBox={this.checkBox} delTodo={this.delTodo}/>
                </div>
              </React.Fragment>

            )} />

            {/* Adding Weather App */}
            <Route path="/Weather" component={Weather} />
           
          </div>
          
        </div>
      </Router>
    );
  }
}


export default App;
