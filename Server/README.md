# Elevated Spa API

## Introduction

Welcome to the Elevated Spa API repository. This API serves as the backbone for
the Elevated Spa application, a comprehensive platform for spa management. The
API handles everything from user authentication and profile management to
inventory control and analytics.

## Installation and Setup

To get started with the Elevated Spa API, follow these steps:

```bash
# Clone the repository
git clone https://github.com/elevated-spa/elevated-spa-api.git

# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the server
npm start
```

## Authentication

Authentication is a crucial part of our API. We use JWT for authentication. To
authenticate your requests, use the following endpoints:

-   [POST] `/api/auth/signup`
-   [POST] `/api/auth/login`

## API Endpoints

### Users

#### Customer_Profile

-   [POST] `/api/customers`
    -   **Request**:
        `{ "email": "example@email.com", "password": "password123" }`
    -   **Response**: `{ "token": "jwt_token_here" }`
-   [GET] `/api/customers/:id`
-   [PUT] `/api/customers/:id`
-   [DELETE] `/api/customers/:id`

... (continue with other endpoints as listed in your original README)

## Error Codes

Here are some common HTTP status codes you might encounter while using the API:

-   `400`: Bad Request - Your request is invalid.
-   `401`: Unauthorized - Your API key is wrong.
-   `403`: Forbidden - The kitten requested is hidden for administrators only.
-   `404`: Not Found - The specified kitten could not be found.
-   `500`: Internal Server Error - We had a problem with our server. Try again
    later.

## Production Notes

-   Replace `console.error` with a more robust logging solution for better error
    tracking.
-   Replace `localhost` URLs in email verification with production URLs.

## Contributing

We welcome contributions from everyone. If you're interested in contributing,
please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct and the process for submitting pull requests.

---

Feel free to adapt this README to better suit the specific needs and nuances of
your project.

#### Users

-   **Customer_Profile**
    -   [POST] `/api/customers`
    -   [GET] `/api/customers/:id`
    -   [PUT] `/api/customers/:id`
    -   [DELETE] `/api/customers/:id`
-   **Staff_Profile**
    -   [GET] `/api/staff/:id`
-   **Admin_Profile**
    -   [GET] `/api/admin/:id`

#### Services

-   [POST] `/api/services`
-   [GET] `/api/services`
-   [GET] `/api/services/:id`
-   [PUT] `/api/services/:id`
-   [DELETE] `/api/services/:id`

#### Products

-   [POST] `/api/products`
-   [GET] `/api/products`
-   [GET] `/api/products/:id`
-   [PUT] `/api/products/:id`
-   [DELETE] `/api/products/:id`

#### Appointments

-   [POST] `/api/appointments`
-   [GET] `/api/appointments`
-   [GET] `/api/appointments/:id`
-   [PUT] `/api/appointments/:id`
-   [DELETE] `/api/appointments/:id`

#### Subscriptions

-   [POST] `/api/subscriptions`
-   [GET] `/api/subscriptions`
-   [GET] `/api/subscriptions/:id`
-   [PUT] `/api/subscriptions/:id`
-   [DELETE] `/api/subscriptions/:id`

#### Orders

-   [POST] `/api/orders`
-   [GET] `/api/orders`
-   [GET] `/api/orders/:id`
-   [PUT] `/api/orders/:id`
-   [DELETE] `/api/orders/:id`

#### Payments

-   [POST] `/api/payments`
-   [GET] `/api/payments`
-   [GET] `/api/payments/:id`
-   [PUT] `/api/payments/:id`
-   [DELETE] `/api/payments/:id`

#### Promos/Discounts

-   [POST] `/api/promos`
-   [GET] `/api/promos`
-   [GET] `/api/promos/:id`
-   [PUT] `/api/promos/:id`
-   [DELETE] `/api/promos/:id`

#### Reviews

-   [POST] `/api/reviews`
-   [GET] `/api/reviews`
-   [GET] `/api/reviews/:id`
-   [PUT] `/api/reviews/:id`
-   [DELETE] `/api/reviews/:id`

#### Inventory

-   [POST] `/api/inventory`
-   [GET] `/api/inventory`
-   [GET] `/api/inventory/:id`
-   [PUT] `/api/inventory/:id`
-   [DELETE] `/api/inventory/:id`

#### Notifications

-   [POST] `/api/notifications`
-   [GET] `/api/notifications`
-   [GET] `/api/notifications/:id`
-   [PUT] `/api/notifications/:id`
-   [DELETE] `/api/notifications/:id`

#### Analytics

-   [GET] `/api/analytics`

#### GiftCards

-   [POST] `/api/giftcards`
-   [GET] `/api/giftcards`
-   [GET] `/api/giftcards/:id`
-   [PUT] `/api/giftcards/:id`
-   [DELETE] `/api/giftcards/:id`

#### Loyalty_Program

-   [POST] `/api/loyalty`
-   [GET] `/api/loyalty`
-   [GET] `/api/loyalty/:id`
-   [PUT] `/api/loyalty/:id`
-   [DELETE] `/api/loyalty/:id`

#### File_Management

-   [POST] `/api/files`
-   [GET] `/api/files`
-   [GET] `/api/files/:id`
-   [PUT] `/api/files/:id`
-   [DELETE] `/api/files/:id`

#### Accessibility

-   [GET] `/api/accessibility`

#### Subscriptions_Management

-   [GET] `/api/subscriptions-management`

#### Audit_Logs

-   [GET] `/api/audit-logs`

#### Integration

-   [GET] `/api/integration`

#### Customization

-   [GET] `/api/customization`

#### Software (SaaS)

-   **Multi-Tenancy**

    -   [POST] `/api/software/tenants`
    -   [GET] `/api/software/tenants`
    -   [GET] `/api/software/tenants/:id`
    -   [PUT] `/api/software/tenants/:id`
    -   [DELETE] `/api/software/tenants/:id`

-   **API_KEYS**

    -   [POST] `/api/software/API_KEY`
    -   [GET] `/api/software/API_KEY`
    -   [GET] `/api/software/API_KEY/:id`
    -   [PUT] `/api/software/API_KEY/:id`
    -   [DELETE] `/api/software/API_KEY/:id`

-   **Software_User-Role**

    -   [POST] `/api/software/User-Role`
    -   [GET] `/api/software/User-Role`
    -   [GET] `/api/software/User-Role/:id`
    -   [PUT] `/api/software/User-Role/:id`
    -   [DELETE] `/api/software/User-Role/:id`

-   **Software_Subscriptions**

    -   [POST] `/api/software/subscriptions`
    -   [GET] `/api/software/subscriptions`
    -   [GET] `/api/software/subscriptions/:id`
    -   [PUT] `/api/software/subscriptions/:id`
    -   [DELETE] `/api/software/subscriptions/:id`

-   **Software_Billing**

    -   [POST] `/api/software/billing`
    -   [GET] `/api/software/billing`
    -   [GET] `/api/software/billing/:id`
    -   [PUT] `/api/software/billing/:id`
    -   [DELETE] `/api/software/billing/:id`

-   **Software_Features**

    -   [POST] `/api/software/features`
    -   [GET] `/api/software/features`
    -   [GET] `/api/software/features/:id`
    -   [PUT] `/api/software/features/:id`
    -   [DELETE] `/api/software/features/:id`

-   **Software_Analytics**
    -   [GET] `/api/software/analytics/usage`
    -   [GET] `/api/software/analytics/subscriptions`
