import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";

/**
 * CometChat Constants - Replace with your actual credentials
 */
const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID", // Replace with your actual App ID from CometChat
  REGION: "REGION", // Replace with your App's Region
  AUTH_KEY: "AUTH_KEY", // Replace with your Auth Key (leave blank if using Auth Token)
};

const UIKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

CometChatUIKit.init(UIKitSettings)
  .then(() => {
    console.log("CometChat UI Kit initialized successfully.");
  })
  .catch((error) => {
    console.error("CometChat UI Kit initialization failed:", error);
  });

  
