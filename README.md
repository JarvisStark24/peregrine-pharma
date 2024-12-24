# Peregrine Falcon Pvt Ltd Live

Welcome to the Peregrine Falcon Pharmaceutical Pvt Ltd Live project! This is a professional marketing website designed to showcase the company's products and brochures effectively. Built using React.js and styled with Tailwind CSS, the platform is optimized for performance and user engagement.

## Features

- **Product Showcase**:
  - Browse through a curated list of pharmaceutical products.
  - View detailed product brochures.

- **Marketing-Focused Design**:
  - Sleek, responsive interface tailored for user engagement.
  - Enhanced animations using AOS and Framer Motion.

- **Technology Integration**:
  - Smooth scroll and carousel for seamless navigation.
  - Built-in testing setup with Jest and Testing Library.

## Tech Stack

### Frontend
- **React.js** for building the user interface.
- **React Router DOM** for navigation.
- **Tailwind CSS** for custom styling.
- **AOS (Animate On Scroll)** for animation effects.
- **React Responsive Carousel** for product displays.
- **Framer Motion** for advanced animations.

## Installation

### Prerequisites
- Node.js and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd peregrine-pharma
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Access the application in your browser at `http://localhost:3000`.

## Deployment

This project is deployed on a Hostinger VPS. Follow these steps to deploy:

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Configure the server to serve the frontend build:
   ```javascript
   app.use(express.static(path.join(__dirname, 'build')));
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, 'build', 'index.html'));
   });
   ```

3. Deploy the application to Hostinger's VPS and configure the domain.

## Packages Used

### Frontend
```json
{
  "react": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "tailwindcss": "^3.4.14",
  "aos": "^2.3.4",
  "react-responsive-carousel": "^3.2.23",
  "framer-motion": "^11.3.21"
}
```

## License
This project is licensed under the MIT License.

## Author
Created by **codewithjarvis**.

---

Thank you for using Peregrine Falcon Pharmaceutical Pvt Ltd Live! If you have any questions or feedback, feel free to reach out.

