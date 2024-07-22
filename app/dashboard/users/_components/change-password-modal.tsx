import { changePassword } from "@/action/userActions";
import { FormError } from "@/components/form-error-message";
import { SubmitButton } from "@/components/submit-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";
import { useFormState } from "react-dom";

interface ChangePasswordModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userId: string;
}

export const ChangePasswordModal = ({
  isOpen,
  setIsOpen,
  userId,
}: ChangePasswordModalProps) => {
  const [formState, action] = useFormState(changePassword.bind(null, userId), {
    errors: {},
  });

  useEffect(() => {
    if (formState.success) {
      setIsOpen(false);
    }
  }, [formState.success, setIsOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
        </DialogHeader>
        <form action={action}>
          <div className="p-4">
            <div className="grid pb-6 w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                type="password"
                id="password"
                placeholder="Password"
              />
              {formState.errors.password ? (
                <FormError message={formState.errors.password?.join(", ")} />
              ) : null}
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="confirmpassword">confirmPassword</Label>
              <Input
                name="confirmpassword"
                type="password"
                id="confirmpassword"
                placeholder="confirmPassword"
              />
              {formState.errors.confirmpassword ? (
                <FormError
                  message={formState.errors.confirmpassword?.join(", ")}
                />
              ) : null}
            </div>
            {formState.errors._form ? (
              <FormError message={formState.errors._form?.join(", ")} />
            ) : null}
            <div className="mt-4">
              <SubmitButton>Submit</SubmitButton>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
