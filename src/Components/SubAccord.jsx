import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon
  } from '@chakra-ui/react'
import { useState } from 'react'
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Flex, Spacer,Box } from '@chakra-ui/react'
import Pop from './Pop';
const SubAccord = ({main,category,subCategory,arr1}) => {

    console.log('bello')
    console.log(main[arr1])
    const [ans,setAns]=useState(main[arr1])
  return (

<Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        {arr1}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
        {
            ans?.map((element)=>{
                return ( <Box style={{border:'1px solid black',marginTop:'5px',borderRadius:"10px"}}><Flex>{element}<Spacer/><Pop/></Flex></Box>)
            })
        }
     
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  )
}

export default SubAccord