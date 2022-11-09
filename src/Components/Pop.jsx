import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,Button
  } from '@chakra-ui/react'
  import { BiDotsVerticalRounded } from "react-icons/bi";
  import { AiOutlineDown } from "react-icons/ai";
const Pop = () => {
  return (
    <Menu>
    <MenuButton as={Button} rightIcon={<BiDotsVerticalRounded />} bg='white'>
    {/* <BiDotsVerticalRounded/> */}
    </MenuButton>
    <MenuList>
      <MenuItem>Edit Category</MenuItem>
      <MenuItem>Manage Access </MenuItem>
      <MenuItem>Delete</MenuItem>
      
    </MenuList>
  </Menu>
  )
}

export default Pop