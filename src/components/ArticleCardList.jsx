import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

import ArticleCard from './ArticleCard.jsx';

import cnnJson from '../cnn.json';
import fnJson from '../fn.json';

class ArticleCardList extends Component{	
	constructor(){
		super();
		this.state = {
				articles: null
		};
		
		this.jsonData = null;
		this.articles = null;
	}
		
	componentDidMount(){
	  this.parseJson();
	}
	
	componentDidUpdate(prevProps){
	  if(this.props.activeItem != prevProps.activeItem) this.parseJson();
	}
	
	parseJson = (activeItem) => {
	  const jsonData = this.props.type === "CNN" ? cnnJson : fnJson;
	  this.setState({
	    articles: jsonData.articles
	  });
	}
	
	renderArticles = () => {
		return this.state.articles.map( (article, key) => { 
			return <ArticleCard key={key}
								articleTitle = {article.title}
								articleDescription = {article.description}
								articleImage = {article.urlToImage} 
								articleDate = {article.publishedAt}
								articleUrl = {article.url}
								highlight = {this.props.highlight}
								openModal={this.props.openModal}
								type={this.props.type}/>
		});
	}
	
	render(){ 
		
		if(!this.state.articles){
				return <div>Loading...<p style={{display:"none"}}> {this.props.activeItem}</p></div>;
		}
		
		return <div className={styles.articleCardListContainer}>
		  <p style={{display:"none"}}> {this.props.activeItem}</p>
			{ this.renderArticles()  }
		</div>;	
	}
}

export default ArticleCardList;