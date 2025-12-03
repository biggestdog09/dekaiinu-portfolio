import SectionTitle from "./ui/SectionTitle";
import TopicCard from "./cards/TopicCard";

const TOPICS_DATA = [
  {
    id: 1,
    date: "2025.11.28",
    title: "New Pixel Art Series",
    description: "新しいピクセルアートシリーズ公開しました",
    gradient: "from-purple-400 to-blue-500"
  },
  {
    id: 2,
    date: "2025.11.20",
    title: "Web Project Launch",
    description: "クライアントワークのサイトがリリース",
    gradient: "from-blue-400 to-red-400"
  },
  {
    id: 3,
    date: "2025.11.15",
    title: "Illustration Update",
    description: "ギャラリーに新しいイラストを追加",
    gradient: "from-red-400 to-black"
  }
];

export default function SectionTopics() {
  return (
    <section className="w-full max-w-[1152px] mx-auto py-20 relative z-10">
      <SectionTitle title="New Topics" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TOPICS_DATA.map((topic) => (
          <TopicCard
            key={topic.id}
            date={topic.date}
            title={topic.title}
            description={topic.description}
            gradient={topic.gradient}
          />
        ))}
      </div>
    </section>
  );
}
