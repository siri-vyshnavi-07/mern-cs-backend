import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const selectCity = (city) => {
    localStorage.setItem("city", city);
    navigate("/restaurants");
  };

  return (
    <div>
      <h2>Select City</h2>

      <button onClick={() => selectCity("Hyderabad")}>
        Hyderabad
      </button>

      <button onClick={() => selectCity("Vizag")}>
        Vizag
      </button>
    </div>
  );
}

export default Home;