import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState({
    companyName: '',
    ownerName: '',
    rollNo: '',
    ownerEmail: '',
    accessCode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request to your backend to store user information
    axios.post('http://20.244.56.144/test/register', userInfo)
      .then(response => {
        console.log('User information stored successfully:', response.data);
        // Optionally, you can reset the form here
        setUserInfo({
          companyName: '',
          ownerName: '',
          rollNo: '',
          ownerEmail: '',
          accessCode: ''
        });
      })
      .catch(error => {
        console.error('Error storing user information:', error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Enter User Information</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="mt-1">
                <input id="companyName" name="companyName" type="text" autoComplete="companyName" required
                       value={userInfo.companyName} onChange={handleChange}
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       placeholder="Enter your company name"/>
              </div>
            </div>

            <div>
              <label htmlFor="ownerName" className="block text-sm font-medium text-gray-700">
                Owner Name
              </label>
              <div className="mt-1">
                <input id="ownerName" name="ownerName" type="text" autoComplete="ownerName" required
                       value={userInfo.ownerName} onChange={handleChange}
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       placeholder="Enter owner's name"/>
              </div>
            </div>

            <div>
              <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700">
                Roll No
              </label>
              <div className="mt-1">
                <input id="rollNo" name="rollNo" type="number" autoComplete="rollNo" required
                       value={userInfo.rollNo} onChange={handleChange}
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       placeholder="Enter your roll number"/>
              </div>
            </div>

            <div>
              <label htmlFor="ownerEmail" className="block text-sm font-medium text-gray-700">
                Owner Email
              </label>
              <div className="mt-1">
                <input id="ownerEmail" name="ownerEmail" type="email" autoComplete="ownerEmail" required
                       value={userInfo.ownerEmail} onChange={handleChange}
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       placeholder="Enter owner's email address"/>
              </div>
            </div>

            <div>
              <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700">
                Access Code
              </label>
              <div className="mt-1">
                <input id="accessCode" name="accessCode" type="text" autoComplete="accessCode" required
                       value={userInfo.accessCode} onChange={handleChange}
                       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                       placeholder="Enter access code"/>
              </div>
            </div>

            <div>
              <button type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
