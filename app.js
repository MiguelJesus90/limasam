// LIMASAM Study Platform - Main Application Logic

// =======================
// STATE MANAGEMENT
// =======================

const AppState = {
    currentView: 'overview', // 'overview' or topic id
    completedTopics: new Set(),
    theme: 'dark',
    sidebarOpen: false
};

// =======================
// LOCAL STORAGE
// =======================

const Storage = {
    KEYS: {
        COMPLETED: 'limasam_completed_topics',
        THEME: 'limasam_theme'
    },

    load() {
        // Load completed topics
        const completed = localStorage.getItem(this.KEYS.COMPLETED);
        if (completed) {
            AppState.completedTopics = new Set(JSON.parse(completed));
        }

        // Load theme
        const theme = localStorage.getItem(this.KEYS.THEME) || 'dark';
        AppState.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
    },

    save() {
        localStorage.setItem(
            this.KEYS.COMPLETED,
            JSON.stringify([...AppState.completedTopics])
        );
        localStorage.setItem(this.KEYS.THEME, AppState.theme);
    }
};

// =======================
// INITIALIZATION
// =======================

document.addEventListener('DOMContentLoaded', () => {
    Storage.load();
    setupEventListeners();
    renderTopicList();
    renderOverview();
    updateProgress();

    // Handle initial route
    const hash = window.location.hash;
    if (hash && hash.startsWith('#topic-')) {
        const topicId = parseInt(hash.replace('#topic-', ''));
        navigateToTopic(topicId);
    }
});

// =======================
// EVENT LISTENERS
// =======================

function setupEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);

    // Search toggle
    document.getElementById('searchBtn').addEventListener('click', toggleSearch);
    document.getElementById('searchInput').addEventListener('input', handleSearch);

    // Mobile menu toggle
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);

    // Reset progress
    document.getElementById('resetProgress').addEventListener('click', resetProgress);

    // Handle browser back/forward
    window.addEventListener('hashchange', handleHashChange);

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', (e) => {
        const sidebar = document.getElementById('sidebar');
        const menuToggle = document.getElementById('menuToggle');

        if (window.innerWidth <= 768 &&
            AppState.sidebarOpen &&
            !sidebar.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            toggleSidebar();
        }
    });
}

function handleHashChange() {
    const hash = window.location.hash;

    if (!hash || hash === '#overview') {
        renderOverview();
    } else if (hash.startsWith('#topic-')) {
        const topicId = parseInt(hash.replace('#topic-', ''));
        renderTopicDetail(topicId);
    }
}

// =======================
// THEME
// =======================

function toggleTheme() {
    AppState.theme = AppState.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', AppState.theme);
    Storage.save();
}

// =======================
// NAVIGATION
// =======================

