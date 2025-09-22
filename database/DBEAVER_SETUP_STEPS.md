# DBeaver Setup Steps for dummy_data Schema

## Current Setup Status ✅
- Database: `anime_gallery` (created)
- Schema: `dummy_data` (created)
- Connection configured with password: `Nikita@123`

## Next Steps in DBeaver:

### Step 1: Create Tables
1. In DBeaver, connect to your `anime_gallery` database
2. Right-click on your connection → **SQL Editor** → **Open SQL Script**
3. Copy and paste the content from `create_tables_dummy_schema.sql`
4. **Execute** the script (Ctrl+Enter or click the Execute button)

### Step 2: Insert Sample Data
1. Open a new SQL script in DBeaver
2. Copy and paste the content from `insert_sample_data_dummy_schema.sql`
3. **Execute** the script

### Step 3: Verify Your Setup
Run this query to check if everything is working:

```sql
-- Check tables in dummy_data schema
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'dummy_data';

-- Check sample data
SELECT * FROM dummy_data.artworks LIMIT 5;
```

### Step 4: Test Your Application
Now you can run your Spring Boot application:

```bash
cd backend
./mvnw spring-boot:run
```

The application will:
- Connect to PostgreSQL database `anime_gallery`
- Use the `dummy_data` schema
- Find your artwork data automatically

## Expected Results:
- ✅ 5 tables created in `dummy_data` schema
- ✅ 12 sample artworks inserted (6 colored, 6 inked)
- ✅ 2 sample users for testing
- ✅ Spring Boot connects successfully

## Troubleshooting:

### If tables don't appear:
- Make sure you're looking in the `dummy_data` schema, not `public`
- Refresh the schema view in DBeaver (F5)

### If connection fails:
- Verify PostgreSQL is running
- Check the password in `application.properties`
- Ensure the `dummy_data` schema exists

### To view schema in DBeaver:
1. Expand your connection
2. Expand `anime_gallery` database
3. Expand `Schemas`
4. Look for `dummy_data` schema
5. Expand `Tables` to see your created tables

## Quick Test Query:
```sql
-- This should return your artwork data
SELECT 
    title, 
    category, 
    price 
FROM dummy_data.artworks 
ORDER BY category, title;
```