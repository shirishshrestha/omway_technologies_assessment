import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout as authLogout } from "../redux/authSlice";
import { useRouter } from "next/navigation";

type BroadcastMessageType = "logout" | "login";

const useCrossTabLogout = (): ((messageType: BroadcastMessageType) => void) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    const channel = new BroadcastChannel("auth-channel");
    channelRef.current = channel;

    const handleMessage = (event: MessageEvent) => {
      if (event.data === "logout") {
        dispatch(authLogout());
        router.push("/login");
      }
      if (event.data === "login") {
        router.push("/");
        // optionally update Redux state from localStorage
      }
    };

    channel.addEventListener("message", handleMessage);

    return () => {
      channel.removeEventListener("message", handleMessage);
      channel.close();
    };
  }, [dispatch, router]);

  const broadcast = (messageType: BroadcastMessageType) => {
    channelRef.current?.postMessage(messageType);
  };

  return broadcast;
};

export default useCrossTabLogout;
