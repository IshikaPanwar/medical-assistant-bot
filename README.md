# Medical Chatbot - AI Healthcare Assistant

A comprehensive AI-powered healthcare assistant built with Next.js, featuring user authentication, symptom checking, health tracking, and voice interactions.

## Features

- 🔐 **User Authentication** - NextAuth.js with Google & GitHub OAuth
- 🤖 **AI Chat Assistant** - Gemini AI integration for health guidance
- 🩺 **Symptom Checker** - AI-driven symptom analysis
- 📊 **Health Metrics Tracking** - Monitor vital signs and medications
- 🎙️ **Voice Interaction** - Speech-to-text and text-to-speech capabilities

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **AI**: Gemini AI API
- **Charts**: Chart.js / Recharts
- **Audio**: Web Speech API

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- Google OAuth credentials
- GitHub OAuth credentials
- Gemini AI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd medical-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret

# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/medical-chatbot

# Gemini AI API
GEMINI_API_KEY=your-gemini-api-key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/auth/          # NextAuth API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Protected dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── auth/              # Authentication components
│   └── providers/         # Context providers
├── lib/                   # Utility libraries
│   └── auth.ts            # NextAuth configuration
└── types/                 # TypeScript type definitions
    └── next-auth.d.ts     # NextAuth type extensions
```

## Setup OAuth Providers

### Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

### GitHub OAuth
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth App
3. Set Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

## Development Status

### ✅ Completed
- Project setup with Next.js, TypeScript, and Tailwind CSS
- NextAuth.js authentication with Google and GitHub OAuth
- Protected routes and session management
- MongoDB integration with user data models
- AI chat integration with Gemini API
- Symptom checker functionality
- Health records API and data management
- Chat interface with conversation history
- Basic UI components and pages
- Dashboard with navigation

### 🚧 In Progress
- Health metrics tracking dashboard
- Interactive charts for health data
- Voice interaction features
- Medication reminder system

### 📋 Planned
- Advanced symptom analysis with visual aids
- Health metrics visualization
- Medication adherence tracking
- Audio processing capabilities
- Mobile-responsive enhancements

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
