import axios from "axios";

async function getUserDetails() {
  const response = await axios.get(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div>
      Hi there
      <h1>{userData.email}</h1>
      <h1>{userData.name}</h1>
    </div>
  );
}
