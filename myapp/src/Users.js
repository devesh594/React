// function Users() {
//   return (
//     <div className="App">
//       <h1>hello world hii devesh</h1>
//     </div>
//   );
// }
// export default Users;

// import { useState } from "react";

// import React, { Component } from "react";
// export default class Users extends Component {
//   render() {
//     return <h1>devesh katariya</h1>;
//   }
// }

// import React, { Component, createElement } from "react";
// export default class Users extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement("h1", null, "hello katariya")
//     );
//   }
// }

// function App() {
//   function apple() {
//     alert("funcation called");
//   }
//   return (
//     <div>
//       <h1>devesh katariya</h1>

//       <button onClick={apple}>click me</button>
//       {/* <button onClick={() => apple()}>click me</button> */}
//     </div>
//   );
// }
// export default App;

// function App() {
//   let data = "komal";
//   function apple() {
//     data = "devesh";
//     alert(data);
//   }
//   return (
//     <div>
//       <h1>devesh katariya</h1>
//       <h1>{data}</h1>
//       <button onClick={apple}>click me</button>
//       {/* <button onClick={() => apple()}>click me</button> */}
//     </div>
//   );
// }
// export default App;

// veriable update nahi hota h

// function App() {
//   return (
//     <div>
//       <h1>devesh</h1>
//       <button>click me </button>
//     </div>
//   );
// }
// export default App;

//
//
//
// STATE IN FUNCTION COMPONENT
//
//
//
//
// STATE DEFINE  (first import react when you define the state)
//   usestate-- usestate allows to maintain to state and it is a huk

// import { useState } from "react";

// function App() {
//   const [data, setData] = useState("devesh");
//   function updatedata() {
//     setData("Anirav katariya");
//   }
//   return (
//     <div>
//       <h1>{data}</h1>
//       <button onClick={updatedata}>click me</button>
//     </div>
//   );
// }
// export default App;

//
//
//
//
// import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = useState(0);
//   function updateData() {
//     setData(data + 1);
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
// STATE IN CLASS COMPONENT
//
//
//
//
// import React, { Component } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "devesh",
//     };
//   }
//   apple() {
//     this.setState({ data: "Anirav katariya" });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>update me</button>
//       </div>
//     );
//   }
// }
// export default App;
// //
//
//
//
// import React, { Component } from "react";
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 1,
//     };
//   }
//   apple() {
//     this.setState({ data: this.state.data + 1 });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>update me</button>
//       </div>
//     );
//   }
// }
// export default App;

//
//
//
// PROPS in REACT
//
//
// PROPS FUNCTIONAL COMPONENT
//
//
// //
// index.js me call kar rakha h

// //
// //
// //
function Users(props) {
  console.log(props);
  return (
    <div
      style={{ backgroundColor: "skyblue", margin: 10, textAlign: "center" }}
    >
      <h1>Hello {props.name}</h1>
      <h2>Email : {props.email}</h2>
      <h3>phone {props.phone}</h3>
    </div>
  );
}
export default Users;

// import React, { useState } from "react";

// function Users() {
//   const [name, setName] = (useState = "devesh");
//   return (
//     <div>
//       <h1>devesh </h1>
//       <Users name={name} />
//       <button
//         onClick={() => {
//           setName("ravi");
//         }}
//       >
//         click me{" "}
//       </button>
//     </div>
//   );
// }
// export default Users;
