import React, { useState } from 'react';
import {
  Box,
  Button,
  Input,
  VStack,
  HStack,
  Text,
  Heading,
  Divider,
  useToast,
  Center,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHeadphonesSimple, faM, faX } from '@fortawesome/free-solid-svg-icons';

const Chatbot = () => {
  const [conversation, setConversation] = useState<{ user: string; bot: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const toast = useToast();
  const [show,setShow]=useState(false);

  const botMessages = [
    'Hello! What is your name?',
    'Nice to meet you, {name}! How can I help you today?',
    'We offer web development, mobile app development, and AI services. Would you like more details?',
    'You can reach us at contact@ourcompany.com.',
    'Thank you for chatting with us! Have a great day!',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = userInput.trim();
    if (!userMessage) return;

    const newConversation = [...conversation, { user: userMessage, bot: '' }];
    setConversation(newConversation);
    setUserInput('');

    // Simulate bot response after 1 second
    setTimeout(() => {
      const botResponse = botMessages[conversation.length] || 'I didn’t quite catch that.';
      newConversation[newConversation.length - 1].bot = botResponse;
      setConversation([...newConversation]);

      toast({
        title: 'Bot response',
        description: botResponse,
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    }, 1000);
  };

  return (
    <VStack spacing={4} alignItems={"flex-end"} justifyContent={"flex-end"}>
    {show&&<Box
      w="100%"
      maxW="400px"
      bg="white"
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
        <VStack spacing={4} align="start" maxHeight="350px" overflowY="auto">
          {conversation.map((message, index) => (
            <Box key={index} w="100%">
              <HStack alignItems={"center"} justifyContent={"right"} whiteSpace={"normal"} spacing={2} >
               <Text px={4} maxW={"100%"} whiteSpace={"normal"} py={1} borderRadius={"lg"} bg={"brand.primary"} color={"white"}>{message.user}</Text>
              </HStack>
              <HStack w={"100%"} mt={2} whiteSpace={"normal"} spacing={0} p={1} borderRadius={"lg"} bg={"white"} color={"brand.font"}>
              <Center bg={"brand.primary"} border={"1px double"}  boxShadow={"sm"} px={3} py={2} borderRadius={"full"} color={"white"}><FontAwesomeIcon icon={faM} size='sm' /></Center><Text px={4}>{message.bot}</Text>
              </HStack>
            </Box>
          ))}
        </VStack>
      </Box>
      <form onSubmit={handleSubmit}>
        <HStack spacing={2} mt={4}>
          <Input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            focusBorderColor='brand.primary'
            onChange={(e) => setUserInput(e.target.value)}
            isRequired
          />
          <Button type="submit" bg={"brand.primary"} color={"white"} isLoading={false}>
            Send
          </Button>
        </HStack>
      </form>
    </Box>}
    <Center boxShadow={"md"} w={"12"} onClick={()=>setShow(!show)} height={"12"} bg={"brand.primary"} borderRadius={"full"} color={"white"}>
      <FontAwesomeIcon icon={show?faX:faHeadphonesSimple}/>
    </Center>
    </VStack>
  );
};

export default Chatbot;
