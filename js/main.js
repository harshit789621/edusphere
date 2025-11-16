/* --- PHASE 1: DATA MODELING --- */

// All static data for the app
const data = {
    courses: [
        {
            id: 'c1',
            title: 'Web Design Fundamentals',
            category: 'Creative',
            description: 'Learn the core principles of modern web design, including HTML5, CSS3, and responsive layouts.',
            imageUrl: 'images/web design.png', // UPDATED
            overview: 'This course is a comprehensive introduction to web design. Students will learn to build beautiful, responsive websites from scratch. Topics include semantic HTML, advanced CSS, Flexbox, Grid, and mobile-first design principles.',
            instructor: 'Dr. Ada Lovelace',
            resources: [
                { name: 'Syllabus.pdf', link: '#' },
                { name: 'Design Toolkit.zip', link: '#' },
                { name: 'HTML5 Cheat Sheet.pdf', link: '#' }
            ]
        },
        {
            id: 'c2',
            title: 'Introduction to AI',
            category: 'Tech',
            description: 'Explore the basics of Artificial Intelligence, machine learning, and neural networks.',
            imageUrl: 'images/AI.jpeg', // UPDATED
            overview: 'AI is transforming every industry. This course provides a high-level overview of AI concepts, covering machine learning models, deep learning, natural language processing (NLP), and computer vision. No prior experience required.',
            instructor: 'Prof. Alan Turing',
            resources: [
                { name: 'Course Outline.pdf', link: '#' },
                { name: 'AI Ethics Guide.pdf', link: '#' }
            ]
        },
        {
            id: 'c3',
            title: 'Data Ethics & Privacy',
            category: 'Business',
            description: 'Understand the ethical implications of data collection and the importance of user privacy.',
            imageUrl: 'images/data ethics.jpeg', // UPDATED
            overview: 'In the age of big data, ethics are paramount. This course explores case studies in data privacy, bias in AI, and regulatory frameworks like GDPR. Students will learn to develop ethical guidelines for data-driven projects.',
            instructor: 'Ms. Shoshana Zuboff',
            resources: [
                { name: 'GDPR Explained.pdf', link: '#' },
                { name: 'Case Study: Cambridge Analytica.pdf', link: '#' }
            ]
        },
        {
            id: 'c4',
            title: 'Advanced JavaScript (ES6+)',
            category: 'Tech',
            description: 'Master modern JavaScript features like Promises, Async/Await, and functional programming.',
            imageUrl: 'images/javascript.png', // UPDATED
            overview: 'Go beyond the basics. This course dives deep into ES6+ features, covering asynchronous programming, modules, classes, and functional patterns. Perfect for aspiring front-end and back-end developers.',
            instructor: 'Mr. Brendan Eich',
            resources: [
                { name: 'ES6+ Features List.pdf', link: '#' },
                { name: 'Async/Await Tutorial.zip', link: '#' }
            ]
        },
        {
            id: 'c5',
            title: 'Digital Marketing 101',
            category: 'Business',
            description: 'Learn SEO, SEM, content marketing, and social media strategy to grow an online presence.',
            imageUrl: 'images/marketing.png', // UPDATED
            overview: 'This course covers the full spectrum of digital marketing. Students will learn to create and execute marketing campaigns, analyze metrics, and understand customer acquisition funnels. Hands-on projects included.',
            instructor: 'Mr. Seth Godin',
            resources: [
                { name: 'Marketing Plan Template.docx', link: '#' },
                { name: 'SEO Checklist.pdf', link: '#' }
            ]
        },
        {
            id: 'c6',
            title: 'UI/UX Design Principles',
            category: 'Creative',
            description: 'Focus on user-centered design, wireframing, and prototyping for intuitive digital products.',
            imageUrl: 'images/ui.png', // UPDATED
            overview: 'Learn to design products users love. This course covers user research, persona creation, wireframing in Figma, prototyping, and usability testing. A portfolio-building project is the final capstone.',
            instructor: 'Mr. Don Norman',
            resources: [
                { name: 'Figma Template.fig', link: '#' },
                { name: 'Usability Testing Guide.pdf', link: '#' }
            ]
        }
    ],
    quizzes: {
        'c1': [ // Web Design (10 Questions)
            {
                question: 'What does CSS stand for?',
                options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Sheets', 'Colorful Style Sheets'],
                answer: 'Cascading Style Sheets'
            },
            {
                question: 'Which HTML tag is used to define an internal style sheet?',
                options: ['<script>', '<css>', '<style>', '<link>'],
                answer: '<style>'
            },
            {
                question: 'What is the correct CSS syntax for making all <p> elements bold?',
                options: ['p {text-size:bold;}', 'p {font-weight:bold;}', '<p style="font-weight:bold;">', 'p {font:bold;}'],
                answer: 'p {font-weight:bold;}'
            },
            {
                question: 'What does HTML stand for?',
                options: ['HyperText Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'High-Level Text Machine'],
                answer: 'HyperText Markup Language'
            },
            {
                question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
                options: ['title', 'src', 'alt', 'longdesc'],
                answer: 'alt'
            },
            {
                question: 'Which CSS property controls the text size?',
                options: ['font-style', 'text-size', 'font-size', 'text-style'],
                answer: 'font-size'
            },
            {
                question: 'What is the correct HTML element for inserting a line break?',
                options: ['<break>', '<lb>', '<br>', '<divider>'],
                answer: '<br>'
            },
            {
                question: 'What is CSS Flexbox used for?',
                options: ['Creating 3D animations', 'Database management', 'Laying out, aligning, and distributing items in a container', 'Handling server requests'],
                answer: 'Laying out, aligning, and distributing items in a container'
            },
            {
                question: 'Which HTML element is used to specify a header for a document or section?',
                options: ['<head>', '<header>', '<h1>', '<top>'],
                answer: '<header>'
            },
            {
                question: 'Which CSS property is used to change the background color of an element?',
                options: ['color', 'bgcolor', 'background-color', 'background'],
                answer: 'background-color'
            }
        ],
        'c2': [ // AI (10 Questions)
            {
                question: 'What is the "Turing Test"?',
                options: ['A test for a computer\'s processing speed', 'A test of a machine\'s ability to exhibit intelligent behavior', 'A test for AI-powered robots', 'A test for data accuracy'],
                answer: 'A test of a machine\'s ability to exhibit intelligent behavior'
            },
            {
                question: 'Which of these is a subset of Machine Learning?',
                options: ['Deep Learning', 'Data Science', 'Statistics', 'Cybersecurity'],
                answer: 'Deep Learning'
            },
            {
                question: 'What does "NLP" stand for in the context of AI?',
                options: ['Natural Language Processing', 'Neural Link Protocol', 'Network Logic Programming', 'Non-linear Pacing'],
                answer: 'Natural Language Processing'
            },
            {
                question: 'Which type of Machine Learning involves training a model on a labeled dataset?',
                options: ['Unsupervised Learning', 'Supervised Learning', 'Reinforcement Learning', 'Semi-Supervised Learning'],
                answer: 'Supervised Learning'
            },
            {
                question: 'Which type of Machine Learning uses "rewards" and "penalties" to train a model?',
                options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning'],
                answer: 'Reinforcement Learning'
            },
            {
                question: 'What is a "neural network" in AI?',
                options: ['A physical network of computer hardware', 'A system modeled after the human brain\'s neurons', 'A type of social network for AI', 'A security protocol'],
                answer: 'A system modeled after the human brain\'s neurons'
            },
            {
                question: 'What is "Computer Vision"?',
                options: ['A field of AI that enables computers to interpret and understand visual information', 'A new type of computer monitor', 'A software for graphic design', 'A programming language for visuals'],
                answer: 'A field of AI that enables computers to interpret and understand visual information'
            },
            {
                question: 'Clustering (e.g., K-Means) is an example of what type of learning?',
                options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Imitation Learning'],
                answer: 'Unsupervised Learning'
            },
            {
                question: 'What is "overfitting" in Machine Learning?',
                options: ['When a model is too simple to capture the data\'s logic', 'When a model performs well on training data but poorly on new, unseen data', 'When a model is trained for too long', 'When a model fits perfectly on all datasets'],
                answer: 'When a model performs well on training data but poorly on new, unseen data'
            },
            {
                question: 'Which company developed the AI "AlphaGo" that defeated a world champion Go player?',
                options: ['Microsoft', 'Facebook (Meta)', 'IBM', 'Google (DeepMind)'],
                answer: 'Google (DeepMind)'
            }
        ],
        'c3': [
            { question: 'What does GDPR stand for?', options: ['General Data Protection Regulation', 'Global Data Privacy Rules', 'Government Data Protection Requirement', 'General Data Privacy Regulation'], answer: 'General Data Protection Regulation' },
            { question: 'What is "Data Anonymization"?', options: ['Encrypting data', 'Deleting data', 'The process of removing personally identifiable information from data', 'Backing up data'], answer: 'The process of removing personally identifiable information from data'}
        ],
        'c4': [
            { question: 'What keyword is used to declare a constant in ES6?', options: ['var', 'let', 'const', 'static'], answer: 'const' },
            { question: 'What is an "Arrow Function" in JavaScript?', options: ['A function that draws arrows', 'A function that runs very fast', 'A compact alternative to a traditional function expression', 'A function used in HTML canvas'], answer: 'A compact alternative to a traditional function expression'}
        ],
        'c5': [
            { question: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Social Engagement Online', 'Software Engineering Office', 'Secure Enterprise Operations'], answer: 'Search Engine Optimization' },
            { question: 'What is "A/B Testing" in marketing?', options: ['Testing two versions of a webpage or ad to see which performs better', 'A test for audience demographics', 'A type of search engine query', 'A backend database test'], answer: 'Testing two versions of a webpage or ad to see which performs better'}
        ],
        'c6': [
            { question: 'What is a "wireframe"?', options: ['A final, polished design', 'A low-fidelity, basic layout of a UI', 'A type of user persona', 'A JavaScript framework'], answer: 'A low-fidelity, basic layout of a UI' },
            { question: 'What does "UX" stand for?', options: ['User Experience', 'User Exit', 'Uniform Execution', 'User Extension'], answer: 'User Experience'}
        ]
    }
};

/* --- GLOBAL APP LOGIC --- */
document.addEventListener('DOMContentLoaded', () => {
    handleUserAuth();
    handleLogout();

    if (document.getElementById('login-form')) {
        initLoginPage();
    }
    if (document.getElementById('course-grid')) {
        initCatalogPage();
    }
    if (document.getElementById('course-title')) {
        initCoursePage();
    }
    if (document.getElementById('quiz-container')) {
        initQuizPage();
    }
});

function handleUserAuth() {
    const username = localStorage.getItem('username');
    const welcomeUserEl = document.getElementById('welcome-user');
    
    if (!document.getElementById('login-form')) {
        if (!username) {
            window.location.href = 'index.html';
        } else if (welcomeUserEl) {
            welcomeUserEl.innerText = `Welcome, ${username}!`;
        }
    }
}

function handleLogout() {
    const logoutBtns = document.querySelectorAll('#logout-btn, #logout-btn-results');
    logoutBtns.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                localStorage.clear();
                window.location.href = 'index.html';
            });
        }
    });
}

