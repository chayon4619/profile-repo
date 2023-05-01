import React from 'react';
import './Profile.css';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container fluid className='vh-100'>
            <Row className='vh-100'>
                <Col className=' bg-black' >
                </Col>
                <Col className='text-center d-flex justify-content-center align-items-center'>
                    <div>
                        <h1 className='fw-bolder'>HI<span className='text-primary' >!</span></h1>
                        <h4 className='fw-bold p-3'>Here's who I am & what I do</h4>
                        <div className='pb-4'>
                            <Button className='me-4 px-4 rounded-pill' variant="primary">Resume</Button>
                            <Button className='rounded-pill px-4' variant="primary">Projects</Button>
                        </div>
                        <div className=' ms-5 text-justify'>
                            <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi necessitatibus esse similique dolore eveniet facere doloribus error at quam, numquam ullam hic aspernatur temporibus beatae iste nulla officia ex accusamus tenetur deleniti impedit molestiae earum!</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nesciunt et mollitia, facere quibusdam harum quae similique ipsum dicta voluptatem.</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default Profile;