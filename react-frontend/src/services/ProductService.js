import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/products";

class ProductsService {

    getProducts(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createProducts(products){
        return axios.post(EMPLOYEE_API_BASE_URL, products);
    }

    getProductsById(productsId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }

    updateProducts(products, productsId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + productsId, products);
    }

    deleteProducts(productsId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + productsId);
    }
}

export default new ProductsService()