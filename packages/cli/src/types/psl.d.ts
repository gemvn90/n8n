// Minimal ambient declaration for the `psl` package to satisfy TypeScript in the monorepo build.
// The real package doesn't ship types; downstream code expects runtime import only.
declare module 'psl';
