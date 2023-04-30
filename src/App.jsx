import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="wildevp"
        name="Wilmar Garcia"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="carmenansio"
        name="Cosmic Red 🔥"
      />
    </section>
  );
}
