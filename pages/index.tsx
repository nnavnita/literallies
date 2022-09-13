
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Layout from '../components/Layout';
import theme from '../theme';

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Layout>
        TODO: Homepage
      </Layout>
    </ChakraProvider>
  )
}
