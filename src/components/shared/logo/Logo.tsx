import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link
        href={"/"}
        className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition-opacity"
      >
        <div className="flex flex-col items-center">
          <Image
            width={30}
            height={30}
            src="/assets/smart-gardern.png"
            alt="this is smart garden logo"
          />
          <span className="text-[8px] p-0 text-gray-700">
            <span className="text-black font-semibold">Smart</span>
            <span className="text-lime-600 font-semibold">Garden</span>
          </span>
        </div>
      </Link>
    );
};

export default Logo;