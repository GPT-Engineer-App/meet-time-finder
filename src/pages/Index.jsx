import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, Heading, FormControl, FormLabel, InputGroup, InputRightElement, IconButton, useToast } from "@chakra-ui/react";
import { FaCalendarAlt, FaClock, FaPlus, FaSearch } from "react-icons/fa";

const Index = () => {
  const [times, setTimes] = useState([]);
  const [inputTime, setInputTime] = useState("");
  const toast = useToast();

  const handleAddTime = () => {
    if (inputTime) {
      setTimes([...times, inputTime]);
      setInputTime("");
      toast({
        title: "Time added.",
        description: "We've added your available time.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const findBestTime = () => {
    if (times.length === 0) {
      toast({
        title: "No times added.",
        description: "Please add some available times first.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    // This is a placeholder for actual best time finding logic
    toast({
      title: "Best Time Found!",
      description: `The best time to meet is around ${times[Math.floor(times.length / 2)]}`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="full">
        <Heading>Find the Best Time to Meet</Heading>
        <FormControl>
          <FormLabel htmlFor="time">Add Your Available Time</FormLabel>
          <InputGroup>
            <Input id="time" type="time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} placeholder="Enter time" />
            <InputRightElement width="4.5rem">
              <IconButton aria-label="Add time" icon={<FaPlus />} onClick={handleAddTime} />
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={findBestTime}>
          Find Best Time
        </Button>
        <Box w="full" p={4} borderWidth="1px" borderRadius="lg">
          <Text fontWeight="bold">Added Times:</Text>
          {times.map((time, index) => (
            <Text key={index}>{time}</Text>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
