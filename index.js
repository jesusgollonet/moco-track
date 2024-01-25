import dotenv from "dotenv";
dotenv.config();

const { API_KEY, BASE_URL } = process.env;

async function main() {
  const response = await fetch(`${BASE_URL}api/v1/projects/assigned`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${API_KEY}`,
    },
  });
  const payload = await response.json();
  payload.forEach((project) => {
    console.log(project.name);
    project.tasks.forEach((task) => {
      console.log(">   ", task.name);
    });
    console.log("------------------");
  });
}
main();
