import NavBar from "@/components/navbar";
import Player from "@/components/play/player";
import MetaData from "@/components/play/metadata";
import Comments from "@/components/play/comments";

import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { type comment } from "@/lib/types";

export default function Play() {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [title, setTitle] = useState("A charming scenic view");
  const [description, setDescription] = useState(
    "The mountains are calling and I must go. - John Muir",
  );
  const [username, setUsername] = useState("cryptoGuru");
  const [address, setAddress] = useState(
    "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
  );

  const metadata = {
    title: title,
    description: description,
    username: username,
    address: address,
  };

  const sampleComments: comment[] = [
    {
      text: "Great explanation of blockchain technology! It was very helpful.",
      username: "cryptoFan",
      address: "0x4e9ce36e442e55ecd9025b9a6e0d88485d628a67",
    },
    {
      text: "I've been looking for a beginner's guide to Ethereum. Thanks for this video!",
      username: "ethNewbie",
      address: "0x7e5F4552091A69177C56aeCd8C15E540c43245a5",
    },
    {
      text: "DeFi can be confusing, but this tutorial made it much clearer.",
      username: "defiLearner",
      address: "0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359",
    },
    {
      text: "I created my first NFT thanks to this video. Appreciate the help!",
      username: "nftCreator",
      address: "0x5e575279bf9f4acf0a130c186861454247394c06",
    },
    {
      text: "Your market analysis is spot on. Keep up the great work!",
      username: "marketWatcher",
      address: "0xE853c56864A2ebe4576a807D26Fdc4A0ada51919",
    },
  ];

  return (
    <div className="h-screen w-[72vw] mx-auto pt-4 text-left">
      <NavBar />
      <Player />
      <MetaData {...metadata} />
      <Comments comments={sampleComments} />
    </div>
  );
}
