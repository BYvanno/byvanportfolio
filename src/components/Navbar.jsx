import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'var(--nav-bg)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--nav-border)'
    }}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
          ELIE YVAN
        </a>
      </motion.div>

      <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ color: 'var(--text-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}
            whileHover={{ color: 'var(--primary-color)', scale: 1.1 }}
          >
            {link.name}
          </motion.a>
        ))}
        <label className="theme-switch">
          <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
          <span className="slider"></span>
        </label>
      </div>

      {/* Mobile Menu Toggle would go here for smaller screens */}
    </nav>
  );
};

export default Navbar;
