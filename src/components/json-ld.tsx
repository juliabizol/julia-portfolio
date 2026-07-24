/** Renders a JSON-LD payload as a <script> tag, per Next.js's documented pattern.
 * `<` is escaped to its unicode form since JSON.stringify doesn't sanitize
 * against XSS on its own. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
