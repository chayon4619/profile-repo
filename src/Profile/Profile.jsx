import React from 'react';
import './Profile.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
const Profile = () => {
    return (
        <Container fluid className="vh-100 position-relative">
            <Row className="vh-100">
                <Col className=" bg-black"></Col>
                <Col className="text-center d-flex justify-content-center align-items-center">
                    <div>
                        <h1 className="fw-bolder text-120">
                            HI<span className="text-primary">!</span>
                        </h1>
                        <h4 className="fw-bold p-3">Here's who I am & what I do</h4>
                        <div className="pb-4">
                            <Button className="me-4 px-4 rounded-pill" variant="primary">
                                Resume
                            </Button>
                            <Button className="rounded-pill px-4" variant="primary">
                                Projects
                            </Button>
                        </div>
                        <div className=" ms-5 text-justify">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Eligendi necessitatibus esse similique dolore eveniet facere
                                doloribus error at quam, numquam ullam hic aspernatur temporibus
                                beatae iste nulla officia ex accusamus tenetur deleniti impedit
                                molestiae earum!
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Dolores nesciunt et mollitia, facere quibusdam harum quae
                                similique ipsum dicta voluptatem.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="profile-card ">
                <div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="pt-5">
                            <img
                                width={200}
                                height={200}
                                className="rounded-pill object-cover"
                                src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt=""
                            />
                            <div className="mt-3">
                                <h3 className="fw-bold m-0 text-dark text-center">Maria</h3>
                                <h3 className="fw-bold m-0 text-dark text-center">Jones</h3>
                            </div>
                        </div>
                    </div>
                    <hr className="w-75 mx-auto text-white border-2" />
                    <p className="text-center fw-medium text-spacing">PROJECT MANAGER</p>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center gap-3 py-2 position-absolute bottom-0 w-100">
                    <div className="social-icon">
                        <FaFacebookF className="fs-5" />
                    </div>
                    <div className="social-icon">
                        <BsTwitter className="fs-5" />
                    </div>
                    <div className="social-icon">
                        <FaLinkedinIn className="fs-5" />
                    </div>
                    <div className="social-icon">
                        <FiInstagram className="fs-5" />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Profile;