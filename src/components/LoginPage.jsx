import adminconnect from '../connection/adminconnect';
import { ChakraProvider } from '@chakra-ui/react';
import React, {useState} from "react";
import connect from '../connection/connect';
import {FormControl, FormLabel, Input, Textarea , HStack} from "@chakra-ui/react"
import { Box,Button,Checkbox, VStack} from '@chakra-ui/react';
import Alljokes from './AllJokes'

export default function LoginPage(props) {
    const [code, setcode] = useState('');

    const setCode = (e) => {
        setcode(e);
      }

     

    const handleClick = async () => {
        try {
            if(code !== ''){
                const result = await adminconnect.login(code);
                if (result===true){
                  props.login(result);
                }else{
                  alert('Wrong Code');
                }
              }
              else{
                alert('Please Complete Required Fields');
              }
        }catch(err){
            console.log(err);
        }
        
      }
  
  return <ChakraProvider>
  <Box w="90%" align="center">
    <Box align= "center" w="60%">
      <VStack spacing="2em">
        <FormControl id="code" isRequired>
          <HStack spacing="2em">
          <FormLabel className="font-link">login code</FormLabel>
          <Input w="50%" textAlign="left" type="password" value={code} className="font-link"  onChange={(e) => setCode(e.target.value)}/>
          </HStack>
        </FormControl>
      <Button w="10em" h="4em" boxShadow="5px 5px #F6D167" onClick={handleClick} backgroundColor="#FFF7AE" overflowWrap="break-word" hyphens= "auto" className="font-link" fontSize="120%" color="black" > Log in</Button>
      </VStack>
    </Box>
  </Box>
</ChakraProvider>
}


