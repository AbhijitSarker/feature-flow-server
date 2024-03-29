# Feature Flow Server

- Frontend Code: https://github.com/AbhijitSarker/feature-flow
- Frontend Live Link: [https://feature--flow.web.app](https://feature--flow.web.app)

## App Details

The project revolves around a feature board management system designed to streamline feature requests, updates, and management within a web application. Its primary goals include:

1.  **Feature Request Management:**

    - Allow users to submit feature requests or suggestions through a dedicated platform.
    - Enable administrators to review, update, and prioritize these requests.

2.  **Dashboard for Administrators:**

    - Provide a user-friendly dashboard for administrators to manage feature requests efficiently.
    - Allow administrators to update feature details such as title, description, status, and sorting order.

3.  **Enhanced User Experience:**

    - Improve user experience by offering a centralized platform for users to submit, track, and engage with feature requests.

4.  **Efficient Organization and Prioritization:**

    - Facilitate effective organization and prioritization of feature requests based on status, user feedback, and importance.

5.  **Configurability and Flexibility:**

    - Provide configurability to allow administrators to update the web app's logo, description, and other essential details easily.

The primary focus is on creating a feature-rich, user-centric platform that empowers both users and administrators, streamlining the process of handling feature requests while enhancing overall user experience and product development.

## Istallation Process

1. ### Clone the Project:

   - Clone the project repository.
   - Use `git clone https://github.com/AbhijitSarker/feature-flow-server.git` in your terminal.

2. ### Install Dependencies:

   - Navigate to the project directory.
   - Run `npm install` to install all project dependencies specified in `package.json`.

3. ### Environment Variables:

   - Create a `.env` file in the root directory.
   - Add your environment variables (e.g., DB_PASS, DB_USER, DB_NAME) in the `.env` file:

4. ### Backend Setup:

   - Make sure you have Node.js installed on your machine.
   - Set up your MongoDB Atlas account or local MongoDB server.
   - Update the `start` function in your backend code to use the environment variables.

5. ### Run the Server:

   - Execute `npm start` or `nodemon index.js` in the terminal to start the backend server.
   - Check the console for the message "Server is running at PORT..." to ensure it's running.

### Additional Tips:

- Verify that MongoDB is running and accessible with the provided URI.
- Make sure the MongoDB driver (Mongoose) is correctly installed.
- Check for any errors or warnings displayed in the console during server startup.
- Test API endpoints to ensure the backend functions as expected.

This setup process assumes you've already set up Node.js, MongoDB, and have access to the required credentials. Adjust the steps according to your specific environment and project structure.

# Feature API Documentation

The Feature API is designed to manage feature requests, allowing users to perform CRUD operations and search for specific features. This documentation outlines the available endpoints and their functionalities.

## Base URL

The base URL for accessing the Feature API is `/api/v1/feature`.

## Endpoints

### Get all features

- URL: `/`
- Method: `GET`
- Description: Retrieves all features with optional sorting and filtering options.
  - Query Parameters:
    - `sortBy`: Field to sort by (default: `createdAt`)
    - `order`: Sort order (`asc` or `desc`, default: `desc`)
    - `status`: Filters features by status
  - Response: Returns a JSON object containing an array of features.

### Search features

- URL: `/?search=<search_query>`
- Method: `GET`
- Description: Searches for features based on provided search queries in titles or descriptions.
  - Query Parameters:
    - `search`: Search query string
  - Response: Returns a JSON object containing an array of features matching the search query.

### Get a specific feature

- URL: `/:id`
- Method: `GET`
- Description: Retrieves details of a specific feature by its ID.
  - Params:
    - `id`: Feature ID
  - Response: Returns a JSON object containing the feature details.

### Create a new feature

- URL: `/`
- Method: `POST`
- Description: Creates a new feature based on provided request body.
  - Request Body: JSON object representing the new feature.
  - Response: Returns a success message upon successful creation.

### Update a feature

- URL: `/:id`
- Method: `PATCH`
- Description: Updates an existing feature by its ID with provided request body data.
  - Params:
    - `id`: Feature ID
  - Request Body: JSON object containing updated feature data.
  - Response: Returns a JSON object containing the updated feature details.

### Delete a feature

- URL: `/:id`
- Method: `DELETE`
- Description: Deletes a feature by its ID.
  - Params:
    - `id`: Feature ID
  - Response: Returns a JSON object containing the deleted feature details.

### Like/Unlike a feature

- URL: `/:id/like`
- Method: `PUT`
- Description: Allows users to like/unlike a feature by its ID.
  - Params:
    - `id`: Feature ID
  - Request Body: JSON object containing `email` to track likes.
  - Response: Returns a success message indicating whether the feature was liked or unliked.

# Comment API Documentation

The Comment API manages comments associated with features, allowing users to add, retrieve, and delete comments.

## Base URL

The base URL for accessing the Comment API is `/api/v1/comment`.

## Endpoints

### Get comments by Feature ID

- URL: `/`
- Method: `GET`
- Description: Retrieves comments associated with a specific feature.
  - Query Parameters:
    - `featureId`: ID of the feature to retrieve comments for.
  - Response: Returns a JSON object containing an array of comments for the specified feature.

### Create a new comment

- URL: `/`
- Method: `POST`
- Description: Creates a new comment and associates it with a specific feature.
  - Request Body: JSON object representing the new comment. Should include `featureId` to associate with the feature.
  - Response: Returns a success message and the created comment upon successful creation.

### Update a Comment

- URL: `/:id`
- Method: `PATCH`
- Description: Updates an existing Comment by its ID with provided request body data.
  - Params:
    - `id`: Comment ID
  - Request Body: JSON object containing updated Comment data.
  - Response: Returns a JSON object containing the updated Comment details.

### Delete a comment

- URL: `/:commentId/:featureId`
- Method: `DELETE`
- Description: Deletes a specific comment associated with a feature by its ID.
  - Params:
    - `commentId`: ID of the comment to be deleted.
    - `featureId`: ID of the feature the comment is associated with.
  - Response: Returns a JSON object containing the deleted comment details.

# User API Documentation

The User API manages user-related operations, allowing users to be created, retrieved, updated, and deleted.

## Base URL

The base URL for accessing the User API is `/api/v1/user`.

## Endpoints

### Get all users

- URL: `/`
- Method: `GET`
- Description: Retrieves all users.
  - Response: Returns a JSON object containing an array of users.

### Create a new user

- URL: `/`
- Method: `POST`
- Description: Creates a new user.
  - Request Body: JSON object representing the new user.
  - Response: Returns a success message upon successful user creation.

### Get a single user

- URL: `/:userId`
- Method: `GET`
- Description: Retrieves details of a specific user by ID.
  - Params:
    - `userId`: ID of the user to retrieve.
  - Response: Returns a JSON object containing the details of the requested user.

### Update a user

- URL: `/:userId`
- Method: `PATCH`
- Description: Updates an existing user by ID.
  - Params:
    - `userId`: ID of the user to update.
  - Request Body: JSON object containing updated user data.
  - Response: Returns a success message and the updated user details upon successful update.

### Delete a user

- URL: `/:userId`
- Method: `DELETE`
- Description: Deletes a user by ID.
  - Params:
    - `userId`: ID of the user to delete.
  - Response: Returns a success message and the deleted user details upon successful deletion.

# App Information API Documentation

The App Information API manages information related to the application, allowing retrieval, creation, and updating of app details.

## Base URL

The base URL for accessing the App Information API is `/api/v1/app`.

## Endpoints

### Get app information

- **URL:** `/`
- **Method:** `GET`
- **Description:** Retrieves information about the app.
  - **Response:** Returns a JSON object containing app information.

### Create app information

- **URL:** `/`
- **Method:** `POST`
- **Description:** Creates new app information.
  - **Request Body:** JSON object representing the new app information.
  - **Response:** Returns a success message upon successful insertion of app information.

### Update app information

- **URL:** `/:id`
- **Method:** `PATCH`
- **Description:** Updates existing app information by ID.
  - **Params:**
    - `id`: ID of the app information to update.
  - **Request Body:** JSON object containing updated app information.
  - **Response:** Returns a success message and the updated app information upon successful update.

## Error Handling

- The API returns appropriate error responses in case of server-side errors or invalid requests.
