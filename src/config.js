// config.js
module.exports = {
    github: {
        username: 'Hamas-ur-Rehman', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 10, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'hamasurrehman',
        twitter: 'Hamas_ur_Rehman',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: 'hamasurrehman',
        devto: '',
        website: 'https://hamas-ur-rehman.github.io/',
        phone: '',
        email: 'hamasurrehman@gmail.com'
    },
    skills: [
        'PHP',
        'Flutter',
        'JavaScript',
        'Dart',
        'Python',
        'Jquery',
        'MySQL',
        'HTML 5',
        'Git',
        'CSS',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'National Financial Literacy Program For Youth',
            position: 'Student Brand Ambassador',
            from: 'August 2021',
            to: 'Present'
        },
        { 
            company: 'YouTube',
            position: 'Content Creator',
            from: 'April 2017',
            to: 'Present'
        },
        { 
            company: 'Comido App',
            position: 'CTO',
            from: 'January 2021',
            to: ' July 2021'
        }
    ],
    education: [
        { 
            institution: 'University of Engineering and Technology Peshawar, Pakistan',
            degree: 'BS Computer Science',
            from: '2020',
            to: '2024'
        },
        { 
            institution: 'Saleem Nawaz Fazaia College Masroor Karachi, Pakistan',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2018',
            to: '2020',
        },
        { 
            institution: 'Saleem Nawaz Fazaia College Masroor Karachi, Pakistan',
            degree: 'Secondary School Certificate (SSC)',
            from: '2013',
            to: '2018'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'medium', // medium | dev.to
        username: 'hamasurrehman',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-RCKJR7SFY6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
