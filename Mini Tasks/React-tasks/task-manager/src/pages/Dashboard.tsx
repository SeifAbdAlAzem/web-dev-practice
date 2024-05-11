import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

// Define the Task interface
interface Task {
  id: number;
  title: string;
  description: string;
  author: string;
  img: string;
}

// Dashboard component displays a list of tasks
const Dashboard = () => {
  // Fetch tasks data using useLoaderData hook from react-router-dom
  const tasks = useLoaderData() as Task[];

  return (
    <SimpleGrid spacing={10} minChildWidth={300}>
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTopWidth="8px"
            borderTopColor="purple.400"
            bg="white"
          >
            <CardHeader color="gray.700">
              <Flex gap={5}>
                <Box w="50px" h="50px">
                  <Avatar src={task.img} name={task.author} />
                </Box>
                <Box>
                  <Heading as="h3" size="sm">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.200" />

            <CardFooter>
              <HStack>
                <Button
                  variant="ghost"
                  leftIcon={<ViewIcon />}
                  aria-label="View"
                >
                  Watch
                </Button>
                <Button
                  variant="ghost"
                  leftIcon={<EditIcon />}
                  aria-label="Comment"
                >
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;
