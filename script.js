
/* ========================================
   Application Pages & Content
   ======================================== */

const pages = {
  welcome: {
    title: 'Welcome!',
    status: '4 shortcuts · take a look around',
    html: `
      <p class="eyebrow">WELCOME TO MY CORNER OF THE INTERNET</p>

      <h1 class="content-title">
        Hi, I'm Chris! <span aria-hidden="true">✳</span>
      </h1>

      <p class="content-description">
        I like making things, figuring out how things work, and
        following interesting ideas wherever they lead.
      </p>

      <p class="content-description">
        I've put together this little desktop to share a bit about
        who I am, something I've learned along the way, and why
        I'm interested in Just Ventures.
      </p>

      <p class="content-description">
        Feel free to click around!
      </p>

      <div class="window-actions">
        <button
          type="button"
          class="ui-button"
          data-navigate="about"
        >
          MEET CHRIS →
        </button>

        <button
          type="button"
          class="ui-button ui-button--alt"
          data-navigate="learned"
        >
          EXPLORE MORE ↗
        </button>
      </div>
    `
  },

  about: {
    title: 'About Me',
    status: 'about_me.txt',
    html: `
      <p class="eyebrow">01 / WHO I AM</p>

      <h1 class="content-title">
        A maker at heart.
      </h1>

      <p class="content-description">
        If there's one thing that ties my interests together,
        it's that I love making things.
      </p>

      <p class="content-description">
        I've always enjoyed taking an idea and figuring out how
        to make it work. Whether I'm programming, experimenting
        with music, or exploring some new creative project, I
        find satisfaction in working through the challenges
        that come with bringing something to life.
      </p>

      <p class="content-description">
        I'm naturally curious, and I tend to follow that
        curiosity wherever it leads. Sometimes that means
        picking up a new skill, experimenting with unfamiliar
        tools, or spending far too much time figuring out
        a problem simply because I want to understand it.
      </p>

      <p class="content-description">
        For me, the process of creating something is often
        just as rewarding as the result. I suppose that's
        why I think of myself as a maker at heart.
      </p>

      <div class="window-actions">
        <button
          type="button"
          class="ui-button"
          data-navigate="learned"
        >
          WHAT I LEARNED →
        </button>
      </div>
    `
  },

  learned: {
    title: 'What I Learned',
    status: 'what_i_learned.txt · draft',
    html: `
      <p class="eyebrow">02 / SOMETHING I TAUGHT MYSELF</p>

      <h1 class="content-title">
        Learning by Making
      </h1>

      <p class="content-description">
        One thing I've discovered about myself is that I
        learn best when I have something concrete to work
        toward.
      </p>

      <p class="content-description">
        I've found that the prospect of making something
        interesting can motivate me to explore subjects I
        might otherwise never have considered. An idea
        becomes a reason to pick up a new skill, experiment
        with unfamiliar tools, or work through a problem
        that initially seems beyond my abilities.
      </p>

      
      <p class="content-description">
        I've always had a love of video games. I have fond memories of
        the era of pixel graphics and low-poly models, and some of my
        favorite games still share that aesthetic.
      </p>

      <p class="content-description">
        I've long dreamed of making my own video games, so I decided
        to teach myself the skills needed to bring those retro styles
        into my own projects. I searched for tutorials, researched
        different software, and experimented with techniques to create
        something polished that reflected my creative vision.
      </p>

      <p class="content-description">
        Along the way, I discovered just how much artistry goes into
        making something appear simple. What started as a practical
        step toward making my own games became something I enjoyed
        for its own sake. Learning pixel art and low-poly modeling
        has given me a newfound appreciation for the work behind
        the games I love, as well as two new creative outlets to explore.
      </p>

      <p class="content-description">
        That experience reinforced something important
        about how I approach challenges: I don't necessarily
        need to know how to do something before I decide
        it's worth trying. Sometimes the desire to make
        something is enough to get me started.
      </p>

      <div class="window-actions">
        <button
          type="button"
          class="ui-button"
          data-navigate="why"
        >
          WHY JUST VENTURES? →
        </button>
      </div>
    `
  },

  why: {
    title: 'Why Just Ventures',
    status: 'why_just_ventures.txt · draft',
    html: `
      <p class="eyebrow">03 / WHY I'M APPLYING</p>

      <h1 class="content-title">
        Why Just Ventures?
      </h1>
     
      <p class="content-description">
        I've become increasingly frustrated with the modern tech job market.
        Despite having skills I'm confident in and a genuine desire to
        contribute, I've struggled to find opportunities where I can
        demonstrate what I'm capable of. The hiring process often feels
        impersonal, with applications reduced to keywords, automated
        screenings, and checklists of specific technologies or years
        of experience.
      </p>

      <p class="content-description">
        I understand why employers look for particular qualifications,
        but I don't believe those requirements always capture someone's
        potential. I'm confident in my ability to learn, adapt, and grow
        into a role, even when I don't already have experience with every
        tool or framework involved. I just want the opportunity to
        demonstrate that through my work.
      </p>

      <p class="content-description">
        That's what makes Just Ventures so appealing to me. Rather than
        asking for another résumé or list of technical qualifications,
        it invites me to show who I am and what I can create. I find
        that approach refreshing because it aligns with how I believe
        people should be given opportunities to demonstrate their potential.
      </p>

      <p class="content-description">
        I also believe I could bring a distinct creative perspective to
        the fellowship. I see a lot of projects built primarily to check
        a box or pad a résumé, but that's never been what motivates me.
        I'm interested in making things that people genuinely want to use,
        find interesting, or simply get a little joy out of. I want the
        things I create to have some meaning beyond demonstrating that
        I know how to use a particular technology.
      </p>

      <p class="content-description">
        Ultimately, I hope Just Ventures can provide an avenue to
        demonstrate what I'm capable of, connect with people who
        appreciate that approach to creating things, and turn those
        opportunities into a fulfilling, sustainable career. More than
        anything, I'm looking for a chance to show what I can do when
        I'm given the freedom to make something worthwhile.
      </p>


      <div class="window-actions">
        <button
          type="button"
          class="ui-button ui-button--alt"
          data-navigate="welcome"
        >
          BACK TO WELCOME ↩
        </button>
      </div>
    `
  }
};


