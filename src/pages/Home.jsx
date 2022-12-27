import { Header, SearchBar, Hero, GamesList, Footer } from '../components/';
import { thirtyGames } from '../api/mock-responses';
import React, { useState } from 'react';

export default function Home() {
  const [showSlider, setShowSlider] = useState(true);
  const { results } = thirtyGames;
  return (
    <>
      <Header />
      <SearchBar viewSlider={setShowSlider} />
      <Hero showSlider={showSlider} />
      <GamesList games={ results }/>
      <Footer />
    </>
  );
}
