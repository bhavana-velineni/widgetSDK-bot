import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

import '../styles/Join.css';

export default function Chat() {
    const [name, setName] = useState('');
  
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <h1 className="heading">Wi∂getSDK Care</h1>
          <Row>
            <Col>
            <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
            </Col>
            <Col>
            <Link onClick={e => (!name) ? e.preventDefault() : null} to={`/chat?name=${name}`}>
            <Button className={'button mt-20'} type="submit">Join Chat</Button>
          </Link>
          </Col>
          </Row>
        </div>
      </div>
    );
  }