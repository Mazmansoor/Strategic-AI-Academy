import * as admin from 'firebase-admin';

// Lazy initialization function for Firebase Admin (server-side only)
function initializeFirebaseAdmin() {
  if (!admin.apps.length) {
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(
      /\\n/g,
      '\n'
    );

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
        clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        privateKey: privateKey,
      }),
    });
  }
  return admin;
}

// Getter functions for lazy initialization
export const getAdminAuth = () => {
  initializeFirebaseAdmin();
  return admin.auth();
};

export const getAdminDb = () => {
  initializeFirebaseAdmin();
  return admin.firestore();
};

export const getAdminStorage = () => {
  initializeFirebaseAdmin();
  return admin.storage();
};

// Legacy exports (will initialize on first use)
export const adminAuth = new Proxy({} as admin.auth.Auth, {
  get: (_, prop) => {
    const auth = getAdminAuth();
    return typeof auth[prop as keyof admin.auth.Auth] === 'function'
      ? (auth[prop as keyof admin.auth.Auth] as Function).bind(auth)
      : auth[prop as keyof admin.auth.Auth];
  },
});

export const adminDb = new Proxy({} as admin.firestore.Firestore, {
  get: (_, prop) => {
    const db = getAdminDb();
    return typeof db[prop as keyof admin.firestore.Firestore] === 'function'
      ? (db[prop as keyof admin.firestore.Firestore] as Function).bind(db)
      : db[prop as keyof admin.firestore.Firestore];
  },
});

export const adminStorage = new Proxy({} as admin.storage.Storage, {
  get: (_, prop) => {
    const storage = getAdminStorage();
    return typeof storage[prop as keyof admin.storage.Storage] === 'function'
      ? (storage[prop as keyof admin.storage.Storage] as Function).bind(storage)
      : storage[prop as keyof admin.storage.Storage];
  },
});

export default admin;
