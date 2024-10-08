import type { MetaFunction } from "@remix-run/node";
import Vimeo from "@u-wave/react-vimeo";
import Player from "@vimeo/player";
import { useEffect, useRef } from "react";
import { ClientOnly } from "~/components/client-only";
import Header from "~/components/Header";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const playerRef = useRef<HTMLDivElement>(null);
  const options = {
    id: 1017654374,
    loop: false,
    autoplay: false
  };

  useEffect(() => {

    if (playerRef.current !== null) {
      const player = new Player(playerRef.current, options);

      player.on("play", () => {
        console.log("play");
      });
    }
  }, []);

  return(
    <div>
      <Header />
      <div ref={playerRef}/>
        <ClientOnly>
          {() => (
            <Vimeo 
              video={options.id}         
              // width={640}
              // height={480}
            />
          )}
        </ClientOnly>
    </div>
  )
}
