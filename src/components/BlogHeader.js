import React, { Component } from 'react';
import { Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class BlogHeader extends Component {
    render() {
        return (
            <header className="blog-header py-3">
                <Row className="flex-nowrap justify-content-between align-items-center">
                    <Col md="4" className="pt-1">
                        <Link className="text-muted" to="#" href="#">Subscribe</Link>
                    </Col>
                    <Col md="4" className="text-center">
                        <Link className="blog-header-logo text-dark" to="#" href="#">Large</Link>
                    </Col>
                    <Col md="4" className="d-flex justify-content-end align-items-center">
                        <Link className="text-muted" href="#" to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                        </Link>
                        <Button variety="secondary" href="#">Sign up</Button>
                    </Col>
                </Row>
            </header>
        )
    }
}
