# LMS (Land Management System)

A responsive React-based web application for property management and land records.

## Prerequisites

Before running this project, make sure you have the following installed on your computer:

- **Node.js** (version 16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Getting Started

### Step 1: Clone the Repository

On the new computer, open a terminal/command prompt and run:

```bash
git clone https://github.com/sidowxyz/slmss.git
```

Or if you prefer SSH:

```bash
git clone git@github.com:sidowxyz/slmss.git
```

### Step 2: Navigate to the Project Directory

```bash
cd slmss
```

### Step 3: Install Dependencies

Install all required packages:

```bash
npm install
```

This will install all dependencies listed in `package.json`, including:
- React
- Vite
- Tailwind CSS
- React Router
- Iconify React

### Step 4: Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

You should see output like:
```
  VITE v7.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
lms/
├── public/           # Static assets (images, icons, JSON data)
├── src/
│   ├── components/   # Reusable React components
│   ├── pages/        # Page components
│   ├── App.jsx       # Main app component with routing
│   └── main.jsx      # Entry point
├── package.json      # Dependencies and scripts
└── vite.config.js    # Vite configuration
```

## Features

- **Responsive Design**: Works on all screen sizes (mobile, tablet, desktop)
- **Property Listings**: Browse and search properties
- **Contact Form**: Get in touch with support
- **About Page**: Learn about the system
- **Modern UI**: Built with Tailwind CSS and React

## Technologies Used

- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Iconify React

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port. Check the terminal output for the correct URL.

### Dependencies Installation Issues
If you encounter issues installing dependencies:
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Make sure you have the latest version of Node.js

### Build Errors
If you get build errors:
- Make sure all dependencies are installed: `npm install`
- Clear the cache: `npm cache clean --force`
- Reinstall: Delete `node_modules` and run `npm install` again

## Production Build

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## License

This project is private and proprietary.

