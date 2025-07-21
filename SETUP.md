# Medical Chatbot Setup Guide

## MongoDB Setup Options

### Option 1: MongoDB Atlas (Recommended)

1. **Create a MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://cloud.mongodb.com/)
   - Sign up for a free account
   - Create a new cluster (free tier available)

2. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, and `<dbname>` with your values

3. **Update Environment Variables**
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/medical-chatbot?retryWrites=true&w=majority
   ```

### Option 2: Local MongoDB

1. **Install MongoDB**
   - Download from [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - Follow installation instructions for Windows

2. **Start MongoDB Service**
   ```bash
   # Start MongoDB service
   net start MongoDB
   ```

3. **Update Environment Variables**
   ```env
   MONGODB_URI=mongodb://localhost:27017/medical-chatbot
   ```

### Option 3: Docker MongoDB

1. **Install Docker Desktop**
   - Download from [Docker](https://www.docker.com/products/docker-desktop)

2. **Run MongoDB Container**
   ```bash
   docker run --name medical-chatbot-mongo -p 27017:27017 -d mongo:latest
   ```

3. **Update Environment Variables**
   ```env
   MONGODB_URI=mongodb://localhost:27017/medical-chatbot
   ```

## OAuth Setup

### Google OAuth

1. **Google Cloud Console**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API

2. **Create OAuth Credentials**
   - Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
   - Application type: Web application
   - Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

3. **Update Environment Variables**
   ```env
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   ```

### GitHub OAuth

1. **GitHub Developer Settings**
   - Go to GitHub Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"

2. **App Configuration**
   - Application name: Medical Chatbot
   - Homepage URL: `http://localhost:3000`
   - Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

3. **Update Environment Variables**
   ```env
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   ```

## NextAuth Secret

Generate a secure secret for NextAuth:

```bash
# Generate a random secret
openssl rand -base64 32
```

Update environment variables:
```env
NEXTAUTH_SECRET=your-generated-secret
```

## Complete Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   - Copy `.env.local` and update with your values
   - Ensure all required variables are set

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Test Authentication**
   - Open `http://localhost:3000`
   - Click "Get Started" or "Sign In"
   - Test Google and GitHub authentication

## Database Models

The application includes the following MongoDB models:

- **User**: User profiles with medical information
- **HealthRecord**: Health metrics and symptom tracking
- **ChatSession**: AI chat conversations and history

## API Endpoints

- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `GET /api/health-records` - Get health records
- `POST /api/health-records` - Create health record

## Troubleshooting

### MongoDB Connection Issues
- Verify connection string format
- Check network connectivity
- Ensure MongoDB service is running (local setup)
- Verify Atlas cluster is active (Atlas setup)

### Authentication Issues
- Verify OAuth credentials are correct
- Check redirect URIs match exactly
- Ensure NEXTAUTH_SECRET is set
- Clear browser cookies and try again

### Development Server Issues
- Check if port 3000 is available
- Verify all environment variables are set
- Check for TypeScript errors in terminal
- Restart development server
