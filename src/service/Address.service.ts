import { Address } from "../model/Address";
import NumberUtil from "../util/NumberUtil";

export class AddressService {

    async findAllById(userId: number) : Promise<Address[]>{
        await new Promise((resolve) => setTimeout(resolve, NumberUtil.getRandomInt(200)));
        return [
            {
                id: 0,
                name: "Home",
                street : "R. Street 123" + userId,
                complement: "",
                city: "Sao Paulo",
                province : "SP",
                postalCode: "08676250"
            } as Address
        ]
    }
}