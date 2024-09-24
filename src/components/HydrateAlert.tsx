import { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { DropletIcon, XIcon } from "lucide-react";

export default function Component() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return null;
  }

  const handleDrink = () => {
    // Here you would typically log the drinking action
    console.log("Water consumed at", new Date().toLocaleTimeString());
    setDismissed(true);
  };

  return (
    <Card className="w-80 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Water Reminder</CardTitle>
        <Button variant="ghost" size="icon" onClick={() => setDismissed(true)}>
          <XIcon className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <DropletIcon className="h-10 w-10 text-blue-500" />
          <div>
            <p className="text-sm font-medium leading-none">Time to hydrate!</p>
            <p className="text-sm text-muted-foreground">
              Stay healthy, drink water.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleDrink}>
          I Drank Water
        </Button>
      </CardFooter>
    </Card>
  );
}
