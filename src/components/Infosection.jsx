import React from "react";

export default function Infosection() {
  return (
    <>
      <section className=" w-full mb-20 " >
        <div className="m-10 rounded-2xl flex  md:flex-row flex-col justify-evenly  bg-gradient-to-r from-gray-600 to-green-200" style={{height : "300px"}}>
          <div className="flex md:flex-row flex-col  w-full">
            <div className="md:w-1/2 w-full md:h-ful h-full flex flex-row justify-center items-center">
              <img
                src="logo.png"
                className="  hidden md:flex md:w-98 md:h-auto"
                style={{filter: "drop-shadow(20px 20px 10px black)"}}
                alt=""
              />
            </div>
            <div className="md:w-1/2 w-full md:h-ful h-full flex flex-row ">
              <div className="h-full text-start flex flex-row justify-center items-center">
                <p className=" text-center text-2xl p-6">
                  We are on a mission to boost the NFT Ecosystem by increasing
                  the buying potential of users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
