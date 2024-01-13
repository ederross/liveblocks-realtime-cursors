"use client";

import { ReactNode, Suspense } from "react";
import { RoomProvider } from "../../liveblocks.config";
import { LiveObject } from "@liveblocks/client";
import { ClientSideSuspense } from "@liveblocks/react";

const Roomx = ({ children }: { children: ReactNode }) => {
  return (
    <RoomProvider id={"roomId"} initialPresence={{ cursor: null }}  initialStorage={{
      // ✅ This is a client component, so everything works!
      session: new LiveObject(),
    }}>
      <ClientSideSuspense fallback={"loading"}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Roomx;
