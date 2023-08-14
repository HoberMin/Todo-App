# Todo API

## How to run

1. Install dependencies
   ```bash
   npm install
   ```
2. Write environment variables

   > Check [.env.example](./.env.example) for reference

   ```
   # .env.development

   NODE_ENV=development
   DATABASE_URL=
   SESSION_SECRET=
   ```

3. Push schema to database
   ```bash
   npm run db:push
   ```
4. Run server
   ```bash
   npm run dev
   ```

## API Specification

[Postman Documentation](https://documenter.getpostman.com/view/28555023/2s9Xy5NAyz)
