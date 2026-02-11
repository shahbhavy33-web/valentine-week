/* 
  ❤️ Valentine's Week App Configuration ❤️
  ------------------------------------------------
  Customize the app easily by editing the values below.
  Perfect for Personalization!
  © 2026 Valentine's Week Template. All Rights Reserved. Redistribution prohibited without written consent.
*/
const CONFIG = {
  // Website Title & Meta
  siteTitle: "Valentine's Week Celebration 2026",
  
  // Love Calculator Settings
  calculator: {
    minScore: 60, // Minimum base score (0-100)
    bonusScore: 2, // Bonus points per description character
    messages: {
      high: "A Match Made in Heaven! 💍", // > 90%
      medium: "Deeply in Love! ❤️",      // > 80%
      low: "A Lovely Couple! 💕",        // > 70%
      default: "Good Potential! 🌱"
    }
  },

  // AI Love Letter Templates
  letterTemplates: [
    "Dear {name},\n\nYou make every ordinary moment special. This Valentine’s Week, I choose you—always. ❤️",
    "My Dearest {name},\n\nLife is beautiful because of you. Thank you for being my sunshine. ☀️",
    "To {name},\n\nEvery day with you is a new adventure. I can't wait to make more memories together. 💖",
    "My Love {name},\n\nWords aren't enough to tell you how much you mean to me. You are my everything. 🌹"
  ],

  // WhatsApp Share Messages
  sharing: {
    calculator: "We checked our Love Score on the Valentine's App! 💘\n\n{result}\n\nCheck yours now!",
    letter: "💌 A Love Letter for you:\n\n{letter}\n\nGenerated with Valentine's App 💖"
  },

  // Sales/Developer Info (For selling this template)
  sales: {
    enabled: true, // Set to false to hide the sales section
    whatsappNumber: "919512461393", // Updated number
    price: "₹1999",
    message: "Hi! I loved the Valentine Website Demo. I want to buy this template/website. 💖"
  }
};

