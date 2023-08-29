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

---

Feel free to add this updated content to your README file.
