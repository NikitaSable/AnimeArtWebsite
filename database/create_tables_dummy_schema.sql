-- Connect to anime_gallery database and run this script
-- This will create tables in the dummy_data schema

-- Set the search path to dummy_data schema
SET search_path TO dummy_data;

-- Create artworks table in dummy_data schema
CREATE TABLE IF NOT EXISTS dummy_data.artworks (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('colored', 'inked')),
    description TEXT,
    price DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on category for faster queries
CREATE INDEX IF NOT EXISTS idx_artworks_category ON dummy_data.artworks(category);

-- Create users table (for future use)
CREATE TABLE IF NOT EXISTS dummy_data.users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create cart table (for future use)
CREATE TABLE IF NOT EXISTS dummy_data.cart (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES dummy_data.users(id) ON DELETE CASCADE,
    artwork_id BIGINT REFERENCES dummy_data.artworks(id) ON DELETE CASCADE,
    quantity INTEGER DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, artwork_id)
);

-- Create orders table (for future use)
CREATE TABLE IF NOT EXISTS dummy_data.orders (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES dummy_data.users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create order_items table (for future use)
CREATE TABLE IF NOT EXISTS dummy_data.order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES dummy_data.orders(id) ON DELETE CASCADE,
    artwork_id BIGINT REFERENCES dummy_data.artworks(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- Grant permissions to postgres user (adjust if using different user)
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA dummy_data TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA dummy_data TO postgres;