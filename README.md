# Elysia Start Template

This is a Bun + Elysia + TypeScript backend starter template with common built-in infrastructure to help you quickly start an API project.

## Features

- High-performance API service built with Elysia
- Better Auth integration for email/password sign-in, email verification, and password reset
- Drizzle ORM + PostgreSQL database access
- OpenAPI / Swagger documentation generation
- CORS, Helmet, and global error handling out of the box
- Vitest testing and Bun development experience
- Resend email delivery support

## Tech Stack

- Bun
- TypeScript
- Elysia
- Better Auth
- Drizzle ORM
- PostgreSQL
- Vitest
- Resend

## Quick Start

### 1. Install dependencies

```bash
bun install
```

### 2. Start PostgreSQL

A Docker Compose setup is included, so you can start the local database directly:

```bash
docker compose up -d
```

### 3. Configure environment variables

Copy the development environment example file and fill in the values you need:

```bash
cp .env.example .env                              # Require
cp .env.development.example .env.development      # Development require
cp .env.test.example .env.test                    # Test require
```

### 4. Initialize the database

Push the Drizzle schema to the database:

```bash
bun run drizzle:push
```

### 5. Start the development server

```bash
bun run dev
```

## Available Scripts

```bash
bun run dev              # Start the development server
bun run test             # Run tests
bun run test:coverage    # Generate test coverage report
bun run lint             # Check code quality
bun run lint:fix         # Auto-fix lint issues
bun run fmt              # Format code
bun run fmt:check        # Check formatting
bun run drizzle:push     # Push the database schema
bun run drizzle:generate # Generate migration files
bun run drizzle:migrations # Run migrations
bun run drizzle:reset    # Reset database seed data
```

## Project Structure

```text
src/
  config/        # Environment variables and Drizzle config
  db/            # Database client, schema, and reset scripts
  lib/           # Email, logging, and other utilities
  modules/       # API modules
  plugins/       # Middleware and plugins
  utils/         # Shared utility functions
test/            # Vitest tests
```

## Authentication Notes

This template includes Better Auth and provides authentication-related routes by default, which makes it easy to extend login, registration, email verification, and password reset flows.

## Testing

Run the test suite with:

```bash
bun run test
```

## Notes

- The development environment reads `.env.development` by default.
- The test environment reads `.env.test` by default.
- For production, use `.env.production` and make sure the database and email settings are correctly configured.

If you want to use this template for your own business project, you can extend it with your own modules, tables, and API logic.

## Contributing

> ⚠️ This project is primarily maintained for personal use. APIs and internal structure may change frequently.

Issues and discussions are welcome, especially for:

- bug reports
- security issues
- documentation improvements
- feature suggestions

However, I am currently not actively accepting external pull requests for major code changes or architectural modifications.

If you'd like to propose something significant, please open an issue first to discuss it before spending time on implementation.

Thank you for understanding.

## License

MIT © Kianmes
