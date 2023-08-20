import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
const Body=()=>{
  return(
    <App/>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);