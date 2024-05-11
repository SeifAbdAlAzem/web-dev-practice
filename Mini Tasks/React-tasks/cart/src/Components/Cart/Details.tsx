import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const Details = () => {
  const colSpan = useBreakpointValue({ base: 2, md: 1 });

  return (
    <VStack w="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>

      <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="firstName" fontWeight="bold">
              First Name
            </FormLabel>
            <Input
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              aria-label="First Name"
              autoFocus
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="lastName" fontWeight="bold">
              Last Name
            </FormLabel>
            <Input
              id="lastName"
              type="text"
              placeholder="Enter your last name"
              aria-label="Last Name"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel htmlFor="address" fontWeight="bold">
              Address
            </FormLabel>
            <Input
              id="address"
              type="text"
              placeholder="Enter your address"
              aria-label="Address"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="city" fontWeight="bold">
              City
            </FormLabel>
            <Input
              id="city"
              type="text"
              placeholder="Enter your city"
              aria-label="City"
            />
          </FormControl>
        </GridItem>

        <GridItem colSpan={colSpan}>
          <FormControl>
            <FormLabel htmlFor="country" fontWeight="bold">
              Country
            </FormLabel>
            <Select
              id="country"
              placeholder="Select your country"
              aria-label="country"
            >
              <option value="usa">Palestine</option>
              <option value="uae">Spain</option>
              <option value="nmk">Egypt</option>
              <option value="de">Japan</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <FormControl display="flex">
            <Checkbox id="shipToBilling" defaultChecked>
              Ship to billing address
            </Checkbox>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Button variant="primary" size="lg" w="full">
            Place Order
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default Details;
