# 🚀 Data Analyst Portfolio & Enterprise Case Study Hub
**Md. Rafijur Rahman** | [LinkedIn](https://www.linkedin.com/in/mdrafijur) • [GitHub](https://github.com/rafijurrahman)

A high-performance, modular portfolio and case study hub built for enterprise business intelligence, production SQL architectures, and Power BI interactive decision models.

---

## 📁 Repository Structure

```
portfolio/
├── index.html                   # Main homepage (Hero, Stats, Featured Projects, Skills, Experience, Netlify Form)
├── projects.js                  # Data-driven project catalogue & filter engine
├── projects/
│   ├── krishigrid.html          # Deep-dive Enterprise Case Study: KrishiGrid Bangladesh
│   └── case-study-template.html # Reusable Master Template for all future case studies
└── README.md                    # Setup and workflow documentation
```

---

## ⚡ How to Preview Locally (Right Now)

You don't need any complex frameworks or Node.js.
* Simply double-click `index.html` in Windows Explorer to open it in your browser (Brave, Chrome, Edge).
* Or in PowerShell/Terminal:
  ```powershell
  python -m http.server 3000
  ```
  Then visit `http://localhost:3000`.

---

## 🌐 How to Deploy to Netlify (100% Free Forever)

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new).
2. Repository name: `portfolio` (or `rafijur-portfolio`).
3. Set to **Public** and click **Create repository**.
4. In this folder, initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Production Portfolio & KrishiGrid Case Study"
   git branch -M main
   git remote add origin https://github.com/rafijurrahman/portfolio.git
   git push -u origin main
   ```

### Step 2: Connect to Netlify
1. Log in to [netlify.com](https://www.netlify.com/) (Sign in with your GitHub account).
2. Click **"Add new site"** ➔ **"Import an existing project"** ➔ Choose **GitHub**.
3. Select your `portfolio` repository.
4. Leave build settings default (Publish directory: `.` or blank).
5. Click **"Deploy site"**!

Your site will be live in 10 seconds at:  
👉 `https://rafijur-analytics.netlify.app` (You can customize this subdomain for free under *Site configuration* ➔ *Change site name*).

---

## 🔄 How to Add a Future Project in 3 Minutes

Whenever you complete a new project (e.g., *Retail Analytics*, *Hospital Operations*, or a *Power BI Finance Dashboard*):

1. **Duplicate the Template:**
   Copy `projects/case-study-template.html` and rename it to your project name, e.g.:  
   `projects/retail-analytics.html`
2. **Fill in Your Project Details:**
   Open that file and add your Business Problem, Raw vs Cleaned Data tables, SQL/DAX code, and Executive Insights.
3. **Add Entry to `projects.js`:**
   Add one object in the `PROJECTS_DATA` array:
   ```javascript
   {
     id: "retail-analytics",
     title: "Retail Revenue Leakage & Churn Analytics",
     category: "SQL & Data Modeling",
     badge: "Production SQL",
     featured: true,
     summary: "Identified $142K in dormant revenue through multi-stage CTEs and anti-join logic.",
     impactMetrics: [
       { label: "Revenue Leakage", value: "$142K" },
       { label: "Cancellation Rate", value: "Fixed 14.2%" },
       { label: "Query Speed", value: "3.2x" }
     ],
     techStack: ["SQL", "CTEs", "Window Functions", "Data Modeling"],
     caseStudyUrl: "projects/retail-analytics.html",
     githubUrl: "https://github.com/rafijurrahman",
     liveDemoUrl: null,
     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
   }
   ```
4. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Added Retail Analytics Case Study"
   git push
   ```
   **Netlify automatically updates your live website in seconds!**
