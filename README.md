Day Care — Childcare Website Template
A responsive, single-page website template for daycare and childcare centers. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.
Sections
Hero — headline, trust stats, and call-to-action buttons
Programs — feature cards (certified teachers, licensing & safety, curriculum, meals, creative arts)
Testimonials
Pricing — monthly/annual toggle
Contact — book-a-tour form
Footer
Tech stack
HTML5
CSS3 (custom properties, responsive grid/flexbox)
Vanilla JavaScript (mobile nav drawer, pricing toggle, form handling)
Google Fonts: Fraunces + Nunito
Inline SVG icons (no icon library needed)
Project structure
├── index.html      # All page content and sections
├── style.css       # All styling
├── main.js         # Mobile nav, pricing toggle, tour form
└── images/
    └── img1.jpg    # Hero image
Run locally
Open index.html in a browser, or serve the folder:
python -m http.server 8000
# then visit http://localhost:8000
Customizing for a client
Business name & copy — search index.html for "Mama's Day Care" and replace the name, stats, and program descriptions.
Images — swap the files in images/ (keep the filenames or update the src paths).
Colors & fonts — theme variables are at the top of style.css.
Pricing — edit the plans in the #pricing section of index.html.
Tour form — the form is currently front-end only (demo). To collect real bookings, point it at a form service such as Formspree or your own backend.
Deploying
Fully static site — deploys free on Vercel, Netlify, or GitHub Pages with no configuration.
