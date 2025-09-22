# 🔧 Fix PostgreSQL Schema Issue

## Problem
Your Spring Boot application is trying to connect to the `dummy_data` schema, but it doesn't exist in your PostgreSQL database.

## Solution Steps

### Step 1: Check Your Database Connection
1. Open **DBeaver**
2. Make sure you're connected to the `anime_gallery` database (not `postgres`)
3. If you don't have `anime_gallery` database, create it first:
   ```sql
   CREATE DATABASE anime_gallery;
   ```

### Step 2: Run the Schema Fix Script
1. In DBeaver, connect to `anime_gallery` database
2. Open a new SQL script
3. Copy and paste the entire content from `fix_schema_issue.sql`
4. **Execute the script** (Ctrl+Enter or click Execute)

### Step 3: Verify the Setup
After running the script, you should see:
- ✅ Schema `dummy_data` created
- ✅ Tables created in the schema
- ✅ Sample artwork data inserted
- ✅ Proper permissions granted

### Step 4: Test Your Spring Boot Application
1. Start your backend:
   ```bash
   cd backend
   ./mvnw spring-boot:run
   ```
2. The application should now connect successfully

## Alternative: Quick Command Line Fix

If you prefer command line, run these commands:

```bash
# Connect to PostgreSQL
psql -U postgres -d anime_gallery

# Create schema and grant permissions
CREATE SCHEMA IF NOT EXISTS dummy_data;
GRANT ALL PRIVILEGES ON SCHEMA dummy_data TO postgres;

# Exit psql
\q
```

Then run the full script in DBeaver for tables and data.

## Verification Queries

Run these in DBeaver to verify everything is working:

```sql
-- Check if schema exists
SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'dummy_data';

-- Check tables in schema
SELECT table_name FROM information_schema.tables WHERE table_schema = 'dummy_data';

-- Check artwork data
SELECT COUNT(*) as artwork_count FROM dummy_data.artworks;

-- View your artwork
SELECT title, category, price FROM dummy_data.artworks ORDER BY category, title;
```

## Expected Results

After fixing, you should see:
- ✅ **Schema**: `dummy_data` exists
- ✅ **Tables**: `artworks`, `users`, `cart`, `orders`, `order_items`
- ✅ **Data**: 8 artworks (4 colored, 4 inked)
- ✅ **Spring Boot**: Connects without errors

## Troubleshooting

### If you still get errors:

1. **Check database name**: Make sure you're connected to `anime_gallery`, not `postgres`
2. **Check permissions**: Run `GRANT ALL PRIVILEGES ON SCHEMA dummy_data TO postgres;`
3. **Check application.properties**: Verify the connection string includes the schema
4. **Restart Spring Boot**: Stop and restart your backend application

### Common Issues:

- **Wrong database**: Connected to `postgres` instead of `anime_gallery`
- **Missing permissions**: User doesn't have rights to create schemas
- **Case sensitivity**: PostgreSQL is case-sensitive for identifiers

## Success Indicators

Your setup is working when:
- ✅ DBeaver shows `dummy_data` schema with tables
- ✅ Spring Boot starts without PostgreSQL errors
- ✅ Your React app can fetch artwork data
- ✅ Gallery pages display your artwork

Run the fix script and your anime art gallery should work perfectly! 🎨