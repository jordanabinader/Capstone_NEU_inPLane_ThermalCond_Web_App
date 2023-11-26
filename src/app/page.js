import React from 'react';
import Procedure from '../components/Procedure';
import Hero from '../components/Hero';
import TestConstants from '../components/TestConstants';

export default function Home() {

  return (
      <main>
        <Hero />
        <Procedure />
        <TestConstants />
      </main>
  );
}
