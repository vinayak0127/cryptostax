import React from 'react';
import { Text } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Table, Thead, Tr, Th, Flex } from '@chakra-ui/react';
const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <>
      {/* <Box>
          <Image src={image} alt="crypto" />
          <Text fontSize="lg">{name}</Text>
          <Text>{symbol}</Text>
        </Box>
        <Box>
          <Text fontSize="sm">${price}</Text>
          <Text fontSize="sm">${volume.toLocaleString()}</Text>
          {priceChange < 0 ? (
            <Text fontSize="sm" color="red">
              {priceChange.toFixed(2)}%
            </Text>
          ) : (
            <Text fontSize="sm" color="green">
              {priceChange.toFixed(2)}%
            </Text>
          )}
          <Text fontSize="sm">Mkt Cap: ${marketcap.toLocaleString()}</Text>
        </Box> */}
      <Flex>
        <Image
          borderRadius="full"
          boxSize="100px"
          src={image}
          alt="Segun Adebayo"
          p={3}
        />
        <Text p={4} fontWeight="bold">
          {name}
        </Text>
        {/* <Text p={4} fontWeight="bold">
          {symbol}
        </Text> */}
        <Text p={4} color="orange" fontWeight="bold" fontSize="sm">
          ${price}
        </Text>
      </Flex>

      <Table size="xl" variant="simple">
        <Thead>
          <Tr>
            <Th>
              <Text fontSize="sm">${volume.toLocaleString()}</Text>
            </Th>
            <Th>
              {priceChange < 0 ? (
                <Text fontSize="sm" color="red">
                  {priceChange.toFixed(2)}%
                </Text>
              ) : (
                <Text fontSize="sm" color="green">
                  {priceChange.toFixed(2)}%
                </Text>
              )}
            </Th>
            <Th>
              <Text fontSize="sm" color="gray">
                Cap: ${marketcap.toLocaleString()}
              </Text>
            </Th>
          </Tr>
        </Thead>
      </Table>
    </>
  );
};

export default Coin;
