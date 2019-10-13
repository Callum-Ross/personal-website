import React from "react";
import "./App.css";
import { Card } from "react-bootstrap";
import Arrow from "react-arrow";
import ScrollUpButton from "react-scroll-up-button";
function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
      <div className="App">
        <div className="sticky" style={{ paddingBottom: "4%" }}>
          <div className=" Title1 ">
            <h1>Callum Ross</h1>
          </div>
          <div className="Title2">
            <h2>My Site and Projects!</h2>
          </div>
        </div>
        <div
          className="sticky"
          style={{ position: "sticky", paddingTop: "35%", color: "white" }}
        >
          <h3>Computer Science student at QUT</h3>
          <Arrow
            direction="down"
            shaftWidth={10}
            shaftLength={10}
            headWidth={30}
            headLength={20}
            fill="#1F2638"
            stroke="white"
            strokeWidth={1}
            onClick={() => alert("You clicked the arrow!")}
          />
        </div>
      </div>
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "#1F2638",
          color: "white"
        }}
      >
        Recent Projects
      </h1>
      <div>
        <ScrollUpButton />
      </div>
      <div
        style={{
          minHeight: "95vh",

          zIndex: "10",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#2B314B"
        }}
      >
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
}

export default App;
