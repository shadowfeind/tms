import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

interface SubmitButtonProps {
  children: React.ReactNode;
  props?: any;
}

export const SubmitButton = ({ children, props }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button {...props} isLoading={pending}>
      {children}
    </Button>
  );
};
