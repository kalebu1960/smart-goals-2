#!/bin/bash
# Simple build script for Render deployment
echo "Installing backend dependencies..."
cp package-backend.json package.json
npm install
echo "Build completed successfully!"
