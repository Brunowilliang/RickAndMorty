import { AppProps } from 'next/app';
import ThemeContainer from '../../contexts/theme/ThemeContainer';
import {motion} from 'framer-motion';

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
      <ThemeContainer>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
          pageInitial: {
            opacity: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.8
            }
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              ease: "easeInOut",
              duration: 0.8
            }
          },
          pageExit: {
            opacity: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.8
            }
          },
        }}>
          <Component {...pageProps} />
        </motion.div>
      </ThemeContainer>
  )
}

export default MyApp


