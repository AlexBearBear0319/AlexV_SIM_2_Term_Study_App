/* ==========================================================================
   EXAM REVISION APP - MAIN APPLICATION ENGINE
   Handles all UI rendering, navigation, quiz logic, and interactions
   ========================================================================== */

// Global state
const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');
const progressContainer = document.getElementById('progress-container');
const progressFill = document.getElementById('progress-fill');

let currentQuiz = [];
let currentQuestionIndex = 0;
let currentScore = 0;
let answeredQuestions = new Set(); // Track answered questions
let userAnswers = []; // Store user's answers for review

/* ==========================================================================
   NAVIGATION & RENDERING FUNCTIONS
   ========================================================================== */

// Render Study Schedule
function renderSchedule() {
    pageTitle.innerText = "📅 Study Schedule";
    progressContainer.style.display = 'none';
    setActiveNav('schedule');

    let html = '<div style="max-width: 900px; margin: auto;">';
    scheduleData.forEach((day, index) => {
        html += `
        <div class="card schedule-day" style="border-left: 4px solid ${index % 2 === 0 ? 'var(--accent-py)' : 'var(--accent-web)'};">
            <h3>${day.day}</h3>
            <h4 style="color: ${index % 2 === 0 ? 'var(--accent-py)' : 'var(--accent-web)'};">
                🎯 ${day.focus}
            </h4>
            <ul class="task-list" style="list-style: none; padding-left: 0;">
                ${day.tasks.map(t => `<li style="margin: 10px 0; padding-left: 20px; border-left: 2px solid #ddd;">✓ ${t}</li>`).join('')}
            </ul>
        </div>`;
    });
    html += '</div>';
    contentArea.innerHTML = html;
}

// Render Exam Tips
function renderTips() {
    pageTitle.innerText = "💡 Exam Tips & Strategies";
    progressContainer.style.display = 'none';
    setActiveNav('tips');

    contentArea.innerHTML = `
        <div style="max-width: 900px; margin: auto;">
            <div class="card" style="border-left: 4px solid var(--accent-py);">
                <h3 style="color: var(--accent-py);"><i class="fab fa-python"></i> CSIT121 (OODP) Exam Tips</h3>
                <ul style="line-height: 2;">
                    ${examTips.CSIT121.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="card" style="border-left: 4px solid var(--accent-web);">
                <h3 style="color: var(--accent-web);"><i class="fas fa-globe"></i> CSIT128 (IWT) Exam Tips</h3>
                <ul style="line-height: 2;">
                    ${examTips.CSIT128.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="card" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
                <h3>⏰ Time Management Strategy</h3>
                <ul style="line-height: 2;">
                    <li><b>First 5 minutes:</b> Quickly read through entire exam</li>
                    <li><b>Next 10 minutes:</b> Answer all easy questions first (build confidence)</li>
                    <li><b>Middle section:</b> Tackle medium difficulty questions</li>
                    <li><b>Final section:</b> Focus on challenging questions</li>
                    <li><b>Last 10 minutes:</b> Review all answers, check for silly mistakes</li>
                </ul>
            </div>
        </div>
    `;
}

