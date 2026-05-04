# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a beautiful design with multiple sections including hero, projects, skills, experience, and contact form.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with gradient accents
- **Interactive Navigation**: Smooth scrolling navigation with sticky header
- **Project Showcase**: Showcase your best projects with descriptions and links
- **Skills Section**: Display skills organized by categories
- **Experience Timeline**: Visual timeline of work experience
- **Contact Form**: Get in touch section with form and contact information
- **Mock Data**: Pre-populated with example data for easy customization

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/              # Component styles
│   ├── globals.css
│   ├── Header.css
│   ├── Hero.css
│   ├── Projects.css
│   ├── Skills.css
│   ├── Experience.css
│   ├── Contact.css
│   └── Footer.css
├── data/                # Mock data
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

## Customization

### Edit Portfolio Data

To customize the portfolio content, edit the `src/data/mockData.js` file:

```javascript
export const portfolioData = {
  personal: {
    name: 'Your Name',
    title: 'Your Title',
    bio: 'Your bio',
    email: 'your-email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, State',
  },
  // ... rest of the data
};
```

### Modify Styles

Each component has its own CSS file in the `src/styles/` directory. You can customize:
- Colors (update CSS variables in `globals.css`)
- Typography
- Spacing and layout
- Animations and transitions

### Update Project Images

Replace the image URLs in `mockData.js` with your own project images:

```javascript
projects: [
  {
    // ...
    image: 'https://your-image-url.com/image.jpg',
    // ...
  },
];
```

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## Sections

### Hero Section
The main landing section with your name, title, and call-to-action buttons.

### Featured Projects
A grid showcase of your best work with descriptions, technologies used, and links.

### Skills & Expertise
Organized skill categories (Frontend, Backend, Database, Tools).

### Work Experience
A timeline of your professional experience.

### Contact
Contact information and a contact form for inquiries.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Build & Deploy

To build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

## Technologies Used

- **React**: UI library
- **Vite**: Build tool and development server
- **CSS3**: Styling and animations
- **JavaScript (ES6+)**: Programming language

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ for your portfolio needs.
