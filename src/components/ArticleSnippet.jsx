import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

import ArticleSlug from './ArticleSlug.jsx';
import ArticleTitle from './ArticleTitle.jsx';
import ArticleTeaser from './ArticleTeaser.jsx';
import ArticleThumbnail from './ArticleThumbnail.jsx';


class ArticleSnippet extends Component {	
  handleClick = () => {
    this.props.showText(this.props.storyTextArray);
  }
  render(){
    const {props} = this;

    return <div className = {styles.articleSnippetContainer}  onClick={this.handleClick} >
      <div className = {styles.articleSnippetLeft} highlight={this.props.highlight}>
        <ArticleSlug articleSlug = {props.articleSlug} highlight={this.props.highlight}/>
        <ArticleTitle articleTitle={props.articleTitle} highlight={this.props.highlight}/>
      	<ArticleTeaser articleTeaser={props.articleTeaser} highlight={this.props.highlight}/>
      </div>
    	<div className = {styles.articleSnippetRight}>
    	  <ArticleThumbnail imgsrc={props.imgsrc} />
    	</div>
    </div>;
  }
  
}

export default ArticleSnippet;