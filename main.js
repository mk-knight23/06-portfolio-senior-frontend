/**
 * Senior Frontend Architect Portfolio
 * Swiss Minimal Design System
 *
 * Features:
 * - Mobile navigation toggle
 * - Project filtering
 * - Smooth scroll
 * - Intersection Observer for animations
 * - Reduced motion support
 */

// ========================================
// PROJECTS DATA (All 60 Projects)
// ========================================
const projectsData = [
  // Portfolios (01-08)
  { id: '01', name: 'portfolio-devtools', category: 'portfolios', displayName: 'DevTools Portfolio', description: 'Terminal-inspired developer portfolio' },
  { id: '02', name: 'portfolio-fullstack', category: 'portfolios', displayName: 'Fullstack Portfolio', description: 'Product-led SaaS showcase' },
  { id: '03', name: 'portfolio-frontend', category: 'portfolios', displayName: 'Frontend Portfolio', description: 'Motion-first visual portfolio' },
  { id: '04', name: 'portfolio-backend', category: 'portfolios', displayName: 'Backend Portfolio', description: 'Editorial text-focused portfolio' },
  { id: '05', name: 'portfolio-frontend-ai', category: 'portfolios', displayName: 'Frontend AI Portfolio', description: 'AI Lab futuristic aesthetic' },
  { id: '06', name: 'portfolio-senior-frontend', category: 'portfolios', displayName: 'Senior Frontend Portfolio', description: 'Swiss Minimal design system' },
  { id: '07', name: 'portfolio-indie-saas', category: 'portfolios', displayName: 'Indie SaaS Portfolio', description: 'Indie hacker authentic style' },
  { id: '08', name: 'portfolio-ai-automation', category: 'portfolios', displayName: 'AI Automation Portfolio', description: 'Systems flow-based design' },

  // Web Apps (09-24)
  { id: '09', name: 'web-geographic-explorer', category: 'web', displayName: 'Geographic Explorer', description: 'Interactive country data explorer' },
  { id: '10', name: 'web-time-display', category: 'web', displayName: 'Time Display', description: 'World clock and time utilities' },
  { id: '11', name: 'web-keyboard-practice', category: 'web', displayName: 'Keyboard Practice', description: 'Typing speed and accuracy trainer' },
  { id: '12', name: 'web-editorial-blog', category: 'web', displayName: 'Editorial Blog', description: 'Typography-first blog platform' },
  { id: '13', name: 'web-brutalist-content', category: 'web', displayName: 'Brutalist Content', description: 'Raw web aesthetic exploration' },
  { id: '14', name: 'web-ai-research', category: 'web', displayName: 'AI Research', description: 'AI research and documentation hub' },
  { id: '15', name: 'web-luxury-boutique', category: 'web', displayName: 'Luxury Boutique', description: 'High-end e-commerce experience' },
  { id: '16', name: 'web-editorial-layouts', category: 'web', displayName: 'Editorial Layouts', description: 'CSS Grid layout experiments' },
  { id: '17', name: 'web-culinary-discovery', category: 'web', displayName: 'Culinary Discovery', description: 'Recipe and cuisine explorer' },
  { id: '18', name: 'web-atmospheric-dashboard', category: 'web', displayName: 'Atmospheric Dashboard', description: 'Weather and environment data' },
  { id: '19', name: 'web-viral-creator', category: 'web', displayName: 'Viral Creator', description: 'Content creation and sharing platform' },
  { id: '20', name: 'web-career-navigator', category: 'web', displayName: 'Career Navigator', description: 'Job search and career tools' },
  { id: '21', name: 'web-enterprise-input', category: 'web', displayName: 'Enterprise Input', description: 'Enterprise form and data entry' },
  { id: '22', name: 'web-professional-showcase', category: 'web', displayName: 'Professional Showcase', description: 'Corporate portfolio template' },
  { id: '23', name: 'web-financial-printing', category: 'web', displayName: 'Financial Printing', description: 'Financial document generator' },
  { id: '24', name: 'web-sketch-studio', category: 'web', displayName: 'Sketch Studio', description: 'Digital drawing and sketching tool' },

  // Games (25-34)
  { id: '25', name: 'game-neon-highway', category: 'games', displayName: 'Neon Highway', description: 'Retro arcade racing game' },
  { id: '26', name: 'game-retro-vault', category: 'games', displayName: 'Retro Vault', description: 'Classic game collection' },
  { id: '27', name: 'game-world-net', category: 'games', displayName: 'World Net', description: 'Global strategy game' },
  { id: '28', name: 'game-squid-net', category: 'games', displayName: 'Squid Net', description: 'Survival challenge game' },
  { id: '29', name: 'game-snake-net', category: 'games', displayName: 'Snake Net', description: 'Modern snake game' },
  { id: '30', name: 'game-dragon-surge', category: 'games', displayName: 'Dragon Surge', description: 'Fantasy action RPG' },
  { id: '31', name: 'game-maze-net', category: 'games', displayName: 'Maze Net', description: 'Procedural maze generator' },
  { id: '32', name: 'game-flux-arcade', category: 'games', displayName: 'Flux Arcade', description: 'Multi-game arcade platform' },
  { id: '33', name: 'game-aptitude-nexus', category: 'games', displayName: 'Aptitude Nexus', description: 'Brain training and puzzles' },
  { id: '34', name: 'game-sigma-nexus', category: 'games', displayName: 'Sigma Nexus', description: 'Sci-fi strategy game' },

  // Tools (35-44)
  { id: '35', name: 'tool-quizflow-pdf-quiz-generator', category: 'tools', displayName: 'QuizFlow PDF', description: 'PDF quiz generator from documents' },
  { id: '36', name: 'tool-vaultpass-secure-password-generator', category: 'tools', displayName: 'VaultPass', description: 'Secure password generator' },
  { id: '37', name: 'tool-text-to-speech', category: 'tools', displayName: 'Text to Speech', description: 'TTS conversion utility' },
  { id: '38', name: 'tool-firebase-file-uploader', category: 'tools', displayName: 'Firebase File Uploader', description: 'Cloud file upload manager' },
  { id: '39', name: 'tool-firebase-image-uploader', category: 'tools', displayName: 'Firebase Image Uploader', description: 'Image upload and optimization' },
  { id: '40', name: 'tool-react-image-uploader', category: 'tools', displayName: 'React Image Uploader', description: 'React-based image handling' },
  { id: '41', name: 'tool-firebase-auth', category: 'tools', displayName: 'Firebase Auth', description: 'Authentication system' },
  { id: '42', name: 'tool-facebook-login-ui', category: 'tools', displayName: 'Facebook Login UI', description: 'Social login interface' },
  { id: '43', name: 'tool-agency-website-clone', category: 'tools', displayName: 'Agency Clone', description: 'Website cloning utility' },
  { id: '44', name: 'tool-github-desktop-guide', category: 'tools', displayName: 'GitHub Desktop Guide', description: 'Git workflow tutorial' },

  // Starters (45-60)
  { id: '45', name: 'starter-react-vercel', category: 'starters', displayName: 'React Vercel', description: 'React deployment template' },
  { id: '46', name: 'starter-ionic-react', category: 'starters', displayName: 'Ionic React', description: 'Mobile app starter' },
  { id: '47', name: 'starter-django', category: 'starters', displayName: 'Django Starter', description: 'Python Django template' },
  { id: '48', name: 'starter-flask', category: 'starters', displayName: 'Flask Starter', description: 'Python Flask template' },
  { id: '49', name: 'starter-jamstack-blog', category: 'starters', displayName: 'JAMstack Blog', description: 'Static blog starter' },
  { id: '50', name: 'starter-react-boilerplate', category: 'starters', displayName: 'React Boilerplate', description: 'React project scaffold' },
  { id: '51', name: 'starter-codesandbox', category: 'starters', displayName: 'CodeSandbox', description: 'Online IDE template' },
  { id: '52', name: 'starter-hugo-blog', category: 'starters', displayName: 'Hugo Blog', description: 'Hugo static site starter' },
  { id: '53', name: 'starter-docusaurus-docs', category: 'starters', displayName: 'Docusaurus Docs', description: 'Documentation site template' },
  { id: '54', name: 'starter-gatsby-blog', category: 'starters', displayName: 'Gatsby Blog', description: 'Gatsby blog starter' },
  { id: '55', name: 'starter-angular-web', category: 'starters', displayName: 'Angular Web', description: 'Angular application starter' },
  { id: '56', name: 'starter-electron-desktop', category: 'starters', displayName: 'Electron Desktop', description: 'Desktop app template' },
  { id: '57', name: 'starter-python-practice', category: 'starters', displayName: 'Python Practice', description: 'Python learning exercises' },
  { id: '58', name: 'starter-python-examples', category: 'starters', displayName: 'Python Examples', description: 'Python code samples' },
  { id: '59', name: 'starter-repo-demo', category: 'starters', displayName: 'Repo Demo', description: 'Repository demonstration' },
  { id: '60', name: 'starter-cadwork-internship', category: 'starters', displayName: 'CADWork Internship', description: 'Internship project template' }
];

