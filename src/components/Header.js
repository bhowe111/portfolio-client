import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header className="bg-blue-400 full-width">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <Link 
          to={'/'} 
          exact 
          className="inflex-flex items-center py-6 px-3 mr-4 text-black-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
          activeClassName="text-yellow-300 bg-yellow-700">
          Home
          </Link>

          <Link 
          to={'/about'} 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400" activeClassName="text-yellow-300 bg-yellow-700">
          About
          </Link>

          <Link 
          to={'/projects'} 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400"
          activeClassName="text-yellow-300 bg-yellow-700">
          Projects
          </Link>

          <Link 
          to={'/contact'} 
          className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-400"
          activeClassName="text-yellow-300 bg-yellow-700">
          Contact
          </Link>

        </nav>

        {/* Social Media */}
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="https://github.com/bhowe111" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
          <SocialIcon url="https://www.linkedin.com/in/brendan-howe/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
        </div>

      </div>
    </header>
  )
}

export default Header;