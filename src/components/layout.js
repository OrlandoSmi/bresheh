import React from "react";
import FooterComponent from '../components/footer'
import HeaderComponent from '../components/header'
//import layoutStyles from './layout.module.css'
import * as layoutStyles from "./layout.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import '../styles/index.css'
import '../styles/common.css'


const LayoutComponent = (props) =>{
  return(
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
            <div className={layoutStyles.head}>
                <HeaderComponent/>
            </div>
           
            {props.children}
        </div>
        
        <FooterComponent/>
    </div>
  )
}
export default LayoutComponent