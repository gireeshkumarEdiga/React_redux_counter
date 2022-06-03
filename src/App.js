import React from 'react';
import './App.css';
import { addCount, subCount} from "./components/redux/action";
import { useSelector, useDispatch} from "react-redux";

function App() {

  const dispatch = useDispatch();

  const counter = useSelector(store => store.count);

  return (
    <div className="App">
      <center>
        {counter}
        <br />
        <button onClick={() => dispatch((addCount(1)))}>ADD</button>
        <button onClick={() => dispatch((subCount(1)))}>SUB</button>
      </center>
    </div>
  );
}

export default App;
