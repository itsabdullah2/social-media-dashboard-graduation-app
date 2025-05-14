# Social Media Dashboard Graduation App

## Description

This web application is a comprehensive social media dashboard designed to help users manage their social media activities efficiently. From the landing page, users can navigate to the dashboard where they can view statistics, schedule posts, manage activities, and customize their settings. The application provides a user-friendly interface with features such as dark mode, customizable themes, and real-time updates. Currently, static data is saved in Supabase and used until an API is provided.

## Features

- **Landing Page**: A welcoming introduction to the application, providing users with an overview of the features and benefits.
- **Dashboard**: A central hub for users to access various functionalities, including:
  - **Overview**: A summary of key metrics and activities, using static data for charts until an API is provided.
  - **Schedule**: Tools to schedule and manage posts across different social media platforms.
  - **Statistics**: Detailed analytics and insights into user engagement and performance. (In progress)
  - **Activities**: A log of recent activities and interactions. (In progress)
  - **Settings**: Options to customize user preferences, including theme settings and account management.

## Technologies and Tools

- **Frontend**: React.js, React Router for navigation, and Tailwind CSS for styling.
- **State Management**: Context API for managing application state.
- **Authentication**: Supabase for user authentication and management.
- **Database**: Supabase for data storage and retrieval.
- **Deployment**: Vercel for hosting the live demo.

## Live Demo

[View the live demo here](https://social-media-dashboard-graduation-app-2dab.vercel.app/)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
