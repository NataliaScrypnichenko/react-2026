import type {FC} from "react";
import type {ICourses} from "../../models/course/ICourses.tsx";
import ModuleComponent from "../module-component/ModuleComponent.tsx";

type CoursesComponentPropsType = {
    course: ICourses;
}

export const CourseComponent:FC<CoursesComponentPropsType> = ({course}:CoursesComponentPropsType) => {

    return (
        <div className={'coursesClass'}>
            <h2>{course.title}</h2>
            <p> {course.monthDuration} months</p>
            <p> {course.hourDuration} hours</p>
            <ul>
                {
                    course.modules.map((module,index)=><ModuleComponent key={index} module={module}/>)
                }
            </ul>

        </div>
    );
};

export default CourseComponent;
