// https://vitejs.dev/guide/backend-integration.html
import 'vite/modulepreload-polyfill';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { Provider as JotaiProvider } from 'jotai';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import theme from '@/theme';
import ResetCSS from '@/theme/ResetCSS';
import App from '@/app/page';

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <JotaiProvider>
      <chakra-scope>
        <ChakraProvider
          theme={theme}
          disableGlobalStyle={true}
          resetCSS={false}
        >
          <ResetCSS />
          <App />
        </ChakraProvider>
      </chakra-scope>
    </JotaiProvider>
  </StrictMode>
);
