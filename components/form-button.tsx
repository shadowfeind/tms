"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

interface FormButtonProps {
  content: string;
  loadingContent: string;
}

export const FormButton = ({ content, loadingContent }: FormButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? loadingContent : content}
    </Button>
  );
};
