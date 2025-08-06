sahar a, 13 min
# 🛍️ React Shopping App

A modern shopping web application built with **React**, **Redux Toolkit**, and **Vite**. This project demonstrates a simple e-commerce UI with state management using Redux Toolkit and fast development powered by Vite.

## 🚀 Features

🧾 Product listing and details
🛒 Add to cart and cart management
💾 State management with Redux Toolkit
⚡ Fast refresh and build with Vite
✅ ESLint integration for code quality
📁 Component-based architecture
📦 Dockerized setup for easy deployment
🔁 CI/CD pipeline using GitHub Actions
📦 Prebuilt Docker image file (.tar) available

## 📦 Tech Stack

[React](https://reactjs.org/)
[Redux Toolkit](https://redux-toolkit.js.org/)
[Vite](https://vitejs.dev/)
[React Router](https://reactrouter.com/) (if used)
[Docker](https://www.docker.com/)
[JavaScript] (or TypeScript if used)

## 🐳 Docker Support

This app is fully containerized. You can run it with:


docker build -t ReactReduxToolkit .

docker run -p 3000:80 ReactReduxToolkit

Option 2: Use prebuilt Docker image (.tar)
If you have the Docker image exported as a .tar file (e.g., ReactReduxToolkit.tar), you can load and run it:

docker load -i ReactReduxToolkit.tar

docker run -p 3000:80 ReactReduxToolkit



## 🔁 CI/CD Pipeline
This project includes a GitHub Actions workflow that:

Installs dependencies

Runs tests and linters

Builds the app

Can be extended to deploy to cloud platforms

Workflow file: .github/workflows/ci.yml



## 🛠️ Getting Started

### 1. Clone the repo


git clone https://github.com/sepidehAkbarii/ReactReduxToolkit.git
cd ReactReduxToolkit


### 2. Install dependencies
npm install

### 3. Run the app
npm run dev
