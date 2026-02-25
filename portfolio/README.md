# Andrew Warias Portfolio - React Version

This is a React conversion of the Andrew Warias portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy your images:
   - Create a `public/img` folder
   - Copy all images from your original `img/` folder to `public/img/`
   - Copy `Andrew_Warias_Resume.pdf` to the `public/` folder

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
src/
├── components/
│   ├── Layout.js       # Main layout wrapper
│   └── Navigation.js   # Left sidebar navigation
├── pages/
│   ├── Home.js         # Home page
│   ├── Product.js      # Product experience page
│   ├── Values.js       # Values page
│   ├── Curation.js     # Curation page
│   └── Studio.js       # Photography studio page
├── App.js              # Main app with routing
├── index.js            # React entry point
└── index.css           # Global styles
```

## Features

- React Router for navigation
- Responsive design (mobile-friendly)
- Smooth scrolling to sections
- Image gallery with expand/collapse
- Clean component architecture

## Notes

- All original styling has been preserved
- Navigation uses React Router instead of vanilla JS
- State management uses React hooks
- Images are served from the `public/img` folder
