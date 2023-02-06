import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { useState } from "react";
import Loading from "./Components/Loading";



function App() {

    
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getData = (url)=>{

      // Delay to show loading
      
      setLoading(true)
      setTimeout(() => {
      fetch(url)
      .then(res => res.json())
      .then(json =>{
          setData(json)
          
          setLoading(false)
      })
      .catch(error => setError(error))
      }, 2000);

  }


  return (
    <div className="App">
      <Navbar buttonPressed={()=> getData("https://reqres.in/api/users?page=1 ")}></Navbar>
      {loading && <Loading></Loading>}
      <div className="mainContent">

        {
          data?.data.map((el,idx)=>{
        return <Card key={idx} image={el.avatar} name={el.first_name + " "+ el.last_name} email={el.email}></Card>
          })
        }

      </div>
    </div>
  );
}

export default App;
