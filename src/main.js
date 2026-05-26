import './style.css';

// Tillsee Landing Page Interactive Engine

// --- DOM Content Loaded ---
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initChaoticStack();
  initMorningSimulator();
  initQuestionSpinner();
  initSeatingChart();
  initAlignmentQuiz();
  initPostcardWaitlist();
  initMobileNav();
});

// --- Mobile Navigation ---
function initMobileNav() {
  const toggleBtn = document.getElementById('btn-mobile-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      mainNav.classList.toggle('mobile-active');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.classList.remove('active');
        mainNav.classList.remove('mobile-active');
      });
    });
  }
}

// --- Scroll Reveal Animations ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.scroll-reveal, .element-fade-in, .text-reveal');
  
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });
}

// --- Chaotic Swipe App Stack & Dopamine Loop ---
function initChaoticStack() {
  const chaoticStack = document.getElementById('chaotic-swipe-zone');
  const dopamineFill = document.getElementById('dopamine-fill-el');
  const dopaminePct = document.getElementById('dopamine-percentage');
  const swipeExhaustionText = document.getElementById('swipe-exhaustion-text');
  const comparisonTitle = document.getElementById('comparison-chaotic-title');

  if (!chaoticStack || !dopamineFill || !dopaminePct) return;

  const cardPhrases = [
    'No reply...', 'Left on read', 'Just a face', 'Endless scroll', 
    'Not my type', 'Keep swiping', 'Another bio', 'Dopamine drop',
    '300 choices', 'Too fast', 'Jawline rating', 'Algorithm mismatch'
  ];

  let swipedCount = 0;
  let dopamineLevel = 20;

  function populateCards() {
    chaoticStack.innerHTML = '';
    
    cardPhrases.forEach((phrase, idx) => {
      const card = document.createElement('div');
      card.className = 'swiper-mock-card';
      
      const rotation = (Math.random() * 26 - 13); // -13deg to 13deg
      const tx = (Math.random() * 60 - 30); // -30px to 30px
      const ty = (Math.random() * 20 - 10); // -10px to 10px
      
      card.style.setProperty('--rot', `${rotation}deg`);
      card.style.setProperty('--tx', `${tx}px`);
      card.style.setProperty('--ty', `${ty}px`);
      card.style.zIndex = 15 - idx;
      
      if (idx > 3) {
        card.style.filter = `blur(${Math.min((idx - 3) * 1.5, 4)}px)`;
        card.style.opacity = 1 - (idx * 0.08);
      }

      card.innerHTML = `
        <div style="font-family: var(--font-sans); font-size: 0.6rem; color: rgba(255,139,139,0.7); text-transform: uppercase; margin-bottom: 0.25rem; letter-spacing: 0.05em;">PROFILE NO. ${284 + idx}</div>
        <div style="font-family: var(--font-serif); font-size: 0.95rem; font-weight: bold; line-height: 1.2; color: #fff;">${phrase}</div>
        <div style="margin-top: 1rem; display: flex; gap: 0.8rem; justify-content: center; font-size: 0.75rem;">
          <span>❌</span> <span>⚡</span> <span>❤️</span>
        </div>
      `;
      
      // Bind click swiping logic
      card.addEventListener('click', () => {
        if (card.classList.contains('swiped-away')) return;
        card.classList.add('swiped-away');
        swipedCount++;
        
        // Increase dopamine burnout levels
        dopamineLevel = Math.min(dopamineLevel + 8, 100);
        dopamineFill.style.width = `${dopamineLevel}%`;
        dopaminePct.textContent = `${dopamineLevel}%`;
        
        if (dopamineLevel >= 100) {
          dopamineFill.style.backgroundColor = '#ff4336';
          dopamineFill.style.boxShadow = '0 0 10px #ff4336';
          if (comparisonTitle) comparisonTitle.textContent = "Swipe Burnout Reached";
          swipeExhaustionText.textContent = `Swiped ${swipedCount} faces. Your attention is fragmented.`;
        } else {
          swipeExhaustionText.textContent = `Swiped ${swipedCount} profiles. Dopamine is rushing...`;
        }

        // If all visible cards swiped, automatically respawn
        const remaining = chaoticStack.querySelectorAll('.swiper-mock-card:not(.swiped-away)');
        if (remaining.length === 0) {
          setTimeout(() => {
            populateCards();
          }, 400);
        }
      });

      chaoticStack.appendChild(card);
    });
  }

  populateCards();
}