const daysData = {
  rose: {
    title: "🌹 Rose Day - Feb 7",
    desc: "Start the week with the fragrance of love. Gift a red rose to express your passion!",
    quote: "“A rose by any other name would smell as sweet.” – Shakespeare",
    emoji: "🌹",
    scenario: "give-rose",
    prop: "🌹",
    gift: "Lego Flower Bouquet 💐, crochet roses that last forever, or a neon 'Rose' aesthetic sign for their room.",
    image: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=500&q=60",
    activities: {
      classic: "Buy a bouquet of red roses and hide a handwritten love note inside one of them.",
      genz: "Send a 'virtual bouquet' filter on IG or buy a Lego Flower Bouquet to build together."
    }
  },
  propose: {
    title: "💍 Propose Day - Feb 8",
    desc: "Confess your feelings. If you love someone, today is the day to let them know.",
    quote: "“I ask you to pass through life at my side.” – Charlotte Brontë",
    emoji: "💍",
    scenario: "propose",
    prop: "💍",
    gift: "A 'Will you be my Player 2?' custom hoodie, a Spotify code ring with your song, or a cute digital proposal reel.",
    image: "https://images.pexels.com/photos/3156648/pexels-photo-3156648.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "Plan a romantic candlelight dinner and confess your feelings with a heartfelt letter.",
      genz: "Make a cute 'POV: You said yes' reel or soft launch your relationship with a bio update."
    }
  },
  chocolate: {
    title: "🍫 Chocolate Day - Feb 9",
    desc: "Sweeten your bond with chocolates.",
    quote: "“All you need is love. But a little chocolate now and then doesn't hurt.”",
    emoji: "🍫",
    scenario: "exchange",
    prop: "🍫",
    gift: "Viral Dubai Pistachio Chocolate Bar, a mini aesthetic bento cake, or personalized M&Ms with inside jokes.",
    image: "https://images.pexels.com/photos/18579833/pexels-photo-18579833.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "Bake handmade chocolate truffles together or gift a premium dark chocolate box.",
      genz: "Try the viral Dubai Pistachio Chocolate or make a 'chocolate smash' heart video."
    }
  },
  teddy: {
    title: "🧸 Teddy Day - Feb 10",
    desc: "Gift a cute teddy bear to give your partner something to hug.",
    quote: "“Bears sleep by day. At night they stay awake to chase away bad dreams.”",
    emoji: "🧸",
    scenario: "give-teddy",
    prop: "🧸",
    gift: "A giant Squishmallow, a Jellycat plushie (like the toast or coffee), or a weighted anxiety plush for comfort.",
    image: "https://images.pexels.com/photos/264917/pexels-photo-264917.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "Gift a giant fluffy teddy bear that smells like your perfume/cologne.",
      genz: "Buy a Jellycat plushie (like the coffee or toast) or add to their Squishmallow collection."
    }
  },
  promise: {
    title: "🤞 Promise Day - Feb 11",
    desc: "Make a commitment. Promises are the glue that holds relationships together.",
    quote: "“Promise me you'll always remember: You're braver than you believe.”",
    emoji: "🤞",
    scenario: "hug",
    prop: "🤞",
    gift: "Matching 'Touch' bracelets (bond touch), a customized 'Pinky Promise' wax seal kit, or a shared Notion travel list.",
    image: "https://images.pexels.com/photos/31775867/pexels-photo-31775867.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "Exchange promise rings or write vows to each other to keep forever.",
      genz: "Create a shared Notion 'Relationship Goals' page or set up Bond Touch bracelets."
    }
  },
  hug: {
    title: "🤗 Hug Day - Feb 12",
    desc: "A warm hug speaks a thousand words.",
    quote: "“A hug is like a boomerang - you get it back right away.”",
    emoji: "🤗",
    scenario: "hug",
    prop: "❤️",
    gift: "A 'This Hoodie Belongs to...' oversized hoodie, a long-distance touch lamp, or a 'Hug in a Box' self-care kit.",
    image: "https://images.pexels.com/photos/4307963/pexels-photo-4307963.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "Give a long, warm embrace that lasts at least 20 seconds to release oxytocin.",
      genz: "Send a 'virtual hug' gif spam or gift a weighted blanket for anxiety relief."
    }
  },
  kiss: {
    title: "💋 Kiss Day - Feb 13",
    desc: "Seal your love with a kiss.",
    quote: "“A kiss is a lovely trick designed by nature to stop speech.”",
    emoji: "💋",
    scenario: "kiss",
    prop: "💋",
    gift: "Laneige Lip Sleeping Mask set, custom lip print art frame, or a 'Kiss Me' decision dice game.",
    image: "https://images.pexels.com/photos/4884002/pexels-photo-4884002.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "A romantic kiss on the forehead or re-watching your favorite romance movie.",
      genz: "Do a 'Kiss Me' filter challenge on TikTok or have a skincare date with lip masks."
    }
  },
  valentine: {
    title: "❤️ Valentine's Day - Feb 14",
    desc: "The day of love! Celebrate your special connection.",
    quote: "“There is only one happiness in this life, to love and be loved.”",
    emoji: "❤️",
    scenario: "kiss",
    prop: "💖",
    gift: "Instax Mini camera for memories, a couple's gaming setup upgrade, or a star map of your first DM/date.",
    image: "https://images.pexels.com/photos/30564808/pexels-photo-30564808.jpeg?auto=compress&cs=tinysrgb&w=800",
    activities: {
      classic: "A classic dinner date, red roses, and a long walk under the stars.",
      genz: "A cozy staycation with Netflix, favorite takeout, and matching pajamas."
    }
  }
};

let animationInterval;
let currentVibe = 'classic';
let currentDay = null;

function setVibe(vibe) {
  currentVibe = vibe;
  
  // Update buttons
  document.getElementById('btn-classic').classList.toggle('active', vibe === 'classic');
  document.getElementById('btn-genz').classList.toggle('active', vibe === 'genz');
  
  // Update content if a day is selected
  if (currentDay && daysData[currentDay]) {
    updateActivityDisplay(daysData[currentDay]);
  }
}

