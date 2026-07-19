# আপনার Portfolio — পরবর্তী কী করবেন (Step by Step)

Congrats! আপনার একটা master-class level portfolio website রেডি। এখানে দেখুন এতে কী কী আছে এবং deploy করার আগে কী কী change করতে হবে।

## 📁 Folder এ যা যা আছে
```
portfolio/
├── index.html      → পুরো ওয়েবসাইটের structure
├── style.css        → সব ডিজাইন, রং, animation
├── script.js         → interactivity (nav, tilt card, counters, form)
└── assets/
    └── resume.pdf   → এখানে আপনার আসল CV/Resume রাখবেন
```

শুধু 3 টা file — কোনো build tool, npm, বা framework লাগবে না। যেকোনো browser এ `index.html` double-click করলেই খুলে যাবে।

---

## ✅ Step 1: নিজের তথ্য দিয়ে replace করুন

`index.html` file টা text editor এ (VS Code recommended) খুলুন এবং এই জায়গাগুলো বদলান:

- **নাম ও role**: "Rafiq Hasan" যেখানে যেখানে আছে (title tag, hero section, ID card, footer) — আপনার নাম দিয়ে বদলে দিন
- **About section**: নিজের real story, education, interest লিখুন
- **Skills section**: `style="--val:88%"` — এই percentage গুলো নিজের real skill level অনুযায়ী বদলান (0% থেকে 100%)
- **Projects section**: নিজের আসল project এর নাম, description, এবং `href="#"` এর জায়গায় GitHub/live demo link দিন
- **Blog section**: যদি blog না লেখেন, তাহলে এই section পুরোটা delete করে দিতে পারেন, অথবা রেখে দিন future এর জন্য
- **Contact section**: email, GitHub, LinkedIn link গুলো নিজের দিয়ে বদলান

💡 Tip: Ctrl+F (Find) দিয়ে "Rafiq Hasan" search করলে সব জায়গা এক সাথে খুঁজে পাবেন।

---

## ✅ Step 2: Resume/CV যোগ করুন

আপনার resume PDF টার নাম দিন `resume.pdf` এবং `assets/` folder এ রেখে দিন। Navbar এর "Resume" button এই file টাই automatically download করবে।

---

## ✅ Step 3: Contact Form কাজ করানো (Backend ছাড়াই)

এখন contact form টা শুধু demo — কোনো email পাঠায় না। এটা free এ কাজ করানোর 2 টা সহজ উপায়:

**Option A — Formsubmit.co (সবচেয়ে সহজ)**
`index.html` এ `<form class="contact-form" id="contactForm">` লাইনটা বদলে করুন:
```html
<form class="contact-form" id="contactForm" action="https://formsubmit.co/apnar-email@gmail.com" method="POST">
```
এবং `script.js` থেকে form এর `submit` event listener টা remove করে দিন (নাহলে page reload হবে না)।

**Option B — EmailJS**
[emailjs.com](https://www.emailjs.com) এ free account বানিয়ে তাদের JS snippet `script.js` এ যোগ করুন। এটাতে বেশি customization পাবেন।

---

## ✅ Step 4: Website Live করুন (Free Hosting)

সবচেয়ে সহজ ৩টা option:

1. **GitHub Pages** (সবচেয়ে popular, developer-দের জন্য ভালো)
   - GitHub এ নতুন repository বানান
   - সব file upload করুন
   - Settings → Pages → branch select করে "Save" চাপুন
   - কয়েক মিনিটে `https://yourusername.github.io/repo-name` এ live হয়ে যাবে

2. **Netlify** (সবচেয়ে দ্রুত, drag-and-drop)
   - [netlify.com](https://netlify.com) এ account খুলুন
   - পুরো `portfolio` folder টা drag করে drop করুন
   - সাথে সাথে live link পেয়ে যাবেন

3. **Vercel** — Netlify এর মতোই, GitHub এর সাথে ভালো integrate হয়

---

## ✅ Step 5: (Optional) Custom Domain

আপনার নাম দিয়ে একটা domain কিনলে (যেমন `rafiqhasan.com`) সেটা Netlify/Vercel/GitHub Pages এর সাথে connect করা যায় — এদের নিজেদের documentation এ ধাপে ধাপে দেওয়া আছে।

---

## ✅ Step 6: SEO ও Favicon (Polish করার জন্য)

- `<head>` এ একটা `<link rel="icon" href="...">` যোগ করে নিজের favicon (ছোট logo icon) সেট করুন
- `<meta name="description">` ট্যাগটা আরও specific করে লিখুন — এটা Google search এ preview হিসেবে দেখা যায়
- Open Graph tags (`og:title`, `og:image`) যোগ করলে social media তে link share করলে সুন্দর preview দেখাবে

---

## 🎨 Design এর কিছু কথা

- **Theme**: Dark glassmorphism — violet (#7C6FFF) ও cyan (#4EE1D6) gradient signature হিসেবে
- **Signature element**: Hero section এর tilting glass ID card — mouse move করলে card টা 3D effect এ tilt করে
- **Fonts**: Sora (headings), Inter (body text), JetBrains Mono (tags/labels)
- সব রং `style.css` এর একদম উপরে `:root { }` এ variable আকারে আছে — সেখান থেকে পুরো site এর color scheme এক জায়গা থেকেই বদলাতে পারবেন

কোনো অংশ বদলাতে বা নতুন feature (যেমন dark/light toggle, multi-language, আরও project) যোগ করতে সাহায্য লাগলে বলবেন!
