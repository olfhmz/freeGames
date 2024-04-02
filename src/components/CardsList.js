import {
  Heading,
  Button,
  Text,
  SimpleGrid,
  Stack,
  Container,
  Image,
  Tag,
  Flex,
  Box,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const CardList = observer((props) => {
  const { cards = [] } = props;
  return (
    <Container maxW="8xl">
      <SimpleGrid columns={[1, null, 2, 4]} spacing={[4, null, 6]}>
        {cards.map((card) => (
          <Stack key={card.id} bgColor="blue.700" p="4" borderRadius="lg">
            <Image src={card.thumbnail} borderRadius="lg" />
            <Heading as="h3" size="md">
              {card.title}
            </Heading>
            <Flex justifyContent="space-between">
              <Tag bgColor="blue.600" color="white">
                {card.genre}
              </Tag>
              <Box>
                <Text>{card.publisher}</Text>
                <Text>release: {card.release_date}</Text>
              </Box>
            </Flex>
            <Button as="a" bgColor="blue.300" color="blue.900">
              Read more
            </Button>
            <Text>{card.platform}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
});

export default CardList;
