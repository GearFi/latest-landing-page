import React from "react";

export default function Moreinfosection() {
  return (
    <>
      <div
        className=" md:w-200 m-5 rounded-2xl text-white"
        style={{ display: "flex", flexDirection: "column", fontFamily: "sans-serif"}}
      >
        {/* <div className="flex flex-row justify-center mt-5 mb-5">
          <h1 className=" text-3xl fonr-bold pt-8 text-center" style={{}}>
            Taking Buy Now Pay Later for NFTs a step Ahead! <br />
            Introducing Margin Trading for NFTs
          </h1>
        </div> */}

        <div className="flex md:flex-row flex-col py-10 px-4 ">
          <div className="md:w-1/2 w-full md:h-auto flex justify-center">
            <img
              src="assets/img/nfts-1.png"
              className="w-100 "
              alt=""
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
            <div className="h-3/4 p-3 text-start mt-5">
              <h1 className=" text-4xl font-bold mb-8" style={{}}>
                Buy More
              </h1>
              <div className="text-xl">
                <p>Using our BNPL features, users can buy NFTs with a down payment.</p><br/>
                <p>Lets take an EXAMPLE of Azuki to understand:</p><br/>
                <p>On GearFi App you can buy 15 ETH Azuki from any marketplace by paying just a 3 ETH down payment.</p><br/> 
                <p>You can pay rest of the amount later and claim your NFT</p>
              </div>
            </div>
            
          </div>
        </div>
        <div className="flex md:flex-row flex-col py-10 px-4 ">
        <div className="flex md:flex-row flex-col  ">
          <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
            <div className="h-3/4 p-3 text-start mt-5">
              <h1 className=" text-4xl font-bold mb-8">Earn More</h1>
              <div className="text-xl">
              <p>Did your Azuki's price just shoot up?</p><br/>

                <p>Using our Margin Trading feature, Sell your reserved Azuki for 17 ETH</p> <br/> 
                <p>Your Sale amount will automatically be used to repay your current BNPL Loan position and you can make a profit of 2 ETH on your 3 ETH down payment</p>
                
                
              </div>
            </div>
           
          </div>
          <div className="md:w-1/2 w-full md:h-auto flex justify-center">
            <img
              src="/assets/img/trading.png"
              className="w-100 border-2 border-black"
              alt=""
            />
          </div>
        </div>
        </div>

        {/* <div className="flex md:flex-row flex-col py-10 px-4 ">
          <div className="md:w-1/2 w-full md:h-auto flex justify-center">
            <img src="assets/img/vault.png" className="w-96" alt="" />
          </div>
          <div className="md:w-1/2 w-full flex flex-col md:m-3 mt-2">
            <div className="h-3/4 p-3 text-start mt-5">
              <h1 className=" text-4xl font-bold p-2 mb-8" style={{}}>
                Stake your ETH
              </h1>
              <div className="text-2xl">
                <p>
                  {" "}
                  Stake in our vaults to earn rewards from the interests paid by the BNPL
                  users.
                </p>
              </div>
            </div>
            <div className="md:h-1/4 h-20">
              <div className="h-3/4 p-2 flex flex-row">
                <button className="ml-4 inline-flex items-center px-3 py-4 text-lg font-medium text-center text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 ">
                  Open App
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
