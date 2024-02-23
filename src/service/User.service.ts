import User from "../model/User";
import NumberUtil from "../util/NumberUtil";

class UserService {

    async login(email: string, password: string) {
        console.log(email, password);
        await new Promise((resolve) => setTimeout(resolve, NumberUtil.getRandomInt(200)));

        return {
            id: 0,
            isLogged: true
        } as User;
    }

    async getInfo(id: number) {
        console.log(id);
        await new Promise((resolve) => setTimeout(resolve, NumberUtil.getRandomInt(200)));

        return {
            id: 0,
            name: "Lucas",
            phoneNumber: "+55011948073154",
            gender: "M",
            email: "lucasjulioalves@gmail.com",
            document: "11122233344",
            birth : "23/07/1997",
            isLogged: true
        } as User;
    }
    
}

export default UserService;