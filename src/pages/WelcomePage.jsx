import React, { useRef, useState } from 'react';
import Button from '../ui/Button';
import { RiImageAddLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../contexts/auth';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const { user, isSubmitting, setIsSubmitting } = useAuth();
  const inputRef = useRef(null);
  const [userPhoto, setUserPhoto] = useState('');
  const [userPhotoPreview, setUserPhotoPreview] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const handlePhotoUpload = e => {
    setUserPhotoPreview(URL.createObjectURL(e.target.files[0]));
    setUserPhoto(e.target.files[0]);
  };

  const imgHostApiKey = import.meta.env.VITE_APP_IMAGEBB_API_KEY;

  const handleCreateProfile = data => {
    setIsSubmitting(true);

    const image = userPhoto;
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostApiKey}`;

    axios
      .post(url, formData)
      .then(res => {
        if (res.status === 200) {
          const userData = {
            profilePicture: res.data.data.url,
            location: data.location,
          };

          axios
            .put(
              `https://bribbble.onrender.com/api/users/${user?._id}`,
              userData
            )
            .then(res => {
              if (res.status === 200) {
                reset();
                navigate('/question');
              }
            })
            .catch(err => console.error(err));
        }
      })
      .catch(err => console.error(err))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <main>
      <form action="" onSubmit={handleSubmit(handleCreateProfile)}>
        <div className="max-w-[700px] mx-auto min-h-screen px-4 flex flex-col items-start justify-center gap-5">
          <h1 className="font-bold text-4xl">
            Welcome! Let's create your profile
          </h1>
          <div className="flex flex-col w-full gap-2">
            <h4 className="font-bold text-2xl" htmlFor="">
              Add an avatar
            </h4>
            <span
              className="cursor-pointer h-[100px] w-[100px] rounded-full"
              onClick={() => inputRef.current.click()}
            >
              {userPhotoPreview ? (
                <img
                  className="h-[100px] w-[100px] border rounded-full  hover:border-2"
                  src={userPhotoPreview}
                  height={100}
                  width={100}
                />
              ) : (
                <img
                  className="h-[100px] w-[100px] border rounded-full  hover:border-2"
                  src="/add_user_photo.jpg"
                  height={100}
                  width={100}
                />
              )}
            </span>

            <input
              className="hidden"
              {...register('profilePicture')}
              ref={inputRef}
              name="profilePicture"
              type="file"
              id="photo"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={handlePhotoUpload}
            />
            <p className="text-sm text-red-600">{errors?.photo?.message}</p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-bold text-2xl" htmlFor="location">
              Add your location
            </label>
            <input
              {...register('location', { required: 'Location is required' })}
              name="location"
              className="border border-b-2 border-t-0 border-l-0 border-r-0 py-2 outline-none"
              type="text"
              placeholder="Enter a location"
            />
            <p className="text-sm text-red-600">{errors?.location?.message}</p>
          </div>
          <Button type="submit" disabled={isSubmitting && true}>
            {isSubmitting ? 'Processing...' : 'Next'}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default WelcomePage;
