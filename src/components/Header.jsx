import { Box,HStack, VStack, Link, Image} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import logo from './logoo.png'
import pattern from './food.png'
export default function Header() {
    const history = useNavigate();
    const handlelogoClick = () => {history('/')};
    return (<Box w="100%" bg="#DF2E2E" align="center" backgroundImage = {pattern}>
    <HStack mr="2em" ml="2em" align="center" spacing="24px"> 
    <HStack mt="4em" w="65em"></HStack>
    {/* <Link fontFamily="DG bebo" href="" fontSize="1.5em" color="white">عننا</Link> */}
    <Link fontFamily="DG bebo" fontSize="1.5em" color="white" href="/tellAjoke"> قولنا نكتة</Link>
    </HStack>
    <VStack h="1em" ml="2em"> </VStack> 
    <Image ml="2em" h="auto" w="30%" src={logo} imagealt="مرة واحد" onClick={handlelogoClick}/> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100"><path fill="#fff" fillOpacity="1" d="M0,96L120,96C240,96,480,96,720,85.3C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </Box>
    
    ) ;
  }