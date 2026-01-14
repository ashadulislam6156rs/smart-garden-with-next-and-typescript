"use client"
import React from 'react';
import { Button } from '../ui/button';
import { signIn } from 'next-auth/react';

const LogInButton = () => {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => signIn()}
        className="text-blue-600 cursor-pointer border-2 border-green-500 hover:bg-blue-50"
      >
        LogIn
      </Button>
    );
};

export default LogInButton;