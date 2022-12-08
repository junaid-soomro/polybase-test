import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Alert,
  AlertIcon,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";

import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link as RouterLinkSuper } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const RouterLink = chakra(RouterLinkSuper);

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");
  const [isPasswordMismatched, setIsPasswordMismatched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== retypedPassword) {
      return setIsPasswordMismatched(true);
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/";
    }, 5000);

    setIsPasswordMismatched(false);
  };

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <>
      {isLoading && (
        <Alert status="success">
          <AlertIcon />
          Registered Successfully!
        </Alert>
      )}
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        backgroundColor="gray.200"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          flexDir="column"
          mb="2"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar bg="teal.500" />
          <Heading color="teal.400">Signup</Heading>
          <Box minW={{ base: "60%", md: "400px" }}>
            <form onSubmit={handleSubmit}>
              <Stack
                flexDir="column"
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="email address"
                    />
                  </InputGroup>
                </FormControl>
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="None"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl isRequired isInvalid={isPasswordMismatched}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      children={<CFaLock color="gray.300" />}
                    />
                    <Input
                      onChange={(e) => setRetypedPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="None"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                        {showPassword ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  {isPasswordMismatched && (
                    <FormErrorMessage>
                      Password does not match.
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Button
                  isLoading={isLoading}
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="teal"
                  width="full"
                >
                  Signup
                </Button>
              </Stack>
            </form>
          </Box>
        </Stack>
        <Box>
          <RouterLink color="teal.500" to={`/`}>
            Go back to Login?
          </RouterLink>
        </Box>
      </Flex>
    </>
  );
}

export default Signup;
