declare module NodeJS {
  interface ProcessEnv {
    SICAM_ADMIN_NAME: string
    SICAM_ADMIN_EMAIL: string
    SICAM_ADMIN_PASSWORD: string
    FIREBASE_API_KEY: string
    FIREBASE_AUTH_DOMAIN: string
    FIREBASE_PROJECT_ID: string
    FIREBASE_STORAGE_BUCKET: string
    FIREBASE_MESSAGING_SENDER_ID: string
    FIREBASE_APP_ID: string
  }
}
