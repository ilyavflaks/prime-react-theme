import React, { Component } from 'react';

export class CodeHighlight extends Component {

    static defaultProps = {
        lang: 'markup',
        style: null
    };


    render() {
        return (
            <pre className="app-code"><code>{this.props.children}</code></pre>
        );
    }
}
