import React, { Component } from 'react';
import { Row, Button, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AsideSidebar = () => (
    <aside className="col-md-4 blog-sidebar">
        <div className="p-3 mb-3 bg-light rounded">
            <h4 className="font-italic">About</h4>
            <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>


            <div className="p-3">
                <h4 className="font-italic">Archives</h4>
                <ol className="list unstyled mb-0">
                    <li><Link to="" href="">March 2014</Link></li>
                    <li><Link to="" href="">February 2014</Link></li>
                    <li><Link to="" href="">January 2014</Link></li>
                    <li><Link to="" href="">December 2013</Link></li>
                    <li><Link to="" href="">November 2013</Link></li>
                    <li><Link to="" href="">October 2013</Link></li>
                    <li><Link to="" href="">September 2013</Link></li>
                    <li><Link to="" href="">August 2013</Link></li>
                    <li><Link to="" href="">July 2013</Link></li>
                    <li><Link to="" href="">June 2013</Link></li>
                    <li><Link to="" href="">May 2013</Link></li>
                    <li><Link to="" href="">April 2013</Link></li>
                </ol>

                <div className="p-3">
                    <h4 className="font-italic">Elsewhere</h4>
                    <ol className="list-unstyled">
                        <li><Link to="" href="">Github </Link></li>
                        <li><Link to="" href="">Twitter </Link></li>
                        <li><Link to="" href="">Facebook</Link></li>
                    </ol>
                </div>
            </div>
        </div>
    </aside>
);

export default class Firehouse extends Component {
    render() {
        return (
            <main className="container">
                <Row>
                    <Col md="8" className="blog-main">
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                            From the Firehouse
                        </h3>

                        <div className="blog-post">
                            <h2 className="blog-post-title">Sample blog post</h2>
                            <p className="blog-post-meta">January 1, 2014 by <Link to="#" href="">Mark</Link></p>

                            {/* /// */}
                            <p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                            <hr />
                            <p>Cum sociis natoque penatibus et magnis <Link to="#" href="#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>Heading</h2>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <pre><code>Example code block</code></pre>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                            <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                            </ol>
                            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                            {/* /// */}
                        </div>
                        <div className="blog-post">
                            <h2 className="blog-post-title">Another blog post</h2>
                            <p className="blog-post-meta">December 23, 2013 by <Link to="#" href="">Jacob</Link></p>

                            <p>Cum sociis natoque penatibus et magnis <Link to="#" href="#">dis parturient montes</Link>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                        </div>
                        <Nav className="blog-pagination">
                            <Button variant="primary" href="">Older</Button>
                            <Button variant="secondary" disabled href="">Newer</Button>
                        </Nav>
                    </Col>
                    <AsideSidebar />
                </Row>
            </main>
        )
    }
}
