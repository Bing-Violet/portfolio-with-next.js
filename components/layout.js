import { Box, Flex, Spinner, useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Suspense, useEffect, useState } from "react";
// import Goaty from "./threeObj";
import Footer from "./footer";
import Header from "./header";
import Loader from "./threeDComponents/loader";
import Goaty from "./threeObj";

export default function Layout({ children, router }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 },
  };
  const [url, setUrl] = useState("");
  const [path, setPath] = useState("");
  useEffect(() => {
    if (window !== "undefined") {
      setUrl(document.URL);
      console.log(router.state.asPath,router.state.asPath.split("/"))
      setPath(router.state.asPath==="/" ? "" : splitPath(router.state.asPath))
    }
  }, [router.state]);

  const initialLetterToApperCase = (string) => {
    return string.replace(/\b[a-z]/g, char => char.toUpperCase());
  }
  
  const splitPath = (path) => {
    const separator = "-"
    return  path.split("/").map((p, index , array) => {
      if(index!==0) {
        return initialLetterToApperCase(p)
      } 
    }).join(separator)
  }
  
  // const ThreeDObj = dynamic(() => import("./threeObj"), {
  //   // ssr: false,
  //   // suspense:true,
  //   loading: () => <Loader />
  // })
  const bg = useColorModeValue(
    "linear-gradient(to bottom, #6cd8e8, #001517)",
    "linear-gradient(to bottom, #232323 80%, #6cd8e8)"
  );
  return (
    <Flex
      bg={bg}
      minW="100vw"
      minH="100vh"
      flexDirection={"column"}
      alignItems="center"
    >
      <Head>
        <title>{`Nobuhiro-Portfolio${path}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nobuhiro - Portfolio" />
        <meta property="og:site_name" content="Nobuhiro - Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="/map.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="nobuhiro" />
        <meta name="author" content="Nobuhiro Funahashi" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <meta property="og:site_name" content="Nobuhiro - Portfolio" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Box
          w={{ base: "100%", md: "600px" }}
          h={{ base: "200px", md: "300px" }}
        >
      <Suspense fallback={<Loader/>}>
          <Goaty />
      </Suspense>
      </Box>
      <AnimatePresence
        exitBeforeEnter
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <motion.div
          key={router.route}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.4, type: "easeInOut" }}
          style={{ position: "relative" }}
        >
          <Box maxW="600px" minH="50vh">
            {children}
          </Box>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </Flex>
  );
}