// Toggle dropdown menus
function toggleDropdown(id) {
    // Mobile-aware dropdown: on small screens open as slide-out panel to the right of sidebar
    try {
        // toggleDropdown called
        const el = document.getElementById(id);
        if (!el) {
            console.warn('toggleDropdown: element not found for id', id);
            return;
        }
        const subject = id.includes('oodp') ? 'CSIT121' : 'CSIT128';
        const isNotes = id.includes('notes');

        // Populate if empty
        if (el.innerHTML.trim() === "") {
            if (isNotes) {
                (notesData[subject] || []).forEach((note, index) => {
                    el.innerHTML += `<button onclick="renderNote('${subject}', ${index})">${note.title}</button>`;
                });
            } else {
                const totalQuestions = (quizData[subject] || []).length || 0;
                el.innerHTML += `<button onclick="startQuiz('${subject}', 'all')">⚡ Full Quiz (${totalQuestions} questions)</button>`;
            }
        }

        const isMobile = window.innerWidth <= 900;
        // isMobile check
        if (isMobile) {
            // Close other mobile panels
            document.querySelectorAll('.dropdown-container.mobile-panel').forEach(c => {
                if (c !== el) c.classList.remove('mobile-open');
            });

            // Mark this container as a mobile panel and open it
            el.classList.add('mobile-panel');
            el.classList.toggle('mobile-open');

            // Fallback: detach the panel to document.body so it's not affected by parent overflow/display
            try {
                if (el.classList.contains('mobile-open')) {
                    // remember original parent for reattachment
                    if (!el.dataset._originalParent) {
                        el.dataset._originalParent = '';
                        try {
                            const parent = el.parentNode;
                            if (parent) {
                                el.dataset._originalParent = '1';
                                el._originalParent = parent;
                                el._originalNext = el.nextSibling;
                            }
                        } catch (e) {
                            // ignore
                        }
                    }
                    // append to body if not already
                    if (el.parentNode !== document.body) document.body.appendChild(el);

                    // Try to show panel by creating a modal fallback so CSS can't hide it
                    try {
                        // remove any existing mobile-modal
                        const existingModal = document.getElementById('mobile-modal');
                        if (existingModal) existingModal.remove();

                        const modal = document.createElement('div');
                        modal.id = 'mobile-modal';
                        modal.style.position = 'fixed';
                        modal.style.left = '0';
                        modal.style.top = '0';
                        modal.style.right = '0';
                        modal.style.bottom = '0';
                        modal.style.zIndex = '100000';
                        modal.style.display = 'flex';
                        modal.style.alignItems = 'stretch';
                        modal.style.justifyContent = 'flex-end';

                        const backdrop = document.createElement('div');
                        backdrop.style.position = 'absolute';
                        backdrop.style.left = '0';
                        backdrop.style.top = '0';
                        backdrop.style.right = '0';
                        backdrop.style.bottom = '0';
                        backdrop.style.background = 'rgba(0,0,0,0.35)';
                        backdrop.addEventListener('click', () => {
                            modal.remove();
                            document.body.classList.remove('panel-open');
                            el.classList.remove('mobile-open');
                        });

                        const panelWrap = document.createElement('div');
                        panelWrap.style.position = 'relative';
                        panelWrap.style.width = '78vw';
                        panelWrap.style.maxWidth = '420px';
                        panelWrap.style.height = '100%';
                        panelWrap.style.background = 'var(--bg-card)';
                        panelWrap.style.boxShadow = '-8px 0 24px rgba(0,0,0,0.15)';
                        panelWrap.style.overflowY = 'auto';
                        panelWrap.style.padding = '12px';

                        // close button (styled to not cover content)
                        const closeBtn = document.createElement('button');
                        closeBtn.innerText = '✕';
                        closeBtn.className = 'mobile-modal-close';
                        closeBtn.setAttribute('aria-label', 'Close');
                        closeBtn.style.position = 'absolute';
                        closeBtn.style.right = '12px';
                        closeBtn.style.top = '12px';
                        closeBtn.style.zIndex = '100001';
                        closeBtn.style.padding = '6px 10px';
                        closeBtn.style.fontSize = '0.95rem';
                        closeBtn.style.borderRadius = '6px';
                        closeBtn.style.background = 'var(--primary-dark)';
                        closeBtn.style.color = '#fff';
                        closeBtn.style.border = 'none';
                        closeBtn.style.cursor = 'pointer';
                        closeBtn.addEventListener('click', () => {
                            modal.remove();
                            document.body.classList.remove('panel-open');
                            el.classList.remove('mobile-open');
                        });

                        // copy the inner content of the dropdown into the modal
                        // ensure content doesn't sit under the close button
                        panelWrap.style.paddingTop = '56px';
                        panelWrap.innerHTML = el.innerHTML;
                        panelWrap.prepend(closeBtn);

                        modal.appendChild(backdrop);
                        modal.appendChild(panelWrap);
                        document.body.appendChild(modal);

                        // mobile modal created
                    } catch (e) {
                        console.warn('toggleDropdown: modal fallback failed', e);
                    }
                } else {
                    // closing: reattach if we moved it
                    try {
                        const overlay = document.getElementById('mobile-panel-overlay');
                        if (overlay) overlay.remove();

                        if (el._originalParent) {
                            if (el._originalNext && el._originalNext.parentNode === el._originalParent) {
                                el._originalParent.insertBefore(el, el._originalNext);
                            } else {
                                el._originalParent.appendChild(el);
                            }
                        }

                        // remove inline styles we forced
                        el.style.position = '';
                        el.style.right = '';
                        el.style.top = '';
                        el.style.height = '';
                        el.style.width = '';
                        el.style.maxWidth = '';
                        el.style.zIndex = '';
                        el.style.transform = '';
                        el.style.opacity = '';
                        el.style.visibility = '';
                        el.style.background = '';
                        el.style.boxShadow = '';
                        el.style.padding = '';
                    } catch (err) {
                        console.warn('toggleDropdown: detach/reattach fallback failed', err);
                    }
                }
            } catch (err) {
                console.warn('toggleDropdown: detach/reattach fallback failed', err);
            }

            // Prevent body scroll while panel open
            if (el.classList.contains('mobile-open')) {
                document.body.classList.add('panel-open');
            } else {
                document.body.classList.remove('panel-open');
            }
        } else {
            // Desktop behaviour: simple toggle
            el.style.display = (el.style.display === 'block') ? 'none' : 'block';
        }
    } catch (err) {
        console.error('toggleDropdown error for id', id, err);
    }
}

