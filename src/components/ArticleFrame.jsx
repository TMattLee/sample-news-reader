import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import * as styles from '../stylesheet.module.css';

import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ArticleFrame extends Component {
  constructor(props){
    super(props);
    this.timeoutId = setTimeout(this.timeout, 5 * 1000);
    this.props.getTimeoutId(this.timeoutId);
    this.state = {
      httpData: null,
    };
    
  }
  
  timeout = () => {
    window.location.href = this.props.iframeUrl;
  }
  
  componentDidMount(){
    axios({
      url:this.props.iframeUrl,
      method: 'GET',
    })
    .then( response => {
      clearTimeout(this.timeoutId);
      const type = this.props.type;
      let data = response.data;
      let newData = '';
      console.log(type, typeof data, data)
      if(this.props.type === "CNN"){
        newData = data.replace(/a href="(\/(?!\/)|(#))/gi, 'a href="https://www.cnn.com/'); 
      }
      else {
        newData = data.replace(/a href="(\/(?!\/)|(#))/gi, 'a href="https://www.foxnews.com/'); 
      }
      
      this.setState({
        httpData: newData
      })
    })
    .catch( error => {
      console.log( error )
    })
  }
  
  render(){
    
    if(!this.state.httpData) return<div className={styles.modalWarning}>
      <div>Gettting data... if data cannot be retreieved then page will redirect to source.</div>
      <Button className={styles.modalButton} onClick={() =>this.props.closeModal()}> Cancel? </Button>
    </div>  
    
    if(!this.state.attemptIframe) return<div>
      {ReactHtmlParser(this.state.httpData)}
    </div>
    
  }
}

export default ArticleFrame;