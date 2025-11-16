/* app.js - EduSphere starter */

// ---------- STATIC DATA (edit/add courses & quizzes here) ----------
const courses = [
  {
    id: "webdesign",
    title: "Web Design Basics",
    category: "Creative",
    shortDesc: "HTML, CSS essentials & responsive layouts.",
    overview: "A practical introduction to building responsive, accessible web pages using semantic HTML and CSS.",
    instructor: { name: "Asha Sharma", bio: "Frontend developer & designer", email: "asha@example.com" },
    resources: [
      { title: "Slides (PDF)", href: "#" },
      { title: "Starter Files", href: "#" },
      { title: "Reading List", href: "#" }
    ],
    quiz: [
      { id: "w-q1", text: "Which tag is used to define the main navigation?", options: ["<nav>", "<main>", "<section>", "<aside>"], answerIndex: 0 },
      { id: "w-q2", text: "What CSS property makes a flexible layout?", options: ["grid", "flex", "position", "float"], answerIndex: 1 },
      { id: "w-q3", text: "Which attribute improves accessibility for images?", options: ["role", "srcset", "alt", "title"], answerIndex: 2 },
      { id: "w-q4", text: "Which unit is relative and scales with font size?", options: ["px", "cm", "em", "pt"], answerIndex: 2 },
      { id: "w-q5", text: "Use responsive images with which attribute?", options: ["src", "srcset", "href", "data-src"], answerIndex: 1 }
    ]
  },
  {
    id: "ai-basics",
    title: "AI Basics",
    category: "Tech",
    shortDesc: "Intro to ML concepts and applications.",
    overview: "Understand core ML concepts, model types and ethical implications of AI.",
    instructor: { name: "Dr. Rohit Mehra", bio: "AI researcher & teacher", email: "rohit@example.com" },
    resources: [
      { title: "Lecture Notes", href: "#" },
      { title: "Dataset (sample)", href: "#" },
      { title: "Further Reading", href: "#" }
    ],
    quiz: [
      { id: "a-q1", text: "Which is supervised learning?", options: ["K-means", "Linear Regression", "PCA", "Apriori"], answerIndex: 1 },
      { id: "a-q2", text: "Overfitting means:", options: ["Model generalizes well", "Model is too simple", "Model fits noise", "Low variance"], answerIndex: 2 },
      { id: "a-q3", text: "Common evaluation for classification:", options: ["MSE", "Precision/Recall", "BLEU", "RMSE"], answerIndex: 1 },
      { id: "a-q4", text: "Which is a neural network layer type?", options: ["Dense", "KNN", "SVM", "DBSCAN"], answerIndex: 0 },
      { id: "a-q5", text: "Ethical AI includes:", options: ["Transparency", "Bias", "Privacy", "All of the above"], answerIndex: 3 }
    ]
  },
  {
    id: "data-ethics",
    title: "Data Ethics",
    category: "Business",
    shortDesc: "Responsible use of data and privacy considerations.",
    overview: "Explore ethical frameworks for data collection, algorithmic fairness and consent.",
    instructor: { name: "Nina Kapoor", bio: "Data policy specialist", email: "nina@example.com" },
    resources: [
      { title: "Policy Doc", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "External Links", href: "#" }
    ],
    quiz: [
      { id: "d-q1", text: "Which is essential for consent?", options: ["Ambiguity", "Clarity", "Hidden clause", "None"], answerIndex: 1 },
      { id: "d-q2", text: "Algorithmic bias may arise from:", options: ["Data", "Model", "Human choices", "All"], answerIndex: 3 },
      { id: "d-q3", text: "Privacy rule example:", options: ["GDPR", "HTTP", "CSS", "SQL"], answerIndex: 0 },
      { id: "d-q4", text: "Data minimization implies:", options: ["Collect everything", "Collect only necessary data", "Sell data", "Keep forever"], answerIndex: 1 },
      { id: "d-q5", text: "Anonymization prevents:", options: ["All risks", "Some re-identification risks", "No risk", "Legal compliance always"], answerIndex: 1 }
    ]
  }
];

