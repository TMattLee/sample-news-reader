import React, { Component } from 'react';
import logo from './logo.svg';
import * as styles from './stylesheet.module.css';

import ArticleList from './components/ArticleList.jsx';
import ArticleText from './components/ArticleText.jsx';
import ArticleMenu from './components/ArticleMenu.jsx';
import ArticleCardList from './components/ArticleCardList.jsx';
import ArticleFrame from './components/ArticleFrame.jsx';

import ReactHtmlParser from 'react-html-parser';

import { Divider, Card, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      textObjArray: null,
      highlight: '',
      activeItem: "NPR",
      fade: "in",
      iframeUrl: null,
      modalOpen: false,
      timeoutId: null,
    };
  }
  
  getTimeoutId = (id) => {
    this.setState({
      timeoutId: id
    });
  }
  
  showText = data => {
    this.setState({
      textObjArray: data
    })
  }
  
  doHighlight = str => {
    this.setState({
      highlight: str
    });
  }
  
  changeActiveItem = name => {
    setTimeout( () => {
      this.setState({ 
        activeItem: name,
        textObjArray: null,
      })
    }, 300);
  }
  
  openModal = (url) => {
    this.setState({
      modalOpen: true,
      iframeUrl: url
    });
  }
  
  closeModal = () => {
    clearTimeout(this.state.timeoutId);
    this.setState({
      modalOpen: false,
      iframeUrl: null
    });
  }
  
  render() {
    return (
      <div className={styles.app}>
      
        <div className={styles.appHeader}>
          <h1 className={styles.appTitle}>Sample News Reader</h1>
        </div>
        
        <ArticleMenu doHighlight={this.doHighlight} activeItem={this.state.activeItem} changeActiveItem={this.changeActiveItem} fade={this.state.fade}/>
        
        <div className={this.state.activeItem === "NPR" ? styles.show : styles.hide}>
          <div className={styles.appDivider}>
            <ArticleList showText={this.showText} highlight={this.state.highlight}/>
            <ArticleText textObjArray={this.state.textObjArray} highlight={this.state.highlight}/>
          </div> 
        </div>
        
        <div className={this.state.activeItem === "FOXNews" ? styles.show : styles.hide}>
          <ArticleCardList type="FOXNews" activeItem={this.state.activeItem} highlight={this.state.highlight} openModal={this.openModal}/>
        </div>
        
        <div className={this.state.activeItem === "CNN" ? styles.show : styles.hide}>
          <ArticleCardList type="CNN" activeItem={this.state.activeItem} highlight={this.state.highlight} openModal={this.openModal}/>
        </div>
        
        <div>
          Built using <a href="https://www.npr.org" target="_blank">NPR</a> and <a href="https://newsapi.org/" target="_blank">NewsAPI.org</a>
        </div>
        
        <Modal open={this.state.modalOpen} onClose={this.closeModal} className={styles.modalClass}>
          <Modal.Content>
          {
            this.state.modalOpen ? 
              <ArticleFrame 
                iframeUrl={this.state.iframeUrl}
                type={this.state.activeItem} 
                closeModal={this.closeModal}
                setTimeout={this.setTimeout}
                getTimeoutId={this.getTimeoutId}/> 
            : 
              <div></div>
          }
          </Modal.Content>
        </Modal>
        
      </div>
    );
  }
}

export default App;
