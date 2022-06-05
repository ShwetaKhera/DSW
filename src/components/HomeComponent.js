import React, { Component } from 'react';
import $ from 'jquery';
import { ProductDetailComponent } from './ProductDetailComponent';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';

let data = [
  {
    heading: 'Solution Acceleration',
    detail: 'Solve urgent business needs faster',
    imageUrl: require('../images/rocket.png'),
  },
  {
    heading: 'Data Scientist Productivity',
    detail: 'Get more projects done in less time',
    imageUrl: require('../images/rocket.png'),
  },
  {
    heading: 'Data Science Democratization',
    detail: 'Empower your existing team to build AI',
    imageUrl: require('../images/rocket.png'),
  },
  {
    heading: 'Solution Acceleration',
    detail: 'Solve urgent business needs faster',
    imageUrl: require('../images/rocket.png'),
  },
  {
    heading: 'Data Scientist Productivity',
    detail: 'Get more projects done in less time',
    imageUrl: require('../images/rocket.png'),
  },
  {
    heading: 'Data Science Democratization',
    detail: 'Empower your existing team to build AI',
    imageUrl: require('../images/rocket.png'),
  },
];

export class HomeComponent extends Component {
  constructor() {
    super();
    this.state = {
      showChild: false,
      index: 1,
      selectedValue: 'Inquiry category*',
      activeItemIndex: 0,

      children: [],
    };
    this.changeSelectedValue = this.changeSelectedValue.bind(this);
    setTimeout(() => {
      this.setState({
        children: this.createCardView(6),
      });
    }, 100);

    $(document).ready(() => {
      window.history.pushState(null, '', window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, '', window.location.href);
        this.setState({ showChild: false });
      };
    });
  }

  componentDidMount() {
    window.onhashchange = () => {
      this.setState({
        showChild: false,
      });
    };
    $(document).ready(function () {
      let lastposition = 0;
      var checkScrollBar = function () {
        if ($(this).scrollTop() < window.innerHeight) {
          $('.home').addClass('active');
          $('.product').removeClass('active');
          $('.contact').removeClass('active');
        }
        if (
          $(this).scrollTop() > window.innerHeight * 2 &&
          $(this).scrollTop() < window.innerHeight * 3
        ) {
          $('.home').removeClass('active');
          $('.product').addClass('active');
          $('.contact').removeClass('active');
        }
        if ($(this).scrollTop() > window.innerHeight * 4) {
          $('.home').removeClass('active');
          $('.product').removeClass('active');
          $('.contact').addClass('active');
        }

        if (
          $(this).scrollTop() > window.innerHeight * 0.5 &&
          $(this).scrollTop() < window.innerHeight * 0.6 &&
          $(this).scrollTop() > lastposition
        ) {
          $('.anim').addClass('w3-animate-bottom');
          setTimeout(() => {
            $('.anim').removeClass('w3-animate-bottom');
          }, 3000);
        }
        lastposition = $(this).scrollTop();

        $('.navbar').css({
          backgroundColor: $(this).scrollTop() > 1 ? 'white' : 'transparent',
        });
        $('.navbar-brand').css({
          color: $(this).scrollTop() > 1 ? '#061d3b' : 'white',
        });
        $('.nav-link').css({
          color: $(this).scrollTop() > 1 ? '#061d3b' : 'white',
        });

        $('.nav-link.active').css({
          color: 'white',
        });
      };
      $(window).on('load resize scroll', checkScrollBar);
    });
    //   $('.navbar-collapse>li>a').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });
  }

  openProductDetail(index) {
    this.setState({
      showChild: true,
      index: index,
    });
  }
  closeProductDetail() {
    this.setState({
      showChild: false,
      index: 1,
    });
  }

  changeSelectedValue(val) {
    this.setState({
      selectedValue: val,
      showChild: false,
    });
    setTimeout(() => {
      $('#name').click(function () {
        $('html, body').animate(
          {
            scrollTop:
              window.innerWidth < 500
                ? $('#contact').offset().top + 600
                : $('#contact').offset().top + 300,
          },
          2000
        );
        $('#name').trigger('focus');
        return false;
      });
      $('#name').trigger('click');
    }, 500);
  }

  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

  createCardView = (n) =>
    range(n).map((val, i) => (
      // <div class="col-md-3 col-sm-12">
      <div class="card" onClick={() => this.openProductDetail(1)}>
        <img
          class="card-img-top"
          // height="75"
          // width="75"
          src={data[i].imageUrl}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{data[i].heading}</h5>
          <p class="card-text">{data[i].detail}</p>
          {/* <h5 class="card-title">Solution <br /> Acceleration</h5>
          <p class="card-text">Solve urgent business<br /> needs faster</p> */}
          <div class="btn btn-primary">
            <p>LEARN MORE</p>
            <svg
              id="i-arrow-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="20"
              height="15"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              style={{ marginLeft: 10 }}
            >
              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
            </svg>
          </div>
        </div>
        {/* </div> */}
      </div>
    ));

  render() {
    const { activeItemIndex, children } = this.state;
    return (
      <div>
        <nav
          id="navbar-example2"
          class="navbar fixed-top navbar-expand-lg navbar-light bg-none "
          style={{ zIndex: 3000, position: 'relative' }}
        >
          <a
            class="navbar-brand"
            href="#"
            id="headerName"
            onClick={() => this.closeProductDetail()}
          >
            DSW Company
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: 'none', background: 'transparent' }}
          >
            <svg
              id="i-menu"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
              viewBox="0 0 32 32"
              width="32"
              height="32"
              fill="none"
              stroke="currentcolor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
            </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="nav nav-pills">
              <li
                class="nav-item "
                onClick={() => this.closeProductDetail()}
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <a class="nav-link home" href="#home">
                  {!this.state.showChild ? 'HOME' : 'GO BACK TO HOME'}
                </a>
              </li>
              {!this.state.showChild && (
                <li
                  class="nav-item "
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <a class="nav-link product" href="#product">
                    PRODUCT
                  </a>
                </li>
              )}
              {!this.state.showChild && (
                <li
                  class="nav-item "
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <a class="nav-link contact" href="#contact">
                    CONTACT
                  </a>
                </li>
              )}
              {/* <li class="nav-item">
                <a class="nav-link" href="#news">NEWS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#company">COMPANY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#recruiting">RECRUITING</a>
              </li> */}

              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">English</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#one">A</a>
                  <a class="dropdown-item" href="#two">B</a>
                  {/* <div role="separator" class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#three">C</a>
                </div>
              </li> */}
            </ul>
          </div>
        </nav>

        {this.state.showChild ? (
          <ProductDetailComponent
            index={this.state.index}
            changeSelectedValue={this.changeSelectedValue}
          />
        ) : (
          <div>
            <img
              src={require('../images/banner2.jpg')}
              height={window.innerHeight}
              width={window.outerWidth}
              className="img-fluid"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
                height: window.innerHeight * 1.1,
                objectFit: 'cover',
              }}
            />
            <div
              data-spy="scroll"
              data-target="#navbar-example2"
              data-offset="0"
              style={{ zIndex: 2000, position: 'relative' }}
            >
              <div id="home" style={{ height: window.innerHeight }}>
                <h1>
                  Extend human potential <br />
                  by eliminating repetitive tasks
                </h1>
                <h3>
                  At SciSciSci we are working to make a world
                  <br />
                  where human creativity can flourish
                  <br />
                  by using our AI technology to replace all the repetitive,
                  <br />
                  mind-numbing tasks that take place today.
                </h3>
              </div>

              <div
                style={{
                  // height: window.innerHeight,
                  backgroundColor: '#f2f2f2',
                }}
                id="part1"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <img
                        src="https://cinnamon.is/en/wp-content/themes/Cinnamon-2017-en/images/ai.png"
                        className="anim"
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <h6 className="anim">
                        SciSciSci provides Deep Learning backed <br />
                        AI products.
                      </h6>
                      <br />
                      <p className="anim">
                        SciSciSci provides Products for Artificial Intelligence.
                        <br />
                        <br />
                        Artificial Intelligence (AI) is a computer system that
                        can learn, infer,
                        <br />
                        recognize, and judge like humans do. A simple computer
                        can perform by
                        <br />
                        following the given programs, but an AI computer can
                        respond to audience
                        <br />
                        and situations flexibly.
                        <br />
                        <br />
                        AI still cannot perform like human brains but is already
                        competing or
                        <br />
                        surpassing humans for the limited areas and objectives.
                        <br />
                        SciSciSci aims to extend human potential for more
                        productive and
                        <br />
                        creative work by utilizing the power of Artificial
                        Intelligence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={{
                  // height: window.innerHeight * 1.15,
                  width: window.innerWidth,
                }}
                id="product"
              >
                <h1>Become an AI-driven enterprise</h1>
                <h3>
                  Transform into an AI-driven enterprise, implementing machine
                  learning models that solve complex
                  <br /> business problems and drive real ROI.
                </h3>

                {
                  window.innerWidth > 500 ? (
                    <div className="container">
                      <ItemsCarousel
                        numberOfCards={4}
                        gutter={30}
                        // Active item configurations
                        requestToChangeActive={this.changeActiveItem}
                        activeItemIndex={activeItemIndex}
                        activePosition={'center'}
                        chevronWidth={40}
                        rightChevron={'>'}
                        leftChevron={'<'}
                        outsideChevron={true}
                      >
                        {children}
                      </ItemsCarousel>
                    </div>
                  ) : (
                    <div className="container">
                      <ItemsCarousel
                        numberOfCards={1}
                        gutter={30}
                        // Active item configurations
                        requestToChangeActive={this.changeActiveItem}
                        activeItemIndex={activeItemIndex}
                        activePosition={'center'}
                        chevronWidth={40}
                        rightChevron={'>'}
                        leftChevron={'<'}
                        outsideChevron={true}
                      >
                        {children}
                      </ItemsCarousel>
                    </div>
                  )
                  // <div className="container">
                  // {children}
                  // </div>
                }
                {/* <div class="container">

                  <div class="row">
                    <div class="col-md-3 col-sm-12">
                      <div class="card" onClick={() => this.openProductDetail(1)}>
                        <img class="card-img-top"
                          height="75" width="75"
                          src="https://3gp10c1vpy442j63me73gy3s-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/rocket.svg"
                          alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">Solution <br /> Acceleration</h5>
                          <p class="card-text">Solve urgent business<br /> needs faster</p>
                          <div class="btn btn-primary" >
                            <p>LEARN MORE</p>
                            <svg id="i-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="15"
                              fill="none"
                              stroke="currentcolor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              style={{ marginLeft: 10 }}>
                              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                      <div class="card" onClick={() => this.openProductDetail(2)}>
                        <img class="card-img-top"
                          height="75" width="75"
                          src="https://3gp10c1vpy442j63me73gy3s-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/ds_prod.svg"
                          alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">Data Scientist <br /> Productivity</h5>
                          <p class="card-text">Get more projects done<br />in less time</p>
                          <div class="btn btn-primary" >
                            <p>LEARN MORE</p>
                            <svg id="i-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="15"
                              fill="none"
                              stroke="currentcolor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              style={{ marginLeft: 10 }}>
                              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                      <div class="card" onClick={() => this.openProductDetail(3)}>
                        <img class="card-img-top"
                          height="75" width="75"
                          src="https://3gp10c1vpy442j63me73gy3s-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/ds_democratization.svg"
                          alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">Data Science <br />Democratization</h5>
                          <p class="card-text">Empower your existing<br />team to build AI</p>
                          <div class="btn btn-primary" >
                            <p>LEARN MORE</p>
                            <svg id="i-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="15"
                              fill="none"
                              stroke="currentcolor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              style={{ marginLeft: 10 }}>
                              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3 col-sm-12">
                      <div class="card" onClick={() => this.openProductDetail(4)}>
                        <img class="card-img-top"
                          height="75" width="75"
                          src="https://3gp10c1vpy442j63me73gy3s-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/ai_enterprise.svg"
                          alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title">The AI-Driven<br />Enterprise</h5>
                          <p class="card-text">Embed AI in all<br />business processes</p>
                          <div class="btn btn-primary" >
                            <p>LEARN MORE</p>
                            <svg id="i-arrow-right"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                              width="20"
                              height="15"
                              fill="none"
                              stroke="currentcolor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="4"
                              style={{ marginLeft: 10 }}>
                              <path d="M22 6 L30 16 22 26 M30 16 L2 16" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
*/}
              </div>

              {/* <div style={{
                // height: window.innerHeight 
              }} id="part2">
                <h6>OUR CUSTOMERS</h6>
                <div class="container">
                  <div class="row">
                    <div class="col-md-2 col-sm-12">
                      <img src="https://SciSciSci.is/en/wp-content/uploads/sites/2/2018/08/JCB.png" />
                    </div>
                    <div class="col-md-2 col-sm-12">
                      <img src="https://SciSciSci.is/en/wp-content/uploads/sites/2/2018/08/JCB.png" />
                    </div>
                    <div class="col-md-2 col-sm-12">
                      <img src="https://SciSciSci.is/en/wp-content/uploads/sites/2/2018/08/JCB.png" />
                    </div>
                    <div class="col-md-2 col-sm-12">
                      <img src="https://SciSciSci.is/en/wp-content/uploads/sites/2/2018/08/JCB.png" />
                    </div>
                    <div class="col-md-2 col-sm-12">
                      <img src="https://SciSciSci.is/en/wp-content/uploads/sites/2/2018/08/JCB.png" />
                    </div>
                  </div>
                </div>
              </div> */}

              <div id="contact">
                {/* <div class="container">
                  <div class="row">
                    <div class="col-md-5 col-sm-12">
                      <h1>CONTACT US</h1>
                    </div>
                    <div class="col-md-7  col-sm-12">
                      <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {this.state.selectedValue}
                    </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" onClick={() => this.setState({ selectedValue:'Automated Machine Learning' })}>Automated Machine Learning</a>
                          <a class="dropdown-item" onClick={() => this.setState({ selectedValue:'Automated Time Series' })}>Automated Time Series</a>
                          <a class="dropdown-item" onClick={() => this.setState({ selectedValue:'MLOps and Governance' })}>MLOps and Governance</a>
                        </div>
                      </div>

                      <div class="input-group mb-3">

                        <input type="text" class="form-control name" placeholder="Name*"
                          aria-label="Name*" aria-describedby="basic-addon1" id="name" />
                        <input type="text" class="form-control" placeholder="Phone"
                          aria-label="Phone" aria-describedby="basic-addon1" id="phone" />
                      </div>
                      <input type="text" class="form-control" placeholder="Email*"
                        aria-label="Email*" aria-describedby="basic-addon1" id="email" />
                      <textarea type="text" class="form-control" placeholder="Message*"
                        aria-label="Message*" aria-describedby="basic-addon1" id="message" />


                      <button type="button" class="btn btn-primary btn-lg">SEND</button>
                    </div>
                  </div>
                </div> */}

                <div class="container">
                  <h1>
                    <span style={{ fontWeight: 'bold' }}>Contact</span> us
                  </h1>
                  <div className="line" />
                  <p className="text1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam vel dictum ante, vitae eleifend lacus.
                  </p>
                  <div class="row">
                    <div class="col-md-2 col-sm-12">
                      <svg
                        color="#ffffff70"
                        id="i-location"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentcolor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <circle cx="16" cy="11" r="4" />
                        <path d="M24 15 C21 22 16 30 16 30 16 30 11 22 8 15 5 8 10 2 16 2 22 2 27 8 24 15 Z" />
                      </svg>
                      <p>321 Awesome street, New York, NY 17022</p>
                    </div>

                    <div class="col-md-2 col-sm-12">
                      <svg
                        color="#ffffff70"
                        id="i-mail"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentcolor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
                      </svg>
                      <p>info@companyname.com</p>
                    </div>

                    <div class="col-md-2 col-sm-12">
                      <svg
                        color="#ffffff70"
                        id="i-mobile"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="32"
                        height="32"
                        fill="none"
                        stroke="currentcolor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M21 2 L11 2 C10 2 9 3 9 4 L9 28 C9 29 10 30 11 30 L21 30 C22 30 23 29 23 28 L23 4 C23 3 22 2 21 2 Z M9 5 L23 5 M9 27 L23 27" />
                      </svg>
                      <p>+1 800 123 1234</p>
                    </div>
                  </div>

                  <h4>Leave us a message</h4>

                  <div class="container">
                    {/* <div className="row"> */}

                    {/* {
                      window.innerWidth < 500 ?
                        <div class="input-group mb-3">
                          <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {this.state.selectedValue}
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a class="dropdown-item" onClick={() => this.setState({ selectedValue: 'Automated Machine Learning' })}>Automated Machine Learning</a>
                              <a class="dropdown-item" onClick={() => this.setState({ selectedValue: 'Automated Time Series' })}>Automated Time Series</a>
                              <a class="dropdown-item" onClick={() => this.setState({ selectedValue: 'MLOps and Governance' })}>MLOps and Governance</a>
                            </div>
                          </div>
                          <input type="text" class="form-control name" placeholder="Name*"
                            aria-label="Name*" aria-describedby="basic-addon1" id="name" />
                          <input type="text" class="form-control phone" placeholder="Phone"
                            aria-label="Phone" aria-describedby="basic-addon1" id="phone" />

                        </div>

                        : */}
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style={{
                          maxWidth: window.innerWidth * 0.85,
                          width: window.innerWidth * 0.565,
                        }}
                      >
                        {this.state.selectedValue}
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a
                          class="dropdown-item"
                          onClick={() =>
                            this.setState({
                              selectedValue: 'Automated Machine Learning',
                            })
                          }
                        >
                          Automated Machine Learning
                        </a>
                        <a
                          class="dropdown-item"
                          onClick={() =>
                            this.setState({
                              selectedValue: 'Automated Time Series',
                            })
                          }
                        >
                          Automated Time Series
                        </a>
                        <a
                          class="dropdown-item"
                          onClick={() =>
                            this.setState({
                              selectedValue: 'MLOps and Governance',
                            })
                          }
                        >
                          MLOps and Governance
                        </a>
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control name"
                        placeholder="Name*"
                        aria-label="Name*"
                        aria-describedby="basic-addon1"
                        id="name"
                      />
                      <input
                        type="text"
                        class="form-control phone"
                        placeholder="Phone"
                        aria-label="Phone"
                        aria-describedby="basic-addon1"
                        id="phone"
                      />
                    </div>
                    {/* } */}
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email*"
                      aria-label="Email*"
                      aria-describedby="basic-addon1"
                      id="email"
                    />
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Message*"
                      aria-label="Message*"
                      aria-describedby="basic-addon1"
                      id="message"
                    />
                    {/* </div> */}

                    <button type="button" class="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>

                  <div className="socialIcons">
                    <img src={require('../images/facebook.png')} />
                    <img src={require('../images/github.png')} />
                    <img src={require('../images/dribble.png')} />
                    <img src={require('../images/instagram.png')} />
                    <img src={require('../images/linkedin.png')} />
                    <img src={require('../images/twitter.png')} />
                  </div>
                </div>
              </div>

              <div className="footer">
                <img
                  src={require('../images/science.png')}
                  style={{ height: '100px', width: '100px' }}
                />
                <p>© 2019 Science, Inc. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
// export default LabelComponent;

const styles = {
  data: {
    height: window.innerHeight,
    width: window.innerWidth,
  },
};
