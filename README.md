Todo App
Project Description

This project is a full-featured Todo application built with React and Vite. It demonstrates modern frontend architecture, authentication flows, protected routing, server-state management, and clean UI patterns.

The application allows users to register, log in, and manage their personal tasks through a responsive and user-friendly interface. It follows a feature-based folder structure to improve scalability and maintainability.

The project is designed to showcase production-ready React development practices.

Features

User registration and login

Protected routes (only authenticated users can access todos)

Add new todo items

Edit existing todos in a modal dialog

Delete todos

Search todos by title

Filter todos by completion status

Client-side pagination

Form validation using schema-based validation

Custom error boundary for improved user experience

Responsive layout using Tailwind CSS

Clean modular architecture

Screenshots / Key Features

Add your real screenshots inside a screenshots/ folder and reference them like below.

Authentication (Login & Register)




Todo List with Search and Filters

Add / Edit Todo Modal

Optional: You can also include a GIF:

![App Demo](screenshots/demo.gif)


To create a GIF:

Use ScreenToGif (Windows)

Use Kap (Mac)

Use an online screen recorder

Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/todo-app.git
cd todo-app

2. Install dependencies
npm install

3. Create environment file

Create a .env file in the root directory:

VITE_API_URL=https://your-api-url.com

4. Start development server
npm run dev


The app will run on:

http://localhost:5173

Available Scripts

In the project directory, you can run:

npm run dev

Starts the development server using Vite.

npm run build

Builds the app for production to the dist folder.

npm run preview

Locally previews the production build.

npm run lint

Runs ESLint to check for code quality issues.

Technology Choices and Reasoning
React (with Vite)

React was chosen for its component-based architecture and ecosystem.
Vite was used for fast development startup and optimized production builds.

React Router v6

Used for client-side routing.
Provides nested routes, protected routes, and route-based error handling.

TanStack Query (React Query)

Used for server-state management instead of manually managing loading and error states.
Benefits:

Automatic caching

Background refetching

Mutation handling

Improved separation of server state and UI state

React Hook Form + Zod

React Hook Form was chosen for performant form handling with minimal re-renders.
Zod was used for schema validation to ensure predictable and reusable validation logic.

Tailwind CSS

Chosen for utility-first styling, faster development, and responsive design control.

shadcn/ui

Provides accessible, composable UI components built on top of Radix UI.
Improves design consistency and development speed.

Feature-Based Architecture

The project follows a feature-based folder structure:

features/
  auth/
  todoTasks/
components/
routes/
services/


This improves:

Maintainability

Scalability

Separation of concerns

Known Issues

Pagination is client-side (not server-side).

No role-based access control.

No optimistic UI updates for mutations.

Error messages could be more user-friendly.

No automated testing implemented yet.

Future Improvements

Add optimistic updates using React Query

Implement server-side pagination

Add unit and integration tests (React Testing Library)

Add dark mode toggle

Add toast notifications for actions

Improve accessibility (ARIA improvements)

Add Docker support

Add CI/CD pipeline

Deployment

The application can be deployed to:

Vercel

Netlify

Render

Make sure to configure:

VITE_API_URL


as an environment variable in the deployment platform.

Author

Your Name
GitHub: https://github.com/your-username