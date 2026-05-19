import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500"></div>
        <h2 className="text-2xl font-bold mb-4">Зворотній зв'язок</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Ви на сайті вже хвилину! Маєте питання до розробника?</p>
        
        {}
        <form action="[https://formspree.io/f/mlgoaojz](https://formspree.io/f/mlgoaojz)" method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Ім'я" required className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 outline-none focus:ring-2 ring-emerald-500" />
          <textarea name="message" placeholder="Повідомлення" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 h-24 outline-none focus:ring-2 ring-emerald-500"></textarea>
          <button type="submit" className="w-full bg-emerald-500 text-white py-3 rounded-xl font-bold hover:bg-emerald-600 transition-colors">Відправити</button>
        </form>
        
        <button onClick={onClose} className="mt-4 w-full text-slate-400 text-sm hover:text-slate-600 transition-colors">Закрити</button>
      </div>
    </div>
  );
};

export default ContactModal;