import { NextRequest } from 'next/server';
import { adminAuth } from './admin';

export const getBearerToken = (request: NextRequest): string | null => {
  const header = request.headers.get('authorization');
  if (!header || !header.startsWith('Bearer ')) {
    return null;
  }
  return header.slice('Bearer '.length).trim();
};

export const requireFirebaseUser = async (request: NextRequest) => {
  const token = getBearerToken(request);
  if (!token) {
    return null;
  }
  return adminAuth.verifyIdToken(token);
};
