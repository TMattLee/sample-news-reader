import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';
import {injectHighlight} from '../lib/injectHighlight.js';

class ArtitleTeaser extends Component{	
	render(){
		return <div className = {styles.textTeaser}>
			{injectHighlight(this.props.articleTeaser, this.props.highlight)}
		</div>;	
  }
}

export default ArtitleTeaser;