import ChooseRightComponent from "./ChooseRightComponent";
import ListenAndTypeComponent from "./ListenAndTypeComponent";
import TaskBox from "./TaskBox";

function TaskWrapper(props) {
    


    switch (props.exercise.type){
        case "Type1":
            return(<TaskBox exercise={props.exercise}/>)
        case "Type2":
            return(<ListenAndTypeComponent exercise={props.exercise}/>)
        default:
            return(<ChooseRightComponent exercise={props.exercise}/>)

    }

}

export default TaskWrapper;