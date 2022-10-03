import './App.css';
import { useEffect } from 'react';
import {Test} from "./api/request"
import LayOut from './views/layout';
import { useStillnessManager } from "react-stillness-component";

function App() {
  // useEffect(()=>{
  //   Test().then(res=>console.log(res))
  // },[])
  return (
      <LayOut/>
  );
}

export default App;
