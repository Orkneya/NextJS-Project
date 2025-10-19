import ActiveLabel from "./components/active-label";
import NotActiveLabel from "./components/not-active-label";

export default function Home() {
  return (
    <main>
      <h1> Page Home </h1>

      <ActiveLabel>ActiveLabel</ActiveLabel>

      <NotActiveLabel>NotActiveLabel</NotActiveLabel>
    </main>
  );
}
