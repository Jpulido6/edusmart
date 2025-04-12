interface LoadingProps {
  size?: Size;
}
type Size = "sm" | "md" | "lg";

export default function Loading({size}: LoadingProps) {
  switch (size) {
    case "sm":
      return (
        <div className="flex items-center justify-center gap-4 h-40">
          <div className="w-8 h-8 border-4 border-solid  rounded-full border-t-primary animate-spin"></div>
        </div>
      );
    case "md":
      return (
        <div className="flex items-center justify-center gap-4 h-64">
          <div className="w-16 h-16 border-4 border-solid  rounded-full border-t-primary animate-spin"></div>
        </div>
      );
    case "lg":
      return (
        <div className="flex items-center justify-center gap-4 h-80">
          <div className="w-24 h-24 border-4 border-solid  rounded-full border-t-primary animate-spin"></div>
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center gap-4 min-h-screen">
          <div className="w-20 h-20 border-4 border-solid  rounded-full border-t-primary animate-spin"></div>
        </div>
      );
  }

}
