type EventCardProps = {
  image: string  | null;
  category: string;
  title: string;
  date: string;
  location: string;
};

export default function EventCard({
  image,
  category,
  title,
  date,
  location,
}: EventCardProps) {
  return (
    <div className="group">
      <img src={image} alt={title} className="mb-4 w-full object-cover" />

      <span className="inline-block mb-2 bg-black text-white text-xs px-2 py-1">
        {category}
      </span>

      <h3 className="text-lg leading-snug group-hover:underline">{title}</h3>

      <p className="mt-2 text-sm text-gray-600">{date}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </div>
  );
}
