import { useEffect } from "react";

function updateHeadElement(selector, createElement, attribute, value, cleanups) {
  let element = document.querySelector(selector);
  const wasCreated = !element;

  if (!element) {
    element = createElement();
    document.head.appendChild(element);
  }

  const previousValue = element.getAttribute(attribute);
  element.setAttribute(attribute, value);

  cleanups.push(() => {
    if (wasCreated) {
      element.remove();
    } else if (previousValue === null) {
      element.removeAttribute(attribute);
    } else {
      element.setAttribute(attribute, previousValue);
    }
  });
}

export function useHead({ title, description, canonical, metas = [] }) {
  useEffect(() => {
    const prevTitle = document.title;
    const cleanups = [];

    if (title) document.title = title;
    if (description) {
      updateHeadElement(
        'meta[name="description"]',
        () => {
          const element = document.createElement("meta");
          element.setAttribute("name", "description");
          return element;
        },
        "content",
        description,
        cleanups
      );
    }
    if (canonical) {
      updateHeadElement(
        'link[rel="canonical"]',
        () => {
          const element = document.createElement("link");
          element.setAttribute("rel", "canonical");
          return element;
        },
        "href",
        canonical,
        cleanups
      );
    }

    if (Array.isArray(metas)) {
      metas.forEach((m) => {
        if (!m || !m.content) return;
        if (m.name) {
          updateHeadElement(
            `meta[name="${m.name}"]`,
            () => {
              const element = document.createElement("meta");
              element.setAttribute("name", m.name);
              return element;
            },
            "content",
            m.content,
            cleanups
          );
        }
        if (m.property) {
          updateHeadElement(
            `meta[property="${m.property}"]`,
            () => {
              const element = document.createElement("meta");
              element.setAttribute("property", m.property);
              return element;
            },
            "content",
            m.content,
            cleanups
          );
        }
      });
    }

    return () => {
      cleanups.reverse().forEach((cleanup) => cleanup());
      document.title = prevTitle;
    };
  }, [title, description, canonical, metas]);
}
