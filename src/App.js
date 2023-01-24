import useLayout from "./hooks/use-layout";
import Header from "./components/Header";
import FilterDesktop from "./components/filter/FilterDesktop";
import FilterMobile from "./components/filter/FilterMobile";
import VideosList from "./components/video/VideosList";

function App() {

  const { layout } = useLayout();

  let filterContent = <FilterDesktop />

  if (layout === "mobile") {
    filterContent = <FilterMobile />
  }

  return (
    <div className="root">

      <Header layout={layout} />

      <main>
        {filterContent}
        <VideosList />
      </main>

    </div>
  );
}

export default App;
