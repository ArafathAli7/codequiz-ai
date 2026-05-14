// =============================================
//  LEVELS CONFIG
// =============================================
const levels = [
  { id: 'beginner', name: '🌱 Beginner', desc: 'Just starting out', time: 45 },
  { id: 'easy', name: '😊 Easy', desc: 'Basic concepts', time: 40 },
  { id: 'intermediate', name: '⚡ Intermediate', desc: 'Getting serious', time: 35 },
  { id: 'medium', name: '🔥 Medium', desc: 'Real challenges', time: 30 },
  { id: 'hard', name: '💀 Hard', desc: 'Think carefully', time: 25 },
  { id: 'coder', name: '👨‍💻 Coder', desc: 'For real coders', time: 20 },
  { id: 'vibecoder', name: '🎧 VibeCoder', desc: 'Coding in the zone', time: 18 },
  { id: 'maybepossible', name: '🤔 Maybe Possible', desc: 'Stretching limits', time: 15 },
  { id: 'superstar', name: '🌟 Superstar', desc: 'Elite level', time: 12 },
  { id: 'impossible', name: '☠️ Impossible', desc: 'Good luck...', time: 10 },
];

// =============================================
//  QUESTIONS BANK
// =============================================
const questionBank = {
  beginner: [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Mode Logic", "Home Tool Markup Language"], answer: 0 },
    { question: "Which tag creates a paragraph in HTML?", options: ["<div>", "<p>", "<span>", "<br>"], answer: 1 },
    { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Syntax", "Coded Style Structure"], answer: 1 },
    { question: "Which symbol is used for comments in JavaScript?", options: ["//", "##", "**", "$$"], answer: 0 },
    { question: "What does 'console.log()' do?", options: ["Saves data", "Prints to console", "Creates variable", "Connects to server"], answer: 1 },
    { question: "Which is NOT a programming language?", options: ["Python", "Java", "HTML", "C++"], answer: 2 },
    { question: "What is a variable?", options: ["A fixed value", "A container for data", "A type of loop", "A CSS property"], answer: 1 },
    { question: "Which tag links a CSS file in HTML?", options: ["<style>", "<css>", "<link>", "<script>"], answer: 2 },
    { question: "What does 'if' do in programming?", options: ["Repeats code", "Checks a condition", "Declares variable", "Connects to database"], answer: 1 },
    { question: "How do you declare a variable in JavaScript?", options: ["variable x = 5", "let x = 5", "int x = 5", "declare x = 5"], answer: 1 },
  ],
  easy: [
    { question: "Which HTML tag makes text bold?", options: ["<bold>", "<b>", "<strong>", "Both b and strong"], answer: 3 },
    { question: "What is the correct CSS syntax for making text red?", options: ["color: red;", "text-color: red;", "font-color: red;", "text: red;"], answer: 0 },
    { question: "Which JavaScript method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "add()"], answer: 0 },
    { question: "What does 'typeof' do in JavaScript?", options: ["Changes variable type", "Returns type of a variable", "Deletes a variable", "Creates a new type"], answer: 1 },
    { question: "Which CSS property changes text size?", options: ["text-size", "font-size", "size", "text-style"], answer: 1 },
    { question: "What is an array in programming?", options: ["A single value", "A list of values", "A function", "A CSS property"], answer: 1 },
    { question: "Which HTML attribute adds a link?", options: ["link", "src", "href", "url"], answer: 2 },
    { question: "What is 2 + '2' in JavaScript?", options: ["4", "22", "Error", "NaN"], answer: 1 },
    { question: "Which CSS property controls spacing inside an element?", options: ["margin", "padding", "spacing", "border"], answer: 1 },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Management", "Digital Output Module", "Document Oriented Model"], answer: 0 },
  ],
  intermediate: [
    { question: "What is a closure in JavaScript?", options: ["A way to close browser", "A function with access to its outer scope", "A type of loop", "An HTML element"], answer: 1 },
    { question: "Which Python keyword is used to define a function?", options: ["function", "def", "fun", "define"], answer: 1 },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Integration", "Automated Process Index", "Application Process Interaction"], answer: 0 },
    { question: "What is the purpose of 'async/await' in JavaScript?", options: ["Styling elements", "Handling asynchronous code", "Creating classes", "Managing arrays"], answer: 1 },
    { question: "Which SQL command retrieves data?", options: ["GET", "SELECT", "FETCH", "PULL"], answer: 1 },
    { question: "What is a REST API?", options: ["A sleeping API", "An API following REST architecture", "A type of database", "A CSS framework"], answer: 1 },
    { question: "What does 'null' mean in programming?", options: ["Zero value", "Empty string", "No value / absence of value", "False"], answer: 2 },
    { question: "Which method removes last element from array in JS?", options: ["push()", "pop()", "shift()", "remove()"], answer: 1 },
    { question: "What is JSON?", options: ["Java Source Object Notation", "JavaScript Object Notation", "Java Standard Output Node", "JavaScript Online Network"], answer: 1 },
    { question: "What is Git used for?", options: ["Web design", "Version control", "Database management", "Testing code"], answer: 1 },
  ],
  medium: [
    { question: "What is a Promise in JavaScript?", options: ["A guarantee from developer", "An object representing future value", "A type of variable", "A CSS animation"], answer: 1 },
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(n²)", "O(log n)", "O(1)"], answer: 2 },
    { question: "What does 'this' refer to in JavaScript?", options: ["Current HTML element", "Current function", "Current object context", "Global window always"], answer: 2 },
    { question: "What is a Python decorator?", options: ["A UI element", "A function that modifies another function", "A type of class", "A loop structure"], answer: 1 },
    { question: "What is memoization?", options: ["Memory storage", "Caching function results", "A sorting algorithm", "A type of recursion"], answer: 1 },
    { question: "What does CORS stand for?", options: ["Cross Origin Resource Sharing", "Client Object Routing System", "Code Output Reference Standard", "Cross Object Request System"], answer: 0 },
    { question: "What is a linked list?", options: ["An HTML list", "A data structure of nodes pointing to next", "A CSS flexbox property", "A JavaScript array method"], answer: 1 },
    { question: "What is the difference between == and === in JS?", options: ["No difference", "=== checks type too", "== checks type", "=== is slower"], answer: 1 },
    { question: "What is a Python list comprehension?", options: ["A way to document lists", "A concise way to create lists", "A type of for loop", "A sorting method"], answer: 1 },
    { question: "What is Big O notation?", options: ["A grading system", "A way to measure algorithm efficiency", "A type of database", "A CSS unit"], answer: 1 },
  ],
  hard: [
    { question: "What is the event loop in JavaScript?", options: ["A for loop inside events", "Mechanism handling async operations", "A type of animation loop", "A React hook"], answer: 1 },
    { question: "What is tail recursion?", options: ["Recursion at end of function", "Recursion with no base case", "A loop alternative", "A sorting technique"], answer: 0 },
    { question: "What is a Python generator?", options: ["Code generator tool", "Function that yields values lazily", "A random number function", "A class decorator"], answer: 1 },
    { question: "What does the 'volatile' keyword do in Java?", options: ["Makes variable constant", "Ensures visibility across threads", "Deletes a variable", "Creates a new thread"], answer: 1 },
    { question: "What is a hash collision?", options: ["Two files conflicting", "Two keys mapping to same hash", "A network error", "A CSS conflict"], answer: 1 },
    { question: "What is dependency injection?", options: ["Installing npm packages", "Providing dependencies from outside a class", "A type of inheritance", "A database query"], answer: 1 },
    { question: "What is the CAP theorem?", options: ["A CSS layout rule", "Consistency, Availability, Partition tolerance tradeoff", "A sorting algorithm", "A network protocol"], answer: 1 },
    { question: "What is a race condition?", options: ["A speed test", "Bug from unpredictable thread timing", "A fast algorithm", "A CSS animation"], answer: 1 },
    { question: "What is monadic composition in functional programming?", options: ["A design pattern", "Chaining operations on wrapped values", "A class method", "A CSS selector"], answer: 1 },
    { question: "What does 'idempotent' mean in APIs?", options: ["Returns random results", "Same result no matter how many times called", "Requires authentication", "Returns cached data"], answer: 1 },
  ],
  coder: [
    { question: "What is the difference between stack and heap memory?", options: ["Stack is larger", "Stack is for static, heap for dynamic allocation", "Heap is faster", "No difference"], answer: 1 },
    { question: "What is a deadlock in operating systems?", options: ["A crashed program", "Two processes blocking each other forever", "A slow algorithm", "A network timeout"], answer: 1 },
    { question: "What is currying in functional programming?", options: ["A food algorithm", "Transforming multi-arg function to chain of single-arg functions", "A type of recursion", "A design pattern"], answer: 1 },
    { question: "What is a WebSocket?", options: ["A type of HTML element", "Full-duplex communication protocol", "A CSS animation", "A JavaScript library"], answer: 1 },
    { question: "What does SOLID stand for in OOP?", options: ["A type of database", "5 design principles for OOP", "A JavaScript framework", "A testing methodology"], answer: 1 },
    { question: "What is a B-tree?", options: ["A binary tree variant", "A balanced search tree for databases", "A sorting algorithm", "A CSS layout"], answer: 1 },
    { question: "What is the purpose of a load balancer?", options: ["Charge batteries", "Distribute traffic across servers", "Balance CSS layouts", "Manage memory"], answer: 1 },
    { question: "What is polymorphism in OOP?", options: ["Multiple inheritance", "One interface, multiple implementations", "A design pattern", "A type of variable"], answer: 1 },
    { question: "What is lazy loading?", options: ["Slow code", "Loading resources only when needed", "A CSS property", "A testing technique"], answer: 1 },
    { question: "What is the purpose of an index in a database?", options: ["To label tables", "To speed up data retrieval", "To delete records", "To join tables"], answer: 1 },
  ],
  vibecoder: [
    { question: "What is a neural network?", options: ["A computer network", "A system of interconnected nodes inspired by brain", "A type of database", "A CSS layout"], answer: 1 },
    { question: "What is gradient descent in ML?", options: ["A color gradient", "Optimization algorithm minimizing loss", "A type of neural network", "A data cleaning method"], answer: 1 },
    { question: "What is overfitting in ML?", options: ["Too much data", "Model memorizes training data, fails on new data", "A network error", "A type of layer"], answer: 1 },
    { question: "What is a transformer model in AI?", options: ["An electrical component", "Attention-based deep learning architecture", "A data pipeline", "A type of database"], answer: 1 },
    { question: "What does GPU stand for?", options: ["General Processing Unit", "Graphics Processing Unit", "Global Program Unit", "Graphical Program Utility"], answer: 1 },
    { question: "What is tokenization in NLP?", options: ["Creating API tokens", "Splitting text into smaller units", "Encrypting data", "A type of database"], answer: 1 },
    { question: "What is reinforcement learning?", options: ["Reviewing old code", "Learning through rewards and penalties", "A type of supervised learning", "A neural network type"], answer: 1 },
    { question: "What is a confusion matrix?", options: ["A confusing algorithm", "Table showing classification model performance", "A type of neural network", "A data structure"], answer: 1 },
    { question: "What does LLM stand for?", options: ["Low Level Machine", "Large Language Model", "Linear Learning Method", "Layered Logic Module"], answer: 1 },
    { question: "What is the vanishing gradient problem?", options: ["Gradients disappearing visually", "Gradients becoming too small during backpropagation", "A type of overfitting", "A network timeout"], answer: 1 },
  ],
  maybepossible: [
    { question: "What is backpropagation?", options: ["Going back in code", "Algorithm computing gradients for training neural nets", "A type of recursion", "A database query"], answer: 1 },
    { question: "What is the attention mechanism in transformers?", options: ["Paying attention to users", "Weighing importance of different input parts", "A type of layer", "A loss function"], answer: 1 },
    { question: "What is a convolutional neural network used for?", options: ["Text generation", "Image recognition and processing", "Speech synthesis", "Database queries"], answer: 1 },
    { question: "What is transfer learning?", options: ["Moving files between servers", "Using pretrained model for new task", "A network protocol", "A type of layer"], answer: 1 },
    { question: "What is a hyperparameter in ML?", options: ["A super variable", "Parameter set before training, not learned", "A type of neuron", "A training dataset"], answer: 1 },
    { question: "What does LSTM stand for?", options: ["Large Scale Training Method", "Long Short-Term Memory", "Linear Stochastic Training Model", "Layered Sequential Training Module"], answer: 1 },
    { question: "What is regularization in ML?", options: ["Making code regular", "Technique to prevent overfitting", "A type of activation", "A loss function"], answer: 1 },
    { question: "What is an embedding in NLP?", options: ["Inserting code", "Dense vector representation of words", "A type of layer", "A tokenization method"], answer: 1 },
    { question: "What is the softmax function used for?", options: ["Making numbers soft", "Converting outputs to probabilities", "A type of loss", "An activation for hidden layers"], answer: 1 },
    { question: "What is federated learning?", options: ["Learning from federal data", "Training models across devices without sharing raw data", "A type of transfer learning", "A database method"], answer: 1 },
  ],
  superstar: [
    { question: "What is the kernel trick in SVMs?", options: ["An OS kernel function", "Mapping data to higher dimension implicitly", "A sorting technique", "A neural network layer"], answer: 1 },
    { question: "What is the bias-variance tradeoff?", options: ["A political concept", "Balancing underfitting and overfitting", "A type of regularization", "A loss function"], answer: 1 },
    { question: "What is an autoencoder?", options: ["Auto-coding tool", "Neural net that compresses then reconstructs data", "A type of transformer", "A reinforcement learning model"], answer: 1 },
    { question: "What is RLHF?", options: ["Random Learning from Humans Framework", "Reinforcement Learning from Human Feedback", "Recursive Learning Hybrid Function", "Regular Loss Handling Framework"], answer: 1 },
    { question: "What is the curse of dimensionality?", options: ["Too many dimensions in CSS", "Problems arising in high-dimensional data spaces", "A database limitation", "A network bandwidth issue"], answer: 1 },
    { question: "What is a GAN?", options: ["Global Area Network", "Generative Adversarial Network", "Gradient Adjustment Node", "Grouped Attention Network"], answer: 1 },
    { question: "What is knowledge distillation?", options: ["Extracting data from APIs", "Training small model to mimic large model", "A type of regularization", "A data cleaning method"], answer: 1 },
    { question: "What is the purpose of dropout in neural networks?", options: ["To drop training data", "To prevent overfitting by randomly disabling neurons", "To reduce model size", "To speed up training"], answer: 1 },
    { question: "What is a variational autoencoder (VAE)?", options: ["A variable encoder", "Generative model learning latent data distribution", "A type of GAN", "A compression algorithm"], answer: 1 },
    { question: "What is zero-shot learning?", options: ["Learning with no shots", "Model performing tasks without task-specific training", "A type of transfer learning", "A reinforcement technique"], answer: 1 },
  ],
  impossible: [
    { question: "What is the Kolmogorov complexity of a string?", options: ["Its length", "Length of shortest program that produces it", "Its entropy", "Its compression ratio"], answer: 1 },
    { question: "What does the No Free Lunch theorem state in ML?", options: ["ML is free to use", "No single algorithm works best for all problems", "Optimization is always possible", "Data is always sufficient"], answer: 1 },
    { question: "What is a Hopfield network?", options: ["A network by Hopfield", "Recurrent neural net used as associative memory", "A type of transformer", "A convolutional network"], answer: 1 },
    { question: "What is the VC dimension?", options: ["Virtual Complexity dimension", "Measure of a model's capacity to classify patterns", "A type of regularization", "A loss function measure"], answer: 1 },
    { question: "What is the purpose of the KL divergence?", options: ["Measuring distance between two probability distributions", "A type of activation function", "A regularization technique", "A gradient method"], answer: 0 },
    { question: "What is catastrophic forgetting in neural networks?", options: ["A hardware failure", "Model forgetting old tasks when learning new ones", "A type of overfitting", "A vanishing gradient variant"], answer: 1 },
    { question: "What is a Boltzmann Machine?", options: ["A physics machine", "Stochastic recurrent neural network", "A type of transformer", "A GAN variant"], answer: 1 },
    { question: "What is the Lottery Ticket Hypothesis?", options: ["ML is a lottery", "Small subnetworks in large networks can train equally well", "A type of pruning", "A random initialization method"], answer: 1 },
    { question: "What is Neural Architecture Search (NAS)?", options: ["Searching neural networks online", "Automating design of neural network architectures", "A type of hyperparameter tuning", "A transfer learning method"], answer: 1 },
    { question: "What is the difference between model parallelism and data parallelism?", options: ["No difference", "Model splits across devices vs data splits across devices", "Data parallelism is faster always", "Model parallelism uses more memory always"], answer: 1 },
  ],
};

// =============================================
//  STATE
// =============================================
let currentUser = null;
let currentLevel = null;
let currentQuestion = 0;
let score = 0;
let wrongAnswers = [];
let timerInterval = null;
let timeLeft = 30;
let lastQuestionData = null;

// =============================================
//  SCREEN SWITCHER
// =============================================
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

// =============================================
//  USER STORAGE
// =============================================
function getUsers() {
  const users = JSON.parse(localStorage.getItem('codeQuizUsers') || '{}');
  console.log('getUsers:', users);
  return users;
}
function saveUsers(users) {
  console.log('saveUsers:', users);
  localStorage.setItem('codeQuizUsers', JSON.stringify(users));
}
function getCurrentUser() {
  const user = localStorage.getItem('codeQuizCurrentUser') || null;
  console.log('getCurrentUser:', user);
  return user;
}
function saveCurrentUser(username) {
  console.log('saveCurrentUser:', username);
  if (username) localStorage.setItem('codeQuizCurrentUser', username);
  else localStorage.removeItem('codeQuizCurrentUser');
}

// =============================================
//  PASSWORD TOGGLE
// =============================================
function setupEyeToggle(eyeId, inputId) {
  const eye = document.getElementById(eyeId);
  if (!eye) return;
  eye.addEventListener('click', () => {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
  });
}
setupEyeToggle('login-eye', 'login-password');
setupEyeToggle('signup-eye', 'signup-password');

// =============================================
//  TAB SWITCHING
// =============================================
document.getElementById('login-tab')?.addEventListener('click', () => {
  document.getElementById('login-tab').classList.add('active');
  document.getElementById('signup-tab').classList.remove('active');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('signup-form').classList.add('hidden');
});

document.getElementById('signup-tab')?.addEventListener('click', () => {
  document.getElementById('signup-tab').classList.add('active');
  document.getElementById('login-tab').classList.remove('active');
  document.getElementById('signup-form').classList.remove('hidden');
  document.getElementById('login-form').classList.add('hidden');
});

// =============================================
//  SIGNUP
// =============================================
document.getElementById('signup-btn')?.addEventListener('click', () => {
  console.log('Signup button clicked');
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();
  console.log('Signup Username:', username, 'Password:', password);
  const errorMsg = document.getElementById('signup-error');
  const successMsg = document.getElementById('signup-success');

  errorMsg.classList.add('hidden');
  successMsg.classList.add('hidden');

  if (!username || !password) {
    errorMsg.textContent = 'Please fill in all fields!';
    errorMsg.classList.remove('hidden');
    return;
  }

  const users = getUsers();
  console.log('Existing users:', users);
  if (users[username]) {
    errorMsg.textContent = 'Username already exists!';
    errorMsg.classList.remove('hidden');
    return;
  }

  users[username] = { password, attempts: 0, bestScore: 0, bestLevel: '-' };
  saveUsers(users);
  console.log('User created:', users[username]);
  successMsg.textContent = 'Account created! Please login.';
  successMsg.classList.remove('hidden');
});

// =============================================
//  LOGIN
// =============================================
document.getElementById('login-btn')?.addEventListener('click', () => {
  console.log('Login button clicked');
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  console.log('Username:', username, 'Password:', password);
  const errorMsg = document.getElementById('login-error');

  errorMsg.classList.add('hidden');

  if (!username || !password) {
    errorMsg.textContent = 'Please fill in all fields!';
    errorMsg.classList.remove('hidden');
    return;
  }

  const users = getUsers();
  console.log('Users:', users);
  if (!users[username] || users[username].password !== password) {
    errorMsg.textContent = 'Invalid username or password';
    errorMsg.classList.remove('hidden');
    return;
  }

  currentUser = username;
  saveCurrentUser(username);
  console.log('Login successful, loading home screen');
  loadHomeScreen();
});

// =============================================
//  AUTO LOGIN
// =============================================
window.addEventListener('load', () => {
  const saved = getCurrentUser();
  if (saved) {
    const users = getUsers();
    if (users[saved]) {
      currentUser = saved;
      loadHomeScreen();
      return;
    }
  }
  showScreen('login-screen');
});

// =============================================
//  HOME SCREEN
// =============================================
function loadHomeScreen() {
  const users = getUsers();
  const user = users[currentUser];

  document.getElementById('welcome-msg').textContent = `Welcome back, ${currentUser}! 👋`;
  document.getElementById('total-attempts').textContent = user.attempts;
  document.getElementById('best-score').textContent = `${user.bestScore}/10`;
  document.getElementById('highest-level').textContent = user.bestLevel || '-';

  const grid = document.getElementById('levels-grid');
  grid.innerHTML = '';

  const bestLevelIndex = levels.findIndex(l => l.id === user.bestLevel);

  levels.forEach((level, index) => {
    const btn = document.createElement('button');
    const isUnlocked = index === 0 || index <= bestLevelIndex + 1;
    btn.className = `level-btn ${level.id} ${!isUnlocked ? 'locked' : ''}`;
    btn.innerHTML = `<span class="level-name">${level.name}</span><span class="level-desc">${isUnlocked ? level.desc : 'Complete previous level'}</span>`;
    if (isUnlocked) {
      btn.addEventListener('click', () => startQuiz(level));
    } else {
      btn.addEventListener('click', () => showToastMsg('🔒 Complete the previous level first!'));
    }
    grid.appendChild(btn);
  });

  showScreen('home-screen');
}

document.getElementById('logout-btn')?.addEventListener('click', () => {
  currentUser = null;
  saveCurrentUser(null);
  showScreen('login-screen');
});

// =============================================
//  QUIZ LOGIC
// =============================================
function startQuiz(level) {
  currentLevel = level;
  currentQuestion = 0;
  score = 0;
  wrongAnswers = [];
  lastQuestionData = null;
  showScreen('quiz-screen');
  document.getElementById('level-label').textContent = level.name;
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timerInterval);

  const questions = questionBank[currentLevel.id];
  const q = questions[currentQuestion];

  document.getElementById('question-count').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  document.getElementById('score-display').textContent = `Score: ${score}`;
  document.getElementById('progress-bar').style.width = `${(currentQuestion / questions.length) * 100}%`;
  document.getElementById('question-text').textContent = q.question;
  document.getElementById('feedback-box').classList.add('hidden');
  document.getElementById('ai-text').textContent = '';

  const explainBtn = document.getElementById('explain-btn');
  if (explainBtn) explainBtn.style.display = 'none';

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  q.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectAnswer(index));
    container.appendChild(btn);
  });

  startTimer(currentLevel.time);
}

