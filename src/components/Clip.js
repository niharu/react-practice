import { CopyIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Container, Center, Flex, IconButton, Spacer, Text } from "@chakra-ui/react";

export const Clip = ({ clip }) => {
  const copy = () => {
    console.log("copy");
    navigator.clipboard.writeText(clip.command);
  }

  return (
    <>
      <Container p={{ base: "4", md: "6" }} maxWidth="3xl">
        <Box mt="1" pb="1.5" border='2px' borderColor="white" borderBottomColor='gray.200'>
          <Flex>
            <Box>
              <IconButton
                icon={<CopyIcon />}
                onClick={copy}
                size="sm"
              />
            </Box>
            <Text
              ml="3"
              fontSize="md"
            >
              {clip.command}
            </Text>
            <Spacer />
            <IconButton
            size="sm"
            icon={<EditIcon />}
            backgroundColor="teal.100"
            />
          </Flex>
        </Box>
        {/* <Box mt="1" ml="12" border="2px" borderRadius="md" borderColor="gray.200"> */}
        <Box mt="1" ml="10" >
          <Text ml="1.5" fontSize="md">{clip.description}</Text>
        </Box>
      </Container>
    </>
  );
};