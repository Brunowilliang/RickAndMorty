import { AppProps } from 'next/app';
import ThemeContainer from '../../contexts/theme/ThemeContainer';
import CharacterProvider from '../context/Characters';

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
    <ThemeContainer key={router.route}>
      <CharacterProvider>
        <Component {...pageProps} />
      </CharacterProvider>
    </ThemeContainer>
  )
}

export default MyApp
