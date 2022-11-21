
const caseCollection = [
    // Task portal data
    // Task portal preview
    {   "preview": {
            "case_box": 1,
            "preview_title": "Task portal",
            "preview_images": [
                {
                    "img_src": "tp-home.png",
                    "img_alt": "Task portal signed in!",
                    "img_class": "case-img-desktop"

                },
                
            ],
            "preview_list": [
                {
                    "list_item": "Front-end & Back-end",
                    "list_iconClass": "fa-solid fa-code"
                },
                {
                    "list_item": "MSSQL",
                    "list_iconClass": "fa-solid fa-database"
                },
            ],
            "preview_links": [
                {
                    "link_name": "Front-end solution",
                    "link": "https://github.com/HollosT/WAD-front-end"
                },
                {
                    "link_name": "Back-end solution",
                    "link": "https://github.com/HollosT/WAD-Group3"
                },  
            ],
            "preview_btn": {
                "btn_text": "Read more",
                "data_btn": 1
            }
        },

        // Task portal tab collection
        "case_title": "Task portal",
        "tabs": [
            {
                "tab_content": "Challenge",
                "tab_data": 1
            },
            {
                "tab_content": "Database",
                "tab_data": 2
            },
            {
                "tab_content": "Back-end",
                "tab_data": 3
            },
            {
                "tab_content": "Authorisation",
                "tab_data": 4
            },
            {
                "tab_content": "Front-end",
                "tab_data": 5
            },
            {
                "tab_content": "Conclusion",
                "tab_data": 6
            },
        ],

        // Task portal content collection
        "content": [
            {
             "content_data": 1,
             "texts": [
                    {
                    "subTitle": "Problem",
                    "body": "To create a task portal from scratch, where people can sign up and create their task posts. Furthermore, they could update their ones. Also, they could apply for others. To implement authentication and authorization."
                    },
                    {
                    "subTitle": "Solution",
                    "body": "Realizing a database in MSSQL to handle and store the data. Building the back-end and the endpoints with Node.js. Using RESTful APIs to connect it with the front-end solution."
                    },
                    {
                    "subTitle": "My role in the team",
                    "body": "Coordinator, Full-stack developer"
                    },
                 ],
             "image": {
                    "image_src": "tp-mytasks.png",
                    "image_alt": "Task portal | My tasks page"
                },
            },
            {
             "content_data": 2,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "We started the design for our project with naming and declaring all the functionality we wanted to implement. Also, with the declaration of the potential user roles: guest, member, admin."
                    },
                    {
                    "subTitle": "ERD diagram",
                    "body": "The next step of the design process was to initialize the database with the entity types, relationship types, attributes, and cardinality and participation constraints on relationships."
                    },
                    {
                    "subTitle": "Database implementation",
                    "body": "After gradually tuning the potential tables and their relations, implementation was the next step. MSSQL was used for that. First, we created the tables without foreign keys and then the ones with constraints. Then, we populated with test data to see the database in action."
                    }
                 ],
                "image": {
                    "image_src": "erd.png",
                    "image_alt": "Entity Relation Diagram for the task portal"
                },
            },
            {
             "content_data": 3,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "We used Node.js to develop our back-end and express to handle the routing for the endpoints."
                    },
                    {
                    "subTitle": "Logic tier",
                    "body": "It was responsible to handle the requests from the client side and query the database to prepare the responses for them. To structure the back-end MVC-ish design pattern was used (omitting the View part)."
                    },
                    {
                    "subTitle": "Endpoints",
                    "body": "We followed the RESTful standards in our path naming also. For the desired methods (GET, POST, PUT, PATCH, DELETE) we retrieved the applicable data, validated it with JOI, and parsed into JSON to be ready to exchange it."
                    },
                 ],
                "image": 
                    {
                    "image_src": "tp-index.png",
                    "image_alt": "Index.js file for the Task portal"
                    },
            },
            {
             "content_data": 4,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "To handle the who is who and later the authorization question, we implemented a log-in and sign-up function in our project."
                    },
                    {
                    "subTitle": "Process",
                    "body": "In our database, every person had a unique email and a password. We used those as credentials. Whenever a request arrived from the client we compared the email and the hashed version of the password to the ones in the database to grant access to move forward."
                    },
                    {
                    "subTitle": "JSON Web Token",
                    "body": "If it was successful we generated a token based on the client's request header (where we put the email, id, and user role of the user) and attached it to the response header. Serving as a unique identifier we used to check with middlewares if the user has to right to access a certain part of the portal (delete, post, apply)."
                    },
                    
                    
                 ],
                "image": {
                    "image_src": "tp-auth.png",
                    "image_alt": "Router for the login request"
                },
            },
            {
             "content_data": 5,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "To make the interface follow the interaction with the user we used vanilla JavaScript to prepare a single-page web application."
                    },
                    {
                    "subTitle": "",
                    "body": "On the front-end, we prepared the markups dynamically with template literate for the user to serve their intentions. Here we prepared the data for the exchange with the logic tier and the database. Also, here we were able to indicate and show to the user any occurring errors or status codes."
                    },
                   
                 ],
                "image": {
                    "image_src": "tp-update.png",
                    "image_alt": "Uploading a task with an error"
                },
            },
            {
                "content_data": 6,
                "texts": [
                       {
                       "subTitle": "",
                       "body": "We managed to design a wab based application which can handle login, signup and all the four CRUD methods."
                       },
                       {
                       "subTitle": "Pitfalls",
                       "body": "We did not use any modern JS framework which really burden our job to make the interface follow the possible interavtions. Also, our pool management was not the best so it weaken the connection to the database."
                       }
                    ],
                "image": {
                       "image_src": "tp-delete.png",
                       "image_alt": "Deleting a task on the Task Portal"
                   },
               },
        ]
      
    },

    /* *************************************** */
    // NASA APOD data
    // NASA APOD preview
    {   "preview": {
            "case_box": 2,
            "preview_title": "NASA APOD",
            "preview_images": [
                {
                    "img_src": "apod-home.png",
                    "img_alt": "NASA APOD landing page",
                    "img_class": "case-img case-img-desktop"

                },
                {
                    "img_src": "apod-home2.png",
                    "img_alt": "NASA APOD today's APOD",
                    "img_class": "case-img case-img-desktop-2"

                },
            ],
            "preview_links": [
                {
                    "link_name": "Front-end solution",
                    "link": "https://github.com/HollosT/Nasa-APOD"
                },
                {
                    "link_name": "Live demo",
                    "link": "https://mmd.ucn.dk/class/MDE-CSD-S21/10407745/nasa-apod/#/"
                },  
            ],
            "preview_list": [
                {
                    "list_item": "Single-page app",
                    "list_iconClass": "fa-sharp fa-solid fa-desktop"
                },
                {
                    "list_item": "Vue Composition API",
                    "list_iconClass": "fa-brands fa-vuejs"
                },
            ],
            "preview_btn": {
                "btn_text": "Read more",
                "data_btn": 2
            }
        },
        // NASA APOD collection
        "case_title": "NASA APOD",
        "tabs": [
            {
                "tab_content": "Challenge",
                "tab_data": 1
            },
            {
                "tab_content": "Structure",
                "tab_data": 2
            },
            {
                "tab_content": "Composition API",
                "tab_data": 3
            },
            {
                "tab_content": "Functionality",
                "tab_data": 4
            },
            {
                "tab_content": "Conclusion",
                "tab_data": 5
            },
           
        ],

        // NASA APOD content collection
        "content": [
            {
             "content_data": 1,
             "texts": [
                    {
                    "subTitle": "Problem",
                    "body": "NASA offers a great resource for pictures taken from outer space. I decided to implement a little web application where people, can see today's or month's APOD. Or they can set the desired range of time from they want to see images."
                    },
                    {
                    "subTitle": "Solution",
                    "body": "Creating a web application with Vue3 and focusing on the usage of Composition API."
                    },
                    {
                    "subTitle": "My role in the team",
                    "body": "Individual project"
                    },
                 ],
             "image": {
                    "image_src": "apod-today.png",
                    "image_alt": "NASA APOD today, detailed version"
                },
            },
            {
             "content_data": 2,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "I tried to follow the official design guide provided by Vue!"
                    },
                    {
                    "subTitle": "File structure",
                    "body": "My App.vue file acts as the root element which mounts the HTML page. For the stand-alone pages, I used the views folder. For the building components, I created the components folder."
                    },
                    {
                    "subTitle": "",
                    "body": "For reoccurring elements, I created a UI folder and a layouts folder. To be reusable with the JavaScript functions I created a composable folder."
                    },
                    {
                    "subTitle": "Naming convention",
                    "body": "For the UI files, I used the Base prefix. For the layouts files, I used the prefix. And overall, I was trying to be descriptive with the name of the files."
                    },
                 ],
                "image": {
                    "image_src": "apod-structure.png",
                    "image_alt": "NASA APOD file structure"
                },
            },
            {
             "content_data": 3,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "To experiment with the new setup, I decided to only use Composition API instead of Options API."
                    },
                    {
                    "subTitle": "",
                    "body": "Composition API can help to be clean and efficient with the logic, and separate composable functions into reusable blocks."
                    },
                    {
                    "subTitle": "The usage",
                    "body": "WIth the usage of Composition API I have used refs, route, router also some of the lifecycle Hooks. And I could use also props, emitting or binding. "
                    }
                 ],
                "image": {
                    "image_src": "apod-comp.png",
                    "image_alt": "Example of the usage of Composition API in code"
                },
            },
            {
             "content_data": 4,
                "texts": [
                    {
                    "subTitle": "Retrieve current month's or today's APOD",
                    "body": "The web app automatically takes the current month's first day and the current day and fetches for each applicable APOD."
                    },
                    {
                    "subTitle": "Select specific period of time",
                    "body": "The user can set in a little form from what period they want to retrieve APODs. For the logic, I used reusable JavaScript composable."
                    },
                    {
                    "subTitle": "Error handling",
                    "body": "I deiced to do a little bit of error prevention with the Composition API. The app inspects whether the selected dates are not in the future or the end date is not sooner than the start date."
                    }
                    
                 ],
                "image": {
                    "image_src": "apod-select.png",
                    "image_alt": "NASA APOD Selecting a period of time"
                },
            },
            {
             "content_data": 5,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "This small project is my first fully implemented front-end solution by Vue. It is simple and a little bit lumpy, but I managed to make the interface follow the interactions. I was able to use the Vue router as well."
                    },
                    {
                    "subTitle": "Pitfalls",
                    "body": "There is a lot to polish on the project. The structure and the usage of components are not always coherent. Also, the data flow between the views and components could be better. The usage of the Composition API is still very primitive. Also, I did not do more styling besides the bare minimum."
                    }
                 ],
                "image": {
                    "image_src": "apod-home.png",
                    "image_alt": "NASA this month APOD"
                },
            }
        ]
      
    },
    /* *************************************** */
    // Kulia data
    // Kulia preview
    {   "preview": {
            "case_box": 3,
            "preview_title": "Kulia",
            "preview_images": [
                {
                    "img_src": "kulia-home.png",
                    "img_alt": "Kulia home page | Food truck",
                    "img_class": "case-img case-img-desktop"

                },
                {
                    "img_src": "kulia-home-mobile.png",
                    "img_alt": "Kulia mobile home page | Food truck",
                    "img_class": "case-img case-img-mobile"

                },
            ],
            "preview_links": [
                {
                    "link_name": "Front-end solution",
                    "link": "https://github.com/HollosT/Kulia--new"
                },
                {
                    "link_name": "Live demo",
                    "link": "https://mmd.ucn.dk/class/MDE-CSD-S21/10407750/Sem2/Kulia/"
                },  
            ],
            "preview_list": [
                {
                    "list_item": "Full design process",
                    "list_iconClass": "fa-regular fa-lightbulb"
                },
                {
                    "list_item": "Mobile first approach",
                    "list_iconClass": "fa-solid fa-mobile"
                },
            ],
            "preview_btn": {
                "btn_text": "Read more",
                "data_btn": 3
            }
        },
        // Kulia tab collection
        "case_title": "Kulia",
        "tabs": [
            {
                "tab_content": "Challenge",
                "tab_data": 1
            },
            {
                "tab_content": "Research",
                "tab_data": 2
            },
            {
                "tab_content": "Structure",
                "tab_data": 3
            },
            {
                "tab_content": "Mobile first",
                "tab_data": 4
            },
            {
                "tab_content": "Realisation",
                "tab_data": 5
            },
            {
                "tab_content": "Conclusion",
                "tab_data": 6
            },
        ],

        // Kulia content collection
        "content": [
            {
             "content_data": 1,
             "texts": [
                    {
                    "subTitle": "Problem",
                    "body": "Kulia is a local food truck in Aalborg. They offer sandwiches based on their heritage from Argentine. Kulia did not have a website where they could represent their uniqueness and their vibe in an organized way."
                    },
                    {
                    "subTitle": "Solution",
                    "body": "Create a website based on UX research that can introduce Kulia and its vision to the public. Also, answer all the possible questions that can occur."
                    },
                    {
                    "subTitle": "My role in the team",
                    "body": "UX Researcher, UI Designer"
                    },
                 ],
             "image": {
                    "image_src": "kulia-menu.png",
                    "image_alt": "Kulia menu page | Food truck"
                },
            },
            {
             "content_data": 2,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "We started this project with a meeting with the client where we received his vision and ideas also a creative brief upon which we could build upon."
                    },
                    {
                    "subTitle": "Quantitative research",
                    "body": "We gathered statistics regarding the who, where, and why would visit a food truck. And to give a foundation to our user categorization."
                    },
                    {
                    "subTitle": "Qualitative research",
                    "body": "To establish our subjects for the project we did user categorization. Then we conducted semi-structured interviews with them to analyse them and detect common themes and insights. We monitored the competitor's solution as well."
                    },
                    
                 ],
                "image": {
                    "image_src": "kulia-analysis.png",
                    "image_alt": "Kulia research analysis"
                },
            },
            {
             "content_data": 3,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "Based on the gathered information from the client and from the research, we could move forward with the structure of the website."
                    },
                    {
                    "subTitle": "Affinity diagram",
                    "body": "To establish the IA we used an affinity diagram where we had written down every bit of potential content on post-sticks and organized them in clusters."
                    },
                    {
                    "subTitle": "Sitemap",
                    "body": "Organising those clusters and labeling those we established the sitemap of our product. We established the navigation design, as well."
                    },
                 ],
                "image": {
                    "image_src": "kulia-ia.png",
                    "image_alt": "Affinity diagram and Sitemap for the Kulia website"
                },
            },
            {
             "content_data": 4,
                "texts": [
                    {
                    "subTitle": "Mobile first",
                    "body": "We found out from the research that in a food truck-related situation the vast majority of the user would be only able to interact with the website on their mobile. Probably their visit to a food truck would be a spontaneous choice because many of them is a tourist or just wandering in the city."
                    },
                    {
                    "subTitle": "",
                    "body": "We decided to do a mobile-first approach. And just then move towards bigger devices."
                    },
                    {
                    "subTitle": "Design",
                    "body": "We started with paper sketches and then wireframing and then started to produce more detailed mockups for the mobile view. We tried to collect feedback from potential users and implement the relevant insights in our design. Resulting in an iterative process."
                    }
                    
                 ],
                "image": {
                    "image_src": "kulia-design.png",
                    "image_alt": "Prototype steps for mobile interface for Kulia"
                },
            },
            {
             "content_data": 5,
                "texts": [
                    {
                    "subTitle": "",
                    "body": "We tried to create a website for Kulia where they could update their menu and add possible events to their calendar. We wanted to reach this with a fully responsive design."
                    },
                    {
                    "subTitle": "APIs",
                    "body": "We created a headless CMS to enable the owner to add items to their menus. They could upload SVG, ingredients, descriptions, and prices. Also, we created an event feature, where they could upload potential happenings they might attend or arrange. We connected the headless CMS and the front-end solutions with API calls."
                    },
                    {
                    "subTitle": "Responsiveness",
                    "body": "We designed and implemented our product for mobile, tablet, and desktop screen sizes. Using relative units, media queries. Grids and flex boxes to easily adjust the layout."
                    },
                 ],
                "image": {
                    "image_src": "kulia-flowchart.png",
                    "image_alt": "Flowchart for the realisation of the Kulia website."
                },
            },
            {
                "content_data": 6,
                "texts": [
                       {
                       "subTitle": "",
                       "body": "We managed to design a website which combines the user and the client needs."
                       },
                       {
                       "subTitle": "",
                       "body": "We focused on to have a solid and structured website for all kind of devices."
                       },
                       {
                       "subTitle": "",
                       "body": "There is still room for improvement, in terms of adding more complexity and functionality to the website."
                       },
                    ],
                "image": {
                       "image_src": "kulia-menu2.png",
                       "image_alt": "Kulia desktop menu page"
                   },
               },
        ]
      
    },
];

export default caseCollection;