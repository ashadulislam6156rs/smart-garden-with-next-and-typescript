import RegisterForm from '@/components/auth/RegisterForm';
import React from 'react';

const Register = () => {
    return (
      <div className="bg-base-200 flex items-center justify-center p-4 font-sans">
        <title>Create Account | eTutionTrack</title>
        <div className="card bg-base-100 p-8 sm:p-10 shadow-2xl max-w-xl w-full rounded-2xl overflow-hidden">
          <div className="card-body w-full">
            <div className="mb-4 text-center">
              <h1 className="text-3xl font-bold text-base-content">
                Create Account
              </h1>
              <p className="text-base-content/60 mt-1">
                Sign up to start managing your tuition experience seamlessly.
              </p>
            </div>
          </div>
          <RegisterForm></RegisterForm>
        </div>
      </div>
    );
};

export default Register;