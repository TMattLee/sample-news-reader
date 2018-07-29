import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

import { Card, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import TimeAgo from 'react-timeago';

import {injectHighlight} from '../lib/injectHighlight.js';

class ArticleCard extends Component {	
  handleClick = (e) => {
    let url = this.props.articleUrl;
    console.log(url)
    if(url){
      url = url.replace("http:","https:");
      this.props.openModal(url);
    } 
   
  }
  
  render(){
    const {props} = this;
    return <div className = {styles.articleCard} onClick={this.handleClick}>
      <Card>
        <Image src = {props.articleImage} />
        <Card.Content>
          <Card.Header>
            {injectHighlight(props.articleTitle, props.highlight)}
          </Card.Header>
          <Card.Meta><span className={styles.textSlug}><TimeAgo date={props.articleDate} /></span></Card.Meta>
          <Card.Description>
            {injectHighlight(props.articleDescription, props.highlight)}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  }
  
}

export default ArticleCard;