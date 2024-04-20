import React from 'react';
import { useAuth } from '../contexts/auth';

const Home = () => {
  const { user } = useAuth();

  return (
    <main className="px-4 py-[300px]">
      <h1 className="text-center text-2xl font-extrabold">
        Hi, {user?.name} <br />
        Welcome to Bribbble
      </h1>
    </main>
  );
};

export default Home;