/* ========================================
   DOM References
   ======================================== */

const windowEl = document.getElementById('app-window');
const contentEl = document.getElementById('window-content');
const titleEl = document.getElementById('window-title');
const statusEl = document.getElementById('window-status');
const taskTab = document.getElementById('task-tab');
const taskTitle = document.getElementById('task-title');

const shortcuts = [
  ...document.querySelectorAll('[data-open]')
];

let activePage = null;


/* ========================================
   Window Management
   ======================================== */

function openPage(id, focusWindow = true) {
  const page = pages[id];

  if (!page) return;

  activePage = id;

  // Update window information and content.
  titleEl.textContent = page.title;
  statusEl.textContent = page.status;
  contentEl.innerHTML = page.html;

  // Display the window and its taskbar tab.
  windowEl.hidden = false;
  taskTab.hidden = false;
  taskTitle.textContent = page.title;

  // Update the selected desktop shortcut.
  shortcuts.forEach(button => {
    const selected = button.dataset.open === id;

    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });

  // Reset the scroll position when switching pages.
  windowEl.querySelector('.window-panel').scrollTop = 0;

  // Move keyboard focus into the active window.
  if (focusWindow) {
    windowEl.focus({ preventScroll: true });
  }
}

function closePage() {
  activePage = null;

  // Hide the window and taskbar tab.
  windowEl.hidden = true;
  taskTab.hidden = true;

  // Clear shortcut selection.
  shortcuts.forEach(button => {
    button.classList.remove('selected');
    button.setAttribute('aria-pressed', 'false');
  });

  // Return keyboard focus to the welcome shortcut.
  document.querySelector('[data-open="welcome"]')
    .focus({ preventScroll: true });
}


/* ========================================
   Desktop Navigation
   ======================================== */

// Open windows using desktop shortcuts.
shortcuts.forEach(button => {
  button.addEventListener('click', () => {
    openPage(button.dataset.open);
  });
});

// Close the current window.
document.getElementById('close-window')
  .addEventListener('click', closePage);

// Start button returns to the welcome window.
document.getElementById('start-button')
  .addEventListener('click', () => {
    openPage('welcome');
  });

// Focus the current window through its taskbar tab.
taskTab.addEventListener('click', () => {
  if (activePage) {
    windowEl.focus({ preventScroll: true });
  }
});

// Handle navigation buttons inside window content.
contentEl.addEventListener('click', event => {
  const button = event.target.closest('[data-navigate]');

  if (button) {
    openPage(button.dataset.navigate);
  }
});

// Close the active window using Escape.
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activePage) {
    closePage();
  }
});


/* ========================================
   System Clock
   ======================================== */

function updateClock() {
  const clock = document.getElementById('clock');

  clock.textContent = new Intl.DateTimeFormat(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date());
}

// Initialize the clock and refresh every minute.
updateClock();
setInterval(updateClock, 60_000);


/* ========================================
   Initial Desktop State
   ======================================== */

// Open the welcome window when the page loads.
openPage('welcome', false);
