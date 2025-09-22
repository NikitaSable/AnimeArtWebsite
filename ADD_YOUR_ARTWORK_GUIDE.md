# 🎨 Adding Your Real Artwork - Complete Guide

## Step 1: Prepare Your Images

### Image Requirements:
- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 800x600px or higher (maintain aspect ratio)
- **File Size**: Keep under 2MB for web performance
- **Quality**: High resolution for gallery display

### Organize Your Files:
```
frontend/public/images/
├── colored/
│   ├── your-artwork-1.jpg
│   ├── your-artwork-2.png
│   └── ...
└── inked/
    ├── your-sketch-1.jpg
    ├── your-sketch-2.png
    └── ...
```

## Step 2: Add Images to Your Project

1. **Create the directories:**
   ```bash
   mkdir -p frontend/public/images/colored
   mkdir -p frontend/public/images/inked
   ```

2. **Copy your artwork files** into the appropriate folders

3. **Use descriptive filenames** (e.g., `sakura-warrior.jpg`, `dragon-slayer.png`)

## Step 3: Update Your Artwork Data

### Option A: Update the Database (Recommended)
1. Open DBeaver and connect to your `anime_gallery` database
2. Edit the file `database/update_with_real_artwork.sql`
3. Replace the sample data with your actual artwork information:
   ```sql
   INSERT INTO dummy_data.artworks (title, image_url, category, description, price) VALUES
   ('Your Artwork Title', '/images/colored/your-file.jpg', 'colored', 'Your description', 25.99);
   ```
4. Run the SQL script in DBeaver

### Option B: Update Frontend Data (Alternative)
1. Edit `frontend/src/utils/artworkData.js`
2. Replace the sample artwork objects with your real data:
   ```javascript
   {
     id: 1,
     title: "Your Artwork Title",
     image: "/images/colored/your-file.jpg",
     category: "colored",
     description: "Your artwork description",
     price: 25.99
   }
   ```

## Step 4: Test Your Setup

1. **Start your backend:**
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```

2. **Start your frontend:**
   ```bash
   cd frontend
   npm start
   ```

3. **Check your gallery** at `http://localhost:3000`

## Step 5: Troubleshooting

### Images Not Loading?
- Check file paths match exactly (case-sensitive)
- Verify images are in `frontend/public/images/`
- Check browser console for 404 errors
- Ensure image files aren't corrupted

### Database Issues?
- Verify your artwork data in DBeaver: `SELECT * FROM dummy_data.artworks;`
- Check backend console for connection errors
- Ensure PostgreSQL is running

## Step 6: Advanced Features (Optional)

### Add Image Optimization:
- Use tools like TinyPNG to compress images
- Create thumbnail versions for faster loading
- Consider WebP format for better compression

### Add More Artwork Fields:
You can extend the database schema to include:
- Creation date
- Art medium (digital, traditional, etc.)
- Dimensions
- Tags/keywords
- Artist notes

## Example File Structure:
```
your-project/
├── frontend/
│   └── public/
│       └── images/
│           ├── colored/
│           │   ├── magical-girl-luna.jpg
│           │   ├── sakura-warrior.png
│           │   └── neko-cafe-scene.jpg
│           └── inked/
│               ├── samurai-spirit.jpg
│               ├── dragon-slayer.png
│               └── mecha-pilot.jpg
└── database/
    └── update_with_real_artwork.sql
```

## Tips for Best Results:
- Use consistent naming conventions
- Keep original high-res files as backups
- Consider watermarking for protection
- Test on different devices/screen sizes
- Optimize images for web without losing quality

Your anime art gallery is now ready to showcase your amazing artwork! 🌟