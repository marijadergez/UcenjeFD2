export const COMETCHAT_CONSTANTS = {
  APP_ID: "APP_ID",       // Replace with your App ID
  REGION: "REGION",       // Replace with your Region
  AUTH_KEY: "AUTH_KEY",    // Replace with your Auth Key (dev only)
};


  import { CometChatUIKit, UIKitSettingsBuilder } from "@cometchat/chat-uikit-react";

/**
 * CometChat Constants - Replace with your actual credentials
 */

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