function showModal(modalId, title, message) {
    const modal = document.getElementById(modalId);
    const titleEl = modal.querySelector('#modal-title') || modal.querySelector('.modal-title');
    const messageEl = modal.querySelector('#modal-message') || modal.querySelector('.modal-message');
    
    if(titleEl) titleEl.innerText = title;
    if(messageEl) messageEl.innerText = message;
    
    modal.classList.add('show');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('show');
}

/* --- PHASE 2: LOGIN PAGE LOGIC --- */
function initLoginPage() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const errorMsg = document.getElementById('error-message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        errorMsg.innerText = '';
        
        if (username.length < 4) {
            errorMsg.innerText = 'Username must be at least 4 characters long.';
            return;
        }
        if (!validateEmail(email)) {
            errorMsg.innerText = 'Please enter a valid email address.';
            return;
        }
        
        localStorage.setItem('username', username);
        showModal('welcome-modal', 'Login Successful!', `Welcome to EduSphere, ${username}!`);
        setTimeout(() => {
            window.location.href = 'catalog.html';
        }, 2000);
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

/* --- PHASE 3: COURSE CATALOG PAGE LOGIC (UPDATED) --- */
function initCatalogPage() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    // --- Search Bar Logic ---
    if (searchIcon && searchBar) { // Only run search logic if elements exist
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.focus();
            }
        });

        searchBar.addEventListener('input', filterAndRenderCourses);
    }
    
    // Check for search query in URL (from other pages)
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    if (searchParam && searchBar) {
        searchBar.value = searchParam;
        searchBar.classList.add('active');
    }

    // --- Category Filter Logic ---
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterAndRenderCourses(); // Re-filter when category changes
        });
    });
    
    // --- Event Delegation for Course Selection ---
    const courseGrid = document.getElementById('course-grid');
    courseGrid.addEventListener('click', (e) => {
        const viewButton = e.target.closest('.view-course-btn');
        if (viewButton) {
            const courseId = viewButton.dataset.id;
            localStorage.setItem('selectedCourseId', courseId);
            window.location.href = 'course.html';
        }
    });

    // --- Initial Render ---
    filterAndRenderCourses(); // Initial load
}

