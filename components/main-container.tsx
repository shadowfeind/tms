export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto mt-4  p-4 md:p-8 md:mt-10 bg-white rounded-md">
      {children}
    </div>
  );
};
