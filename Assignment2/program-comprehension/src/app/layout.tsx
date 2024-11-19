import type { Metadata } from 'next';
import React from 'react';
import AppWrapper from './appWrapper';

import './style/global.css';

export const metadata: Metadata = {
  title: 'Program Comprehension Survey',
  description:
    'Application to analyze the program comprehension of users with different backgrounds',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
