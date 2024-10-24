import React from 'react'
import Layouts from './Layouts/Layout'

const Contact = () => {
    return (
      <Layouts title={"VTravel-Liên hệ với chúng tôi"}>
        <div className="row contactus ">
          <div className="col-md-6 ">
            <img
              src="src\Assets\img (1).jpg"
              alt="contactus"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
          </div>
        </div>
      </Layouts>
    );
  };
export default  Contact ; 