// ---------- APP STATE ----------
const state = {
  user: null,
  currentPage: "login",
  currentCourseId: null,
  answers: {} // questionId -> selectedIndex
};

// ---------- DOM ELEMENTS ----------
const el = {
  pageLogin: document.getElementById("page-login"),
  pageCatalog: document.getElementById("page-catalog"),
  pageCourse: document.getElementById("page-course"),
  pageQuiz: document.getElementById("page-quiz"),
  modalOverlay: document.getElementById("modal-overlay"),
  modal: document.getElementById("modal"),
  modalBody: document.getElementById("modal-body"),
  modalActions: document.getElementById("modal-actions"),
  catalogGrid: document.getElementById("catalog-grid"),
  loginForm: document.getElementById("login-form"),
  inputUsername: document.getElementById("input-username"),
  inputEmail: document.getElementById("input-email"),
  errUsername: document.getElementById("err-username"),
  errEmail: document.getElementById("err-email"),
  filterBtns: () => Array.from(document.querySelectorAll(".filter-btn")),
  backToCatalogBtn: document.getElementById("back-to-catalog"),
  courseContent: document.getElementById("course-content"),
  quizContent: document.getElementById("quiz-content"),
  submitQuizBtn: document.getElementById("submit-quiz"),
  logoutBtn: document.getElementById("logout-btn"),
  userBadge: document.getElementById("user-badge"),
  searchInput: document.getElementById("search-input"),
  quizBackBtn: document.getElementById("quiz-back")
};

// ---------- NAVIGATION ----------
function navigateTo(page) {
  state.currentPage = page;
  // hide all
  [el.pageLogin, el.pageCatalog, el.pageCourse, el.pageQuiz].forEach(s => {
    if (!s) return;
    s.classList.add("hidden");
    s.setAttribute("aria-hidden", "true");
  });
  // show selected
  const map = { login: el.pageLogin, catalog: el.pageCatalog, course: el.pageCourse, quiz: el.pageQuiz };
  const target = map[page];
  if (target) {
    target.classList.remove("hidden");
    target.setAttribute("aria-hidden", "false");
    window.scrollTo(0, 0);
  }
  // header actions
  if (state.user) {
    el.userBadge.textContent = `Hi, ${state.user.username}`;
    el.userBadge.classList.remove("hidden");
    el.logoutBtn.classList.remove("hidden");
  } else {
    el.userBadge.classList.add("hidden");
    el.logoutBtn.classList.add("hidden");
  }
}

// ---------- MODAL ----------
function showModal(contentHtml, actions = []) {
  el.modalBody.innerHTML = contentHtml;
  el.modalActions.innerHTML = "";
  actions.forEach(a => {
    const btn = document.createElement("button");
    btn.className = `btn ${a.class || ""}`;
    btn.textContent = a.label;
    btn.addEventListener("click", a.onClick);
    el.modalActions.appendChild(btn);
  });
  el.modalOverlay.classList.remove("hidden");
  el.modalOverlay.setAttribute("aria-hidden", "false");
  // trap focus can be added here
}
function closeModal() {
  el.modalOverlay.classList.add("hidden");
  el.modalOverlay.setAttribute("aria-hidden", "true");
}

// close on overlay click or ESC
el.modalOverlay.addEventListener("click", (e) => {
  if (e.target === el.modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !el.modalOverlay.classList.contains("hidden")) closeModal();
});

// ---------- LOGIN ----------
function validateLogin(username, email) {
  const okName = username.trim().length >= 4;
  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  return { okName, okEmail };
}
el.loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const username = el.inputUsername.value;
  const email = el.inputEmail.value;
  const v = validateLogin(username, email);
  el.errUsername.textContent = v.okName ? "" : "Username must be at least 4 characters";
  el.errEmail.textContent = v.okEmail ? "" : "Enter a valid email";
  if (v.okName && v.okEmail) {
    state.user = { username: username.trim(), email: email.trim() };
    showModal(`<h3>Login Successful — Welcome to EduSphere!</h3><p>Hi ${state.user.username}, you're all set.</p>`, [
      { label: "Continue", class: "primary", onClick: () => { closeModal(); renderCatalog("All"); navigateTo("catalog"); } }
    ]);
  }
});

