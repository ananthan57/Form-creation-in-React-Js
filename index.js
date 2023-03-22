import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//class anand extends React.Component
//  {
//   render()
//   {
//     return<h1>Hello Ananthan</h1>
//   }
//  };
//  const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  
//     <anand />
  
// );

class Myclass extends React.Component
{
  constructor(){
    super()
    this.state={sub:"ReactJs"}
  }
  GoLeft=()=>
  {
    this.setstate({dept:"ECE"})
    
  }
  GoStraight=()=>
  {
    this.setstate({dept:"ISE"})
    
  }
  GoDown=()=>
  {
    this.setstate({dept:"Special Labs"})
    
  }
  render()
  {
    return(
    <div>
      {/* <MyFun /> */}
      <App />
      {/* <h1 style={inlinestyle}>Hello ANANTHAN L</h1>
    <h2 class="outline">Welcome to {this.props.dept} and our strength is {this.props.nos} and we are attending {this.state.sub}</h2>
    <button>  Go Left </button>
    <button> Go Straight </button>
    <button> Go Down</button> */}
      </div>
    )
    
  }
}
// function MyFun(){
//   return(<h1>HELLO WORLD</h1>)
// }
// var inlinestyle={color:"green",textAlign:"center"}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Myclass dept="CSBS" nos="64"/>)
