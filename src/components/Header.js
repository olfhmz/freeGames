import { Box, Flex, Image, Container, Button } from "@chakra-ui/react";
import Logo from "./logo512.png";

const Header = () => {
  return (
    <Box as="header" py={2} bgColor="gray.400">
      <Container maxW="container.lg">
        <Flex alignItems="center" justifyContent="space-between">
          <Image src={Logo} alt="Logo" boxSize="50" objectFit="cover" />
          <Button borderRadius={50}>Войти</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
