import React from 'react'
import { Button, Col, Row, Typography } from 'antd'
import app, { auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom'
import { FacebookAuthProvider, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";

const providerFb = new FacebookAuthProvider();
const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();

    const handleLoginFacebook = () => {
        signInWithPopup(getAuth(), providerFb)
            .then((result) => {
                console.log("Logged In", result);
            })
            .catch((error) => {
                console.log("Caught error Popup closed");
            });
    }
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log({ user })
            navigate('/')
        } else {
            // User is signed out
            // ...
        }
    });

    return (
        <Row justify={'center'} style={{ height: 800 }}>
            <Col span={8}>
                <Title style={{ textAlign: 'center' }} level={3}>Fun Chat</Title>
                <Button style={{ width: '100%', marginBottom: 5 }}>Đăng nhập bằng Google</Button>
                <Button onClick={handleLoginFacebook} style={{ width: '100%' }}>Đăng nhập bằng Facebook</Button>
            </Col>
        </Row>
    )
}

export default Login