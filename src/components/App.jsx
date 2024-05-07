import React, { lazy, Suspense, useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

// Lazy load components
const LazyHeroSection = lazy(() => import('./sections/HeroSection'));
const LazyMission = lazy(() => import('./sections/Mission'));
const LazyServices = lazy(() => import('./sections/Services'));
const LazyWhyGreenByte = React.lazy(() => import('./sections/WhyGreenByte'));

const LazyEngagement = lazy(() => import('./sections/Engagement'));

// Fallback component, can be replaced with a custom spinner or placeholder
const Loading = () => <div>Loading...</div>;

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    // Check if the fonts are loaded
    document.fonts.ready.then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen" style={{ overflowX: 'hidden' }}>
      <Header />
      <main className="flex-grow" style={{ overflowX: 'hidden' }}>
        {/* Render only if fonts are loaded */}
        <Suspense fallback={<Loading />}>
          {fontsLoaded && (
            <>
              <LazyHeroSection />
              <LazyMission />
              <LazyServices />
              <LazyWhyGreenByte />
              <LazyEngagement />
            </>
          )}
        </Suspense>
        {/* Show loading indicator while fonts are loading */}
        {!fontsLoaded && <Loading />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
