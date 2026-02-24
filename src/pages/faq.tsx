import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

import FAQ from '../components/FAQ';
import Hero from '../components/Hero';

export default function FAQPage() {
  return (
    <>
      <Seo templateTitle="FAQ" />

      <main>
        <section className="">
          <Hero
            title="FAQ"
            description="Redding's Premier Cardiology Services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <FAQ />
          </Background>
        </section>
      </main>
    </>
  );
}
