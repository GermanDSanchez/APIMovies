import { useState, useEffect } from "react";

export default function useFetch (url) {

    const [data, setData] = useState(null);

    const [similar, setSimilar] = useState(null);

    useEffect(() => {
        function fetchData() {
          fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => console.error("Error fetching data:", error));
        }
        fetchData();
      }, [url]);

    useEffect(() => {
      function fetchData() {
        fetch(url)
          .then((response) => response.json())
          .then((similar) => setSimilar(similar.results))
          .catch((error) => console.error("Error fetching data:", error));
      }
      fetchData();
    }, [url]);
    
    return {data, similar}
}