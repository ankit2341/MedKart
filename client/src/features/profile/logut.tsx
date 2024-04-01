import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        color={"brand.font"}
        _hover={{
          color: "brand.font",
          background: "brand.primary",
          borderRadius: "md",
        }}
        display="flex"
        borderRadius={"md"}
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        p={6}
        bg="brand.background"
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
      >
        Logout
      </Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="scale">
        <ModalOverlay backdropFilter="blur(4px)" />
        <ModalContent bg={"brand.background"}>
          <ModalHeader>Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Are you sure you want to log out?</Text>
          </ModalBody>
          <ModalFooter>
            <Button bg={"brand.primary"} color={"brand.background"}>
              Logout
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
