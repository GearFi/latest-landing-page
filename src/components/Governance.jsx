import React from "react";

export default function Governance() {
  return (
    <>
      <div className="pt-10 pb-20 mt-10 mb-20 h-auto">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-center mt-5 mb-5">
            <h1 className=" text-4xl font- text-white m-5 p-5" style={{fontFamily: "Inter, Arial",
                fontWeight: "500",
                letterSpacing: "0.2rem",
                fontSize: "2rem",}}>
              GEARFI PROTOCOLS
            </h1>
          </div>
          <div className="flex flex-row flex-wrap justify-center mt-5 mb-5">
            <div class="w-80 p-6 h-80 rounded-xl shadow-2xl  m-4  bg-gradient-to-r from-gray-600 to-green-200">
              <a href="#">
                <h5 class="text-3xl mb-4 pt-4 font-bold tracking-tight text-gray-900 ">
                  Buy Now Pay Later
                </h5>
              </a>
              <p class="text-4xl mb-5 pt-3 font-normal text-gray-700 dark:text-black">
                Just pay a fraction to buy your favourite NFTs
              </p>
            </div>

            <div class=" w-80 p-6 h-80 shadow-2xl rounded-xl bg-green-200 m-4">
              <a href="#">
                <h5 class="text-3xl mb-4 pt-4 font-bold tracking-tight text-gray-900 ">
                  Margin Trading
                </h5>
              </a>
              <p class="text-4xl mb-5 pt-3 font-normal text-gray-700 dark:text-black">
                Trade your NFT while the BNPL loan is still active
              </p>
            </div>

            <div class="w-80 p-6 h-80 rounded-2xl shadow-xl  m-4 bg-gradient-to-r from-green-200 to-gray-600 ">
              <a href="#">
                <h5 class="text-3xl mb-4 pt-4 font-bold tracking-tight text-gray-900 ">
                  Staking
                </h5>
              </a>
              <p class="text-4xl mb-5 pt-2 font-normal text-gray-700 dark:text-black">
                Stake ETH into BNPL Vaults to earn interest
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
