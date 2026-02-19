# Todo Application

# Todo Application

This project is a full-featured Todo application built with React. It demonstrates modern frontend architecture, authentication flows, protected routing, server-state management, and clean UI patterns.

The application allows users to register, log in, and manage their personal tasks through a responsive and user-friendly interface. It follows a feature-based folder structure to improve scalability and maintainability.

The project is designed to showcase production-ready React development practices.

## Features

### Core Functionality

- **Create, Read, Update, Delete (CRUD)** operations for todos
- **Authentication system** with login and registration
- **Protected routes** for authenticated users
- **Responsive design** with mobile-first approach
- **Modern UI(ShadCN)** with Tailwind CSS and custom components

### Technical Features

- **React 19+** for fast development and optimized builds
- **React Router v6** for modern routing and navigation
- **React 19+** for fast development and optimized builds
- **Custom Error Boundaries** for improved user experience
- **Tailwind CSS** for styling with custom design system
- **Responsive design** that works on all devices
- **Production ready** with Vercel deployment

## Architecture

### File Structure

```
src/
├── api/
├── app/
│   └── router.jsx                # Application routing configuration
├── components/
│   ├── shared/                   # Layout and Navbar components
│   ├── ui/                       # Reusable UI components
│   └── error-boundary.jsx        # Global error boundary
├── features/
│   ├── auth/
│   │   ├── pages/                # Login & Register pages
│   │   ├── context/              # Authentication context
│   │   └── services/             # Auth API logic
│   └── todoTasks/
│       ├── todos/                # Todo list & form
│       ├── details/              # Todo details page
│       └── services/             # Todo API logic
├── hooks/                        # Custom hooks
├── lib/                     	# Axios instance & API config
├── pages/                       # Protected route logic
├── main.jsx                      # Application entry point
└── index.css ```

### Key Technologies

- **React 19+**
- **API Intergration using axios with Tanstack Query** 
- **Tailwind CSS**
- **ShadCN UI** 
- **Lucide React Icons** 
- **React Hook Form** 
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd todo-app
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install

   # Using bun
   bun install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file
   cp .env.example .env.local
   ```

4. **Run the development server**

   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev

   # Using bun
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173) to see the application.

## UI Components

### Todo List

- Displays all todos with status indicators
- Search and filter controls
- Pagination controls
- Edit and delete actions

### Todo Detail

- Shows complete todo information
- Edit and delete buttons
- Responsive layout

### Forms

- Create new todo form
- Edit existing todo form
- Form validation with zod and error handling

### Delete Confirmation

- Confirmation dialog for destructive actions
- Clear warning about permanent deletion

### Authentication Pages
- Login form
- Register form

## Development

### Code Style

- **ESLint** for code quality
- **Prettier** for code formatting
- **Tailwind CSS** for styling

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

