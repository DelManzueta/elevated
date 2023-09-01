# Elevated Spa & E-commerce Platform

## Overview

Elevated Spa & E-commerce Platform is a comprehensive solution that consists of
two separate frontends (Spa & Services and E-commerce Shop) and a unified
backend. The platform aims to simplify appointment booking, showcase available
services, and provide an e-commerce experience for products. A future update
will introduce a subscription-based service for personalized skincare products.

## Architecture

### Backend (API)

Built with Node.js and MongoDB, the backend handles business logic, database
interactions, and communication with both frontends.

#### Directory Structure:

-   `controllers/`: Logic for handling requests and responses.
-   `models/`: Data models such as appointments, products, users.
-   `routes/`: Routing information, defining endpoints.
-   `tests/`: Jest test cases for models and routes.
-   `auth/`: Authentication logic and routes.

#### API Endpoints:

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

### Frontend: Ecomm (E-commerce Shop)

This frontend manages the e-commerce part, including product listings.

#### Directory Structure:

-   `pages/`: Main pages including Home, Products, Cart, Account.

### Communication

The API exposes specific endpoints for both frontends, allowing interaction with
the backend.

-   **SPA Frontend**: Fetches services, books appointments.
-   **Ecomm Frontend**: Manages products, cart, user accounts.

### Shared Components

Shared components or functionalities can be managed in a shared library or
common folder.

## Development Approach

### Test-Driven Development (TDD)

We have initiated the Test-Driven Development approach by setting up Jest and
writing the first test case for the Customer model in the User category. This
approach helps in building robust and error-free code.

### Conclusion

The architecture is designed to keep the spa and ecomm sections separate but
unified through a common backend. By keeping the frontends separate, it allows
for focused development and easier maintenance, while the unified backend
ensures consistency and efficiency.

## Getting Started

To get started with development, follow the instructions in the
`Getting Started` section (to be added).
