import { video } from "@/lib/types";
import axios from "axios";
import { useEffect } from "react";
import { GET_VIDEOS_API } from "@/lib/endpoints";

export default function Trending() {
  const sampleVideos: video[] = [
    {
      id: "1",
      title: "Blockchain Explained",
      description: "An in-depth look into how blockchain technology works.",
      thumbnail:
        "https://via.placeholder.com/150/0000FF/808080?text=Blockchain+Explained",
      username: "cryptoGuru",
      address: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
    },
    {
      id: "2",
      title: "Ethereum 101",
      description: "A beginner's guide to Ethereum and its smart contracts.",
      thumbnail:
        "https://via.placeholder.com/150/FF0000/FFFFFF?text=Ethereum+101",
      username: "ethMaster",
      address: "0xAb5801a7D398351b8bE11C439e05C5b3259aec9B",
    },
    {
      id: "3",
      title: "DeFi for Beginners",
      description:
        "Learn the basics of decentralized finance and how to get started.",
      thumbnail:
        "https://via.placeholder.com/150/00FF00/000000?text=DeFi+Beginners",
      username: "defiDude",
      address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    },
    {
      id: "4",
      title: "NFT Art Creation",
      description: "A tutorial on creating and selling your own NFT art.",
      thumbnail:
        "https://via.placeholder.com/150/FFFF00/000000?text=NFT+Art+Creation",
      username: "nftArtist",
      address: "0x267Be1C1D684F78cb4F6a176C4911b741e4FfDc0",
    },
    {
      id: "5",
      title: "Crypto Market Analysis",
      description:
        "Daily analysis and predictions for the cryptocurrency market.",
      thumbnail:
        "https://via.placeholder.com/150/FFA500/FFFFFF?text=Crypto+Market+Analysis",
      username: "marketAnalyst",
      address: "0xDc76Cd25977E0a5Ae17155770273ad58648900D3",
    },
  ];

  useEffect(() => {
    const fetchVideos = () => {
      axios
        .get(GET_VIDEOS_API, {
          withCredentials: true,

        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchVideos();
  });
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">Trending Today</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols:4 gap-4">
        {sampleVideos.map((video) => (
          <div key={video.id} className="py-4 rounded-md">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{video.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {video.description}
            </p>
            <p className="mt-2 text-base text-primary"> {video.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
