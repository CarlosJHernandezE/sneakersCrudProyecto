import React, { Component } from 'react'
import ProductService from '../services/ProductService';

class UpdateProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            brand: '',
            listPrice: ''
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeBrandHandler = this.changeBrandHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);

        this.updateProducts = this.updateProducts.bind(this);
    }

    componentDidMount(){
        ProductService.getProductsById(this.state.id).then( (res) =>{
            let products = res.data;
            this.setState({productName: products.productName,
                brand: products.brand,
                listPrice : products.listPrice
            });
        });
    }

    updateProducts = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName, brand: this.state.brand, listPrice: this.state.listPrice};
        console.log('employee => ' + JSON.stringify(product));
        console.log('id => ' + JSON.stringify(this.state.id));
        ProductService.updateProducts(product, this.state.id).then( res => {
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Nombre del Producto: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.productName} onChange={this.changeProductNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Marca del Producto: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.brand} onChange={this.changeBrandHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Precio del Producto: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.listPrice} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProducts}>Save</button>
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

export default UpdateProductsComponent
