# MDN Local Library

## Introduction

The MDN Local Library is a Node.js/Express web application that serves as an online catalog for a small local library. It allows users to browse/add books. This project is part of [The Odin Project](https://github.com/m-ngr/The-Odin-Project).

![A UML diagram showing the relation of database entities in this example repository](https://raw.githubusercontent.com/mdn/express-locallibrary-tutorial/main/public/images/Library%20Website%20-%20Mongoose_Express.png)

For a comprehensive guide on how to build this application, please refer to the associated [MDN tutorial home page](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website).

## Quick Start

To set up and run the MDN Local Library project on your local machine, follow these steps:

1. **Node.js Development Environment Setup:**
   If you haven't already, set up a [Node.js development environment](https://wiki.developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/development_environment) on your computer.

2. **Project Installation:**
   After setting up Node.js, navigate to the root of your clone of this repository and install the required dependencies using npm:

   ```bash
   npm install
   ```
3. **Start the Server:**
   Run the following command to start the server:

   ```bash
   npm run server
   ```
4. **Access the Local Library Website:**
   Once the server is up and running, open your web browser and go to <http://localhost:3000/> to access the local library site.

> **Note:** The MDN Local Library uses a default MongoDB database hosted on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). If you plan to experiment with your own code, you should use a different database. Provide the MongoDB URI as an environment variable named `mongoDB`.

