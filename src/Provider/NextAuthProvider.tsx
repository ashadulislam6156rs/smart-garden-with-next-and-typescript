"use client"

import { SessionProvider } from 'next-auth/react';
import React, { ReactNode } from 'react';

type NextAuthProviderProps = {
  children: ReactNode;
};

const NextAuthProvider = ({ children }: NextAuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextAuthProvider;