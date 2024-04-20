import React from 'react';
import { MdMarkEmailRead } from 'react-icons/md';
import { useAuth } from '../contexts/auth';

const EmailVerifyPage = () => {
  const { user } = useAuth();

  return (
    <main>
      <div className="max-w-[800px] min-h-full mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Please check your email...</h1>

        <MdMarkEmailRead className="text-9xl text-pink-600" />

        <p className="text-xl font-semibold text-[#7d7c7c]">
          Please check your email address. We've sent a thank you email to:
          <br /> <br />
          <span className="font-bold text-black">{user?.email}</span>
        </p>
      </div>
    </main>
  );
};

export default EmailVerifyPage;
