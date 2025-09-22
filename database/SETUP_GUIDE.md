# PostgreSQL Database Setup Guide for Anime Art Gallery

## Prerequisites
1. **PostgreSQL** installed on your system
2. **DBeaver** installed for database management
3. PostgreSQL service running

## Step 1: Install PostgreSQL (if not already installed)

### macOS:
```bash
brew install postgresql
brew services start postgresql
```

### Windows:
Download from: https://www.postgresql.org/download/windows/

### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

## Step 2: Create Database User (Optional but Recommended)

Connect to PostgreSQL as superuser:
```bash
psql -U postgres
```

Create a new user for your application:
```sql
CREATE USER anime_gallery_user WITH PASSWORD 'your_secure_password';
ALTER USER anime_gallery_user CREATEDB;
```

## Step 3: Setup Database with DBeaver

### Connect to PostgreSQL:
1. Open DBeaver
2. Click "New Database Connection" (plug icon)
3. Select "PostgreSQL"
4. Enter connection details:
   - **Host**: localhost
   - **Port**: 5432
   - **Database**: postgres (initially)
   - **Username**: postgres (or your user)
   - **Password**: your_password
5. Test connection and click "Finish"

### Create the Database:
1. Right-click on your connection
2. Select "SQL Editor" → "Open SQL Script"
3. Copy and paste the content from `create_database.sql`
4. Execute the script (Ctrl+Enter or click Execute)

### Create Tables:
1. Connect to the newly created `anime_gallery` database
2. Open a new SQL script
3. Copy and paste the content from `create_tables.sql`
4. Execute the script

### Insert Sample Data:
1. Open another SQL script
2. Copy and paste the content from `insert_sample_data.sql`
3. Execute the script

## Step 4: Update Application Configuration

Update your `application.properties` with your actual database credentials:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/anime_gallery
spring.datasource.username=your_username
spring.datasource.password=your_password
```

## Step 5: Verify Setup

Run this query in DBeaver to verify your data:
```sql
SELECT * FROM artworks;
```

You should see 10 sample artworks with both 'colored' and 'inked' categories.

## Troubleshooting

### Connection Issues:
- Ensure PostgreSQL service is running
- Check if port 5432 is available
- Verify username/password

### Permission Issues:
- Make sure your user has proper permissions
- Grant necessary privileges:
```sql
GRANT ALL PRIVILEGES ON DATABASE anime_gallery TO your_username;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_username;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO your_username;
```

## Database Schema Overview

### Tables Created:
- **artworks**: Main table for storing artwork information
- **users**: User accounts (for future authentication)
- **cart**: Shopping cart items
- **orders**: Order information
- **order_items**: Individual items in orders

### Key Features:
- Auto-incrementing IDs using BIGSERIAL
- Proper foreign key relationships
- Check constraints for data validation
- Indexes for performance
- Timestamps for audit trails