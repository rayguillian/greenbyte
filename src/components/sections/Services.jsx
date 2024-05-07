import React, { useState, useEffect } from 'react';
import WebDesignIcon from '../icons/webdesign.svg';
import SEOIcon from '../icons/SEO.svg';
import Lottie from 'react-lottie';
import SoMeAnimation from '../icons/lottie/SoMe.json';
import servicebg from '../../assets/images/servicebg.svg';

const Services = () => {
  const [animateText, setAnimateText] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);
  const [animateLottie, setAnimateLottie] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const textPosition = document.getElementById('services-text').offsetTop;
      const iconPosition = document.getElementById('services-icons').offsetTop;
      const lottiePosition = document.getElementById('lottie-container').getBoundingClientRect().top + window.scrollY;

      if (scrollPosition > textPosition && !animateText) {
        setAnimateText(true);
      }
      if (scrollPosition > iconPosition && !animateIcons) {
        setAnimateIcons(true);
      }
      if (scrollPosition > lottiePosition && !animateLottie) {
        setAnimateLottie(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateText, animateIcons, animateLottie]);

  const lottieOptions = {
    loop: false,
    autoplay: false,
    animationData: SoMeAnimation,
  };

  const getSvgSize = () => {
    const viewportWidth = window.innerWidth;
    const sizeFactor = 0.15;  // Increased from 0.1 to 0.15
    const maxSvgSize = 250;   // Increased from 200 to 250
    const svgSize = Math.min(viewportWidth * sizeFactor, maxSvgSize);
    return { width: svgSize, height: svgSize };
};
  return (
    <section id="services" className="text-center py-20 bg-green-100" style={{ backgroundImage: `url(${servicebg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <h2 className="font-serif text-5xl text-secondary mb-12">
        Vores Services -
        <span id="services-text" className={`inline-block transition-opacity duration-1000 ease-in ${animateText ? 'opacity-100' : 'opacity-0'}`}>
          hvad kan vi gøre for dig?
        </span>
      </h2>
      <div className="text-center mx-auto max-w-7xl" id="services-icons">
        <div className={`flex items-center justify-center flex-col mb-10 transition-opacity duration-1000 ease-in ${animateIcons ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mx-auto max-w-xl">  {/* Increased max-width */}
            <p className="font-bold text-2xl mb-2">Vi designer din website!</p>
            <p className="font-sans text-xl">  {/* Increased font size */}
              For at hjælpe dig med at understøtte dine miljømæssige mål tilbyder vi at bygge en mere bæredygtig website;
              om så det gælder en helt ny website eller en opdatering af din nuværende.
            </p>
          </div>
          <img src={WebDesignIcon} alt="Web Design" style={getSvgSize()} />
        </div>

        <div className={`flex items-center justify-center flex-col mb-10 transition-opacity duration-1000 ease-in ${animateIcons ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center mx-auto max-w-xl">  {/* Increased max-width */}
            <p className="font-bold text-2xl mb-2">Vi sørger for SEO'en er i orden!</p>
            <p className="font-sans text-xl">  {/* Increased font size */}
 Vi konfigurerer ligeledes dine SEO-indstillinger omhyggeligt for at optimere din website's synlighed og rækkevidde på søgemaskinerne, hvilket bidrager til øget trafik og engagement.
            </p>
          </div>
          <img src={SEOIcon} alt="SEO" style={getSvgSize()} />
        </div>

        <div className={`flex flex-col items-center mb-10 transition-opacity duration-1000 ease-in ${animateLottie ? 'opacity-100' : 'opacity-0'}`} id="lottie-container">
          <div className="text-center mx-auto max-w-xl">  {/* Increased max-width */}
            <p className="font-bold text-2xl mb-2">Kreativ Content</p>
            <p className="font-sans text-xl">  {/* Increased font size */}
            Vi tager også hånd om design og produktion af det medieindhold, der kræves til din hjemmeside, samt opbygningen af dit brand på sociale medier. Dette giver os mulighed for at markedsføre dig med et mindre belastende klimaaftryk end tidligere, samtidig med at vi styrker dit image.
            </p>
          </div>
          <Lottie
            options={lottieOptions}
            height={200}
            width={200}
            isStopped={!animateLottie}
            isPaused={!animateLottie}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
