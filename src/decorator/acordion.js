import React, {Component} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends Component {
    state = {
        openItemId: null
    }
    toggleOpenItemId = (openItemId) =>
        this.setState({openItemId: openItemId === this.state.openItemId ? null : openItemId})
    render() {
        return <OriginalComponent {...this.state} {...this.props} toggleOpenItemId={this.toggleOpenItemId}/>
    }
}