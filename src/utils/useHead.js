import { useEffect } from "react";

function upsertMetaByName(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    tag.setAttribute("data-managed-head", "true");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    tag.setAttribute("data-managed-head", "true");
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(href) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("data-managed-head", "true");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function useHead({ title, description, canonical, metas = [] }) {
  useEffect(() => {
    const prevTitle = document.title;

    if (title) document.title = title;
    if (description) upsertMetaByName("description", description);
    if (canonical) upsertCanonical(canonical);

    if (Array.isArray(metas)) {
      metas.forEach((m) => {
        if (!m || !m.content) return;
        if (m.name) upsertMetaByName(m.name, m.content);
        if (m.property) upsertMetaByProperty(m.property, m.content);
      });
    }

    return () => {
      document
        .querySelectorAll('[data-managed-head="true"]')
        .forEach((el) => el.remove());
      document.title = prevTitle;
    };
  }, [title, description, canonical, metas]);
}