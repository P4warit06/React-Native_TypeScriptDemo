type Props = {
  children: React.ReactNode;
};

export default function HorizontalSlider({ children }: Props) {
  return (
    <div className="relative">
      <div className="flex flex-nowrap gap-10 overflow-x-auto pb-4 scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
