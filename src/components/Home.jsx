import { ChakraProvider } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, {useState} from "react";
import { CgDanger } from "react-icons/cg";
import { ImQuotesRight, ImQuotesLeft } from "react-icons/im";
import { Box, Text,Button,Checkbox, Icon, VStack} from '@chakra-ui/react';
export default function Home (props){
     const history = useNavigate();
     const [nsfw, setnsfw] = useState(false);
     const handleClick = () => {
        props.updateflag(nsfw); 
        history('/joke');
        };
    return <ChakraProvider>
    <Box w="100%" bg="white.200" align="center">
      <Box w="50%" align="center">
      <Icon as={CgDanger} w="6em" h="auto" color="#DF2E2E"/>
      <Icon as={ImQuotesRight} ml = "85%"/>
      <Box align="center" w="100%">
      <Text textAlign="center" overflowWrap="break-word" hyphens= "auto" fontFamily="DG bebo" fontSize="100%" color="black" > كل النكت الموجودة على الموقع لا تعكس أي توجهات و غير مقصود بيها أي إساءة لأى طوائف أو أصحاب مهن و الهدف الوحيد هو تحقيق الضحك </Text>
      </Box>
      <Icon as={ImQuotesLeft} mr = "85%"/>
      <VStack spacing="3"> 
      <Button w="10em" h="4em" boxShadow="5px 5px #F6D167" onClick={handleClick} backgroundColor="#FFF7AE" overflowWrap="break-word" hyphens= "auto" fontFamily="DG bebo" fontSize="120%" color="black" > قولي نكتة</Button>
      <Checkbox fontFamily="DG bebo" fontSize="120%" color="black" onChange={(e) => setnsfw(e.target.checked)}>Nsfw</Checkbox>
      </VStack>
      </Box>
    </Box>
    </ChakraProvider>
}