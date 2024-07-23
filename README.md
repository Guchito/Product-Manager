# Products Manager Software

Welcome to the Products Manager Software! This application allows you to manage products efficiently with a robust backend and an intuitive frontend. It leverages the power of the PERN stack along with several other essential technologies to deliver a seamless experience.

## Technologies

This project utilizes the following technologies:

### Backend

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: SQL database.
- **Sequelize (with TypeScript)**: ORM for PostgreSQL, enabling easy database management.
- **dotenv**: Environment variable management.
- **Express Validator**: Middleware for validating and sanitizing request data.
- **Cors**: Middleware for handling Cross-Origin Resource Sharing.
- **Morgan**: HTTP request logger.
- **Swagger**: API documentation.
- **Supertest**: Testing HTTP requests.
- **Jest**: Testing framework.



### Frontend

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes.
- **Valibot**: Schema validation library
- **Axios**: Promise-based HTTP Client for node.js and the browser to comunicate with the API


## Features

- **Product Management**: Create, read, update, and delete products.
- **Validation**: Ensures data integrity with Express Validator in the back end, and valibot in the frontend
- **Logging**: Logs HTTP requests using Morgan.
- **Testing**: Comprehensive testing with Jest and Supertest.
- **API Documentation**: Interactive API documentation with Swagger.

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/products-manager.git
    cd products-manager
    ```

2. **Install server dependencies:**
    ```bash
    cd server
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the server root directory and add the following:
    ```
    DB_URL=your_database_url
    ```

4. **Start the development server:**
    ```bash
    npm run dev
    ```

On another terminal:

1. **Install client dependencies:**
    ```bash
    cd client
    npm install
    ```

2. **Start the development client:**
    ```bash
    npm run dev
    ```

## Usage

To use the application, follow these steps:

1. **Access the frontend:**
    Open your browser and navigate to `http://localhost:5173`.

2. **Explore the API:**
    Use tools like Postman or the Swagger UI at `http://localhost:4000/api/products` to interact with the backend API.

## Testing

To run tests, execute the following command:

```bash
npm test
```

This will run both unit and integration tests using Jest and Supertest.

***
Thank you for using the Products Manager Software! If you have any questions or feedback, please feel free to reach out. Happy coding!


