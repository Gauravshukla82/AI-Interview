import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Flex
  } from '@chakra-ui/react'
  import Cookies from "js-cookie";
import axios from 'axios';
const Mid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data,setData]=useState([])
const token=Cookies.get("token");
console.log(token)

const obj={
  token
}
useEffect(()=>{
  axios.get("https://giddy-shirt-eel.cyclic.app/interview/allfeedbacks",{
    headers:{
      "Content-Type":"application/json",
      token
    }
  }).then((res)=>{console.log(res.data);setData(res.data)}).catch(e=>console.log(e))
},[])

console.log("data",data)

    return (
      <Flex justify='space-between' p={2} gap={5}>
<Box >
    <Button onClick={onOpen}>History log</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Previous Feedbacks</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {data.map((item,i)=>{
              return <div key={i} className={"bg-[#999] m-3  rounded-md p-2"}>{item.feedback}</div>
            })}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
</Box>
<Button color='#black' w={40}>Logout</Button>
      </Flex>
    )
}

export default Mid
