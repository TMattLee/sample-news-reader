import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';
import {injectHighlight} from '../lib/injectHighlight.js';

class ArticleTitle extends Component{	
	render(){
  	return <div className = {styles.textTitle}>
  	  {injectHighlight(this.props.articleTitle, this.props.highlight)}
  	</div>;
  }
}

export default ArticleTitle;