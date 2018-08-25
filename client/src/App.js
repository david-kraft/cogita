import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup"
// import Home from "./pages/Home";
// import Log from "./pages/Log"
// import NewEntry from "./pages/NewEntry";
// import EditEntry from "./components/EditEntry";

import Form from "./components/Form";
import NavBar from "./components/NavBar";
import PromptCard from "./components/PromptCard";
import PostsPage from "./components/PostsPage";


class App extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <PromptCard />
        <PostsPage />
      </div>
    );
  };
}

export default App;

// // Use this stuff to make the forms work to save log entries
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: '', inputText: '', mode:'view'};
//     class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: '', inputText: '', mode:'view'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSave = this.handleSave.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ inputText: e.target.value });
//   }

//   handleSave() {
//     this.setState({text: this.state.inputText, mode: 'view'});
//   }

//   handleEdit() {
//     this.setState({mode: 'edit'});
//   }

//   render () {
//     if(this.state.mode === 'view') {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <button onClick={this.handleEdit}>
//             Edit
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//             <input
//               onChange={this.handleChange}
//               value={this.state.inputText}
//             />
//           <button onClick={this.handleSave}>
//             Save
//           </button>
//         </div>
//       );
//     }
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSave = this.handleSave.bind(this);
//     this.handleEdit = this.handleEdit.bind(this);
//   }

//   handleChange(e) {
//     this.setState({ inputText: e.target.value });
//   }

//   handleSave() {
//     this.setState({text: this.state.inputText, mode: 'view'});
//   }

//   handleEdit() {
//     this.setState({mode: 'edit'});
//   }

//   render () {
//     if(this.state.mode === 'view') {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//           <button onClick={this.handleEdit}>
//             Edit
//           </button>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <p>Text: {this.state.text}</p>
//             <input
//               onChange={this.handleChange}
//               value={this.state.inputText}
//             />
//           <button onClick={this.handleSave}>
//             Save
//           </button>
//         </div>
//       );
//     }
//   }
// }

// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );