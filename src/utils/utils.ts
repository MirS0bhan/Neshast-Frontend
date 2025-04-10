export function getLastSlug(path: string): 'login' | 'signup' | undefined {
  const lastSegment = path.split('/').filter(Boolean).pop();
  if (lastSegment === 'login' || lastSegment === 'signup') {
      return lastSegment; // Return either 'login' or 'signup'
  }
  return undefined; // Return undefined if it's neither
}
