import { Box,HStack, VStack, Link, Image, Text, Icon,Table,Tr,Td, Thead, Divider,ChakraProvider} from '@chakra-ui/react';
import photo from './photo.jpg'
import { BsGithub,BsLinkedin,BsFacebook,BsTwitter,BsMailbox,BsInstagram} from "react-icons/bs";
import {FaReact} from "react-icons/fa"
import {  } from '@chakra-ui/react';
export default function About() {

    return (
        <ChakraProvider>
        <Box align="center" w="100%" h="100%" mt="1em">
        <Box align="center" w="90%" borderRadius="8%" overflow="hidden" >
          <Image mb="1em"src={photo} borderRadius="50%" w="20%" h="auto" alt={"@theonlydola"} />
          <Box >
            <VStack w="100%" spacing="0.5em"> 
            <VStack spacing="-0.5em" > 
                <Text textAlign="center" overflowWrap="break-word" hyphens= "auto" className="font-link" fontSize="160%" color="black" >  Muhammed Adel   </Text>
                <Text textAlign="center" overflowWrap="break-word" hyphens= "auto"  color="grey" >  theonlydola   </Text>
            </VStack>

            <VStack spacing="0em" align="left" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                <Text textAlign="center" overflowWrap="break-word" hyphens= "auto"   color="black" >  It's not much but, it's honest work.   </Text>
                <Text textAlign="center" overflowWrap="break-word" hyphens= "auto"  color="black" >   Also, I'm open to work 😅   </Text>
            </VStack>
            </VStack>
            
            
            <Box w="70%" align="center">
            <Divider orientation="horizontal" h="1px" mt="1em"/>
            
            <Text textAlign="justify" hyphens= "auto" color="grey" > Marra wahed is an arabic classic joke generator for all those out there who are in love with the egyptian dad jokes. Aren't we all? </Text>

            <Divider orientation="horizontal" h="1px" mt="1em"/>
            
            <Text textAlign="left" overflowWrap="break-word" hyphens= "auto" fontSize="160%" color="grey" > Credits </Text>
            {/* <Divider orientation="horizontal" h="1px" mt="0.5em"/> */}
            <Text textAlign="justify" hyphens= "auto" color="grey" > The unknown soldiers feeding the database</Text>
            <VStack align="left ">

            <Text align="left"> Abdelrahman Haissam </Text>
            <Text align="left">Abdullah Ayoub </Text>
            <Text align="left">Omar Ashraf </Text>
            <Text align="left">Youssef Abdelaziz </Text>
            <Text align="left"> Sara Ismail </Text>
            <Text align="left">Marwa AbdelMoez </Text>
            <Text align="left"> Yasmine Adel</Text>
            <Text align="left"> Mohammed Abbas </Text>
       
            </VStack>
            
            <Divider orientation="horizontal" h="1px" mt="1em"/>

            <Text textAlign="left" overflowWrap="break-word" hyphens= "auto" fontSize="160%" color="grey" > Contact me  </Text>
            <VStack mt="1em" align="left"> 
            
            <HStack>
            <Icon as={BsMailbox}   h="auto"/>
            <Link isExternal href="mailto:muhammeddadel@gmail.com"> muhammeddadel@gmail.com</Link>
            </HStack>

            <HStack>
            <Icon as={BsGithub}   h="auto"/>
            <Link isExternal href="https://github.com/theonlydola"> @theonlydola</Link>
            </HStack>

            <HStack>
            <Icon as={BsLinkedin}  h="auto"/>
            <Link isExternal href="https://linkedin.com/in/theonlydola"> @theonlydola</Link>
            </HStack>

            <Divider orientation="horizontal" h="1px" w="100%" mt="0.5em"/>
            <Text textAlign="left" overflowWrap="break-word" hyphens= "auto" fontSize="160%" color="grey" > Follow  </Text>
            <HStack>
            <Icon as={BsFacebook}   h="auto"/>
            <Link isExternal href="https://facebook.com/theonlydola"> @theonlydola</Link>
            </HStack>

            <HStack>
            <Icon as={BsTwitter}   h="auto"/>
            <Link isExternal href="https://twitter.com/theonlydola"> @theonlydola</Link>
            </HStack>

            <HStack>
            <Icon as={BsInstagram}  h="auto"/>
            <Link isExternal href="https://instagram.com/in/theonlydola"> @theonlydola</Link>
            </HStack>

            </VStack>
            <Divider orientation="horizontal" h="1px" mt="1em"/>
            
            </Box>
          </Box>
        </Box>
        </Box>
        </ChakraProvider>
      )
}