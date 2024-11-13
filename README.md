# AI SaaS

> Study course promoted by [Coding with Antonio](https://www.youtube.com/watch?v=ffJ38dBzrlY).

---

The AI SaaS provides 5 different integrations with AI APIs, along with Stripe subscription system, Clerk user authentication and Crisp chat support.

![Demo](/demo/demo1.gif)

To run locally, follow these commands:

1. Clone this project
2. Run `npm install` 
3. Create a `.env` file in the root and set the following environment variables:
```properties
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

OPEN_API_KEY=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

POSTGRES_URL=
POSTGRES_PRISMA_URL=
POSTGRES_URL_NO_SSL=
POSTGRES_URL_NON_POOLING=
POSTGRES_USER=
POSTGRES_HOST=
POSTGRES_PASSWORD=
POSTGRES_DATABASE=
```
1. Run `npm run postinstall`
2. Run `npm run dev`
3. Open http://localhost:3000/

---
