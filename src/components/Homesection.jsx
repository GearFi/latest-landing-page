import React from "react";


export default function () {
  return (
    <>

      <section>
       
        <div className="grid px-4 pt-10 pb-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 mb-5 md:ml-5 grid-flow-col">
         
          <div
            className="xl:pt-10 xl:pb-10 pt-5 pb-10  lg:col-span-12"
            style={{
              fontFamily: "Inter, Arial",
              fontWeight: "500",
              letterSpacing: "0.25rem",
              lineHeight: "2.46875rem",
              fontSize: "1.125rem",
            }}
          >
            <h
              className="max-w-2xl mb-4 text-4xl  leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white"
              style={{
                fontFamily: "Inter, Arial",
                fontWeight: "500",
                letterSpacing: "0.3rem",
                lineHeight: "2.46875rem",
                fontSize: "2rem",
              }}
            >
              GEAR UP YOUR NFT PURCHASE
            </h>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl mt-4">
              Protocols enabling BNPL and Margin Trading for NFTs
              
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 space-x-4">
              <a
                target="_blank"
                href="https://discord.com/invite/PJp2DbX64U"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black border-2 border-black bg-gradient-to-r  from-gray-800 to-green-200 "
              >
                Discord
              </a>
              <a
                target="_blank"
                href="https://armilaadarshs-organization.gitbook.io/gearfi_litepaper/welcome-to-gear_fi/abstract"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-center text-black  border-2 border-black bg-gradient-to-r from-green-200 to-gray-800 " 
              >
                Docs
              </a>
            </div>
          </div>
          <div>
          <img class ="hidden md:flex md: w-98" src="/assets/img/nft-trade.png" />
          </div>
        </div>
      </section>
    </>
  );
}
