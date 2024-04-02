import {
  Select,
  FormControl,
  FormLabel,
  Flex,
  Container,
  RadioGroup,
  Radio,
  Stack,
  Button,
} from "@chakra-ui/react";
import gameFilter from "../store/gameFilter";

function Filter() {
  return (
    <Container maxW="8xl" mb="10" pt="10">
      <FormControl mt="8">
        <FormLabel>Filter</FormLabel>
        <Flex alignItems="center">
          <Select
            placeholder="Select platform"
            maxW="md"
            mr="8"
            color="blue.900"
            bg
            onChange={(event) => {
              gameFilter.setPlatformSelect(event.target.value);
            }}
          >
            <option value="PC (Windows)">PC (Windows)</option>
            <option value="Web Browser">Web Browser</option>
          </Select>
          <Select
            placeholder="Select genre"
            maxW="md"
            color="blue.900"
            bg
            onChange={(event) => {
              gameFilter.setGenreSelect(event.target.value);
            }}
          >
            <option value="MMO">MMO</option>
            <option value="MMORPG">MMORPG</option>
          </Select>
        </Flex>
      </FormControl>
      <FormControl
        my="5"
        onChange={(event) => {
          gameFilter.setSortSelect(event.target.value);
        }}
      >
        <FormLabel>Sort by</FormLabel>
        <RadioGroup name="sort" defaultValue="popular">
          <Stack spacing={4} direction="row">
            <Radio value="popular">popular</Radio>
            <Radio value="release">release date</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>
      <Button
        bgColor="blue.600"
        color
        onClick={() => {
          // gameFilter.filterGameList();
          gameFilter.sortGameList(gameFilter.sortSelect);
        }}
      >
        Search
      </Button>
    </Container>
  );
}

export default Filter;
