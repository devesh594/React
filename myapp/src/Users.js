// function Users() {
//   return (
//     <div className="App">
//       <h1>hello world hii devesh</h1>
//     </div>
//   );
// }
// export default Users;

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

function App() {
  function apple() {
    alert("funcation called");
  }
  return (
    <div>
      <h1>devesh katariya</h1>

      <button onClick={apple}>click me</button>
      {/* <button onClick={() => apple()}>click me</button> */}
    </div>
  );
}
export default App;

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
