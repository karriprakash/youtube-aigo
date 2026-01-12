# Database Connection & Cloud Details

## Database Setup
For this application, we recommended a PostgreSQL database for production.

### Connection String
Format: `postgres://[user]:[password]@[host]:[port]/[database]`
Example: `postgres://admin:securepass123@db.hosting.com:5432/youtube_igo`

### Creation Steps (Cloud)
1. **Choose a Provider**: AWS RDS, Google Cloud SQL, or Neon/Supabase (Serverless Postgres).
2. **Create Instance**: Select PostgreSQL 15+.
3. **Connectivity**: allow public access or strict IP whitelisting.
4. **Environment Variables**:
   In your hosting platform (e.g., Vercel), set:
   ```env
   DATABASE_URL="your-connection-string-here"
   ```

## Cloud Infrastructure
- **Storage**: Use AWS S3 or Google Cloud Storage for Video/Audio files.
- **Compute**: Vercel (Frontend/API) or AWS EC2 (if heavy customized processing is needed).
- **AI Processing**: If running local AI, use a GPU instance (AWS g4dn). If using APIs, stick to Vercel Serverless.
