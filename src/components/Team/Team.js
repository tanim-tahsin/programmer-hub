import React from 'react';
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
const Team = (props) => {
  const { name, salary, company, image } = props.team;
  const style = {
    border: "1px solid blue",
    margin: "10px"
  }
  return (
    <div className="row">
      <div className="col-md-8">
        <div style={style} >
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
      </Card.Text>
            </Card.Body>
          </Card>
          <Button variant="outline-primary">Primary</Button>{' '}
        </div>

      </div>

      <div className="col-md-4">
        <h1>helllo world</h1>
      </div>
    </div>
  );
};

export default Team;