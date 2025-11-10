declare module 'psl' {
  /**
   * Return the registered domain (e.g. 'example.co.uk' -> 'example.co.uk') or null
   */
  export function get(domain: string): string | null;

  /**
   * Parse a domain into parts. Keep this generic to avoid strict coupling.
   */
  export function parse(domain: string): { tld: string | null; domain: string | null; subdomain: string | null } | null;

  const psl: {
    get(domain: string): string | null;
    parse(domain: string): { tld: string | null; domain: string | null; subdomain: string | null } | null;
  };

  export default psl;
}
