import React, {useState, useEffect} from 'react'
import './App.css';
import InfoCard from './InfoCard';


function App() {
  const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false);
  const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
        const getCategory = async() =>{
        setLoading(true)
        const res = await fetch(url)
        const getData = await res.json();
        setCategory(getData) 
        console.log(getData)
        setLoading(false)

        }
        
        getCategory();
    },[url])
  return (
    <div className="App">
      <header className="App-header">
        Users Details
      </header>
      <div className='info-div'>
       {/* <InfoCard users={category} /> */}
      { category.map((item) => <InfoCard users={item} key={category.id} />)}

      </div>
    </div>
  );
}

export default App;
