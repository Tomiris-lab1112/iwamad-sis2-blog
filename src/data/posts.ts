export interface Post {
  id: number
  title: string
  date: string
  excerpt: string
  body: string[]
  likes: number
}

// Add one more object here and a new card and a new page appear.
// No component needs to change.
export const posts: Post[] = [
  {
    id: 1,
    title: 'Setting up my developer environment',
    date: '2026-09-08',
    excerpt: 'Node.js, VS Code and Git: my first week of tools.',
    body: [
      'In the first week I installed Node.js, VS Code and Git and connected them to GitHub.',
      'My first Pull Request felt strange, but now I understand why every change goes through one.',
    ],
    likes: 12,
  },
  {
    id: 2,
    title: 'Making a page responsive',
    date: '2026-09-15',
    excerpt: 'A profile card that works on a phone and on a laptop.',
    body: [
      'I built a profile card with HTML and CSS and used Tailwind to change the layout on wider screens.',
      'Testing on a narrow window showed me problems that I never saw on my big screen.',
    ],
    likes: 8,
  },
  {
    id: 3,
    title: 'Why I moved my card to React',
    date: '2026-09-22',
    excerpt: 'Components and props instead of copy-pasted HTML.',
    body: [
      'After the Vite setup I split the profile card into small components.',
      'Props let me reuse one component many times with different data.',
    ],
    likes: 15,
  },
  {
    id: 4,
    title: 'TypeScript found my bug',
    date: '2026-09-29',
    excerpt: 'A typed prop stopped me from passing the wrong value.',
    body: [
      'I forgot a required prop and the editor showed the error before I even opened the browser.',
      'Now I describe my data with types first, and the code becomes easier to read.',
    ],
    likes: 5,
  },
  {
    id: 5,
    title: 'Learning React Router',
    date: '2026-10-06',
    excerpt: 'One layout, many pages, and no page reload.',
    body: [
      'A layout route keeps the header and footer in place while only the page in the middle changes.',
      'NavLink marks the current page, which is useful for the reader.',
    ],
    likes: 9,
  },
  {
    id: 6,
    title: 'Publishing on GitHub Pages',
    date: '2026-10-13',
    excerpt: 'The base path and the docs folder.',
    body: [
      'A project site lives under the repository name, so Vite needs the right base setting.',
      'I also learned why a refresh on a post page needs a copy of index.html named 404.html.',
    ],
    likes: 7,
  },
]