// Toggle sidebar visibility (used by hamburger on mobile)
function toggleSidebar() {
    document.body.classList.toggle('sidebar-hidden');
}

// Close mobile panels when clicking outside
document.addEventListener('click', function(ev) {
    const isMobile = window.innerWidth <= 900;
    if (!isMobile) return;
    const openPanel = document.querySelector('.dropdown-container.mobile-panel.mobile-open');
    if (!openPanel) return;
    const withinPanel = openPanel.contains(ev.target);
    const isToggleBtn = ev.target.closest('.dropdown-btn');
    if (!withinPanel && !isToggleBtn) {
        openPanel.classList.remove('mobile-open');
        document.body.classList.remove('panel-open');
    }
});

// Render detailed notes
function renderNote(subject, index) {
    const note = notesData[subject][index];
    pageTitle.innerText = note.title;
    progressContainer.style.display = 'none';
    setActiveNav();

    contentArea.innerHTML = `
        <div style="max-width: 900px; margin: auto;">
            <div class="summary-box">
                <h4>📚 What You'll Learn</h4>
                <p>${note.summary}</p>
            </div>
            <div class="card note-content">
                ${note.content}
            </div>
            <div style="text-align: center; margin-top: 20px;">
                <button class="submit-q-btn" onclick="renderSchedule()">
                    <i class="fas fa-arrow-left"></i> Back to Schedule
                </button>
            </div>
        </div>
    `;
    
    // Scroll to top
    contentArea.scrollTop = 0;
}

/* ==========================================================================
   QUIZ ENGINE
   ========================================================================== */

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz(subject, type) {
    const allQuestions = quizData[subject];
    
    // Randomly select 50 questions from the pool (or all if less than 50)
    const maxQuestions = 50;
    if (allQuestions.length > maxQuestions) {
        const shuffled = shuffleArray(allQuestions);
        currentQuiz = shuffled.slice(0, maxQuestions);
    } else {
        currentQuiz = shuffleArray(allQuestions);
    }
    
    currentQuestionIndex = 0;
    currentScore = 0;
    answeredQuestions.clear();
    userAnswers = new Array(currentQuiz.length).fill(null); // Initialize answer tracking

    // Show quiz title and note that final score will be scaled to 50 marks
    pageTitle.innerText = `${subject} Comprehensive Quiz (${currentQuiz.length} Questions) - Scored out of 50`;
    progressContainer.style.display = 'block';
    updateProgress();
    setActiveNav();

    renderQuestion();
}

