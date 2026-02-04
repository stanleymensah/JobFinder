import SearchBar from "../components/SearchBar";
import JobSection from "../sub-pages/JobSection";

export default function Home() {
  
  return (
    <div className="home">
      <SearchBar />

      <JobSection />
    </div>
  );
}
