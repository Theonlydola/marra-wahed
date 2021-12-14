import adminconnect from '../connection/adminconnect';
import { ChakraProvider , Text } from '@chakra-ui/react';
import React, {useState, useEffect} from "react";
import Card from './Card';
import {Box, Stack}  from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Reports() {
  const [randomJoke, setrandomJoke] = useState('');
  const [previousJokes, setpreviousJokes] = useState([]);

  return <ChakraProvider>
  <Text> Reports </Text>
  </ChakraProvider>
}