function startTimer(seconds) {
  timeLeft = seconds;
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer-display');
  timerEl.textContent = `⏱ ${timeLeft}s`;
  timerEl.className = 'timer';
  if (timeLeft <= 5) timerEl.classList.add('danger');
  else if (timeLeft <= 10) timerEl.classList.add('warning');
}

function timeUp() {
  const questions = questionBank[currentLevel.id];
  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option-btn');

  options.forEach(btn => btn.disabled = true);
  options[q.answer].classList.add('correct');

  const feedbackText = document.getElementById('feedback-text');
  feedbackText.textContent = '⏰ Time is up!';
  feedbackText.style.color = '#f59e0b';

  wrongAnswers.push(q.question);
  lastQuestionData = { question: q, selectedIndex: -1 };

  document.getElementById('feedback-box').classList.remove('hidden');
  document.getElementById('ai-text').textContent = 'Click "Explain Answer 🤖" to get AI explanation!';

  const explainBtn = document.getElementById('explain-btn');
  if (explainBtn) explainBtn.style.display = 'block';
}

function selectAnswer(selectedIndex) {
  clearInterval(timerInterval);

  const questions = questionBank[currentLevel.id];
  const q = questions[currentQuestion];
  const options = document.querySelectorAll('.option-btn');

  options.forEach(btn => btn.disabled = true);

  const feedbackText = document.getElementById('feedback-text');

  if (selectedIndex === q.answer) {
    options[selectedIndex].classList.add('correct');
    feedbackText.textContent = '✅ Correct!';
    feedbackText.style.color = '#23c55e';
    score++;
  } else {
    options[selectedIndex].classList.add('wrong');
    options[q.answer].classList.add('correct');
    feedbackText.textContent = '❌ Wrong!';
    feedbackText.style.color = '#f85149';
    wrongAnswers.push(q.question);
  }

  lastQuestionData = { question: q, selectedIndex };

  document.getElementById('feedback-box').classList.remove('hidden');
  document.getElementById('ai-text').textContent = 'Click "Explain Answer 🤖" to get AI explanation!';

  const explainBtn = document.getElementById('explain-btn');
  if (explainBtn) explainBtn.style.display = 'block';
}

