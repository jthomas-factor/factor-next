import Link from 'next/link';
import { RiLinkedinFill } from 'react-icons/ri';

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  {
    icon: <RiLinkedinFill />,
    path: 'https://www.linkedin.com/company/factorinc/',
    label: 'Follow us on LinkedIn',
  },
];

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <div key={index} className="flex flex-row gap-3 items-center">
            <Link href={item.path} className={iconStyles}>
              {item.icon}
            </Link>
            <span className="font-bold text-white">
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
