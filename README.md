
# Logger Middleware

An Express middleware function for logging incoming requests to an Express server. The middleware logs essential request information such as the HTTP method, URL, access token, and timestamp in a standardized format. The middleware is designed to be applied globally to all routes in an Express application, offering a convenient way to monitor and debug incoming requests.




## API Reference

#### Sample Endpoint

```
  GET /api/users
```

#### Sample Request using curl

```http
  curl -X GET http://localhost:5000/api/users -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

```



#### loggingMiddleware()

Extracts the request method and url and print logs in the format -

 `[Timestamp] Method: URL `
 
Example log - 

`[2024-02-12T15:30:28.784Z] GET: /api/users, AccessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"`




## Run Locally

Clone the project

```bash
  git clone https://github.com/codemohitpra03/Logger-Rooba_Finance
```

Go to the project directory

```bash
  cd Logger-Rooba_Finance
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Live url


## Tech Stack

**Server:** Node, Express

## Authors

- [@codemohitpra03](https://www.github.com/codemohitpra03)
