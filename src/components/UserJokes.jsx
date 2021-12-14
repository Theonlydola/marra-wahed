import adminconnect from '../connection/adminconnect';
import { ChakraProvider , Text } from '@chakra-ui/react';
import React, {useState, useEffect} from "react";
import Card from './Card';
import {Box, Stack}  from '@chakra-ui/react';
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption} from "@chakra-ui/react"
export default function UserJokes() {
    
    const [Jokes, setJokes] = useState([]);
    const fetchJoke = async () => {
      try{
          console.log("FETCHING...");
          const response = await adminconnect.getUserJokes();
          if(!response){
              console.log("something went so wrong!");
          }
          setJokes(response);
          console.log(response);
      }catch(err){
          console.log(err);
      }
  }
  
  useEffect(() => {
    fetchJoke();
  }, []);
  

  return <ChakraProvider>
  <Table >
    <TableCaption>All live Jokes</TableCaption>
    <Thead>
      <Tr>
        <Th>No.</Th>
        <Th>Joke</Th>
        <Th>nsfw Flag</Th>
        <Th>Author</Th>
      </Tr>
    </Thead>
    <Tbody>
      {Jokes.map((joke,index)=> (
        <Tr>
        <Td>{index + 1}</Td>
        <Td>{joke.joke}</Td>
        <Td>{(joke.nsfw).toString()}</Td>
        {joke.author && <Td>{joke.author}</Td>}
        {joke.name && <Td>{joke.name}</Td>}
        </Tr>
      ))}
    </Tbody>
  </Table>
    </ChakraProvider>
}