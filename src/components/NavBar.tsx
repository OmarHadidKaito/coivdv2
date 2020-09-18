import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Heading, Flex, Text} from '@chakra-ui/core';
import {Link} from 'react-router-dom';
import {DrawerCostom} from './Drawer';

import {useTheme} from '../theme/costom-theme-provider';

const MenuItems: React.FC = ({children}) => (
  <Text mt={{base: 4, md: 0}} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
export const NavBar: React.FC = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const {colors} = useTheme();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colors.background}
      color="white"
      {...props}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
          Chakra UI
        </Heading>
      </Flex>

      <Box display={{base: 'block', md: 'none'}} onClick={handleToggle}>
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Flex
        display={{sm: show ? 'block' : 'none', md: 'flex'}}
        width={{sm: 'full', md: 'auto'}}
        alignItems="center"
        justify="flex-end"
        flexGrow={1}>
        <MenuItems>
          <Link to="/">Home</Link>
        </MenuItems>
        <MenuItems>
          <Link to="/ListCountry">Statistics</Link>
        </MenuItems>
        <DrawerCostom />
      </Flex>
    </Flex>
  );
};
