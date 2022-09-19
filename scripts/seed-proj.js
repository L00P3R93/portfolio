require('dotenv').config()

const mongoose = require('mongoose')
const database = require('../models')

const MONGODB_URI =
    process.env.MONGODB_URI_ADMIN || 'mongodb://localhost/dev_portfolio_db'

const projects = [
    {
        title: 'Raffik',
        url: 'https://github.com/L00P3R93/raffik',
        repo: 'https://github.com/L00P3R93/raffik',
        imagePath: '/static/media/word-guess-sprite.0d6088ba.png',
        programmingLangs: ['Python'],
        technologiesUsed: ['Python', 'TOR'],
        completionDate: new Date(2022, 7, 6),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Daraja MPESA',
        url: 'https://github.com/L00P3R93/daraja-mpesa',
        repo: 'https://github.com/L00P3R93/daraja-mpesa',
        imagePath: '/static/media/crystals-collector-sprite.b539ecda.png',
        programmingLangs: ['PHP'],
        technologiesUsed: ['PHP', 'API'],
        completionDate: new Date(2022, 6, 8),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Sntaks',
        url: 'https://github.com/L00P3R93/sntaks',
        repo: 'https://github.com/L00P3R93/sntaks',
        imagePath: '/static/media/woman-trivia-sprite.7b8913ea.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
        technologiesUsed: ['jQuery'],
        completionDate: new Date(2022, 6, 2),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Uzabot',
        url: 'https://github.com/L00P3R93/uzabot',
        repo: 'https://github.com/L00P3R93/uzabot',
        imagePath: '/static/media/gif-tastic-sprite.11af8482.png',
        programmingLangs: ['Python'],
        technologiesUsed: ['API', 'Python'],
        completionDate: new Date(2022, 6, 1),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Fabot Telegram',
        url: 'https://github.com/L00P3R93/fabot-telegram',
        repo: 'https://github.com/L00P3R93/fabot-telegram',
        imagePath: '/static/media/rps-multiplayer-sprite.b5c891b2.png',
        programmingLangs: ['Python'],
        technologiesUsed: ['API', 'Python'],
        completionDate: new Date(2022, 5, 31),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'MERN Social Media',
        url: 'https://github.com/L00P3R93/mern-social-media',
        repo: 'https://github.com/L00P3R93/mern-social-media',
        imagePath: '/static/media/friendfinder-sprite.4e7b1449.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
        technologiesUsed: ['Express', 'MongoDB', 'Node', 'jQuery', 'Material UI'],
        completionDate: new Date(2022, 3, 15),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'MERN Skeleton',
        url: 'https://github.com/L00P3R93/mern-skeleton',
        repo: 'https://github.com/L00P3R93/mern-skeleton',
        imagePath: '/static/media/newsscraper-sprite.bf2b5152.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
        technologiesUsed: ['MongoDB', 'Express', 'Handlebars', 'Node', 'Material UI'],
        completionDate: new Date(2022, 3, 11),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Maktaba',
        url: 'https://github.com/L00P3R93/maktaba_o',
        repo: 'https://github.com/L00P3R93/maktaba_o',
        imagePath: '/static/media/pokeclick-game-sprite.c3372381.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)', 'PHP'],
        technologiesUsed: ['JQuery', 'MySQL', 'Bootstrap'],
        completionDate: new Date(2020, 9, 26),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'P_API',
        url: 'https://booksearch.christopherzenner.dev/',
        repo: 'https://github.com/L00P3R93/p_api',
        imagePath: '/static/media/google-books-search-sprite.23653045.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)', 'PHP'],
        technologiesUsed: ['API', 'MySQL', 'JWT', 'jQuery', 'Bootstrap'],
        completionDate: new Date(2021, 1, 19),
        projectType: 'individual',
        starred: false,
        active: true
    },
    {
        title: 'Fabots',
        url: 'https://github.com/L00P3R93/fabots',
        repo: 'https://github.com/L00P3R93/fabots',
        imagePath: '/static/media/cookquik-sprite.f94392de.png',
        programmingLangs: ['HTML', 'CSS', 'JavaScript (ES6)'],
        technologiesUsed: ['API', 'Webpack', 'jQuery'],
        completionDate: new Date(2022, 1, 21),
        projectType: 'group',
        starred: false,
        active: true
    },
    {
        title: 'Loc8',
        url: 'https://github.com/L00P3R93/loc8',
        repo: 'https://github.com/L00P3R93/loc8',
        imagePath: '/static/media/listenhear-sprite.189a6e3c.png',
        programmingLangs: ['Java'],
        technologiesUsed: ['Gradle', 'Android Studio'],
        completionDate: new Date(2021, 7, 17),
        projectType: 'group',
        starred: false,
        active: true
    },
    {
        title: 'Chuka Loc8',
        url: 'https://github.com/L00P3R93/chuka_loc8',
        repo: 'https://github.com/L00P3R93/chuka_loc8',
        imagePath: '/static/media/listenhear-sprite.189a6e3c.png',
        programmingLangs: ['Java'],
        technologiesUsed: ['Gradle', 'Android Studio'],
        completionDate: new Date(2021, 7, 17),
        projectType: 'group',
        starred: false,
        active: true
    }
]

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection
    .on('error', console.error.bind(
        console, 'An error was encountered connection to the database.'
    ))
    .once('connected', () => {
        console.log('Connection to the database open ...')
    })

database.Project
    .deleteMany({})
    .then(() => database.Project.collection.insertMany(projects))
    .then(data => {
        console.log(`${data.result.n} documents inserted into the database!`)
        mongoose.connection.close(() => {
            console.log('Connection to the database closed.')
            process.exit(0)
        })
    })
    .catch(err => {
        mongoose.connection.close(() => {
            console.log('Connection to the database closed.')
        })

        console.error(err.stack)

        process.exit(1)
    })