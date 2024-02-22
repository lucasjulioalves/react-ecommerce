import { Product } from "../model/Product";

export default class ProductService {

    async findAll() : Promise<Array<Product>> {
        const products = [];
        await new Promise((resolve) => setTimeout(resolve, this.getRandomInt(200)));
        for(let i = 0; i < 20; i++) {
            products.push({
                id: i,
                imgPath: "https://picsum.photos/200",
                name: `Product ${i}`,
                price: this.getRandomInt(2000).toFixed(2)
            } as Product)
        }

        return products;
    }

    async findById(id: number) {
        return (await this.findAll()).filter(p => p.id === id );
    }

    private getRandomInt(max: number) : number{
        return Math.floor(Math.random() * max);
    }
      
}