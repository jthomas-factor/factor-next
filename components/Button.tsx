import React from 'react';
import Link from 'next/link';
import { RiArrowRightUpLine } from 'react-icons/ri';

interface Props {
  text: string;
  link?: string;
  type?: 'button' | 'submit';
}

const Button = ({ text, link = '', type }: Props) => {
  const classes =
    'w-[210px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-between min-w-[200px] group bg-primary cursor-pointer';

  if (link) {
    return (
      <Link href={link} className={classes}>
        <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-white text-sm uppercase">
          {text}
        </div>
        <div className="w-11 h-11 bg-white flex items-center justify-center">
          <RiArrowRightUpLine className="text-primary text-xl group-hover:rotate-45 transition-all duration-200" />
        </div>
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-white text-sm uppercase">
        {text}
      </div>
      <div className="w-11 h-11 bg-white flex items-center justify-center">
        <RiArrowRightUpLine className="text-primary text-xl group-hover:rotate-45 transition-all duration-200" />
      </div>
    </button>
  );
};

export default Button;