/**
 * NEW: Filters by category AND search, then renders.
 */
function filterAndRenderCourses() {
    const categoryEl = document.querySelector('.filter-btn.active');
    const searchBar = document.getElementById('search-bar');
    
    // Safety checks
    if (!categoryEl || !searchBar) return;

    const category = categoryEl.dataset.category;
    const searchTerm = searchBar.value.toLowerCase();
    
    let filteredCourses = data.courses;

    // 1. Filter by Category
    if (category !== 'all') {
        filteredCourses = filteredCourses.filter(course => course.category === category);
    }

    // 2. Filter by Search Term
    if (searchTerm.trim() !== '') {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.description.toLowerCase().includes(searchTerm)
        );
    }

    // 3. Render the result
    renderCourses(filteredCourses);
}

/**
 * Renders an array of course objects to the course grid.
 */
function renderCourses(coursesToRender) {
    const courseGrid = document.getElementById('course-grid');
    if (!courseGrid) return; // Safety check
    
    courseGrid.innerHTML = ''; // Clear existing courses
    
    if (coursesToRender.length === 0) {
        courseGrid.innerHTML = '<p>No courses found matching your criteria.</p>';
        return;
    }
    
    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        // UPDATED: Added img tag
        courseCard.innerHTML = `
            <img src="${course.imageUrl}" alt="${course.title}" class="course-card-img">
            <div class="course-card-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <button class="btn btn-primary view-course-btn" data-id="${course.id}">View Course</button>
            </div>
        `;
        courseGrid.appendChild(courseCard);
    });
}

