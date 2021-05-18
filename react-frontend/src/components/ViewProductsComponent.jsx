import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ViewProductsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            products: {}
        }
    }

    componentDidMount(){
        ProductService.getProductsById(this.state.id).then( res => {
            this.setState({products: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Detalles del Producto</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nombre del Articulo: </label>
                            <div> { this.state.products.productName}</div>
                        </div>
                        <div className = "row">
                            <label> Marca del Articulo: </label>
                            <div> { this.state.products.brand }</div>
                        </div>
                        <div className = "row">
                            <label> Precio del Articulo: </label>
                            <div> { this.state.products.listPrice }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProductsComponent
