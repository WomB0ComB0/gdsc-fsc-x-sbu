'use client';

import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Outfit({ subsets: ['latin'] });

export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
