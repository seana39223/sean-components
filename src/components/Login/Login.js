import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

function Login(props) {
    return (
        <div className="Login">
            <form>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        type="password"
                    />
                </FormGroup>
                <Button block bsSize="large"  type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
export default Login;
