import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import KanbanBoard from './KanBan';

const App = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg="gray.50"
      p={4}
    >
      <Box
        w="100%"
        maxW="1200px"
        bg="white"
        p={8}
        rounded="md"
        shadow="lg"
      >
        <KanbanBoard />
      </Box>
    </Flex>
  );
};

export default App;
