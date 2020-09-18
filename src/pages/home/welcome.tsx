import React, {useEffect, useState} from 'react';
import {SimpleGrid, Flex, Text} from '@chakra-ui/core';

import {getAllCase} from '../../api';

interface WorldCaseI {
  active: Number;
  cases: Number;
  deaths: Number;
  recovered: Number;
}

export const Welcome = () => {
  const [state, setState] = useState<WorldCaseI>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCase();

      const obj = {
        active: data.active,
        cases: data.cases,
        deaths: data.deaths,
        recovered: data.recovered,
      };

      setState(obj);
    };
    fetchData();
  }, []);

  return (
    <SimpleGrid pt={4} columns={2} spacingX="30px" spacingY="5px" width="90%" marginLeft="5%">
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Cases </Text>
        <Text> {state?.cases}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Active </Text>
        <Text> {state?.active}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Cases </Text>
        <Text> {state?.cases}</Text>
      </Flex>
      <Flex justify="center" alignItems="center" bg="tomato" height="80px">
        <Text>Deaths </Text>
        <Text> {state?.deaths}</Text>
      </Flex>
    </SimpleGrid>
  );
};
