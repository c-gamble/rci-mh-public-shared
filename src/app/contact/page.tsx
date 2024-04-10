'use client';

import { useState, useEffect } from 'react';
export default function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    if (!hasMounted) return null;

    const handleSetState = (e: any) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'emailAddress':
                setEmailAddress(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (firstName === '' || lastName === '' || emailAddress === '' || phoneNumber === '' || message === '') {
            alert('Please fill out all fields.');
            return;
        }
        
        const data = {
            firstName,
            lastName,
            emailAddress,
            phoneNumber,
            message
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        const res = await response.json();
        if (res.status === 200) {
            alert('Your message has been sent!');
            setFirstName('');
            setLastName('');
            setEmailAddress('');
            setPhoneNumber('');
            setMessage('');
        } else {
            alert('Something went wrong. Please try again later.');
        }
        
    }

    return (
        width > 640 ? (
            <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
                <div className="w-3/4 h-16 bg-orange font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <span>Contact RCI</span>
                </div>
                <div className="w-1/2 flex justify-between items-center mb-8">
                    <div className="w-[40%] flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">First Name</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. Kat"
                            name="firstName"
                            value={firstName}
                            onChange={handleSetState}
                        />
                    </div>
                    <div className="w-[40%] flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Last Name</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. Jones"
                            name="lastName"
                            value={lastName}
                            onChange={handleSetState}
                        /> 
                    </div>
                </div>
                <div className="w-1/2 flex justify-between items-center mb-8">
                    <div className="w-[40%] flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Email Address</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. mail@example.com"
                            name="emailAddress"
                            value={emailAddress}
                            onChange={handleSetState}
                        />
                    </div>
                    <div className="w-[40%] flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Phone Number</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. (123) 123-1234"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleSetState}
                        /> 
                    </div>
                </div> 
                <div className="w-1/2 flex justify-between items-center mb-4">
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Message</span>
                        <textarea 
                            className="w-full bg-white resize-none border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-48 text-black font-poppins rounded-md p-2 mb-4"
                            placeholder="Type your message here..."
                            name="message"
                            value={message}
                            onChange={handleSetState}
                        />
                    </div>
                </div>     
                <div className="w-1/2 flex justify-between items-center">
                    <div className="w-full flex flex-col items-center justify-center">
                        <button className="w-1/4 flex items-center justify-center bg-blue hover:scale-105 transition-all duration-300 h-12 text-white font-bold text-2xl font-poppins rounded-md p-2 mb-4" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>          
            </div>
        ) : (
            <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
                <div className="w-3/4 h-16 bg-orange font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <span>Contact RCI</span>
                </div>
                <div className="w-2/3 flex flex-col justify-between items-center mb-2">
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">First Name</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. Kat"
                            name="firstName"
                            value={firstName}
                            onChange={handleSetState}
                        />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Last Name</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. Jones"
                            name="lastName"
                            value={lastName}
                            onChange={handleSetState}
                        /> 
                    </div>
                </div>
                <div className="w-2/3 flex flex-col justify-between items-center mb-2">
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Email Address</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. mail@example.com"
                            name="emailAddress"
                            value={emailAddress}
                            onChange={handleSetState}
                        />
                    </div>
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Phone Number</span>
                        <input 
                            className="w-full bg-white border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-16 text-black font-poppins rounded-md p-2 mb-4"
                            type="text"
                            placeholder="e.g. (123) 123-1234"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={handleSetState}
                        /> 
                    </div>
                </div> 
                <div className="w-2/3 flex flex-col justify-between items-center mb-4">
                    <div className="w-full flex flex-col items-start justify-center">
                        <span className="text-orange font-poppins text-xl font-bold mb-2">Message</span>
                        <textarea 
                            className="w-full bg-white resize-none border-orange focus:border-blue transition-all duration-300 outline-none border-2 h-48 text-black font-poppins rounded-md p-2 mb-4"
                            placeholder="Type your message here..."
                            name="message"
                            value={message}
                            onChange={handleSetState}
                        />
                    </div>
                </div>     
                <div className="w-2/3 flex justify-between items-center">
                    <div className="w-full flex flex-col items-center justify-center">
                        <button className="w-1/2 flex items-center justify-center bg-blue hover:scale-105 transition-all duration-300 h-12 text-white font-bold text-lg font-poppins rounded-md p-2 mb-4" type="submit" onClick={handleSubmit}>Submit</button>
                    </div>
                </div>          
            </div>
        )
    )
}