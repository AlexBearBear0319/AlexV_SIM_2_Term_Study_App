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
    console.log('toggleDropdown called with id:', id);
    const el = document.getElementById(id);
    const subject = id.includes('oodp') ? 'CSIT121' : 'CSIT128';
    const isNotes = id.includes('notes');
    
    console.log('Subject:', subject, 'isNotes:', isNotes);

    // Populate if empty
    if (el.innerHTML.trim() === "") {
        if (isNotes) {
            console.log('Populating notes for', subject);
            notesData[subject].forEach((note, index) => {
                el.innerHTML += `<button onclick="renderNote('${subject}', ${index})">${note.title}</button>`;
            });
        } else {
            // Quizzes - count available questions
            console.log('Populating quizzes for', subject);
            console.log('quizData[subject]:', quizData[subject]);
            const totalQuestions = quizData[subject] ? quizData[subject].length : 0;
            console.log('Total questions:', totalQuestions);
            el.innerHTML += `<button onclick="startQuiz('${subject}', 'all')">⚡ Full Quiz (${totalQuestions} questions)</button>`;
        }
    }

    // Toggle visibility
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
    console.log('Dropdown visibility:', el.style.display);
}

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
        <div style="max-width: 700px; margin: auto;">
            <div class="card" style="text-align: center; padding: 40px;">
                <h2 style="color: ${color}; font-size: 2.5rem; margin-bottom: 10px;">
                    🎉 Quiz Complete!
                </h2>
                <div style="font-size: 4rem; font-weight: bold; color: ${color}; margin: 20px 0;">
                    ${currentScore} / ${currentQuiz.length}
                </div>
                <div style="font-size: 1.6rem; margin-bottom: 6px;">Score (scaled): <b style="color: ${color};">${marksOutOf50} / 50</b></div>
                <div style="font-size: 2rem; color: ${color}; margin: 10px 0;">
                    ${percentage}%
                </div>
                <div style="font-size: 1.5rem; color: ${color}; margin: 20px 0; font-weight: bold;">
                    ${grade}
                </div>
                <p style="font-size: 1.1rem; margin: 20px 0; line-height: 1.6;">
                    ${message}
                </p>
                
                <div style="margin-top: 30px; display: flex; gap: 10px; justify-content: center;">
                    <button class="submit-q-btn" onclick="startQuiz('${pageTitle.innerText.includes('CSIT121') ? 'CSIT121' : 'CSIT128'}', 'all')" 
                            style="background: var(--accent-py);">
                        <i class="fas fa-redo"></i> Retry Quiz
                    </button>
                    <button class="submit-q-btn" onclick="renderSchedule()" 
                            style="background: var(--primary-dark);">
                        <i class="fas fa-home"></i> Back to Schedule
                    </button>
                </div>
            </div>
            
            <div class="card" style="margin-top: 20px;">
                <h3>📊 Performance Breakdown</h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 15px;">
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span><b>Correct Answers:</b></span>
                        <span style="color: #27ae60; font-weight: bold;">${currentScore}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span><b>Incorrect Answers:</b></span>
                        <span style="color: #e74c3c; font-weight: bold;">${currentQuiz.length - currentScore}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin: 10px 0;">
                        <span><b>Accuracy:</b></span>
                        <span style="font-weight: bold;">${percentage}%</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

/* ==========================================================================
   PRACTICAL LABS
   ========================================================================== */

function renderPractical(subject) {
    console.log('renderPractical called with subject:', subject);
    console.log('practicalData:', practicalData);
    console.log('practicalData[subject]:', practicalData[subject]);
    
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
    console.log('Practical labs rendered');
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
    
    console.log('%c📚 Exam Revision App Loaded Successfully! ', 'background: #2c3e50; color: #fff; padding: 10px; font-size: 16px;');
    console.log('%cTotal Questions: CSIT121 = ' + quizData.CSIT121.length + ', CSIT128 = ' + quizData.CSIT128.length, 'color: #3498db; font-size: 14px;');
});
