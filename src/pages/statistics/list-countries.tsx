import React from 'react';
import {SimpleGrid, Flex, Text} from '@chakra-ui/core';

interface ListItem {
  Country: String;
  Active: Number;
  Cases: Number;
  Deaths: Number;
}

export const ListCountries: React.FC<ListItem> = ({Country, Active, Cases, Deaths}) => {
  return (
    <SimpleGrid columns={2} spacingX="30px" spacingY="5px" width="90%" marginLeft="5%">
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Country</Text>
        <Text>{Country}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Active</Text>
        <Text>{Active}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Cases</Text>
        <Text>{Cases}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Deaths</Text>
        <Text>{Deaths}</Text>
      </Flex>
    </SimpleGrid>
  );
};
