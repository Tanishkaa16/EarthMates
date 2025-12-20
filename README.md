EarthMates

EarthMates is a full-stack web application that promotes eco-friendly living by connecting users with environmental initiatives, NGOs, events, and volunteering opportunities. The platform encourages sustainable habits through participation, awareness, and community-driven actions.

Features

User authentication using JWT

Browse and participate in eco-friendly initiatives and events

NGO and event management

Secure file and image uploads using MinIO

RESTful APIs with validation and error handling

Responsive and modern frontend UI

Scalable backend architecture

Tech Stack

Frontend

Next.js

React

TypeScript

Tailwind CSS

Shadcn UI

Backend

Node.js

Express.js

TypeScript

JWT Authentication

Multer

MinIO

Database

MySQL

Project Structure
EarthMates-main/
├── client/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
├── server/
│   ├── src/
│   │   ├── api/
│   │   ├── loaders/
│   │   ├── models/
│   │   ├── shared/
│   │   └── index.ts
│   └── tsconfig.json
│
├── LICENSE
└── README.md

Setup Instructions
Prerequisites

Node.js (v18 or later)

MySQL

MinIO

npm or yarn

Clone Repository
git clone https://github.com/your-username/EarthMates.git
cd EarthMates-main

Backend Setup
cd server
npm install


Create a .env file in the server directory:

PORT=5000
JWT_SECRET=your_jwt_secret
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=earthmates
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=your_access_key
MINIO_SECRET_KEY=your_secret_key


Run backend:

npm run dev

Frontend Setup
cd client
npm install
npm run dev


Frontend runs at:

http://localhost:3000

Security

JWT-based authentication

Protected routes

Centralized error handling

Input validation middleware

Use Cases

Users adopting sustainable lifestyles

NGOs promoting environmental causes

Organizers hosting eco-friendly events

Communities encouraging climate-conscious actions

Future Scope

User activity and impact dashboard

Reward and badge system

Admin verification panel

Analytics and reporting

Mobile application support

License

MIT License

If you want a shorter README, hackathon version, or resume-optimized version, say the word.

no bro giving according to goithub

Understood. You want a very standard GitHub-style README — minimal, clean, no storytelling, no fluff.
Below is exactly copy-paste ready and matches what most GitHub repos use.

EarthMates

EarthMates is a full-stack web application for promoting eco-friendly living by connecting users with NGOs, events, and volunteering opportunities.

Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS

Backend: Node.js, Express.js, TypeScript

Database: MySQL

Authentication: JWT

Storage: MinIO

Features

User authentication and authorization

NGO and event management

Volunteering opportunities

Secure file uploads

RESTful APIs

Responsive frontend

Project Structure
client/     # Frontend (Next.js)
server/     # Backend (Express + TypeScript)

Getting Started
Prerequisites

Node.js (v18+)

MySQL

MinIO

Installation
git clone https://github.com/your-username/EarthMates.git
cd EarthMates

Backend
cd server
npm install
npm run dev


Create a .env file in server:

PORT=5000
JWT_SECRET=your_jwt_secret
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=earthmates
MINIO_ENDPOINT=localhost
MINIO_PORT=9000
MINIO_ACCESS_KEY=your_access_key
MINIO_SECRET_KEY=your_secret_key

Frontend
cd client
npm install
npm run dev


Frontend available at http://localhost:3000

License

MIT
