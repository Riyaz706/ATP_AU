import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  formCard,
  formTitle,
  labelClass,
  inputClass,
  formGroup,
  submitBtn,
  errorClass,
  pageWrapper
} from '../styles/common';
import axios from 'axios';

import { toast } from 'react-hot-toast';

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: 'USER',
    }
  });
  const [loading, setLoading] = useState(false);

  const onUserRegister = async (data) => {
    console.log('Register Data:', data);
    try {
      setLoading(true);
      const { role, ...userData } = data;
      let url = '';

      if (role === 'USER') {
        url = 'http://localhost:4000/user-api/users';
      } else if (role === 'AUTHOR') {
        url = 'http://localhost:4000/author-api/authors';
      }
      const res = await axios.post(url, userData);

      if (res.status === 201 || res.status === 200) {
        toast.success(res.data.message || 'Registration successful!');
        navigate('/login');
      }
    } catch (err) {
      console.error('Registration Error:', err);
      const errorMessage = err.response?.data?.message || err.message || 'Registration failed.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={pageWrapper}>
      <div className={formCard}>
        <h2 className={formTitle}>Create Account</h2>

        <form onSubmit={handleSubmit(onUserRegister)}>
          {/* Role Selection */}
          <div className={formGroup}>
            <label className={labelClass}>Select Role</label>
            <div className="flex items-center gap-6 mt-2">
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  value="USER"
                  {...register('role', { required: 'Role is required' })}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-gray-700">User</span>
              </label>
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  value="AUTHOR"
                  {...register('role', { required: 'Role is required' })}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-gray-700">Author</span>
              </label>
            </div>
          </div>
          {errors.role && <p className="text-red-500 text-xs mt-2">{errors.role.message}</p>}

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className={formGroup}>
              <label className={labelClass}>First Name</label>
              <input
                type="text"
                placeholder="Jane"
                {...register('firstName', { required: 'First name is required' })}
                className={inputClass}
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div className={formGroup}>
              <label className={labelClass}>Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                {...register('lastName', { required: 'Last name is required' })}
                className={inputClass}
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          {/* Email */}
          <div className={formGroup}>
            <label className={labelClass}>Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className={inputClass}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className={formGroup}>
            <label className={labelClass}>Password</label>
            <input
              type="password"
              placeholder="Min. 6 characters"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })}
              className={inputClass}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className={`${submitBtn} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;