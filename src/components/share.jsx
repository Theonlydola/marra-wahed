import {
    useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,} from "@chakra-ui/react"
  import {HStack, Icon, IconButton} from '@chakra-ui/react';
  import {BsShare,BsFacebook,BsWhatsapp,BsTwitter,BsTelegram,BsReddit } from "react-icons/bs"
  import {FacebookShareButton,RedditShareButton,TelegramShareButton,TwitterShareButton,WhatsappShareButton,
  } from "react-share";
  export default function Share(props){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
          <IconButton isDisabled={!props.joke} title="بص دي" icon={<BsShare />} borderRadius="full"  bg="#DF2E2E" color="white" size="lg" outline="none" onClick={onOpen}/>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Share</ModalHeader>
              <ModalCloseButton />
              <ModalBody alignContent="center">
              <HStack spacing="1em" mt="1em" mb="1em" >
              <FacebookShareButton url={'marrawahed.com'} quote={props.joke.joke + "\n\nCheck more jokes at: "}> <Icon as={BsFacebook} w={10} h={10} color="#1B74E4"/> </FacebookShareButton>
              <TwitterShareButton url={'marrawahed.com'} title={props.joke.joke + "\n\nCheck more jokes at: "}> <Icon as={BsTwitter} w={10} h={10} color ="#1A8CD8"/>  </TwitterShareButton>
              <WhatsappShareButton url={'marrawahed.com'} title={props.joke.joke + "\n\nCheck more jokes at: "}> <Icon as={BsWhatsapp} w={10} h={10} color = "#29B200"/> </WhatsappShareButton>
              <RedditShareButton url={'marrawahed.com'} title={props.joke.joke + "\n\nCheck more jokes at: "}> <Icon as={BsReddit} w={10} h={10} color ="#FF4300"/>  </RedditShareButton>
              <TelegramShareButton url={'marrawahed.com'} title={props.joke.joke + "\n\nCheck more jokes at: "}> <Icon as={BsTelegram} w={10} h={10} color = "#28A7E8"/> </TelegramShareButton>
              </HStack>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      ) 
  }