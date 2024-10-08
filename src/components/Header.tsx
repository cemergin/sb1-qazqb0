import React, { useState } from 'react'
import { Music, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 bg-opacity-80 text-neon-green p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Music className="mr-2 h-8 w-8" />
          <span className="text-2xl font-bold">TechnoBeats</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-neon-yellow transition duration-300">Home</Link></li>
            <li><a href="#" className="hover:text-neon-yellow transition duration-300">About</a></li>
            <li><a href="#" className="hover:text-neon-yellow transition duration-300">Contact</a></li>
          </ul>
        </nav>
        <button 
          className="md:hidden text-neon-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" className="block py-2 hover:text-neon-yellow transition duration-300">Home</Link></li>
            <li><a href="#" className="block py-2 hover:text-neon-yellow transition duration-300">About</a></li>
            <li><a href="#" className="block py-2 hover:text-neon-yellow transition duration-300">Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Header