function updateActivityDisplay(data) {
   const content = document.getElementById("activity-content");
   
   // Set vibe-specific styling class
   content.className = "activity-content"; // reset
   content.classList.add("style-" + currentVibe);

   if (data.activities && data.activities[currentVibe]) {
     content.innerHTML = `<p>${data.activities[currentVibe]}</p>`;
     // Add a little animation class
     content.classList.remove("fade-in");
     void content.offsetWidth; // trigger reflow
     content.classList.add("fade-in");
   } else {
     content.innerHTML = "<p>No activity data available.</p>";
   }
 }

function showDetails(day) {
  const detailsBox = document.getElementById("day-details");
  const title = document.getElementById("detail-title");
  const desc = document.getElementById("detail-desc");
  const quote = document.getElementById("detail-quote");
  
  currentDay = day;

  if (daysData[day]) {
    title.innerText = daysData[day].title;
    desc.innerText = daysData[day].desc;
    quote.innerText = daysData[day].quote;
    
    // Update activity based on current vibe
    updateActivityDisplay(daysData[day]);
    
    detailsBox.classList.remove("hidden");
    detailsBox.scrollIntoView({ behavior: "smooth", block: "center" });

    startAnimation(daysData[day].emoji);
    playScenario(daysData[day].scenario, daysData[day].prop);

    // Confetti for special days
    if (day === 'propose' || day === 'valentine') {
      setTimeout(triggerConfetti, 500); // Small delay for effect
    }
  }
}

function closeDetails() {
  document.getElementById("day-details").classList.add("hidden");
  stopAnimation();
  document.getElementById("scenario-stage").innerHTML = "";
}

// SVG Character Generators
function getBoySVG(pose) {
  // Default arms
  let rightArm = `
    <g class="arm right-arm">
        <rect x="73" y="60" width="12" height="60" rx="5" fill="url(#skin)" />
        <rect x="73" y="60" width="12" height="20" rx="2" fill="#3498db" /> <!-- Sleeve -->
    </g>`;

  // Raised arm for giving rose/gifts
  if (pose === 'give-rose' || pose === 'exchange' || pose === 'give-teddy') {
    rightArm = `
      <g class="arm right-arm">
          <!-- Arm extending forward -->
          <path d="M78,65 Q90,80 115,65" stroke="url(#skin)" stroke-width="12" fill="none" stroke-linecap="round" />
          <path d="M78,65 L85,68" stroke="#3498db" stroke-width="12" stroke-linecap="butt" /> <!-- Sleeve -->
          <circle cx="115" cy="65" r="6" fill="url(#skin)" /> <!-- Hand -->
      </g>`;
  }

  return `
    <svg viewBox="0 0 150 200" class="char-svg">
      <defs>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#f1c27d"/>
          <stop offset="100%" stop-color="#e0ac69"/>
        </linearGradient>
      </defs>
      <g transform="translate(25, 0)">
        <g class="boy-body">
          <!-- Legs -->
          <g class="legs">
            <line x1="40" y1="140" x2="35" y2="190" stroke="#2c3e50" stroke-width="10" stroke-linecap="round"/>
            <line x1="60" y1="140" x2="65" y2="190" stroke="#2c3e50" stroke-width="10" stroke-linecap="round"/>
          </g>

          <!-- Left Arm (Behind) -->
          <g class="arm left-arm">
              <rect x="15" y="60" width="12" height="60" rx="5" fill="url(#skin)" />
              <rect x="15" y="60" width="12" height="20" rx="2" fill="#3498db" />
          </g>

          <!-- Body -->
          <path d="M30,60 Q50,55 70,60 L70,125 Q50,130 30,125 Z" fill="#3498db" />
          <path d="M48,60 L52,60 L52,125 L48,125 Z" fill="rgba(0,0,0,0.1)" />

          <!-- Right Arm (Dynamic) -->
          ${rightArm}

          <!-- Head Group -->
          <g class="head">
            <rect x="44" y="50" width="12" height="15" fill="url(#skin)"/>
            <circle cx="50" cy="40" r="22" fill="url(#skin)" />
            <circle cx="43" cy="38" r="2.5" fill="#333"/>
            <circle cx="57" cy="38" r="2.5" fill="#333"/>
            <path d="M45,48 Q50,52 55,48" stroke="#333" stroke-width="1.5" fill="none"/>
            <path d="M26,35 Q50,0 74,35 Q75,20 50,10 Q25,20 26,35" fill="#2c3e50" />
          </g>
        </g>
      </g>
    </svg>
  `;
}

