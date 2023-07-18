import React from "react";
import { Link } from "react-router-dom";


const Logo = () => {
  return (
    <Link
      to="/"
      className="
     absolute top-[1.5rem] left-[1.5rem] [text-decoration:none]
text-lg text-cyan flex items-center
     "
    >
      <img className="w-[3rem]" src="bitcoin.png" alt="CryptoBucks" />
      <span>CryptoTown</span>
    </Link>
  );
};

export default Logo;
