import React, { Component } from 'react';
import { Row, Card, Image, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class FeaturedPost extends Component {
    render() {
        return (
            <div>
                <Row className="mb-2">
                    <Col md="6">
                        <Card className="flex-md-row mb-4 box-shadow h-md-250">
                            <Card.Body className="d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">
                                    <Link className="text-dark" to="#" href="#">Featured post</Link>
                                </h3>
                                <div className="mb-1 text-muted">Nov 12</div>
                                <Card.Text className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content</Card.Text>
                                <Link to="#" href="#">Continue reading</Link>
                            </Card.Body>
                            <Image
                                className="card-img-right flex-auto d-none d-md-block"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664c6bef37%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664c6bef37%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2255.609375%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"
                            />
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card className="flex-md-row mb-4 box-shadow h-md-250">
                            <Card.Body className="d-flex flex-column align-items-start">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">
                                    <Link className="text-dark" to="#" href="#">Post Title</Link>
                                </h3>
                                <div className="mb-1 text-muted">Nov 11</div>
                                <p className="card-text mb-auto">
                                    This is a wider card with supporting text below as a natural lead-in to additional content.
                            </p>
                                <Link to="#" href="#">Continue reading</Link>
                            </Card.Body>
                            <Image
                                className="card-img-right flex-auto d-none d-md-block"
                                src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1664c6bef37%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1664c6bef37%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2255.609375%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap"
                            />

                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
