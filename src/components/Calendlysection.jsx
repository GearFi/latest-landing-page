import React from "react";

export default function Calendly() {
  return (
    <>
      <section className="w-full mb-20">
        <div className="m-10 rounded-2xl flex md:flex-row flex-col justify-evenly bg-gradient-to-r from-gray-600 to-green-200">
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-1/2 w-full md:h-full h-full flex flex-row">
              <div className="h-full text-start flex flex-row justify-center items-center p-6">
                <p className="text-center text-2xl">
                  We are actively adding NFT Traders in our waitlist, connect with us if you like our project and want to support us.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-full md:h-full h-full flex flex-col justify-center items-center p-6">
              <img src="/assets/img/calendly.png" className="h-40" />
              <a
                target="_blank"
                href="https://calendly.com/armilaadarsh/30min?month=2023-05"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black border-2 border-black bg-transparent mt-4"
              >
                Schedule Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
