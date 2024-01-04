import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [college, setCollege] = useState('');
    const [phone, setPhone] = useState('');
    const [registered, setRegistered] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const phoneRegex = /^[0-9]{10}$/;

      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        
        if (!phone.match(phoneRegex)) {
            
            setPhoneError('Invalid phone number');
            return;
        }

        if (!email.match(emailRegex)) {
           
            setEmailError('Invalid email address');
            return;
        }
        const data = {
            Name: name,
            Email: email,
            College: college,
            Phone: phone,
        };
        axios
            .post('https://sheet.best/api/sheets/abf1ee8f-ff5e-4312-8597-629a7db09aff', data)
            .then((response) => {
                console.log('Data sent successfully:', response.data);
                setName('');
                setEmail('');
                setCollege('');
                setPhone('');
                setRegistered(true);
            })
            .catch((error) => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-900 bg-opacity-50  backdrop-blur-md">
            <div className="bg-white w-full max-w-md rounded-md p-8 relative ">
                {!registered ? (
                    <div className="bg-white w-full max-w-md rounded-md p-8">
                        <div className="flex justify-end">
                            <button
                                onClick={onClose}
                                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <h2 className="text-2xl font-bold mb-4">Registration</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-sm mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="border border-gray-300 rounded-md py-2 px-3"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-sm mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="border border-gray-300 rounded-md py-2 px-3"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {phoneError && <span className="text-red-500">{emailError}</span>}
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="college" className="text-sm mb-1">
                                    College
                                </label>
                                <input
                                    type="text"
                                    id="college"
                                    name="college"
                                    className="border border-gray-300 rounded-md py-2 px-3"
                                    placeholder="Enter your college"
                                    value={college}
                                    onChange={(e) => setCollege(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="phone" className="text-sm mb-1">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    className="border border-gray-300 rounded-md py-2 px-3"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {phoneError && <span className="text-red-500">{phoneError}</span>}
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                Register
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className="bg-white w-full max-w-md rounded-md p-8">
                        <p className="text-center">Thank you for joining!</p>
                        <button onClick={onClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-4">
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default RegistrationForm;