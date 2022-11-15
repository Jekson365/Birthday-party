import { Block1 } from "./blocks/Block1";
import { Header } from "./blocks/Header";
import { Team } from "./blocks/Team";
import { ToDo } from "./blocks/ToDo";
import { Gallery } from "./blocks/Gallery";
import { Popup } from "./blocks/Popup";
import { Review } from "./blocks/Review";
import { Parents } from "./blocks/Parents";
import { Raiting } from "./blocks/Raiting";
import { Footer } from "./blocks/Footer";

function App() {
  return (
    <>
      <Header/>
      <Block1/>
      <ToDo/>
      <Team/>
      <Gallery/>
      <Popup/>
      <Review/>
      <Parents/>
      <Raiting/>
      <Footer/>
    </>
  );
}

export default App;
