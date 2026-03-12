import React, { useEffect } from 'react';
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
import {toast} from 'react-hot-toast'
import { authStore } from '../store/authStore';

function Login() {
  const { login, isAuthenticated, loading, error, currentUser } = authStore();
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

  useEffect(() => {
    if (isAuthenticated && currentUser) {
      toast.success(`Welcome back, ${currentUser.firstName}!`);
      // Redirect based on role to profile pages
      if (currentUser.role === 'AUTHOR') {
        navigate('/author-profile');
      } else if (currentUser.role === 'ADMIN') {
        navigate('/admin-profile');
      } else {
        navigate('/user-profile');
      }
    }
  }, [isAuthenticated, currentUser, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className={pageWrapper}>
      <div className={formCard}>
        <h2 className={formTitle}>Sign In</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
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
              <label className="flex items-center cursor-pointer gap-2">
                <input
                  type="radio"
                  value="ADMIN"
                  {...register('role', { required: 'Role is required' })}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-sm text-gray-700">Admin</span>
              </label>
            </div>
          </div>
          {errors.role && <p className="text-red-500 text-xs mt-2 text-center">{errors.role.message}</p>}

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
              placeholder="Required"
              {...register('password', {
                required: 'Password is required'
              })}
              className={inputClass}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className={`${submitBtn} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;