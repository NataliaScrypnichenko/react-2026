import './CourseComponent.css';
import type {FC} from "react";
import type {CourseModel} from "../../moduls/CourseModel.ts";

type PropsType = {
    course: CourseModel
}

export const CourseComponent:FC<PropsType>= ({course} ) => {
    return(
        <li className='courseLi'>
            {course.title}-{course.monthDuration}
        </li>
    )

};

export default CourseComponent;
