import { Product } from "../model/Product";
import NumberUtil from "../util/NumberUtil";

export default class ProductService {

    async findAll() : Promise<Array<Product>> {
        const products = [];
        await new Promise((resolve) => setTimeout(resolve, NumberUtil.getRandomInt(200)));
        for(let i = 0; i < 20; i++) {
            products.push({
                id: i,
                imgPath: "https://picsum.photos/200",
                name: `Product ${i}`,
                price: NumberUtil.getRandomInt(2000).toFixed(2)
            } as Product)
        }

        return products;
    }

    async findById(id: number) {
        return (await this.findAll()).filter(p => p.id === id );
    }

      
}