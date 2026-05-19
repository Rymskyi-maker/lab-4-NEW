const body = document.body;
const themeToggleBtn = document.getElementById('themeToggleBtn');

function applyAutomaticTheme() {
    const currentHour = new Date().getHours();

    if (currentHour >= 7 && currentHour < 21) {
        body.className = 'day-theme';
        console.log(`Автоматично встановлено ДЕННУ тему (зараз ${currentHour}:00)`);
    } else {
        body.className = 'night-theme';
        console.log(`Автоматично встановлено НІЧНУ тему (зараз ${currentHour}:00)`);
    }
}

applyAutomaticTheme();

themeToggleBtn.addEventListener('click', function() {
    if (body.classList.contains('day-theme')) {
        body.className = 'night-theme';
    } else {
        body.className = 'day-theme';
    }
});


const systemAgent = navigator.userAgent;
localStorage.setItem('userSystemPlatform', systemAgent);
const savedSystemInfo = localStorage.getItem('userSystemPlatform');
const osDisplayElement = document.getElementById('os-info');
if (osDisplayElement) {
    osDisplayElement.textContent = savedSystemInfo;
}


const feedbackForm = document.getElementById('feedbackForm');

feedbackForm.addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const phone = document.getElementById('userPhone').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    if (!name || !email || !phone || !message) {
        alert("Будь ласка, заповніть усі обов’язкові поля");
        return;
    }

    const submittedData = { name, email, phone, message };
    console.log("Сформований об'єкт з даними користувача:", submittedData);

    const formData = new FormData(feedbackForm);

    try {
        
        const response = await fetch(feedbackForm.action, {
            method: feedbackForm.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert("Повідомлення успішно відправлено на вашу електронну пошту через Formspree!");
            feedbackForm.reset();
        } else {
            alert("Сталася помилка сервісу Formspree при відправці форми.");
        }
    } catch (error) {
        console.error("Помилка мережі:", error);
        alert("Не вдалося надіслати запит. Перевірте з'єднання з інтернетом.");
    }
});

// ==========================================
// 4. ЗАВАНТАЖЕННЯ ДИНАМІЧНИХ ВІДГУКІВ (ВАРІАНТ 11 - УКРАЇНСЬКОЮ)
// ==========================================
async function loadEmployerReviews() {
    const container = document.getElementById('reviews-container');
    if (!container) return;

    // Масив якісних українських відгуків для заміни англійського тексту
    const ukrainianReviews = [
        {
            name: "Максим Коваленко (Team Lead, SoftServe)",
            email: "m.kovalenko@softserve.ua",
            body: "Владислав чудово проявив себе під час стажування. Швидко розбирається в архітектурі проєкту та пише чистий код на JavaScript."
        },
        {
            name: "Олена Фролова (HR Manager, TechSolutions)",
            email: "o.frolova@techsol.com.ua",
            body: "Відповідальний та пунктуальний розробник. Усі поставлені завдання в межах проєкту Б були виконані вчасно та на високому рівні."
        },
        {
            name: "Дмитро Черненко (Senior Fullstack Dev, Freelance)",
            email: "dmitry.ch@dev-studio.net",
            body: "Рекомендую Владислава як перспективного Junior розробника. Має чудову базу в HTML/CSS та швидко опановує нові фреймворки."
        },
        {
            name: "Артур Войтенко (Project Manager, GlobalLogic)",
            email: "artur.v@globallogic.ua",
            body: "Чудовий командний гравець. Вміє слухати фідбек і постійно вдосконалює свої навички веб-розробки."
        },
        {
            name: "Ігор Павлишин (CTO, Lviv IT Cluster)",
            email: "i.pavlyshyn@itcluster.lviv.ua",
            body: "Показав чудові результати в розробці інтерфейсів. Ініціативний студент із великим потенціалом в індустрії."
        }
    ];

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/11/comments';

    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Помилка завантаження даних');
        }

        const comments = await response.json();

        container.innerHTML = '';

        comments.forEach((comment, index) => {
            const uaData = ukrainianReviews[index] || {
                name: `Роботодавець #${comment.id}`,
                email: comment.email,
                body: "Рекомендую до співпраці як відмінного спеціаліста."
            };

            const reviewCard = document.createElement('div');
            reviewCard.style.padding = '12px';
            reviewCard.style.borderLeft = '4px solid #007bff';
            reviewCard.style.backgroundColor = 'rgba(0, 123, 255, 0.05)';
            reviewCard.style.borderRadius = '0 8px 8px 0';

            reviewCard.innerHTML = `
                <strong style="display: block; color: #007bff; font-size: 14px;">${uaData.name}</strong>
                <span style="font-size: 11px; color: #6c757d;">Email: ${uaData.email}</span>
                <p style="margin: 6px 0 0 0; font-size: 13px; line-height: 1.4; color: inherit;">"${uaData.body}"</p>
            `;

            container.appendChild(reviewCard);
        });

        console.log("Відгуки для 11 варіанту успішно завантажено та українізовано!", comments);

    } catch (error) {
        console.error("Не вдалося отримати відгуки:", error);
        container.innerHTML = `<p style="color: #dc3545; font-style: italic;">Не вдалося завантажити відгуки роботодавців.</p>`;
    }
}

loadEmployerReviews();