const Application = {
    PACKAGE_NAME: "com.dcinside.app.android",
    VERSION:      "100103",
    VERSION_NAME: "5.0.3",

    FINGERPRINT: {
        SHA1:   "43bd70dfc365ec1749f0424d28174da44ee7659d",
        SHA256: "5rJxRKJ2YLHgBgj6RdMZBl2X0KcftUuMoXVug0bsKd0=",
    },
};

const FIREBASE_PROJECT_ID = "dcinside-b3f40";
const FIREBASE_SENDER_ID  = "477369754343";

const Firebase = {
    API_KEY:             "AIzaSyDcbVof_4Bi2GwJ1H8NjSwSTaMPPZeCE38",
    AUTH_DOMAIN:         `${FIREBASE_PROJECT_ID}.firebaseapp.com`,
    DATABASE_URL:        `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
    PROJECT_ID:          `${FIREBASE_PROJECT_ID}`,
    STORAGE_BUCKET:      `${FIREBASE_PROJECT_ID}.appspot.com`,
    MESSAGING_SENDER_ID: `${FIREBASE_SENDER_ID}`,
    APP_ID:              `1:${FIREBASE_SENDER_ID}:android:d2ffdd960120a207727842`,
    APP_NAME:            "[DEFAULT]",
};

const Constants = {
    APPLICATION: Application,
    FIREBASE:    Firebase,
};

export default Constants;