Gym Workout Tracker
A modern, responsive web application designed to help you track your gym workouts, monitor body measurements, and visualize your progress over time. This application is enhanced with an integrated AI Fitness Coach powered by Google's Gemini to provide intelligent insights into your fitness journey.

✨ Features
Secure User Authentication: Sign up and log in securely with your email and password. All your data is private to your account.

Detailed Workout Logging:

Log multiple sets with varying weights for each exercise.

Save new exercises, which are automatically added to a dropdown for quick selection in future sessions.

Comprehensive Body Measurement Tracking:

Record weekly measurements for weight (kg), chest (cm), biceps (cm), stomach (cm), age, and height (cm).

Interactive Workout Calendar:

View all your past workouts on a clean, interactive calendar.

Click on any workout entry to open a modal where you can edit sets/weights, change the date, or delete the entry.

Dynamic Progress Visualization:

A powerful line graph rendered on an HTML <canvas> element shows your progress.

Use the organized dropdown to switch between viewing trends for any of your exercises (tracking max weight lifted) or body measurements.

AI Fitness Coach (Powered by Gemini):

Analyze My Progress: Get a detailed, AI-generated analysis of your entire workout and measurement history, including strengths, plateaus, and actionable suggestions.

Chat with Your Data: Ask natural language questions about your progress (e.g., "How is my squat progressing?" or "What was my weight last month?") and get instant answers from the AI.

Progressive Web App (PWA):

The application can be "installed" on your mobile device or desktop, allowing you to launch it like a native app from your home screen.

🛠️ Technologies Used
Frontend: HTML5, CSS3, JavaScript (ES Modules)

Styling: Tailwind CSS for a modern, utility-first design.

Database & Authentication: Google Firebase

Firestore: For real-time, NoSQL database storage.

Firebase Authentication: For secure user management.

Charting: Chart.js for creating beautiful, responsive graphs.

Calendar: FullCalendar for the interactive calendar view.

AI Integration: Google Gemini API for the AI Coach features.

Markdown Parsing: Marked.js to render AI responses in a clean format.

🚀 How to Use
Register/Login: Open the web page and create a new account using your email and password, or sign in if you already have an account.

Log Your Data:

Use the Log Daily Workout form to enter your exercises. If it's a new exercise, you can add it directly.

Use the Log Body Measurements form to update your physical stats. You only need to fill in what you want to track for that day.

Track Your Progress:

The Calendar will automatically populate with your logged workouts.

In the Progress Graph section, select any exercise or body measurement from the dropdown to see a visual trend of your improvements.

Get AI Insights:

Scroll down to the Gemini AI Fitness Coach section.

Click Analyze My Progress to receive a comprehensive report on your journey.

Use the Chat interface to ask specific questions and get immediate, data-driven answers.
