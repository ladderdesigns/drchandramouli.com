import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Background from '@/components/Background';
import Seo from '@/components/Seo';

export default function Index() {
  return (
    <>
      <Seo templateTitle="Home" />
      <main>
        <section className="">
          <Background image="pattern2.png" width={300} height={300}>
            <div className="bg-gradient-to-br from-red-700 mb-20 py-24 to-red-900 w-full md:py-32">
              <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="text-center">
                  <h1 className="font-bold text-4xl text-white md:text-5xl lg:text-6xl">
                    Dr. B.V. Chandramouli
                  </h1>
                  <p className="font-light mt-4 text-xl text-white/90 md:text-2xl lg:text-3xl">
                    Redding&apos;s Premier Cardiology Services
                  </p>
                  <div className="flex flex-col gap-4 items-center justify-center mt-8 sm:flex-row">
                    <Link
                      href="/our-services"
                      className="bg-white font-semibold px-8 py-3 rounded-lg text-lg text-red-800 transition hover:bg-gray-100"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="/patient-forms"
                      className="bg-white font-semibold px-8 py-3 rounded-lg text-lg text-red-800 transition hover:bg-gray-100"
                    >
                      Patient Forms
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent mb-20 sm:mt-12 lg:my-24">
              <div className="bg-red-800 pb-16 pt-1 lg:pb-0 lg:pt-0 lg:relative lg:z-10">
                <div className="lg:gap-8 lg:grid lg:grid-cols-3 lg:max-w-7xl lg:mx-auto lg:px-8">
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="max-w-md mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                        <div>
                          <svg
                            className="h-16 opacity-25 text-white w-16"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                          </svg>
                          <p className="mb-10 mt-4 text-2xl text-white lg:mb-0">
                            <span className="block font-semibold mb-4">
                              We are Redding&apos;s premier cardiology
                              practice.{' '}
                            </span>
                            Our cardiology clinic has over 20 years of
                            experience in providing expert care for a wide range
                            of cardiovascular conditions. Our team of highly
                            skilled and experienced medical professionals
                            specializes in both general and interventional
                            cardiology, and we are dedicated to delivering
                            personalized, compassionate care to help you
                            maintain optimal heart health.{' '}
                          </p>
                        </div>
                        <footer className="mb-6 mt-6">
                          <p className="font-medium text-base text-white"></p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                  <div className="relative lg:-my-8">
                    <div
                      aria-hidden="true"
                      className="absolute bg-transparent h-1/2 inset-x-0 top-0 z-0 lg:hidden"
                    />
                    <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                      <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                        <Image
                          className="object-cover rounded-xl lg:h-full lg:w-full"
                          src="/sundial2.jpeg"
                          fill
                          style={{ objectFit: 'cover' }}
                          alt="The Sundial Bridge in Redding, California"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-transparent mb-20 sm:mt-12 lg:my-24">
              <div className="bg-red-800 pb-16 pt-16 lg:pb-0 lg:pt-0 lg:relative lg:z-10">
                <div className="lg:gap-8 lg:grid lg:grid-cols-3 lg:max-w-7xl lg:mx-auto lg:px-8">
                  <div className="relative lg:-my-8">
                    <div
                      aria-hidden="true"
                      className="absolute bg-transparent h-1/2 inset-x-0 top-0 z-0 lg:hidden"
                    />
                    <div className="max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                      <div className="aspect-h-6 aspect-w-10 overflow-hidden rounded-xl shadow-xl sm:aspect-h-7 sm:aspect-w-16 lg:aspect-none lg:h-full">
                        <Image
                          className="object-cover rounded-xl lg:h-full lg:w-full"
                          src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF0aWVudHxlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60"
                          fill
                          style={{ objectFit: 'cover' }}
                          alt="doctor office picture"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="max-w-md mx-auto px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                      <blockquote>
                        <div>
                          <svg
                            className="h-12 opacity-25 text-white w-12"
                            fill="currentColor"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                          <p className="mt-6 text-2xl text-white">
                            Dr. Chandramouli and his staff were all very
                            friendly and helpful. I especially loved how Dr.
                            Chandramouli really took his time to explain my
                            conditions with me as well as my treatment options.
                            I had a great visit and his demeanor has really put
                            me at ease. I highly reccomend his services.
                          </p>
                        </div>
                        <footer className="mt-6">
                          <p className="font-semibold text-base text-white">
                            - A valued patient
                          </p>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Background>
        </section>
      </main>
    </>
  );
}
