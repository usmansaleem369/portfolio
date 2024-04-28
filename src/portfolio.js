/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
    animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Usman Saleem",
    title: "Hi all, I'm Usman",
    subTitle: emoji(
        "A seasoned Senior Android Developer with 7 years of expertise. I specialize in creating captivating mobile experiences that blend sleek design with cutting-edge functionality. Dive into my portfolio to see how I transform ideas into polished, user-centric apps. Let's build something extraordinary together!"
    ),
    resumeLink: "https://drive.google.com/file/d/1i7QHAF5fyPG8Q4i3FyG15UgprKi54NCI/view?usp=drive_link", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/usmansaleem369",
    linkedin: "https://www.linkedin.com/in/usman-saleem-33502a13b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BoAuWLT54SrKpwYiGvY1Rsw%3D%3D",
    gmail: "usman.saleem369@gmail.com",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "Meet Usman Saleem: The Android Wizard on a Mission to Explore Every Tech Stack! With 7 years of daring exploits in mobile development, I'm here to push boundaries and redefine what's possible. Join me on a journey through a wild world of code and creativity. Let's build the future, one crazy idea at a time!",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for mobile applications"
        ),
        emoji("⚡ Progressive Android Applications using native languages"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Google API's"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "JAVA",
            fontAwesomeClassname: "fab fa-java"
        },
        {
            skillName: "Kotlin",
            fontAwesomeClassname: "fab fa-android"
        },

        {
            skillName: "Google Maps Api",
            fontAwesomeClassname: "fas fa-google"
        },

        {
            skillName: "Google Places Api",
            fontAwesomeClassname: "fas fa-location-dot"
        },
        {
            skillName: "Google Drive",
            fontAwesomeClassname: "fas fa-google-drive"
        },
        {
            skillName: "Google SignIn",
            fontAwesomeClassname: "fas fa-google"
        },
        {
            skillName: "Google Vision",
            fontAwesomeClassname: "fas fa-google"
        },
        {
            skillName: "Google/Firebase Cloud Messaging",
            fontAwesomeClassname: "fas fa-message"
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "Firebase Realtime Database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Room-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Google Pay",
            fontAwesomeClassname: "fas fa-google-pay"
        },
        {
            skillName: "Stripe",
            fontAwesomeClassname: "fas fa-stripe"
        },
        {
            skillName: "PayPal",
            fontAwesomeClassname: "fas fa-paypal"
        },
        {
            skillName: "PayPal",
            fontAwesomeClassname: "fas fa-cc-mastercard"
        },
        {
            skillName: "aws",
            fontAwesomeClassname: "fab fa-aws"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
        schoolName: "FAST NUCES",
        logo: require("./assets/images/fastLogo.png"),
        subHeader: "Bachelors of Computer Science",
        duration: "August 2013 - July 2017",
    }]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            "Stack": "Android Development (Java & Kotlin)",
            "progressPercentage": "90%"
        },
        {
            "Stack": "Development Tools",
            "progressPercentage": "100%"
        },
        {
            "Stack": "Frameworks and Libraries",
            "progressPercentage": "90%"
        },
        {
            "Stack": "Version Control",
            "progressPercentage": "100%"
        },
        {
            "Stack": "Continuous Integration/Continuous Deployment (CI/CD)",
            "progressPercentage": "100%"
        },
        {
            "Stack": "Other Tools and Technologies",
            "progressPercentage": "80%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Senior Android Developer",
            company: "TerraFort",
            companylogo: require("./assets/images/terafort.png"),
            date: "January 2024 – Present",
            desc: "I am thrilled to be a part of the innovative team at TerraFort, where I serve as a Senior Android Developer. At TerraFort, I have the opportunity to contribute to the cutting-edge technology that is revolutionizing the real estate industry. Collaborating with a talented team of professionals, I play a pivotal role in developing and enhancing the TerraFort Android application, which empowers users to make informed decisions about properties, investments, and real estate transactions. Working in a dynamic and fast-paced environment, I am constantly challenged to push the boundaries of Android development and deliver seamless user experiences. My time at TerraFort has been incredibly rewarding, and I am proud to be a key player in shaping the future of real estate technology.",
            descBullets: [
                "Proudly serving as a Senior Android Developer at TerraFort, a pioneering force in real estate technology.",
                "Collaborating within a dynamic team to develop and enhance the TerraFort Android application.",
                "Contributing to cutting-edge solutions that empower users in making informed real estate decisions.",
                "Playing a pivotal role in pushing the boundaries of Android development to deliver seamless user experiences.",
                "Thriving in a fast-paced environment where innovation and creativity are encouraged.",
                "Dedicated to shaping the future of real estate technology and making a meaningful impact in the industry."
            ]
        },
        {
            role: "Senior Android Developer",
            company: "RunUfit",
            companylogo: require("./assets/images/runufit.png"),
            date: "March 2023 – December 2023",
            desc: "Excited to be a Senior Android Developer at RunUfit, where I've had the privilege to contribute my expertise to an exciting fitness-focused platform. At RunUfit, I played a key role in designing and implementing new features to enhance user engagement and experience. Working closely with a dedicated team of developers and designers, I helped shape the RunUfit Android app, empowering users to achieve their fitness goals with ease and efficiency. It's been a rewarding journey, being part of a company that's committed to leveraging technology for positive lifestyle changes.",
            descBullets: [
                "Contributed to the development of RunUfit's Android app, focusing on enhancing user engagement and experience.",
                "Collaborated closely with cross-functional teams to ensure seamless integration of new features and improvements.",
                "Utilized my expertise in Android development to deliver high-quality code and maintain the app's performance and reliability.",
                "Thrived in a fast-paced environment, adapting quickly to changing requirements and priorities.",
                "Proud to have been part of a team dedicated to leveraging technology to promote health and wellness.",
                "Completed tenure as a Senior Android Developer from March 2023 to December 2023."
            ]
        },
        {
            role: "Senior Android Developer",
            company: "Odyssey Solutions",
            companylogo: require("./assets/images/odyssey_solutions.png"),
            date: "January 2022 – March 2023",
            desc: "Embarking on a thrilling journey as a Senior Android Developer at Odyssey Solutions, I've had the honor of contributing my skills to a myriad of transformative projects. At Odyssey Solutions, every day felt like a new adventure, where innovation and creativity were not just encouraged but celebrated. As a core member of the Android development team, I played a pivotal role in crafting immersive mobile experiences that pushed the boundaries of what's possible. From architecting elegant solutions to solving complex technical challenges, I've been fortunate to collaborate with some of the brightest minds in the industry.",
            descBullets: [
                "Led the development of multiple high-impact Android applications, driving user engagement and satisfaction to new heights.",
                "Worked closely with cross-functional teams to translate vision and requirements into innovative mobile solutions.",
                "Championed best practices in Android development, ensuring code quality, performance, and scalability.",
                "Embraced a culture of continuous learning and growth, staying abreast of the latest technologies and trends.",
                "Fostered a collaborative and inclusive work environment, where every voice was valued and respected.",
                "Concluded an enriching chapter as a Senior Android Developer from January 2022 to March 2023."
            ]
        },
        {
            role: "Android Developer",
            company: "Vision Plus Solutions",
            companylogo: require("./assets/images/vision_plus_solutions.png"),
            date: "March 2017 – December 2021",
            desc: "Thrilled to have been part of the dynamic team at Vision Plus Solutions as an Android Developer. Over the span of four years, I've had the opportunity to contribute to a diverse range of projects that have shaped my skills and perspective as a developer. At Vision Plus Solutions, innovation and collaboration were at the core of every project, and I played a hands-on role in designing and implementing robust Android applications that exceeded client expectations. It's been an incredible journey of growth and learning, where each challenge presented an opportunity to expand my skills and contribute to meaningful solutions.",
            descBullets: [
                "Contributed to the development of Android applications across various domains, including e-commerce, finance, and entertainment.",
                "Worked closely with cross-functional teams to understand project requirements and deliver scalable and high-performing solutions.",
                "Adopted best practices in Android development, ensuring code quality, maintainability, and performance optimization.",
                "Collaborated with UI/UX designers to create visually appealing and intuitive user interfaces.",
                "Continuously updated skills and knowledge to stay abreast of the latest technologies and trends in Android development.",
                "Concluded a fulfilling chapter as an Android Developer from March 2017 to December 2021."
            ]
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "Terascan (In Progress)",
            projectDesc: "Terascan is an all-in-one scanner app. It turns your mobile device into a powerful portable scanner that recognizes text automatically (AI-powered OCR) and improves your productivity to save your time. The most intelligent scanner app. Scan anything — receipts, notes, documents, photos, business cards, whiteboards — with text you can reuse from each PDF and photo scan. User can also edit the pdf through this app.",
            footerLink: [{
                name: "Visit Website link",
                url: "https://www.terafort.com/"
            }]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "yHat",
            projectDesc: "Odyx yHat is Time Series Forecasting tool for making the complex process of data science more straightforward & usable for a non-technical user without any data science knowledge.Odyx yHat has been designed to meet the core needs of its intended users seeking a smart way to create as many time series forecasting projects as they want without the hassle of dealing with coding. You just select industry & its subcategory, load data file, review data & deploy the productionized model for results. It’s that quick to conduct forecasting in our AI-Based time series forecasting tool.",
            footerLink: [{
                name: "Visit Website link",
                url: "https://odyxyhat.com/"
            }]
        },
        {
            image: require("./assets/images/nextuLogo.webp"),
            projectName: "eScoot",
            projectDesc: "eScoot—an innovative solution that brings together electric scooters from leading mobility operators into one convenient platform. With eScoot, users can effortlessly locate the nearest electric scooter or bike from popular providers like Lime, Bird, Spin, and many more, all with just a few taps. Excitingly, in select cities across Denmark, Sweden, Germany, Spain, and Italy, users can now directly unlock and pay for their rides within the app.Navigating eScoot is simple: users search for rides marked with a star, locate the closest electric scooter or bike, and initiate and pay for their ride seamlessly—all within the eScoot app. For other cities, and for alternative modes of transportation like cars and mopeds, eScoot redirects users to the respective operator's platform for a hassle-free experience.",
            footerLink: [{
                name: "Visit Playstore link",
                url: "https://play.google.com/store/apps/details?id=com.santoyamo.nomorecars&hl=en_US&gl=US"
            }]
        },
        {
            image: require("./assets/images/saayaHealthLogo.webp"),
            projectName: "Fazer",
            projectDesc: "Fazer mobile app, designed to complement the Fazer Defense pepper spray device, automatically notifies your emergency contacts and shares your GPS location upon activation, ensuring swift assistance in times of distress. With no requirement for your contacts to download the app, it's a hassle-free solution for staying connected to safety. Visit fazerdefense.com today to equip yourself with peace of mind. Note: To ensure continuous functionality, keep the Fazer Defense app open or running in the background, as closing it through the App Switcher may disrupt distress signal reception until manually reopened.",
            footerLink: [{
                    name: "Visit Playstore link",
                    url: "https://play.google.com/store/apps/details?id=com.fazer.defense&hl=en_US&gl=US"
                }
                //  you can add extra buttons here.
            ]
        }

    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [{
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [{
                    name: "Certification",
                    url: ""
                },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
    display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
    ],
    display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3477657103",
    email_address: "usman.saleem369@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
    illustration,
    greeting,
    socialMediaLinks,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable
};