function renderQuestion() {
    if (currentQuestionIndex >= currentQuiz.length) {
        showResults();
        return;
    }

    const q = currentQuiz[currentQuestionIndex];
    const questionNumber = currentQuestionIndex + 1;
    const isAnswered = answeredQuestions.has(currentQuestionIndex);
    const userAnswer = userAnswers[currentQuestionIndex];

    // compute marks-so-far scaled to 50
    const marksSoFar = Math.round((currentScore / currentQuiz.length) * 50);

    contentArea.innerHTML = `
        <div class="quiz-wrapper">
            <div class="question-card">
                <span class="q-number">Question ${questionNumber} of ${currentQuiz.length}</span>
                <div style="font-size:0.9rem; color:var(--text-light); margin-top:6px;">Marks so far: <b>${marksSoFar} / 50</b></div>
                <div class="q-text">${q.q}</div>
                
                <div class="q-options" id="options-container">
                    ${q.options.map((opt, i) => `
                        <label class="option-label" id="opt-${i}" 
                            ${isAnswered && i === q.a ? 'class="correct-answer"' : ''}
                            ${isAnswered && userAnswer === i && i !== q.a ? 'class="wrong-answer"' : ''}>
                            <input type="radio" name="quizOption" value="${i}" 
                                ${userAnswer === i ? 'checked' : ''}
                                ${isAnswered ? 'disabled' : ''}> ${opt}
                        </label>
                    `).join('')}
                </div>

                <div id="explanation" class="explanation-box" style="display: ${isAnswered ? 'block' : 'none'};">
                    <b>💡 Explanation:</b> ${q.explain}
                </div>

                <div class="quiz-actions">
                    ${currentQuestionIndex > 0 ? `
                        <button class="submit-q-btn" onclick="previousQuestion()" style="background: #95a5a6;">
                            <i class="fas fa-arrow-left"></i> Previous
                        </button>
                    ` : ''}
                    
                    <button id="submitBtn" class="submit-q-btn ${isAnswered ? 'hidden' : ''}" onclick="submitQuestion()">
                        Check Answer
                    </button>
                    <button id="nextBtn" class="submit-q-btn ${!isAnswered ? 'hidden' : ''}" onclick="nextQuestion()">
                        Next Question <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;

    // Scroll to top of content
    contentArea.scrollTop = 0;
}

function submitQuestion() {
    const selected = document.querySelector('input[name="quizOption"]:checked');
    if (!selected) {
        alert("⚠️ Please select an answer before submitting!");
        return;
    }

    const selectedValue = parseInt(selected.value);
    const correct = currentQuiz[currentQuestionIndex].a;

    // Store user's answer
    userAnswers[currentQuestionIndex] = selectedValue;
    
    // Mark as answered
    answeredQuestions.add(currentQuestionIndex);

    // Disable all inputs
    document.querySelectorAll('input[name="quizOption"]').forEach(el => el.disabled = true);
    
    // Hide submit, show next
    document.getElementById('submitBtn').classList.add('hidden');
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('explanation').style.display = 'block';

    // Highlight correct/incorrect
    if (selectedValue === correct) {
        document.getElementById(`opt-${selectedValue}`).classList.add('correct-answer');
        currentScore++;
    } else {
        document.getElementById(`opt-${selectedValue}`).classList.add('wrong-answer');
        document.getElementById(`opt-${correct}`).classList.add('correct-answer');
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateProgress();
        renderQuestion();
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    updateProgress();
    renderQuestion();
}

function updateProgress() {
    const pct = (currentQuestionIndex / currentQuiz.length) * 100;
    progressFill.style.width = `${pct}%`;
}

function showResults() {
    progressFill.style.width = '100%';
    
    const percentage = Math.round((currentScore / currentQuiz.length) * 100);
    const marksOutOf50 = Math.round((currentScore / currentQuiz.length) * 50);
    let grade, color, message;
    
    if (percentage >= 90) {
        grade = "A+ Outstanding!";
        color = "#27ae60";
        message = "Excellent work! You're well prepared for the exam! 🌟";
    } else if (percentage >= 80) {
        grade = "A Great Job!";
        color = "#2ecc71";
        message = "Very good understanding! Review any mistakes and you'll ace it! 👏";
    } else if (percentage >= 70) {
        grade = "B Good Work!";
        color = "#3498db";
        message = "Good progress! Focus on the areas you missed. 📚";
    } else if (percentage >= 60) {
        grade = "C Passing";
        color = "#f39c12";
        message = "You're passing, but more study is needed. Review the notes! 📖";
    } else {
        grade = "Needs Improvement";
        color = "#e74c3c";
        message = "More practice needed. Go through the notes carefully and try again! 💪";
    }

    contentArea.innerHTML = `
        <div class="results-summary">
            <div class="card results-card">
                <h2 class="results-title" style="color: ${color};">🎉 Quiz Complete!</h2>
                <div class="results-score" style="color: ${color};">${currentScore} / ${currentQuiz.length}</div>
                <div class="results-meta">Score (scaled): <b style="color: ${color};">${marksOutOf50} / 50</b></div>
                <div class="results-meta" style="color: ${color}; font-size:2rem; margin:10px 0;">${percentage}%</div>
                <div class="results-grade" style="color: ${color};">${grade}</div>
                <p class="results-message">${message}</p>

                <div class="results-actions">
                    <button class="submit-q-btn" onclick="startQuiz('${pageTitle.innerText.includes('CSIT121') ? 'CSIT121' : 'CSIT128'}', 'all')" style="background: var(--accent-py);">
                        <i class="fas fa-redo"></i> Retry Quiz
                    </button>
                    <button class="submit-q-btn" onclick="renderSchedule()" style="background: var(--primary-dark);">
                        <i class="fas fa-home"></i> Back to Schedule
                    </button>
                </div>
            </div>

            <div class="card performance-breakdown">
                <h3>📊 Performance Breakdown</h3>
                <div class="performance-breakdown-inner">
                    <div class="performance-row">
                        <span><b>Correct Answers:</b></span>
                        <span style="color: #27ae60; font-weight: bold;">${currentScore}</span>
                    </div>
                    <div class="performance-row">
                        <span><b>Incorrect Answers:</b></span>
                        <span style="color: #e74c3c; font-weight: bold;">${currentQuiz.length - currentScore}</span>
                    </div>
                    <div class="performance-row">
                        <span><b>Accuracy:</b></span>
                        <span style="font-weight: bold;">${percentage}%</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Also open a detailed results modal showing incorrect questions for review
    try {
        openResultsModal();
    } catch (err) {
        console.warn('showResults: failed to open results modal', err);
    }
}

