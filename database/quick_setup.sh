#!/bin/bash
# Quick setup script for PostgreSQL database

echo "Creating anime_gallery database..."
psql -U postgres -c "CREATE DATABASE anime_gallery WITH OWNER = postgres ENCODING = 'UTF8';"

echo "Creating dummy_data schema..."
psql -U postgres -d anime_gallery -c "CREATE SCHEMA IF NOT EXISTS dummy_data;"

echo "Database and schema created successfully!"
echo "Now run the table creation scripts in DBeaver."