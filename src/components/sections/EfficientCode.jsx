// sections/EfficientCode.jsx
import React from 'react';
import Lottie from 'react-lottie';
import efficientCodeAnimation from '../../components/icons/lottie/tetris1.json';

const EfficientCode = ({ animate }) => {
  const defaultOptions = {
    autoplay: false,
    loop: true,
    animationData: efficientCodeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div id="efficient-code" className={`section mb-12 transition-opacity duration-1000 ease-in ${animate ? 'opacity-100' : 'opacity-0'}`}>
      <h3 className="font-bold text-3xl mb-3 text-center text-gray-200">Effektiv og genanvendelig kode</h3>
      <p className="text-lg mb-6 text-center text-gray-200">
        Ved at strukturere vores kode i små, modulære og genanvendelige komponenter reducerer vi serverbelastningen betydeligt. Dette mindsker energiforbruget ved dataoverførsler og øger effektiviteten over tid.
      </p>
       <p className="italic text-sm text-center text-gray-200">
        Fun fact: En gennemsnitlig hjemmeside genererer 1,76 g CO2 pr. sidevisning.
      </p>
      <div className="mx-auto my-6">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
    </div>
  );
};

export default EfficientCode;
