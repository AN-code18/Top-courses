import React, { useState } from "react";
import Card from "./Card.js";
import "../styles/Cards.css";

const Cards = (props) => {
  let courses = props.courses;
  let category  = props.category ;
  const [likedCourse, setLikedCourse] = useState([]);

  //return a list of all courses received from the api response
  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      // console.log("printing courses");
      // console.log(courses);

      //courses data is present in key value pair type , so we are using Object.values() to convert  data into array   
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  }

  return (
    <div className="main-card">
      {/* har ek course k liye card create kr rhe by using map function */}
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourse={likedCourse}
            setLikedCourse={setLikedCourse}
          />
        );
      })}
    </div>
  );
};

export default Cards;
