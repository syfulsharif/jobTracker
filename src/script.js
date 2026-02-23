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