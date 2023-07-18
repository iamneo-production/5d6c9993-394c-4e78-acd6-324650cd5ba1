
import React, { useRef,useState} from 'react';
import './Asment.css';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



    
    const Learn = () => {

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
       
      const styles = {
        container: {
          textAlign: 'center',
          padding: '-10px',
        },
        
        cardList1: {
          
          marginTop:'50px',
          display: 'flex',
          justifyContent: 'center',
          
        },
        
        card1: {
          
          objectfit:'cover',
            width: '550px',
            height:'250px',
           marginLeft:'100px',
             border: '2px solid black',
             borderRadius: '5px',
          },
          
          image1: {
           
            transform:"translateX('2000px')",
            marginLeft:'-200px',
            width: '20%',
            height: '20%',
            // border: '2px solid black',
            borderRadius:'25%',
            
          
          },
          desc1:{
            marginbottom:'100px',
            
          },
          // desc2:
          // {
          //   marginLeft:'50px',
          // },

          cardList2: {
      
            marginTop:'50px',
              display: 'flex',
              justifyContent: 'center',
            
            },
          
              card2: {
                objectfit:'cover',
                width: '550px',
                height:'250px',
               marginLeft:'100px',
                 border: '2px solid black',
                 borderRadius: '5px',
              },
              
             
              image2: {
                width: '20%',
                height: '20%',
                objectFit: 'cover',
                marginLeft:'-200px',
                // border: '2px solid white',
                borderRadius: '25%',
              
              },
              don1:{
                marginbottom:'100px',
                
              },
              // don2:
              // {
              //   marginLeft:'50px',
              // },
        }

      const Card1= ({ title1, description1,des1, imageUrl1, isActive }) => {
        return (
          <div style={{ ...styles.card1, backgroundColor: isActive ? 'lightblue' : 'white' }}>
            <img src={imageUrl1} alt={title1} style={styles.image1} />
            <h3 style={{fontstyle:"italic"}}>{title1}</h3><br></br><br></br>
            <p style={styles.desc1}>{description1}</p>
            <p style={styles.desc2}>{des1}</p>
            <div clasName="tata">
           <a href="https://docs.google.com/forms/d/e/1FAIpQLSeU2zsvhLpcu9F5rSe_ULg2vWZ-sgknaOqD0hiR--4SxmlItw/viewform?usp=sf_link"><button type="submit">Take Test</button></a>
           </div>
          </div>
        );
      };
      const cards1= [
        {
          imageUrl1:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
          title1: 'Problem of the day',
          description1: 'start date: 13 May',
          des1:'end date: 15 June',
        },
        {
          imageUrl1:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
          title1: 'beginner level test',
          description1: 'start date: 13 May',
          des1:'end date: 15 June',
        },
        {
          imageUrl1:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
          title1: 'weekend coding contest',
          description1: 'start date: 13 May',
          des1:'end date: 15 June',
        },
        {
          imageUrl1:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
          title1: 'practices ',
          description1: 'start date: 13 May',
          des1:'end date: 15 June',
        },
      ];
      const Card2 = ({ title2, description2,disc, imageUrl2, isActive }) => {
        return (
          <div style={{ ...styles.card2, backgroundColor: isActive ? 'lightblue' : 'white' }}>
            <img src={imageUrl2} alt={title2} style={styles.image2} />
            <h3>{title2}</h3><br></br><br></br>
            <p style={styles.don1}>{description2}</p>
            <p style={styles.don2}>{disc}</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeU2zsvhLpcu9F5rSe_ULg2vWZ-sgknaOqD0hiR--4SxmlItw/viewform?usp=sf_link" target="_blank"><button type="submit">Take Test</button></a>
          </div>
        );
      };
    
    
      
        const cards2 = [
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
            title2: 'Model coding Test',
            description2: 'start date: 13 May',
            disc:'end date: 15 June',
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
            title2: 'Pre Assessment',
            description2: 'start date: 13 May',
            disc:'end date: 15 June',
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
            title2: 'Coding contest',
            description2: 'start date: 13 May',
            disc:'end date: 15 June',
          },
          {
            imageUrl2:'https://res.cloudinary.com/dv3xtovhk/image/upload/v1689295873/code_jklnbn.jpg',
            title2: 'Revision Test',
            description2: 'start date: 13 May',
            disc:'end date: 15 June',
          },
  
         
         
        ];

     
    
      return (
          
          <div className="learning-progress">
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
      <div className="sent">
      <div style={styles.cardList1}>
      {cards1.map((card1, index) => (
        <Card1
          key={index}
          title1={card1.title1}
          imageUrl1={card1.imageUrl1}
          description1={card1.description1}
          des1={card1.des1}
        />
      ))}
    </div>
    </div>

    <div style={styles.cardList2}>
      {cards2.map((card2, index) => (
        <Card2
          key={index}
          imageUrl2={card2.imageUrl2}
          title2={card2.title2}
          description2={card2.description2}
          disc={card2.disc}
        />
      ))}
    </div>
      
     </div>
      );
    };
    
    export default Learn;
    
   


  
