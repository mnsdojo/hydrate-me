const SETTINGS_KEY = "hydrateMe_settings";

export const getStoredSettings = async (): Promise<{
  notificationEnabled: boolean;
  interval: number;
}> => {
  const storedSettings = await chrome.storage.sync.get(SETTINGS_KEY);
  return (
    storedSettings[SETTINGS_KEY] || {
      notificationEnabled: true,
      interval: 60,
    }
  );
};

export const updateStoreSettings = async (newSettings: {
  notificationsEnabled?: boolean;
  interval?: number;
}) => {
  const currentSettings = await getStoredSettings();
  const updatedSettings = { ...currentSettings, ...newSettings };
  await chrome.storage.sync.set({ [SETTINGS_KEY]: updatedSettings });
};
