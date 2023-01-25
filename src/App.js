import useLayout from "./hooks/use-layout";
import Header from "./components/Header";
import FilterDesktop from "./components/filter/FilterDesktop";
import FilterMobile from "./components/filter/FilterMobile";
import VideosList from "./components/video/VideosList";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/ui/LoadingSpinner";

function App() {

  const { layout } = useLayout();
  const { isLoading } = useSelector(state => state.videos);

  let filterContent = <FilterDesktop />

  if (layout === "mobile") {
    filterContent = <FilterMobile />
  }

  return (
    <div className="root">

      <Header layout={layout} />

      <main>
        {filterContent}

        {(layout === "mobile" && isLoading) && <LoadingSpinner />}

        {!isLoading && <VideosList />}
      </main>

    </div>
  );
}

export default App;
