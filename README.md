# Product Management System

This is a simple Product Management System built using React (Next.js), Node.js, and PostgreSQL. The system allows users to view, add, edit, and delete products.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)

## Features

### Frontend
- View a list of products (name, description, price, and available quantity).
- Add a new product using a form.
- Edit an existing product.
- Delete a product.
- Styled using Bootstrap.

### Backend
- API to handle CRUD operations for products.
- PostgreSQL database to store product information.

## Technologies Used

- **Frontend**: React (Next.js), Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL

## Setup Instructions

### Prerequisites
- Node.js
- PostgreSQL

### Backend Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/AgamPipersenia/product-app.git
    ```

2. Install dependencies inside the backend folder:
    ```sh
    npm install
    ```

3. Set up PostgreSQL database:
    - Create a database named `products`.
    - Update the database configuration in `backend/docker-compose.yaml` if necessary.

4. Start the backend server:
    ```sh
    docker-compose up
    ```

### Frontend Setup

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the frontend server:
    ```sh
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
