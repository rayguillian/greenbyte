import React, { useState, useEffect } from 'react';
import missbg from '../../assets/images/missbg.svg';
import Lottie from 'react-lottie';
import missionAnimation from '../../components/icons/lottie/missionani.json';

const Mission = () => {
  const [fadeInTitle, setFadeInTitle] = useState(false);
  const [fadeInBody, setFadeInBody] = useState(false);

  useEffect(() => {
    // Set the fadeInTitle state to true immediately after the component mounts
    setFadeInTitle(true);

    const fadeInBodyTimeout = setTimeout(() => {
      setFadeInBody(true);
    }, 400); // Set timer to fade in body after 0.4 seconds

    return () => {
      clearTimeout(fadeInBodyTimeout);
    };
  }, []);

  const missionOptions = {
    loop: true,
    autoplay: true,
    animationData: missionAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section id="mission" className="text-center p-10 bg-accent relative" style={{ backgroundImage: `url(${missbg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <h2 className={`font-serif text-4xl text-green-800 mb-8 ${fadeInTitle ? 'opacity-100 transition-opacity duration-1000 ease-in' : 'opacity-0'}`}>
        Hvorfor er bæredygtighed vores Mission?
      </h2>
      <div className="flex justify-center mx-auto max-w-4xl relative">
        <div className={`flex-1 px-4`} style={{ opacity: fadeInBody ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
          <div className="text-left">
            <p className={`font-sans text-lg leading-relaxed text-gray-900 mb-6 ${fadeInBody ? 'opacity-100' : 'opacity-0'}`}>
              Vi ønsker at hjælpe dig bedst muligt med en bæredygtig tilstedeværelse online.
            </p>
            <p className={`font-sans text-lg leading-relaxed text-gray-900 mb-6 ${fadeInBody ? 'opacity-100' : 'opacity-0'}`}>
              Formålet hos GreenByte er at yde en bæredygtig ekspertise inden for webdesign.
            </p>
          </div>
        </div>
        <div className={`flex-1 px-4`} style={{ opacity: fadeInBody ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}>
          <div className="text-left">
            <p className={`font-sans text-lg leading-relaxed text-gray-900 mb-6 ${fadeInBody ? 'opacity-100' : 'opacity-0'}`}>
              Dermed bidrager vi til at fremme miljøbevidste praksisser på internettet.
            </p>
            <p className={`font-sans text-lg leading-relaxed text-gray-900 ${fadeInBody ? 'opacity-100' : 'opacity-0'}`}>
              Sammen skaber vi en mere bæredygtig fremtid.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Lottie
          options={missionOptions}
          height={300}
          width={300}
          style={{ opacity: fadeInBody ? 1 : 0, transition: 'opacity 1.5s ease-in-out' }}
        />
      </div>
    </section>
  );
};

export default Mission;
