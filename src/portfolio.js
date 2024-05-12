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
    subTitle: "Meet Usman Saleem: The Android Wizard on a Mission to Explore Every Tech Stack! With 7 years of daring exploits in mobile development, I'm here to push boundaries and redefine what's possible. Join me on a journey through a wild world of code and creativity. Let's build the future, one crazy idea at a time!. Here is some tech stack i worked on",
    skills: [
       
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "JAVA",
            fontAwesomeClassname: require("./assets/images/java.png")
        },
        {
            skillName: "Kotlin",
            fontAwesomeClassname: require("./assets/images/kotlin.png")
        },

        {
            skillName: "Google Api's",
            fontAwesomeClassname: require("./assets/images/google.png")
        },
        {
            skillName: "Google Vision",
            fontAwesomeClassname: require("./assets/images/googlevision.png")
        },
        {
            skillName: "Cloud Messaging",
            fontAwesomeClassname: require("./assets/images/cloudmessaging.png")
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: require("./assets/images/firebase.png")
        },
        {
            skillName: "Realtime Database",
            fontAwesomeClassname: require("./assets/images/firebaserealm.png")
        },
        {
            skillName: "Offline Storage",
            fontAwesomeClassname: require("./assets/images/google.png")
        },
        {
            skillName: "Payment Gateways",
            fontAwesomeClassname: require("./assets/images/paymentgateways.png")
        },
        {
            skillName: "aws",
            fontAwesomeClassname: require("./assets/images/aws.png")
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
    display: false, //Set it to true to show workExperiences Section
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
    display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Some Projects",
    subtitle: "Here are just a glimpse of the projects I've completed; there's plenty more to delve into. I've worked on numerous others and am eager to share them with you. Let's continue the discussion and explore further!",
    projects: [{
            image: require("./assets/images/terascan.png"),
            projectName: "Terascan (In Progress)",
            projectDesc: "Capture, edit, convert, and share documents effortlessly on your mobile device. Whether contracts or receipts, at home or on the go, high-quality scans are just a few taps away.",
            footerLink: [{
                name: "Playstore Link",
                url: "https://play.google.com/store/apps/details?id=com.tera.scan&hl=en&gl=US"
            }]
        },
        {
            image: require("./assets/images/yhat.png"),
            projectName: "yHat",
            projectDesc: "Simplifying time series forecasting for non-technical users, allowing effortless creation of projects without coding. Just select industry, load data, review, and deploy for quick, AI-based forecasting results.",
            footerLink: [{
                name: "Visit Website link",
                url: "https://odyxyhat.com/"
            }]
        },
        {
            image: require("./assets/images/skoot.png"),
            projectName: "Skoot",
            projectDesc: "Choose from thousands of e-scooters & e-bikes from Trusted Rental Partners on Skoot. Simplify your rental experience",
            footerLink: [{
                name: "Visit Playstore link",
                url: "https://play.google.com/store/apps/details?id=com.skoot.now"
            }]
        },
        {
            image: require("./assets/images/fazer.png"),
            projectName: "Fazer",
            projectDesc: "Stay secure with the Fazer app, paired with Fazer Defense pepper spray. Alert contacts & share GPS for quick aid. Hassle-free, no downloads needed. Get peace of mind at fazerdefense.com.",
            footerLink: [{
                    name: "Visit Playstore link",
                    url: "https://play.google.com/store/apps/details?id=com.fazer.defense&hl=en_US&gl=US"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/swaptions.png"),
            projectName: "Swaptions",
            projectDesc: "Swaption is an online selling/swapping app for different things.This app is used in US by barters. Person can easily register on app and can sell, buy, exchange his products. Payment can be made using secure payment gateways i.e. PayPal",
            footerLink: [{
                    name: "Visit Playstore link",
                    url: "https://play.google.com/store/apps/details?id=com.swapationproject"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/baaqah.png"),
            projectName: "Baaqah",
            projectDesc: "Baaqah is a bouquet selling application, which is used by different florists in dubai. Different users can register themselves using app and can buy bouquets online. Payments done using card, PayPal, Authorize.net as well as manually.",
            footerLink: [{
                    name: "Visit link",
                    url: "https://www.baaqah.com/"
                }
                //  you can add extra buttons here.
            ]
        },
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
    display: false // Set true to display this section, defaults to false
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