// --- Tillsee Morning Simulator ---
function initMorningSimulator() {
  const phoneScreen = document.getElementById('phone-screen-content');
  const simSteps = document.querySelectorAll('.sim-step');
  const resetBtn = document.getElementById('btn-sim-reset');
  
  if (!phoneScreen) return;

  // Simulator Data (Updated with relative paths)
  const profiles = [
    {
      id: 1,
      name: 'Clara',
      age: 29,
      avatarBg: '#c99359',
      prompt: 'On a difficult Sunday, you\'ll find me...',
      answer: 'Baking sourdough bread, listening to Chopin, and pretending the rest of the world doesn\'t exist.',
      img: './silhouette_art.png'
    },
    {
      id: 2,
      name: 'Julian',
      age: 28,
      avatarBg: '#8da399',
      prompt: 'A belief I hold onto stubbornly...',
      answer: 'That the best part of the day is when the rain starts, and you\'re inside with a hot mug of coffee.',
      img: './hero_couple.png'
    },
    {
      id: 3,
      name: 'Maya',
      age: 31,
      avatarBg: '#b17a74',
      prompt: 'How I grieve...',
      answer: 'Quietly. With very long walks through Prospect Park, holding a vintage film camera and not taking any photos.',
      img: './coffee_shop.png'
    },
    {
      id: 4,
      name: 'Liam',
      age: 27,
      avatarBg: '#d4a373',
      prompt: 'What makes me cry at the kitchen sink...',
      answer: 'Chopping yellow onions while listening to old shellac records of my grandfather\'s favorite jazz.',
      img: './flatlay_desk.png'
    }
  ];

  let currentStep = 1;
  let activeProfileIndex = 0;
  let heartsLeft = 5;
  let hasLikedJulian = false;

  // Render Functions
  function setStepActive(stepNum) {
    currentStep = stepNum;
    simSteps.forEach(step => {
      const stepIdx = parseInt(step.getAttribute('data-step'));
      if (stepIdx === stepNum) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }

  function showState1() {
    setStepActive(1);
    phoneScreen.innerHTML = `
      <div class="phone-screen-inner">
        <div class="sim-state-glow">
          <div class="phone-glow-bell">🍀</div>
          <h4 class="phone-glow-title">At first light.</h4>
          <p class="phone-glow-sub">Your phone glows once. Ten people have been carefully chosen for you.</p>
          <button class="btn-cta btn-large btn-small" id="btn-start-reading" style="font-size: 0.8rem; padding: 0.6rem 1.4rem;">Read with coffee</button>
        </div>
      </div>
    `;

    document.getElementById('btn-start-reading').addEventListener('click', () => {
      showState2();
    });
  }

  function showState2() {
    setStepActive(2);
    const profile = profiles[activeProfileIndex];
    
    phoneScreen.innerHTML = `
      <div class="phone-screen-inner">
        <div class="sim-state-stack">
          <div class="stack-header">
            <span>Profile ${activeProfileIndex + 1} of 10</span>
            <span class="heart-tracker-pill">❤️ ${heartsLeft} left</span>
          </div>
          
          <div class="stack-card-area">
            <div class="sim-profile-card" id="active-profile-card">
              <div class="profile-card-image" style="background-image: url('${profile.img}'); background-color: ${profile.avatarBg}"></div>
              <h4 class="profile-name-age">${profile.name}, ${profile.age}</h4>
              <div class="profile-prompt-label">${profile.prompt}</div>
              <p class="profile-prompt-value">"${profile.answer}"</p>
            </div>
          </div>
          
          <div class="stack-actions-footer">
            <button class="btn-sim-circle btn-pass" id="btn-card-pass" aria-label="Pass">✗</button>
            <button class="btn-sim-circle btn-heart" id="btn-card-like" aria-label="Give Heart">❤️</button>
          </div>
        </div>
      </div>
    `;

    // Action buttons
    const passBtn = document.getElementById('btn-card-pass');
    const likeBtn = document.getElementById('btn-card-like');
    const cardEl = document.getElementById('active-profile-card');

    passBtn.addEventListener('click', () => {
      cardEl.style.transform = 'translateX(-150px) rotate(-20deg)';
      cardEl.style.opacity = '0';
      setTimeout(nextProfile, 300);
    });

    likeBtn.addEventListener('click', () => {
      if (heartsLeft > 0) {
        heartsLeft--;
        likeBtn.classList.add('active');
        cardEl.style.transform = 'translateY(-100px) scale(0.9)';
        cardEl.style.boxShadow = '0 0 25px rgba(212, 163, 115, 0.4)';
        
        if (profile.id === 2) {
          hasLikedJulian = true;
        }
        
        setTimeout(() => {
          if (profile.id === 2 && hasLikedJulian) {
            showState3Match();
          } else {
            nextProfile();
          }
        }, 400);
      }
    });
  }

  function nextProfile() {
    activeProfileIndex = (activeProfileIndex + 1) % profiles.length;
    showState2();
  }

  function showState3Match() {
    setStepActive(3);
    phoneScreen.innerHTML = `
      <div class="phone-screen-inner">
        <div class="sim-state-glow" style="animation: none; background: rgba(212, 163, 115, 0.05);">
          <div class="phone-glow-bell" style="animation: scale-up 1s ease infinite alternate; font-size: 3.5rem;">🍀</div>
          <h4 class="phone-glow-title" style="color: var(--color-accent); font-family: var(--font-serif); font-style: italic;">One door opens.</h4>
          <p class="phone-glow-sub" style="max-width: 220px; font-size: 0.75rem;">Julian liked you back. On Tillsee, when you match, we close the rest of the room. You have one conversation.</p>
          <button class="btn-cta btn-large btn-small" id="btn-enter-chat" style="font-size: 0.8rem; padding: 0.6rem 1.4rem; background-color: var(--color-accent);">Open Conversation</button>
        </div>
      </div>
    `;

    document.getElementById('btn-enter-chat').addEventListener('click', () => {
      showState3Chat();
    });
  }

  function showState3Chat() {
    setStepActive(3);
    phoneScreen.innerHTML = `
      <div class="phone-screen-inner">
        <div class="sim-state-chat">
          <div class="chat-header">
            <div class="chat-avatar">J</div>
            <div class="chat-user-info">
              <h4>Julian, 28</h4>
              <span>Online / Brooklyn</span>
            </div>
          </div>
          
          <div class="chat-history" id="chat-scroller">
            <div class="chat-message message-incoming" id="msg-1" style="opacity: 0;">
              Good morning. I loved your answer about the kitchen sink record. What song was playing?
            </div>
            <div class="chat-message message-outgoing" id="msg-2" style="display: none;">
              It was a vintage jazz record by Bill Evans. It felt sudden, like weather.
            </div>
            <div class="chat-message message-incoming" id="msg-3" style="display: none;">
              Bill Evans is perfect for a slow rainy morning. Would you like to meet at the Coffee Club this Saturday?
            </div>
          </div>
          
          <div class="chat-footer-desc" id="chat-input-area">
            <button class="btn-cta btn-large btn-small" id="btn-chat-reply" style="font-size: 0.75rem; padding: 0.4rem 1rem; width: 100%;">Type a reply...</button>
          </div>
        </div>
      </div>
    `;

    const chatScroller = document.getElementById('chat-scroller');
    const msg1 = document.getElementById('msg-1');
    const msg2 = document.getElementById('msg-2');
    const msg3 = document.getElementById('msg-3');
    const replyBtn = document.getElementById('btn-chat-reply');
    const inputArea = document.getElementById('chat-input-area');

    setTimeout(() => {
      msg1.style.opacity = '1';
      msg1.style.transition = 'opacity 0.6s ease';
      chatScroller.scrollTop = chatScroller.scrollHeight;
    }, 400);

    replyBtn.addEventListener('click', () => {
      replyBtn.style.display = 'none';
      inputArea.innerHTML = `<span style="font-size: 0.7rem; color: var(--color-text-muted);">Typing response...</span>`;
      
      setTimeout(() => {
        msg2.style.display = 'block';
        chatScroller.scrollTop = chatScroller.scrollHeight;
        
        setTimeout(() => {
          inputArea.innerHTML = `<span style="font-size: 0.7rem; color: var(--color-sage);">Julian is writing...</span>`;
          
          setTimeout(() => {
            msg3.style.display = 'block';
            chatScroller.scrollTop = chatScroller.scrollHeight;
            
            inputArea.innerHTML = `
              <strong>Tillsee Conversation</strong>
              No other matches blinking. Just one person, slowly becoming known.
            `;
          }, 1800);
        }, 1200);
      }, 1000);
    });
  }

  // Bind Reset button
  resetBtn.addEventListener('click', () => {
    activeProfileIndex = 0;
    heartsLeft = 5;
    hasLikedJulian = false;
    showState1();
  });

  // Start with State 1
  showState1();

  // Allow clicking on section steps
  simSteps.forEach(step => {
    step.addEventListener('click', () => {
      const stepIdx = parseInt(step.getAttribute('data-step'));
      if (stepIdx === 1) {
        showState1();
      } else if (stepIdx === 2) {
        showState2();
      } else if (stepIdx === 3) {
        showState3Match();
      }
    });
  });
}

// --- Diary Question Auto-Spinner ---
function initQuestionSpinner() {
  const qText = document.getElementById('diary-question-text');
  const qNum = document.getElementById('diary-question-number');
  const revealBtn = document.getElementById('btn-reveal-question');
  
  if (!qText || !revealBtn) return;

  const questionsList = [
    { num: 12, text: "How do you love?" },
    { num: 19, text: "How do you grieve?" },
    { num: 25, text: "What do you reach for on a difficult Sunday?" },
    { num: 34, text: "What did you used to believe, and what do you still?" },
    { num: 42, text: "How do you fight? How do you forgive?" },
    { num: 51, text: "What makes you cry at the kitchen sink?" },
    { num: 63, text: "What is a promise you made to yourself that you\'ve kept?" },
    { num: 70, text: "What was the particular way your childhood home smelled?" },
    { num: 75, text: "What did you want to be when you were twelve?" },
    { num: 80, text: "What noise do you listen for when you\'re alone?" }
  ];

  let currentIdx = 0;
  let autoTurnTimer = setInterval(rotateQuestion, 5000);

  function rotateQuestion() {
    const diaryPage = document.querySelector('.diary-page');
    if (!diaryPage || !qText) return;
    
    // Fade out translation
    qText.classList.add('fading');
    diaryPage.style.transform = 'rotateY(-5deg) scale(0.98)';
    
    setTimeout(() => {
      let nextIdx = Math.floor(Math.random() * questionsList.length);
      while (nextIdx === currentIdx) {
        nextIdx = Math.floor(Math.random() * questionsList.length);
      }
      currentIdx = nextIdx;
      
      const q = questionsList[currentIdx];
      qNum.textContent = q.num;
      qText.textContent = q.text;
      
      // Fade in translation
      qText.classList.remove('fading');
      diaryPage.style.transform = 'rotateY(0deg) scale(1)';
    }, 300);
  }

  revealBtn.addEventListener('click', () => {
    // Reset automatic timer on user click
    clearInterval(autoTurnTimer);
    rotateQuestion();
    autoTurnTimer = setInterval(rotateQuestion, 5000);
  });
}

// --- Seating Chart Tooltips ---
function initSeatingChart() {
  const gridLayout = document.getElementById('seating-grid-layout');
  const tooltip = document.getElementById('seating-tooltip-box');
  
  if (!gridLayout || !tooltip) return;

  gridLayout.innerHTML = '';

  const chairProfiles = [
    "Sourdough baker who plays classical piano.",
    "Brooklyn architect with a passion for film photography.",
    "Writer of letters, seeker of old bookstores.",
    "Vinyl collector obsessed with 1960s jazz.",
    "Lighthouse fan who loves early morning jogs.",
    "Quiet designer, bakes biscuits on rainy days.",
    "Botanist who keeps a mini green house.",
    "History teacher who climbs mountains in the summer.",
    "Poet who works in a letterpress print shop.",
    "Violinist who reads science fiction before bed.",
    "Graphic designer, collects vintage matchboxes.",
    "Your Spot. Slow enough to feel something.", // 13 (User Spot)
    "Carpenter who builds bookshelves by hand.",
    "Tea sommelier, spends Sundays sketching trees.",
    "Urban planner who sketches park benches.",
    "Film director who prefers black and white film.",
    "Ceramicist who runs a small studio in Greenpoint.",
    "Candid photographer, makes great waffles.",
    "Translator of poetry, drinks roasted oolong.",
    "Coffee enthusiast who roasts beans in their kitchen.",
    "Astronomer who loves camping under dark skies.",
    "Baker who crafts miniature pastries.",
    "Restorer of vintage furniture, loves jazz.",
    "Bookbinder who collects fountain pens.",
    "Landscape artist, keeps a diary of clouds."
  ];

  for (let i = 1; i <= 25; i++) {
    const chair = document.createElement('div');
    chair.className = 'chair-item';
    
    if (i === 13) {
      chair.classList.add('user-spot');
      chair.innerHTML = '<span>🍀</span>';
    } else {
      if (Math.random() > 0.3) {
        chair.classList.add('occupied');
      }
      chair.innerHTML = `<span>${i}</span>`;
    }

    chair.addEventListener('mouseenter', (e) => {
      const rect = chair.getBoundingClientRect();
      const parentRect = gridLayout.parentElement.getBoundingClientRect();
      
      const title = i === 13 ? "Your Chair" : `Chair ${i}`;
      const desc = chairProfiles[i - 1];

      tooltip.querySelector('.tooltip-title').textContent = title;
      tooltip.querySelector('.tooltip-desc').textContent = desc;
      tooltip.classList.add('active');

      const tooltipX = rect.left - parentRect.left + (rect.width / 2) - 110;
      const tooltipY = rect.top - parentRect.top - 95;

      tooltip.style.left = `${tooltipX}px`;
      tooltip.style.top = `${tooltipY}px`;
    });

    chair.addEventListener('mouseleave', () => {
      tooltip.classList.remove('active');
    });

    chair.addEventListener('click', (e) => {
      e.stopPropagation();
      chair.dispatchEvent(new Event('mouseenter'));
    });

    gridLayout.appendChild(chair);
  }

  document.body.addEventListener('click', () => {
    tooltip.classList.remove('active');
  });
}

// --- Visual Alignment Quiz ---
function initAlignmentQuiz() {
  const steps = document.querySelectorAll('.quiz-step');
  const progress = document.getElementById('quiz-progress');
  const resultTillsee = document.getElementById('quiz-result-tillsee');
  const resultOther = document.getElementById('quiz-result-other');
  const retryBtn = document.getElementById('btn-quiz-retry');
  const ctaBtn = document.getElementById('btn-quiz-cta');

  if (steps.length === 0 || !progress) return;

  let currentStep = 1;
  let choices = [];

  function showStep(stepNum) {
    currentStep = stepNum;
    steps.forEach(step => {
      const sIdx = parseInt(step.getAttribute('data-quiz-step'));
      if (sIdx === stepNum) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update progress indicator
    const pct = ((stepNum - 1) / steps.length) * 100;
    progress.style.width = `${pct || 10}%`;
  }

  steps.forEach(step => {
    const options = step.querySelectorAll('.quiz-option');
    options.forEach(opt => {
      opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');

        const val = opt.getAttribute('data-option');
        choices[currentStep - 1] = val;

        setTimeout(() => {
          if (currentStep < steps.length) {
            showStep(currentStep + 1);
          } else {
            showResults();
          }
        }, 500);
      });
    });
  });

  function showResults() {
    steps.forEach(step => step.classList.remove('active'));
    progress.style.width = '100%';

    const tillseeCount = choices.filter(c => c === 'tillsee').length;

    if (tillseeCount >= 2) {
      resultTillsee.classList.remove('hidden');
    } else {
      resultOther.classList.remove('hidden');
    }
  }

  function resetQuiz() {
    choices = [];
    resultTillsee.classList.add('hidden');
    resultOther.classList.add('hidden');
    steps.forEach(step => {
      step.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
    });
    showStep(1);
  }

  if (retryBtn) retryBtn.addEventListener('click', resetQuiz);
  if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
    });
  }

  showStep(1);
}

// --- Postcard Waitlist Form ---
function initPostcardWaitlist() {
  const waitlistForm = document.getElementById('form-waitlist');
  const postcard = document.getElementById('waitlist-postcard');
  const successView = document.getElementById('postcard-success-view');
  const resetSuccessBtn = document.getElementById('btn-success-reset');
  
  if (!waitlistForm || !postcard) return;

  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameVal = document.getElementById('input-name').value;
    const emailVal = document.getElementById('input-email').value;
    
    document.getElementById('success-user-name').textContent = nameVal;
    document.getElementById('success-user-email').textContent = `(${emailVal})`;

    postcard.classList.add('flipped');
    
    setTimeout(() => {
      successView.classList.remove('hidden');
      postcard.querySelector('.postcard-front').style.visibility = 'hidden';
    }, 400);
  });

  resetSuccessBtn.addEventListener('click', () => {
    postcard.classList.remove('flipped');
    waitlistForm.reset();
    
    setTimeout(() => {
      successView.classList.add('hidden');
      postcard.querySelector('.postcard-front').style.visibility = 'visible';
    }, 400);
  });
}
