import React, { useState } from 'react';
import Button from '../ui/Button';
import { useAuth } from '../contexts/auth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Resend } from 'resend';

const SignUpQuestion = () => {
  const { user, isSubmitting, setIsSubmitting } = useAuth();
  const [selected, setSelected] = useState({
    share_work: false,
    hire_designer: false,
    design_inspiration: false,
  });
  const navigate = useNavigate();

  const resend = new Resend(import.meta.env.VITE_APP_RESEND_API_KEY);

  const questionAnswer = () => {
    setIsSubmitting(true);
    axios
      .put(`https://bribbble.onrender.com/api/users/${user?._id}`, selected)
      .then(res => {
        if (res.status === 200) {
          resend.emails.send({
            from: 'onboarding@resend.dev',
            to: user?.email,
            subject: 'Thank you for sign up on Bribbble',
            text: 'Thanks for signing up in Bribbble. Now you have entered the amazing world of designs',
          });
          navigate('/verify-email');
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main>
      <div className="max-w-[1000px] mx-auto min-h-screen px-4 flex flex-col items-center justify-center gap-5">
        <h1 className="font-bold text-3xl text-center">
          What brings you to Bribbble?
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 my-10">
          <button
            className={`border-2 ${selected.share_work ? 'border-pink-600' : ''}
                 p-10 text-center font-bold text-xl shadow-lg rounded-2xl hover:scale-105 duration-200 cursor-pointer lg:basis-[33%] flex flex-col justify-between items-center`}
            onClick={() =>
              setSelected({
                share_work: true,
                hire_designer: false,
                design_inspiration: false,
              })
            }
          >
            <h5>I am a designer looking to share my work</h5>
            <div
              className={`border-4 h-5 w-5 rounded-full mx-auto mt-5 ${
                selected.share_work ? 'bg-pink-600' : ''
              }`}
            ></div>
          </button>
          <button
            className={`border-2 ${
              selected.hire_designer ? 'border-pink-600' : ''
            }
                 p-10 text-center font-bold text-xl shadow-lg rounded-2xl hover:scale-105 duration-200 cursor-pointer lg:basis-[33%] flex flex-col justify-between items-center`}
            onClick={() =>
              setSelected({
                share_work: false,
                hire_designer: true,
                design_inspiration: false,
              })
            }
          >
            <h5>I am looking to hire a designer</h5>
            <div
              className={`border-4 h-5 w-5 rounded-full mx-auto mt-5 ${
                selected.hire_designer ? 'bg-pink-600' : ''
              }`}
            ></div>
          </button>
          <button
            className={`border-2 ${
              selected.design_inspiration ? 'border-pink-600' : ''
            }
                 p-10 text-center font-bold text-xl shadow-lg rounded-2xl hover:scale-105 duration-200 cursor-pointer lg:basis-[33%] flex flex-col justify-between items-center`}
            onClick={() =>
              setSelected({
                share_work: false,
                hire_designer: false,
                design_inspiration: true,
              })
            }
          >
            <h5>I am looking for design inspiration</h5>
            <div
              className={`border-4 h-5 w-5 rounded-full mx-auto mt-5 ${
                selected.design_inspiration ? 'bg-pink-600' : ''
              }`}
            ></div>
          </button>
        </div>
        <Button
          disabled={isSubmitting && true}
          onClick={() => questionAnswer()}
        >
          {isSubmitting ? 'Finishing...' : 'Finish'}
        </Button>
      </div>
    </main>
  );
};

export default SignUpQuestion;
