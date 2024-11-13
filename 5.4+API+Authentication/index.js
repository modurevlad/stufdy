import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "vladut123";
const yourPassword = "parola123";
const yourAPIKey = "4a09c6ac-b1be-4f7c-817d-1f5c488aa461";
const yourBearerToken = "22ad0381-3320-4a6b-a8df-4acdb666c39a";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: "vladut123",
        password: "parola123",
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  const result = await axios.get(API_URL + "/filter?score=5&apiKey=4a09c6ac-b1be-4f7c-817d-1f5c488aa461");
  res.render("index.ejs", { content: JSON.stringify(result.data) });
});

const config = {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`,
  },
};
app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402

  const result = await axios.get(API_URL + "/secrets/42", config);
  res.render("index.ejs", { content: JSON.stringify(result.data) });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
