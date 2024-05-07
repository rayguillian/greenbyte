import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-300 py-6 px-4 text-center">
      <nav className="flex justify-center space-x-4 mb-4">
        {[
          { label: 'Home', href: '#hero' },
          { label: 'Mission', href: '#mission' },
          { label: 'Services', href: '#services' },
          { label: 'Hvorfor Os', href: '#why-greenbyte' },
          { label: 'Engagement', href: '#engagement' },
        ].map(({ label, href }) => (
          <a key={label} href={href} className="hover:text-teal-100">{label}</a>
        ))}
      </nav>
      <div className="mb-2">
        Lavet af teamet @ <a href="hero" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-teal-100 font-bold">GreenByte Studios</a>
      </div>
    </footer>
  );
};

export default Footer;
