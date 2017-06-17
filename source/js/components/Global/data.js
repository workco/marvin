export const skills = [
  {
    heading: 'Front End',
    techs: ['JavaScript', 'TypeScript', 'CoffeeScript', 'React', 'Redux', 'Angular', 'EJS', 'Angular2', 'Backbone', 'HTML', 'CSS', 'SASS', 'D3', 'jQuery'],
  },
  {
    heading: 'Testing',
    techs: ['Mocha', 'Chai', 'Enzyme'],
  },
  {
    heading: 'Deployment',
    techs: ['Amazon Web Services', 'Heroku', 'DigitalOcean'],
  },
  {
    heading: 'Optimization',
    techs: ['Docker-Toolbox', 'Grunt', 'Gulp', 'TravisCI', 'Webpack2'],
  },
  {
    heading: 'API',
    techs: ['Google', 'Facebook', 'Twitter', 'Passport', 'Auth0', 'Watson', 'Socket.IO', 'Twilio', 'Firebase', 'Cloudinary', 'MailChimp'],
  },
  {
    heading: 'Back End',
    techs: ['PostgreSQL', 'MySQL', 'SQLite3', 'MongoDb', 'Mongoose', 'Sequelize', 'Node', 'Express', 'BCrypt'],
  },
];

export const projects = [
  {
    title: 'New Reactions',
    position: 'Software Engineer',
    github: '',
    link: 'http://newreactions.io',
    description: 'A cross-platform application that allows users to connect services and devices together automating simple day-to-day activities',
    features: [
      'Implemented custom server control and SOA using Docker-Compose, SQS queues, running on AWS EC2',
      'Optimized the front-end development process by using React’s isomorphic rendering',
      'Created scalable API services with Nodal and managed CRUD operations from Postgres',
      'Integrated Twilio for an inbound/outbound text-messaging service',
    ],
  },
  {
    title: 'Worldwide News',
    position: 'Software Engineer',
    github: '',
    link: '',
    description: 'A news reader app offering perspectives from around the world on current events.',
    features: [
      'A news reader app offering perspectives from around the world on current events.',
      'Integrated Facebook chat messenger to work concurrently with the React state behaviors',
      'Augmented existing codebase with Watson API to analyze and depict tone',
      'Utilized Redux to  return a new app state each time an action is dispatched for faster rendering of data-changing static pages',
    ],
  },
  {
    title: 'Watson Tone Analyzer',
    position: 'Software Engineer',
    github: '',
    link: '',
    description: 'Analyzes text and returns visual representations based on sentiment analysis categories',
    features: [
      'Visualized result sentiment analysis with D3',
      'Categorized sentiment into social tendencies, language, style, and emotion utilizing IBM Watson',
      'Utilized Reacts small composable components to allow for separation of concerns and to deliver a strong UI/UX',
    ],
  },
];