document.getElementById('next-btn')?.addEventListener('click', () => {
  const questions = questionBank[currentLevel.id];
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

// =============================================
//  RESULTS
// =============================================
function showResults() {
  clearInterval(timerInterval);

  const total = questionBank[currentLevel.id].length;
  const percentage = (score / total) * 100;

  document.getElementById('final-score').textContent = `You scored ${score} out of ${total}`;

  let msg = '';
  if (percentage === 100) msg = '🏆 Perfect score! Absolutely elite!';
  else if (percentage >= 70) msg = '🔥 Great job! You are on fire!';
  else if (percentage >= 40) msg = '💪 Not bad! Keep pushing!';
  else msg = '📚 Keep learning, you will get there!';

  document.getElementById('performance-msg').textContent = msg;

  const users = getUsers();
  const user = users[currentUser];
  user.attempts += 1;
  if (score > user.bestScore) user.bestScore = score;

  const levelIndex = levels.findIndex(l => l.id === currentLevel.id);
  const bestLevelIndex = levels.findIndex(l => l.id === user.bestLevel);
  if (levelIndex > bestLevelIndex) user.bestLevel = currentLevel.id;

  users[currentUser] = user;
  saveUsers(users);

  showScreen('result-screen');
  document.getElementById('ai-feedback-text').textContent = 'Analyzing your performance...';
  getAIFeedback(score, total, wrongAnswers);

  // Score circle
  const scorePct = `${percentage}%`;
  const existingCircle = document.getElementById('score-circle');
  if (existingCircle) {
    existingCircle.style.setProperty('--score-pct', scorePct);
    document.getElementById('score-circle-text').textContent = `${score}/${total}`;
  }

  // Confetti on good score
  if (percentage >= 70) {
    setTimeout(launchConfetti, 300);
  }
}

document.getElementById('restart-btn')?.addEventListener('click', () => startQuiz(currentLevel));
document.getElementById('home-btn')?.addEventListener('click', loadHomeScreen);

// =============================================
//  EXPLAIN BUTTON
// =============================================
document.getElementById('explain-btn')?.addEventListener('click', () => {
  if (!lastQuestionData) return;
  document.getElementById('ai-text').textContent = '🤖 Thinking...';
  document.getElementById('explain-btn').style.display = 'none';
  getAIExplanation(lastQuestionData.question, lastQuestionData.selectedIndex);
});

// =============================================
//  AI EXPLANATION
// =============================================
async function getAIExplanation(question, selectedIndex) {
  const correctOption = question.options[question.answer];
  const selectedOption = selectedIndex === -1
    ? 'nothing (ran out of time)'
    : question.options[selectedIndex];

  try {
    const res = await fetch('https://codequiz-ai.onrender.com/explain', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: question.question,
        correctAnswer: correctOption,
        selectedAnswer: selectedOption,
        isTimeUp: selectedIndex === -1
      })
    });
    const data = await res.json();
    document.getElementById('ai-text').textContent = data.explanation || '⚠️ No explanation received.';
  } catch {
    document.getElementById('ai-text').textContent = '⚠️ Could not connect to server. Make sure backend is running!';
  }
}

