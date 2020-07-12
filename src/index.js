import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from "./Cards";
import sdata from "./Sdata";

// creating Map function
// function netcard(val){
//   return(
//     <Card 
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}/>
//   )
// }

ReactDOM.render( 
<>
<h1 className="heading_style">List of Top 6 Netflix bollywood Series 2020</h1>
{/* {sdata.map(netcard)} */}
{/* using Fat arrow method to array the data => */}
{sdata.map((val,index)=>{
return(
  <Card 
    imgsrc={val.imgsrc}
    title={val.title}
     sname={val.sname}
     link={val.link}/>
    );
})}
</>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