// ---------- CATALOG RENDER ----------
function createCourseCard(course) {
  const card = document.createElement("article");
  card.className = "course-card card";
  card.innerHTML = `
    <div class="card-body">
      <h3 class="card-title">${course.title}</h3>
      <p class="card-desc">${course.shortDesc}</p>
    </div>
    <div style="display:flex;gap:.5rem;align-items:center">
      <button data-id="${course.id}" class="btn view-btn">View Course</button>
      <small style="color:var(--muted)">${course.category}</small>
    </div>
  `;
  const btn = card.querySelector(".view-btn");
  btn.addEventListener("click", () => {
    state.currentCourseId = course.id;
    renderCourse(course.id);
    navigateTo("course");
  });
  return card;
}

function renderCatalog(category = "All", search = "") {
  el.catalogGrid.innerHTML = "";
  const filtered = courses.filter(c => (category === "All" || c.category === category) && c.title.toLowerCase().includes(search.toLowerCase()));
  filtered.forEach(c => el.catalogGrid.appendChild(createCourseCard(c)));
}

// filter buttons
el.filterBtns().forEach(b => {
  b.addEventListener("click", () => {
    el.filterBtns().forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    renderCatalog(b.dataset.cat, el.searchInput.value || "");
  });
});

// search input
el.searchInput.addEventListener("input", (e) => {
  const active = document.querySelector(".filter-btn.active");
  const cat = active ? active.dataset.cat : "All";
  renderCatalog(cat, e.target.value);
});

// ---------- COURSE PAGE ----------
el.backToCatalogBtn.addEventListener("click", () => navigateTo("catalog"));

function renderCourse(courseId) {
  const c = courses.find(x => x.id === courseId);
  if (!c) return;
  el.courseContent.innerHTML = `
    <div class="card">
      <h2>${c.title}</h2>
      <p>${c.overview}</p>
      <div class="instructor" style="margin-top:.6rem">
        <div style="width:56px;height:56px;border-radius:8px;background:#eef6ff;display:flex;align-items:center;justify-content:center;font-weight:600">${c.instructor.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
        <div>
          <div style="font-weight:600">${c.instructor.name}</div>
          <div style="color:var(--muted);font-size:.95rem">${c.instructor.bio}</div>
        </div>
      </div>

      <div class="resource-list">
        <h4 style="margin-top:.8rem">Resources</h4>
        ${c.resources.map(r => `<a href="${r.href}" role="link" aria-label="${r.title}">${r.title}</a>`).join("")}
      </div>

      <div style="margin-top:1rem;display:flex;gap:.5rem">
        <button id="start-quiz" class="btn primary">Start Quiz</button>
        <button id="return-catalog" class="btn">Return to Courses</button>
      </div>
    </div>
  `;

  document.getElementById("start-quiz").addEventListener("click", () => {
    state.answers = {}; // reset answers for this run
    renderQuiz(courseId);
    navigateTo("quiz");
  });
  document.getElementById("return-catalog").addEventListener("click", () => navigateTo("catalog"));
}

// ---------- QUIZ PAGE ----------
el.quizBackBtn.addEventListener("click", () => {
  renderCourse(state.currentCourseId);
  navigateTo("course");
});

function renderQuiz(courseId) {
  const c = courses.find(x => x.id === courseId);
  if (!c) return;
  el.quizContent.innerHTML = ""; // clear
  c.quiz.forEach((q, idx) => {
    const block = document.createElement("div");
    block.className = "quiz-q card";
    block.innerHTML = `<strong>Q${idx+1}. </strong><span>${q.text}</span>`;
    const optWrap = document.createElement("div");
    optWrap.className = "options";
    q.options.forEach((opt, oi) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.type = "button";
      btn.textContent = opt;
      btn.dataset.qid = q.id;
      btn.dataset.index = oi;
      btn.addEventListener("click", () => {
        // store selection
        state.answers[q.id] = oi;
        // visual selected
        Array.from(optWrap.children).forEach(ch => ch.classList.remove("selected"));
        btn.classList.add("selected");
      });
      optWrap.appendChild(btn);
    });
    block.appendChild(optWrap);
    el.quizContent.appendChild(block);
  });
}

