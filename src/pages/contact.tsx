import Link from 'next/link';
import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

import Hero from '../components/Hero';

export default function Contact() {
  return (
    <>
      <Seo templateTitle="Contact" />

      <main>
        <section className="">
          <Hero
            title="Contact"
            description="Redding's Premier Cardiology Services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="my-auto py-16 w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white max-w-3xl mx-auto p-6 relative rounded-xl shadow-sm">
                  <h2 className="border-b-2 border-gray-200 pb-6 font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    Get in touch:
                  </h2>
                  <dl className="mt-6">
                    <div className="border-t border-gray-200 py-6 first:border-t-0 first:pt-0">
                      <h3 className="font-medium text-gray-900 text-lg">
                        Phone
                      </h3>
                      <Link
                        href="tel:530-244-4471"
                        className="mt-1 text-gray-500 underline hover:text-gray-900"
                      >
                        (530) 244-4471
                      </Link>
                    </div>

                    <div className="border-t border-gray-200 py-6">
                      <h3 className="font-medium text-gray-900 text-lg">Fax</h3>
                      <Link
                        href="tel:530-244-1407"
                        className="mt-1 text-gray-500 underline hover:text-gray-900"
                      >
                        (530) 244-1407
                      </Link>
                    </div>

                    <div className="border-t border-gray-200 py-6">
                      <h3 className="font-medium text-gray-900 text-lg">
                        Office Hours
                      </h3>
                      <div className="mt-1 text-gray-500">
                        <p>Mon - Thu: 8 AM - 12:30 PM, 1:30 PM - 4:30 PM</p>
                        <p>Fri: 8 AM - 12 PM</p>
                        <p>Sat - Sun: Closed</p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 last:pb-0">
                      <h3 className="font-medium text-gray-900 text-lg">
                        Location
                      </h3>
                      <p className="mt-1 text-gray-500">
                        1555 East St STE 100
                        <br />
                        Redding, California 96001
                      </p>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
