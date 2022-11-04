import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person </p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {actors.map(murgi => <li>{murgi}</li>)}
          {products1.map(pds => <li>{pds.name}</li>)}
        </ul>
        {products1.map(zzp => <Product product ={zzp}></Product>)}
        
      </header>
    </div>
  );
}

function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {users.map(spdf => <li>{spdf.name}</li>)}
      </ul>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount (count - 1)}>Decrease</button>
      <button onClick={() => setCount (count + 1)}>Increase</button>
    </div>
  )
}

let actors = ['Robert Downey Jr.', 'Ryan Reyonds', 'Sylvester Stallone', 'Chris Evans', 'Tom Holland', 'Micheal B. Jordan' ]

const products1 = [
  {name: 'Photoshop', price: '$90.99'},
  {name: 'Illustrnator', price: '$60.99'},
  {name: 'PDF Reader', price: '$6.99'}
]

function Product (props){

  

  let productStyle={
    border:"1px solid gray",
    borderRadius:"5px",
    backgroundColor:"lightgray",
    margin:"10px",
    padding:"20px",
    height:"200px",
    width:"200px",
    float:"left"
  }

  return (
    <div style={productStyle}>
      <h2> {} </h2>
      <h5> {} </h5>
      <button>Buy now</button>
    </div>
  )
}

export default App;
