## "Wellness and Elegance, Tailored to You.",

## "Nourishing Body and Soul, Curating Beauty."

## "Timeless Relaxation, Effortless Beauty."

## "Elevating the Art of Elegance",

## "A Higher Level of Relaxation and Radiance."

## "Elevate Your Well-Being, Embrace Your Beauty."

## ---------------------------------------------------------------------------------

**--------Entities--------**

## These relationships define how the different parts of the system interact with each other and will guide the development of the database schemas and application logic.

1. **User**:

    - Has one profile (either Customer, Employee, or Admin).
    - Has many Appointments (if Customer or Employee).
    - Has many Payments (if Customer).

2. **Customer Profile**:

    - Belongs to one User.
    - Has many Appointments.
    - Has many Payments.

3. **Employee Profile**:

    - Belongs to one User.
    - Has many Appointments.
    - Has many Services (specializations).

4. **Admin Profile**:

    - Belongs to one User.
    - Manages Employees, Appointments, Services, Products.

5. **Appointment**:

    - Belongs to one Customer.
    - Belongs to one Employee.
    - Has one Service.
    - Has one Payment.

6. **Service**:

    - Has many Appointments.
    - Has many Employees (who specialize in the service).

7. **Product**:

    - Can be part of many Orders.

## DMK Product:

-   Is a type of Product.
-   May have limited stock or availability.
-   Can be part of bespoke packages curated for Customers.
-   Can be part of Orders.

## Bespoke Package:

-   Contains one or more DMK Products.
-   Can be curated for a specific Customer.
-   Can be ordered by a Customer.

## Third-Party Product:

-   Is a type of Product.
-   Includes the 12 products with prices that are third-party brands.

8. **Subscription Program**:

    - Can be monthly or quarterly.
    - Contains a curated kit of proprietary products.
    - Associated with a specific Customer.
    - Can be managed by the Customer (e.g., subscribe, unsubscribe, update
      preferences).
    - Can be overseen by the spa owner or admin.

9. **Curated Kit**:

    - Contains one or more proprietary products.
    - Curated based on the Customer's preferences, needs, or consultation.
    - Can be part of a Subscription Program.

10. **Proprietary Product**:

-   Can be part of a Curated Kit.
-   Can be part of a Subscription Program.

## This structure allows us to capture the subscription-based program for proprietary products, including the ability for customers to receive curated kits on a regular basis. It also allows for flexibility in how the kits are curated and how the subscription program is managed.

11. **Order**:

    -   Has many Products.
    -   Belongs to one Customer.

12. **Payment**:

    -   Belongs to one Appointment.
    -   Belongs to one Customer.

13. **Promotions and Discounts**:

    -   Manage special offers, discounts, or promotional codes.

14. **Reviews and Ratings**:

    -   Handle customer reviews or ratings for services or products.

15. **Inventory Management**:

    -   Track inventory levels, suppliers, restocking, etc., for physical
        products.

16. **Notifications**:

    -   Manage notification preferences and history (e.g., appointment
        reminders, availability changes).

17. **Analytics and Reporting**:

    -   Store and manage data for reporting and analytics in the admin portal.

18. **Gift Cards and Loyalty Programs**:

    -   Manage gift cards or loyalty programs.

19. **File Management**:

    -   Manage uploaded files (e.g., profile pictures, documents).

20. **Accessibility Preferences**:

    -   Store personalized accessibility features for users.

21. **Subscription Management**:

    -   Manage subscription plans, billing cycles, and user subscriptions for
        subscription-based programs.

22. **Audit Logs**:

    -   Track changes made by users within the system (especially admins).

23. **Integration with Third-Party Services**:

    -   Manage integrations with third-party services (e.g., payment gateways,
        calendar syncing).

24. **Customization Settings**: - Store user customization settings (e.g.,
    theme, layout).

    **--------end--------**

**--------Schemas--------**

## These schemas represent the structure of the data within the system and will be used to create the corresponding database tables or collections. They define the attributes and relationships between different parts of the system, providing a blueprint for the development of the application's backend.

1. **User Schema**:

    - Profile (Customer, Employee, or Admin)
    - Appointments
    - Payments

2. **Customer Profile Schema**:

    - User
    - Appointments
    - Payments

3. **Employee Profile Schema**:

    - User
    - Appointments
    - Services (specializations)

4. **Admin Profile Schema**:

    - User
    - Managed Entities (Employees, Appointments, Services, Products)

5. **Appointment Schema**:

    - Customer
    - Employee
    - Service
    - Payment

6. **Service Schema**:

    - Appointments
    - Employees

7. **Product Schema**:

    - Orders
    - Type (DMK, Third-Party, Proprietary)

8. **Subscription Program Schema**:

    - Frequency (monthly/quarterly)
    - Curated Kit
    - Customer
    - Management (subscribe, unsubscribe, update preferences)

9. **Curated Kit Schema**:

    - Proprietary Products
    - Customer Preferences
    - Subscription Program

10. **Order Schema**:

    - Products
    - Customer

11. **Payment Schema**:

    - Appointment
    - Customer

