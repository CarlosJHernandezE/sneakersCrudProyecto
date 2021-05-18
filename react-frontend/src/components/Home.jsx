import React, { Component } from 'react'
import '../styles/home.scss';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>

        <div class="wrapper">
          <section class="hero">
            <div class="jumbotron jumbotron-fluid mb-0">
              <div class="container">
                <div class="row justify-content-center text-center">
                  <div class="col-md-10 col-lg-6">
                    <h1 class="display-5">La tienda de zapatos mas grande de México y del Mundo</h1>

                    <p class="lead">Bienvenido a la red mas grande de distribución de sneakers</p>

                    <p class="lead">
                      <a class="btn btn-primary btn-lg" href="/products" role="button">Inventario</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="sec-about" class="sec-about pt-5 pb-5">
            <div class="container">
              <div class="row justify-content-center text-center">
                <div class="col-md-10 col-lg-8">
                  <h1 class="h4">Vision </h1>
                  <p class="mt-4 mb-4">Ser la empresa reconocida como líder en zapatos a nivel mundial por parte de sus consumidores, empleados, clientes, proveedores y todos los grupos de interés relacionados con la actividad de la compañía</p>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-sm-4">
                  <h4>350</h4>

                  <hr />

                  <h5>
                    Miembros</h5>
                </div>

                <div class="col-sm-4">
                  <h4>200</h4>

                  <hr />

                  <h5>Tiendas en el mundo </h5>
                </div>

                <div class="col-sm-4">
                  <h4>Top 1</h4>

                  <hr />

                  <h5>Ventas a nivel mundial</h5>
                </div>
              </div>
            </div>
          </section>

          <section id="sec-features" class="sec-features pt-5 pb-5">
            <div class="container">

              <div class="row align-items-center">
                <div class="col-md-6 text-center">
                  <img class="feature-icon" src={"/assets/medal.svg"} />,

        </div>

                <div class="col-md-6">
                  <h3 class="h4">Calidad Reconocida</h3>

                  <hr />

                  <p>Hemos ganado premios a nivel  mundial en calidad de produccion de nuestros sneakers</p>
                </div>
              </div>

              <div class="row align-items-center">
                <div class="col-md-6">
                  <h3 class="h4">Los Mejores Estilos</h3>

                  <hr />

                  <p>Para proporcionar servicios de alta calidad a nuestros clientes en todo el mundo, hemos desarrollado un programa de analisis y desarrollo de tecnologias. </p>
                </div>

                <div class="col-md-6 text-center">
                  <img class="feature-icon" src={"/assets/sneakers.svg"} />,
        </div>
              </div>
            </div>
          </section>

          <section id="sec-contact" class="sec-contact pt-5 pb-5">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-7">
                  <h1 class="h4">Preguntas? Ponte en contacto con nosotros!</h1>

                  <form action="" method="">
                    <fieldset class="form-group">
                      <label for="formName">Nombre:</label>
                      <input id="formName" class="form-control" type="text" placeholder="Tu nombre" required />
                    </fieldset>

                    <fieldset class="form-group">
                      <label for="formEmail1">Correo Electronico:</label>
                      <input id="formEmail1" class="form-control" type="email" placeholder="Ingresa tu email" required />
                    </fieldset>

                    <fieldset class="form-group">
                      <label for="formMessage">Mensaje:</label>
                      <textarea id="formMessage" class="form-control" rows="3" placeholder="Ingresa un mensaje" required></textarea>
                    </fieldset>

                    <fieldset class="form-group text-center">
                      <button class="btn btn-primary" type="submit">Enviar</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
    )
  }
}

export default Home
