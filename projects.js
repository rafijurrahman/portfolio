/**
 * Portfolio Projects Catalogue
 * =========================================================================
 * HOW TO ADD A NEW PROJECT IN THE FUTURE:
 * 1. Duplicate 'projects/case-study-template.html' and rename it (e.g. 'projects/retail-analytics.html').
 * 2. Fill in your project data, queries, and business report in that new HTML file.
 * 3. Add one new object entry below in this `PROJECTS_DATA` array.
 * 4. Commit & push to GitHub -> Netlify will auto-deploy in 10 seconds!
 * =========================================================================
 */

const PROJECTS_DATA = [
  {
    id: "krishigrid-bangladesh",
    title: "KrishiGrid: Agri-Supply Chain & Market Price Intelligence",
    category: "Power BI & DAX",
    badge: "Enterprise Case Study",
    featured: true,
    summary: "Built an end-to-end market intelligence pipeline tracking daily wholesale-to-retail food price spreads across 8 divisional hubs, uncovering 28% intermediary markup anomalies.",
    impactMetrics: [
      { label: "Price Anomaly Detection", value: "28% Markup" },
      { label: "Data Pipeline", value: "64 Districts" },
      { label: "Latency Reduction", value: "Automated ETL" }
    ],
    techStack: ["Power BI", "DAX", "Python", "ETL", "Statistical Modeling"],
    caseStudyUrl: "projects/krishigrid.html",
    githubUrl: "https://github.com/rafijurrahman/krishigrid-bangladesh",
    liveDemoUrl: "projects/krishigrid.html#dashboard",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "retail-revenue-leakage",
    title: "Retail Intelligence: Revenue Leakage & Churn Analytics",
    category: "SQL & Data Modeling",
    badge: "Production SQL",
    featured: true,
    summary: "Engineered multi-stage CTEs, Window Functions, and anti-join existence checks on a 4-table relational database to identify $142K in dormant customer revenue loss and fulfillment bottlenecks.",
    impactMetrics: [
      { label: "Dormant Revenue Detected", value: "$142,000" },
      { label: "Order Cancellation Rate", value: "14.2% Fixed" },
      { label: "Query Execution Optimization", value: "3.2x Faster" }
    ],
    techStack: ["SQL (SQLite/PostgreSQL)", "Window Functions", "CTEs", "Data Modeling", "Excel"],
    caseStudyUrl: "projects/case-study-template.html",
    githubUrl: "https://github.com/rafijurrahman",
    liveDemoUrl: null,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "healthcare-operational-reporting",
    title: "Clinical Operations & Patient Flow Analytics",
    category: "Business Intelligence",
    badge: "Real-World Experience",
    featured: true,
    summary: "Standardized 11 months of hospital patient logs, surgical scheduling, and billing records at Dr. Salim Akond Eye Hospital. Eliminated reporting discrepancies across 3 medical departments.",
    impactMetrics: [
      { label: "Audit Accuracy", value: "99.8%" },
      { label: "Reporting Turnaround", value: "Same-Day" },
      { label: "Operational Logs Handled", value: "11 Months" }
    ],
    techStack: ["Power BI", "Excel Advanced", "Data Validation", "Healthcare Metrics"],
    caseStudyUrl: "projects/case-study-template.html",
    githubUrl: "https://github.com/rafijurrahman",
    liveDemoUrl: null,
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "vantage-job-intel",
    title: "Vantage: Automated Job Market Intelligence Pipeline",
    category: "Python & Automation",
    badge: "Automation System",
    featured: false,
    summary: "Architected a local job market intelligence system with MS SQL Server backend, deduplication algorithms, and automated alerts to track market skill demand shifts in real-time.",
    impactMetrics: [
      { label: "Pipeline Status", value: "100% Automated" },
      { label: "Data Deduplication", value: "Real-Time" },
      { label: "Storage Engine", value: "MS SQL Server" }
    ],
    techStack: ["Python", "MS SQL Server", "APIs", "Automation", "Telegram Alerts"],
    caseStudyUrl: "projects/case-study-template.html",
    githubUrl: "https://github.com/rafijurrahman",
    liveDemoUrl: null,
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80"
  }
];

// Render Function for Homepage Project Grid
function renderProjects(filter = "All") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = filter === "All" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || (filter === "Featured" && p.featured));

  container.innerHTML = filtered.map(project => `
    <article class="group bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/30 flex flex-col justify-between">
      <div>
        <div class="relative h-48 w-full overflow-hidden bg-slate-950">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
              ${project.badge}
            </span>
          </div>
          <div class="absolute bottom-3 left-4 text-xs font-medium text-slate-400">
            ${project.category}
          </div>
        </div>

        <div class="p-6">
          <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2 mb-3">
            ${project.title}
          </h3>
          <p class="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
            ${project.summary}
          </p>

          <div class="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 text-center">
            ${project.impactMetrics.map(m => `
              <div>
                <div class="text-xs font-bold text-emerald-400">${m.value}</div>
                <div class="text-[10px] text-slate-400 uppercase tracking-wider">${m.label}</div>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 mb-2">
            ${project.techStack.map(tech => `
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/50">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="p-6 pt-0 border-t border-slate-800/50 mt-4 flex items-center justify-between gap-3">
        <a href="${project.caseStudyUrl}" class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-emerald-500/10">
          <span>Read Case Study</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>
        ${project.githubUrl ? `
          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors" title="View Source Code">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
        ` : ''}
      </div>
    </article>
  `).join('');
}

// Attach filter button click listeners
document.addEventListener("DOMContentLoaded", () => {
  renderProjects("All");

  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-emerald-500", "text-slate-950", "shadow-emerald-500/20");
        b.classList.add("bg-slate-800/80", "text-slate-300");
      });
      btn.classList.add("bg-emerald-500", "text-slate-950", "shadow-emerald-500/20");
      btn.classList.remove("bg-slate-800/80", "text-slate-300");

      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });
});
