import React, {PureComponent} from 'react'

class ArticleItem extends PureComponent {

    render(){
        console.log('render----');
        const {title, text, isOpen} = this.props;
        return(
            <div>
                <h1>{title}</h1>
                {isOpen && <p>{text}</p>}
                <button onClick={this.handleClick}>Открыть/закрыть</button>
            </div>
        )
    }
    handleClick = () => {this.props.toggleOpen(this.props.id)}
}

export default ArticleItem;