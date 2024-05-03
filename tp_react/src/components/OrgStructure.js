import React, { Component } from 'react';
import OrgChart from "@balkangraph/orgchart.js";
import '../App.css';

export default class OrgStructure extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        this.chart = new OrgChart (this.divRef.current , {
            nodes: this.props.nodes,

            nodeBinding: {
                field_0: 'name',
                field_1: 'title',
                img_0: 'img'
            }
        });
    }

    render() {
        return (
            <div id="tree" ref={this.divRef}></div>
        );
    }
}