12. **Promotions and Discounts Schema**:

    - Special Offers
    - Discounts
    - Promotional Codes

13. **Reviews and Ratings Schema**:

    - Services
    - Products

14. **Inventory Management Schema**:

    - Products
    - Suppliers
    - Restocking

15. **Notifications Schema**:

    - Preferences
    - History

16. **Analytics and Reporting Schema**:

    - Data
    - Reports

17. **Gift Cards and Loyalty Programs Schema**:

    - Gift Cards
    - Loyalty Programs

18. **File Management Schema**:

    - Files
    - Types (profile pictures, documents)

19. **Accessibility Preferences Schema**:

    - Features
    - User

20. **Subscription Management Schema**:

    - Plans
    - Billing Cycles
    - User Subscriptions

21. **Audit Logs Schema**:

    - Changes
    - Users

22. **Integration with Third-Party Services Schema**:

    - Integrations
    - Services (payment gateways, calendar syncing)

23. **Customization Settings Schema**:
    - User
    - Settings (theme, layout)

**--------end--------**

### Customer Schema

1. **ID**: Unique identifier (auto-generated)
2. **Name**: String
3. **Email**: String (unique)
4. **Password**: Encrypted String
5. **Phone Number**: String
6. **Address**: String
7. **Date of Birth**: Date
8. **Appointments**: Array of appointment IDs

### Staff Schema

1. **ID**: Unique identifier (auto-generated)
2. **Name**: String
3. **Email**: String (unique)
4. **Password**: Encrypted String
5. **Phone Number**: String
6. **Position**: String (e.g., Therapist, Receptionist)
7. **Work Schedule**: Object (days and hours)
8. **Appointments**: Array of appointment IDs

### Admin Schema

1. **ID**: Unique identifier (auto-generated)
2. **Name**: String
3. **Email**: String (unique)
4. **Password**: Encrypted String
5. **Phone Number**: String
6. **Role**: String (e.g., Manager, Owner)
7. **Permissions**: Array of permissions (e.g., can delete users, can update
   schedule)

---

## Progress Update - [08/29/2023]

### Completed Tasks

1. **Scope Refinement**: Revisited the project scope to focus more on
   functionality rather than testing at this stage.
2. **API Structure**: Discussed and planned the API structure, specifically
   focusing on user profiles, starting with customer profiles.
3. **File Structure**: Reviewed the existing file structure to identify the
   files that need to be worked on.
4. **Controller Logic**: Implemented the basic logic for creating a new customer
   profile in `CustomerController.js`.
5. **Routes**: Created `customerRoutes.js` to handle CRUD operations for
   customer profiles.
6. **Server Setup**: Reviewed and updated `index.js` to ensure it correctly
   imports and uses the customer routes.

## Progress Update - [08/30/2023]

-   **Admin Model**

    -   Created `AdminController.js` to handle CRUD operations for Admin
        profiles.
    -   Implemented `AdminProfile.js` as the Mongoose schema for Admin.
    -   Added `adminService.js` to abstract database operations for Admin.

-   **Customer Model**

    -   Completed `CustomerController.js` with full CRUD operations.
    -   Reviewed and confirmed the Mongoose schema in `CustomerProfile.js`.
    -   Added missing `customerService.js` to handle database operations for
        Customer.

-   **Staff Model**

    -   Created `StaffController.js` for CRUD operations for Staff profiles.
    -   Implemented `StaffProfile.js` as the Mongoose schema for Staff.
    -   Added `staffService.js` to abstract database operations for Staff.

-   **Routes**

    -   Defined routes for Admin, Customer, and Staff in `adminRoutes.js`,
        `customerRoutes.js`, and `staffRoutes.js` respectively.

#### Customer Endpoints

-   Create: `POST /api/customers`
-   Update: `PUT /api/customers/:id`
-   Get by ID: `GET /api/customers/:id`
-   Get All: `GET /api/customers`
-   Delete: `DELETE /api/customers/:id`

#### Staff Endpoints

-   Create: `POST /api/staff`
-   Update: `PUT /api/staff/:id`
-   Get by ID: `GET /api/staff/:id`
-   Get All: `GET /api/staff`
-   Delete: `DELETE /api/staff/:id`

#### Admin Endpoints

-   Create: `POST /api/admin`
-   Update: `PUT /api/admin/:id`
-   Get by ID: `GET /api/admin/:id`
-   Get All: `GET /api/admin`
-   Delete: `DELETE /api/admin/:id`

#### Appointment Endpoints

-   Create: `POST /api/appointments`
-   Update: `PUT /api/appointments/:id`
-   Get by ID: `GET /api/appointments/:id`
-   Get All: `GET /api/appointments`
-   Delete: `DELETE /api/appointments/:id`

#### Auth Endpoints

-   Customer Login: `POST /api/auth/customer-login`
-   Staff Login: `POST /api/auth/staff-login`
-   Admin Login: `POST /api/auth/admin-login`
-   Logout: `POST /api/auth/logout`
-   Refresh: `POST /api/auth/refresh`
