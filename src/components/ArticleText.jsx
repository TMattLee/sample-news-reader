import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';
import ReactHtmlParser from 'react-html-parser';

class ArticleText extends Component{
  constructor(){
    super();
    this.options = {
      transform: node => {
        // do not render any <script> tags
        if (node.name === 'script') {
          console.log("script!!!!!!!");
          return null;
        }
      }
    }
  }
  
  readTextArray = (textObjArray) => {
    let output = '';
    
    textObjArray.map( textObj => {
      let text = textObj.$text;
      if(text && this.props.hightlight !=='') text = text.replace(this.props.highlight, '<highlight>' + this.props.highlight +'</highlight>' )
      output += '<p>'+ text + "</p>";
    });
    
    return output;
  }

  render(){
    if(!this.props.textObjArray){
      return<div className={styles.articleTextContainer}>Click on a card to view the story!</div>
    }
    
    return <div className={styles.articleTextContainerFade}>
      <div>{ReactHtmlParser(this.readTextArray(this.props.textObjArray),this.options)}</div>
    </div>
  }
}

export default ArticleText;