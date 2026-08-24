import {useParams} from "react-router";



const CartsComponent = () => {
    const {id} = useParams();
    console.log(id);
    // const [carts, setCarts] = useState([]);

    return (

        <div>
            Cart Component
        </div>
    );
};

export default CartsComponent;
