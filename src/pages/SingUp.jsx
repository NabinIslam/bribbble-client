import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import axios from 'axios';
import { useAuth } from '../contexts/auth';
import toast from 'react-hot-toast';

const SingUp = () => {
  const { isSubmitting, setIsSubmitting, storeToken } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const nameRegex = new RegExp('[A-Z][a-z]+((s[A-Z][a-z]+)+)?');

  const handleSignUp = data => {
    setIsSubmitting(true);

    axios
      .post(`https://bribbble.onrender.com/api/auth/signup`, data)
      .then(res => {
        if (res.status === 200) {
          reset();
          storeToken(res.data.token);
          navigate('/welcome');
        }
      })
      .catch(err => toast.error(err.response.data.message))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main className="h-screen flex flex-col lg:flex-row">
      <div className="h-full hidden lg:block lg:basis-[50%]">
        <img className="h-full min-w-full" src="/sign_up_img.jpg" alt="" />
      </div>
      <div className="px-4 lg:px-[100px] min-h-screen lg:h-full flex flex-col justify-center gap-3 lg:basis-[50%]">
        <p>
          Already a member? <Link className="font-bold">Sign In</Link>
        </p>
        <h3 className="font-bold text-2xl">Sign up to Dribbble</h3>
        <form
          className="space-y-3"
          action=""
          onSubmit={handleSubmit(handleSignUp)}
        >
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex flex-col basis-1/2">
              <label className="font-bold" htmlFor="name">
                Name
              </label>
              <input
                {...register('name', {
                  required: 'Name is required',
                  pattern: {
                    value: nameRegex,
                    message: 'Name must be capitalized',
                  },
                })}
                className="bg-gray-200 px-3 py-2 rounded-lg outline-none"
                type="text"
                placeholder="Full name"
              />
              <p className="text-sm text-red-600">{errors?.name?.message}</p>
            </div>
            <div className="flex flex-col basis-1/2">
              <label className="font-bold" htmlFor="username">
                Username
              </label>
              <input
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 8,
                    message: 'Username must have at least 8 characters',
                  },
                  pattern: {
                    value: /^\S*$/,
                    message: 'Username can not have spaces',
                  },
                })}
                className="bg-gray-200 px-3 py-2 rounded-lg outline-none"
                type="text"
                placeholder="Choose a username"
              />
              <p className="text-sm text-red-600">
                {errors?.username?.message}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  validate: value => {
                    if (!value.includes('@')) {
                      return 'Email must includes a `@`';
                    }
                    if (!value.includes('.com')) {
                      return 'Email must includes a `.com`';
                    }
                    return true;
                  },
                })}
                className="bg-gray-200 px-3 py-2 rounded-lg outline-none"
                type="email"
                placeholder="example@email.com"
              />
              <p className="text-sm text-red-600">{errors?.email?.message}</p>
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters',
                  },
                })}
                className="bg-gray-200 px-3 py-2 rounded-lg outline-none"
                type="password"
                placeholder="6+ characters"
              />
              <p className="text-sm text-red-600">
                {errors?.password?.message}
              </p>
            </div>
          </div>
          <Button type="submit" disabled={isSubmitting && true}>
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </main>
  );
};

export default SingUp;