function getGirlSVG(pose) {
  // Default arms
  let arms = `
      <g class="arm left-arm">
          <rect x="22" y="62" width="10" height="55" rx="4" fill="url(#skin)" />
      </g>
      <g class="arm right-arm">
          <rect x="68" y="62" width="10" height="55" rx="4" fill="url(#skin)" />
      </g>`;
  
  // Reaching arms for hug/exchange
  if (pose === 'hug' || pose === 'exchange' || pose === 'give-teddy') {
      arms = `
      <g class="arm left-arm">
           <path d="M22,65 Q10,80 -10,65" stroke="url(#skin)" stroke-width="10" fill="none" stroke-linecap="round" />
      </g>
      <g class="arm right-arm">
           <rect x="68" y="62" width="10" height="55" rx="4" fill="url(#skin)" />
      </g>`;
  }

  return `
    <svg class="char-svg girl" viewBox="0 0 150 200">
      <defs>
        <linearGradient id="skin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stop-color="#f1c27d"/>
          <stop offset="100%" stop-color="#e0ac69"/>
        </linearGradient>
      </defs>
      <g transform="translate(25, 0)">
        <!-- Legs -->
        <g class="legs">
          <g class="leg left-leg">
               <rect x="38" y="140" width="10" height="50" rx="2" fill="url(#skin)" />
               <path d="M36,190 L50,190 L50,195 Q43,200 36,195 Z" fill="#e91e63" />
          </g>
          <g class="leg right-leg">
               <rect x="52" y="140" width="10" height="50" rx="2" fill="url(#skin)" />
               <path d="M50,190 L64,190 L64,195 Q57,200 50,195 Z" fill="#e91e63" />
          </g>
        </g>

        <!-- Dress -->
        <path d="M35,60 L65,60 L85,145 L15,145 Z" fill="#e91e63" />
        <path d="M35,60 L65,60 L65,90 L35,90 Z" fill="rgba(0,0,0,0.1)" />

        <!-- Arms -->
        <g class="arms">
          ${arms}
        </g>

        <!-- Head Group -->
        <g class="head">
          <rect x="45" y="50" width="10" height="15" fill="url(#skin)"/>
          <circle cx="50" cy="40" r="20" fill="url(#skin)" />
          <circle cx="43" cy="38" r="2.5" fill="#333"/>
          <circle cx="57" cy="38" r="2.5" fill="#333"/>
          <path d="M45,48 Q50,51 55,48" stroke="#333" stroke-width="1.5" fill="none"/>
          <path d="M25,40 Q50,0 75,40 L80,100 Q50,90 20,100 Z" fill="#5d4037" />
          <path d="M25,40 Q50,10 75,40" fill="#5d4037" />
        </g>
      </g>
    </svg>
  `;
}

function playScenario(type, propEmoji) {
  const stage = document.getElementById("scenario-stage");
  stage.innerHTML = "";
  stage.className = "scenario-stage"; 

  // Create Container for Characters
  const boyContainer = document.createElement("div");
  boyContainer.className = "char-container boy-container";
  boyContainer.innerHTML = getBoySVG(type);

  const girlContainer = document.createElement("div");
  girlContainer.className = "char-container girl-container";
  girlContainer.innerHTML = getGirlSVG(type);

  // Add Prop Element
  const prop = document.createElement("div");
  prop.className = "prop-item";
  prop.innerText = propEmoji;
  prop.style.opacity = "0"; // Start hidden

  // Reset animations
  stage.appendChild(boyContainer);
  stage.appendChild(girlContainer);
  stage.appendChild(prop);

  // Force reflow to ensure transitions play
  void stage.offsetWidth;

  // Apply Scenario Classes
  stage.classList.add(`scene-${type}`);
}

