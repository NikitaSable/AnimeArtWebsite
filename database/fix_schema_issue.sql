-- Fix PostgreSQL Schema Issue
-- Run this script in DBeaver to create the missing schema and tables

-- Step 1: Connect to the anime_gallery database first
-- Make sure you're connected to 'anime_gallery' database, not 'postgres'

-- Step 2: Create the dummy_data schema
CREATE SCHEMA IF NOT EXISTS dummy_data;

-- Step 3: Grant permissions on the schema
GRANT ALL PRIVILEGES ON SCHEMA dummy_data TO postgres;
GRANT USAGE ON SCHEMA dummy_data TO postgres;

-- Step 4: Set search path to include dummy_data schema
SET search_path TO dummy_data, public;

-- Step 5: Create the artworks table in dummy_data schema
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

-- Step 6: Create other tables for future use
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

CREATE TABLE IF NOT EXISTS dummy_data.cart (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES dummy_data.users(id) ON DELETE CASCADE,
    artwork_id BIGINT REFERENCES dummy_data.artworks(id) ON DELETE CASCADE,
    quantity INTEGER DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, artwork_id)
);

CREATE TABLE IF NOT EXISTS dummy_data.orders (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES dummy_data.users(id) ON DELETE CASCADE,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')),
    shipping_address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dummy_data.order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES dummy_data.orders(id) ON DELETE CASCADE,
    artwork_id BIGINT REFERENCES dummy_data.artworks(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL,
    price DECIMAL(10,2) NOT NULL
);

-- Step 7: Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_artworks_category ON dummy_data.artworks(category);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON dummy_data.orders(user_id);
CREATE INDEX IF NOT EXISTS idx_cart_user_id ON dummy_data.cart(user_id);

-- Step 8: Grant all permissions on tables and sequences
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA dummy_data TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA dummy_data TO postgres;

-- Step 9: Insert your artwork data
INSERT INTO dummy_data.artworks (title, image_url, category, description, price) VALUES
('Kanao Tsuyuri', '/images/colored/kanao-tsuyuri.jpeg', 'colored', 'Beautiful colored artwork of Kanao Tsuyuri from Demon Slayer', 25.99),
('Sasuke Uchiha', '/images/colored/sasuke-uchiha.jpeg', 'colored', 'Vibrant colored illustration of Sasuke Uchiha from Naruto', 29.99),
('Shouko Komi', '/images/colored/shouko-komi.png', 'colored', 'Adorable colored artwork of Shouko Komi from Komi Can''t Communicate', 24.99),
('Tanjiro Kamado', '/images/colored/tanjiro-kamado.jpeg', 'colored', 'Stunning colored portrait of Tanjiro Kamado from Demon Slayer', 27.99),
('Hinata Hyuga', '/images/inked/hinata-hyuga.jpeg', 'inked', 'Detailed black and white artwork of Hinata Hyuga from Naruto', 22.99),
('Koucho Shinobu', '/images/inked/koucho-shinobu.jpeg', 'inked', 'Elegant inked illustration of Koucho Shinobu from Demon Slayer', 26.99),
('Naruto Uzumaki', '/images/inked/naruto-uzumaki.jpeg', 'inked', 'Dynamic black and white artwork of Naruto Uzumaki', 25.99),
('Sakura Haruno', '/images/inked/sakura-haruno.jpeg', 'inked', 'Beautiful inked portrait of Sakura Haruno from Naruto', 23.99)
ON CONFLICT DO NOTHING;

-- Step 10: Verify the setup
SELECT 'Schema created successfully' as status;
SELECT 'Tables created: ' || COUNT(*) as table_count FROM information_schema.tables WHERE table_schema = 'dummy_data';
SELECT 'Artworks inserted: ' || COUNT(*) as artwork_count FROM dummy_data.artworks;