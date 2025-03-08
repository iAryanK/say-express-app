# Express Backend App

## Overview

An Express.js + TypeScript setup, configured with packages used for writing quality code.

## Features

- Generates a standard **Express + TypeScript** backend
- initialized with proper folder structure and necessary packages
- pre-configured with authentication routes and related packages

## Usage

Run the CLI with:

```sh
npx say-express-app my-express-app
```

You will be prompted to choose between:

- `Basic Template`
- `Standard Template`
- `Auth Template`

Alternatively, you can specify the template directly:

```sh
npx say-express-app my-express-app --template basic
```

## Project Structure

This project has the following minimalistic structure:

```
my-express-app/
├── app/
│   ├── route.ts
│   ├── user/
│       ├── user.controller.ts
│       ├── user.dto.ts
│       ├── user.route.ts
│       ├── user.service.ts
│       ├── user.validation.ts
│   ├── common/
│       ├── dto/
│       ├── helper/
│       ├── middleware/
│       ├── services/
├── prisma
    ├── schema.prisma
├── .eslintrc.js
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
```

## Available Scripts

Once the project is set up, you can use the following commands:

```sh
npm run dev   # Start the development server
npm run build # Compile TypeScript
npm start     # Run the compiled JavaScript
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.
