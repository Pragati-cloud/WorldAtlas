# WorldAtlas

🌍 WorldAtlas Web App
WorldAtlas is a React-based web application that provides detailed information about countries across the globe. It fetches live country data through APIs and presents it in a clean, responsive interface. Users can browse countries, explore individual details, and access related content through dedicated pages.

🔧 Tech Stack
React.js for building UI components

React Router for page navigation

Axios / Fetch for API data handling

CSS for styling

JSON for local footer data

Vite as the build tool

✨ Features
🌐 Displays country-specific information (name, capital, population, region, etc.)

🧭 Multi-page layout using React Router

🧩 Modular components with reusable layout and UI parts

📦 API integrations and mock JSON data

📱 Fully responsive design

📁 Project Structure

src/
├── api/                    # API calls and mock data
│   ├── countrydata.js      # Fetch country data
│   ├── footer.json         # Static footer data (mock JSON)
│   └── postApi.jsx         # Additional API logic
│
├── assets/                 # Static files (e.g., images, icons)
│
├── components/             # Reusable shared components (folder placeholder)
│
├── Layout/                 # Layout wrapper components
│   └── AppLayout.jsx       # App-wide layout structure
│
├── ui/                     # UI elements like headers, footers, and hero sections
│   ├── Footers.jsx
│   ├── Headers.jsx
│   └── HeroSection.jsx
│
├── pages/                  # Individual pages of the web app
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Countries.jsx       # Country list and details page
│   ├── ErrorPage.jsx       # 404 not found page
│   └── Home.jsx            # Landing page
│
├── App.css                 # App-level CSS
├── App.jsx                 # Main component with routing logic
├── index.css               # Global styling
└── main.jsx                # React DOM render entry point
