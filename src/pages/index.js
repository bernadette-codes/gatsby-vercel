import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/index.css";

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch("/api/date");
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Gatsby + Vercel</title>
      </Helmet>
      <h1>Hello World!</h1>
      <h2>Gatsby + Vercel demo site for Arke</h2>
      <br />
      <h3>The date today is:</h3>
      <p>{date ? date : "Loading date..."}</p>
    </main>
  );
}

export default Index;
