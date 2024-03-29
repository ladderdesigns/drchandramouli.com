import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

// import ContactFrom from '../components/ContactForm';
import FAQ from '../components/FAQ';
import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Seo templateTitle="Contact" />

      <main>
        <section className="">
          <Hero
            title="Contact"
            description="Redding’s Premier Cardiology Services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            {/* <ContactFrom /> */}
            <FAQ />
          </Background>
        </section>
      </main>
    </>
  );
}
