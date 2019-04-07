import React, {Component} from 'react'
import ArticleItem from "./articleItem";

class ArticleList extends Component {

    state = {
        articleId: null
    }
/**
 * через каррирование
 */
  //  toggleOpenArticle = (articleId) => () => this.setState({articleId})
   // toggleOpen = {this.toggleOpenArticle(article.id)
    toggleOpenArticle = (articleId) => this.setState({articleId})
    render(){
        const {articles} = this.props
        const articleList = articles.map(article => (
            <ArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                text={article.text}
                isOpen={this.state.articleId === article.id}
                toggleOpen = {this.toggleOpenArticle}

            />)
        )

        return(
            <div>
                {articleList}
            </div>
        )
    }
}

export default ArticleList;