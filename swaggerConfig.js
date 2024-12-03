import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Employee & Product API",
      version: "1.0.0",
      description: "API documentation for managing employees and products",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Development server",
      },
    ],
  },
  apis: ["./swaggerDocs/*.js"], // Include all Swagger docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
