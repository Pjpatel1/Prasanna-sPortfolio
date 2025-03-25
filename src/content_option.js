import React from "react";
import SIEM from "./pages/SOCHomeLab/SIEM.webp";
const logotext = "Prasanna";
const meta = {
    title: "Prasanna Patel",
    description: "I’m Prasanna Patel CyberSecurity Analyst and Software devloper,currently working in Canada",
};

const introdata = {
    title: "I’m Prasanna",
    animated: {
        first: "I love building Softwares",
        second: "I love Automation",
        third: "I am good at building Secure Enclave",
    },
    description: "I am Security + Certified",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "",
 };
 const worktimeline = [
    //{
//         jobtitle: "Designer of week",
//         where: "YAdfi",
//         date: "2020",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "Jamalya",
//         date: "2019",
//     },
//     {
//         jobtitle: "Designer of week",
//         where: "ALquds",
//         date: "2019",
//     },
];

const skills = [{
        name: "Python",
        value: 90,
    },
    {
        name: "Djano",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Jquery",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: SIEM,
        description: "SOC Hands-on home lab",
        link: "/SOCHomelab",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "E Commerce Site",
        link: "https://testing-9-j4r9.onrender.com/Namaste",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "Potfolio Site",
        link: "https://prasanna-sportfolio.onrender.com/",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "patel.prasanna2396@gmail.com",
    YOUR_FONE: "647-864-4149",
    description: "I'm always excited to connect with new people and explore opportunities! Whether you have a job opening, a project idea, or just want to chat about tech, feel free to reach out. I typically respond within 24 hours. Looking forward to hearing from you! ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/Pjpatel1",
    linkedin: "https://www.linkedin.com/in/patel-prasanna/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
