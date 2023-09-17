import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import './Style.css'


const LoginScreen = () => {
    return (
        <div className="login-page">
            <Container>
                <Row className="row-section">
                    <Col lg={12} className="d-flex justify-content-center">
                        <Card>
                            <Card.Body>
                                <Card.Title>Login</Card.Title>
                                <div className="mt-3 mb-3">
                                    <label>Usuario</label>
                                    <input type="text" className="form-control" name="usuario" />
                                </div>
                                <div className="mt-3 mb-3">
                                    <label>Clave</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <div className="mt-3 mb-3">
                                    <button type="button" className="btn btn-success">Ingresar</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LoginScreen;