// Open a modal that lists incorrectly answered questions with correct answers and explanations
function openResultsModal() {
    // remove existing modal if present
    const existing = document.getElementById('results-modal');
    if (existing) existing.remove();

    const wrongIndices = [];
    for (let i = 0; i < currentQuiz.length; i++) {
        const correct = currentQuiz[i].a;
        const user = (userAnswers && userAnswers[i] !== null) ? userAnswers[i] : null;
        if (user !== correct) wrongIndices.push(i);
    }

    const modal = document.createElement('div');
    modal.id = 'results-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Quiz review');

    const panel = document.createElement('div');
    panel.className = 'results-panel';

    // Header
    const header = document.createElement('header');
    const h = document.createElement('h3');
    h.innerText = `Quiz Review — ${currentScore} / ${currentQuiz.length} (${Math.round((currentScore/currentQuiz.length)*100)}%)`;
    header.appendChild(h);

    const closeX = document.createElement('button');
    closeX.innerText = '✕';
    closeX.setAttribute('aria-label', 'Close review');
    closeX.className = 'submit-q-btn';
    closeX.style.padding = '6px 10px';
    closeX.addEventListener('click', closeModal);
    header.appendChild(closeX);

    panel.appendChild(header);

    const intro = document.createElement('p');
    intro.className = 'intro';
    intro.innerText = wrongIndices.length === 0 ? 'Perfect score — no incorrect answers. Review to reinforce your understanding!' : `You have ${wrongIndices.length} incorrect ${wrongIndices.length === 1 ? 'question' : 'questions'}. Review them below.`;
    panel.appendChild(intro);

    // List wrong questions
    const listWrap = document.createElement('div');
    listWrap.className = 'results-list';

    if (wrongIndices.length === 0) {
        const ok = document.createElement('div');
        ok.className = 'question-item';
        ok.innerText = 'Great job — no wrong items to review.';
        listWrap.appendChild(ok);
    } else {
        wrongIndices.forEach(idx => {
            const q = currentQuiz[idx];
            const container = document.createElement('div');
            container.className = 'question-item';

            const qTitle = document.createElement('div');
            qTitle.className = 'q-title';
            qTitle.innerText = `Q${idx + 1}: ${q.q}`;
            container.appendChild(qTitle);

            const user = (userAnswers && userAnswers[idx] !== null) ? userAnswers[idx] : null;
            const userText = user === null ? 'Not answered' : (q.options && q.options[user] ? q.options[user] : String(user));
            const correctText = (q.options && q.options[q.a]) ? q.options[q.a] : String(q.a);

            const userRow = document.createElement('div');
            userRow.className = 'meta';
            userRow.innerHTML = `<b>Your answer:</b> <span style="color: ${user === q.a ? '#27ae60' : '#e74c3c'};">${escapeHtml(userText)}</span>`;
            container.appendChild(userRow);

            const correctRow = document.createElement('div');
            correctRow.className = 'meta';
            correctRow.innerHTML = `<b>Correct answer:</b> <span style="color: #2c3e50; font-weight:600;">${escapeHtml(correctText)}</span>`;
            container.appendChild(correctRow);

            if (q.explain) {
                const explainRow = document.createElement('div');
                explainRow.style.marginTop = '8px';
                explainRow.innerHTML = `<b>Explanation:</b> ${q.explain}`;
                container.appendChild(explainRow);
            }

            listWrap.appendChild(container);
        });
    }

    panel.appendChild(listWrap);

    // Footer actions
    const footer = document.createElement('div');
    footer.className = 'modal-footer';

    const retryBtn = document.createElement('button');
    retryBtn.className = 'submit-q-btn';
    retryBtn.innerHTML = '<i class="fas fa-redo"></i> Retry Quiz';
    retryBtn.addEventListener('click', () => {
        closeModal();
        const subject = pageTitle.innerText.includes('CSIT121') ? 'CSIT121' : 'CSIT128';
        startQuiz(subject, 'all');
    });

    const closeBtn = document.createElement('button');
    closeBtn.className = 'submit-q-btn';
    closeBtn.style.background = 'var(--primary-dark)';
    closeBtn.innerHTML = '<i class="fas fa-times"></i> Close';
    closeBtn.addEventListener('click', closeModal);

    footer.appendChild(closeBtn);
    footer.appendChild(retryBtn);
    panel.appendChild(footer);

    modal.appendChild(panel);
    document.body.appendChild(modal);

    // Accessibility: focus management and keyboard handling
    const focusableSelector = 'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(modal.querySelectorAll(focusableSelector));
    const previouslyFocused = document.activeElement;
    // focus the first focusable element
    if (focusable.length) focusable[0].focus();

    function handleKeydown(e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeModal();
            return;
        }
        if (e.key === 'Tab') {
            // trap focus
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey) {
                if (document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                }
            } else {
                if (document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    }

    function closeModal() {
        modal.remove();
        document.removeEventListener('keydown', handleKeydown);
        if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    }

    document.addEventListener('keydown', handleKeydown);
}

