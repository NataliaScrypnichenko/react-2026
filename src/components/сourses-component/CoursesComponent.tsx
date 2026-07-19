import type {FC} from "react";
import type {ICourses} from "../../models/course/ICourses.tsx";
import CourseComponent from "../course-component/CourseComponent.tsx";

type CoursesComponentPropsType={
    courses: ICourses[];
}


export const CoursesComponent:FC<CoursesComponentPropsType> = ({courses}:CoursesComponentPropsType) => {
    return (
        <div>
            {
                courses.map((course,index) => <CourseComponent key={index} course={course}/>)
            }
        </div>
    );
};

export default CoursesComponent;
