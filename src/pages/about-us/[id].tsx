import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Background from '../../components/Background';
import Hero from '../../components/Hero';
import Seo from '../../components/Seo';

interface Props {
  employee: {
    name: string;
    role: string;
    id: number;
    creds: string;
    bio: string;
    shortbio: string;
    img: string;
    active: boolean;
  };
}

type NextGetStaticPropsCtx = {
  params: {
    id: string;
  };
  preview?: boolean;
};

export default function AboutUs({ employee }: Props) {
  return (
    <>
      <Seo templateTitle={employee.name} />

      <main>
        <section className="">
          <Hero
            title="About Us"
            description="Redding’s Premier Cardiology Services"
          />
          <Background image="pattern2.png" width={300} height={300}>
            <div className="my-auto py-16 w-full">
              <div className="max-w-md mx-auto px-4 py-8 relative sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="bg-white max-w-3xl mx-auto p-6 relative rounded-xl shadow-sm">
                  <Link
                    href="/about-us"
                    className="text-gray-500 underline hover:text-gray-900"
                  >
                    &larr; Back to team
                  </Link>
                  <h2 className="border-b-2 border-gray-200 mt-4 pb-6 font-semibold text-2xl text-center tracking-tight sm:text-3xl">
                    {employee.name}
                    <span className="block mt-1 text-base font-normal text-gray-500">
                      {employee.creds}
                    </span>
                  </h2>
                  <dl className="mt-6">
                    <div className="border-t border-gray-200 py-6 first:border-t-0 first:pt-0">
                      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                        <Image
                          src={'/' + employee.img}
                          fill
                          style={{ objectFit: 'cover' }}
                          alt={employee.name}
                        />
                      </div>
                    </div>
                    <div className="border-t border-gray-200 py-6">
                      <h3 className="font-medium text-gray-900 text-lg">
                        {employee.role}
                      </h3>
                      <p className="mt-1 text-gray-500 whitespace-pre-wrap">
                        {employee.bio}
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

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/content/employees`);

  const employees = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`${process.cwd()}/content/employees/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    return {
      params: {
        id: data.slug,
      },
    };
  });

  return {
    paths: employees,
    fallback: false,
  };
}

export async function getStaticProps({ params }: NextGetStaticPropsCtx) {
  const slug = params.id;
  const markdownWithMetadata = fs
    .readFileSync(`${process.cwd()}/content/employees/${slug}.md`)
    .toString();
  const { data } = matter(markdownWithMetadata);

  return {
    props: {
      employee: data,
    },
  };
}
