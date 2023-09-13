import { io } from "socket.io-client";
//import { url } from "./authApi";
const url = "http://62.72.31.204:1300";
const socket = io(url, {
  autoConnect: true,
  protocols: ["http", "https"],
  withCredentials: true,
  transports: ["websocket"],
});
export default socket;
