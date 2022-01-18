import { Text, Button, Flex, Center } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react"

import { SignInScreen } from "./SignInScreen";

import { firebase } from "firebase/compat/app";
import { firebaseConfig } from "../config/config"
import 'firebase/compat/auth';

const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: "/",
  signInOptions: [
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
}

firebase.initializeApp(firebaseConfig);

export const Login = ({ loading, isSignedIn, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logout = () => {
    firebase.auth().signOut();
  }

  return (
    <div>
      {loading ?
        <p>ロード中...</p> :
        <>
          {isSignedIn ?
            <>
              <Flex>
                <Center>
                  <Text>{user !== null && user.displayName}</Text>
                  <Button ml="3" colorScheme="blue" onClick={logout}>ログアウト</Button>
                </Center>
              </Flex>
            </>
            :
            <>
              <Button colorScheme="blue" onClick={onOpen}>ログイン</Button>
              <SignInScreen isOpen={isOpen} onClose={onClose} uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </>
          }
        </>
      }
    </div>
  );
}