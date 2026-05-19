const Experience = () => (
  <section className="my-8 p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
      <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
      Досвід та проєкти
    </h2>
    <ul className="space-y-4">
      {[
        { title: "Розробка БД", desc: "Створення системи для телестудії \"lviv_tv_studio\" (PHP).", color: "text-emerald-600" },
        { title: "Аналіз мереж", desc: "Лабораторні дослідження трафіку та безпеки веб-ресурсів.", color: "text-blue-600" },
        { title: "Криптографія", desc: "Робота з RSA ключами у Kleopatra.", color: "text-purple-600" }
      ].map((item, idx) => (
        <li key={idx} className="group p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all duration-200">
          <strong className={`${item.color} block text-lg mb-1 group-hover:translate-x-1 transition-transform`}>
            {item.title}:
          </strong>
          <span className="text-slate-600">{item.desc}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Experience;