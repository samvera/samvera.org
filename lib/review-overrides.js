// DEV-ONLY review overlay (community review build).
// Patches specific Contentful fields with the accuracy-passed, veto-compliant copy proposed in
// outputs/09-contentful-reconciliation/samvera.org.md. Live Contentful is never written; this only
// rewrites fetched results in memory, and only when NEXT_PUBLIC_REVIEW_OVERRIDES === "true".
// Keyed by Contentful entry id + field. Remove this overlay (and the flag) for a vanilla run.

// entry id -> field -> proposed plain text (rich-text fields are rebuilt; string fields set directly)
const OVERRIDES = {
  // Application-type card title used the loose OAIS term "Preservation" in a standalone header.
  ZT7fk7o6VoSPS1EO78qwY: {
    title: "Data Repositories",
  },
  // featuredApp Hyku description: "robust" (unverifiable) and "preserve" (veto #3).
  "3cNQsK6RMLEpVNUAvCXirV": {
    description:
      "Hyku is a multi-tenant digital repository platform built on the Samvera codebase. Institutions and consortia can configure it to their own metadata models and deploy it as a shared service to manage and provide access to their collections.",
  },
  // applicationTypes description: Hyku sentence carried "robust / easy to install / configure / maintain".
  // The Avalon sentence is retained (its only open question is currency) with the stale "now available" softened.
  "1gZrZYkl3JSnAWtb8ojNOB": {
    description:
      "The Avalon Media System is a collaborative Samvera-based project for managing and providing online access to digital video and audio, available as a Samvera solution bundle. Hyku is the result of a community collaboration that extends the Samvera codebase into a multi-tenant digital repository platform, which institutions and consortia can configure to their own metadata models and deploy as a shared service.",
  },
};

const DELETES = new Set([]);

function richText(text) {
  return {
    nodeType: "document",
    data: {},
    content: text.split(/\n\n+/).map((p) => ({
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: p, marks: [], data: {} }],
    })),
  };
}

export function applyReviewOverrides(items) {
  if (!items || process.env.NEXT_PUBLIC_REVIEW_OVERRIDES !== "true") return items;
  const out = [];
  for (const it of items) {
    const id = it && it.sys && it.sys.id;
    if (id && DELETES.has(id)) continue;
    if (id && OVERRIDES[id] && it.fields) {
      for (const [field, value] of Object.entries(OVERRIDES[id])) {
        const cur = it.fields[field];
        it.fields[field] =
          cur && typeof cur === "object" && cur.nodeType ? richText(value) : value;
      }
    }
    out.push(it);
  }
  return out;
}
