import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "../styles/Card.css";

const Card = (props) => {
  let course = props.course;
  let likedCourse = props.likedCourse;
  let setLikedCourse = props.setLikedCourse;

  function clickHandler() {
    if (likedCourse.includes(course.id)) {
      //agr id  already padi hui h -- >> phle se like hua pada tha course

      //unlike kro
      setLikedCourse((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed");
    } else {
      //phle se like nhi h yeh course toh insert krna h yeh course liked courses me
      //like kro
      if (likedCourse.length === 0) {
        setLikedCourse([course.id]);
      } else {
        //when length -->> non-empty  hai phle se
        setLikedCourse((prev) => [...prev, course.id]);
      }
      toast.success("Liked sucessfully");
    }
  }
  return (
    <div className="card-container">
      <div className="card-div">
        <img className="image" src={course.image.url}></img>
        <div className="icon-btn">
          <button onClick={clickHandler}>
            {likedCourse.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div className="info-div">
        <p className="course-title">{course.title}</p>
        <p className="course-desc">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
