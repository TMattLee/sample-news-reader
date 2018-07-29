import ReactHtmlParser from 'react-html-parser';

export const injectHighlight = ( inputString, highlightString ) => {
  let text = [];
  if(inputString)  {
    text.push(inputString.replace(highlightString, '<highlight>' + highlightString +'</highlight>'));
  }

  return ReactHtmlParser(text);
}