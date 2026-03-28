import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Menu() {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/menu/${id}`)
      .then((res) => setMenu(res.data))
      .catch(() => alert("Error fetching menu"));
  }, [id]);

  return (
    <div>
      <h2>Menu</h2>

      {menu.map((item) => (
        <div key={item._id}>
          <p>
            {item.name} - ₹{item.price}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Menu;