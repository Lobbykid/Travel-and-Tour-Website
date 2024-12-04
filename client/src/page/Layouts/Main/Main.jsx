import React, {useEffect} from 'react'
import './Main.css'
import img from '../../../Assets/img (1).jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import axios from 'axios'
import { useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Data =[
  {
    id:1,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:2,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:3,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:4,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:5,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:6,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:7,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:8,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  {
    id:9,
    imgSrc: img,
    destTitle: 'Ha Long Bay',
    location:'Quang Ninh',
    grade: 'CUL TURAL RELAX',
    fees: '$4000',
    description:'Lorem ipsum dolor sit amet, consectetur'
  },
  
  
]


const Main = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    const fetchAllHotel = async () => {
      try {
          const response = await axios.get('http://localhost:8080/hotel');
          console.log('Hotels data:', response.data);
          setHotel(response.data);
      } catch (err) {
          console.error('Error fetching Hotels:', err.response || err.message);
      }
  };
  
  fetchAllHotel();
  }, []);
  useEffect(() =>{
      Aos.init({duration: 2000})
  },[])

  return (
  

    <section className='main container section'>
      <div className="secTitle text-center">
        <h3 data-aos="fade-right" className='title '>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          hotel.map(({hotel_id,hotel_img, hotel_name, hotel_address, hotel_price, 
            hotel_description}) =>{
              return(
                <div key={hotel_id} 
                data-aos="fade-up"
                className="singleDestination">
                  <div className="imageDiv">
                    <img src={hotel_img} alt={hotel_name}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{hotel_name}</h4>
                    <span className="contiment flex">
                      <HiOutlineLocationMarker className='icon'/>     
                      <span className="name">{hotel_address}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>4<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{hotel_price}</h5>
                      </div>
                    </div>

                    <div className="dest">
                      <p>{hotel_description}</p>
                    </div>
                    <button className="btn" flex>
                      DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
                </div>
              )
            })
        }
      </div>
    </section>
   
  )
}

export default Main
