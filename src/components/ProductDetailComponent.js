import React, { Component } from 'react';
import $ from 'jquery';
import { Animated } from 'react-animated-css';

export class ProductDetailComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {}
  getHeader() {
    let index = this.props.index;
    if (index == 1) return 'Automated Machine Learning';
    if (index == 2) return 'Automated Time Series';
    if (index == 3) return 'MLOps and Governance';
    if (index == 4) return 'Automated Machine Learning';
  }
  getData() {
    let index = this.props.index;
    if (index == 1)
      return 'Automate the creation of advanced machine learning models that incorporate our world-class data science expertise.';
    if (index == 2)
      return 'Automate the development of sophisticated time series models that predict the future values of a data series based on its history and trend. Organizations of all sizes will improve forecasts for sales volume, product demand by SKU, staffing, inventory, and a host of financial applications.';
    if (index == 3)
      return 'Delivering the capabilities that Data Science and IT Ops teams need to work together to deploy, monitor, and manage machine learning models in production.';
    if (index == 4)
      return 'Automate the creation of advanced machine learning models that incorporate our world-class data science expertise.';
  }
  render() {
    return (
      <div className="detail" style={{ height: window.innerHeight }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h1>{this.getHeader()}</h1>
              <p>{this.getData()}</p>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => this.props.changeSelectedValue(this.getHeader())}
              >
                REQUEST A DEMO
              </button>
            </div>
            <div className="col-md-6 col-sm-12">
              <img src={require('../images/robot.jpg')} />
              <p style={{ fontSize: '8px', marginTop: '-10px' }}>
                <cite>Photo by Andrea De Santis on Unsplash</cite>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// const styles = {
//   data: {
//     height: window.innerHeight,
//     width: window.innerWidth,
//   }
// }
