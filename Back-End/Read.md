# Task Manager API

## Authentication

### POST /api/login
- Generate a token for authentication.
- **Request Body:**
  - username: string (required)
- **Response:**
  - 200 OK: Returns the access token.

## Endpoints

### GET /api/tasks
- Retrieve a list of all tasks.
- **Query Parameters:**
  - title: string (optional) - Filter tasks by title.
  - description: string (optional) - Filter tasks by description.
  - sortBy: string (optional) - Sort tasks by a field (e.g., title).
  - order: string (optional) - Sort order (asc or desc).
- **Response:**
  - 200 OK: Returns a list of tasks.

### GET /api/tasks/:id
- Retrieve a specific task by ID.
- **Response:**
  - 200 OK: Returns the task.
  - 404 Not Found: Task not found.

### POST /api/tasks
- Create a new task.
- **Request Body:**
  - title: string (required)
  - description: string (required)
- **Response:**
  - 201 Created: Returns the created task.
  - 400 Bad Request: Title and description are required.

### PUT /api/tasks/:id
- Update an existing task by ID.
- **Request Body:**
  - title: string (required)
  - description: string (required)
- **Response:**
  - 200 OK: Returns the updated task.
  - 400 Bad Request: Title and description are required.
  - 404 Not Found: Task not found.

### DELETE /api/tasks/:id
- Delete a task by ID.
- **Response:**
  - 204 No Content: Task deleted.
  - 404 Not Found: Task not found.

## Running the API

1. Unzip the project.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the server: `npm start`.
5. The API will be running at `http://localhost:3000`.

## Testing the API

- Use tools like Postman or curl to test the endpoints.

### Authentication

1. **POST /api/login**
   - Request:
     - URL: `http://localhost:3000/api/login`
     - Method: `POST`
     - Body: `{"username": "your_username"}`
   - Response:
     - `{"accessToken": "your_access_token"}`

2. Use the `accessToken` in the `Authorization` header for all subsequent requests:
   - `Authorization: Bearer your_access_token`
### Example Postman Requests

#### GET /api/tasks

- URL: `http://localhost:3000/api/tasks`
- Method: `GET`
- Headers:
  - Authorization: Bearer `your_access_token`

#### POST /api/tasks

- URL: `http://localhost:3000/api/tasks`
- Method: `POST`
- Headers:
  - Authorization: Bearer `your_access_token`
- Body:
  ```json
  {
    "title": "Learn OOP",
    "description": "Join Cdac"
  }
Sorting and Filtering
You can test the sorting and filtering functionality by adding query parameters to the GET /api/tasks request.

Filtering by Title
Request:

Method: GET
URL: http://localhost:3000/api/tasks?title=New
Response:

You should receive a 200 OK status with tasks that contain "New" in the title.
Sorting by Title
Request:

Method: GET
URL: http://localhost:3000/api/tasks?sortBy=title&order=asc
Response:

You should receive a 200 OK status with tasks sorted by title in ascending order.