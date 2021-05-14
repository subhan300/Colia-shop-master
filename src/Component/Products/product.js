import React, { useState } from "react"
import image1 from "../../assets/images/product_images/product1.png"
import image2 from "../../assets/images/product_images/product2.png"
import image3 from "../../assets/images/product_images/product3.png"
import image4 from "../../assets/images/product_images/product4.png"
import ReactImageMagnify from 'react-image-magnify';
import { Image, Col, Row } from "react-bootstrap"
// import image5 from "../../assets/images/product_images/robe-Nalya.jpeg"
// import { StaticImage } from "gatsby-plugin-image"
import "./product.css"
export default function Products(props) {
  // const [product,setProduct] = useState({
  //   product:props.product.edges
  // })
  // console.log(product.product)
  const [selectedItem, setSelectedItem] = useState(image1)
  return (
         <div className="container">
            <div className="row d-flex justify-content-center">
              <Row className="m-0 border">
              <Col xl={8} lg={8} md={8} sm={12} xs={12} className="left__gallery">
                <Row className="border">
                  <Col xl={2} lg={2} md={4} sm={4} xs={4}>
                    <Image
                      src={props.image1}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image1)
                      }}
                    />
                    <Image
                      src={props.image2}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image2)
                      }}
                    />
                    <Image
                      src={props.image3}
                      style={{
                        width: 150,
                        height: 130,
                        objectFit: "contain",
                        marginTop: "20px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSelectedItem(image3)
                      }}
                    />
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={6} className="preview">
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: '',
                            isFluidWidth: true,
                            src: selectedItem,
                           
                        },
                        largeImage: {
                            alt: '',
                            src: selectedItem,
                            width: 1000,
                            height: 1800
                        }
                    }} />
                  </Col>
                </Row>
              </Col>
              <Col xl={4} lg={4} md={12} sm={12} xs={12}>
                <Row>
                  <div className="product__title">
                      <h4>
                        {/* {title} */}
                        TITLE
                      </h4>
                  </div>
                </Row>
                <Row>
                  <div className="product__costsection d-flex justify-content-between mt-3">
                  <div className="product__cost">
                      <del>65.96</del>
                  </div>
                  <div className="product__discount">
                  <span>$</span>
                  &nbsp;
                  {props.price}
                  </div>
                  </div>
                </Row>
                <Row>
                <div className="color__section d-flex justify-content-between mt-5">
                  <div className="color__heading">
                      <h5>Color</h5>
                  </div>
                  <div className="pick__color d-flex justify-content-evenly">
                  <div class="color-item" role="presentation" style={{backgroundColor:"red"}}></div>
                  <div class="color-item" role="presentation" style={{backgroundColor:"green"}}></div>
                  </div>
                  </div>
                </Row>
                <Row>
                <div className="color__section d-flex justify-content-between mt-5">
                  <div className="color__heading">
                      <h5>Size</h5>
                  </div>
                  <div className="d-flex justify-content-evenly">
                  <div class="size-item" role="presentation"><p>{props.size}</p></div>
                  </div>
                  </div>
                </Row>
                <Row>
                  <div>
                    <span>
                      <input type="button" className="btn-increment"></input>
                    </span>
                    <span>
                      <input type="text" className="quntity-text"></input>
                    </span>
                    <span>
                      <input type="button" className="btn-decrement"></input>
                    </span>
                  </div>
                </Row>
              </Col>
            </Row>
             
            </div>
         </div>
  )
}