function startAnimation(emoji) {
  stopAnimation();
  const container = document.getElementById("animation-layer");
  animationInterval = setInterval(() => {
    const el = document.createElement("div");
    el.classList.add("floating-emoji");
    el.innerText = emoji;
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDuration = Math.random() * 3 + 2 + "s";
    el.style.fontSize = Math.random() * 2 + 1 + "rem";
    container.appendChild(el);
    setTimeout(() => el.remove(), 5000);
  }, 300);
}

function stopAnimation() {
  if (animationInterval) clearInterval(animationInterval);
  document.getElementById("animation-layer").innerHTML = "";
}

async function calculate() {
  const name1 = document.getElementById("name1").value;
  const name2 = document.getElementById("name2").value;
  const desc = document.getElementById("desc").value;
  const resultDiv = document.getElementById("result");

  if (!name1 || !name2) {
    resultDiv.innerText = "Please enter both names! 💖";
    return;
  }

  resultDiv.innerText = "Calculating love... 💘";

  try {
      // Call Backend API
      const response = await fetch('http://localhost:5000/api/calculate-love', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name1, name2, desc })
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      
      resultDiv.innerText = `Love Score: ${data.score}% 💖 - ${data.message}`;
      
      // Show Share Button
      document.getElementById("share-calc-btn").classList.remove("hidden");

      // Trigger Confetti if score > 90
      if (data.score > 90) {
        triggerConfetti();
      }
  } catch (error) {
      console.error("Error:", error);
      // Fallback to local logic if server is offline (for demo/template safety)
      calculateLocal(name1, name2, desc, resultDiv);
  }
}

function calculateLocal(name1, name2, desc, resultDiv) {
    // Original local logic as fallback
    const combinedNames = (name1 + name2).toLowerCase().replace(/\s/g, '');
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
      sum += combinedNames.charCodeAt(i);
    }
    if (desc && desc.trim().length > 0) {
       sum += desc.length * CONFIG.calculator.bonusScore;
    }
    const score = (sum % 41) + CONFIG.calculator.minScore; 
    let message = score > 90 ? CONFIG.calculator.messages.high : 
                  score > 80 ? CONFIG.calculator.messages.medium : 
                  score > 70 ? CONFIG.calculator.messages.low : 
                  CONFIG.calculator.messages.default;
    if (desc && desc.trim().length > 0) {
        message += `\nYour description adds a special spark! ✨`;
    }
    resultDiv.innerText = `Love Score: ${score}% 💖 - ${message} (Offline Mode)`;
    document.getElementById("share-calc-btn").classList.remove("hidden");
    if (score > 90) triggerConfetti();
}

function shareCalculator() {
  const resultText = document.getElementById("result").innerText;
  if (!resultText) return;
  const text = CONFIG.sharing.calculator.replace("{result}", resultText);
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff8fa3', '#fff0f3', '#d90429']
    });
  }
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderGifts();
  // startBackgroundHearts(); // Disabled in favor of 3D background
  
  // Show welcome popup after a short delay
  setTimeout(() => {
    const popup = document.getElementById("welcome-popup");
    if (popup) {
      popup.classList.remove("hidden");
    }
  }, 500);

  // Update Price from CONFIG (if element exists)
  const priceEl = document.getElementById("display-price");
  if (priceEl && CONFIG.sales && CONFIG.sales.price) {
    priceEl.innerText = CONFIG.sales.price;
  }

  // Toggle Sales Section Visibility
  const salesSection = document.getElementById("buy-template");
  if (salesSection && CONFIG.sales && CONFIG.sales.enabled === false) {
    salesSection.classList.add("hidden");
  }

  // Start Countdown
  updateCountdown();
  setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  // Target: Feb 14, 2026 (Change year dynamically if needed)
  const targetYear = new Date().getFullYear(); 
  let valentineDate = new Date(`February 14, ${targetYear} 00:00:00`).getTime();
  const now = new Date().getTime();
  
  // If passed this year, show for next year? Or just show 0.
  // For now, let's stick to the current upcoming Valentine's.
  
  const gap = valentineDate - now;

  if (gap < 0) {
      document.getElementById("days").innerText = "00";
      document.getElementById("hours").innerText = "00";
      document.getElementById("minutes").innerText = "00";
      document.getElementById("seconds").innerText = "00";
      return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  const daysEl = document.getElementById("days");
  if (daysEl) {
      daysEl.innerText = d < 10 ? "0" + d : d;
      document.getElementById("hours").innerText = h < 10 ? "0" + h : h;
      document.getElementById("minutes").innerText = m < 10 ? "0" + m : m;
      document.getElementById("seconds").innerText = s < 10 ? "0" + s : s;
  }
}

