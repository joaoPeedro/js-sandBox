import { useEffect, useState } from "react";

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://tables-7ac1f.firebaseio.com/sales.json")
      .then((response) => {
        console.log(response);

        if (response.ok) {
          return response.json();
        } else {
          console.log("Network response was not ok.");
        }
      })
      .then((data) => {
        console.log(data);
        let arrangeSales = [];

        for (const sale in data) {
          arrangeSales.push({
            id: sale,
            username: data[sale].username,
            volume: data[sale].volume,
          });
        }
        setSales(arrangeSales);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }, []);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  // este vai ser o state inicial do componet (pre-render) porque n temos data
  if (!isLoading) {
    return <h4>No sales</h4>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username}: volume {sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSalesPage;
