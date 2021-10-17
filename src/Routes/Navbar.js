import React from 'react'
import '../Styles/Navbar.css'
import Bot from '../images/Sparrow.png'
import Bot2 from '../images/favicon.png'
import {Link,useHistory} from 'react-router-dom'



function Navbar() {
  let history = useHistory();
  
  const handleRoute = () =>{ 
  
  
  
    console.log('you clicked here')
  }
  return (
    <div>




      <ul>
        <h1 href="#">Maxeon</h1>
        <div class="text-block">
    <h4>Where</h4>
    <h4>words</h4>
    <h4>fail,</h4>
    <h4>Music</h4>
    <h4>speaks.</h4>
</div>
        <li>
          
          <Link to='/' ><a>Products</a></Link>
        </li>
        <li>
          <Link to=''><a>Features</a></Link>
          
        </li>
        <li>
          
          <Link to='/' ><a>Use Cases</a></Link>
        </li>
        <li>
          
          <Link to='/' ><a>Pricing</a></Link>
        </li>
        <li>
          
          <Link to='/' ><a>Login</a></Link>
        </li>
      </ul>
      <div class="bottom-right">
       
      <img src={Bot} alt='bot' width="70" height="70" onClick={handleRoute} />
     
      </div>
    </div>
  )
}

export default Navbar
