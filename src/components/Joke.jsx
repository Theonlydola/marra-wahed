import { ChakraProvider } from '@chakra-ui/react';
import React, {useState, useEffect} from "react";
import Card from './Card';
import {Box, Stack}  from '@chakra-ui/react';
import connect from '../connection/connect';

export default function Joke(props) {
  const [randomJoke, setrandomJoke] = useState('');
  const fetchJoke = async () => {
    try{
        console.log(props.nsfwflag);
        const response = await connect.getJoke(props.nsfwflag);
        if(!response){
            console.log("something went so wrong!");
            fetchJoke();
        }
        console.log(response.joke);
        setrandomJoke(response);
    }catch(err){
        console.log(err);
    }
}

useEffect(() => {
  fetchJoke();
}, []);

  return <ChakraProvider>
  <Box w="100%" bg="white.200">
    <Stack align="center">
      <Card joke={randomJoke} handlereload={fetchJoke}/>
    </Stack>
  </Box>
  </ChakraProvider>
}
