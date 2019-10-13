import React from "react";
import "./App.css";
import { Card, Button } from "react-bootstrap";
import Arrow from "react-arrow";
import ScrollUpButton from "react-scroll-up-button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
            paddingTop: "20%",
            color: "white"
          }}
        >
          <h3>
            <mark>Computer Science student at QUT</mark>
          </h3>
          <Arrow
            className="zoom2"
            direction="down"
            shaftWidth={10}
            shaftLength={0}
            headWidth={50}
            headLength={40}
            fill="white"
            stroke="black"
            strokeWidth={1}
            onClick={() =>
              window.scrollTo({
                top: 745,
                bottom: 0,
                behavior: "smooth"
              })
            }
          />
        </div>
      </div>
      <ScrollUpButton />

      <Tabs>
        <TabList
          style={{
            backgroundColor: "#2B314B",
            color: "white",
            textAlign: "center",
            fontSize: "150%"
          }}
        >
          <Tab>About Me</Tab>
          <Tab>My Projects</Tab>
        </TabList>

        <TabPanel></TabPanel>
        <TabPanel>
          <div
            style={{
              minHeight: "50vh",
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>{" "}
        </TabPanel>
      </Tabs>
      <div></div>
    </>
  );
}

export default App;
