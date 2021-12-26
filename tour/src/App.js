import { useState, useEffect } from "react";
import Tours from "./Tours";

const App = ()=>{
  const url = 'https://course-api.com/react-tours-project'
  const [loading,setLoading] = useState(true)
  const [tours,setTours] = useState([])

  const removeTour = (id) =>{
    const newTours = tours.filter(e=>e.id!==id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchTours()
  },[])

  if(loading){
    return (
      <main>
        <div className="loading">
          <h1>loading...</h1>
        </div>
      </main>
    );
  }

  if(tours.length===0){
    return(
      <main>
          <div className="title">
            <h2>no tours left</h2>
            <button className="btn" onClick={()=>{fetchTours()}}>
              refresh
            </button>
          </div>
      </main>
    )
  }

  return(
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )

}

export default App;
