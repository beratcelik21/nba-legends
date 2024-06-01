import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/form";
import Row from "react-bootstrap/Row";
import { data } from "../helpers/data";

import Col from "react-bootstrap/esm/Col";
import PlayerCard from "./PlayerCard";
import { useState } from "react";
import FormComp from "./FormComp";

const CardContainer = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // const filteredData = data.filter((item) => item.name.includes(search));

  return (
    <>
      <FormComp handleChange={handleChange}/>

      {/* <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
        // onChange={(e) => setSearch(e.target.value)}
      /> */}
      <Container className=" rounded-4 my-4 p-3 card-container">
        <Row className=" justify-justify-content-center g-3 ">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase().trim())
            ).map((player, i) => (
              <Col xl={3} lg={4} md={6} key={i}>
                <PlayerCard {...player} />
              </Col>
            ))}

          {/* {data.flatMap((player, i) => (
            <Col xl={3} lg={4} md={6} key={i}>
              <PlayerCard {...player} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
