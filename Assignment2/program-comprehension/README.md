# Program Comprehension Survey Web App
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## General info
Authors: Ghilardini Matteo & Toscano Sasha  

_This project is part of the course of Experimentation-Evaluation (USI, Università della Svizzera Italiana)_

## Purpose

This web application is designed to investigate whether camelCase or kebab-case is more effective for code readability throught a simple survey.  
The collected data are stored in a DB and are downloadable as a CSV file from the route `/admin/download`.  
With the CSV, the data can be analyzed using different approaches.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The root page is `app/page.tsx`. In dev environment, page auto-updates as you edit the file.

In order to run the application, a `.env` file is needed and should contains:
```properties
NODE_ENV = <environment_you_are_running || 'development'>
MONGODB_DB_NAME = <your_mongodb_dbname>
MONGODB_URI = <your_mongodb_uri>
```


## Deploy on Vercel

This project is also deployed on Vercel at the link: https://program-comprehension-survey.vercel.app/

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
