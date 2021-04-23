import React from "react";
import {Container,Col,Row} from 'react-bootstrap';
import * as footerStyles from "./footer.module.css"
import Image from 'react-bootstrap/Image'

const FooterComponent = () =>{
  return(
    <div className={footerStyles.container}>
      <Container>
     
      <Row>
        <Col className={footerStyles.col} lg={2}><Image className={footerStyles.logo} src="https://bresheh.s3.amazonaws.com/assets/logo.png" /></Col>
        <Col className={footerStyles.col} lg={4}><p className={footerStyles.text}>Carefully crafted in Jamaica 🇯🇲, Roast By 
            Bresheh is your ultimate experience preparing you daily to make your personal, professional 
            and collective dreams happen.</p></Col>
        <Col className={footerStyles.col} lg={4}>
          <h4 className={footerStyles.mainheadings}>Make Dreams Happen With Us</h4>
          <h4 className={footerStyles.smallheadings}>Email:</h4>
          <h4 className={footerStyles.headings}>sales@bresheh.com  (876) 890-5910</h4>
          <h4 className={footerStyles.smallheadings}>Call/WhatsApp</h4>
          <h4 className={footerStyles.headings}>(876) 890-5910</h4>
        </Col>
        <Col className={footerStyles.col} lg={2}>
        <div className={footerStyles.fbdiv}><Image className={footerStyles.icon} src="https://bresheh.s3.amazonaws.com/assets/facebook.png" /></div>
        <div className={footerStyles.instadiv}><Image className={footerStyles.fb} src="https://bresheh.s3.amazonaws.com/assets/instagram.png" /></div>
          
         
        </Col>
      </Row>

      </Container>
    </div>
  )
}
export default FooterComponent