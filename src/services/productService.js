import axios from "axios"

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8091/api/products/getall")
    }

}