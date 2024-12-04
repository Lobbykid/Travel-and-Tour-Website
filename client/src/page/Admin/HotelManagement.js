import React, { useState, useEffect } from "react";
import "./HotelManagement.css";

const hotelApiUrl = "http://localhost:8080/hotel"; // URL của API khách sạn
const locationApiUrl = "http://localhost:8080/location"; // URL của API địa điểm

const HotelManagement = () => {
  const [hotels, setHotels] = useState([]); // State để lưu danh sách khách sạn
  const [locations, setLocations] = useState([]); // State để lưu danh sách địa điểm
  const [selectedLocation, setSelectedLocation] = useState(""); // State để lưu giá trị location_id
  const [hotelForm, setHotelForm] = useState({ // State để lưu thông tin form khách sạn
    hotel_name: "",
    hotel_description: "",
    hotel_address: "",
    hotel_price: "",
    location_id: ""
  });
  const [editingHotel, setEditingHotel] = useState(null); // State để lưu khách sạn đang được sửa

  useEffect(() => {
    const fetchHotelsAndLocations = async () => {
      try {
        const locationResponse = await fetch(locationApiUrl);
        const locationData = await locationResponse.json();
        setLocations(locationData);

        // Cập nhật giá trị mặc định cho selectedLocation nếu có ít nhất một địa điểm
        if (locationData.length > 0) {
          setSelectedLocation(locationData[0].location_id); // Chọn địa điểm đầu tiên
        }

        const hotelResponse = await fetch(hotelApiUrl);
        const hotelData = await hotelResponse.json();
        setHotels(hotelData);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchHotelsAndLocations();
  }, []); // Hàm này chỉ chạy 1 lần khi component mount

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotelForm((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHotel = {
      ...hotelForm,
      location_id: selectedLocation
    };

    if (editingHotel) {
      // Cập nhật khách sạn đã sửa
      try {
        const response = await fetch(`${hotelApiUrl}/${editingHotel.hotel_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newHotel)
        });
        const updatedHotel = await response.json();
        setHotels(hotels.map(hotel => 
          hotel.hotel_id === updatedHotel.hotel_id ? updatedHotel : hotel
        )); // Cập nhật khách sạn trong danh sách
        setEditingHotel(null); // Đặt lại trạng thái sửa
      } catch (error) {
        console.error("Lỗi khi cập nhật khách sạn:", error);
      }
    } else {
      // Thêm khách sạn mới
      try {
        const response = await fetch(hotelApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newHotel)
        });
        const createdHotel = await response.json();
        setHotels([...hotels, createdHotel]); // Thêm khách sạn mới vào danh sách
      } catch (error) {
        console.error("Lỗi khi tạo khách sạn:", error);
      }
    }

    setHotelForm({ // Reset form sau khi thêm hoặc sửa
      hotel_name: "",
      hotel_description: "",
      hotel_address: "",
      hotel_price: "",
      location_id: ""
    });
  };

  const handleDelete = async (hotelId) => {
    try {
      await fetch(`${hotelApiUrl}/${hotelId}`, {
        method: "DELETE"
      });
      setHotels(hotels.filter((hotel) => hotel.hotel_id !== hotelId)); // Xóa khách sạn khỏi danh sách
    } catch (error) {
      console.error("Lỗi khi xóa khách sạn:", error);
    }
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
    setHotelForm({
      hotel_name: hotel.hotel_name,
      hotel_description: hotel.hotel_description,
      hotel_address: hotel.hotel_address,
      hotel_price: hotel.hotel_price,
      location_id: hotel.location_id
    });
    setSelectedLocation(hotel.location_id); // Đặt giá trị location_id khi sửa
  };

  return (
    <div className="container">
      <h2>Quản lý khách sạn</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên khách sạn:</label>
          <input
            type="text"
            name="hotel_name"
            value={hotelForm.hotel_name}
            onChange={handleChange}
            placeholder="Nhập tên khách sạn"
          />
        </div>
        <div>
          <label>Mô tả:</label>
          <input
            type="text"
            name="hotel_description"
            value={hotelForm.hotel_description}
            onChange={handleChange}
            placeholder="Nhập mô tả"
          />
        </div>
        <div>
          <label>Địa chỉ:</label>
          <input
            type="text"
            name="hotel_address"
            value={hotelForm.hotel_address}
            onChange={handleChange}
            placeholder="Nhập địa chỉ"
          />
        </div>
        <div>
          <label>Giá:</label>
          <input
            type="number"
            name="hotel_price"
            value={hotelForm.hotel_price}
            onChange={handleChange}
            placeholder="Nhập giá"
          />
        </div>
        <div>
          <label>Chọn địa điểm:</label>
          <select
            name="location_id"
            value={selectedLocation}
            onChange={(e) => {
              setSelectedLocation(e.target.value);
              setHotelForm((prevState) => ({
                ...prevState,
                location_id: e.target.value
              }));
            }}
          >
            <option value="">Chọn địa điểm</option>
            {locations.length > 0 ? (
              locations.map((location) => (
                <option key={location.location_id} value={location.location_id}>
                  {location.llocation_name}
                </option>
              ))
            ) : (
              <option value="">Không có địa điểm</option>
            )}
          </select>
        </div>
        <button type="submit">{editingHotel ? "Cập nhật khách sạn" : "Thêm khách sạn"}</button>
      </form>

      <h3>Danh sách khách sạn</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên khách sạn</th>
            <th>Mô tả</th>
            <th>Địa chỉ</th>
            <th>Giá</th>
            <th>Địa điểm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.hotel_id}>
              <td>{hotel.hotel_id}</td>
              <td>{hotel.hotel_name}</td>
              <td>{hotel.hotel_description}</td>
              <td>{hotel.hotel_address}</td>
              <td>{hotel.hotel_price}</td>
              <td>{locations.find((loc) => loc.location_id === hotel.location_id)?.llocation_name}</td>
              <td>
                <button onClick={() => handleEdit(hotel)}>Sửa</button>
                <button onClick={() => handleDelete(hotel.hotel_id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HotelManagement;
