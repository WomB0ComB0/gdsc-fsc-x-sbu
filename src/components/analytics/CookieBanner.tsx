'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'denied';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);
  return (
    <>
      <Card
        className={`fixed inset-x-0 bottom-0 mx-auto
      my-10 flex max-w-max flex-col items-center
      justify-between gap-4 rounded-lg bg-gray-700 p-3 text-white shadow sm:flex-row md:max-w-screen-sm  
      md:px-4 ${cookieConsent ? 'hidden' : 'flex'}`}
      >
        <CardContent className={`flex w-full flex-row items-center justify-between gap-4 py-0`}>
          <div className="text-center">
            <Link href="/info/cookies">
              <p>
                We use <span className="font-bold text-sky-400">cookies</span> on our site.
              </p>
            </Link>
          </div>

          <menu className="flex gap-2 ">
            <li
              className={`

                `}
            >
              <Button className="..." onClick={() => setCookieConsent(false)}>
                Decline
              </Button>
            </li>
            <li>
              <Button className="..." onClick={() => setCookieConsent(true)}>
                Allow Cookies
              </Button>
            </li>
          </menu>
        </CardContent>
      </Card>
    </>
  );
}
