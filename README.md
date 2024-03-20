# SendEmail
The code sets up an Express server to handle email sending using Nodemailer. It imports necessary packages like `express`, `nodemailer`, `body-parser`, `cors`, and `dotenv` for configuration. It defines a port for the server to listen on, defaulting to 3000 if not specified in the environment variables. The server uses `body-parser` to parse incoming JSON data and `cors` middleware to allow cross-origin requests from any origin.

The `/send-email` endpoint is a POST route that expects JSON data with the email recipient, subject, and message. It creates a Nodemailer transporter with the provided SMTP server details and sends the email. If successful, it logs the email response and sends a 200 status response with a success message. If there's an error, it logs the error and sends a 500 status response with an error message.

Additionally, the server includes a simple `/api/v1` endpoint that responds with a JSON message to indicate that the server is running. This endpoint is useful for checking the server status.

The server starts listening on the specified port, and a message is logged to indicate that the server is running.

Overall, this code provides a basic setup for an Express server to send emails using Nodemailer, with the ability to handle CORS requests and a simple API endpoint for checking server status.
