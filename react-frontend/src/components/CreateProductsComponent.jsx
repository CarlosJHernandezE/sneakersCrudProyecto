import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class CreateProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
        
            productName: '',
            brand: '',
            listPrice: '',
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);

        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    // step 3

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let products = {productName: this.state.productName, brand: this.state.brand, listPrice: this.state.listPrice};
        console.log('products => ' + JSON.stringify(products));


            ProductService.createProducts(products).then(res =>{
                this.props.history.push('/products');
            });
   
       
    }
    
    changeProductNameHandler= (event) => {
        this.setState({productName: event.target.value});
    }

    changeBrandHandler= (event) => {
        this.setState({brand: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({listPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/products');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Agregar Item</h3>
        }else{
            return <h3 className="text-center">Crear Item</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nombre del Item: </label>
                                            <input placeholder="Producto" name="firstName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Marca: </label>
                                            <input placeholder="Marca" name="lastName" className="form-control" 
                                                value={this.state.brand} onChange={this.changeBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Precio: </label>
                                            <input placeholder="Precio" name="emailId" className="form-control" 
                                                value={this.state.listPrice} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProductsComponent
