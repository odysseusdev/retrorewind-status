import { MantineSize } from "@mantine/core";

/* Settings Defaults */
export const DEFAULT_SETTINGS_COLORSCHEME: "light" | "dark" = "light";
export const DEFAULT_SETTINGS_REFRESHINTERVAL: number = 120;
export const DEFAULT_SETTINGS_VRONLY: boolean = false;

/* Layout & Sizes */
export const APPSHELL_HEADER_HEIGHT: number = 56;
export const APPSHELL_FOOTER_HEIGHT: number = 32 + 64;
export const APPSHELL_CONTAINER_SIZE: MantineSize = "lg";

/* Internal Endpoints */
export const URL_INTERNAL_APP_VERSION: string = "/api/application/version";
export const URL_INTERNAL_MII: string = "/api/mii";
export const URL_INTERNAL_RETROREWIND_ROOMS: string = "/api/retro-rewind/rooms";
export const URL_INTERNAL_RETROREWIND_VERSION: string = "/api/retro-rewind/version";
export const URL_INTERNAL_WHEELWIZARD_VERSION: string = "/api/wheel-wizard/version";

/* External Endpoints */
export const URL_EXTERNAL_APP_REPOSITORY: string = "https://github.com/odysseusdev/retrorewind-status";
export const URL_EXTERNAL_APP_VERSION = "https://api.github.com/repos/odysseusdev/retrorewind-status/releases/latest";
export const URL_EXTERNAL_MII_IMAGE = "https://studio.mii.nintendo.com/miis/image.png";
export const URL_EXTERNAL_MII_STUDIO: string = "https://qrcode.rc24.xyz/cgi-bin/studio.cgi";
export const URL_EXTERNAL_RETROREWIND_ROOMS: string = "http://zplwii.xyz/api/groups";
export const URL_EXTERNAL_RETROREWIND_VERSION = "https://update.zplwii.xyz/RetroRewind/RetroRewindVersion.txt";
export const URL_EXTERNAL_RETROREWIND_WIKI = "https://wiki.tockdom.com/wiki/Retro_Rewind";
export const URL_EXTERNAL_WHEELWIZARD_REPOSITORY = "https://github.com/patchzyy/WheelWizard";
export const URL_EXTERNAL_WHEELWIZARD_VERSION = "https://api.github.com/repos/patchzyy/WheelWizard/releases/latest";

/* Local Storage Keys */
export const LOCALSTORAGE_MIIS: string = "miis";
export const LOCALSTORAGE_SETTINGS_REFRESHINTERVAL: string = "settings-refresh-interval";
export const LOCALSTORAGE_SETTINGS_VRONLY: string = "settings-vr-only";

/* Form Select Data */
