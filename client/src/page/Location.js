import React from 'react'
import { FaCheck } from "react-icons/fa6";
import '../Assets/css/Location.css'
import { useEffect } from "react";
import { useState } from "react";
import img1 from '../Assets/img/location/btnDaLat.jpg'
import img2 from '../Assets/img/location/btnDaNang.jpg'
import img3 from '../Assets/img/location/btnHCM.jpg'
import img4 from '../Assets/img/location/btnHaNoi.jpg'
import axios from 'axios';

const Data =[
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Đà Lạt',
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Đà Nẵng',
  },
  {
    id:3,
    imgSrc: img3,
    destTitle: 'Hồ Chí Minh',
  },
  {
    id:4,
    imgSrc: img4,
    destTitle: 'Hà Nội',
  },
]
const Hotel =[
  {
    id: 1,
    imgSrc:img1,
    nameHotel: 'Mường Thanh',
    description:' Phổ biến với khách đặt khách sạn ở Việt Nam'
  },
  {
    id: 2,
    imgSrc:img1,
    nameHotel: 'Mường Thanh',
    description:' Phổ biến với khách đặt khách sạn ở Việt Nam'
  },
  {
    id: 3,
    imgSrc:img1,
    nameHotel: 'Mường Thanh',
    description:' Phổ biến với khách đặt khách sạn ở Việt Nam'
  },
  
]
const Location = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchAllLocation = async () => {
      try {
          const response = await axios.get('http://localhost:8080/location');
          console.log('Locations data:', response.data);
          setLocation(response.data);
      } catch (err) {
          console.error('Error fetching locations:', err.response || err.message);
      }
  };
  
    fetchAllLocation();
  }, []);

  console.log(location);

  return (
    <section className='main container section'>
    <div className='box-items'>
    <div className="secTitle text-center">
      <h3 className='title '>
      Điểm đến hàng đầu cho các chuyến đi Việt Nam 
      </h3>
      <div className='title-description'> Những điểm đến tại Việt Nam đáng để ghé thăm ít nhất một lần trong đời</div>
    </div>

    <div className="secContent grid">
      {
        location.map(({location_id,llocation_name, location_img}) =>{
            return(
              <div key={location_id} 
              data-aos="fade-up"
              className="singleDestination">
                <div className="imageDiv">
                  <img src={location_img} alt={llocation_name}/>
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{llocation_name}</h4>
                </div>
              </div>
            )
          })
      }
    </div>
    </div>
    <div className='box-items'>
    <div className="secTitle text-center">
      <h3 className='title '>
      Các lựa chọn khách sạn hàng đầu ở Việt Nam 
      </h3>
      <div className='title-description'> Hãy thử một trong những khách sạn phổ biến và được đánh giá cao ở Việt Nam</div>
    </div>
    <div className="secContent grid">
      {
        Hotel.map(({id,imgSrc, description, nameHotel}) =>{
            return(
              <div key={id} 
              data-aos="fade-up"
              className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={nameHotel}/>
                </div>
                <div className="description">               
                <p className='fas fa-check'>
                <FaCheck className='icon'/>
                      {description}
                      </p>
                    </div>
              </div>
            )
          })
      }
    </div>
    </div>
    <div className='box-description'>
      <h3>Kinh nghiệm du lịch Việt Nam
      </h3>
      <p>Việt Nam là một quốc gia Đông Nam Á với rất nhiều điểm đến du lịch nổi tiếng thế giới, thu hút đông đảo du khách thập phương. Đến với Việt Nam, du khách thường lựa chọn ghé thăm các địa điểm như: Sài Gòn, Hà Nội, Đà Nẵng, Hội An, Vũng Tàu, Đà Lạt, Nha Trang, Sapa, Phú Quốc,... Và dù là đi đến đâu thì việc tìm được cho mình một chỗ lưu trú thoải mất vẫn là yếu tố quan trọng hàng đầu để có một chuyến đi hoàn hảo. Tại Vietnam Booking, bạn sẽ tìm được những khách sạn tại Việt Nam mới mức GIÁ RẺ NHẤT thị trường. Bên cạnh đó, Vietnam Booking còn cung cấp nhiều giao dịch khách sạn hấp dẫn, liên tục có các Voucher & Deal đặt phòng trực tuyến giá rẻ,... nhằm mang đến cho du khách một chỗ nghỉ tuyệt vời cũng như phù hợp với kinh phí và sở thích của bạn. Hệ thống đặt phòng trực tuyến hiện đại - Bộ lọc tìm kiếm thông minh - Đội ngũ nhân viên hỗ trợ tư vấn 24/7, tất cả sẽ mang đến cho bạn các khách sạn Việt Nam tốt nhất!
      </p>
    </div>
  </section>
  )
}

export default Location
