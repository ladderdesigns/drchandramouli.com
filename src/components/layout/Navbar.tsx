'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '/our-services', label: 'Our Services' },
  { href: '/patient-forms', label: 'Patient Forms' },
  { href: '/about-us', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
];

export default function Navbar() {
  const router = useRouter();

  function isActive(href: string) {
    return router.pathname.startsWith(href);
  }

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    <Image
                      src="/logo2.svg"
                      alt="logo"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:space-x-8 lg:flex">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`border-b-2 font-medium hover:border-red-500 hover:text-gray-700 inline-flex items-center pt-1 px-1 text-md ${
                        isActive(link.href)
                          ? 'border-red-500 text-gray-900'
                          : 'border-transparent text-gray-500'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 hover:bg-gray-100 hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md text-gray-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="pb-3 pt-2 space-y-1">
              {navLinks.map((link) => (
                <DisclosureButton
                  key={link.href}
                  as={Link}
                  href={link.href}
                  className={`block border-l-4 font-medium pl-3 pr-4 py-2 text-base ${
                    isActive(link.href)
                      ? 'bg-red-50 border-red-500 text-red-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {link.label}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
