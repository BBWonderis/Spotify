import { useEffect } from "react";

function HomePage() {
  const userData = {
    username: "john_",
    email: "john@example.com",
    password: "securepassword123"
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  };

  const url = "http://127.0.0.1:5000/create"; // Ensure this matches the route in your Flask app

  useEffect(() => {
    fetch(url, options);
  }, []);

  return <div>Home Page</div>;
}

export default HomePage;
