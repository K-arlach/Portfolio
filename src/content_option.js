import CodeOfAPIProjectImage from "./assets/images/kasa.png";
import CodeOfAPIProjectImage2 from "./assets/images/argentbank.png";
import CodeOfAPIProjectImage3 from "./assets/images/kasa.png";


const logotext = "幸 運 を";
const meta = {
    title: "Kidly",
    description: "I’m John Doe data scientist _ Full stack devloper,currently working in Berlin",
};

const introdata = {
    title: "Hi im kyllian",
    animated: {
        first: "Welcome to my portfolio",
        second: "I'm a web integration student",
        third: "I play video games",
    },
    description: "Learn more about me and my work ",
    your_img_url: "https://c.pxhere.com/photos/1f/1e/takeshihayakawa_japan_old_snow_village_winter-1616698.jpg!d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a tech lover and i like to play video games and toy with computer parts trying to understand how everything works since im a child so naturally i started web developpement studies to see where that would lead me !",
};
const worktimeline = [{
        jobtitle: "Web integrator (studies)",
        where: "Openclassroom",
        date: "2022-2024",
    },
   
];

const skills = [{
        name: "HTML",
        value: 90,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "Redux",
        value: 50,
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
        img: CodeOfAPIProjectImage ,
        description: "House renting website using React and Scss",
        link: "https://github.com/kyllianschneider/Kasa-8",
    },
    {
        img: CodeOfAPIProjectImage2,
        description: "Bank app using react working with API for user authentification",
        link: "https://github.com/K-arlach/ArgentBank-11",
    },
    {
        img: CodeOfAPIProjectImage3 ,
        description: "House renting website using React and Scss",
        link: "https://github.com/kyllianschneider/Kasa-8",
    },
   
];

const contactConfig = {
    YOUR_EMAIL: "randomemail@gmail.com",
    YOUR_FONE: "555(123-456)",
    description: "Do not hesitate to contact me for any questions about my work  ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
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