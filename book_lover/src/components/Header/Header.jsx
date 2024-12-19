import React, { useState } from 'react';
import profile from '../../assets/images/profile.png';
import logo2 from '../../assets/images/logo2.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='flex justify-between items-center p-4 max-w-4xl mx-auto border-b-2 bg-gray-800 text-white header'>
            <h1 className='flex items-center'>
                <img 
                    src={logo2}
                    alt="Logo" 
                    className="h-16 w-16 mr-4" // Adjust logo size to 4rem (64px)
                />
               
            </h1>

            {/* Mobile Menu Button */}
            <button className='md:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="material-icons">menu</span> {/* Menu Icon instead of text */}
            </button>

            {/* Navigation Menu for Desktop */}
            <nav className={`md:flex space-x-6 pr-36 ${isMenuOpen ? 'flex' : 'hidden'} md:space-x-8 transition-all duration-300 ease-in-out`}>
                <a href="#home" className="text-lg font-medium hover:text-orange-500 transition-colors duration-300">Home</a>
                <a href="#technology" className="text-lg font-medium hover:text-orange-500 transition-colors duration-300">Technology</a>
                <a href="#programming" className="text-lg font-medium hover:text-orange-500 transition-colors duration-300">Programming</a>
                <a href="#tips" className="text-lg font-medium hover:text-orange-500 transition-colors duration-300">Tips & Tricks</a>
                <a href="#about" className="text-lg font-medium hover:text-orange-500 transition-colors duration-300">About</a>
            </nav>

            {/* Profile Picture */}
            {/* <img 
                src={profile} 
                alt="Profile" 
                className="h-16 w-16 rounded-full border-2 border-white" // Adjust profile image size to 4rem (64px) with border
            /> */}
        </div>
    );
};

export default Header;
