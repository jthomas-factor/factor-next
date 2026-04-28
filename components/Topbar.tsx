import { RiPhoneFill } from 'react-icons/ri';
import Socials from './Socials';

const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 xl:h-16 xl:py-0 bg-primary flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-primary flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-white">+1 (615) 321-4848</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-primary flex items-center justify-center">
                <RiPhoneFill />
              </div>
              <p className="font-medium text-white">+1 (202) 891-6000</p>
            </div>
          </div>
          <Socials
            containerStyles="flex items-center gap-4 mx-auto xl:mx-0"
            iconStyles="w-8 h-8 bg-white text-primary flex items-center justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Topbar;
