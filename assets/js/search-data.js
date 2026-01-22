// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Side projects and open source work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "16 years of software engineering experience across supply chain, media, fintech, and B2B marketplaces.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bjj-coaching",
          title: "bjj coaching",
          description: "Brazilian Jiu-Jitsu training and coaching",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bjj/";
          },
        },{id: "post-just-get-a-job",
        
          title: "Just Get a Job!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/just-get-a-job/";
          
        },
      },{id: "post-post-617149812603846656",
        
          title: "Post 617149812603846656",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/post-617149812603846656/";
          
        },
      },{id: "post-the-speed-curve",
        
          title: "The speed curve",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/the-speed-curve/";
          
        },
      },{id: "post-five-offboarding-tips",
        
          title: "Five Offboarding Tips",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/five-offboarding-tips/";
          
        },
      },{id: "post-proximity",
        
          title: "Proximity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/proximity/";
          
        },
      },{id: "post-learning-focus",
        
          title: "Learning Focus",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/learning-focus/";
          
        },
      },{id: "post-the-gaming-renaissance",
        
          title: "The Gaming Renaissance",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/the-gaming-renaissance/";
          
        },
      },{id: "post-intent",
        
          title: "Intent",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/intent/";
          
        },
      },{id: "post-creativity-and-tdd",
        
          title: "Creativity and TDD",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/creativity-and-tdd/";
          
        },
      },{id: "post-routine",
        
          title: "Routine",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/routine/";
          
        },
      },{id: "post-atmosphere",
        
          title: "Atmosphere",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/atmosphere/";
          
        },
      },{id: "post-simple-python-asyncio",
        
          title: "Simple Python Asyncio",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/simple-python-asyncio/";
          
        },
      },{id: "post-track-learning-in-your-git-commit-history",
        
          title: "Track Learning in your Git Commit History",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/track-learning-in-your-git-commit-history/";
          
        },
      },{id: "post-abstract-musings",
        
          title: "Abstract Musings",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/abstract-musings/";
          
        },
      },{id: "post-ego-and-stupidity",
        
          title: "Ego and Stupidity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/ego-and-stupidity/";
          
        },
      },{id: "post-js-speed-frustration",
        
          title: "JS Speed Frustration",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/js-speed-frustration/";
          
        },
      },{id: "post-cb3-131-galliumos-snags",
        
          title: "CB3-131 GalliumOS Snags",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/cb3-131-galliumos-snags/";
          
        },
      },{id: "post-when-the-post-its-don-t-move",
        
          title: "When the Post-Its don’t move",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/when-the-post-its-dont-move/";
          
        },
      },{id: "post-some-french-practice",
        
          title: "Some French Practice",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/some-french-practice/";
          
        },
      },{id: "post-when-defeat-still-feels-like-victory",
        
          title: "When Defeat Still Feels Like Victory",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/when-defeat-still-feels-like-victory/";
          
        },
      },{id: "post-goals-and-intentions",
        
          title: "Goals and Intentions",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/goals-and-intentions/";
          
        },
      },{id: "post-post-release-high",
        
          title: "Post-Release High",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/post-release-high/";
          
        },
      },{id: "post-release",
        
          title: "Release!",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/release/";
          
        },
      },{id: "post-un-usual-productivity",
        
          title: "(un)Usual Productivity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/unusual-productivity/";
          
        },
      },{id: "post-a-trick-for-resetting-productivity",
        
          title: "A Trick for Resetting Productivity",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/a-trick-for-resetting-productivity/";
          
        },
      },{id: "post-react-composition-coming-from-oo",
        
          title: "React Composition Coming From OO",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/react-composition-coming-from-oo/";
          
        },
      },{id: "post-moving-mail-in-office365-in-chromeos",
        
          title: "Moving mail in Office365 in ChromeOS",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/moving-mail-in-office365-in-chromeos/";
          
        },
      },{id: "post-evolution-of-a-simple-design",
        
          title: "Evolution of a Simple Design",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/evolution-of-a-simple-design/";
          
        },
      },{id: "post-minimalist-coding",
        
          title: "Minimalist Coding",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/minimalist-coding/";
          
        },
      },{id: "post-prolific-troubles",
        
          title: "Prolific Troubles",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/prolific-troubles/";
          
        },
      },{id: "post-tmux-is-great",
        
          title: "Tmux is Great",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2016/tmux-is-great/";
          
        },
      },{id: "post-don-t-break-lsp",
        
          title: "Don’t break LSP",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/dont-break-lsp/";
          
        },
      },{id: "post-js-prototypes",
        
          title: "Js Prototypes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/js-prototypes/";
          
        },
      },{id: "post-taking-notes",
        
          title: "Taking Notes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/taking-notes/";
          
        },
      },{id: "post-podcasts-and-progress",
        
          title: "Podcasts and Progress",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/podcasts-and-progress/";
          
        },
      },{id: "post-friction",
        
          title: "Friction",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/friction/";
          
        },
      },{id: "post-codeglance",
        
          title: "Codeglance",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/codeglance/";
          
        },
      },{id: "post-unconvincible",
        
          title: "Unconvincible",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/unconvincible/";
          
        },
      },{id: "post-a-great-oo-talk",
        
          title: "A Great OO Talk",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/a-great-oo-talk/";
          
        },
      },{id: "post-simple-programming-evolution",
        
          title: "Simple Programming Evolution",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/simple-programming-evolution/";
          
        },
      },{id: "post-refactoring-woes",
        
          title: "Refactoring Woes",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/refactoring-woes/";
          
        },
      },{id: "post-cursive",
        
          title: "Cursive",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/cursive/";
          
        },
      },{id: "post-integration-testing",
        
          title: "Integration Testing",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/integration-testing/";
          
        },
      },{id: "post-the-importance-of-obvious-code",
        
          title: "The Importance of Obvious Code",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/the-importance-of-obvious-code/";
          
        },
      },{id: "post-code-for-humans",
        
          title: "Code for Humans",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code-for-humans/";
          
        },
      },{id: "post-global-madness",
        
          title: "Global Madness",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/global-madness/";
          
        },
      },{id: "post-cleanup-anger",
        
          title: "Cleanup Anger",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/cleanup-anger/";
          
        },
      },{id: "post-dev-environments",
        
          title: "Dev Environments",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/dev-environments/";
          
        },
      },{id: "post-kanban",
        
          title: "Kanban",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/kanban/";
          
        },
      },{id: "projects-fiscal-calendar-generator",
          title: 'Fiscal Calendar Generator',
          description: "Generate fiscal year calendars",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fiscal-calendar-generator/";
            },},{id: "projects-skill-challenge-calculator",
          title: 'Skill Challenge Calculator',
          description: "Probability calculator for D&amp;D 5e/4e skill challenges",
          section: "Projects",handler: () => {
              window.location.href = "/projects/skill-challenge-calculator/";
            },},{id: "projects-twitter-cli",
          title: 'Twitter CLI',
          description: "Command-line interface for Twitter",
          section: "Projects",handler: () => {
              window.location.href = "/projects/twitter-cli/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Vasja_Volin_Resume.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%73%6A%61.%76%6F%6C%69%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/grobolom", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/grobolom", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
