# ReactArt Styling

A small React project for practicing different styling approaches in one app. It shows a branded header and a sign-in form with live validation feedback.

Live demo: https://react-styling-ashen.vercel.app

## Features

- Header with a logo, title and tagline
- Sign-in form with email and password fields
- Validation after the first sign-in attempt: the email must contain an at sign and the password must be at least 6 characters long
- Invalid fields change their colors to show the error

## Styling Approaches

The project deliberately combines several ways of styling a React app:

- Tailwind CSS utility classes in the `Header` component
- styled-components for `Button`, `Input` and the form layout, including dynamic styles based on props
- Global CSS in `src/index.css` for the page background, form container and shared classes
- A CSS module file, `Header.module.css`, kept from an earlier version of the header

## Tech Stack

- React 19
- Vite
- Tailwind CSS 3 with PostCSS and Autoprefixer
- styled-components

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository with `git clone https://github.com/dianakovtoniuk/react_styling.git`
2. Go to the project folder with `cd react_styling`
3. Install dependencies with `npm install`
4. Start the development server with `npm run dev`

The app will be available at http://localhost:5173.

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build in the `dist` folder
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint on the `src` folder

## Project Structure

- `public/` static files, including the logo
- `src/`
  - `assets/` images used by the components
  - `components/`
    - `AuthInputs.jsx` sign-in form with state and validation
    - `Button.jsx` styled button
    - `Input.jsx` labeled input that reacts to the invalid state
    - `Header.jsx` page header styled with Tailwind
    - `Header.module.css` unused CSS module from an earlier version
  - `App.jsx` root component
  - `main.jsx` application entry point
  - `index.css` Tailwind directives and global styles
- `tailwind.config.js` Tailwind configuration, including the custom title font
- `postcss.config.js` PostCSS plugins
- `vite.config.js` Vite configuration
