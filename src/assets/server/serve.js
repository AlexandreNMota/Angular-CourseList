const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES =  [
  {
      id: 1,
      nome: 'Angular: CLI',
      imageurl: '/assets/images/cli.png',
      price: 12.99,
      code: 'XLF-1212',
      duration: 120,
      rating: 3
  },
  {
      id: 2,
      nome: 'Angular: Forms',
      imageurl: '/assets/images/forms.png',
      price: 24.99,
      code: 'DWQ-3412',
      duration: 80,
      rating: 3.5,
  },
  {
      id: 3,
      nome: 'Angular: HTTP',
      imageurl: '/assets/images/http.png',
      price: 36.99,
      code: 'QPL-0913',
      duration: 80,
      rating: 4.0,
  },
  {
      id: 4,
      nome: 'Angular: Router',
      imageurl: '/assets/images/router.png',
      price: 46.99,
      code: 'OHP-1095',
      duration: 80,
      rating: 4.5
  },
  {
      id: 5,
      nome: 'Angular: Animations',
      imageurl: '/assets/images/animations.png',
      price: 86.99,
      code: 'PWY-9381',
      duration: 80,
      rating: 5
  }
];