import { Container, Box, Heading, Flex } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Box borderRadius="lg" bg="gray" p={3} mb={6} align="center">
        Hi, I&apos;m Austin. I&apos;m a software developer. This is a test
      </Box>

      <Flex direction="column">
        <Heading as="h2" variant="page-title">
          Austin Tao
        </Heading>
        <p>
          Student / Developer
        </p>
      </Flex>
    </>
  );
};

export default HomePage;
