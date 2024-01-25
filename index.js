import dotenv from "dotenv";
dotenv.config();
const { API_KEY, BASE_URL } = process.env;

fetch(`${BASE_URL}api/v1/activities`, {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token token=${API_KEY}`,
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log("Time tracking started for project1");
  })
  .catch((error) => {
    console.error("Error starting time tracking:", error);
  });
