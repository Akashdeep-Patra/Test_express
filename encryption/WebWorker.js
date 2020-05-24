import Encryption from "./Encryption";

export default function WebWorker(args) {
  let onmessage = (e) => {
    const en = new Encryption();
    postMessage(en.encrypt(e.data));
  };
}
