import React, { useEffect, useState } from "react";
import "./App.css";
import { apiUrl, filterData } from "./data.js";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    //jb tk data aa rha h tb tk spinner show kro
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //save data into a variable
      setCourses(output.data);
      console.log("courses value updated");
      console.log(output);
    } catch {
      toast.error("Something went  wrong");
    }

    // data aagya toh spinner ko hata do 
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{backgroundColor:" rgb(51 65 85)" , minHeight:"100vh"}}>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div className="spinner-cards">
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
