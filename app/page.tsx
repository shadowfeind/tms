import { Button } from "@/components/ui/button";
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

const HomePage = () => {
  return (
    <div className="bg-neutral-900 w-full h-screen flex justify-center items-center">
      <Card className="w-[350px] shadow-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Task Manager</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col space-y-1.5 pb-6">
              <Label htmlFor="name" className="pb-1">
                UserName:
              </Label>
              <Input name="username" placeholder="User Name" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password" className="pb-1">
                Password:
              </Label>
              <Input name="password" type="password" placeholder="*****" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default HomePage;
