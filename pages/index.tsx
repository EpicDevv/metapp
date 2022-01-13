import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Init from "../components/Init";
import LoginOut from '../components/LoginOut'
import Header from '../components/Header'
import Messages from '../components/Messages'

export default function Home() {
  const {
    isAuthenticated,
    isAuthenticating,
   
    logout,
  } = useMoralis();


  

  if (isAuthenticating) return <Init />

  if (!isAuthenticated) return <Login />;
  

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
      <Head>
        <title>meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <Messages />
        </div> 
     



    </div>
  );
}
