// Custom Hook

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json"
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // .then((res)=> setData(res.currency))

    console.log(data);
  }, [currency]);
  // [currency] means it will only work when currency (prop) changes

  console.log(data);
  return data;
}

export default useCurrencyInfo;
