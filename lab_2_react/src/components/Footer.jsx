import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    const info = `Система: ${navigator.platform} | Браузер: ${navigator.userAgent}`;
    localStorage.setItem('os_info', info);
    setSysInfo(localStorage.getItem('os_info'));
  }, []);

  return (
    <footer className="mt-16 pb-8 text-center text-slate-500 border-t border-slate-100 dark:border-slate-800 pt-8 px-4">
      <p className="text-sm font-medium mb-2">© 2026 <span className="text-slate-800 dark:text-white">Владислав</span></p>
      <div className="text-[10px] opacity-50 italic max-w-xl mx-auto truncate">
        {sysInfo}
      </div>
    </footer>
  );
};

export default Footer;