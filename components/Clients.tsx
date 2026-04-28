'use client';
import Image from 'next/image';
import PreTitle from './PreTitle';

const Clients = () => {
  const slides = [
    '/clients/ABS-Consulting.png',
    '/clients/Association-of-American-Railroads.png',
    '/clients/Bayer.png',
    '/clients/BNSF-Railway.png',
    '/clients/Canada-Pacific.png',
    '/clients/Canadian-National-Railway.png',
    '/clients/Chemtrade-logistics.png',
    '/clients/CHIP.png',
    '/clients/Coast-Guard.png',
    '/clients/CSX.png',
    '/clients/Dow-Agro-Science.png',
    '/clients/Dupont.png',
    '/clients/Entergy.png',
    '/clients/FBI.png',
    '/clients/FDA.png',
    '/clients/Federal-Highway-Administration.png',
    '/clients/Federal-Railroad-Administration.png',
    '/clients/FEMA.png',
    '/clients/FMCSA.png',
    '/clients/G-W.png',
    '/clients/Homeland-Security.png',
    '/clients/IBM.png',
    '/clients/Kansas-City-Southern-Lines.png',
    '/clients/Louisiana-HSEP.png',
    '/clients/MAWSS.png',
    '/clients/MDOT.jpg',
    '/clients/MMTA.png',
    '/clients/New-York-State-Emergency-Management-Office.png',
    '/clients/Norfolk-Southern.png',
    '/clients/Northop-Grumman.png',
    '/clients/PHMSA.png',
    '/clients/Railroad-Research-Foundation.png',
    '/clients/SafeTEC.png',
    '/clients/Transportation-Research-Board.png',
    '/clients/Union-Pacific.png',
    '/clients/University-of-Kentucky.png',
    '/clients/US-Department-of-Transportation.png',
  ];

  return (
    <>
      <div className="flex items-center justify-center w-full mb-8 mt-24">
        <PreTitle text="Selected Clients" />
      </div>
      <div className="bg-white overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...slides, ...slides].map((src, i) => (
            <div
              key={i}
              className="relative w-[150px] h-[120px] mx-6 flex-shrink-0 flex items-center justify-center"
            >
              <Image src={src} alt="client logo" fill className="object-contain" sizes="150px" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
