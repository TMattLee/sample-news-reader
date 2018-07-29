import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

import ArticleSnippet from './ArticleSnippet.jsx';

import json from '../sample.json';

class ArticleList extends Component{	
	constructor(props){
		super(props);
		this.state = {
			version: null,
				jobj: null,
				textString: null,
				stories: null,
				snippetList: null
		};
	}
		
	componentDidMount(){
		this.parseJson();
	}
	
	parseJson = () => {
		const jsonData = json;
		this.setState({
			jobj: jsonData,
			textString: jsonData.list.story[0].title.$text,
			stories: jsonData.list.story
		}); 
	}
	
	getImageSource = story => {
		let imageString = '';
		
		if(story.thumbnail){
			
			if(story.thumbnail.large){
				imageString = story.thumbnail.large.$text;
			}
			else if(story.thumbnail.medium){
				imageString = story.thumbnail.medium.$text;
			}
			
			if(imageString !== ''){
				return (imageString.split("?"))[0] + '?s=3'
			}
			
		}
		
		return '';
	}
	
	renderStories = () => {
		return this.state.stories.map( (story, key) => { 
			return <ArticleSnippet key={key}
								articleSlug = {story.slug.$text}
								articleTitle = {story.title.$text}
								articleTeaser = {story.teaser.$text} 
								imgsrc = { this.getImageSource(story) }
								articleDestination = {story.link[0].$text}
								storyTextArray = {story.text? story.text?  story.text.paragraph : null : null}
								showText={this.props.showText}
								highlight={this.props.highlight}/>
		});
	}
	
	render(){ 
		
		if(!this.state.jobj){
				return <div>Loading...</div>;
		}
		
		return <div className={styles.articleListContainer}>
			{ this.renderStories()  }
		</div>;	
	}
}

export default ArticleList;