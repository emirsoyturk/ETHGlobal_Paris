import { ConnectButton } from "@rainbow-me/rainbowkit";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-darkGreen p-4">
      <div className="text-white font-bold text-xl">Trusty Order</div>
      <div className="flex space-x-4">
        {/* <button className="bg-lightGreen text-darkGreen rounded-md p-2 transform hover:scale-105 transition-transform">
          Wallet Connect
        </button> */}
        <ConnectButton />
        {/* Diğer düğmeler veya bağlantılar buraya eklenebilir */}
      </div>
    </div>
  );
}

export default Navbar;
