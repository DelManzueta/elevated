# Elevated Spa & E-commerce Platform

## Overview

Elevated Spa & E-commerce Platform offers a seamless experience that combines
spa services and e-commerce functionalities. The platform is designed to
simplify appointment bookings, showcase available services, and provide an
online shopping experience for skincare products. Future updates will introduce
subscription-based services for personalized skincare solutions.

## Architecture

### Backend (API)

The backend is built using Node.js and MongoDB and serves as the central hub for
business logic, database interactions, and communication with both frontends.

#### Directory Structure

-   `controllers/`: Houses the logic for handling API requests and responses.
-   `models/`: Defines the data models, such as User, Appointment, Product, etc.
-   `routes/`: Contains the API endpoints.
-   `tests/`: Includes Jest test cases for models and routes.
-   `auth/`: Manages authentication logic and routes.
-   `utils/`: Utility functions and middleware.
-   `config/`: Configuration files and environment variables.

#### API Endpoints

##### User Category

-   **Customer Profile**

    -   `POST /api/customers`: Create a new customer profile
    -   `PUT /api/customers/:id`: Update a customer profile by ID
    -   `GET /api/customers/:id`: Get a customer profile by ID
    -   `GET /api/customers`: Get all customer profiles
    -   `DELETE /api/customers/:id`: Delete a customer profile by ID
    -   `GET /api/customers/search`: Search for customer profiles
    -   `POST /api/customers/reset/:id`: Reset a customer profile

-   **Staff Profile**

    -   `POST /api/staff`: Create a new staff profile
    -   `PUT /api/staff/:id`: Update a staff profile by ID
    -   `GET /api/staff/:id`: Get a staff profile by ID
    -   `GET /api/staff`: Get all staff profiles
    -   `DELETE /api/staff/:id`: Delete a staff profile by ID
    -   `GET /api/staff/search`: Search for staff profiles
    -   `POST /api/staff/reset/:id`: Reset a staff profile

-   **Admin Profile**
    -   `POST /api/admin`: Create a new admin profile
    -   `PUT /api/admin/:id`: Update an admin profile by ID
    -   `GET /api/admin/:id`: Get an admin profile by ID
    -   `GET /api/admin`: Get all admin profiles
    -   `DELETE /api/admin/:id`: Delete an admin profile by ID
    -   `GET /api/admin/search`: Search for admin profiles
    -   `POST /api/admin/reset/:id`: Reset an admin profile

##### Authentication

-   **Customer Auth**

    -   `POST /api/auth/customer/register`: Register a new customer
    -   `POST /api/auth/customer/login`: Login as a customer
    -   `POST /api/auth/customer/verify-phone`: Verify phone number
    -   `POST /api/auth/customer/logout`: Logout

-   **Staff Auth**

    -   `POST /api/auth/staff/register`: Register new staff
    -   `POST /api/auth/staff/login`: Login as staff
    -   `POST /api/auth/staff/verify-phone`: Verify phone number
    -   `POST /api/auth/staff/approve`: Approve staff and issue company email
    -   `POST /api/auth/staff/logout`: Logout

-   **Admin Auth**
    -   `POST /api/auth/admin/register`: Register new admin
    -   `POST /api/auth/admin/login`: Login as admin
    -   `POST /api/auth/admin/logout`: Logout

### Frontend: SPA (Spa & Services)

This frontend showcases the spa and its services, facilitating appointment
setup.

#### Directory Structure:

-   `pages/`: Main pages including Home, About, Services, Appointments, Gift
    Cards, Policies.

### Frontend: SPA (Spa & Services)

This frontend focuses on showcasing the spa and its services, and it facilitates
appointment bookings.

#### Directory Structure

-   `pages/`: Main pages including Home, About, Services, Appointments, Gift
    Cards, Policies, etc.
-   `components/`: Reusable UI components.
-   `assets/`: Static files like images and stylesheets.

### Frontend: Ecomm (E-commerce Shop)

This frontend is dedicated to the e-commerce aspect, including product listings,
cart management, and user accounts.

#### Directory Structure

-   `pages/`: Main pages including Home, Products, Cart, Account, etc.
-   `components/`: Reusable UI components.
-   `assets/`: Static files like images and stylesheets.

### Communication

Both frontends communicate with the backend through specific API endpoints:

-   **SPA Frontend**: Fetches available services and manages appointment
    bookings.
-   **Ecomm Frontend**: Manages product listings, shopping cart, and user
    accounts.

### Shared Components

Shared UI components or functionalities can be managed in a shared library or a
common folder.

## Development Approach

### Test-Driven Development (TDD)

We follow the Test-Driven Development (TDD) approach, facilitated by Jest for
writing test cases. This ensures robust, error-free code and simplifies
debugging.

### Security

We prioritize security by implementing JWT-based authentication, rate limiting,
and data validation. For production, consider replacing `console.error` with a
more robust logging solution.

### Contributors

-   Lead: `Del M.`
-   Backend Developer:
-   Frontend Developer:
-   QA Engineer:

## Conclusion

The architecture is modular, separating the spa and e-commerce functionalities
into distinct frontends while maintaining a unified backend. This allows for
focused development and easier maintenance.

## Getting Started

To get started with development, please refer to the `Getting Started` section
(to be added).
