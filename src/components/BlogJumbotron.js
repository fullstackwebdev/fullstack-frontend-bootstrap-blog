import React, { Component } from 'react';
import { Jumbotron, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class BlogJumbotron extends Component {
    render() {
        return (
            <Jumbotron className="p-3 p-md-5 text-white rounded bd-dark">
                <Col md="6" className="px-0">
                    <h1 className="display-4 font-italic"> Title of a long featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most intereting in this post's content</p>
                    <p className="lead mb-0">
                        <Link to="#" href="#" className="text-white font-weight-bold">Continue reading...</Link>
                    </p>
                </Col>
            </Jumbotron>
        )
    }
}
