import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const city = localStorage.getItem("city");

    axios
      .get(`http://localhost:5000/restaurants?city=${city}`)
      .then((res) => setRestaurants(res.data))
      .catch(() => alert("Error fetching restaurants"));
  }, []);

  return (
    <div>
      <h2>Restaurants</h2>

      {restaurants.map((r) => (
        <div key={r._id}>
          <h3>{r.name}</h3>

          <button onClick={() => navigate(`/menu/${r._id}`)}>
            View Menu
          </button>
        </div>
      ))}
    </div>
  );
}

export default Restaurants;