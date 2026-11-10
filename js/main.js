/* =====================================================================
   Main site behaviour. You normally do NOT need to edit this file.
   - Projects (cards + pop-ups) are edited in js/projects.js
   - Text, links and images are edited in index.html
   ===================================================================== */
(function () {
    "use strict";

    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const header = $("#header");
    const HEADER_SCROLLED_HEIGHT = 70;

    /* ---------- Footer year ---------- */
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* ---------- Header background + back-to-top button on scroll ---------- */
    const backToTop = $(".back-to-top");
    function onScroll() {
        const y = window.scrollY;
        header.classList.toggle("header-scrolled", y > 100);
        backToTop.classList.toggle("visible", y > 100);
        updateActiveMenu();
    }

    /* ---------- Smooth scrolling (same easing as the original template) ---------- */
    function easeInOutExpo(t) {
        if (t === 0 || t === 1) return t;
        return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 : (2 - Math.pow(2, -20 * t + 10)) / 2;
    }
    let scrollAnim = null;
    function smoothScrollTo(targetY, duration = 1200) {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduce) { window.scrollTo(0, targetY); return; }
        const startY = window.scrollY;
        const diff = targetY - startY;
        const start = performance.now();
        if (scrollAnim) cancelAnimationFrame(scrollAnim);
        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            window.scrollTo(0, startY + diff * easeInOutExpo(t));
            if (t < 1) scrollAnim = requestAnimationFrame(step);
        };
        scrollAnim = requestAnimationFrame(step);
    }
    function scrollToSection(hash) {
        const target = hash && hash.length > 1 ? document.querySelector(hash) : null;
        if (!target) return false;
        const y = target.getBoundingClientRect().top + window.scrollY - HEADER_SCROLLED_HEIGHT;
        smoothScrollTo(Math.max(0, y));
        return true;
    }

    /* ---------- Mobile navigation (slide-in menu) ---------- */
    const navContainer = $("#nav-menu-container");
    const mobileNav = document.createElement("nav");
    mobileNav.id = "mobile-nav";
    mobileNav.setAttribute("aria-label", "Mobile");
    const navList = $(".nav-menu", navContainer).cloneNode(true);
    navList.className = "";
    mobileNav.appendChild(navList);
    document.body.appendChild(mobileNav);
    const overlay = document.createElement("div");
    overlay.id = "mobile-body-overly";
    document.body.appendChild(overlay);
    const toggleBtn = $("#mobile-nav-toggle");

    function setMobileNav(open) {
        document.body.classList.toggle("mobile-nav-active", open);
        toggleBtn.setAttribute("aria-expanded", open ? "true" : "false");
        toggleBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        const icon = $("i", toggleBtn);
        icon.classList.toggle("fa-bars", !open);
        icon.classList.toggle("fa-xmark", open);
    }
    toggleBtn.addEventListener("click", () => setMobileNav(!document.body.classList.contains("mobile-nav-active")));
    overlay.addEventListener("click", () => setMobileNav(false));
    window.addEventListener("resize", () => { if (window.innerWidth > 991) setMobileNav(false); });

    /* Links that scroll smoothly: menu links + anything with class "scrollto" */
    $$(".nav-menu a, #mobile-nav a, .scrollto").forEach((a) => {
        a.addEventListener("click", (e) => {
            const hash = a.getAttribute("href");
            if (hash && hash.startsWith("#") && scrollToSection(hash)) {
                e.preventDefault();
                setMobileNav(false);
                if (history.replaceState) history.replaceState(null, "", hash);
            }
        });
    });
    backToTop.addEventListener("click", (e) => { e.preventDefault(); smoothScrollTo(0); });

    /* Highlight the menu item of the section currently on screen */
    const sections = $$("main section[id]");
    function updateActiveMenu() {
        const pos = window.scrollY + HEADER_SCROLLED_HEIGHT + 40;
        let current = sections[0] ? sections[0].id : null;
        sections.forEach((s) => { if (s.offsetTop <= pos) current = s.id; });
        // at the very bottom of the page, highlight the last section
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4 && sections.length) {
            current = sections[sections.length - 1].id;
        }
        $$(".nav-menu li, #mobile-nav li").forEach((li) => {
            const a = $("a", li);
            li.classList.toggle("menu-active", !!a && a.getAttribute("href") === "#" + current);
        });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Typing effect under the name ---------- */
    const roleEl = $(".about-role");
    if (roleEl) {
        const roles = (roleEl.dataset.roles || "").split(",").map((s) => s.trim()).filter(Boolean);
        const out = $(".typed-text", roleEl);
        const cursor = $(".typed-cursor", roleEl);
        const TYPE_SPEED = 45, BACK_SPEED = 25, BACK_DELAY = 1100;
        let r = 0, i = 0;
        function type() {
            if (!roles.length) return;
            const word = roles[r];
            if (i < word.length) {
                out.textContent = word.slice(0, ++i);
                setTimeout(type, TYPE_SPEED);
            } else if (r < roles.length - 1) {
                setTimeout(erase, BACK_DELAY);
            } else {
                setTimeout(() => cursor.classList.add("done"), 1500); // stop on the last title
            }
        }
        function erase() {
            if (i > 0) {
                out.textContent = roles[r].slice(0, --i);
                setTimeout(erase, BACK_SPEED);
            } else {
                r++;
                setTimeout(type, 250);
            }
        }
        setTimeout(type, 500);
    }

    /* ---------- Fade-in-up animation when sections scroll into view ---------- */
    const revealEls = $$(".reveal");
    if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((en) => {
                if (en.isIntersecting) {
                    en.target.classList.add("revealed");
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
        revealEls.forEach((el) => io.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("revealed"));
    }

    /* =================================================================
       PORTFOLIO: cards, filters and pop-up
       ================================================================= */
    const projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : (typeof PROJECTS !== "undefined" ? PROJECTS : []);
    const gridEl = $("#portfolio-grid");

    projects.forEach((p) => {
        const item = document.createElement("div");
        item.className = "grid-item portfolio-item portfolio-" + (p.category === "team" ? "team" : "personal") +
            (p.featured === false ? "" : " portfolio-featured");

        const a = document.createElement("a");
        a.className = "portfolio-element";
        a.href = "#";
        a.setAttribute("role", "button");
        a.setAttribute("aria-label", "Open project: " + (p.title || ""));
        a.dataset.project = p.id;

        const img = document.createElement("img");
        img.src = p.thumbnail;
        img.alt = p.title || "";
        img.className = "img-fluid portfolio-thumb";
        img.loading = "lazy";

        const details = document.createElement("div");
        details.className = "details";
        const h3 = document.createElement("h3");
        h3.textContent = p.title || "";
        const sub = document.createElement("p");
        sub.textContent = p.subtitle || "";
        details.append(h3, sub);

        a.append(img, details);
        a.addEventListener("click", (e) => { e.preventDefault(); openProject(p.id); });
        item.appendChild(a);
        gridEl.appendChild(item);
    });

    const iso = new Isotope(gridEl, {
        itemSelector: ".grid-item",
        layoutMode: "fitRows",
        percentPosition: true,
        filter: ".portfolio-featured"
    });
    imagesLoaded(gridEl).on("progress", () => iso.layout());
    // re-layout once the section has faded in / fonts have loaded
    window.addEventListener("load", () => iso.layout());

    const filterBtns = $$("#portfolio .portfolio-filter");
    const moreBtn = $(".more-button");
    const hasHidden = projects.some((p) => p.featured === false);
    function updateMoreButton() {
        const allActive = $('.portfolio-filter[data-filter=".portfolio-featured"]').classList.contains("active");
        moreBtn.style.display = allActive && hasHidden ? "" : "none";
    }
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            if (!btn.classList.contains("more-button")) btn.classList.add("active");
            iso.arrange({ filter: btn.dataset.filter });
            updateMoreButton();
            btn.blur();
        });
    });
    updateMoreButton();

    /* ---------- Pop-up ---------- */
    const modalEl = $("#portfolioModal");
    const modalBody = $("#portfolioModalBody");
    const modal = new bootstrap.Modal(modalEl);

    function el(tag, attrs = {}, children = []) {
        const node = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => {
            if (v === undefined || v === null || v === false) return;
            if (k === "class") node.className = v;
            else if (k === "text") node.textContent = v;
            else node.setAttribute(k, v === true ? "" : v);
        });
        children.forEach((c) => c && node.appendChild(c));
        return node;
    }

    function mediaSlide(m, index) {
        const slide = el("div", { class: "carousel-item h-100 text-center" + (index === 0 ? " active" : "") });
        if (m.type === "video") {
            const v = el("video", { src: m.src, controls: true, loop: true, playsinline: true, preload: "metadata", poster: m.poster });
            v.muted = true;
            if (index === 0) v.autoplay = true;
            slide.appendChild(v);
        } else if (m.type === "youtube" || m.type === "vimeo") {
            const src = m.type === "youtube"
                ? "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(m.id) + "?rel=0&playsinline=1"
                : "https://player.vimeo.com/video/" + encodeURIComponent(m.id);
            const f = el("iframe", {
                src, title: "Video", frameborder: "0", allowfullscreen: true,
                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            });
            f.dataset.src = src;
            slide.appendChild(f);
        } else {
            slide.appendChild(el("img", { src: m.src, alt: m.alt || "" }));
        }
        return slide;
    }

    function mediaThumb(m, index, project) {
        let src = m.thumb;
        if (!src) {
            if (m.type === "image") src = m.src;
            else if (m.type === "youtube") src = "https://img.youtube.com/vi/" + encodeURIComponent(m.id) + "/mqdefault.jpg";
            else src = m.poster || project.thumbnail;
        }
        const li = el("button", {
            type: "button", class: "list-inline-item" + (index === 0 ? " active" : ""),
            "aria-label": "Show item " + (index + 1)
        }, [el("img", { src, alt: "", class: "img-fluid", loading: "lazy" })]);
        if (m.type !== "image") li.appendChild(el("i", { class: "fa-solid fa-play" }));
        return li;
    }

    function stopMedia(slide) {
        if (!slide) return;
        $$("video", slide).forEach((v) => v.pause());
        $$("iframe", slide).forEach((f) => { f.src = f.dataset.src; }); // reloading stops playback
    }

    function openProject(id) {
        const p = projects.find((x) => x.id === id);
        if (!p) return;
        modalBody.innerHTML = "";
        const media = Array.isArray(p.media) ? p.media : [];

        if (media.length) {
            const carouselId = "projectCarousel";
            const inner = el("div", { class: "carousel-inner h-100" });
            media.forEach((m, i) => inner.appendChild(mediaSlide(m, i)));
            const carousel = el("div", { id: carouselId, class: "carousel slide h-100" }, [inner]);
            if (media.length > 1) {
                carousel.appendChild(el("button", { class: "carousel-control-prev", type: "button", "data-bs-target": "#" + carouselId, "data-bs-slide": "prev", "aria-label": "Previous" },
                    [el("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" })]));
                carousel.appendChild(el("button", { class: "carousel-control-next", type: "button", "data-bs-target": "#" + carouselId, "data-bs-slide": "next", "aria-label": "Next" },
                    [el("span", { class: "carousel-control-next-icon", "aria-hidden": "true" })]));
            }
            modalBody.appendChild(el("div", { class: "carousel-wrapper" }, [carousel]));

            const instance = new bootstrap.Carousel(carousel, { interval: false, ride: false, touch: true, wrap: true });

            if (media.length > 1) {
                const thumbs = el("div", { class: "carousel-thumbs" });
                media.forEach((m, i) => {
                    const t = mediaThumb(m, i, p);
                    t.addEventListener("click", () => instance.to(i));
                    thumbs.appendChild(t);
                });
                modalBody.appendChild(thumbs);
                carousel.addEventListener("slide.bs.carousel", (e) => {
                    stopMedia(inner.children[e.from]);
                    $$(".list-inline-item", thumbs).forEach((t, i) => t.classList.toggle("active", i === e.to));
                    const activeThumb = thumbs.children[e.to];
                    if (activeThumb) {
                        thumbs.scrollTo({ left: activeThumb.offsetLeft - thumbs.clientWidth / 2 + activeThumb.clientWidth / 2, behavior: "smooth" });
                    }
                });
            }
        }

        // Title + description
        const body = el("div", { class: "page-body" }, [el("h1", { class: "page-title", text: p.title || "" })]);
        const desc = el("div", { class: "page-description" });
        desc.innerHTML = p.description || "";
        body.appendChild(desc);
        if (Array.isArray(p.links) && p.links.length) {
            const linkWrap = el("div", { class: "page-links" });
            p.links.forEach((l) => {
                const a = el("a", { href: l.url, target: "_blank", rel: "noopener", class: "btn btn-outline" },
                    [el("i", { class: l.icon || "fa-solid fa-arrow-up-right-from-square" })]);
                a.appendChild(document.createTextNode(" " + (l.label || "Link")));
                linkWrap.appendChild(a);
            });
            body.appendChild(linkWrap);
        }
        modalBody.appendChild(el("div", { class: "modal-details" }, [
            el("div", { class: "row g-0" }, [
                el("div", { class: "col-xl-6 offset-xl-3 col-lg-10 offset-lg-1 col-12" }, [body])
            ])
        ]));

        modal.show();
    }

    modalEl.addEventListener("shown.bs.modal", () => {
        $(".modal-content", modalEl).scrollTop = 0;
        const first = $(".carousel-item.active video", modalEl);
        if (first && first.autoplay) first.play().catch(() => {});
    });
    modalEl.addEventListener("hidden.bs.modal", () => { modalBody.innerHTML = ""; });
})();
