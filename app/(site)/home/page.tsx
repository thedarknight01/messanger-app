


// pages/index.tsx
// pages/index.tsx

import React from 'react';
import { Button, Typography, Box, Grid, Paper, useTheme } from '@mui/material';
import Head from 'next/head';
import { Chat, Group, Security, HowToReg, People, Send } from '@mui/icons-material'; // Material Icons

const Home: React.FC = () => {
//   const theme = useTheme();

  return (
    <div className="bg-gray-900 text-white">
      <Head>
        <title>Messenger Platform</title>
        <meta name="description" content="Welcome to our messenger platform. Chat seamlessly, collaborate with ease." />
      </Head>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-center items-center text-white">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjcxMTc1NzM0&ixlib=rb-1.2.1&q=80&w=1600"
            alt="Background Image"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Main Content */}
        <Box textAlign="center" className="relative z-10 max-w-3xl mx-auto p-8">
          <Typography variant="h2" component="h1" className="font-bold text-6xl leading-tight text-blue-300">
            Connect, Chat, Collaborate
          </Typography>

          <Typography variant="subtitle1" className="mt-6 text-2xl text-gray-200 max-w-xl mx-auto">
            Experience seamless communication and real-time collaboration with our cutting-edge messenger platform.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            className="mt-8 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-lg rounded-lg shadow-lg"
            href="/home"
          >
            Get Started
          </Button>
        </Box>
      </div>

      {/* Features Section */}
      <Box className="my-28 text-center max-w-7xl mx-auto px-6">
        <Typography variant="h3" className="font-bold text-5xl text-white-400">
          Key Features
        </Typography>
        <Typography variant="subtitle1" className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Our platform offers a wide range of features that are designed to enhance your communication experience.
        </Typography>
        <Grid container spacing={6} className="mt-12">
          {[
            {
              title: 'Real-Time Messaging',
              description: 'Send and receive messages instantly with zero latency.',
              icon: <Chat fontSize="large" className="text-blue-500" />,
            },
            {
              title: 'Group Collaboration',
              description: 'Create groups, share files, and collaborate effortlessly.',
              icon: <Group fontSize="large" className="text-blue-500" />,
            },
            {
              title: 'Secure Communication',
              description: 'Your conversations are protected with end-to-end encryption.',
              icon: <Security fontSize="large" className="text-blue-500" />,
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-8 bg-gray-800 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div className="bg-blue-900 rounded-full p-4 mb-4">
                    {feature.icon}
                  </div>
                  <Typography variant="h5" className="font-semibold text-blue-300">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" className="mt-3 text-gray-300 text-center">
                    {feature.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* How It Works Section */}
      <Box className="my-28 text-center bg-gray-800 py-16">
        <Typography variant="h3" className="font-bold text-5xl text-white-400">
          How It Works
        </Typography>
        <Typography variant="subtitle1" className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Get started in three simple steps and take your team communication to the next level.
        </Typography>
        <Grid container spacing={6} className="mt-12 max-w-5xl mx-auto">
          {[
            {
              title: 'Sign Up',
              description: 'Create a free account to start using the platform.',
              icon: <HowToReg fontSize="large" className="text-blue-500" />,
            },
            {
              title: 'Invite Your Team',
              description: 'Bring your team members on board to collaborate.',
              icon: <People fontSize="large" className="text-blue-500" />,
            },
            {
              title: 'Start Messaging',
              description: 'Begin communicating seamlessly across all devices.',
              icon: <Send fontSize="large" className="text-blue-500" />,
            },
          ].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper className="p-8 bg-gray-700 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <Box display="flex" flexDirection="column" alignItems="center">
                  <div className="bg-blue-900 rounded-full p-4 mb-4">
                    {step.icon}
                  </div>
                  <Typography variant="h5" className="font-semibold text-blue-300">
                    Step {index + 1}: {step.title}
                  </Typography>
                  <Typography variant="body1" className="mt-3 text-gray-300 text-center">
                    {step.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box className="py-10 text-center bg-gray-900">
        <Typography variant="body2" className="text-gray-500">
          © {new Date().getFullYear()} Messenger Platform. All rights reserved.
        </Typography>
        <Box className="mt-4 space-x-4">
          <Button href="#features" className="text-gray-400 hover:text-white">
            Features
          </Button>
          <Button href="#how-it-works" className="text-gray-400 hover:text-white">
            How It Works
          </Button>
          <Button href="#contact" className="text-gray-400 hover:text-white">
            Contact Us
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
