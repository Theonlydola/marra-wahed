import { ChakraProvider } from '@chakra-ui/react';
import React, {useState} from "react";
import connect from '../connection/connect';
import {FormControl, FormLabel, Input, Textarea , HStack} from "@chakra-ui/react"
import { Box,Button,Checkbox, VStack} from '@chakra-ui/react';
export default function JokeForm (props){
    const [name, setname] = useState('');
    const [joke, setjoke] = useState('');
    const [nsfw, setnsfw] = useState(false);

    const setName = (e) => {
        setname(e);
      }

    const setJoke = (e) => {
        setjoke(e);
      }

    const handleClick = () => {
        console.log(name,joke,nsfw);
        if(name !== '' && joke !== ''){
          connect.sendJoke(name,joke,nsfw);
          setname('');
          setjoke('');
          setnsfw(false);
          alert('Successfully Submitted');
        }
        else{
          alert('Please Complete Required Fields');
        }
       
      }

    return <ChakraProvider>
        <Box w="100%" align="center">
          <Box w="50%">
            <VStack>
              <FormControl id="name" isRequired>
                <HStack spacing="1em">
                <Input textAlign="right" value={name} fontFamily="DG bebo" placeholder="مثال: محمد لوبيا" onChange={(e) => setName(e.target.value)}/>
                <FormLabel fontFamily="DG bebo">اسمك</FormLabel>
                </HStack>
              </FormControl>
              <FormControl id="joke" isRequired>
                <HStack spacing="1em"> 
                <Textarea textAlign="right" value={joke} fontFamily="DG bebo" align="right"placeholder="حاول تكون جديدة" onChange={(e) => setJoke(e.target.value)}/>
                <FormLabel fontFamily="DG bebo">نكتة</FormLabel>
                </HStack>
              </FormControl>
            <Checkbox checked={nsfw} fontFamily="DG bebo" fontSize="120%" color="black" onChange={(e) => setnsfw(e.target.checked)}>Nsfw</Checkbox>
            <Button w="10em" h="4em" boxShadow="5px 5px #F6D167" onClick={handleClick} backgroundColor="#FFF7AE" overflowWrap="break-word" hyphens= "auto" fontFamily="DG bebo" fontSize="120%" color="black" > ابعت</Button>
            </VStack>
          </Box>
        </Box>
    </ChakraProvider>
}