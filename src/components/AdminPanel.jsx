import adminconnect from '../connection/adminconnect';
import { ChakraProvider } from '@chakra-ui/react';
import React, {useState, useEffect} from "react";
import Card from './Card';
import {Box, Stack}  from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import UserJokes from './UserJokes';
import Reports from './Reports';
import Alljokes from './AllJokes'

export default function AdminPanel() {
  const [randomJoke, setrandomJoke] = useState('');
  const [previousJokes, setpreviousJokes] = useState([]);
  
  return <ChakraProvider>
 <Tabs size="md" variant="enclosed">
  <TabList>
    <Tab>Jokes</Tab>
    <Tab>User Jokes</Tab>
    <Tab>Reports</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Alljokes />
    </TabPanel>
    <TabPanel>
      <UserJokes />
    </TabPanel>
    <TabPanel>
      <Reports />
    </TabPanel>
  </TabPanels>
</Tabs>
  </ChakraProvider>
}


