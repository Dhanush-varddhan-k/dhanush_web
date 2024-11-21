import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/cycle_image.png';
import Work2 from './assets/ecommerce.png';
import Work3 from './assets/ultra_sonic.png';
import work4 from './assets/flowchart.jpeg';







import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import no from './assets/node2.png'

import ht from './assets/html.png'
import js from './assets/javascript.png'
import cs from './assets/css.png'
import jq from './assets/jquery.png'
import ag from './assets/angular.png'
import r from './assets/react2.png'
import cv from './assets/opencv.png'
import tw from './assets/TailwindCSS.png'
import mn from './assets/mongodbicon.png'
import mys from './assets/mysql.png'
import pos from './assets/postman3.png'
import git from './assets/github.png'
import fig from './assets/figma2.png'
import c from './assets/c++.png'
export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '90',
    image:ht,
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
    image:js,
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
    image:cs,
  },

  {
    id: 4,
    title: 'Node',
    percentage: '80',
    image:no,
  },

  // {
  //   id: 5,
  //   title: 'Wordpress',
  //   percentage: '95',
  //   image:wp,
  // },

  {
    id: 6,
    title: 'Jquery',
    percentage: '90',
    image:jq,
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '90',
    image:ag,
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
    image:r,
  },
  {
    id: 9,
    title: 'Open CV',
    percentage: '60',
    image:cv,
  },
  {
    id: 10,
    title: 'Tailwind css',
    percentage: '80',
    image:tw,
  },
  {
    id: 11,
    title: 'Mongo DB',
    percentage: '80',
    image:mn,
  },
  {
    id: 12,
    title: 'MySQL',
    percentage: '90',
    image:mys,
  },
  {
    id: 13,
    title: 'Postman',
    percentage: '90',
    image:pos,
  },
  {
    id: 14,
    title: 'Git/Github',
    percentage: '90',
    image:git,
  },
  {
    id: 15,
    title: 'Figma',
    percentage: '90',
    image:fig,
  },
  {
    id: 16,
    title: 'C, C++',
    percentage: '90',
    image:c,
  },
  // {
  //   id: 17,
  //   title: 'Python',
  //   percentage: '90',
  //   image:
  // },
];


export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dhanush',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'varddhan',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 6381562738',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'dhanush21110456@snuchennai.edu.in',
  },

  // {
  //   id: 9,
  //   title: 'Skype : ',
  //   description: 'steve.milner',
  // },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Telugu,Tamil, English, Hindi',
  },
];

export const stats = [
  {
    id: 1,
    no: 'Bachelor`s degree',
    title: 'Shiv Nadar University Chennai',
  },

  // {
  //   id: 2,
  //   no: '97+',
  //   title: 'Completed <br /> Projects',
  // },

  // {
  //   id: 3,
  //   no: '81+',
  //   title: 'Happy <br /> Customers',
  // },

  
];

export const resume = [
  
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Cycle management',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Cycle Management',
      },
      // {
      //   icon: <FiUser />,
      //   title: 'Client : ',
      //   desc: 'Dribble',
      // },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter (Dart),  ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/saikrishy3808u3qr3pur3q/Cycle-Management-Sysytem.git',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Ecommerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Ecommerce Website',
      },
    
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'MongoDB, Express js, React js, Node js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Dhanush-varddhan-k/MERN_ECOMMERCE.git',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Gesture controller',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Gesture controller',
      },
     
    
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Dhanush-varddhan-k/gesture-control-using-ardiuno-uno.git',
      },
    ],
  },


  {
    id: 4,
    img: Work4,
    title: 'Robust Product Management System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Product management system',
      },
     
    
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://github.com/Dhanush-varddhan-k/zocket.git',
      },
    ],
  },

];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
