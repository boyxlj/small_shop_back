import './App.css';
import { useEffect } from 'react';
import {Test} from "./api/request"
import LayOut from './views/layout';
import StillnessOutlets from "./StillnessOutlets";
function App() {
  // useEffect(()=>{
  //   Test().then(res=>console.log(res))
  // },[])
  return (
    <>
      <LayOut/>
      <StillnessOutlets></StillnessOutlets>
    </>
  );
}

export default App;
