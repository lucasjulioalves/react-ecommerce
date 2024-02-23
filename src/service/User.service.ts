import User from "../model/User";
import NumberUtil from "../util/NumberUtil";

class UserService {

    async login(email: string, password: string) {
        console.log(email, password);
        await new Promise((resolve) => setTimeout(resolve, NumberUtil.getRandomInt(200)));

        return {
            name: "Lucas",
            isLogged: true
        } as User;
    }
    
}

export default UserService;