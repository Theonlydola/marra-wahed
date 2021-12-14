import {IconButton,Input, Textarea, useDisclosure,Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,} from "@chakra-ui/react"
import {AiOutlineSetting, AiOutlineDelete, AiOutlineEdit} from "react-icons/ai"
import { useState, useEffect} from "react";
import UserJokes from "./UserJokes"
    export default function Settings(props){
        const { isOpen, onOpen, onClose } = useDisclosure();
        const [joke, setjoke] = useState(props.joke);
        
        const setJoke = (event) => {
        // var {name,value} = event.target;
        setjoke(prevstate=>{
            return {
                ...prevstate,
                [event.target.name]: event.target.value
            }
        }) 
        }

        const handleSave = () => {
            props.editJoke(joke);
            alert("Updated Successfully!")
            onClose();
          }

        const handleDelete = () => {
            props.deleteJoke(joke);
            alert("Deleted Successfully!")
            onClose();
        }

        useEffect(() => {
            setjoke(props.joke);
            console.log("SETTING" + props.joke);
          }, []);

    return ( <>
        <IconButton title="بص دي" icon={<AiOutlineSetting />} borderRadius="full"  bg="#DF2E2E" color="white" outline="none" onClick={onOpen}/>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
        <ModalHeader>Details</ModalHeader>
         <ModalCloseButton />
        <ModalBody alignContent="center">
        <Textarea name="joke" value={joke.joke} onChange={(e) => setJoke(e)}/>
        <Input name="nsfw" value={joke.nsfw} onChange={(e) => setJoke(e)}/>
        <IconButton icon={<AiOutlineEdit />} onClick={handleSave}></IconButton>
        <IconButton icon={<AiOutlineDelete />} onClick={handleDelete}></IconButton>
        </ModalBody>
        </ModalContent>
        </Modal>
        </>
    )
}