import React, {useState, useEffect, useCallback} from 'react';
import {Select, Input} from '@chakra-ui/core';

import {ListCountries} from './list-countries';
import {getAllCountries} from '../../api';

interface CountryInfoI {
  name: String;
  active: Number;
  cases: Number;
  deaths: Number;
}

export const SearchBar = () => {
  const [country, setCountry] = useState<Array<CountryInfoI>>([]);
  const [search, setSearch] = useState<String>('');
  const [select, setSelect] = useState<string>('country');

  useEffect(() => {
    const fetcData = async () => {
      const data = await getAllCountries();
      const filteredData = data.map((value, index) => {
        const obj = {
          'name': value.country.toLowerCase(),
          'active': value.active,
          'cases': value.cases,
          'recovered': value.recovered,
          'deaths': value.deaths,
        };
        return obj;
      });
      setCountry(filteredData);
    };
    fetcData();
  }, []);

  const setSelectValue = useCallback((event: any) => {
    setSelect(event.target.value);
  }, []);

  return (
    <>
      <Input placeholder="default size" size="md" mb="10px" width="90%" marginLeft="5%" />

      <Select
        value={select}
        onChange={setSelectValue}
        backgroundColor="#319795"
        borderColor="tomato"
        color="white"
        width="90%"
        marginLeft="5%"
        mb="10px">
        <option style={{backgroundColor: '#319795'}} value="country">
          country
        </option>
        <option style={{backgroundColor: '#319795'}} value="active">
          active
        </option>
        <option style={{backgroundColor: '#319795'}} value="cases">
          cases
        </option>
        <option style={{backgroundColor: '#319795'}} value="recovered">
          recovered
        </option>
        <option style={{backgroundColor: '#319795'}} value="deaths">
          deaths
        </option>
      </Select>

      <ListCountries Country="bla bla" Active={20} Deaths={200} Cases={12} />
    </>
  );
};
