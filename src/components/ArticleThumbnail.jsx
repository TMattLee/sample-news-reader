import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

class ArticleThumbnail extends Component{	
	render(){
	  if(this.props.imgsrc === ''){
	    	return <div><div className = {styles.imageBorder} /></div>;	
	  }
		return <div><img className = {styles.image} src={this.props.imgsrc} alt=":)" /></div>;	
  }
}

export default ArticleThumbnail;