// =============================================
//  AI FEEDBACK
// =============================================
async function getAIFeedback(score, total, wrongAnswers) {
  try {
    const res = await fetch('https://codequiz-ai.onrender.com/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: currentUser,
        levelName: currentLevel.name,
        score,
        total,
        wrongAnswers
      })
    });
    const data = await res.json();
    document.getElementById('ai-feedback-text').textContent = data.feedback || '⚠️ No feedback received.';
  } catch {
    document.getElementById('ai-feedback-text').textContent = '⚠️ Could not connect to server. Make sure backend is running!';
  }
}
// =============================================
//  CONFETTI ANIMATION
// =============================================
function launchConfetti() {
  const colors = ['#23c55e', '#3b82f6', '#f59e0b', '#f85149', '#a855f7', '#ec4899'];
  const confettiCount = 150;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: ${Math.random() * 10 + 6}px;
        height: ${Math.random() * 10 + 6}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        z-index: 9999;
        pointer-events: none;
        animation: confettiFall ${Math.random() * 2 + 2}s ease-in forwards;
        transform: rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }, i * 15);
  }
}

// =============================================
//  SCREEN TRANSITION
// =============================================
function showScreenAnimated(screenId) {
  const current = document.querySelector('.screen:not(.hidden)');
  const next = document.getElementById(screenId);

  if (current) {
    current.style.animation = 'fadeOut 0.3s ease forwards';
    setTimeout(() => {
      current.classList.add('hidden');
      current.style.animation = '';
      next.classList.remove('hidden');
      next.style.animation = 'fadeIn 0.4s ease forwards';
    }, 300);
  } else {
    next.classList.remove('hidden');
    next.style.animation = 'fadeIn 0.4s ease forwards';
  }
}

// =============================================
//  LOADING ANIMATION FOR AI
// =============================================
function showAILoading(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerHTML = `
    <div class="ai-loading">
      <div class="ai-dot"></div>
      <div class="ai-dot"></div>
      <div class="ai-dot"></div>
    </div>
  `;
}
function showToastMsg(msg) {
  const existing = document.getElementById('toast-msg');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.id = 'toast-msg';
  toast.textContent = msg;
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    background: #161b22;
    border: 1px solid #30363d;
    color: #e6edf3;
    padding: 12px 24px;
    border-radius: 100px;
    font-family: 'Fira Code', monospace;
    font-size: 0.85rem;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}
// =============================================
//  REGISTER SERVICE WORKER (PWA)
// =============================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('✅ Service Worker registered!'))
      .catch(err => console.log('❌ SW Error:', err));
  });
}