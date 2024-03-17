import axios from "axios";
import { CarModel } from "../components/CardView/props";
import { CAR_API_BASE_URL } from "../constants/car";

interface ApiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async () => {
    try {
        const response = await axios.get<ApiResponse>(CAR_API_BASE_URL);
        const carData = response.data.cars.find((car) => car.id === 1) || null;
    } catch (error) {   
        console.log('Erro ao buscar dados da api', error);
    }
};
