"use client"

import { Navigation } from "@/components/navigation"
import { BlogPost } from "@/components/blog-post"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
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
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function BlogPostPageClient({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <BlogPost post={post} />
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
