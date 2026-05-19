import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const variant = 11; 
    fetch(`https://jsonplaceholder.typicode.com/posts/${variant}/comments`)
      .then(res => res.json())
      .then(data => {
        const ukrReviews = [
          "Владислав проявив себе як надзвичайно відповідальний розробник. Його підхід до безпеки коду вражає.",
          "Чудова робота над архітектурою бази даних. Проект був виконаний вчасно та без помилок.",
          "Дуже задоволений співпрацею. Знання в області кібербезпеки допомогли нам захистити критичні дані.",
          "Професійний аналіз мережевого трафіку. Рекомендую як надійного спеціаліста з розробки.",
          "Вміє швидко вчитися та адаптуватися до нових технологій. Код структурований та легко читається."
        ];
        const localizedData = data.map((item, index) => ({
          ...item,
          body: ukrReviews[index] || item.body
        }));
        setComments(localizedData);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div className="py-10 text-center text-slate-400 font-medium">Завантаження відгуків...</div>;

  return (
    <section className="my-12 px-4">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="w-2 h-8 bg-indigo-500 rounded-full shadow-lg shadow-indigo-200"></span> 
        Відгуки роботодавців
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {comments.map(comment => (
          <div key={comment.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <p className="text-xs font-bold text-indigo-500 mb-3 truncate">{comment.email}</p>
            <p className="text-slate-600 dark:text-slate-400 italic text-sm leading-relaxed">
              "{comment.body}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;

