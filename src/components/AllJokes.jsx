import adminconnect from '../connection/adminconnect';
import { ChakraProvider , IconButton } from '@chakra-ui/react';
import React, {useState, useEffect} from "react";
import Card from './Card';
import {Table,Thead,Tbody,Tr,Th,Td,TableCaption, } from "@chakra-ui/react"
import Settings from './Settings';
import {AiOutlineDelete} from "react-icons/ai"
export default function Alljokes() {
  const [Jokes, setJokes] = useState([]);
  const fetchJoke = async () => {
    try{
        console.log("FETCHING...");
        const response = await adminconnect.getAllJokes();
        if(!response){
            console.log("something went so wrong!");
        }
        setJokes(response);
    }catch(err){
        console.log(err);
    } 
}

const editJoke = async (joke) => {
    try{
      console.log("EDITING...");
      const response = await adminconnect.editJoke(joke);
      if(!response){
          console.log("something went so wrong!");
      }
      fetchJoke();
  }catch(err){
      console.log(err);
}
}

const deleteJoke = async (joke) => {
  try{
    const response = await adminconnect.deleteJoke(joke);
    if(!response){
        console.log("something went so wrong!");
    }
    fetchJoke();
}catch(err){
    console.log(err);
}
}

const addJoke = async (joke) => {
  try{
    console.log("EDITING...");
    const response = await adminconnect.addJoke(joke);
    if(!response){
        console.log("something went so wrong!");
    }
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
      <Th>settings</Th>
      <Th>No.</Th>
      <Th>Joke</Th>
      <Th>nsfw Flag</Th>
      <Th>likes</Th>
      <Th>dislikes</Th>
      <Th>Author</Th>
    </Tr>
  </Thead>
  <Tbody>
    {Jokes.map((joke,index)=> (
      <Tr>
      <Td><Settings joke={joke} editJoke={editJoke} deleteJoke={deleteJoke}/></Td>
      <Td>{index + 1}</Td>
      <Td>{joke.joke}</Td>
      <Td>{(joke.nsfw).toString()}</Td>
      <Td>{joke.likes}</Td>
      <Td>{joke.dislikes}</Td>
      {joke.author && <Td>{joke.author}</Td>}
      {joke.name && <Td>{joke.name}</Td>}
      </Tr>
    ))}
  </Tbody>
</Table>
  </ChakraProvider>
}