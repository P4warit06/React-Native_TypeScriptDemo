import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  fullWidthForTable?: boolean; 
};

export default function Container({
  children,
  className = "",
  fullWidthForTable = false,
}: ContainerProps) {
  if (fullWidthForTable) {
    return (
      <div className={`w-full overflow-x-auto ${className}`}>
        <div className="min-w-max px-3">{children}</div>
      </div>
    );
  }

  return (
    <div
      className={`
        w-full 
        px-3
        mx-auto
        sm:max-w-[540px]
        md:max-w-[720px]
        lg:max-w-[960px]
        xl:max-w-[1400px]
        2xl:max-w-[1525px]
        min-[1601px]:max-w-none
        min-[1601px]:mx-[186px]
        min-[1601px]:px-[15px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}