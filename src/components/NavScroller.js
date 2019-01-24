import React, { Component } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavScroller extends Component {
    render() {
        return (
            <Container>
                <Nav className="d-flex justify-content-between">
                    <Link className="p-2 text-muted" to="#" href="#"> World </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> U.S. </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Technology </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Design </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Culture </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Business </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Politics </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Opinion </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Science </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Health </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Style </Link>
                    <Link className="p-2 text-muted" to="#" href="#"> Travel </Link>
                </Nav>
            </Container>
        )
    }
}
