type Props = {
  children: React.ReactNode;
};

export default function HorizontalSlider({ children }: Props) {
  return (
    <div className="flex gap-10 overflow-x-auto pb-4 scrollbar-hide">
      {children}
    </div>
  );
}
