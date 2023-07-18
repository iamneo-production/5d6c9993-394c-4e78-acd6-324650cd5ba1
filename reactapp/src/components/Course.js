import React ,{useState} from 'react';
import './Course.css';
import {Link} from 'react-router-dom';
import Topbar from './Topbar';



const Course = () => {

  const rig = 
  {
    marginLeft:'10%',
  }
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search submit logic here
    console.log('Search term:', searchTerm);
    setSearchTerm('');
  };
const [progress, setProgress] = useState(0);

const handleProgressChange = (event) => {
    setProgress(event.target.value);
};

  return (
   <div>
  <nav className="navbar">
        <div className="it">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270779/beirio-removebg-preview_um4vby.png" width="40px" height="40px"/>
        </div>
        <div className="navbar-brand">Explore</div>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit" className="search-button">
            <img src=" https://res.cloudinary.com/dv3xtovhk/image/upload/v1689269368/siitiit-removebg-preview_e0lvku.png" width="20px" height="40px"/>
          </button>
          <div className="cse">
            <img src="https://res.cloudinary.com/dv3xtovhk/image/upload/v1689270147/profile-removebg-preview_zt8pt4.png" width="40px" height="40px"/>
          </div>
        </form>
      </nav>
   {/* <Topbar/> */}
 <div className="don">
   <h1>Turn your life into Legacies with our Course</h1>
   </div>
<div style={{display:'flex',marginTop:'5%'}}>

  <div className="flip-card" style={rig}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://tse4.mm.bing.net/th?id=OIP.b4E5lI3Wkz40DK-KalZ3vwHaEc&pid=Api&P=0&h=180" alt="Avatar" style={{width: 300, height: 300}} />
    </div>
    <div className="flip-card-back">
       
      <br>
      </br>
      <h1 style={{color:"black"}}>Python</h1><br></br>
      <p style={{color:"black"}}> Duration: 30 days</p> <br></br>
      <p style={{color:"black"}}> Fees: 13,000</p><br></br>
      <Link to='/EnrollmentForm'><button type="submit">Enroll</button></Link>
    </div>
  </div>
</div>



<div className="flip-card" style={rig}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://tse2.mm.bing.net/th?id=OIP.BbC4Rl-oucLWg869MVk5SAHaEn&pid=Api&P=0&h=180" alt="Avatar" style={{width: 300, height: 300}} />
    </div>
    <div className="flip-card-back">
      <h1 style={{color:"black"}}>Java</h1> <br></br>
      <p style={{color:"black"}}> Duartion : 30 days</p> <br></br>
      <p style={{color:"black"}}> Fees: 13,000</p><br></br>
      
      <Link to='/EnrollmentForm'><button type="submit">Enroll</button></Link>
    </div>
  </div>

  
</div>



<div className="flip-card" style={rig}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://tse1.mm.bing.net/th?id=OIP.SotMiIQcjpM3eBVDEkbS-wHaD8&pid=Api&P=0&h=180" alt="Avatar" style={{width: 300, height: 300}} />
    </div>
    <div className="flip-card-back">
      <h1 style={{color:"black"}}>React</h1> <br></br>
      <p style={{color:"black"}}> Duration :30 days</p> <br></br>
      <p style={{color:"black"}}> Fees: 13,000</p><br></br>
      <Link to='/EnrollmentForm'><button type="submit">Enroll</button></Link>
      
    </div>
  </div>
</div>
<div className="flip-card" style={rig}>
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src="https://tse3.mm.bing.net/th?id=OIP.lf-73BARz3p89K1-n408HAHaEH&pid=Api&P=0&h=180" alt="Avatar" style={{width: 300, height: 300}} />
    </div>
    <div className="flip-card-back">
      <h1 style={{color:"black"}}>Mysql</h1> <br></br>
      <p style={{color:"black"}}> Duration :30 days</p> <br></br>
      <p style={{color:"black"}}> Fees: 13,000</p><br></br>
      <Link to='/EnrollmentForm'><button type="submit">Enroll</button></Link>
      
    </div>
  </div>
</div>






</div>


    </div>
 
   
  );
}

export default Course
