type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h2 className="font-extrabold  py-10 flex text-[40px]  font-noto">
        {title}
      </h2>
    </div>
  );
}
