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
