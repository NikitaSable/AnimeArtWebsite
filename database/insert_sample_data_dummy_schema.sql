-- Insert sample artwork data into dummy_data schema
-- Make sure to run create_tables_dummy_schema.sql first

-- Set the search path to dummy_data schema
SET search_path TO dummy_data;

-- Insert sample artwork data
INSERT INTO dummy_data.artworks (title, image_url, category, description, price) VALUES
('Sakura Warrior', '/images/sakura-warrior.jpg', 'colored', 'Beautiful anime warrior surrounded by cherry blossoms with vibrant pink and gold colors', 25.99),
('Dragon Slayer', '/images/dragon-slayer.jpg', 'inked', 'Epic black and white illustration of a legendary dragon slayer in detailed line art', 19.99),
('Magical Girl Luna', '/images/magical-girl.jpg', 'colored', 'Colorful magical girl transformation scene with sparkling effects and rainbow colors', 29.99),
('Samurai Spirit', '/images/samurai.jpg', 'inked', 'Traditional samurai warrior in detailed black and white line art with intricate armor', 22.99),
('Neko Cafe', '/images/neko-cafe.jpg', 'colored', 'Cute anime characters enjoying time in a cozy cat cafe setting with warm colors', 24.99),
('Mecha Pilot', '/images/mecha-pilot.jpg', 'inked', 'Detailed mecha suit pilot illustration with complex mechanical line work', 27.99),
('Cherry Blossom Festival', '/images/cherry-festival.jpg', 'colored', 'Anime characters celebrating under blooming cherry trees in spring', 26.99),
('Ninja Shadow', '/images/ninja-shadow.jpg', 'inked', 'Stealthy ninja character in dynamic action pose, black and white artwork', 21.99),
('Magical Academy', '/images/magical-academy.jpg', 'colored', 'Students at a magical academy with colorful spells and enchanted surroundings', 28.99),
('Ronin Wanderer', '/images/ronin-wanderer.jpg', 'inked', 'Lone samurai wandering through ancient Japan, detailed ink illustration', 23.99),
('Anime Princess', '/images/anime-princess.jpg', 'colored', 'Elegant anime princess in flowing dress with beautiful background', 31.99),
('Cyberpunk Warrior', '/images/cyberpunk-warrior.jpg', 'inked', 'Futuristic warrior in cyberpunk setting, detailed line art', 25.99);

-- Insert sample user (for testing)
INSERT INTO dummy_data.users (username, email, password_hash, first_name, last_name) VALUES
('demo_user', 'demo@animegallery.com', '$2a$10$example_hash_here', 'Demo', 'User'),
('artist_user', 'artist@animegallery.com', '$2a$10$example_hash_here', 'Artist', 'Creator');

-- Verify the data was inserted
SELECT 'Artworks inserted:' as info, COUNT(*) as count FROM dummy_data.artworks
UNION ALL
SELECT 'Users inserted:' as info, COUNT(*) as count FROM dummy_data.users;