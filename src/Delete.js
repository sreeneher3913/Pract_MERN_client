<Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/home">Team 4</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/add">Add Expense</Nav.Link>
        <Nav.Link href="/dueList">Defaulter list</Nav.Link>
      </Nav>
      <Form className="d-flex flex-row-reverse">
        <Button style={{ marginLeft: "20px" }} variant="light">
          Logout
        </Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>;
