import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  HStack,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {/* backdropFilter/Blur don't work in firefox, https://chakra-ui.com/docs/styled-system/features/style-props#filter */}
      <Box
        position="fixed"
        w="full"
        bg={useColorModeValue(
          "rgba(237, 242, 247, 0.5)",
          "rgba(23, 25, 35, 0.5)"
        )}
        px={5}
        backdropFilter="auto"
        backdropBlur="5px"
      >
        <Flex h={16} align="center">
          <Container maxW="container.md" display="flex" flexDirection="row">
            <Logo />

            <HStack spacing={8} display={{ base: "none", md: "inline-flex" }}>
              <Link                  
                href="https://drive.google.com/file/d/1bZzt6EfhcP-LKQLyZHHIl1rswb78gGmv/view?usp=sharing"
                target="_blank"
              >
                Resume
              </Link>

              <NextLink href="/blog" passHref>
                <Link>
                  Blog
                </Link>
              </NextLink>

              <Link 
                display="flex" 
                alignItems="center" 
                gap="5px"
                href="https://github.com/buttonmashing/taoaustin-webpage"
                target="_blank"
              >
                <FaGithub />
                Source
              </Link>

            </HStack>

            {/* displays the hamburger menu when viewport is small enough */}
            <Flex flex={1}>
              <Box
                display="flex"
                mr="10px"
                ml="auto"
                gap="5px"
              >
                <IconButton 
                  aria-label="Theme toggle"
                  onClick={toggleColorMode}
                  colorScheme={useColorModeValue('blue', 'yellow')}
                  icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                >
                </IconButton>
                <Menu isLazy>
                  <MenuButton
                    as={IconButton}
                    icon={<HamburgerIcon />}
                    aria-label="Options"
                    variant="outline"
                    display={{ base: "inline-flex", md: "none" }}
                  />
                  <MenuList>
                    <MenuItem 
                      as={Link}                      
                      href="https://drive.google.com/file/d/1bZzt6EfhcP-LKQLyZHHIl1rswb78gGmv/view?usp=sharing"
                      target="_blank"
                    >
                      Resume
                    </MenuItem>

                    <NextLink href="/blog" passHref>
                        <MenuItem as={Link}>Blog</MenuItem>
                    </NextLink>
                    
                    <MenuItem
                      as={Link}
                      href="https://github.com/buttonmashing/taoaustin-webpage"
                      target="_blank"
                    >
                      Source
                    </MenuItem>

                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Container>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
