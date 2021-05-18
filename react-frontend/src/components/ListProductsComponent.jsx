import React, { Component } from "react";
import ProductService from "../services/ProductService";

class ListProductsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
    this.addProducts = this.addProducts.bind(this);
    this.editProducts = this.editProducts.bind(this);
    this.deleteProducts = this.deleteProducts.bind(this);
  }

  deleteProducts(id) {
    ProductService.deleteProducts(id).then((res) => {
      this.setState({
        products: this.state.products.filter((products) => products.id !== id),
      });
    });
  }
  viewProducts(id) {
    this.props.history.push(`/view-products/${id}`);
  }
  editProducts(id) {
    this.props.history.push(`/update-products/${id}`);
  }

  componentDidMount() {
    ProductService.getProducts().then((res) => {
      this.setState({ products: res.data });
    });
  }

  addProducts() {
    this.props.history.push("/add-products");
  }

  render() {
    return (
      <div>
        <br />
        <h2 className="text-center">Inventario de Tienda</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addProducts}>
            {" "}
            Aregar Item
          </button>
        </div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th> Codigo</th>
                <th> Nombre del Producto</th>
                <th> Marca</th>
                <th> Precio</th>
                <th> Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((products) => (
                <tr key={products.id}>
                  <td> {products.id} </td>
                  <td> {products.productName}</td>
                  <td> {products.brand}</td>
                  <td> $ {products.listPrice}</td>
                  <td>
                    <button
                      onClick={() => this.editProducts(products.id)}
                      className="btn btn-info"
                    >
                      Actualizar{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deleteProducts(products.id)}
                      className="btn btn-danger"
                    >
                      Eliminar{" "}
                    </button>
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.viewProducts(products.id)}
                      className="btn btn-info"
                    >
                      Ver{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListProductsComponent;
