## Emotional Tone Detection Web Application

This project is a simple web application that detects the emotional tone of text using an AI API (Sapling's tone checker). It allows users to enter text, which is then analyzed for various emotional tones like angry, neutral, repulsed, and more. The results are displayed with corresponding emojis and confidence percentages.

Features
Detects emotional tones such as angry, neutral, repulsed, and others using AI.
Simple and user-friendly interface built with React.
Displays emotional tones with confidence levels and corresponding emojis.
Supports live API requests and mock data for testing.
Prerequisites
To run this project, you will need to have the following installed:

Node.js (v12 or higher)
NPM (comes with Node.js)

## Setup Instructions

1. Clone the Repository

   ```
   git clone https://github.com/lusineam/tone-detector-AI.git
   ```

   ```
   cd emotional-tone-detector
   ```

2. Install Dependencies

   ```
   npm install
   ```

3. Get an API Key
   This project uses the Sapling AI Tone API to analyze emotional tone. Follow these steps to get an API key:

   1. Go to Sapling AI API.
   2. Sign up for a free account or log in.
   3. Go to the "API" section in your account dashboard.
   4. Generate an API key.

4. Configure the API Key
   Create a .env file in the root of your project as in example.

5. Start the Application
   Start the development server:

   ```
   npm start
   ```

   The app should now be running at http://localhost:3000.

6. If you don't have an API key or want to test the application without connecting to the actual API, the application provides an example with mock data. On the  
   first load of the application, mock data is automatically displayed, simulating a tone analysis result. This allows you to see how the application works without needing an API key.
