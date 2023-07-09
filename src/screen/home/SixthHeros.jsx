import React from 'react';
import Images from "../../assets/images/index";
import {LiaLongArrowAltRightSolid} from "react-icons/lia";

const SixthHeros = () => {
  return (
    <div className=" lg:h-[691px] flex items-center my-5 lg:my-0">
    <div className="container mx-auto">
      <div className=" flex">
        <div className=" relative w-[624px] h-[100%] hidden lg:block">
          <img src={Images?.Inquiry} alt=" injuirty" />
          <div className=" inquirty"></div>
          {/*  */}
          <div className="  absolute top-[20%] left-[10%] space-y-3">
            <h1 className="w-[464px] h2 text-white">
              Building stellar websites for early startups
            </h1>
            <p className="para text-c_accent w-[464px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua
              ut enim.
            </p>
          </div>

          <div className=""></div>
        </div>

        <div className=" lg:w-[624px]  bg-tint_blue flex flex-col items-center justify-center py-5 lg:py-0 px-3 lg:px-0">
          <div className=" lg:w-[432px] space-y-3">
            <h5 className=" h5 text-white lg:text-left  text-center">Send inquiry</h5>
            <p className="para text-gray-500 lg:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className="">
            <form action="" className=" lg:w-[432px] w-[325px] h-[224px] mt-5 ">
              {/* <input type="text" className=" w-[100%] bg-transparent "/> */}
              <div className="my-2 ">
                
                <input
                  type="text"
                  id="text"
                  className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                  placeholder="Your Name"
                  required=""
                />
              </div>

              <div className="my-2 ">
                
                <input
                  type="email"
                  id="email"
                  className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                  placeholder="Email"
                  required=""
                />
              </div>
              <div className="my-2 ">
                
                <input
                  type="url"
                  id="url"
                  className=" bg-transparent border border-gray-500 shadow-md text-c_gray text-sm rounded-lg   block w-full p-2.5  "
                  placeholder="Paste your Figma design URL"
                  required=""
                />
              </div>
              
              <button className=" bg-c_yellow w-[100%] lg:p-3 lg:text-[18px] p-2 rounded-full my-5">Send an Inquiry</button>
              <div className=" text-c_accent lg:flex gap-3 justify-center hidden ">
                <span>Get in touch with us</span>
                 <LiaLongArrowAltRightSolid size={25}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SixthHeros
