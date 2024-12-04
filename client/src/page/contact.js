import React from 'react'
import img from '../Assets/img (1).jpg'
import '../Assets/css/Contact.css'
const Contact = () => {
    return (
      <section className='main container section'>
   
        <div className="flex flex-row ">
          <div className="basis-1/2 p-2 ">
            <img
              src={img}
              alt="contactus"
              style={{ width: "80%" }}
            />
          </div>
          <div className="basis-1/2 p-2">
          <h2 className='title'>Về Chúng Tôi</h2>
            <div className="box-description">
            V-Travel là hệ thống đặt phòng khách sạn trực tuyến hàng đầu, 
            giúp khách hàng dễ dàng tìm kiếm và đặt phòng tại các khách sạn uy tín trên khắp cả nước. 
            Với giao diện thân thiện, hệ thống thông minh và đội ngũ hỗ trợ tận tâm, chúng tôi cam kết mang lại trải nghiệm tốt nhất cho khách hàng. 
            Từ việc cung cấp đa dạng loại phòng với giá cả phù hợp đến những dịch vụ đi kèm chất lượng cao, V-Travel tự hào là lựa chọn đáng tin cậy cho mọi chuyến đi của bạn.
            </div>
            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Thông Tin Liên Hệ</h2>
            <ul className='box-description'>
              <li>Email: support@v-travel.com</li>
              <li>Hotline: 1800-1234 (Hỗ trợ 24/7)</li>
              <li>Địa chỉ: Tầng 12, Tòa nhà ABC, 123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh</li>
            </ul>
            <p className="title-description">Khách hàng có thể liên hệ với chúng tôi qua email hoặc hotline để được tư vấn và hỗ trợ đặt phòng. Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và đáp ứng các nhu cầu của bạn.</p>

          </div>
        </div>
      
   </section>
    );
  };
export default  Contact ; 

