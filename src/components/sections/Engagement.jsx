import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import sewingAnimation from '../../components/icons/lottie/sew2.json'; // Correct path for sewing animation
import plantAnimation from '../../components/icons/lottie/plant.json'; // Correct path for plant animation
import Button from '../../components/common/Button'; // Corrected path to Button component

const Engagement = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [animateForm, setAnimateForm] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateText, setAnimateText] = useState(false);
  const [animateLottie, setAnimateLottie] = useState(false);
  const [animatePlant, setAnimatePlant] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const formPosition = document.getElementById('form-container').offsetTop;
      const titlePosition = document.getElementById('engagement-title').offsetTop;
      const textPosition = document.getElementById('engagement-text').offsetTop;
      const lottiePosition = document.getElementById('lottie-container').offsetTop;
      const plantPosition = document.getElementById('plant-container').offsetTop;

      if (scrollPosition > formPosition && !animateForm) {
        setAnimateForm(true);
      }
      if (scrollPosition > titlePosition && !animateTitle) {
        setAnimateTitle(true);
      }
      if (scrollPosition > textPosition && !animateText) {
        setAnimateText(true);
      }
      if (scrollPosition > lottiePosition && !animateLottie) {
        setAnimateLottie(true);
      }
      if (scrollPosition > plantPosition && !animatePlant) {
        setAnimatePlant(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animateForm, animateTitle, animateText, animateLottie, animatePlant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); }, 3000);
  };

  return (
    <section id="engagement" className="text-center py-10 px-4 bg-accent">
      <h2 id="engagement-title" className="text-4xl font-serif text-primary mb-4" style={{opacity: animateTitle ? 1 : 0}}>Engagement</h2>
      <p id="engagement-text" className="max-w-2xl mx-auto text-lg font-sans" style={{opacity: animateText ? 1 : 0}}>
        Hos Greenbyte tilbyder vi skræddersyede løsninger, der passer til netop dine behov!
      </p>
      <div id="lottie-container" className="mx-auto mt-6" style={{opacity: animateLottie ? 1 : 0, maxWidth: '300px'}}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: sewingAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={300}
          width={300}
        />
      </div>
      <h3 className="text-xl font-serif text-black mt-6">Prisen er forhandlingsbar!</h3>
      <p className="max-w-2xl mx-auto text-lg font-sans" style={{opacity: animateText ? 1 : 0}}>
        Da vi forstår, at ingen to projekter eller situationer er ens og ønsker at imødekomme dig som individ eller virksomhed. Vores dedikerede team er klar til at hjælpe dig med at opnå dine mål for internetbæredygtighed!
      </p>
      <div id="plant-container" className="mx-auto" style={{opacity: animatePlant ? 1 : 0, maxWidth: '300px'}}>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: plantAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
          height={300}
          width={300}
        />
      </div>  {/* This was the missing closing tag */}
      <p className="max-w-2xl mx-auto text-lg font-sans transition-opacity duration-1000 ease-in-out" style={{opacity: animateText ? 1 : 0}}>
        Har du spørgsmål eller specifikke ønsker vedrørende din nyeste projekt eller internetbæredygtighedsmål? Vi står klar til at hjælpe!
      </p>
      <div id="form-container" className="container mx-auto mt-8" style={{opacity: animateForm ? 1 : 0}}>
        <h3 className="text-3xl font-serif text-black mb-6">Tøv ikke, kontakt os i dag!</h3>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">Navn</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border rounded py-2 px-3 text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded py-2 px-3 text-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">Besked</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border rounded py-2 px-3 text-black" rows="4" required />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        {submitted && (
          <p className="text-green-600 mt-4">Thank you! We will be in contact shortly.</p>
        )}
      </div>
    </section>
  );
};

export default Engagement;
