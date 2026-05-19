import React from 'react';

const Header = ({ theme, toggleTheme }) => (
  <header className={`py-16 px-6 text-center shadow-2xl relative overflow-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-slate-900 border-b border-slate-200'}`}>
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
    <div className="max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">Владислав Римський</h1>
      <p className={`text-xl font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
        Студент, майбутній <span className="text-emerald-400 font-medium">фахівець із кібербезпеки</span> та розробник
      </p>
      <button 
        onClick={toggleTheme}
        className="mt-6 px-6 py-2 rounded-full border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all font-medium"
      >
        {theme === 'light' ? '🌙 Нічний режим' : '☀️ Денний режим'}
      </button>
    </div>
  </header>
);

export default Header;