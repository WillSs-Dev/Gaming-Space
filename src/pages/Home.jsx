import { Header, SearchBar, Hero, GamesList } from '../components/';
import React, { useState } from 'react';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  return (
    <>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      <GamesList />
    </>
  );
}
