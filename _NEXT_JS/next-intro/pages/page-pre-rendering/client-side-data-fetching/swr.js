import { useEffect, useState } from "react";
import useSWR from "swr";

// SWR é uma hook criada para fazer ligações a serviços/api's

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const { data, error } = useSWR(
    "https://tables-7ac1f.firebaseio.com/sales.json"
  );

  useEffect(() => {
    if (data) {
      let arrangeSales = [];

      for (const sale in data) {
        arrangeSales.push({
          id: sale,
          username: data[sale].username,
          volume: data[sale].volume,
        });
      }

      setSales(arrangeSales);
    }
  }, [data]);

  if (error) {
    return <h4>failed to load</h4>;
  }
  // este vai ser o state inicial do componet (pre-render) porque n temos data
  if (!data || !sales) {
    return <h4>Loading...</h4>;
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
