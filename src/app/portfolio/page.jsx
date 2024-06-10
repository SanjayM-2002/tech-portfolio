'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'Threads Clone',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://github.com/SanjayM-2002/Threads/tree/master',
    points: [
      'Crafted a Full Stack Threads replica, mimicking the main functionality and design of the popular social media platform',
      'Utilized a tech stack comprising Node.js and Express.js for the backend, React.js for the frontend, and MongoDB for the database',
      'Implemented key features such as post creation, liking, replying, follow/unfollow, and a feed page',
      'Leveraged Cloudinary for image management, enabling users to share image in posts',
      'Employed Recoil for efficient frontend state management, ensuring optimal data flow and component synchronization',
    ],
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'Huddle',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://github.com/SanjayM-2002/ChessApp/tree/master',
    liveLink: 'https://huddle-nu-ochre.vercel.app/',
    points: [
      'Developed a video conferencing application, providing users with a seamless experience for conducting virtual meetings',
      'Utilized Next.js and TypeScript along with Shadcn and TailwindCSS for responsive and modern UI design',
      'Integrated Clerk for secure user authentication, supporting social sign-in and traditional email/password methods, while managing user access levels and permissions within the platform',
      'Leveraged GetStream SDK for video conferencing and implemented features like instant meetings, scheduled meetings, and viewing past meetings.',
    ],
  },
  {
    id: 3,
    color: 'from-blue-300 to-violet-300',
    title: 'B4Blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://github.com/SanjayM-2002/ChessApp/tree/master',
    liveLink: 'https://b4blog.vercel.app/',
    points: [
      'Crafted a modern blogging application designed to empower users to share their ideas and stories with the world',
      'Utilized Cloudflare Workers with Hono framework for a scalable and performant backend, and PostgreSQL for database',
      'Used React.js and TypeScript for a robust and efficient frontend, integrating Zod for validation and type inference to ensure data integrity and type safety',
      'Incorporated JWT for secure authentication and optimized database operations with Prisma connection pooling',
    ],
  },
  {
    id: 4,
    color: 'from-blue-300 to-violet-300',
    title: 'Chess App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://github.com/SanjayM-2002/ChessApp/tree/master',
    points: [
      'Created an online chess platform enabling real-time matches',
      'Utilized a tech stack including Node.js and TypeScript for the backend, WebSocket for real-time communication, and React.js for the frontend',
      'Implemented dynamic room creation for immediate gameplay when two users join',
      'Integrated chess.js library for game logic and move validation',
    ],
  },
  {
    id: 5,
    color: 'from-violet-300 to-purple-300',
    title: 'Chat App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
    link: 'https://github.com/SanjayM-2002/ChatApp',
    points: [
      'Developed a scalable real-time chat application',
      'Utilized Node.js and Next.js for the backend and frontend respectively, along with PostgreSQL for data storage',
      'Leveraged Redis to address scalability challenges, facilitating seamless communication between servers by routing incoming messages to a Redis Cluster and utilizing Socket.IO for real-time bidirectional event-based communication, ensuring uninterrupted user interactions across multiple server instances',
      'Integrated Kafka to effectively handle high message volume and user activity, utilizing its capabilities as a message broker to efficiently manage incoming messages, reducing strain on the database and ensuring optimal performance during peak usage periods',
    ],
  },
  {
    id: 6,
    color: 'from-purple-300 to-red-300',
    title: 'Doc App',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://github.com/SanjayM-2002/DocApp',
    points: [
      'Developed a web application for facilitating doctor appointments and user management',
      'Utilized Node.js with Express.js for the backend, React.js for the frontend, and MongoDB for the database',
      'Key features include distinct roles for users and doctors, where doctors can apply for verification by admins',
      'Users can book appointments with verified doctors',
      'Utilized Redux in the frontend for efficient state management and data flow control',
    ],
  },
  {
    id: 7,
    color: 'from-purple-300 to-red-300',
    title: 'Peer Connect',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: 'https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: 'https://github.com/SanjayM-2002/PeerConnect',
    points: [
      'Developed a real-time communication platform enabling direct peer-to-peer video calls',
      'Employed a tech stack comprising Node.js and Express.js for the backend server, along with Socket.io for efficient signalling, and React.js for frontend',
      "Utilized WebRTC to enable direct peer-to-peer communication between users' web browsers, ensuring low-latency and high-quality video and audio streaming",
      'Implemented dynamic room creation functionality, allowing users to join rooms and be matched with others for one-on-one video calls',
    ],
  },
];

const keyWords = [
  'React.js',
  'React Native',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'Express.js',
  'Cloudinary',
  'Redux',
  'Recoil',
  'MongoDB',
  'PostgreSQL',
  'WebSocket',
  'Socket.io',
  'WebRTC',
  'Redis',
  'Kafka',
  'Clerk',
  'Shadcn',
  'TailwindCSS',
  'GetStream',
  'SDK',
  'Cloudflare',
  'Workers',
  'Hono',
  'Prisma',
  'Zod',
  'JWT',
  'chess.js',
];

const PortfolioPage = () => {
  const ref = useRef();
  const router = useRouter();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-87%']);

  const highlightKeywords = (text) => {
    return text.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[,]/g, ''); // Remove punctuation
      if (keyWords.includes(cleanWord)) {
        return (
          <span key={index} className='font-bold italic text-red-500'>
            {word}{' '}
          </span>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <motion.div
      className='h-full'
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center'>
          My Works
        </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
            <div className='h-screen mt-2 w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
            {items.map((item) => (
              <div
                className={`h-screen pt-2 w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className='flex flex-col gap-8 text-white h-full justify-between'>
                  <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl flex-shrink-0'>
                    {item.title}
                  </h1>
                  <div className='flex flex-col items-center justify-center flex-grow'>
                    {item.points.map((point, index) => (
                      <div key={index}>
                        <p className='w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]'>
                          {highlightKeywords(point)}
                        </p>
                        <br />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-end flex-shrink-0'>
                    <button
                      className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'
                      onClick={() => window.open(item.link, '_blank')}
                    >
                      Source Code
                    </button>
                    {item.liveLink && (
                      <button
                        className='py-2 px-8 text-sm md:p-4 md:px-8 md:text-md lg:p-8 lg:px-16 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'
                        onClick={() => window.open(item.liveLink, '_blank')}
                      >
                        Live
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
        <h1 className='text-8xl'>Do you have a project?</h1>
        <div className='relative'>
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            viewBox='0 0 300 300'
            className='w-64 h-64 md:w-[500px] md:h-[500px] '
          >
            <defs>
              <path
                id='circlePath'
                d='M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 '
              />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circlePath' className='text-xl'>
                Full Stack Developer
              </textPath>
            </text>
          </motion.svg>
          <button
            className='w-28 h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center cursor-pointer'
            onClick={() => router.push('/contact')}
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
