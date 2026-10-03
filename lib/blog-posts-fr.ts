type FrenchPost = { title: string; excerpt: string; content: string }

export const blogPostsFr: Record<string, FrenchPost> = {
  "building-scalable-web-applications-nextjs-15": {
    title: "Créer des applications web évolutives avec Next.js 15",
    excerpt:
      "Découvrez les nouveautés de Next.js 15 et comment elles aident à construire des applications web plus performantes et évolutives.",
    content: `
# Créer des applications web évolutives avec Next.js 15

Next.js 15 introduit plusieurs nouveautés qui facilitent la création d'applications web évolutives. Dans ce guide, nous passons en revue les principales améliorations et la façon de les exploiter dans vos projets.

## Améliorations de l'App Router

L'App Router de Next.js 15 apporte des gains de performance importants et de nouvelles possibilités :

- **Stratégies de cache améliorées** pour de meilleures performances
- **Server Components renforcés** avec un meilleur streaming
- **Nouvelles capacités de middleware** pour une logique de routage avancée

## La révolution des Server Actions

Les Server Actions ont été affinées pour offrir une expérience fullstack plus fluide :

\`\`\`typescript
'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  // Opérations en base de données ici
  return { success: true, user: { name, email } }
}
\`\`\`

## Optimisations de performance

Next.js 15 inclut plusieurs optimisations dès l'installation :

1. **Meilleur découpage des bundles** pour des chargements initiaux plus légers
2. **Meilleur tree shaking** pour éliminer le code inutilisé
3. **Optimisation d'images améliorée** avec la prise en charge de WebP et AVIF

## Conclusion

Next.js 15 marque une avancée importante dans le développement web basé sur React. Ses performances accrues, sa meilleure expérience développeur et ses capacités d'évolutivité en font un excellent choix pour les applications web modernes.
    `,
  },

  "laravel-best-practices-modern-development": {
    title: "Bonnes pratiques Laravel pour le développement moderne",
    excerpt:
      "Découvrez les patterns et pratiques Laravel essentiels pour rendre vos applications PHP plus maintenables et plus sûres.",
    content: `
# Bonnes pratiques Laravel pour le développement moderne

Laravel reste l'un des frameworks PHP les plus populaires, et pour de bonnes raisons. Sa syntaxe élégante, ses fonctionnalités puissantes et son écosystème solide en font un excellent choix pour le développement web. Voici les bonnes pratiques que j'ai apprises au fil de mes années de développement Laravel.

## Structure et organisation du projet

Un projet Laravel bien organisé est essentiel à la maintenabilité :

### Le pattern Service Layer

Plutôt que de mettre la logique métier dans les contrôleurs, utilisez des classes de service :

\`\`\`php
<?php

namespace App\\Services;

class UserService
{
    public function createUser(array $data): User
    {
        // Validation et logique métier ici
        return User::create($data);
    }
}
\`\`\`

### Le pattern Repository

Pour une logique d'accès aux données complexe, implémentez le pattern repository :

\`\`\`php
<?php

namespace App\\Repositories;

interface UserRepositoryInterface
{
    public function findByEmail(string $email): ?User;
    public function create(array $data): User;
}
\`\`\`

## Bonnes pratiques côté base de données

### Gestion des migrations

Utilisez toujours des migrations pour modifier la base de données :

\`\`\`php
Schema::table('users', function (Blueprint $table) {
    $table->string('phone')->nullable()->after('email');
    $table->index('phone');
});
\`\`\`

### Optimisation d'Eloquent

Utilisez le chargement anticipé (eager loading) pour éviter les requêtes N+1 :

\`\`\`php
$users = User::with(['posts', 'comments'])->get();
\`\`\`

## Sécurité

Laravel fournit d'excellentes fonctionnalités de sécurité dès l'installation :

1. **Protection CSRF** - Activée par défaut
2. **Prévention des injections SQL** - Utilisez l'ORM Eloquent
3. **Protection XSS** - Les templates Blade échappent automatiquement les sorties
4. **Authentification** - Utilisez le système d'authentification intégré de Laravel

## Stratégie de tests

Écrivez des tests complets pour vos applications Laravel :

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

Suivre ces bonnes pratiques vous aidera à construire des applications Laravel plus maintenables, plus sûres et plus performantes. Retenez que la cohérence est essentielle : établissez des conventions dès le début et tenez-vous-y tout au long du projet.
    `,
  },

  "react-server-components-future-react": {
    title: "React Server Components : l'avenir de React",
    excerpt:
      "Comprendre les React Server Components et la façon dont ils changent notre manière de concevoir les applications React.",
    content: `
# React Server Components : l'avenir de React

Les React Server Components représentent un changement de paradigme dans notre façon de concevoir les applications React. Ils estompent la frontière entre serveur et client, avec des gains de performance et d'expérience développeur importants.

## Qu'est-ce qu'un Server Component ?

Les Server Components sont des composants React exécutés sur le serveur, qui envoient leur rendu au client. Contrairement au SSR classique, ils ne sont pas hydratés côté client : ils restent côté serveur.

## Principaux avantages

### Performance

1. **Bundle réduit** - Les Server Components n'envoient pas de JavaScript au client
2. **Chargement initial plus rapide** - Moins de JavaScript à analyser et à exécuter
3. **Meilleur SEO** - Le contenu est rendu côté serveur

### Expérience développeur

Les Server Components permettent de :

- Accéder directement aux bases de données depuis les composants
- Utiliser des bibliothèques réservées au serveur sans se soucier de la taille du bundle
- Implémenter une logique serveur complexe sans routes d'API

## Exemple d'implémentation

Voici un Server Component simple qui récupère des données :

\`\`\`tsx
// Ce code s'exécute sur le serveur
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

## Intégration des Client Components

Vous pouvez intégrer sans difficulté des Client Components pour l'interactivité :

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

## Bonnes pratiques

1. **Utilisez les Server Components par défaut** - Ne passez en Client Component que pour l'interactivité
2. **Gardez la frontière client minimale** - Transmettez les données depuis les Server Components
3. **Tirez parti du streaming** - Utilisez Suspense pour de meilleurs états de chargement

## L'avenir

Les Server Components évoluent encore, mais ils représentent l'avenir du développement React. Des frameworks comme Next.js les implémentent déjà, et on peut s'attendre à une adoption plus large dans les prochaines années.

## Conclusion

Les React Server Components offrent une vision convaincante de l'avenir du développement web. En combinant le meilleur du rendu côté serveur avec le modèle de composants de React, ils apportent à la fois des gains de performance et une excellente expérience développeur.
    `,
  },

  "typescript-tips-better-code-quality": {
    title: "Astuces TypeScript pour un code de meilleure qualité",
    excerpt:
      "Apprenez des techniques TypeScript avancées pour écrire du code plus robuste et plus maintenable.",
    content: `
# Astuces TypeScript pour un code de meilleure qualité

TypeScript est le plus utile lorsque vous laissez le compilateur détecter les erreurs avant vos utilisateurs. Ces techniques rendent le code plus sûr sans le rendre plus difficile à lire.

## Activer le mode strict

Commencez par \`"strict": true\` dans votre \`tsconfig.json\`. Il active \`strictNullChecks\`, \`noImplicitAny\` et d'autres vérifications qui suppriment des catégories entières d'erreurs à l'exécution.

## Préférer les unions aux enums dans les cas simples

Les unions de chaînes littérales sont légères, compatibles avec le tree shaking et faciles à compléter automatiquement :

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

## Modéliser l'état avec des unions discriminées

Au lieu de champs optionnels qui peuvent être définis ou non, décrivez chaque état explicitement :

\`\`\`typescript
type Request<T> =
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string }
\`\`\`

Dans un \`switch\` sur \`status\`, TypeScript restreint automatiquement le type : \`data\` n'est accessible que lorsqu'il existe réellement.

## Utiliser les types utilitaires

Les helpers intégrés évitent de dupliquer les définitions de types :

- **\`Pick\` et \`Omit\`** pour dériver des formes plus petites à partir d'un type existant
- **\`Partial\` et \`Required\`** pour assouplir ou imposer des champs optionnels
- **\`Record\`** pour décrire des dictionnaires à clés connues
- **\`ReturnType\` et \`Awaited\`** pour inférer des types à partir de fonctions

## Valider les données aux frontières

Les types disparaissent à l'exécution. Quand les données viennent d'une API, d'un formulaire ou d'une base de données, validez-les avec une bibliothèque de schémas comme Zod et déduisez le type du schéma :

\`\`\`typescript
import { z } from "zod"

const userSchema = z.object({
  id: z.number(),
  email: z.string().email(),
})

type User = z.infer<typeof userSchema>
\`\`\`

## Utiliser \`satisfies\` pour garder des types précis

L'opérateur \`satisfies\` vérifie une valeur par rapport à un type sans l'élargir, ce qui conserve les types littéraux pour l'autocomplétion et le narrowing.

## Conclusion

Un compilateur strict, une modélisation explicite de l'état et une validation aux frontières vous donnent l'essentiel des bénéfices de TypeScript. Adoptez-les progressivement et votre base de code sera plus facile à refactorer et plus sûre à livrer.
    `,
  },

  "database-optimization-strategies": {
    title: "Stratégies d'optimisation des bases de données",
    excerpt:
      "Des approches pratiques pour optimiser les performances des bases de données dans les applications web, des index à l'optimisation des requêtes.",
    content: `
# Stratégies d'optimisation des bases de données

La plupart des problèmes de performance des applications web se retrouvent dans la base de données. Bonne nouvelle : une poignée de techniques bien connues résolvent la majorité d'entre eux.

## Mesurer avant d'optimiser

Ne devinez jamais. Utilisez \`EXPLAIN\` (ou \`EXPLAIN ANALYZE\`) pour voir comment la base exécute une requête, et activez le journal des requêtes lentes pour trouver celles qui comptent.

\`\`\`sql
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 42 ORDER BY created_at DESC LIMIT 20;
\`\`\`

## Ajouter les bons index

Un index permet à la base de trouver des lignes sans parcourir toute la table. Indexez les colonnes utilisées dans les clauses \`WHERE\`, \`JOIN\` et \`ORDER BY\` :

\`\`\`sql
CREATE INDEX idx_orders_customer_created
ON orders (customer_id, created_at DESC);
\`\`\`

Gardez à l'esprit que chaque index ralentit les écritures et occupe de l'espace disque : supprimez ceux qui ne servent jamais.

## Éviter le problème des requêtes N+1

Charger une liste puis interroger les données liées ligne par ligne multiplie le nombre de requêtes. Avec Laravel, utilisez le chargement anticipé :

\`\`\`php
$orders = Order::with('customer', 'items')->latest()->paginate(20);
\`\`\`

## Ne sélectionner que le nécessaire

Évitez \`SELECT *\`. Récupérer moins de colonnes réduit les entrées/sorties, la mémoire et le transfert réseau, et permet à la base d'utiliser des index couvrants.

## Paginer les gros résultats

La pagination par offset devient lente sur les pages profondes. Pour les grandes tables, préférez la pagination par clé :

\`\`\`sql
SELECT id, title FROM posts
WHERE id < 1000
ORDER BY id DESC
LIMIT 20;
\`\`\`

## Mettre en cache ce qui change peu

- **Résultats de requêtes** pour les rapports coûteux
- **Compteurs calculés** plutôt que de compter les lignes à chaque requête
- **Données de référence** comme les catégories ou les paramètres

Redis ou le cache intégré de votre framework sont de bons points de départ, à condition de prévoir l'invalidation du cache.

## Garder un schéma sain

1. Utilisez des types de données adaptés (par exemple des entiers plutôt que des chaînes pour les identifiants)
2. Normalisez pour éviter la duplication, et dénormalisez volontairement quand la lecture domine
3. Archivez ou partitionnez les très grandes tables historiques

## Conclusion

Mesurez d'abord, indexez avec discernement, évitez les requêtes inutiles et cachez à bon escient. Ces habitudes gardent les applications rapides à mesure que les données grossissent.
    `,
  },

  "modern-css-techniques-responsive-design": {
    title: "Techniques CSS modernes pour le design responsive",
    excerpt:
      "Explorez les fonctionnalités CSS modernes comme Grid, Flexbox et les Container Queries pour créer des mises en page responsives.",
    content: `
# Techniques CSS modernes pour le design responsive

Le CSS a beaucoup évolué. Beaucoup de mises en page qui exigeaient autrefois du JavaScript ou des astuces tiennent aujourd'hui en quelques lignes de CSS natif.

## Grid avec auto-fit

Créez une grille de cartes responsive sans une seule media query :

\`\`\`css
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
\`\`\`

Le navigateur place autant de colonnes que possible et passe automatiquement à la ligne.

## Flexbox pour les mises en page à une dimension

Flexbox reste le meilleur outil pour les barres de navigation, les barres d'outils et l'alignement sur un seul axe :

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

Les media queries réagissent à la fenêtre. Les container queries réagissent à la taille du parent, ce qui rend les composants réellement réutilisables :

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

## Typographie fluide avec clamp()

\`clamp()\` ajuste une valeur entre un minimum et un maximum :

\`\`\`css
h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
}
\`\`\`

## Unités de viewport modernes

Utilisez \`dvh\`, \`svh\` et \`lvh\` à la place de \`vh\` pour gérer les navigateurs mobiles dont la barre d'adresse modifie la hauteur de la fenêtre.

## Fonctionnalités modernes utiles

- **\`aspect-ratio\`** pour garder un média à un ratio fixe
- **\`gap\`** pour l'espacement en Grid comme en Flexbox
- **\`:has()\`** pour styler un parent selon ses enfants
- **Les propriétés personnalisées** pour le theming et le mode sombre

## Conclusion

Combiner Grid, Flexbox, container queries et dimensionnement fluide produit des mises en page qui s'adaptent à tous les écrans, avec moins de code et sans JavaScript supplémentaire.
    `,
  },
}