/* ==========================================================================
   PRACTICAL LABS
   ========================================================================== */

function renderPractical(subject) {
    // renderPractical called
    
    pageTitle.innerText = `${subject} Practical Labs`;
    progressContainer.style.display = 'none';
    setActiveNav();
    
    const labs = practicalData[subject];
    
    if (!labs || labs.length === 0) {
        contentArea.innerHTML = `<div class="card"><p>No practical labs available for ${subject}</p></div>`;
        return;
    }

    let html = '<div style="max-width: 1000px; margin: auto;">';
    labs.forEach((lab, i) => {
        html += `
            <div class="lab-card">
                <div class="lab-header">
                    <span style="font-size: 1.1rem;">${lab.title}</span>
                    <button class="solution-btn" onclick="toggleSolution('sol-${i}')">
                        <i class="fas fa-code"></i> Show Code
                    </button>
                </div>
                <div class="lab-body">
                    <p style="font-size: 1.05rem; margin-bottom: 15px;">${lab.desc}</p>
                    <div id="sol-${i}" class="solution-container" style="display: none;">
                        <pre style="margin: 0;"><code>${escapeHtml(lab.code)}</code></pre>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    contentArea.innerHTML = html;
}

function toggleSolution(id) {
    const el = document.getElementById(id);
    const btn = event.target.closest('button');
    
    if (el.style.display === 'block') {
        el.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-code"></i> Show Code';
    } else {
        el.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Code';
    }
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */

function setActiveNav(section) {
    // Remove active from all nav buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active to clicked button if section specified
    if (section) {
        // This would need to match actual button elements
        // Left simplified for this implementation
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */

// Populate navigation dropdowns on load
document.addEventListener('DOMContentLoaded', function() {
    renderSchedule(); // Show schedule by default
    
    console.info('📚 Exam Revision App Loaded Successfully!');
    console.info('Total Questions: CSIT121 = ' + quizData.CSIT121.length + ', CSIT128 = ' + quizData.CSIT128.length);
});