function toggleSearch() {
    const searchBar = document.getElementById('searchBar');
    const searchInput = document.getElementById('searchInput');

    searchBar.classList.toggle('hidden');

    if (!searchBar.classList.contains('hidden')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
        document.getElementById('searchResults').innerHTML = '';
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    AppState.sidebarOpen = !AppState.sidebarOpen;

    if (AppState.sidebarOpen) {
        sidebar.classList.add('open');
    } else {
        sidebar.classList.remove('open');
    }
}

function navigateToTopic(topicId) {
    window.location.hash = `#topic-${topicId}`;
    AppState.currentView = topicId;
    renderTopicDetail(topicId);
    renderTopicList(); // Re-render to update active state

    // Close sidebar on mobile
    if (window.innerWidth <= 768 && AppState.sidebarOpen) {
        toggleSidebar();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToOverview() {
    window.location.hash = '#overview';
    AppState.currentView = 'overview';
    renderOverview();
    renderTopicList(); // Re-render to update active state

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =======================
// SEARCH
// =======================

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');

    if (query.length < 2) {
        resultsContainer.innerHTML = '';
        return;
    }

    const results = searchContent(query);
    renderSearchResults(results, resultsContainer);
}

function searchContent(query) {
    const results = [];

    TOPICS_DATA.forEach(topic => {
        let matches = [];

        // Search in title
        if (topic.title.toLowerCase().includes(query)) {
            matches.push({ type: 'title', text: topic.title });
        }

        // Search in definition
        if (topic.definition.toLowerCase().includes(query)) {
            matches.push({ type: 'definition', text: highlightText(topic.definition, query) });
        }

        // Search in tools
        topic.tools.forEach(tool => {
            if (tool.toLowerCase().includes(query)) {
                matches.push({ type: 'tool', text: highlightText(tool, query) });
            }
        });

        // Search in key points
        topic.keyExamPoints.forEach(point => {
            if (point.toLowerCase().includes(query)) {
                matches.push({ type: 'key-point', text: highlightText(point, query) });
            }
        });

        if (matches.length > 0) {
            results.push({ topic, matches });
        }
    });

    return results;
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function renderSearchResults(results, container) {
    if (results.length === 0) {
        container.innerHTML = '<p style="padding: 1rem; color: var(--color-text-tertiary);">No se encontraron resultados</p>';
        return;
    }

    const html = results.map(({ topic, matches }) => `
        <div class="search-result-item" style="padding: 1rem; background: var(--glass-bg); border-radius: var(--radius-lg); margin-bottom: 0.5rem; cursor: pointer; border: 1px solid var(--glass-border);" onclick="navigateToTopic(${topic.id})">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span style="font-size: 1.5rem;">${topic.icon}</span>
                <strong>${topic.number}: ${topic.title}</strong>
            </div>
            <div style="font-size: 0.875rem; color: var(--color-text-secondary);">
                ${matches.slice(0, 2).map(m => `<div style="margin-top: 0.25rem;">• ${m.text}</div>`).join('')}
                ${matches.length > 2 ? `<div style="margin-top: 0.25rem; color: var(--color-accent-primary);">+${matches.length - 2} más resultados</div>` : ''}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// =======================
// RENDER FUNCTIONS
// =======================

function renderTopicList() {
    const list = document.getElementById('topicList');

    const html = TOPICS_DATA.map(topic => {
        const isActive = AppState.currentView === topic.id;
        const isCompleted = AppState.completedTopics.has(topic.id);

        return `
            <li class="topic-item">
                <a href="#topic-${topic.id}" class="topic-link ${isActive ? 'active' : ''}" onclick="navigateToTopic(${topic.id}); return false;">
                    <span class="topic-icon">${topic.icon}</span>
                    <div class="topic-info">
                        <span class="topic-title">${topic.title}</span>
                        <span class="topic-subtitle">${topic.number}</span>
                    </div>
                    <div class="topic-status ${isCompleted ? 'completed' : ''}"></div>
                </a>
            </li>
        `;
    }).join('');

    list.innerHTML = html;
}

function renderOverview() {
    const mainContent = document.getElementById('mainContent');

    const html = `
        <div class="overview-header">
            <h1 class="overview-title">Manual del Operario de Limpieza LIMASAM</h1>
            <p class="overview-subtitle">Preparación completa para examen de oposición TAI</p>
        </div>
        
        <div class="topics-grid">
            ${TOPICS_DATA.map(topic => renderTopicCard(topic)).join('')}
        </div>
    `;

    mainContent.innerHTML = html;
}

function renderTopicCard(topic) {
    const isCompleted = AppState.completedTopics.has(topic.id);
    const phaseCount = topic.phases.length;
    const keyPointCount = topic.keyExamPoints.length;

    return `
        <div class="topic-card ${isCompleted ? 'completed' : ''}" onclick="navigateToTopic(${topic.id})">
            <div class="topic-card-header">
                <div class="topic-card-icon">${topic.icon}</div>
                <div class="topic-card-title">
                    <h3>${topic.title}</h3>
                    <p>${topic.number}</p>
                </div>
            </div>
            <p style="color: var(--color-text-secondary); margin-bottom: 1rem;">
                ${topic.definition.substring(0, 120)}...
            </p>
            <div class="topic-card-meta">
                <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 11l3 3L22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                    <span>${phaseCount} fases</span>
                </div>
                <div class="meta-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>${keyPointCount} puntos clave</span>
                </div>
                ${isCompleted ? `
                    <div class="meta-item" style="color: var(--color-success);">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        <span>Completado</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function renderTopicDetail(topicId) {
    const topic = TOPICS_DATA.find(t => t.id === topicId);
    if (!topic) {
        renderOverview();
        return;
    }

    const isCompleted = AppState.completedTopics.has(topicId);
    const mainContent = document.getElementById('mainContent');

    const html = `
        <div class="topic-header">
            <div class="topic-header-top">
                <button class="back-btn" onclick="navigateToOverview()">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="topic-header-icon">${topic.icon}</div>
                <div class="topic-header-content">
                    <div class="topic-number">${topic.number}</div>
                    <h1 class="topic-header-title">${topic.title}</h1>
                </div>
            </div>
            <div class="topic-header-actions">
                <button class="btn-outline" onclick="startQuiz(${topicId})" style="margin-right: 0.5rem;">
                    <span style="font-size: 1.2em;">🧠</span> Test
                </button>
                <button class="btn-primary" onclick="toggleComplete(${topicId})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    ${isCompleted ? 'Marcar como no completado' : 'Marcar como completado'}
                </button>
            </div>
        </div>
        
        ${topic.multimedia.available || topic.multimedia.video === 'pending' || topic.multimedia.presentation === 'pending' || topic.multimedia.audio === 'pending'
            ? renderMultimediaSection(topic)
            : ''}
        ${renderDefinitionSection(topic)}
        ${renderToolsSection(topic)}
        ${renderObjectivesSection(topic)}
        ${renderPhasesSection(topic)}
        ${renderKeyPointsSection(topic)}
    `;

    mainContent.innerHTML = html;
}

function renderDefinitionSection(topic) {
    return `
        <div class="content-section">
            <h2 class="section-title">
                <span class="section-icon">📋</span>
                Definición
            </h2>
            <div class="section-content">
                <p>${formatText(topic.definition)}</p>
            </div>
        </div>
    `;
}

function renderToolsSection(topic) {
    return `
        <div class="content-section">
            <h2 class="section-title">
                <span class="section-icon">🛠️</span>
                Herramientas y Equipo
            </h2>
            <div class="section-content">
                <ul class="custom-list">
                    ${topic.tools.map((tool, index) => `
                        <li class="custom-list-item">
                            <div class="list-item-icon">${index + 1}</div>
                            <div>${formatText(tool)}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderObjectivesSection(topic) {
    return `
        <div class="content-section">
            <h2 class="section-title">
                <span class="section-icon">🎯</span>
                Objetivos del Puesto de Trabajo
            </h2>
            <div class="section-content">
                <ul class="custom-list">
                    ${topic.objectives.map(obj => `
                        <li class="custom-list-item">
                            <div class="list-item-icon">✓</div>
                            <div>${formatText(obj)}</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderPhasesSection(topic) {
    return `
        <div class="content-section">
            <h2 class="section-title">
                <span class="section-icon">📝</span>
                Método de Trabajo - ${topic.phases.length} Fases
            </h2>
            <div class="section-content">
                <div class="phases-list">
                    ${topic.phases.map((phase, index) => `
                        <div class="phase-item">
                            <h3 class="phase-title">${phase.title}</h3>
                            <div class="phase-content">
                                <p>${formatText(phase.description)}</p>
                                ${phase.keyPoints && phase.keyPoints.length > 0 ? `
                                    <h4 style="margin-top: 1rem; margin-bottom: 0.5rem; color: var(--color-text-primary);">Puntos importantes:</h4>
                                    <ul>
                                        ${phase.keyPoints.map(kp => `<li>${formatText(kp)}</li>`).join('')}
                                    </ul>
                                ` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function renderKeyPointsSection(topic) {
    return `
        <div class="content-section key-points">
            <h2 class="section-title">
                <span class="section-icon">⚡</span>
                Puntos Clave para el Examen
            </h2>
            <div class="section-content">
                <ul class="custom-list">
                    ${topic.keyExamPoints.map(point => `
                        <li class="custom-list-item">
                            <div class="list-item-icon">★</div>
                            <div><strong>${formatText(point)}</strong></div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
}

function renderMultimediaSection(topic) {
    const hasPending = topic.multimedia.video === 'pending' ||
        topic.multimedia.presentation === 'pending' ||
        topic.multimedia.audio === 'pending';

    const hasAvailable = topic.multimedia.available &&
        (topic.multimedia.video || topic.multimedia.presentation || topic.multimedia.audio);

    if (!hasPending && !hasAvailable) {
        return '';
    }

    return `
        <div class="content-section">
            <h2 class="section-title">
                <span class="section-icon">🎬</span>
                Contenido Multimedia
            </h2>
            <div class="section-content">
                ${hasPending ? `
                    <p style="margin-bottom: 1.5rem; color: var(--color-warning);">
                        ⚠️ Los siguientes recursos están en desarrollo y estarán disponibles próximamente.
                    </p>
                ` : ''}
                <div class="multimedia-grid">
                    ${topic.multimedia.video && topic.multimedia.video !== 'pending' ? `
                        <div class="multimedia-card available">
                            <div class="multimedia-icon">🎥</div>
                            <h4 class="multimedia-title">Video Explicativo</h4>
                            ${getYouTubeEmbedUrl(topic.multimedia.video) ? `
                                <div class="video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: var(--radius-md); margin-top: 0.5rem;">
                                    <iframe 
                                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                                        src="${getYouTubeEmbedUrl(topic.multimedia.video)}" 
                                        title="YouTube video player" 
                                        frameborder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerpolicy="strict-origin-when-cross-origin"
                                        allowfullscreen>
                                    </iframe>
                                </div>
                            ` : `
                                <video controls style="width: 100%; border-radius: var(--radius-md); margin-top: 0.5rem;">
                                    <source src="${topic.multimedia.video}" type="video/mp4">
                                    Tu navegador no soporta video HTML5.
                                </video>
                            `}
                        </div>
                    ` : topic.multimedia.video === 'pending' ? `
                        <div class="multimedia-card pending">
                            <div class="multimedia-icon">🎥</div>
                            <h4 class="multimedia-title">Video Explicativo</h4>
                            <span class="multimedia-status">Próximamente</span>
                        </div>
                    ` : ''}
                    
                    ${topic.multimedia.audio && topic.multimedia.audio !== 'pending' ? `
                        <div class="multimedia-card available">
                            <div class="multimedia-icon">🎧</div>
                            <h4 class="multimedia-title">Audio IA - Podcast</h4>
                            <audio controls style="width: 100%; margin-top: 0.5rem;">
                                <source src="${topic.multimedia.audio}">
                                Tu navegador no soporta audio HTML5.
                            </audio>
                        </div>
                    ` : topic.multimedia.audio === 'pending' ? `
                        <div class="multimedia-card pending">
                            <div class="multimedia-icon">🎧</div>
                            <h4 class="multimedia-title">Audio IA</h4>
                            <span class="multimedia-status">Próximamente</span>
                        </div>
                    ` : ''}
                    
                    ${topic.multimedia.presentation && topic.multimedia.presentation !== 'pending' ? `
                        <div class="multimedia-card available">
                            <div class="multimedia-icon">📊</div>
                            <h4 class="multimedia-title">Presentación</h4>
                            <a href="${topic.multimedia.presentation}" target="_blank" class="btn-primary" style="margin-top: 0.5rem; display: inline-block; text-decoration: none;">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 1rem; height: 1rem; margin-right: 0.5rem; vertical-align: middle;">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                    <polyline points="7 10 12 15 17 10"/>
                                    <line x1="12" y1="15" x2="12" y2="3"/>
                                </svg>
                                Descargar PDF
                            </a>
                        </div>
                    ` : topic.multimedia.presentation === 'pending' ? `
                        <div class="multimedia-card pending">
                            <div class="multimedia-icon">📊</div>
                            <h4 class="multimedia-title">Presentación</h4>
                            <span class="multimedia-status">Próximamente</span>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// =======================
// UTILITIES
// =======================

function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    
    let videoId = null;
    
    if (url.includes('youtube.com/embed/')) {
        videoId = url.split('embed/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
        videoId = url.split('v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0` : null;
}

function formatText(text) {
    // Convert **bold** to <strong>
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function toggleComplete(topicId) {
    if (AppState.completedTopics.has(topicId)) {
        AppState.completedTopics.delete(topicId);
    } else {
        AppState.completedTopics.add(topicId);
    }

    Storage.save();
    renderTopicDetail(topicId);
    renderTopicList();
    updateProgress();
}

function updateProgress() {
    const completed = AppState.completedTopics.size;
    const total = TOPICS_DATA.length;
    const percentage = Math.round((completed / total) * 100);

    // Update progress circle
    const progressCircle = document.getElementById('progressCircle');
    const progressText = document.getElementById('progressText');
    const completedCount = document.getElementById('completedCount');
    const totalCount = document.getElementById('totalCount');

    if (progressCircle) {
        progressCircle.style.strokeDasharray = `${percentage}, 100`;
    }

    if (progressText) {
        progressText.textContent = `${percentage}%`;
    }

    if (completedCount) {
        completedCount.textContent = completed;
    }

    if (totalCount) {
        totalCount.textContent = total;
    }
}

function resetProgress() {
    if (confirm('¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
        AppState.completedTopics.clear();
        Storage.save();
        renderTopicList();
        updateProgress();

        if (AppState.currentView !== 'overview') {
            renderTopicDetail(AppState.currentView);
        }
    }
}

// =======================
// SVG GRADIENT (for progress circle)
// =======================

// Add gradient definition to the first SVG we encounter
window.addEventListener('DOMContentLoaded', () => {
    const svgs = document.querySelectorAll('svg');
    if (svgs.length > 0) {
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        gradient.setAttribute('id', 'progressGradient');
        gradient.innerHTML = `
            <stop offset="0%" stop-color="#6366f1"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
        `;
        defs.appendChild(gradient);
        svgs[0].insertBefore(defs, svgs[0].firstChild);
    }
});

// ==========================================
// QUIZ LOGIC
// ==========================================

let currentQuizState = {
    topicId: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answers: []
};

// Expose startQuiz to global scope
window.startQuiz = function (topicId) {
    if (!window.QUIZ_DATA || !window.QUIZ_DATA[topicId]) {
        alert("Lo siento, aún no hay preguntas disponibles para este tema.");
        return;
    }

    const questions = window.QUIZ_DATA[topicId];

    currentQuizState = {
        topicId: topicId,
        questions: [...questions].sort(() => 0.5 - Math.random()),
        currentIndex: 0,
        score: 0,
        answers: []
    };

    renderQuizQuestion();
}

function renderQuizQuestion() {
    const mainContent = document.getElementById('mainContent');
    const { questions, currentIndex } = currentQuizState;
    const question = questions[currentIndex];
    const total = questions.length;
    const progress = ((currentIndex) / total) * 100;

    const html = `
        <div class="topic-header">
            <div class="topic-header-top">
                <button class="back-btn" onclick="renderTopicDetail(${currentQuizState.topicId})">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="topic-header-content">
                    <div class="topic-number">Test: Tema ${currentQuizState.topicId}</div>
                    <h1 class="topic-header-title">Pregunta ${currentIndex + 1} de ${total}</h1>
                </div>
            </div>
        </div>

        <div class="quiz-container">
            <!-- Progress Bar -->
            <div class="quiz-progress-wrapper">
                <div class="quiz-progress-bar" style="width: ${progress}%;"></div>
            </div>

            <!-- Question -->
            <h2 class="quiz-question">${question.question}</h2>

            <!-- Options -->
            <div class="quiz-options">
                ${question.options.map((opt, idx) => `
                    <button class="quiz-option-btn" onclick="selectAnswer(${idx})" id="opt-${idx}">
                        <div class="list-item-icon">${String.fromCharCode(65 + idx)}</div>
                        <div class="option-text">${opt}</div>
                    </button>
                `).join('')}
            </div>

            <!-- Feedback -->
            <div id="quiz-feedback" class="quiz-feedback hidden">
                <h3 id="feedback-title" class="feedback-title"></h3>
                <p id="feedback-text" class="feedback-text"></p>
                <button class="btn-primary" onclick="nextQuestion()" style="width: 100%;">Siguiente Pregunta ➜</button>
            </div>
        </div>
    `;

    mainContent.innerHTML = html;
}

window.selectAnswer = function (selectedIndex) {
    if (document.querySelector('.quiz-option-btn.disabled')) return;

    const { questions, currentIndex } = currentQuizState;
    const question = questions[currentIndex];
    const isCorrect = selectedIndex === question.correctAnswer;

    currentQuizState.answers.push({
        questionIndex: currentIndex,
        selectedOption: selectedIndex,
        isCorrect: isCorrect
    });

    if (isCorrect) currentQuizState.score++;

    document.querySelectorAll('.quiz-option-btn').forEach(btn => {
        btn.classList.add('disabled');
    });

    const selectedBtn = document.getElementById(`opt-${selectedIndex}`);
    const correctBtn = document.getElementById(`opt-${question.correctAnswer}`);

    if (isCorrect) {
        selectedBtn.style.borderColor = 'var(--color-success)';
        selectedBtn.style.background = 'rgba(16, 185, 129, 0.1)';
    } else {
        selectedBtn.style.borderColor = 'var(--color-error)';
        selectedBtn.style.background = 'rgba(239, 68, 68, 0.1)';
        correctBtn.style.borderColor = 'var(--color-success)';
        correctBtn.style.background = 'rgba(16, 185, 129, 0.1)';
    }

    const feedbackDiv = document.getElementById('quiz-feedback');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackText = document.getElementById('feedback-text');

    feedbackDiv.classList.remove('hidden');
    feedbackDiv.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackTitle.innerHTML = isCorrect ? '<span>🎉</span> ¡Correcto!' : '<span>❌</span> Incorrecto';
    feedbackTitle.style.color = isCorrect ? 'var(--color-success)' : 'var(--color-error)';
    feedbackText.textContent = question.explanation;
}

window.nextQuestion = function () {
    currentQuizState.currentIndex++;
    if (currentQuizState.currentIndex < currentQuizState.questions.length) {
        renderQuizQuestion();
    } else {
        renderQuizResults();
    }
}

function renderQuizResults() {
    const { score, questions, topicId } = currentQuizState;
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);
    let message = '', icon = '';

    if (percentage >= 90) { message = '¡Excelente! Dominas el tema.'; icon = '🏆'; }
    else if (percentage >= 70) { message = '¡Muy bien! Estás preparado.'; icon = '🌟'; }
    else if (percentage >= 50) { message = 'Bien, pero repasa los fallos.'; icon = '👍'; }
    else { message = 'Necesitas estudiar más este tema.'; icon = '📚'; }

    const mainContent = document.getElementById('mainContent');
    const html = `
        <div class="topic-header">
            <div class="topic-header-top">
                <button class="back-btn" onclick="renderTopicDetail(${topicId})">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                </button>
                <div class="topic-header-content">
                    <div class="topic-number">Resultados</div>
                    <h1 class="topic-header-title">Test Completado</h1>
                </div>
            </div>
        </div>

        <div class="content-section" style="text-align: center; padding: 4rem 2rem;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">${icon}</div>
            <h2 class="section-title" style="justify-content: center; font-size: 3rem; margin-bottom: 1rem;">${score} / ${total}</h2>
            <p style="font-size: 1.5rem; color: var(--color-text-secondary); margin-bottom: 3rem;">${message}</p>
            
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn-primary" onclick="startQuiz(${topicId})">Repetir Test</button>
                <button class="btn-outline" onclick="renderTopicDetail(${topicId})">Volver al Tema</button>
            </div>
        </div>
    `;
    mainContent.innerHTML = html;
}
