import React, {useCallback} from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Flex,
} from '@chakra-ui/core';

import {useTheme} from '../theme/costom-theme-provider';
import {colorType} from '../theme/colors';

export const DrawerCostom = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  const {colors, setTheme} = useTheme();

  const onClick = useCallback(
    (color: colorType) => {
      setTheme(color);
    },
    [setTheme],
  );

  return (
    <>
      <Button variantColor="teal" onClick={onOpen}>
        menu
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader background={colors.background}>Search for a Country</DrawerHeader>
          <DrawerBody background={colors.background}>
            <Input placeholder="Enter any Country..." />
          </DrawerBody>
          <DrawerFooter background={colors.background} justifyContent="center">
            <Flex direction="column">
              <Button margin={2} onClick={() => onClick('Lovely_Theme')}>
                lovely theme
              </Button>
              <Button margin={2} onClick={() => onClick('Dark_Theme')}>
                dark theme
              </Button>
              <Button margin={2} onClick={() => onClick('Sea_Theme')}>
                sea theme
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