// ========================================
// DOM ELEMENTS
// ========================================
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const projectsGrid = document.getElementById('projects-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// ========================================
// MOBILE NAVIGATION
// ========================================
function initMobileNav() {
  if (!navToggle || !navMenu) return;

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);

    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  // Close menu on link click
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      const spans = navToggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    });
  });
}

// ========================================
// PROJECTS RENDERING
// ========================================
function createProjectCard(project) {
  const categoryLabels = {
    portfolios: 'Portfolio',
    web: 'Web App',
    games: 'Game',
    tools: 'Tool',
    starters: 'Starter'
  };

  const card = document.createElement('article');
  card.className = 'project-card';
  card.setAttribute('data-category', project.category);

  card.innerHTML = `
    <div class="project-card-header">
      <span class="project-number">${project.id}</span>
      <span class="project-category">${categoryLabels[project.category]}</span>
    </div>
    <h3 class="project-title">${project.displayName}</h3>
    <p class="project-description">${project.description}</p>
    <a href="https://github.com/mk-knight23/${project.name}" class="project-link" target="_blank" rel="noopener">
      View on GitHub →
    </a>
  `;

  return card;
}

function renderProjects(filter = 'all') {
  if (!projectsGrid) return;

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  projectsGrid.innerHTML = '';

  // Use requestAnimationFrame for smooth rendering
  requestAnimationFrame(() => {
    const fragment = document.createDocumentFragment();
    filteredProjects.forEach(project => {
      fragment.appendChild(createProjectCard(project));
    });
    projectsGrid.appendChild(fragment);
  });
}

