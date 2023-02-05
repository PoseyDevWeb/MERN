import React, { useEffect, useState } from "react";

const UseRecuperation = (url) => {
  const [Data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [erreur, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((responses) => {
        if (!responses.ok) {
          throw Error("Desolé une erreur est survenue");
        }
        return responses.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [url]);
  return { Data, isLoading, erreur };
};

export default UseRecuperation;
