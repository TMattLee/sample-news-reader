import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';
import {injectHighlight} from '../lib/injectHighlight.js';

class ArticleSlug extends Component{	
	render(){
  	return <div className = {styles.textSlug} >
  	  {injectHighlight(this.props.articleSlug, this.props.highlight)}
  	</div>;
  }
}

export default ArticleSlug;