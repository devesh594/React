import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// function App() {
//   const [data, setData] = useState("devesh");
//   function updateData() {
//     setData("ANIRAV KATARIYA");
//   }
//   return (
//     <div className="App">
//       <h1> {data}</h1>
//       <button onClick={updateData}>click me</button>
//     </div>
//   );
// }

// export default App;
//
//
//
//
//
//  PROPS IN CLASS COMPONENT
//
// Users.js me bhi likha h
//
//
//

import Users from "./Users";
function App() {
  return (
    <div>
      <h1>devesh student</h1>
      <Users name="anirav" email="anirav@gmail.com"></Users>
    </div>
  );
}
export default App;

//
//
//
//
// import Users from "./Users";
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "devesh",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>props</h1>
//         <Users name={this.state.name} email="devesh@gmail.com"></Users>
//         <button onClick={() => this.setState({ name: "katariya" })}>
//           update name
//         </button>
//       </div>
//     );
//   }
// }
