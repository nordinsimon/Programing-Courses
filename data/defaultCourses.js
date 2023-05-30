const defaultCourses = [
  {
    id: "m1",
    categoryIds: ["c1", "c2"],
    title: "HTML",
    backgroundUrl: "https://i.imgur.com/4LMd7fL.jpg",
    logoUrl: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    header:
      "Learn about HTML elements and structure, the building blocks of websites!",
    description: [
      "The HTML Fundamentals course is designed to provide a comprehensive introduction to HTML (Hypertext Markup Language), the foundational language used for creating and structuring web pages. Whether you're a complete beginner or have some prior coding experience, this course will equip you with the essential knowledge and skills to design and develop dynamic and visually appealing websites.",
      "Throughout the course, you will learn the core concepts and techniques of HTML, including the structure and syntax of HTML documents, the usage of various HTML elements, the creation of hyperlinks, and the incorporation of multimedia content. The curriculum combines theoretical explanations with practical hands-on exercises, ensuring that you gain a solid understanding of HTML principles while actively applying them.",
      "By the end of this HTML Fundamentals course, you will have a solid foundation in HTML and be able to create well-structured, interactive, and visually appealing web pages. Whether you're looking to pursue a career in web development or simply want to build your own websites, this course will empower you with the necessary skills to bring your ideas to life on the internet.",
    ],
    content: [
      "How you set up your HTML document",
      "How to use HTML tags to display text, images, lists, etc. on a single web page",
      "How to create hyperlinks , add images, and create lists and tables in HTML",
      "How to create forms and how to use HTML5 semantic elements to structure your web pages",
    ],
    moments: [
      {
        videoOrder: 0,
        videoId: "ok-plXXHlWw",
        videoDescriptions: "HTML Fundamentals - Introduction",
        videoGoals: [
          "Learn about the HTML history",
          "Learn how Tags work in HTML",
          "How to create a basic HTML document",
        ],
      },
      {
        videoOrder: 1,
        videoId: "9gTw2EDkaDQ",
        videoDescriptions:
          "This video describes HTML tags, elements, and attributes.",
        videoGoals: [
          "Learn about the HTML basic structure",
          "Learn the basic HTML tags",
          "Learn how to use HTML attributes",
        ],
      },
      {
        videoOrder: 2,
        videoId: "YcApt9RgiT0",
        videoDescriptions: "This video describes how to use text in HTML.",
        videoGoals: [
          "Learn how to use HTML text tags",
          "Learn how to use HTML heading tags",
          "Learn how to use HTML paragraph tags",
        ],
      },
      {
        videoOrder: 3,
        videoId: "CGSdK7FI9MY",
        videoDescriptions:
          "This video demonstrates how to use images and hyperlinks",
        videoGoals: [
          "Learn how to use HTML image tags",
          "Learn how to use HTML hyperlink tags",
        ],
      },
      {
        videoOrder: 4,
        videoId: "4I1WgJz_lmA",
        videoDescriptions:
          "This video introduces 2 elements that are new to HTML5, the audio and video elements",
        videoGoals: [
          "Learn how to use HTML audio tags",
          "Learn how to use HTML video tags",
        ],
      },
      {
        videoOrder: 5,
        videoId: "dDn9uw7N9Xg",
        videoDescriptions:
          "This tutorial will introduce 7 elements that are new to HTML5.",
        videoGoals: ["Learn how to use HTML5 semantic tags"],
      },
    ],
  },
  {
    id: "m2",
    categoryIds: ["c2"],
    title: "CSS",
    backgroundUrl:
      "https://epicode.com/wp-content/uploads/2022/08/html-e-css-1.jpg",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png",
    header: "Learn about CSS, the language that styles and formats web pages!",
    description: [
      `The "Introduction to CSS" course provides a comprehensive overview of Cascading Style Sheets, a fundamental technology used to control the visual appearance of web pages. Whether you're a beginner or have some prior experience with HTML, this course will equip you with the essential skills to style and design web content effectively.`,
      "Throughout the course, you'll learn the basics of CSS syntax, selectors, and properties, allowing you to modify various aspects of web page elements such as fonts, colors, layouts, and more. The curriculum combines theoretical explanations with hands-on exercises to reinforce your understanding and proficiency in using CSS.",
      "By the end of this course, you'll have a strong foundation in CSS and the ability to create visually appealing web pages by leveraging the power of Cascading Style Sheets.",
    ],
    content: [
      "How to use CSS to style and format web pages",
      "How to use CSS selectors to target HTML elements",
      "How to use CSS properties to modify the appearance of HTML elements",
      "How to use CSS to create layouts and responsive web pages",
    ],
    moments: [
      {
        videoOrder: 0,
        videoId: "ok-plXXHlWw",
        videoDescriptions: "HTML Fundamentals - Introduction",
        videoGoals: [
          "Learn about the HTML history",
          "Learn how Tags work in HTML",
          "How to create a basic HTML document",
        ],
      },
    ],
  },
  {
    id: "m3",
    categoryIds: ["c3"],
    title: "JavaScript",
    backgroundUrl:
      "https://miro.medium.com/v2/resize:fit:1400/0*Bxt_7BaL_n4_I1vr",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    header:
      "Learn about JavaScript, the programming language that brings web pages to life!",
    description: [
      `The "Introduction to JavaScript" course provides a comprehensive overview of JavaScript, a fundamental programming language used to create dynamic and interactive web pages. Whether you're a beginner or have some prior experience with HTML and CSS, this course will equip you with the essential skills to build and deploy web applications.`,
      "Throughout the course, you'll learn the basics of JavaScript syntax, variables, functions, and objects, allowing you to create interactive web pages that respond to user input. The curriculum combines theoretical explanations with hands-on exercises to reinforce your understanding and proficiency in using JavaScript.",
      "By the end of this course, you'll have a strong foundation in JavaScript and the ability to create dynamic and interactive web pages by leveraging the power of JavaScript.",
    ],
    content: [
      "How to use JavaScript to create dynamic and interactive web pages",
      "How to use JavaScript variables, functions, and objects",
      "How to use JavaScript to manipulate the DOM",
      "How to use JavaScript to create animations and effects",
    ],
    moments: [
      {
        videoOrder: 0,
        videoId: "ok-plXXHlWw",
        videoDescriptions: "HTML Fundamentals - Introduction",
        videoGoals: [
          "Learn about the HTML history",
          "Learn how Tags work in HTML",
          "How to create a basic HTML document",
        ],
      },
    ],
  },
  {
    id: "m4",
    categoryIds: ["c4"],
    title: "React",
    backgroundUrl:
      "https://www.freecodecamp.org/news/content/images/2022/03/photo-1619410283995-43d9134e7656.jpeg",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    header:
      "Learn about React, the JavaScript library for building user interfaces!",
    description: [
      `The "Introduction to React" course provides a comprehensive overview of React, a JavaScript library used to build user interfaces. Whether you're a beginner or have some prior experience with HTML, CSS, and JavaScript, this course will equip you with the essential skills to create dynamic and interactive web applications.`,
      "Throughout the course, you'll learn the basics of React syntax, components, and state, allowing you to create reusable and interactive user interface components. The curriculum combines theoretical explanations with hands-on exercises to reinforce your understanding and proficiency in using React.",
      "By the end of this course, you'll have a strong foundation in React and the ability to create dynamic and interactive web applications by leveraging the power of React.",
    ],
    content: [
      "How to use React to create user interfaces",
      "How to use React components and state",
      "How to use React to create reusable and interactive user interface components",
      "How to use React to create dynamic and interactive web applications",
    ],
    moments: [
      {
        videoOrder: 0,
        videoId: "ok-plXXHlWw",
        videoDescriptions: "HTML Fundamentals - Introduction",
        videoGoals: [
          "Learn about the HTML history",
          "Learn how Tags work in HTML",
          "How to create a basic HTML document",
        ],
      },
    ],
  },
];

export default defaultCourses;
