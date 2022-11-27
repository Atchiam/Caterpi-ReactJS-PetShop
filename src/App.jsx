import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting={"UPSS aun no programe esto..."}/>
    </div>
  );
}

export default App;
