import './CoursesComponent.css';
import {coursesAndDurationArray} from "../../data/coursesAndDurationArray.ts";
import type {CourseModel} from "../../moduls/CourseModel.ts";
import CourseComponent from "../course-component/CourseComponent.tsx";

const CoursesComponent = () => {
    return (
        <ul className="coursesUl">
            {
                coursesAndDurationArray.map((course:CourseModel,index:number)=>{
                    return <CourseComponent course={course} key={index}/>
                })
            }

        </ul>
    );
};

export default CoursesComponent;
