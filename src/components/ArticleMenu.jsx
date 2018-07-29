import React, {Component} from 'react';
import * as styles from '../stylesheet.module.css';

import { Menu, Input } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class ArticleMenu extends Component{
  constructor(){
    super();
  }
  
  handleHighlight = (e, { value }) => {
    this.props.doHighlight(value);
  }
  
  handleItemClick = (e, { name }) => {
    if(name !== this.props.activeItem) this.props.changeActiveItem(name);
  }
  
  render(){
    const { activeItem, fade } = this.props
    return<div className={styles.menu}>
      <Menu className={styles.menu}>
        <Menu.Item
          name='NPR'
          active={activeItem === 'NPR'}
          onClick={this.handleItemClick}
        >
          NPR
        </Menu.Item>
        
        <Menu.Item
          name='FOXNews'
          active={activeItem === 'FOXNews'}
          onClick={this.handleItemClick}
        >
          FOXNews
        </Menu.Item>
  
        <Menu.Item name='CNN' active={activeItem === 'CNN'} onClick={this.handleItemClick}>
         CNN
        </Menu.Item>
        
        <Menu.Menu position='right'>
          <Menu.Item >
            <Input icon='pencil alternate' placeholder='Highlight text...' onChange={this.handleHighlight} />
          </Menu.Item>
        </Menu.Menu>
        
      </Menu>
    </div>
  }
}

export default ArticleMenu;