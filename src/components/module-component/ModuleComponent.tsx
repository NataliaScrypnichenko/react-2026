import type {FC} from "react";


type ModuleComponentPropsType = {
    module: string;
}

export  const ModuleComponent:FC<ModuleComponentPropsType> = ({ module }:ModuleComponentPropsType) => {

    return (
        <li>{module}</li>
    );
}

export default ModuleComponent;



