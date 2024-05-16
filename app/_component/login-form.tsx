"use client";
import { login } from "@/action/login";
import { FormButton } from "@/components/form-button";
import { FormError } from "@/components/form-error-message";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormState } from "react-dom";

export const LoginForm = () => {
  const [formState, action] = useFormState(login, {
    errors: {},
  });
  console.log(formState);
  return (
    <div className="bg-neutral-900 w-full h-screen flex justify-center items-center">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Task Manager</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={action}>
            <div className="flex flex-col space-y-1.5 pb-6">
              <Label htmlFor="name" className="pb-1">
                UserName:
              </Label>
              <Input name="userName" placeholder="User Name" />
              {formState.errors.userName ? (
                <FormError message={formState.errors.userName?.join(", ")} />
              ) : null}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="pb-1">
                Password:
              </Label>
              <Input name="password" type="password" placeholder="*****" />
              {formState.errors.password ? (
                <FormError message={formState.errors.password?.join(", ")} />
              ) : null}
            </div>
            {formState.errors._form ? (
              <FormError message={formState.errors._form?.join(", ")} />
            ) : null}

            <FormButton content="Sign In" loadingContent="...Authenticating" />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
