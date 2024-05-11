import { Container, Flex } from "@chakra-ui/react";
import Details from "./Details";
import CartDetails from "./CartDetails";

const Cart = () => {
  return (
    <Container maxW="container.xl">
      <Flex
        h={{ base: "auto", md: "100vh" }}
        p={[0, 10]}
        direction={{ base: "column-reverse", md: "row" }}
      >
        <Details />
        <CartDetails />
      </Flex>
    </Container>
  );
};

export default Cart;
