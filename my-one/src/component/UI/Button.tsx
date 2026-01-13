type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="mt-12 px-8 py-3 bg-black text-white text-sm tracking-wide hover:opacity-80 transition">
      {children}
    </button>
  );
}
