var projects = [
    {
        images: ["./assets/images/buckit_mockup.png", "./assets/images/buckit_profile.png"],
        title: "Buck It",
        description: `BuckIt is a website that allows users to create, view, and share their bucket lists. 
        It allows them to share their achievements and plans, and also at the same time be inspired by others.`,
        technologies: "HTML, CSS, Javascript, React, React Bootstrap, Node.js, Express.js, Apollo, MongoDB, Mongoose, Cloudinary",
        url: "https://buck-it-app.herokuapp.com/",
        repo: "https://github.com/CodingNav/Buck-It"
    },
    {
        images: ["./assets/images/easyeats_mockup.png", "./assets/images/easyeats_recipe.png"],
        title: "Easy Eats",
        description: `Easy Eats is a recipes website for a busy individual who enjoys cooking. It is sometimes difficult to find a website 
        that has both the recipes and ingredients needed, which can be exhausting. Easy Eats allows for a more enjoyable experience in learning 
        new recipes by allowing users to find recipes and order the ingredients in one spot.`,
        technologies: "HTML, CSS, Javascript, JQuery",
        url: "https://codingnav.github.io/Easy-Eats/",
        repo: "https://github.com/CodingNav/Easy-Eats"
    },
    {
        images: ["./assets/images/techblog_mockup.png"],
        title: "Tech Blog",
        description: `Tech Blog is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on 
        other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, 
        Sequelize as the ORM, and the express-session npm package for authentication.`,
        technologies: "HTML, CSS, Bulma, Handlebars, Javascript, Node.js, Express.js, MySQL, Sequelize",
        url: "https://codingnav-tech-blog.herokuapp.com/",
        repo: "https://github.com/CodingNav/Tech-Blog"
    },
    {
        images: ["./assets/images/booksearch_mockup.png"],
        title: "Book Search",
        description: `Book Search is emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as 
        a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need 
        to be more performant. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, React, Node.js, Express.js, MongoDB",
        url: "https://codingnav-book-search.herokuapp.com/",
        repo: "https://github.com/CodingNav/Book-Search"
    },
    {
        images: ["./assets/images/pirate_mockup.png", "./assets/images/game_screen.gif"],
        title: "Pirate RPG",
        description: `Pirate RPG is a fighting/strategy game based on a war between the pirates.
        The goal is to conquer the other pirates by defeating their toughest fighters. If attacks
        aren't planned accordingly then your crew may wind up on the losing end.`,
        technologies: "HTML, CSS, Javascript, JQuery",
        url: "https://codingnav.github.io/Pirate-RPG/",
        repo: "https://github.com/CodingNav/Pirate-RPG#readme"
    },
    {
        images: ["./assets/images/gurdwara_mockup.png", "./assets/images/gurdwara_about.png"],
        title: "Gurdwara Guru Tegh Bahadur Sahib",
        description: `This is a website for a Sikh Temple located in Long Island, New York.`,
        technologies: "HTML, CSS, Foundation, Javascript, JQuery",
        url: "https://www.gurdwarateghbahadur.com/",
        repo: "https://github.com/CodingNav/Hillside-Gurdwara"
    },
    {
        images: ["./assets/images/spa_quiz_mockup.png", "../assets/images/spa_quiz.gif"],
        title: "Web Development Quiz",
        description: `Web Development Quiz is a set of two beginner practice quizzes for upcoming
        web developers.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, Handlebars.js",
        url: "https://spa-quiz.netlify.app/",
        repo: "https://github.com/CodingNav/SPA-Quiz#readme"
    },
    {
        images: ["./assets/images/budget_tracker_mockup.png"],
        title: "Budget Tracker",
        description: `Budget Tracker is a Progressive Web Application that allows the user to be able to add expenses and deposits to their budget with or without a connection. 
        When entering transactions offline, they should populate the total when brought back online. Giving users a fast and easy way to track their money is important, but 
        allowing them to access that information anytime is even more important. Having offline functionality is paramount to the applications success.`,
        technologies: "HTML, CSS, Javascript, Chart.js, Node.js, Express.js, MongoDB",
        url: "https://codingnav-budget-tracker.herokuapp.com/",
        repo: "https://github.com/CodingNav/Budget-Tracker"
    },
    {
        images: ["./assets/images/course_finder_mockup.png", "./assets/images/course_finder.gif"],
        title: "Course Finder",
        description: `Course finder is a web application with a back-end API service that
        provides students access to information about the courses offered at St John's University.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, JQuery, Node.js, Express.js",
        url: "https://sju-course-finder.netlify.app/",
        repo: "https://github.com/CodingNav/Course-Search#readme"
    },
    {
        images: ["./assets/images/weather_mockup.png"],
        title: "Weather Dashboard",
        description: `Weather Dashboard allows travelers to see the weather outlook for multiple 
        cities so that they can plan a trip accordingly.`,
        technologies: "HTML, CSS, Materialize, Javascript, JQuery, Moment.js",
        url: "https://codingnav.github.io/Weather-Dashboard/",
        repo: "https://github.com/CodingNav/Weather-Dashboard#readme"
    },
    {
        images: ["./assets/images/code_quiz_mockup.png"],
        title: "Code Quiz",
        description: `This responsive Code Quiz Challenge is a timed quiz on Bootstrap fundamentals 
        that stores high scores so that you can gauge your progress compared to your peers`,
        technologies: "HTML, CSS, Javascript",
        url: "https://codingnav.github.io/Code-Quiz/",
        repo: "https://github.com/CodingNav/Code-Quiz#readme"
    },
    {
        images: ["./assets/images/team_mockup.png", "./assets/images/team_terminal.png", "./assets/images/team_test.png"],
        title: "Team Profile Generator",
        description: `Team Profile Generator is a Node.js command-line application that takes in information 
        about employees on a software engineering team, then generates an HTML webpage that displays summaries for 
        each person. Testing is key to making code maintainable, so I wrote a unit test for every part of the code and 
        ensured that it passed each test.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, Nodejs, Inquirer, Jest",
        url: "#",
        repo: "https://github.com/CodingNav/Team-Profile-Generator#readme"
    },
    {
        images: ["./assets/images/employee_mgt_mockup.png"],
        title: "Employee Management System",
        description: `Employee Management System is a command-line application from scratch to manage a company's employee 
        database, using Node.js, Inquirer, and MySQL.`,
        technologies: "Javascript, Nodejs, MySQL",
        url: "#",
        repo: "https://github.com/CodingNav/Employee-Management-System"
    },
    {
        images: ["./assets/images/readme_terminal.png", "./assets/images/readme_mockup.png"],
        title: "README Generator",
        description: `README Generator is a command-line application that accepts user input and generates a 
        professional README for a new project.`,
        technologies: "Javascript, Nodejs",
        url: "#",
        repo: "https://github.com/CodingNav/README-Generator#readme"
    },
    {
        images: ["./assets/images/crystal_collector.png", "./assets/images/crystal_collector.gif"],
        title: "Crystal Collector",
        description: `Crystal Collector is a basic math game revolving around addition. The goal
        is to add hidden values through clicking the crystals to reach the target number that's
        given. If you go over the target value, you lose.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, JQuery",
        url: "https://codingnav.github.io/Crystal-Collector-Game/",
        repo: "https://github.com/CodingNav/Crystal-Collector-Game#readme"
    },
    {
        images: ["./assets/images/note_taker-mockup.png"],
        title: "Note Taker",
        description: `Note Taker is an application that uses an Express.js back end to allow the user to write and saves notes.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, Nodejs, Expressjs",
        url: "https://codingnav-note-taker.herokuapp.com/",
        repo: "https://github.com/CodingNav/Note-Taker#readme"
    },
    {
        images: ["./assets/images/day_planner_mockup.png"],
        title: "Day Planner",
        description: `Day Planner is a calendar application that allows a user to save events for each 
        hour of the day. This will help the user stay more organized for their work day. This app runs in 
        the browser and feature dynamically updated HTML and CSS powered by jQuery.`,
        technologies: "HTML, CSS, Bootstrap, Javascript, JQuery",
        url: "https://codingnav.github.io/Day-Planner/",
        repo: "https://github.com/CodingNav/Day-Planner#readme"
    },
    {
        images: ["./assets/images/ecommerce_mockup.png"],
        title: "E-Commerce Back End",
        description: `This repo includes the back end for an e-commerce site. I configured a working Express.js API to use 
        Sequelize to interact with a MySQL database.`,
        technologies: "Javascript, .ENV, Node.js, Express.js, MySQL, Sequelize",
        url: "#",
        repo: "https://github.com/CodingNav/E-Commerce-Back-End"
    },
    
    {
        images: ["./assets/images/urban_mockup.png"],
        title: "Urban Fashion",
        description: `Urban Fashion is a retail website designed to sell trendy winter clothes`,
        technologies: "HTML, CSS",
        url: "https://codingnav.github.io/Urban-Fashion/",
        repo: "https://github.com/CodingNav/Urban-Fashion#readme"
    },
    {
        images: ["./assets/images/refactor_mockup.png"],
        title: "Code Refactor",
        description: `Code Refactor is a web application made for Horiseon, a marketing agency. 
        It follows accessibility standards, making it optimized for search engines.`,
        technologies: "HTML, CSS, Javascript",
        url: "https://codingnav.github.io/Horiseon-Refactor/",
        repo: "https://github.com/CodingNav/Horiseon-Refactor#readme"
    }
]