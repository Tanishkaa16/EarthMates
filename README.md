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
