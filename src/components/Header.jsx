import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import { useAuth } from '../contexts/auth';

const Header = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, name: `Inspirational`, path: `#` },
    { id: 2, name: `Find Work`, path: `#` },
    { id: 3, name: `Learn Design`, path: `#` },
    { id: 4, name: `Go Pro`, path: `#` },
    { id: 5, name: `Hire Designer`, path: `#` },
  ];

  return (
    <header className="shadow">
      <div className="container py-4 flex items-center justify-between">
        <div className="basis-1/2 lg:basis-[20%]">
          <Link to="/" className="font-extrabold text-2xl">
            Bribbble
          </Link>
        </div>

        <div className="lg:basis-[60%] hidden lg:flex lg:items-center lg:justify-center gap-10 text-sm font-semibold">
          {navLinks.map(navLink => (
            <NavLink key={navLink.id}>{navLink.name}</NavLink>
          ))}
        </div>

        <div className="lg:basis-[20%] hidden lg:flex items-center justify-end lg:gap-1 ">
          <button className="text-2xl float-right hover:text-primary-hover-color duration-150 cursor-pointer">
            {user ? (
              <img
                className="rounded-full border"
                src={user?.profilePicture}
                height={40}
                width={40}
              />
            ) : (
              <img
                className="rounded-full border"
                src="https://www.w3schools.com/howto/img_avatar.png"
                height={40}
                width={40}
              />
            )}
          </button>
        </div>

        <div className="basis-1/2 lg:hidden">
          <button
            className="text-2xl float-right hover:text-primary-hover-color duration-150 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {user ? (
              <img
                className="rounded-full border"
                src={user?.profilePicture}
                height={40}
                width={40}
              />
            ) : (
              <img
                className="rounded-full border"
                src="https://www.w3schools.com/howto/img_avatar.png"
                height={40}
                width={40}
              />
            )}
          </button>
        </div>
      </div>
      {/* mobile navlinks */}
      <div
        className={`flex flex-col items-center gap-3 py-5 border-[#ddd] border-t-[1px] ${
          open ? '' : 'hidden'
        }`}
      >
        {navLinks.map(navLink => (
          <NavLink className="font-semibold" key={navLink.id}>
            {navLink.name}
          </NavLink>
        ))}
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
