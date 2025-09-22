-- Update database with your real artwork
-- Replace the sample data with your actual artwork information

-- Clear existing sample data
DELETE FROM dummy_data.artworks;

-- Insert your real artwork data
-- COLORED ARTWORKS - Your actual artwork
INSERT INTO dummy_data.artworks (title, image_url, category, description, price) VALUES
('Kanao Tsuyuri', '/images/colored/kanao-tsuyuri.jpeg', 'colored', 'Beautiful colored artwork of Kanao Tsuyuri from Demon Slayer', 25.99),
('Sasuke Uchiha', '/images/colored/sasuke-uchiha.jpeg', 'colored', 'Vibrant colored illustration of Sasuke Uchiha from Naruto', 29.99),
('Shouko Komi', '/images/colored/shouko-komi.png', 'colored', 'Adorable colored artwork of Shouko Komi from Komi Can\'t Communicate', 24.99),
('Tanjiro Kamado', '/images/colored/tanjiro-kamado.jpeg', 'colored', 'Stunning colored portrait of Tanjiro Kamado from Demon Slayer', 27.99),

-- INKED ARTWORKS - Your actual artwork
('Hinata Hyuga', '/images/inked/hinata-hyuga.jpeg', 'inked', 'Detailed black and white artwork of Hinata Hyuga from Naruto', 22.99),
('Koucho Shinobu', '/images/inked/koucho-shinobu.jpeg', 'inked', 'Elegant inked illustration of Koucho Shinobu from Demon Slayer', 26.99),
('Naruto Uzumaki', '/images/inked/naruto-uzumaki.jpeg', 'inked', 'Dynamic black and white artwork of Naruto Uzumaki', 25.99),
('Sakura Haruno', '/images/inked/sakura-haruno.jpeg', 'inked', 'Beautiful inked portrait of Sakura Haruno from Naruto', 23.99);

-- Verify the data
SELECT id, title, category, price FROM dummy_data.artworks ORDER BY category, title;