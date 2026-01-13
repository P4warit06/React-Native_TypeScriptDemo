type ArticleCardProps = {
  image: string;
  title: string;
  date: string;
};

export default function ArticleCard({ image, title, date }: ArticleCardProps) {
  return (
    <div className="w-[420px] flex-shrink-0">
      <img src={image} alt={title} />

      <h3 className="mt-4 text-lg leading-snug hover:underline">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{date}</p>
    </div>
  );
}
