# Personal Portfolio Website

A one-page, fully responsive portfolio (mobile, tablet, laptop). It's plain HTML, CSS and JavaScript, with no build step and nothing to compile.

Sections, from top to bottom:

1. **Header**: a fixed, semi-transparent bar with your name and links to each section (on phones these move into a slide-in ☰ menu)
2. **About Me**: photo, your name under it, typed job titles, a short description, plus **Download CV** and **Contact Me** buttons
3. **Portfolio**: project cards with the filters **All / Personal Projects / Team Projects**. Tapping a card opens a pop-up with a video, photos and a description
4. **Experience**: **Professional** and **Education** tabs. Each item has a logo, title, date, a short description and **Responsibilities / Achievements** bullets
5. **Skills**: Software, Languages and Frameworks, and Skills
6. **Contact**: email, *Or*, a tap-to-call phone number, and GitHub / LinkedIn buttons
7. **Footer**

---

## 1. Requirements

You only need **one** of these:

| Option | What to install |
|---|---|
| A. Just look at it | Nothing. Double-click `index.html` |
| B. Local web server (recommended while editing) | [Python 3](https://www.python.org/downloads/) **or** [Node.js](https://nodejs.org/) |
| C. VS Code | The **Live Server** extension (auto-reloads when you save) |

All libraries (Bootstrap 5, Isotope, imagesLoaded, Font Awesome, and the Open Sans and Raleway fonts) are already included in the `vendor/` folder, so the site works offline.

---

## 2. Run the project

### Option A: open the file
Double-click `index.html`. Everything works this way, including the pop-ups.

### Option B: local web server (closest to the real website)
Open a terminal **in the project folder** and run one of:

```bash
# Python
python -m http.server 8000        # on some Macs/Linux: python3 -m http.server 8000

# or Node.js
npx serve .
```

Then open **http://localhost:8000** in your browser (`npx serve` prints its own address).
Stop the server with `Ctrl + C`.

### Option C: VS Code
Open the folder in VS Code, right-click `index.html`, then choose **Open with Live Server**.

### See how it looks on a phone
- **On your computer:** in Chrome press `F12`, click the phone/tablet icon (Toggle device toolbar), then pick e.g. *iPhone 12 Pro*.
- **On your real phone:** run Option B, make sure the phone is on the same Wi-Fi, find your computer's IP address (`ipconfig` on Windows, `ifconfig` / `ip a` on Mac/Linux), then open `http://YOUR-IP:8000` on the phone.

> After changing files, refresh the browser. If a change doesn't appear, do a hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

---

## 3. Project structure

```
portfolio/
├── index.html                 ← all page text (About, Experience, Skills, Contact)
├── css/style.css              ← design (colours at the very top)
├── js/
│   ├── projects.js            ← ✏️ YOUR PROJECTS (cards + pop-ups)
│   └── main.js                ← behaviour (no need to edit)
├── assets/cv/CV.pdf           ← ✏️ your CV
├── img/
│   ├── profile.jpg            ← ✏️ your photo
│   ├── favicon.png            ← ✏️ browser-tab icon (64×64)
│   ├── apple-touch-icon.png   ← ✏️ phone home-screen icon (180×180)
│   ├── og-image.jpg           ← ✏️ link-preview image (1200×630, optional)
│   ├── portfolio/project-1 … project-6/
│   │       ├── thumbnail.jpg  ← ✏️ card image
│   │       ├── video.mp4      ← ✏️ project video
│   │       └── gallery/1.jpg, 2.jpg, 3.jpg  ← ✏️ project photos
│   ├── experience/            ← ✏️ company / university logos
│   └── skills/                ← ✏️ software & language icons
└── vendor/                    ← libraries (don't edit)
```

Every place you need to change is marked in the code with **`✏️ EDIT`** (or `✏️ OPTIONAL`).
To find them all, search the project for `✏️` (in VS Code: `Ctrl + Shift + F`).

> **Tip:** to replace a placeholder image, save your file with **exactly the same name and location** (e.g. overwrite `img/profile.jpg`). Then you don't have to touch any code.
> If your file has a different name or extension (e.g. `.png`), update the path in the code too.
> File names are **case-sensitive** once online (`Photo.JPG` ≠ `photo.jpg`), so use lowercase names with no spaces.

---

## 4. Where to put your content (step by step)

### 4.1 Browser tab: name + photo
File: `index.html` (top, inside `<head>`)

| What | Where |
|---|---|
| Tab title | `<title>Negin Mashayekhi - Portfolio</title>` |
| Tab icon (your photo) | Replace `img/favicon.png` (64×64 px square crop of your photo) |
| Phone home-screen icon | Replace `img/apple-touch-icon.png` (180×180 px) |
| Google / share description | `<meta name="description" content="...">` |
| Link preview (optional) | `og:` lines: replace `https://your-domain.com/` with your real address once online; replace `img/og-image.jpg` |

> Make a favicon quickly: crop your photo to a square and resize it to 64×64 at https://www.iloveimg.com/resize-image (or any image editor).

### 4.2 Header bar
File: `index.html`, in the `Header` block. Change your name in `<h1><a href="#about" ...>Negin Mashayekhi</a></h1>`.
The menu links (About, Portfolio, Experience, Skills, Contact) already point to the right sections.

### 4.3 About Me
File: `index.html`, in the `About Me Section` block.

| What | How |
|---|---|
| Photo | Replace `img/profile.jpg`. Use a **square** image, at least 600×600 px. It's shown as a circle |
| Name under the photo | `<h1 class="about-name">Negin <span>Mashayekhi</span></h1>`. The `<span>` part is shown in the accent colour |
| Typed job titles | `data-roles="Data Analyst,Machine Learning Engineer,AI Engineer"`, comma-separated. Typing stops on the **last** one. Delete that `<p>` if you don't want it |
| Description | The three `<p>...</p>` paragraphs. Add or remove paragraphs freely. `<b>word</b>` = bold |
| **Download CV** | Put your PDF at **`assets/cv/CV.pdf`** (overwrite the placeholder). `download="Negin-Mashayekhi-CV.pdf"` is the file name visitors get |
| **Contact Me** | Already scrolls to the Contact section, so nothing to change |
| Extra buttons (optional) | GitHub / LinkedIn button templates are in a comment right below. Move them out of the comment to use them |

### 4.4 Portfolio (projects + pop-ups)
File: **`js/projects.js`**. The cards and pop-ups are built automatically from this list.

For each project:

1. Create a folder, e.g. `img/portfolio/my-chatbot/`, containing:
   - `thumbnail.jpg`: card image, **800×500 px** (16:10)
   - `video.mp4`: optional. Use **MP4 (H.264)**, ideally under ~20 MB
   - `gallery/1.jpg`, `gallery/2.jpg`, …: photos, **1280×720 px** (16:9) recommended
2. In `js/projects.js`, copy a whole `{ ... },` block and edit it:

```js
{
    id: "my-chatbot",                 // unique, no spaces
    category: "personal",             // "personal" → Personal Projects, "team" → Team Projects
    featured: true,                   // true = visible on "All" straight away
    title: "RAG Chatbot",
    subtitle: "Python · LangChain · FastAPI",
    thumbnail: "img/portfolio/my-chatbot/thumbnail.jpg",
    media: [                          // pop-up slider, in this order
        { type: "video",   src: "img/portfolio/my-chatbot/video.mp4" },
        { type: "youtube", id: "VIDEO_ID" },   // optional: YouTube instead of a file
        { type: "image",   src: "img/portfolio/my-chatbot/gallery/1.jpg" },
        { type: "image",   src: "img/portfolio/my-chatbot/gallery/2.jpg" }
    ],
    description: `
        <p><strong>One-line summary.</strong></p>
        <p>What it does, how you built it, results...</p>
        <ul><li>Bullet point</li></ul>
    `,
    links: [
        { label: "View code", url: "https://github.com/...", icon: "fa-brands fa-github" }
    ]
},
```

Notes:
- **All** shows Personal and Team projects together. Filtering and the hover animation happen automatically.
- `featured: false` hides a project on **All** behind the ⌄ "show more" arrow (it still appears under its own filter). The arrow only appears when at least one project has `featured: false`.
- YouTube: the `id` is the part after `v=` in `https://www.youtube.com/watch?v=VIDEO_ID`. Vimeo: `{ type: "vimeo", id: "123456789" }`.
- If the first media item is a local video, it plays automatically (muted) when the pop-up opens.
- `description` is HTML written between the back-ticks `` ` ` ``, so you can add `<h3>`, `<img src="...">`, lists and so on.
- Remove a project by deleting its whole block. Delete the unused placeholder folders `img/portfolio/project-*` when you're done.
- Watch the commas: each `{ ... }` block is followed by a comma, except the last one.

### 4.5 Experience
File: `index.html`, in the `Experience Section` block.

- **Professional** tab: inside `<div ... id="exp-professional">`
- **Education** tab: inside `<div ... id="exp-education">`

Each item is one block:

```html
<div class="experience-item">
    <div class="experience-image">
        <img src="img/experience/company.png" alt="Company logo">       <!-- logo -->
    </div>
    <div class="experience-description">
        <h4>Job Title / Company <span>City, Country</span></h4>          <!-- title -->
        <p class="experience-date"><i class="fa-regular fa-calendar time-icon"></i>Jan 2024 - Present</p>
        <p>Brief description.</p>
        <div class="experience-highlights">
            <h5>Responsibilities / Achievements</h5>
            <ul>
                <li>Bullet point 1</li>
                <li>Bullet point 2</li>
            </ul>
        </div>
    </div>
</div>
```

- Add an item by copying a whole block. Remove one by deleting its whole block.
- Add or remove bullets by adding or removing `<li>...</li>` lines.
- Logos go in `img/experience/`. A square PNG with a transparent background looks best (any size from 200 to 400 px).
- Optional award or grade line (Education): `<p class="experience-date"><i class="fa-solid fa-award time-icon"></i>Distinction</p>`

### 4.6 Skills
File: `index.html`, in the `Skills Section` block.

- **Software** and **Languages and Frameworks**: one line per tool:
  ```html
  <div class="tool-item"><div class="tool-image"><img src="img/skills/python.svg" alt=""></div><div class="tool-title">Python</div></div>
  ```
  Put the icons in `img/skills/` (SVG or PNG, square). Free icons are at **https://devicon.dev** (click an icon, then download the SVG). Prefer colourful versions, because black icons won't show on the dark background.
- **Skills**: one line per skill:
  ```html
  <div class="skill-item"><i class="fa-solid fa-brain"></i><span>Machine Learning</span></div>
  ```
  To change the icon, find a free icon at **https://fontawesome.com/search?ic=free**, click it, and copy its class (e.g. `fa-solid fa-robot`).

### 4.7 Contact
File: `index.html`, in the `Contact Section` block. Change each value in **both** places:

| What | Code |
|---|---|
| Email | `<a href="mailto:your.email@example.com">your.email@example.com</a>` |
| Phone (tap to call) | `<a href="tel:+447123456789">+44 7123 456789</a>`. In `tel:` use the country code and **no spaces** |
| GitHub | `href="https://github.com/ngnma"` |
| LinkedIn | `href="https://www.linkedin.com/in/..."` |
| Third button (optional) | Template in a comment below the LinkedIn button (e.g. Kaggle) |

### 4.8 Footer
File: `index.html`, in the `Footer` block. Change your name. The year updates automatically.

### 4.9 Colours (optional)
File: `css/style.css`, in the `:root { ... }` block at the top. For example, `--LinksColor` is the accent blue (links, underline, active tab and the coloured part of your name).

---

## 5. Placeholder checklist

- [ ] `img/profile.jpg`: your photo
- [ ] `img/favicon.png` + `img/apple-touch-icon.png`: small crops of your photo
- [ ] `assets/cv/CV.pdf`: your CV
- [ ] About Me paragraphs and typed job titles (`index.html`)
- [ ] `js/projects.js`: titles, subtitles, media, descriptions, links
- [ ] `img/portfolio/...`: thumbnails, videos, gallery photos (delete unused `project-*` folders)
- [ ] Experience: descriptions + Responsibilities / Achievements bullets
- [ ] `img/experience/...`: real logos
- [ ] Skills lists + icons
- [ ] Email and phone number (both places each)
- [ ] `<meta name="description">` and, once online, the `og:` URLs

When everything is confirmed, the next step is packaging the site as a Docker image.

---

## 6. Troubleshooting

| Problem | Fix |
|---|---|
| Change not showing | Hard refresh: `Ctrl + Shift + R` / `Cmd + Shift + R` |
| Image or video not showing | Check the path and file name exactly, including upper/lower case and the extension (`.jpg` vs `.jpeg` vs `.png`) |
| Portfolio section empty | A typo in `js/projects.js` (often a missing comma or back-tick). Press `F12`, then **Console**, to see the line with the error |
| Video doesn't play on iPhone | Convert it to MP4 (H.264): e.g. with [HandBrake](https://handbrake.fr/), preset *Fast 1080p30* |
| CV opens instead of downloading | Some browsers do this when the site is opened as a file. It downloads normally when served (Option B or online) |

---

## Credits

The design is inspired by [franciscomurias.github.io](https://franciscomurias.github.io/).
Libraries: Bootstrap 5 (MIT), Isotope (GPLv3, free for personal and open-source sites), imagesLoaded (MIT), Font Awesome Free (icons CC BY 4.0, fonts OFL), Open Sans and Raleway (OFL), Devicon (MIT).