// ========================================
// PROJECT FILTERING
// ========================================
function initProjectFilters() {
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(btn => btn.classList.remove('filter-btn--active'));
      button.classList.add('filter-btn--active');

      // Filter projects
      const filter = button.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
}

// ========================================
// SMOOTH SCROLL
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);

      if (target) {
        const navHeight = nav?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// NAVIGATION SCROLL EFFECT
// ========================================
function initNavScroll() {
  if (!nav) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
          nav.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        } else {
          nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ========================================
// INTERSECTION OBSERVER (Reveal animations)
// ========================================
function initRevealAnimations() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe sections for reveal
  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
}

// ========================================
// ACTIVE NAV LINK
// ========================================
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollPos = window.pageYOffset + (nav?.offsetHeight || 0) + 100;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id');

          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
              link.classList.remove('nav-link--active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('nav-link--active');
              }
            });
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ========================================
// PERFORMANCE: Debounce utility
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// KEYBOARD NAVIGATION
// ========================================
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    // Escape to close mobile menu
    if (e.key === 'Escape' && navMenu?.classList.contains('is-open')) {
      navToggle.click();
    }
  });
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
  initMobileNav();
  initProjectFilters();
  initSmoothScroll();
  initNavScroll();
  initRevealAnimations();
  initActiveNavLink();
  initKeyboardNav();

  // Initial render of all projects
  renderProjects();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ========================================
// EXPOSE FOR TESTING
// ========================================
if (typeof window !== 'undefined') {
  window.Portfolio = {
    renderProjects,
    projectsData,
    init
  };
}
