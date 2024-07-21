import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Name:', name, 'Email:', email, 'Date of Birth:', dob, 'Password:', password,);
  };

  const handleGoogleSignIn = () => {
    // Placeholder for Google Sign-In logic
    console.log('Google Sign-In button clicked');
    // Implement Google Sign-In logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-8 space-y-8 bg-purple-800 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center text-white">Create your account</h2>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="dob" className="sr-only">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Sign up
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <span className="text-white">Or</span>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.14.556 4.148 1.527 5.863L0 24l7.812-1.343c-2.635-2.424-4.21-5.958-4.21-9.656 0-6.626 5.373-12 12-12 6.084 0 11.077 4.632 11.78 10.54h-7.696C13.83 3.515 8.938 0 12 0zM5.9 3.835c-.721 0-1.413.07-2.086.195C3.181 7.296 6.358 11 12 11c2.916 0 5.583-1.033 7.687-2.737L12 10l-6.081.458C5.788 10.952 5.9 9.346 5.9 7.591c0-2.106.527-4.145 1.497-5.756C6.347 2.58 6.945 2.3 7.535 2.072 6.947 2.235 6.391 2.468 5.9 3.835zm6.548 1.877l.06.048c.776.669 1.755 1.062 2.777 1.062 1.439 0 2.722-.811 3.271-2.04.077.148.14.298.185.454.521 1.433 1.903 2.51 3.4 2.51 1.093 0 2.132-.573 2.7-1.487.248-.397.462-.828.638-1.275-.777.356-1.647.578-2.55.578-1.97 0-3.567-1.516-3.707-3.429-.144-1.959 1.137-3.493 3.062-3.493.978 0 1.87.497 2.415 1.309.146-.185.29-.367.459-.553.96-1.049 2.312-1.813 3.839-1.813 1.837 0 3.415 1.212 3.89 2.854-.081-.02-.165-.028-.249-.028-1.019 0-1.98.565-2.496 1.436-.223.412-.373.868-.373 1.351 0 .069.015.137.017.206-.543 1.246-1.861 2.142-3.319 2.142-1.074 0-2.084-.554-2.746-1.403zm-1.544 3.674v1.946c0 .277.233.5.5.5h2.439c.277 0 .5-.223.5-.5v-2.346c0-.277-.223-.5-.5-.5h-2.439c-.277 0-.5.223-.5.5z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
