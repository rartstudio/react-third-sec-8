import React,{useState} from 'react';

import './App.css';
import NewUser from './components/NewUser';
import ListUser from './components/ListUser';

const DUMMY_DATA= [{userName: 'dada', userAge: 23}];

function App() {

  const [data, setData] = useState(DUMMY_DATA);

  const sendDataHandler = (data) => {
    setData(prevData => {
      return [data, ...prevData];
    })
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-lg-4 "></div>
        <div className="col-lg-4 ">
          <NewUser onSendData={sendDataHandler}/>
          <ListUser items={data}/>
        </div>
        <div className="col-lg-4 "></div>
      </div>
    </div>
  );
}

export default App;
