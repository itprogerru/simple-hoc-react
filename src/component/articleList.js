import React, {Component} from 'react'
import ArticleItem from "./articleItem";
import acordion from "../decorator/acordion";

class ArticleList extends Component {
    render(){
        const {articles, openItemId, toggleOpenItemId} = this.props;
        const articleList = articles.map(article => (
            <ArticleItem
                key={article.id}
                id={article.id}
                title={article.title}
                text={article.text}
                isOpen={openItemId === article.id}
                toggleOpen = {toggleOpenItemId}

            />)
        )

        return(
            <div>
                {articleList}
            </div>
        )
    }
}
const withoutArticleList = acordion(ArticleList)

export default withoutArticleList;