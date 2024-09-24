import React, { useState } from "react";

import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { DropletIcon, SettingsIcon } from "lucide-react";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { Switch } from "./components/ui/switch";

function App() {
  const [notificationsEnabled, setNotificationEnabled] = useState(false);
  const [interval, setInterval] = useState(60);
  const handleIntervalChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="w-96 p-4 bg-background">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <DropletIcon className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl font-bold">Hydrate me</h1>
        </div>
        <Button variant="ghost" size={"icon"}>
          <SettingsIcon className="h-5 w-5" />
        </Button>
      </header>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Next Reminder</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">2:30 PM</p>
          <p className="text-sm text-muted-foreground">In 45 minutes</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="interval">Reminder Interval (minutes)</Label>
            <Input
              type="number"
              min={15}
              max={240}
              value={interval}
              onChange={handleIntervalChange}
            />
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Label htmlFor="notifications">Enable Notifications</Label>
            <Switch id="notifications" checked={true} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hydration History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2"></ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
