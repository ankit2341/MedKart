import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadphonesSimple,
  faM,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@/context/theme-context";

const Chatbot = () => {
  const [conversation, setConversation] = useState<
    { user?: string; bot?: string; options?: boolean }[]
  >([]);
  const {theme}=useTheme();
  const [userInput, setUserInput] = useState("");
  const [show, setShow] = useState(false);

  const options = [
    {
      prompt: "Your Orders",
      answer: "Go to your profile and click on My orders to view your orders",
    },
    {
      prompt: "Your Profile",
      answer: "Go to your profile and view your profile info",
    },
    {
      prompt: "Your Lab Tests",
      answer: "Go to your profile and click on My lab tests to view your tests",
    },
    {
      prompt: "Contact Us",
      answer: "Reach me at ankitpatil2341@gmail.com ( made with ♥ by Ankit )",
    },
  ];

  const addOptions = () => {
    setConversation((prev) => [
      ...prev,
      { bot: "What can I help you with?", options: true },
    ]);
  };

  const handleOptionClick = (option: { prompt: string; answer: string }) => {
    setConversation((prev) => [
      ...prev,
      { user: option.prompt },
      { bot: option.answer },
    ]);
    setTimeout(() => {
      addOptions();
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = userInput.trim();
    if (!userMessage) return;

    setConversation((prev) => [
      ...prev,
      { user: userMessage },
      { bot: "I didn’t quite catch that. Let me know how I can assist you!" },
    ]);

    setUserInput("");

    setTimeout(() => {
      addOptions();
    }, 500);
  };

  useEffect(() => {
    addOptions();
  }, []);

  return (
    <VStack spacing={4} alignItems="flex-end" borderRadius={"md"} bg={"transparent"} justifyContent="flex-end">
      {show && (
        <Box
          w="100%"
          maxW="400px"
          bg={"brand.background"}
          border={"1px solid"}
          borderColor={theme==="dark"?"gray.600": "lightgray"}
          zIndex={11}
          p={4}
          borderRadius="lg"
          boxShadow="lg"
          display="flex"
          flexDirection="column"
          height="500px"
          justifyContent="space-between"
        >
          <Box>
            <Heading size="md" textAlign="center">
              Chat with us
            </Heading>
            <Divider my={4} />
            <VStack
              spacing={4}
              align="start"
              maxHeight="350px"
              overflowY="auto"
              bg={"brand.background"}
            >
              {conversation.map((message, index) => (
                <Box
                  key={index}
                  w="100%"
                  display={index === 0 ? "none" : "block"}
                >
                  {message.user && (
                    <HStack
                      alignItems="center"
                      justifyContent="right"
                      spacing={2}
                    >
                      <Text
                        px={4}
                        maxW="100%"
                        
                        whiteSpace="normal"
                        py={1}
                        borderRadius="lg"
                        bg="brand.primary"
                        color="white"
                      >
                        {message.user}
                      </Text>
                    </HStack>
                  )}
                  {message.bot && (
                    <HStack
                      w="100%"
                      whiteSpace="normal"
                      spacing={0}
                      bg={"brand.background"}
                      p={1}
                      borderRadius="lg"
                      color="brand.font"
                      mt={2}
                    >
                      <Center
                        bg="brand.primary"
                        border="1px double"
                        boxShadow="sm"
                        px={3}
                        py={2}
                        borderRadius="full"
                        color="white"
                      >
                        <FontAwesomeIcon icon={faM} size="sm" />
                      </Center>
                      <Text px={4}>{message.bot}</Text>
                    </HStack>
                  )}
                  {message.options && (
                    <SimpleGrid columns={2} spacing={4} mt={2}>
                      {options.map((option, i) => (
                        <Box
                          key={i}
                          px={4}
                          py={1}
                          bg={theme==="dark"? "gray.600":"gray.200"}
                          borderRadius="md"
                          boxShadow="none"
                          fontSize={"sm"}
                          cursor="pointer"
                          _hover={{ bg: "gray.200" }}
                          onClick={() => handleOptionClick(option)}
                        >
                          <Text fontWeight="bold">{option.prompt}</Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  )}
                </Box>
              ))}
            </VStack>
          </Box>
          {/* Input area */}
          <form onSubmit={handleSubmit}>
            <HStack spacing={2} mt={4}>
              <Input
                type="text"
                placeholder="Type your message..."
                value={userInput}
                focusBorderColor="brand.primary"
                onChange={(e) => setUserInput(e.target.value)}
                isRequired
              />
              <Button
                type="submit"
                bg="brand.primary"
                color="white"
                isLoading={false}
              >
                Send
              </Button>
            </HStack>
          </form>
        </Box>
      )}
      {/* Floating Chatbot Button */}
      <Center
        boxShadow="md"
        w="12"
        onClick={() => setShow(!show)}
        height="12"
        bg="brand.primary"
        borderRadius="md"
        color="white"
        cursor="pointer"
      >
        <FontAwesomeIcon icon={show ? faX : faHeadphonesSimple} />
      </Center>
    </VStack>
  );
};

export default Chatbot;
