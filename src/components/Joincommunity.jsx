import React from "react";
import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaReddit,
} from "react-icons/fa";

export default function Joincommunity() {
  return (
    <div className="w-full text-gray-200 bg-black">
      <div className=" md:m-10 m-5 mb-0 p-10">
        <div className="text-center">
          <h1 className=" text-2xl font-bold">Join the community</h1>

          <p className=" text-lg font-normal">
            Learn more about GEAR, chat with the team, others in the community,
            and have your say in shaping the future of decentralized finance.
          </p>
        </div>
        <div className="flex flex-row flex-wrap sm:justify-between justify-center p-10">
          <div className="m-4 p-5 hover:bg-gray-900 flex flex-col justify-center items-center">
            <FaDiscord size={30} />
            <a target="_blank" href="https://discord.com/invite/PJp2DbX64U">
              <p className=" font-serif font-semibold text-lg">Discord</p>
            </a>
          </div>
          <div className="m-4 p-5 hover:bg-gray-900 flex flex-col justify-center items-center">
            <FaTwitter size={30} />
            <a target="_blank" href="https://twitter.com/Gear_Fi">
              <p className=" font-serif font-semibold text-lg">Twitter</p>
            </a>
          </div>
          <div className="m-4 p-5 hover:bg-gray-900 flex flex-col justify-center items-center">
            <FaLinkedin size={30} />
            <a target="_blank" href="https://www.linkedin.com/company/the-ledger-company0/">
              <p className=" font-serif font-semibold text-lg">LinkedIn</p>
            </a>
          </div>
          <div className="m-4 p-5 hover:bg-gray-900 flex flex-col justify-center items-center">
            <FaReddit size={30} />
            <a target="_blank" href="https://discord.com/invite/PJp2DbX64U">
              <p className=" font-serif font-semibold text-lg">Reddit</p>
            </a>
          </div>
          <div className="m-4 p-5 hover:bg-gray-900 flex flex-col justify-center items-center">
            <FaInstagram size={30} />
            <a target="_blank" href="https://instagram.com/gear.fi?igshid=ZGUzMzM3NWJiOQ==">
              <p className=" font-serif font-semibold text-lg">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
