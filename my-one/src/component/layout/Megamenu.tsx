import { Link } from "react-router-dom";

type MegaItem = {
  title: string;
  description?: string;
  image: string;
  href: string;
};

type Props = {
  items: MegaItem[];
};

export default function MegaMenu({ items }: Props) {
  return (
    <div className="absolute left-0 top-full w-full bg-white text-black opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <div className="mx-auto max-w-360 px-16 py-12 grid grid-cols-4 gap-10">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="group flex flex-col gap-4"
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div>
              <h4 className="text-sm tracking-widest uppercase">
                {item.title}
              </h4>
              {item.description && (
                <p className="mt-1 text-xs text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
