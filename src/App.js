import React from 'react'
import { useState } from 'react'
import "./App.css"


const App = () => {

  const [user, setUser] = useState({ Username: "", Department: "", Rating: "" })
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [arr1, setArr1] = useState([])// 
  const [shwitch,setSwitch]=useState(true)




  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(shwitch){
      setArr1([...arr1, user])
    console.log(arr1);
    }
    // setArr1([...arr1, user])
    // console.log(arr1);
    setSwitch(!shwitch)

  }
  return (
  <>

    <div>

      <form onSubmit={onSubmit}>
        <h1 className='first-heading'>User Employee Form</h1>
        { shwitch ? <div id='formdiv'>
          
        
        <h1>Get User Form</h1>
        <label htmlFor="Username">Name:</label><br />
        <input type="text" name="Username" value={user.Username} onChange={onChangeUser} /> <br />
        <label htmlFor="Department">Department:</label><br />
        <input type="text" name="Department" value={user.Department} onChange={onChangeUser} /> <br />
        <label htmlFor="Rating">Rating:</label><br />
        <input type="number" name="Rating" value={user.Rating} onChange={onChangeUser} /> <br />
        </div>

        
      
      
      :
      <div>
        <h1 id='heading2'>User Data</h1>
        <hr />
        
      
      <div id='flex'>
        

        {
          arr1.map((value, index) => {
            return (
            <>
              
                <div className='flexbox' key={index}>
                  <span>Name: {value.Username}</span>
                  <span> Department: {value.Department}</span>
                  <span> Rating: {value.Rating} </span>
                </div>
              
            </>
            )
          })
        }
      </div>
      </div>}
      <button id='btn' type="submit">{ shwitch ? <span>Submit</span> : <span>Go Back</span> }</button>
      </form>
    </div>
</>
  )
}

export default App