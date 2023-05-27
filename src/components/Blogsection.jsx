import React from 'react';

const BlogSection = () => {
  const blogsData = [
    {
      id: 1,
      title: "Exploring NFTs: More than a Jpeg",
      content: "What is an NFT? A non-fungible token (NFT) is an unchangeable digital identity stored in a blockchain and used to verify ownership and authenticity..",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Lvx7-dQT6W7MSTHaoBjYSQ.jpeg",
      link: "https://medium.com/@gearfi47/exploring-nfts-more-than-a-jpeg-cefb2e4c9a5d"
    },
    {
      id: 2,
      title: "7 Key Things You Need to Know About Bitcoin NFTs Ordinals Before Creating Your Own",
      content: "Discover the captivating realm of Bitcoin NFTs Ordinals, where the power of blockchain goes beyond financial transactions.",
      image: "https://miro.medium.com/v2/resize:fit:620/format:webp/1*X0a4qydEE3_9AEwG_SGqmw.jpeg",
      link: "https://medium.com/@gearfi47/7-key-things-you-need-to-know-about-bitcoin-nfts-ordinals-before-creating-your-own-161e2c199d8d"
    },
    {
      id: 3,
      title: "Welcome to GearFi - A Buy Now Pay Later NFT marketplace",
      content: "GearFi is an NFT marketplace where users can buy NFTs without having to pay the upfront price. Just pay a fraction now and the rest of the amount later.",
      image: "https://miro.medium.com/v2/resize:fit:786/format:webp/1*WfgJWBYaLl4X5QSkSYU0Zg.png",
      link: "https://medium.com/@gearfi47/welcome-to-gearfi-a-buy-now-pay-later-nft-marketplace-8d6b45782cc"
    }
  ];

  return (
    <div className="blog-section">
      <h2 className=" text-center m-5 text-white" style={{
            fontFamily: "Inter, Arial",
            fontWeight: "500",
            letterSpacing: "0.2rem",
            fontSize: "2rem",
          }}>Latest Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">
        {blogsData.map((post) => (
          <a href={post.link} target="_blank" rel="noopener noreferrer" key={post.id}>
            <div className="bg-[#0f0f23] shadow-md p-4 rounded-md cursor-pointer h-[400px]">
              <h3 className="text-lg font-bold mb-2 text-gray-200">{post.title}</h3>
              <img src={post.image} alt={post.title} className="mb-2 rounded-md " />
              <p className="text-gray-400">{post.content}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
