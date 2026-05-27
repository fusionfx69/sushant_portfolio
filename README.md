# Portfolio Website

A React + Node.js portfolio website for Sushant Tuladhar.

## Features
- React frontend with portfolio sections and contact form
- Node.js backend with a contact API
- Email delivery via Nodemailer + SMTP
- Vite development server with proxy to backend

## Setup

### 1. Install dependencies

From the root folder:

```bash
cd /home/sushant/Documents/Portfolio/client
npm install

cd ../server
npm install
```

### 2. Configure email

Create `server/.env` from `server/.env.example` and fill in SMTP details.

### 3. Run locally

Open two terminals:

```bash
cd /home/sushant/Documents/Portfolio/server
npm start
```

```bash
cd /home/sushant/Documents/Portfolio/client
npm run dev
```

Then open the local Vite URL shown in the terminal.
# portfolio
