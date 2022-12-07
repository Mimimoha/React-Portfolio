import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleInputChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value })
    // const handleFormSubmit = 
    return (
        <>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" name='name' value ={ userData.name} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Your Email" name= "email" value={userData.email} onChange={handleInputChange} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control  type="text-area" placeholder="Your Message" name="message" value={userData.message} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default ContactForm