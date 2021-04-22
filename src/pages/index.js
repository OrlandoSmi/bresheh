import React from "react";
import LayoutComponent from '../components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Button,Image,ButtonToolbar,ButtonGroup} from 'react-bootstrap';
import '../styles/index.css'
import * as indexStyles from "../styles/index.module.css";
const IndexPage = () =>{
  return(
    <LayoutComponent>
     <div className={indexStyles.container}>
      <Container>
        <Row className={indexStyles.centerRow}>
          <Col lg={6} md={10} className={indexStyles.col}>
            <h3>The Roast Mask</h3>
            <p>
            Bresheh presents a line of breathable face masks ethically crafted from premium vegan 
            leather made to offer stylish protection as everyday wear for everyone.
            </p>
            <Button className={indexStyles.buttonwidth} variant="outline-light">
              <Image className={indexStyles.btnimg} src="../assets/play-btn.png" />
              Watch Video</Button><span className={indexStyles.btnseperator}></span>
            <Button className={indexStyles.buttonwidth}  variant="light">Order Now</Button>
          </Col>
          <Col lg={6} md={2} className={indexStyles.col}></Col>
        </Row>
      </Container>
     
     </div>
      <Container className={indexStyles.seconsection} fluid>
      <Row >
        <Col></Col>
        <Col lg={7}>
        <h2>Covering up in style is the new normal</h2>
        <p className={indexStyles.headingcentre}>The Bresheh Roast Mask delivers in style and function. Featuring water-resistant 
        filters, adjustable side straps with washable materials, these masks are designed for the times.</p>
        </Col>
        <Col></Col>
      </Row>
     
      <div className={indexStyles.row}>
        <div className={indexStyles.column}>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6577-1.png" />
          <Image className={indexStyles.columnImg} src="../assets/DSC_6577-4.png" />
        </div>
        <div  className={indexStyles.column}>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6554.png" />
          <Image className={indexStyles.columnImg} src="../assets/DSC_6455.png" />
        
        </div>
        <div  className={indexStyles.column}>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6577-4.png"/>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6613.png"/>
        </div>
        <div  className={indexStyles.column}>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6847.png"/>
          <Image className={indexStyles.columnImg} src="../assets/DSC_6360.png"/>
        </div>
        
      </div>
      </Container>
      <Container fluid className={indexStyles.thirdcontainer}>
        <Row className={indexStyles.trrow}>
          <Col className={indexStyles.col} lg={6} md={6} xs={12}>
           <Image  className={indexStyles.thirssecimg}  src="../assets/DSC_6577.png"/>
          </Col>
          <Col  lg={6} md={6} xs={12}>
         
          <Row >
            <Col lg={1} md={0}>
           
            </Col>
            <Col lg={10} md={12}>
            <h2 className={indexStyles.leftdata}>Built for Protection</h2>
            <p className={indexStyles.headingp}>All our masks have been carefully designed to offer full coverage with comfort. The vegan leather and lining fabric used are machine-washable and extremely breathable. We guarantee an an ergonomic fit for most faces and offer sizes for children. Our hand-made masks come with an inside pocket 
              for replaceable filters made from surgical mask-quality materials to keep dust, fluids and other particles out.</p>
            </Col>
            <Col className={indexStyles.col} lg={1} md={0}>
            
            </Col>
          </Row>

          </Col>
        </Row>
      </Container>
      <Container fluid className={indexStyles.thirdcontainer}>
      <Row className={indexStyles.trrow2}>

          <Col lg={6} md={6} xs={12}>
         
            <Row>
              <Col lg={1} md={0}>
            
              </Col>
              <Col lg={10} md={12}>
              <h2 className={indexStyles.leftdata}>Built for Comfort</h2>
              <p className={indexStyles.headingp}>All masks are not equal. The Roast Mask is designed to be form-fitting with a stylishly perforated front, allowing for comfort and breathability. Wear your tested or sunglasses without the worry of blurry vision. It’s clear that this mask is a cut above the rest. With the inside lining made with moisture-wicking materials with room to cover your chin, 
                  there’s no need to be constantly touching and tugging the outside of the mask to avoid dampness or blocked airflow.</p>
              </Col>
              <Col className={indexStyles.col} lg={1} md={0}>
              
              </Col>
            </Row>

          </Col>
          <Col className={indexStyles.col} lg={6} md={6} xs={12}>
           <Image  className={indexStyles.thirssecimg2}  src="../assets/DSC_66131.png"/>
          </Col>
          
        </Row>
      </Container>
      <Container fluid className={indexStyles.thirdcontainer}>
        <Container >
          <h2>Stay Protected <br/>No Matter the Colour</h2>
          <Row>
            <Col  lg={4} md={4} xs={12}>
              <Image className={indexStyles.thirssecimg2}  src="../assets/DSC_6554-2.png"/>
              <div className={indexStyles.productheading}>Roast Mask</div>
              <div className={indexStyles.productsize}>Vegan Leather XL</div>
              <div className={indexStyles.productprice}>$4,829.00</div>

              <Row>
                <Col>
                  
                </Col>
                <Col>
                <ButtonToolbar className={indexStyles.buttonToolbar}>
                <ButtonGroup className="mr-2 text-center" aria-label="First group">
                  <Button  className={indexStyles.btnblack}></Button> <Button className={indexStyles.btngrey}></Button> 
                  <Button className={indexStyles.btnred}></Button> <Button className={indexStyles.btnblue}></Button>
                </ButtonGroup>
              
                </ButtonToolbar>
                </Col>
                <Col>

                </Col>
              </Row>
              <div className={indexStyles.productdetail}>
              7.75” x 12.5”
              </div>
              <div className={indexStyles.productdetail}>
              Water-resistant filter included
              </div>
              <div className={indexStyles.productdetail}>
              Machine washable
              </div>
              <div className={indexStyles.productdetail}>
              Vegan leather
              </div>
              <div className={indexStyles.productdetail}>
              10-year wear guarantee
              </div>
              <Button className={indexStyles.centreorderbtn}  variant="dark">Order Now</Button>
            </Col>
            
            <Col lg={4} md={4} xs={12}>
              <Image className={indexStyles.thirssecimg}  src="../assets/DSC_66131.png"/>
              <div className={indexStyles.productheading}>Roast Mask</div>
              <div className={indexStyles.productsize}>Vegan Leather XL</div>
              <div className={indexStyles.productprice}>$4,829.00</div>

              <Row>
                <Col>
                  
                </Col>
                <Col>
                <ButtonToolbar className={indexStyles.buttonToolbar}>
                <ButtonGroup className="mr-2 text-center" aria-label="First group">
                  <Button  className={indexStyles.btnblack}></Button> <Button className={indexStyles.btngrey}></Button> 
                  <Button className={indexStyles.btnred}></Button> <Button className={indexStyles.btnblue}></Button>
                </ButtonGroup>
              
                </ButtonToolbar>
                </Col>
                <Col>

                </Col>
              </Row>
              <div className={indexStyles.productdetail}>
              7.75” x 12.5”
              </div>
              <div className={indexStyles.productdetail}>
              Water-resistant filter included
              </div>
              <div className={indexStyles.productdetail}>
              Machine washable
              </div>
              <div className={indexStyles.productdetail}>
              Vegan leather
              </div>
              <div className={indexStyles.productdetail}>
              10-year wear guarantee
              </div>
              <Button className={indexStyles.centreorderbtn}  variant="dark">Order Now</Button>
            </Col>

            <Col lg={4} md={4} xs={12}>
              <Image className={indexStyles.thirssecimg}  src="../assets/DSC_6554-3.png"/>
              <div className={indexStyles.productheading}>Roast Mask</div>
              <div className={indexStyles.productsize}>Vegan Leather XL</div>
              <div className={indexStyles.productprice}>$4,829.00</div>

              <Row>
                <Col>
                  
                </Col>
                <Col>
                <ButtonToolbar className={indexStyles.buttonToolbar}>
                <ButtonGroup className="mr-2 text-center" aria-label="First group">
                  <Button  className={indexStyles.btnblack}></Button> <Button className={indexStyles.btngrey}></Button> 
                  <Button className={indexStyles.btnred}></Button> <Button className={indexStyles.btnblue}></Button>
                </ButtonGroup>
              
                </ButtonToolbar>
                </Col>
                <Col>

                </Col>
              </Row>
              <div className={indexStyles.productdetail}>
              7.75” x 12.5”
              </div>
              <div className={indexStyles.productdetail}>
              Water-resistant filter included
              </div>
              <div className={indexStyles.productdetail}>
              Machine washable
              </div>
              <div className={indexStyles.productdetail}>
              Vegan leather
              </div>
              <div className={indexStyles.productdetail}>
              10-year wear guarantee
              </div>
              <Button className={indexStyles.centreorderbtn}  variant="dark">Order Now</Button>
            </Col>
          </Row>
          <div className={indexStyles.marginbottom}></div>
        </Container>
      
      </Container>
    </LayoutComponent>
     
  )
}
export default IndexPage