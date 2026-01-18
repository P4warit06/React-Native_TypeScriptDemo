type EventCardProps = {
  image: string;
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
  const isValidImage =
    image &&
    image.trim() !== "" &&
    image !== "undefined" &&
    !image.includes("undefined");

  return (
    <div className="group">
      {isValidImage ? (
        <img
          src={image}
          alt={title}
          className="(w-full aspect-[3/4] object-cover "
          loading="lazy"
          onError={(e) => {
            console.error(`Failed to load image: ${image}`);
            e.currentTarget.style.display = "none";
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const placeholder = document.createElement("div");
              placeholder.className =
                "mb-4 w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center";
              placeholder.innerHTML = `<span class="text-gray-500 font-noto px-4 text-center">${title}</span>`;
              parent.insertBefore(placeholder, parent.firstChild);
            }
          }}
        />
      ) : (
        <div className="mb-4 w-full aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 font-noto px-4 text-center">
            {title}
          </span>
        </div>
      )}

      <div className="space-y-2">
        <span
          className="inline-block bg-[rgb(22,44,81)]
 text-white text-xs font-medium px-2.5  py-1.5 my-3.5"
        >
          {category}
        </span>

        <h3 className="text-[25px] text-[#162C51]font-noto leading-tight group-hover:underline">
          {title}
        </h3>

        <div className="space-y-1 pt-1">
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span>📅</span> {date}
          </p>
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span>📍</span> {location}
          </p>
        </div>
      </div>
    </div>
  );
}
