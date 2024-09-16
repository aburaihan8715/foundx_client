export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
      {children}
    </div>
  );
}
