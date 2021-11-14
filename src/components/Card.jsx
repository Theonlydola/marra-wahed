import { Box, Text, HStack, VStack, Button, Badge, Icon, IconButton} from '@chakra-ui/react';
import {Spinner, useDisclosure, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody,ModalCloseButton} from "@chakra-ui/react"
import { BsHeart, BsEgg } from "react-icons/bs"
import { IoReload } from "react-icons/io5";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import connect from '../connection/connect';
import React, {useState, useEffect} from "react";
  export default function Card(props) {
    const [likescount, setlikescount] = useState(props.joke.likes? props.joke.likes : 0 );
    const [dislikescount, setdislikescount] = useState(props.joke.dislikes? props.joke.dislikes : 0);
    const [likeStatus, setlikeStatus] = useState(false);
    const [dislikeStatus, setdislikeStatus] = useState(false);
    const [reportComment, setreportComment] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef();
    const handleLike = async () => {
          if(!likeStatus){
              setlikeStatus(true);
              setlikescount(likescount+1);
              if(dislikeStatus) { 
                setdislikeStatus(false); 
                setdislikescount(dislikescount-1);
              }
              try{
                const response = await connect.reacttoJoke(props.joke._id, 'like');
                if(!response) console.log("something went wrong!");
            }catch(err){
                console.log(err);
            }
          }else {
              setlikeStatus(false);
              setlikescount(likescount-1);
              try{
                const response = await connect.unreacttoJoke(props.joke._id,'like');
                if(!response){
                    console.log("something went wrong!");
                }
              
            }catch(err){
                console.log(err);
            }
          }
    }

    const handleDislike = async () => {
          if(!dislikeStatus){
              setdislikeStatus(true);
              setdislikescount(dislikescount+1);
              if(likeStatus) { 
                setlikeStatus(false); 
                setlikescount(likescount-1);
              }
              try{
                const response = await connect.reacttoJoke(props.joke._id, 'dislike');
                if(!response) console.log("something went wrong!");
            }catch(err){
                console.log(err);
            }
          }else {
              setdislikeStatus(false);
              setdislikescount(dislikescount-1);
              try{
                const response = await connect.unreacttoJoke(props.joke._id,'dislike');
                if(!response){
                    console.log("something went wrong!");
                }
            }catch(err){
                console.log(err);
            }
          }
    }

    const handlereload = () => {
      props.handlereload();
      setlikeStatus(false);
      setdislikeStatus(false);
    }

    const setComment = (e) => {
      setreportComment(e);
    }

    const handleReport = () => {
      connect.reportJoke(props.joke._id,reportComment);
      setreportComment('');
      onClose();
    }

      useEffect(() => {
        setlikescount(props.joke.likes);
        setdislikescount(props.joke.dislikes)
    }, [props.joke]);

    return <Box mt="2em" align="center"> 
  <VStack spacing="2em" mt="1em">
    <Box height="auto" width="100%" borderRadius="lg" backgroundColor="#FFF7AE" align="center" boxShadow="10px 10px #F6D167">
          {props.joke.nsfw&& <Badge colorScheme="red">NSFW</Badge>} 
          <Icon as={ImQuotesRight} ml = "85%" mt="1em" />
          <Box mt="1em" mr="2em" ml="2em">
          {props.joke ? 
          <Text overflowWrap="break-word" hyphens= "auto" className="font-link" fontSize="120%" color="black" > {props.joke.joke}</Text>
           : <Spinner color="red.500" /> }
          </Box> 
          <Icon as={ImQuotesLeft} mr = "85%" mt="1em"/>
          {props.joke.author&& <Badge ml="1.2em" mr = "85%" mt="0.2em" className="font-link" fontSize="105%" colorScheme="green">{props.joke.author}</Badge>} 
          <HStack mb="1em"> 
          <Text ml = "70%" mr="1em"> <Icon as={BsEgg}  /> {dislikescount} </Text>
          <Text  ml = "70%"> <Icon as={BsHeart}   /> {likescount} </Text>
          </HStack>
         
    </Box>
    
      <HStack ml="2em" mr="1em" mt="1em" spacing="24px">
          <IconButton title="كمان واحدة" icon={<IoReload />} borderRadius="full" bg="#DF2E2E" color="white" size="lg" onClick={handlereload}/>
          <IconButton isDisabled={!props.joke} id="dislike" title="وحشة" icon={<BsEgg />} borderRadius="full" style= {{backgroundColor : dislikeStatus ? "#DF2E2E" : "grey"}} color="white" size="lg" outline="none" onClick={handleDislike}/>
          <IconButton isDisabled={!props.joke} id= "like" title="جامدة" icon={<BsHeart />} borderRadius="full" style= {{backgroundColor : likeStatus ? "#DF2E2E" : "grey"}} color="white" size="lg" outline="none" onClick={handleLike}/>
      </HStack>
   
    </VStack>
    <Button isDisabled={!props.joke}  mt="2em" bgColor="#DF2E2E" color="white" onClick={onOpen}>Report</Button>
    <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Comment</FormLabel>
              <Input ref={initialRef} placeholder="Optional" onChange={(e) => setComment(e.target.value)}/>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleReport}>
              Report
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </Box>;
  }