import { TfiWallet } from "react-icons/tfi";

const Logo = () => {
  return (
    <div>
      <a className="text-2xl flex gap-2 font-semibold">
        <i className="text-3xl">
          <TfiWallet />
        </i>
        <p>Wallet</p>
      </a>
    </div>
  );
};

export default Logo;
