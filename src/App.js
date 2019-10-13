import React from "react";
import "./App.css";
import { Card, Button } from "react-bootstrap";
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
      <link href="css/hover.css" rel="stylesheet" media="all"></link>
      <div className="App">
        <div className="sticky" style={{ paddingBottom: "7%" }}>
          <div className=" Title1 ">
            <h1>Callum Ross</h1>
          </div>
          <div className="Title2">
            <h2>My Site and Projects!</h2>
          </div>
        </div>
        <div
          className="sticky"
          style={{
            position: "sticky",
            paddingTop: "33%",
            color: "white"
          }}
        >
          <h3>Computer Science student at QUT</h3>
          <Arrow
            direction="down"
            shaftWidth={10}
            shaftLength={0}
            headWidth={50}
            headLength={40}
            fill="white"
            stroke="#1F263"
            strokeWidth={0.5}
            onClick={() =>
              window.scrollTo({
                top: 1000,
                bottom: 0,
                behavior: "smooth"
              })
            }
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
          paddingTop: "5%",
          paddingLeft: "15%",
          paddingRight: "15%",

          zIndex: "10",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#2B314B",
          justifyContent: "center"
        }}
      >
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card
          bg="secondary"
          className="zoom"
          text="white"
          style={{ width: "18rem", height: "35rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default App;