function closePopup() {
  const popup = document.getElementById("welcome-popup");
  if (popup) {
    popup.classList.add("hidden");
  }
}

function renderGifts() {
  console.log("Rendering Gifts...");
  const grid = document.getElementById("gift-grid");
  if (!grid) {
      console.error("Gift grid element not found!");
      return;
  }
  
  grid.innerHTML = "";
  let hasGifts = false;

  for (const key in daysData) {
    const day = daysData[key];
    if (day.gift) {
        hasGifts = true;
        const card = document.createElement("div");
        card.className = "gift-card";
        
        // Add image if available
        let imageHtml = '';
        if (day.image) {
            imageHtml = `<div class="gift-image" style="background-image: url('${day.image}')"></div>`;
        }
        
        card.innerHTML = `
          ${imageHtml}
          <div class="gift-content">
            <div class="gift-icon">${day.emoji}</div>
            <h3>${day.title.split('-')[0].trim()}</h3>
            <p>${day.gift}</p>
          </div>
        `;
        grid.appendChild(card);
    }
  }

  if (!hasGifts) {
      grid.innerHTML = "<p>No gift suggestions available at the moment.</p>";
  }
}

async function generateLetter() {
  const name = document.getElementById("partner").value;
  const letterBox = document.getElementById("letter-output");
  if (!name) {
    letterBox.classList.remove("hidden");
    letterBox.innerText = "Please enter your partner's name! 💌";
    return;
  }

  letterBox.innerText = "Writing a beautiful letter... ✍️";
  letterBox.classList.remove("hidden");

  try {
      // Call Backend API
      const response = await fetch('http://localhost:5000/api/generate-letter', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ partner: name })
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      letterBox.innerText = data.letter;

      // Show Share Button
      document.getElementById("share-letter-btn").classList.remove("hidden");
  } catch (error) {
      console.error("Error:", error);
      // Fallback to local logic
      generateLetterLocal(name, letterBox);
  }
}

function generateLetterLocal(name, letterBox) {
    const templates = CONFIG.letterTemplates;
    let template = templates[Math.floor(Math.random() * templates.length)];
    letterBox.innerText = template.replace("{name}", name);
    // Show Share Button
    document.getElementById("share-letter-btn").classList.remove("hidden");
}

function shareLetter() {
  const letterText = document.getElementById("letter-output").innerText;
  if (!letterText) return;
  const text = CONFIG.sharing.letter.replace("{letter}", letterText);
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

function toggleMission(element) {
  element.classList.toggle("completed"); // Fixed class name to match CSS
  if (element.classList.contains("completed")) {
    alert("Thank you for spreading love! 💖");
  }
}

function buyTemplate() {
  const phone = CONFIG.sales.whatsappNumber;
  const message = CONFIG.sales.message;
  if (!phone) {
    alert("Please contact the developer directly!");
    return;
  }
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function startBackgroundHearts() {
  const container = document.getElementById("bg-hearts");
  if (!container) return;
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("bg-heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 5 + 5 + "s";
    heart.style.fontSize = Math.random() * 1.5 + 0.5 + "rem";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 1000);
} 
