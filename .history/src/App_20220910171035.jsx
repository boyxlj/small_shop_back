import './App.css';
import { useEffect } from 'react';
import {Test} from "./api/request"
import LayOut from './views/layout';
import StillnessOutLets from "./StillnessOutlets"
function App() {
  return (
    <>
      <LayOut/>
      <StillnessOutLets></StillnessOutLets>
    </>
  );
}
export default App;
