import React, { useEffect, useState } from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { useAuth } from '../../hooks/useAuth';
import axios from 'axios';
import { Container, Box } from '@chakra-ui/react';
import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import Coin from './Coin';
import { GridItem } from '@chakra-ui/react';
const Dashboard = () => {
  const { user } = useAuth();
  const [coins, setCoints] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoints(res.data);
      })
      .catch(error => alert('Error loading data'));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <GridItem>
        <Box
          p="4"
          colStart={[1, null, null, 2, null, null]}
          colSpan={[3, null, null, 1, null, null]}
        >
          <Heading as="h1" mb={6}>
            <Text>CryptoStax 📈 </Text>
          </Heading>
          <Text fontSize="lg">Welcome🤝, {user.email} nice to meet you 👌</Text>
          <Container>
            <Box mt={10}>
              <FormControl id="Curr">
                <FormLabel>
                  <SearchIcon />
                </FormLabel>
                <Input type="text" onChange={handleChange} />
                <FormHelperText>
                  Here at CryptoStax you can search 📈 trends of different
                  currencies 👌
                </FormHelperText>
              </FormControl>
            </Box>
          </Container>
        </Box>
      </GridItem>
      <GridItem>
        <Box p="4" >
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
              />
            );
          })}
        </Box>
      </GridItem>
    </>
  );
};

export default Dashboard;
