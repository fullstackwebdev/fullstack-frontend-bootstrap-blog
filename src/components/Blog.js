import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BlogHeader from './BlogHeader.js';
import NavScroller from './NavScroller.js';
import BlogJumbotron from './BlogJumbotron.js';
import FeaturedPost from './FeaturedPost.js';
import FireHouse from './Firehouse.js';


const Footer = () => (
    <footer className="blog-footer">
        <p>Blog template built for <Link to="" href="https://getbootstrap.com/">Bootstrap</Link> by <Link to="" href="https://twitter.com/mdo">@mdo</Link>.</p>
        <p>
            <Link to="" href="#">Back to top</Link>
        </p>
    </footer>
);

export default class Blog extends Component {
    render() {
        return (
            <div>
                <Container>
                    <BlogHeader />
                    <NavScroller />
                    <BlogJumbotron />

                    <FeaturedPost />
                </Container>


                <FireHouse />

                <Footer />
            </div>
        )
    }
}
