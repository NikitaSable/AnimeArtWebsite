-- Step 1: Connect to 'postgres' database and run this first
-- Create the anime_gallery database
CREATE DATABASE anime_gallery
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Step 2: After creating the database, connect to 'anime_gallery' database and run this
-- Create the dummy_data schema
CREATE SCHEMA IF NOT EXISTS dummy_data;

-- Grant permissions
GRANT ALL PRIVILEGES ON SCHEMA dummy_data TO postgres;
GRANT ALL PRIVILEGES ON DATABASE anime_gallery TO postgres;