export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-auto mt-4 mb-4 shadow-md  p-4 md:p-8 md:mt-10 md:mb-10 bg-white rounded-md">
      {children}
    </div>
  );
};
