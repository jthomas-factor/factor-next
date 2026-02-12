import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" aria-label="Return to the top of the home page">
      <Image
        src="/factor_logo_A_raster.png"
        width={160}
        height={48}
        alt="Factor logo"
        style={{ width: '100%', height: 'auto' }}
        priority
      />
    </Link>
  );
};

export default Logo;
