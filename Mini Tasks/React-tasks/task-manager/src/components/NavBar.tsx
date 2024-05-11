import { UnlockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const NavBar = () => {
  const toast = useToast();

  return (
    <Flex as="nav" p="10px" mb="36px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">
        Task Manager
      </Heading>
      <Spacer />

      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button
          colorScheme="purple"
          onClick={() =>
            toast({
              title: "Logged out.",
              description: "Successfully logged out",
              duration: 5000,
              isClosable: true,
              position: "top",
              status: "success",
              icon: <UnlockIcon />,
            })
          }
        >
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default NavBar;
