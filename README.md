# Authors & Posts REST API

## Tech Stack
- Node.js
- Express
- PostgreSQL
- Sequelize ORM

## Setup

```bash
git clone <repo>
cd authors-posts-api
npm install
cp .env.example .env
npm run dev
```

## Database Schema

Author (id, name, email)
Post (id, title, content, author_id)

One-to-many relationship (Author → Posts)  
Cascade delete enabled.

## Endpoints

### Authors
- POST /authors
- GET /authors
- GET /authors/:id
- PUT /authors/:id
- DELETE /authors/:id
- GET /authors/:id/posts

### Posts
- POST /posts
- GET /posts?author_id=1
- GET /posts/:id
- PUT /posts/:id
- DELETE /posts/:id

### Docker

This project supports full containerization using Docker and Docker Compose, allowing the API and PostgreSQL database to run in isolated containers without manual local setup.

Running the Project with Docker
Prerequisites

Docker

Docker Compose (v2+)

1️⃣ Build and Start Containers

From the project root:

- docker compose up --build


This will:

Build the Node.js API image using the Dockerfile

Start a PostgreSQL container

Automatically connect the API to PostgreSQL

2️⃣ Docker Services Overview
Service	Description
api	Node.js + Express REST API
postgres	PostgreSQL database
3️⃣ Docker Environment Configuration

The application uses environment variables provided directly via docker-compose.yml:

environment:
  PORT: 8080
  DB_HOST: postgres
  DB_USER: postgres
  DB_PASSWORD: postgres
  DB_NAME: blogdb
  DB_PORT: 5432


⚠️ Important:
When using Docker, DB_HOST must be set to postgres (the service name), not localhost, because containers communicate through Docker’s internal network.

4️⃣ Database Persistence

PostgreSQL data is persisted using a named Docker volume:

volumes:
  postgres_data:


This ensures data is retained even if containers are stopped or restarted.

5️⃣ Accessing the Application

API Base URL:

http://localhost:8080


PostgreSQL (optional, for debugging):

localhost:5432

6️⃣ Stopping Containers
docker compose down


To stop containers and remove all database data:

docker compose down -v

Dockerfile Overview

The API container is built using a lightweight Node.js Alpine image:

Uses node:20-alpine

Installs only production dependencies

Exposes port 8080

Starts the server using node src/server.js

This ensures a small, fast, and production-ready image.