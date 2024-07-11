import createWeb3Avatar from "web3-avatar";
import { useEffect } from "react";
import Heart from "react-animated-heart";
import { useState } from "react";

interface MetadataProps {
  title: string;
  description: string;
  username: string;
  address: string;
}

export default function MetaData(props: MetadataProps) {
  const [isClick, setClick] = useState(false);
  useEffect(() => {
    createWeb3Avatar("#play-avatar", props.address);
  }, []);
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 p-4">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-sm text-muted-foreground">{props.description}</p>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-2 mt-2">
            <div id="play-avatar" className="h-8 w-8 rounded-full"></div>
            <p className="text-primary">{props.username}</p>
          </div>
          <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        </div>
      </div>
    </div>
  );
}
