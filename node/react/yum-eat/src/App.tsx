import CategoryComponent from "./components/CategoryComponent";
import DeliveryComponent from "./components/DeliveryComponent";
import FeaturedComponent from "./components/FeaturedComponent";
import MealComponent from "./components/MealComponent";
import NewsLetterComponent from "./components/NewsLetterComponent";
import TopNevComponent from "./components/TopNevComponent";
import TopPicksComponent from "./components/TopPicksComponent";

export default function App() {
  return (
  <>
    <TopNevComponent />
    <FeaturedComponent />
    <DeliveryComponent />
    <TopPicksComponent />
    <MealComponent />
    <CategoryComponent />
    <NewsLetterComponent />
  </>
  )
}
