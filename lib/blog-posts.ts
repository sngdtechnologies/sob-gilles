export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Web Applications with Next.js 15",
    content: `
# Building Scalable Web Applications with Next.js 15

Next.js 15 introduces several groundbreaking features that make building scalable web applications easier than ever. In this comprehensive guide, we'll explore the key improvements and how to leverage them in your projects.

## App Router Enhancements

The App Router in Next.js 15 brings significant performance improvements and new capabilities:

- **Improved caching strategies** for better performance
- **Enhanced server components** with better streaming
- **New middleware capabilities** for advanced routing logic

## Server Actions Revolution

Server Actions have been refined to provide a more seamless full-stack experience:

\`\`\`typescript
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  
  // Database operations here
  return { success: true, user: { name, email } }
}
\`\`\`

## Performance Optimizations

Next.js 15 includes several performance optimizations out of the box:

1. **Improved bundle splitting** for smaller initial loads
2. **Better tree shaking** to eliminate unused code
3. **Enhanced image optimization** with WebP and AVIF support

## Conclusion

Next.js 15 represents a significant step forward in React-based web development. The combination of improved performance, better developer experience, and enhanced scalability features makes it an excellent choice for modern web applications.
    `,
    excerpt:
      "Explore the latest features in Next.js 15 and how they can help you build more performant and scalable web applications.",
    date: "2024-03-15",
    category: "Next.js",
    readTime: "5 min read",
    slug: "building-scalable-web-applications-nextjs-15",
    author: "Gilles SOB",
  },
  {
    id: 2,
    title: "Laravel Best Practices for Modern Development",
    content: `
# Laravel Best Practices for Modern Development

Laravel continues to be one of the most popular PHP frameworks, and with good reason. Its elegant syntax, powerful features, and robust ecosystem make it an excellent choice for web development. Here are the best practices I've learned over years of Laravel development.

## Project Structure and Organization

A well-organized Laravel project is crucial for maintainability:

### Service Layer Pattern

Instead of putting business logic in controllers, use service classes:

\`\`\`php
<?php

namespace App\\Services;

class UserService
{
    public function createUser(array $data): User
    {
        // Validation and business logic here
        return User::create($data);
    }
}
\`\`\`

### Repository Pattern

For complex data access logic, implement the repository pattern:

\`\`\`php
<?php

namespace App\\Repositories;

interface UserRepositoryInterface
{
    public function findByEmail(string $email): ?User;
    public function create(array $data): User;
}
\`\`\`

## Database Best Practices

### Migration Management

Always use migrations for database changes:

\`\`\`php
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->nullable()->after('email');
    $table->index('phone');
});
\`\`\`

### Eloquent Optimization

Use eager loading to prevent N+1 queries:

\`\`\`php
$users = User::with(['posts', 'comments'])->get();
\`\`\`

## Security Considerations

Laravel provides excellent security features out of the box:

1. **CSRF Protection** - Always enabled by default
2. **SQL Injection Prevention** - Use Eloquent ORM
3. **XSS Protection** - Blade templates escape output automatically
4. **Authentication** - Use Laravel's built-in auth system

## Testing Strategy

Write comprehensive tests for your Laravel applications:

\`\`\`php
public function test_user_can_create_post()
{
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)
        ->post('/posts', [
            'title' => 'Test Post',
            'content' => 'This is a test post.'
        ]);
    
    $response->assertStatus(201);
    $this->assertDatabaseHas('posts', [
        'title' => 'Test Post',
        'user_id' => $user->id
    ]);
}
\`\`\`

## Conclusion

Following these best practices will help you build more maintainable, secure, and performant Laravel applications. Remember that consistency is key - establish conventions early and stick to them throughout your project.
    `,
    excerpt:
      "Discover essential Laravel patterns and practices that will make your PHP applications more maintainable and secure.",
    date: "2024-03-10",
    category: "Laravel",
    readTime: "8 min read",
    slug: "laravel-best-practices-modern-development",
    author: "Gilles SOB",
  },
  {
    id: 3,
    title: "React Server Components: The Future of React",
    content: `
# React Server Components: The Future of React

React Server Components represent a paradigm shift in how we think about React applications. They blur the line between server and client, offering unprecedented performance benefits and developer experience improvements.

## What Are Server Components?

Server Components are React components that run on the server and send their rendered output to the client. Unlike traditional SSR, Server Components don't hydrate on the client - they remain server-side.

## Key Benefits

### Performance Advantages

1. **Reduced Bundle Size** - Server Components don't ship JavaScript to the client
2. **Faster Initial Load** - Less JavaScript to parse and execute
3. **Better SEO** - Content is rendered on the server

### Developer Experience

Server Components allow you to:

- Access databases directly in components
- Use server-only libraries without worrying about bundle size
- Implement complex server logic without API routes

## Example Implementation

Here's a simple Server Component that fetches data:

\`\`\`tsx
// This runs on the server
async function BlogPosts() {
  const posts = await db.posts.findMany()
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
\`\`\`

## Client Components Integration

You can seamlessly integrate Client Components for interactivity:

\`\`\`tsx
'use client'

function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)
  
  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}
\`\`\`

## Best Practices

1. **Use Server Components by default** - Only use Client Components when you need interactivity
2. **Keep the client boundary minimal** - Pass data down from Server Components
3. **Leverage streaming** - Use Suspense for better loading experiences

## The Future

Server Components are still evolving, but they represent the future of React development. Frameworks like Next.js are already implementing them, and we can expect wider adoption in the coming years.

## Conclusion

React Server Components offer a compelling vision for the future of web development. By combining the best of server-side rendering with React's component model, they provide both performance benefits and an excellent developer experience.
    `,
    excerpt:
      "Understanding React Server Components and how they're changing the way we think about React applications.",
    date: "2024-03-05",
    category: "React",
    readTime: "6 min read",
    slug: "react-server-components-future-react",
    author: "Gilles SOB",
  },
  {
    id: 4,
    title: "TypeScript Tips for Better Code Quality",
    content: `
# TypeScript Tips for Better Code Quality

TypeScript is most valuable when you let the compiler catch mistakes before your users do. These techniques make your code safer without making it harder to read.

## Turn on strict mode

Start with \`"strict": true\` in your \`tsconfig.json\`. It enables \`strictNullChecks\`, \`noImplicitAny\` and several other checks that remove entire categories of runtime errors.

## Prefer unions over enums for simple cases

String literal unions are lightweight, tree-shakable and easy to autocomplete:

\`\`\`typescript
type Status = "idle" | "loading" | "success" | "error"

function badge(status: Status) {
  switch (status) {
    case "idle":
      return "gray"
    case "loading":
      return "blue"
    case "success":
      return "green"
    case "error":
      return "red"
  }
}
\`\`\`

## Model state with discriminated unions

Instead of optional fields that may or may not be set, describe each state explicitly:

\`\`\`typescript
type Request<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string }
\`\`\`

Inside a \`switch\` on \`status\`, TypeScript narrows the type automatically, so \`data\` is only accessible when it actually exists.

## Use utility types

Built-in helpers avoid duplicated type definitions:

- **\`Pick\` and \`Omit\`** to derive smaller shapes from an existing type
- **\`Partial\` and \`Required\`** to relax or enforce optional fields
- **\`Record\`** to describe dictionaries with known keys
- **\`ReturnType\` and \`Awaited\`** to infer types from functions

## Validate data at the boundaries

Types disappear at runtime. When data comes from an API, a form or a database, validate it with a schema library such as Zod and infer the type from the schema:

\`\`\`typescript
import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
})

type User = z.infer<typeof userSchema>
\`\`\`

## Use \`satisfies\` to keep precise types

The \`satisfies\` operator checks a value against a type without widening it, which keeps literal types available for autocomplete and narrowing.

## Conclusion

Strict compiler settings, explicit state modelling and validation at the edges give you most of TypeScript's benefits. Adopt them gradually and your codebase will become easier to refactor and safer to ship.
`,
    excerpt:
      "Learn advanced TypeScript techniques that will help you write more robust and maintainable code.",
    date: "2024-02-28",
    category: "TypeScript",
    readTime: "7 min read",
    slug: "typescript-tips-better-code-quality",
    author: "Gilles SOB",
  },
  {
    id: 5,
    title: "Database Optimization Strategies",
    content: `
# Database Optimization Strategies

Most performance problems in web applications end up in the database. The good news is that a handful of well-understood techniques solve the majority of them.

## Measure before you optimize

Never guess. Use \`EXPLAIN\` (or \`EXPLAIN ANALYZE\`) to see how the database executes a query, and enable the slow query log to find the statements that matter.

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 42 ORDER BY created_at DESC LIMIT 20;
\`\`\`

## Add the right indexes

An index lets the database find rows without scanning the whole table. Index the columns used in \`WHERE\`, \`JOIN\` and \`ORDER BY\` clauses:

\`\`\`sql
CREATE INDEX idx_orders_customer_created
ON orders (customer_id, created_at DESC);
\`\`\`

Keep in mind that every index slows down writes and uses disk space, so remove the ones that are never used.

## Avoid the N+1 query problem

Loading a list and then querying related data row by row multiplies the number of queries. In Laravel, use eager loading:

\`\`\`php
$orders = Order::with('customer', 'items')->latest()->paginate(20);
\`\`\`

## Select only what you need

Avoid \`SELECT *\`. Fetching fewer columns reduces I/O, memory usage and network transfer, and lets the database use covering indexes.

## Paginate large result sets

Offset pagination becomes slow on deep pages. For large tables, prefer keyset pagination:

\`\`\`sql
SELECT id, title FROM posts
WHERE id < 1000
ORDER BY id DESC
LIMIT 20;
\`\`\`

## Cache what does not change often

- **Query results** for expensive reports
- **Computed counters** instead of counting rows on every request
- **Reference data** such as categories or settings

Redis or the built-in cache of your framework are good starting points, as long as you plan how the cache is invalidated.

## Keep the schema healthy

1. Use appropriate data types (for example integers instead of strings for identifiers)
2. Normalize to avoid duplication, and denormalize deliberately when reads dominate
3. Archive or partition very large historical tables

## Conclusion

Measure first, index deliberately, avoid unnecessary queries and cache wisely. These habits keep applications fast as data grows.
`,
    excerpt:
      "Practical approaches to optimize database performance in web applications, from indexing to query optimization.",
    date: "2024-02-20",
    category: "Database",
    readTime: "10 min read",
    slug: "database-optimization-strategies",
    author: "Gilles SOB",
  },
  {
    id: 6,
    title: "Modern CSS Techniques for Responsive Design",
    content: `
# Modern CSS Techniques for Responsive Design

CSS has evolved a lot. Many layouts that once required JavaScript or hacks are now a few lines of native CSS.

## Grid with auto-fit

Create a responsive card grid without a single media query:

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
\`\`\`

The browser fits as many columns as possible and wraps the rest automatically.

## Flexbox for one-dimensional layouts

Flexbox remains the best tool for navigation bars, toolbars and aligning items along a single axis:

\`\`\`css
.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
\`\`\`

## Container queries

Media queries respond to the viewport. Container queries respond to the size of the parent, which makes components truly reusable:

\`\`\`css
.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## Fluid typography with clamp()

\`clamp()\` scales a value between a minimum and a maximum:

\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}
\`\`\`

## Modern viewport units

Use \`dvh\`, \`svh\` and \`lvh\` instead of \`vh\` to handle mobile browsers whose address bar changes the viewport height.

## Useful modern features

- **\`aspect-ratio\`** to keep media at a fixed ratio
- **\`gap\`** for spacing in both Grid and Flexbox
- **\`:has()\`** to style a parent based on its children
- **Custom properties** for theming and dark mode

## Conclusion

Combining Grid, Flexbox, container queries and fluid sizing produces layouts that adapt smoothly to any screen with less code and no extra JavaScript.
`,
    excerpt:
      "Explore modern CSS features like Grid, Flexbox, and Container Queries for creating responsive layouts.",
    date: "2024-02-15",
    category: "CSS",
    readTime: "6 min read",
    slug: "modern-css-techniques-responsive-design",
    author: "Gilles SOB",
  },
]
