import React from 'react';
import {ChakraProvider, Box, VStack, Grid, theme,} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Form } from "./Form";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Form />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
