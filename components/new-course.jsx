import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsArrowDownRightCircle } from 'react-icons/bs';
export default function Course({ homeid, bannerurl, alt, title, description }) {
  return (
    <>
      <div className="course-comp">
        <Image
          className="course-image"
          width={"400px"}
          height="150px"
          alt={alt}
          src={bannerurl}
        ></Image>
        <div className="course-cont">
          <h2>{title}</h2>
          <hr></hr>
       
         <p class="course-description">{description}</p>
            <a className="coursen-button" href={homeid}>Begin Course</a>
        
        </div>
      </div>
    </>
  );
}
