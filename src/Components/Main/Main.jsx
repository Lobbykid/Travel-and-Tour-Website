import React, {useEffect} from 'react'
import './Main.css'
import img from '../../Assets/img (1).jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'


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

  useEffect(() =>{
      Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc, destTitle, location, grade, fees, 
            description}) =>{
              return(
                <div key={id} 
                data-aos="fade-up"
                className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="contiment flex">
                      <HiOutlineLocationMarker className='icon'/>     
                      <span className="name">{location}</span>
                    </span>
                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}<small>+1</small></span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>

                    <div className="dest">
                      <p>{description}</p>
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
