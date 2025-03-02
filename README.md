# YPOF - Your Pet OUR FOOD

Ypof is a full-stack website providing pet food and toy items for pet lovers, mainly focusing on cat and dog food such as turkey, chicken, mutton, beef, and pork meat packets.

# Project Structure

Ypof/

│── backend/      # Python Flask backend

│── frontend/     # React + Tailwind CSS frontend

│── README.md

│── .gitignore

# clone the repository

# Frontend setup (react+tailwind CSS)
cd frontend
npx create-react-app .
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm start

# Backend Setup (Flask + Firebase)
cd backend
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate     # On Windows
pip install -r requirements.txt

# Create a .env file

Run the Backend Server

# Firebase Setup

Go to Firebase Console

Create a new project & enable Firestore Database.

Download the service account key and save it as firebase_config.json in the backend/ folder.


# Contributing

Fork the repository.

Create a feature branch.

Commit changes and push.

Open a pull request.

# License

This project is open-source Project

# Happy Coding