// submit quiz
el.submitQuizBtn.addEventListener("click", () => {
  const c = courses.find(x => x.id === state.currentCourseId);
  if (!c) return;
  const result = gradeQuiz(c);
  // build results HTML
  let reportHtml = `<h3>Your Score: ${result.score} / ${result.total}</h3>`;
  reportHtml += `<div style="max-height:60vh;overflow:auto">`;
  c.quiz.forEach((q) => {
    const selected = state.answers[q.id];
    const correct = q.answerIndex;
    const isCorrect = selected === correct;
    reportHtml += `<div class="card" style="margin:.5rem 0;padding:.6rem ${isCorrect ? "" : ""}">
      <div style="font-weight:600">${q.text}</div>
      <div style="margin-top:.4rem">${q.options.map((o,i) => {
        const cls = i === correct ? "result-correct" : (selected === i && !isCorrect ? "result-wrong" : "");
        return `<div style="margin-top:.25rem;padding:.35rem;border-radius:6px;border:1px solid #f3f7fb" class="${cls}">
          ${i === selected ? "● " : ""}<strong>${i+1}.</strong> ${o}${i===correct ? " (Correct)" : ""}
        </div>`;
      }).join("")}</div>
    </div>`;
  });
  reportHtml += `</div>`;

  showModal(reportHtml, [
    { label: "Return to Courses", onClick: () => { closeModal(); navigateTo("catalog"); } },
    { label: "Logout", class: "", onClick: () => { closeModal(); doLogout(); } }
  ]);
});

function gradeQuiz(course) {
  let correct = 0;
  course.quiz.forEach(q => {
    const sel = state.answers[q.id];
    if (sel === q.answerIndex) correct++;
  });
  return { total: course.quiz.length, score: correct };
}

// ---------- LOGOUT ----------
function doLogout() {
  state.user = null;
  state.currentCourseId = null;
  state.answers = {};
  navigateTo("login");
  // clear inputs
  el.inputUsername.value = "";
  el.inputEmail.value = "";
  el.errEmail.textContent = "";
  el.errUsername.textContent = "";
}

// header logout
el.logoutBtn.addEventListener("click", doLogout);

// ---------- STARTUP ----------
function init() {
  navigateTo("login");
  renderCatalog("All");
}


// Logo click -> show Course Catalog (Page 2)
document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.getElementById('logo-link');
  if (!logoLink) return;
  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    // If you want to require login to view catalog, check state.user here.
    renderCatalog('All');   // ensure latest catalog render
    navigateTo('catalog');  // SPA navigation to Page 2
  });
});

// Handle logo click -> go to Course Catalog (Page 2)
document.addEventListener('DOMContentLoaded', () => {
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();          // stop default browser navigation
      // If user is not logged in, you can choose:
      // either force login first, or allow direct view of catalog.

      if (!state.user) {
        // Option 1: force login
        navigateTo('login');
      } else {
        // Option 2: send logged-in user to catalog (Page 2)
        renderCatalog('All');
        navigateTo('catalog');
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", init);
// handle logo click -> go to catalog (Page 2)
const logoLink = document.getElementById('logo-link');
if (logoLink) {
  logoLink.addEventListener('click', function (ev) {
    ev.preventDefault();         // avoid any browser navigation
    // If you want to require login -> check state.user, otherwise just show catalog:
    // if (!state.user) { showModal('Please login first', [{ label: 'OK', onClick: () => closeModal() }]); return; }
    renderCatalog('All');        // ensure catalog is rendered
    navigateTo('catalog');       // navigate to Page 2
  });
}
