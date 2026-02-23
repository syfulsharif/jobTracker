// Initial Job Data
let jobs = [
    {
        id: 1,
        companyName: "TechFlow Solutions",
        position: "Senior Frontend Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $150k",
        description: "Join our dynamic team building next-generation SaaS applications using React and Tailwind CSS. We value clean code and performance.",
        status: "Available"
    },
    {
        id: 2,
        companyName: "CloudScale AI",
        position: "Backend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$140k - $180k",
        description: "Scale our AI infrastructure. Expertise in Node.js, Python, and distributed systems required. Hybrid work model available.",
        status: "Available"
    },
    {
        id: 3,
        companyName: "DesignHub Studio",
        position: "UI/UX Designer",
        location: "New York, NY",
        type: "Contract",
        salary: "$80 - $120 / hr",
        description: "Help us craft beautiful user experiences for leading consumer brands. Proficiency in Figma and design systems is a must.",
        status: "Available"
    },
    {
        id: 4,
        companyName: "FinTech Prime",
        position: "Product Manager",
        location: "London, UK",
        type: "Full-time",
        salary: "£90k - £110k",
        description: "Lead the product roadmap for our retail banking application. Experience in Fintech and agile methodologies is preferred.",
        status: "Available"
    },
    {
        id: 5,
        companyName: "Nexus Systems",
        position: "DevOps Engineer",
        location: "Berlin, Germany",
        type: "Full-time",
        salary: "€80k - €100k",
        description: "Automate everything! We are looking for an expert in Kubernetes, Terraform, and AWS to enhance our CI/CD pipelines.",
        status: "Available"
    },
    {
        id: 6,
        companyName: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130k - $175k",
        description: "Build high-performance mobile apps for iOS and Android. Deep knowledge of React Native and native modules is required.",
        status: "Available"
    },
    {
        id: 7,
        companyName: "SecureNet Security",
        position: "Security Analyst",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110k - $140k",
        description: "Protect our infrastructure and customer data. Experience with penetration testing and security compliance is key.",
        status: "Available"
    },
    {
        id: 8,
        companyName: "GreenFuture Tech",
        position: "Full Stack Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$125k - $160k",
        description: "Contribute to sustainable energy solutions. We use a modern stack with React, Node.js, and PostgreSQL.",
        status: "Available"
    }
];

let currentTab = 'all';

// DOM Elements
const jobsContainer = document.getElementById('jobs-container');
const emptyState = document.getElementById('empty-state');
const totalCountEl = document.getElementById('total-count');
const interviewCountEl = document.getElementById('interview-count');
const rejectedCountEl = document.getElementById('rejected-count');
const sectionCountEl = document.getElementById('section-count');

//  Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

function updateUI() {
    renderJobs();
    updateDashboard();
}

function renderJobs() {
    let filteredJobs = jobs;
    if (currentTab === 'interview') {
        filteredJobs = jobs.filter(job => job.status === 'Interview');
    } else if (currentTab === 'rejected') {
        filteredJobs = jobs.filter(job => job.status === 'Rejected');
    }

    jobsContainer.innerHTML = '';

    if (filteredJobs.length === 0) {
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        sectionCountEl.innerText = 0;
    } else {
        emptyState.classList.add('hidden');
        emptyState.classList.remove('flex');
        sectionCountEl.innerText = filteredJobs.length;

        filteredJobs.forEach(job => {
            const card = document.createElement('div');
            card.className = "job-card card bg-white shadow-sm border border-slate-100 p-6 relative";

            card.innerHTML = `
                <button onclick="deleteJob(${job.id})" class="absolute top-4 right-4 text-slate-300 hover:text-rose-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
                <div class="mb-4">
                    <h3 class="text-lg font-bold text-slate-800">${job.companyName}</h3>
                    <p class="text-slate-500 font-medium">${job.position}</p>
                    <p class="text-xs text-slate-400 mt-1">${job.location} • ${job.type} • ${job.salary}</p>
                </div>
                <div class="mb-4">
                    <span class="inline-block px-2 py-1 text-[10px] font-bold rounded ${job.status === 'Available' ? 'bg-blue-600 text-white' : (job.status === 'Interview' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white')} uppercase tracking-wider mb-2">
                        ${job.status === 'Available' ? 'NOT APPLIED' : job.status}
                    </span>
                    <p class="text-sm text-slate-500 line-clamp-2">${job.description}</p>
                </div>
                <div class="flex gap-3 mt-auto">
                    <button onclick="setStatus(${job.id}, 'Interview')" class="btn-interview flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${job.status === 'Interview' ? 'active' : ''}">
                        INTERVIEW
                    </button>
                    <button onclick="setStatus(${job.id}, 'Rejected')" class="btn-rejected flex-1 py-2 px-4 rounded-lg text-sm font-semibold transition-all ${job.status === 'Rejected' ? 'active' : ''}">
                        REJECTED
                    </button>
                </div>
            `;
            jobsContainer.appendChild(card);
        });
    }
}

function updateDashboard() {
    totalCountEl.innerText = jobs.length;
    interviewCountEl.innerText = jobs.filter(job => job.status === 'Interview').length;
    rejectedCountEl.innerText = jobs.filter(job => job.status === 'Rejected').length;
}

// Function for switching tabs


function switchTab(tab) {
    currentTab = tab;
    
    // Update active tab UI
    document.querySelectorAll('[role="tab"]').forEach(el => el.classList.remove('tab-active'));
    document.getElementById(`tab-${tab}`).classList.add('tab-active');
    
    renderJobs();
}

// Function for updating stats
function setStatus(id, newStatus) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        // Toggle if clicking same status? Instructions say "Enable toggle between Interview and rejected button... It will change the tab and dashboard count also"
        // If it was already Interview and I click Rejected, it changes to Rejected.
        // If it was Available and I click Interview, it changes to Interview.
        job.status = (job.status === newStatus) ? 'Available' : newStatus;
        updateUI();
    }
}

function deleteJob(id) {
    jobs = jobs.filter(job => job.id !== id);
    updateUI();
}
