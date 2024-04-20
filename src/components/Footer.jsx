import React from 'react';
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  const aboutLinks = [
    { id: 1, name: `About Calendly`, path: `#` },
    { id: 2, name: `Contact Sales`, path: `#` },
    { id: 3, name: `Newsroom`, path: `#` },
    { id: 4, name: `Careers`, path: `#` },
    { id: 5, name: `Security`, path: `#` },
  ];

  const supportLinks = [
    { id: 1, name: `Help Center`, path: `#` },
    { id: 2, name: `Video Tutorial`, path: `#` },
    { id: 3, name: `Cookie Settings`, path: `#` },
  ];

  const solutionsLinks = [
    { id: 1, name: `Customer Success`, path: `#` },
    { id: 2, name: `Sales`, path: `#` },
    { id: 3, name: `Recruiting`, path: `#` },
    { id: 4, name: `Information Technology`, path: `#` },
    { id: 5, name: `Marketing`, path: `#` },
  ];

  const addOnsLinks = [
    { id: 1, name: `Download for Chrome`, path: `#` },
    { id: 2, name: `Download for Firefox`, path: `#` },
  ];

  const popularFeaturesLinks = [
    { id: 1, name: `Embed Calendly`, path: `#` },
    { id: 2, name: `Availability`, path: `#` },
    { id: 3, name: `Sending Notifications`, path: `#` },
    { id: 4, name: `Using Calendly Mobile`, path: `#` },
  ];
  const developerLinks = [{ id: 1, name: `Developer Tools`, path: `#` }];

  return (
    <footer className="bg-slate-100">
      <div className="container py-14 flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:basis-[25%] text-center lg:text-left flex flex-col items-start gap-6">
          <h2 className="font-bold text-center lg:text-left w-full text-3xl leading-10">
            Bribbble
          </h2>
          <p className="text-sm text-center w-full lg:text-left ">
            We take the work out of connecting with others so you can accomplish
            more.
          </p>
          <select
            className="w-full border py-2 px-2 border-[#ddd] rounded-lg outline-none"
            name="languages"
          >
            <option value="english">English</option>
            <option value="bengali">Bengali</option>
          </select>

          <div className="flex items-center justify-center w-full lg:justify-start gap-5 text-xl">
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>
        <div className="lg:basis-[25%] text-center lg:text-left space-y-11">
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              About
            </h5>
            <div className="flex flex-col gap-5">
              {aboutLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              Support
            </h5>
            <div className="flex flex-col gap-5">
              {supportLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:basis-[25%] text-center lg:text-left space-y-11">
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              Solutions
            </h5>
            <div className="flex flex-col gap-5">
              {solutionsLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              Add-Ons
            </h5>
            <div className="flex flex-col gap-5">
              {addOnsLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:basis-[25%] text-center lg:text-left space-y-11">
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              Popular Features
            </h5>
            <div className="flex flex-col gap-5">
              {popularFeaturesLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h5 className="font-bold text-primary-text-color text-2xl mb-5">
              Developers
            </h5>
            <div className="flex flex-col gap-5">
              {developerLinks.map(link => (
                <Link className="" key={link.id}>
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
