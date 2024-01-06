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
