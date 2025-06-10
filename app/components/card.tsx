export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-fancy-brown mb-10 transform -rotate-2 hover:rotate-0 transition-all duration-300">
      {children}
    </div>
  );
};