/* --- PHASE 4: COURSE OVERVIEW PAGE LOGIC --- */
function initCoursePage() {
    // UPDATED: Added courseHeaderImage
    const courseHeaderImage = document.getElementById('course-header-image');
    const titleEl = document.getElementById('course-title');
    const overviewEl = document.getElementById('course-overview');
    const instructorEl = document.getElementById('course-instructor');
    const resourceListEl = document.getElementById('resource-list');
    const startQuizBtn = document.getElementById('start-quiz-btn');

    // Add search bar logic to this page too
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.focus();
            }
        });
        // On this page, searching just redirects to the catalog
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchBar.value.trim() !== '') {
                // Pass the search term to the catalog page via URL query
                window.location.href = `catalog.html?search=${encodeURIComponent(searchBar.value)}`;
            }
        });
    }

    const selectedCourseId = localStorage.getItem('selectedCourseId');
    if (!selectedCourseId) {
        titleEl.innerText = 'Error: No course selected.';
        return;
    }
    
    const course = data.courses.find(c => c.id === selectedCourseId);
    if (!course) {
        titleEl.innerText = 'Error: Course not found.';
        return;
    }

    document.title = `${course.title} - EduSphere`;
    // UPDATED: Set image src and alt
    if (courseHeaderImage) {
        courseHeaderImage.src = course.imageUrl;
        courseHeaderImage.alt = course.title;
    }
    
    titleEl.innerText = course.title;
    overviewEl.innerText = course.overview;
    instructorEl.innerText = `Taught by: ${course.instructor}`;
    
    resourceListEl.innerHTML = '';
    course.resources.forEach(resource => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${resource.link}">${resource.name}</a>`;
        resourceListEl.appendChild(li);
    });
    
    startQuizBtn.addEventListener('click', () => {
        window.location.href = 'quiz.html';
    });
}

