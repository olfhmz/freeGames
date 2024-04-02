import fetchGamesList from "./fetch";
// import Header from "./components/Header";
import CardList from "./components/CardsList";
import Filter from "./components/Filter";
import gameFilter from "./store/gameFilter";
import { observer } from "mobx-react-lite";
import { Box, Container, Heading } from "@chakra-ui/react";

fetchGamesList();

const App = observer(() => {
  return (
    <Box bgColor="blue.900" textColor="white">
      {/* <Header /> */}
      <Filter />
      <CardList cards={gameFilter.gamesFiltred} />
    </Box>
  );
});

export default App;
