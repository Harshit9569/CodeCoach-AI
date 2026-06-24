# 🚀 CodeCoach AI

An AI-powered interview preparation platform that analyzes your resume and generates personalized technical and behavioral questions, identifies skill gaps, and provides an actionable preparation plan to help you land your dream job!

## ✨ Features

- **Resume Analysis**: Upload your resume in PDF format, and our AI will extract key information and skills.
- **Personalized Interview Questions**: Get tailored technical and behavioral questions based on your experience and the job role you are targeting.
- **Skill Gap Identification**: Discover areas where you can improve and learn new skills to be more competitive.
- **Actionable Preparation Plan**: Receive a structured plan to prepare effectively for your upcoming interviews.
- **Interview Report Generation**: Download a comprehensive report of your interview analysis.
- **Secure Authentication**: User registration and login securely handled with JWT and cookie-based authentication.

## 🛠️ Technology Stack

### Frontend
- **React.js**: User interface built with React hooks and context.
- **Vite**: Blazing fast frontend tooling.
- **SCSS**: Modular and maintainable styling.
- **React Router**: For seamless navigation.

### Backend
- **Node.js & Express**: Fast and scalable backend API.
- **MongoDB & Mongoose**: NoSQL database for flexible data storage.
- **Google GenAI**: Powerful AI model for content generation and analysis.
- **Zod**: Schema validation for robust data integrity.
- **Multer**: Handling multipart/form-data for resume uploads.
- **Puppeteer & pdf-parse**: For PDF processing and generation.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB instance (local or Atlas)
- Google Gemini AI API Key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and add your exact variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_GENAI_API_KEY=your_gemini_api_key
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
.
├── Backend/                 # Node.js + Express Backend
│   ├── src/
│   │   ├── config/          # Database connection logic
│   │   ├── controllers/     # Handlers for Auth & Interview routes
│   │   ├── middlewares/     # JWT Auth & Multer file uploads
│   │   ├── models/          # Mongoose DB Schemas
│   │   ├── routes/          # API Route definitions
│   │   └── services/        # Gemini AI & PDF Generation
│   ├── app.js               # Express app configuration & CORS
│   └── server.js            # Main server entry point
│
└── Frontend/                # React + Vite Frontend
    ├── public/              # Static assets
    └── src/
        ├── features/        # Feature-based modular architecture
        │   ├── auth/        # Authentication logic, pages, contexts
        │   └── interview/   # Interview taking, report generation
        ├── style/           # Global SCSS styles & variables
        ├── app.routes.jsx   # Main application routing
        ├── App.jsx          # Root App Component
        └── main.jsx         # React application entry point
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

