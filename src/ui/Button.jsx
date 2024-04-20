import React from 'react';

const Button = ({ children, type = null, disabled = false, ...rest }) => {
  return (
    <button
      type={type}
      className="bg-pink-500 hover:bg-pink-600 duration-150 text-white px-5 py-2 rounded-xl min-w-[150px] font-semibold cursor-pointer"
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