/* --- PHASE 5: INTERACTIVE QUIZ MODULE LOGIC --- */
let currentQuestionIndex = 0;
let userAnswers = [];
let quizQuestions = [];

function initQuizPage() {
    // Add search bar logic here too
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', () => {
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.focus();
            }
        });
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && searchBar.value.trim() !== '') {
                window.location.href = `catalog.html?search=${encodeURIComponent(searchBar.value)}`;
            }
        });
    }

    const selectedCourseId = localStorage.getItem('selectedCourseId');
    if (selectedCourseId && data.quizzes[selectedCourseId] && data.quizzes[selectedCourseId].length > 0) {
        quizQuestions = data.quizzes[selectedCourseId];
    } else {
        document.getElementById('quiz-title').innerText = 'Error: Quiz not found or is empty.';
        return;
    }

    const quizTitle = document.getElementById('quiz-title');
    const questionContainer = document.getElementById('question-container');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    const course = data.courses.find(c => c.id === selectedCourseId);
    quizTitle.innerText = `${course.title} Quiz`;
    questionContainer.style.display = 'block';
    
    loadQuestion(currentQuestionIndex);
    
    nextBtn.addEventListener('click', handleNextQuestion);
    submitBtn.addEventListener('click', handleSubmitQuiz);
}

function loadQuestion(index) {
    const question = quizQuestions[index];
    const progressEl = document.getElementById('question-progress');
    const textEl = document.getElementById('question-text');
    const optionsEl = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');

    progressEl.innerText = `Question ${index + 1} of ${quizQuestions.length}`;
    textEl.innerText = question.question;
    optionsEl.innerHTML = '';
    
    question.options.forEach(option => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'btn option';
        optionBtn.innerText = option;
        optionBtn.addEventListener('click', () => selectAnswer(optionBtn, option));
        optionsEl.appendChild(optionBtn);
    });
    
    nextBtn.style.display = 'none';
}

function selectAnswer(selectedButton, answer) {
    userAnswers[currentQuestionIndex] = answer;
    
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(btn => btn.classList.remove('selected'));
    selectedButton.classList.add('selected');
    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        document.getElementById('submit-btn').style.display = 'inline-block';
        document.getElementById('next-btn').style.display = 'none';
    }
}

function handleNextQuestion() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer.');
        return;
    }
    
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion(currentQuestionIndex);
    }
}

function handleSubmitQuiz() {
    if (userAnswers[currentQuestionIndex] === undefined) {
        alert('Please select an answer for the last question.');
        return;
    }

    let score = 0;
    quizQuestions.forEach((question, index) => {
        if (question.answer === userAnswers[index]) {
            score++;
        }
    });
    
    const total = quizQuestions.length;
    const message = `You scored ${score} out of ${total}! (${Math.round((score/total) * 100)}%)`;
    showModal('score-modal', 'Quiz Complete!', message);
    
    const viewAnswersBtn = document.getElementById('view-answers-btn');
    const newViewAnswersBtn = viewAnswersBtn.cloneNode(true);
    viewAnswersBtn.parentNode.replaceChild(newViewAnswersBtn, viewAnswersBtn);

    newViewAnswersBtn.addEventListener('click', () => {
        hideModal('score-modal');
        displayQuizResults();
    });
}

function displayQuizResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '<h2>Quiz Results</h2>';

    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = question.answer === userAnswer;
        
        const resultEl = document.createElement('div');
        resultEl.className = `question-result ${isCorrect ? 'correct' : 'incorrect'}`;
        
        resultEl.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            <p>Your answer: ${userAnswer || 'No answer'}</p>
            ${!isCorrect ? `<p class="answer">Correct answer: ${question.answer}</p>` : ''}
        `;
        resultsContainer.appendChild(resultEl);
    });
    
    resultsContainer.innerHTML += `
        <hr style="margin: 20px 0;">
        <button onclick="window.location.href='catalog.html'" class="btn">Return to Courses</button>
        <button id="logout-btn-results" class="btn">Logout</button>
    `;
    
    document.getElementById('logout-btn-results').addEventListener('click', () => {
        localStorage.clear();
        window.location.href = 'index.html';
    });
}