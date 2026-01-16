#!/bin/bash

# Deployment script for Zavia AI Academy to Google Cloud Run
# This script automates the deployment process

set -e

echo "🚀 Starting deployment to Google Cloud Run..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: gcloud CLI is not installed. Please install it first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Get project ID
PROJECT_ID=$(gcloud config get-value project)
if [ -z "$PROJECT_ID" ]; then
    echo "❌ Error: No GCP project selected. Run: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo "📦 Project: $PROJECT_ID"

# Enable required APIs
echo "🔧 Enabling required Google Cloud APIs..."
gcloud services enable cloudbuild.googleapis.com \
    run.googleapis.com \
    containerregistry.googleapis.com \
    --project=$PROJECT_ID

# Submit build
echo "🏗️  Building and deploying application..."
gcloud builds submit \
    --config=cloudbuild.yaml \
    --substitutions=\
_FIREBASE_API_KEY="${NEXT_PUBLIC_FIREBASE_API_KEY}",\
_FIREBASE_AUTH_DOMAIN="${NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}",\
_FIREBASE_PROJECT_ID="${NEXT_PUBLIC_FIREBASE_PROJECT_ID}",\
_FIREBASE_STORAGE_BUCKET="${NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}",\
_FIREBASE_MESSAGING_SENDER_ID="${NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}",\
_FIREBASE_APP_ID="${NEXT_PUBLIC_FIREBASE_APP_ID}",\
_FIREBASE_ADMIN_CLIENT_EMAIL="${FIREBASE_ADMIN_CLIENT_EMAIL}",\
_FIREBASE_ADMIN_PRIVATE_KEY="${FIREBASE_ADMIN_PRIVATE_KEY}",\
_APP_URL="${NEXT_PUBLIC_APP_URL}",\
_STRIPE_PUBLISHABLE_KEY="${NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}",\
_STRIPE_SECRET_KEY="${STRIPE_SECRET_KEY}",\
_STRIPE_WEBHOOK_SECRET="${STRIPE_WEBHOOK_SECRET}" \
    --project=$PROJECT_ID

echo "✅ Deployment complete!"
echo ""
echo "🌐 Your application is now running at:"
gcloud run services describe zavia-ai-academy \
    --region=us-central1 \
    --format='value(status.url)' \
    --project=$PROJECT_ID
