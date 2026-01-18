type ArticleCardProps = {
  image: string;
  category: string;
  title: string;
  date: string;
};

export default function ArticleCard({
  image,
  category,
  title,
  date,
}: ArticleCardProps) {
  return (
    <div className="w-[600px] flex-shrink-0">
      <img src={image} alt={title} />
      <div className="space-y-2">
        <span
          className="inline-block bg-[#842525]
 text-white text-xs font-medium px-2.5  py-1.5 mt-5"
        >
          {category}
        </span>
      </div>

      <h3 className="mt-4 text-lg leading-snug hover:underline text-[#842525]">
        {title}
      </h3>

      <h5 className="mt-2 text-sm text-[#842525]">{date}</h5>
    </div>
  );
}
