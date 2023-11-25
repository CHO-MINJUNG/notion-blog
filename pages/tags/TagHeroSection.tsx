// components/tags/TagHeroSection.tsx
interface TagHeroSectionProps {
  title?: string;
}

const TagHeroSection = ({ title = "All Tags" }: TagHeroSectionProps) => {
  return (
    <section>
      <div className="w-4/5 mx-auto max-w-5xl flex flex-col gap-4 py-12">
        <p className="font-medium text-gray-500 text-2xl leading-normal">
          Tag Collection
        </p>
        <h2 className="font-bold text-7xl">{title}</h2>
      </div>
    </section>
  );
};

export default TagHeroSection;