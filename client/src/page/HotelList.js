import React from 'react';
import '../Assets/css/HotelList.css'
import img from '../Assets/img (1).jpg'
const HotelPage = () => {
  const hotels = [
    {
      name: "Khách sạn Sala Đà Nẵng Beach",
      location: "36-38 Lâm Hoành, Phước Mỹ, Sơn Trà, Đà Nẵng",
      amenities: ["WiFi", "Máy lạnh", "Thang máy"],
      price: "899,000 VND",
      image: img,
      rating: 5
    },
    {
      name: "Wink Hotel Đà Nẵng Riverside",
      location: "351 Trần Hưng Đạo, An Hải Tây, Sơn Trà, Đà Nẵng",
      amenities: ["WiFi", "Máy lạnh", "Thang máy"],
      price: "1,150,000 VND",
      image: img,
      rating: 4
    },
    {
      name: "Khách sạn Nguyễn Gia Đà Nẵng",
      location: "TT113 đường Hoàng Sa, Quận Sơn Trà, TP Đà Nẵng",
      amenities: ["WiFi","-", "Máy lạnh","-", "Thang máy"],
      price: "460,000 VND",
      image: img,
      rating: 3
    },
    {
        name: "Khách sạn Nguyễn Gia Đà Nẵng",
        location: "TT113 đường Hoàng Sa, Quận Sơn Trà, TP Đà Nẵng",
        amenities: ["WiFi", "Máy lạnh", "Thang máy"],
        price: "460,000 VND",
        image: img,
        rating: 3
      },
      {
        name: "Khách sạn Nguyễn Gia Đà Nẵng",
        location: "TT113 đường Hoàng Sa, Quận Sơn Trà, TP Đà Nẵng",
        amenities: ["WiFi", "Máy lạnh", "Thang máy"],
        price: "460,000 VND",
        image: img,
        rating: 3
      },
      {
        name: "Khách sạn Nguyễn Gia Đà Nẵng",
        location: "TT113 đường Hoàng Sa, Quận Sơn Trà, TP Đà Nẵng",
        amenities: ["WiFi", "Máy lạnh", "Thang máy"],
        price: "460,000 VND",
        image: img,
        rating: 3
      },
      {
        name: "Khách sạn Nguyễn Gia Đà Nẵng",
        location: "TT113 đường Hoàng Sa, Quận Sơn Trà, TP Đà Nẵng",
        amenities: ["WiFi", "Máy lạnh", "Thang máy"],
        price: "460,000 VND",
        image: img,
        rating: 3
      },
  ];

  return (
    <section className='main container section'>
    <div className="hotel-page">
      {/* Sidebar Filter */}
      <aside className="hotel-filter">
        <h3>Lọc theo giá (VND)</h3>
        <input type="range" min="0" max="10799000" />

        <h3>Lọc theo hạng sao</h3>
        <div className="items">
        <div className="star-filter">
          {[5, 4, 3, 2, 1].map(stars => (
            <label key={stars}>
                
                
                <span> <input type="checkbox" />{"★".repeat(stars)}</span>
             
               
             
            </label>
          ))}
        </div>
        </div>

        <h3>Loại phòng</h3>
        <div className='items'>
        <label><input type="checkbox" /> Phòng riêng</label>
        <label><input type="checkbox" /> Nguyên căn</label>
        </div>
        

        <h3>Loại hình ở</h3>
        <div className='items'>
        <label><input type="checkbox" /> Khách sạn</label>
        <label><input type="checkbox" /> Khách sạn căn hộ</label>
        <label><input type="checkbox" /> Resort</label>
        <label><input type="checkbox" /> Homestay</label>
        </div>
      </aside>

      {/* Main Content - Hotel List */}
      <div className="hotel-list">
        <h2>Khách sạn Đà Nẵng</h2>
        {hotels.map((hotel, index) => (
          <div key={index} className="hotel-item">
            <div className='items'> 
            <img src={hotel.image} alt={hotel.name} />
            </div>
            <div className='items'> 
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <div>
                {hotel.amenities.map((amenity, i) => (
                  <span key={i}>{amenity}</span>
                ))}
             </div>
             <p>"★" {hotel.rating}</p>
            </div>
            <div className='items'>
              <p>Giá trung bình mỗi đêm</p>
              <strong>{hotel.price}</strong>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default HotelPage;
