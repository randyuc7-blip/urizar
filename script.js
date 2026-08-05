(function () {
  const config = window.siteConfig;

  if (!config) {
    return;
  }

  const byId = (id) => document.getElementById(id);
  const root = document.documentElement;
  const absoluteUrl = (value) => {
    if (!value) {
      return "";
    }

    if (/^https?:\/\//i.test(value)) {
      return value;
    }

    const baseUrl = config.seo && config.seo.siteUrl ? config.seo.siteUrl.replace(/\/$/, "") : window.location.origin;
    const normalizedPath = value.startsWith("/") ? value : `/${value}`;
    return `${baseUrl}${normalizedPath}`;
  };
  const canonicalUrl =
    config.seo && config.seo.canonicalPath ? absoluteUrl(config.seo.canonicalPath) : window.location.href;

  const textMap = {
    brandName: config.businessName,
    heroEyebrow: config.heroEyebrow,
    heroHeadline: config.headline,
    navCta: config.ctaLabel,
    heroCta: config.ctaLabel,
    servicesEyebrow: config.sections.services.eyebrow,
    servicesHeadline: config.sections.services.headline,
    servicesSummaryLabel: config.servicesSummary.label,
    servicesSummaryHeadline: config.servicesSummary.headline,
    architectureEyebrow: config.sections.architecture.eyebrow,
    architectureHeadline: config.sections.architecture.headline,
    architectureDescription: config.sections.architecture.description,
    stepsEyebrow: config.sections.steps.eyebrow,
    stepsHeadline: config.sections.steps.headline,
    stepsDescription: config.sections.steps.description,
    audienceEyebrow: config.sections.audience.eyebrow,
    audienceHeadline: config.sections.audience.headline,
    audienceDescription: config.sections.audience.description,
    audienceLabel: config.audience.label,
    fitCardLabel: config.audience.cardLabel,
    fitCardChip: config.audience.cardChip,
    fitCardHeadline: config.audience.cardHeadline,
    fitCardDescription: config.audience.cardDescription,
    trustEyebrow: config.sections.trust.eyebrow,
    trustHeadline: config.sections.trust.headline,
    trustDescription: config.sections.trust.description,
    proofEyebrow: config.sections.proof.eyebrow,
    proofHeadline: config.sections.proof.headline,
    proofDescription: config.sections.proof.description,
    faqEyebrow: config.sections.faq.eyebrow,
    faqHeadline: config.sections.faq.headline,
    faqDescription: config.sections.faq.description,
    ctaEyebrow: config.sections.cta.eyebrow,
    ctaHeadline: config.sections.cta.headline,
    ctaButton: config.ctaLabel,
    contactEyebrow: config.sections.contact.eyebrow,
    contactHeadline: config.sections.contact.headline,
    contactDescription: config.sections.contact.description,
    contactLanguageNote: config.sections.contact.languageNote
  };

  Object.entries(textMap).forEach(([id, value]) => {
    const node = byId(id);
    if (node) {
      node.textContent = value;
    }
  });

  const servicesGrid = byId("servicesGrid");
  const contactGrid = document.querySelector("#contact .contact-grid");

  if (servicesGrid && contactGrid) {
    contactGrid.appendChild(servicesGrid);
  }

  if (config.accentColor) {
    root.style.setProperty("--accent", config.accentColor);
  }

  if (config.seo) {
    document.title = config.seo.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const robots = document.querySelector('meta[name="robots"]');
    const themeColor = document.querySelector('meta[name="theme-color"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogSiteName = document.querySelector('meta[property="og:site_name"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogImageAlt = document.querySelector('meta[property="og:image:alt"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    const twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (metaDescription) {
      metaDescription.setAttribute("content", config.seo.description);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", config.seo.title);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", config.seo.description);
    }

    if (robots && config.seo.robots) {
      robots.setAttribute("content", config.seo.robots);
    }

    if (themeColor && config.seo.themeColor) {
      themeColor.setAttribute("content", config.seo.themeColor);
    }

    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    if (ogUrl) {
      ogUrl.setAttribute("content", canonicalUrl);
    }

    if (ogSiteName && config.seo.siteName) {
      ogSiteName.setAttribute("content", config.seo.siteName);
    }

    if (ogLocale && config.seo.locale) {
      ogLocale.setAttribute("content", config.seo.locale);
    }

    if (ogImage && config.seo.ogImage) {
      ogImage.setAttribute("content", absoluteUrl(config.seo.ogImage));
    }

    if (ogImageAlt && config.seo.ogImageAlt) {
      ogImageAlt.setAttribute("content", config.seo.ogImageAlt);
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", config.seo.title);
    }

    if (twitterDescription) {
      twitterDescription.setAttribute("content", config.seo.description);
    }

    if (twitterImage && config.seo.ogImage) {
      twitterImage.setAttribute("content", absoluteUrl(config.seo.ogImage));
    }
  } else {
    document.title = config.businessName;
  }

  const structuredData = byId("structuredData");

  if (structuredData) {
    const serviceOffers = (config.services || []).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: absoluteUrl(service.href)
      }
    }));

    const architectureItems = (config.architectureCards || []).map((card, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: card.title,
      url: card.links && card.links[0] ? absoluteUrl(card.links[0].href) : canonicalUrl
    }));

    const trustTopics = Array.from(document.querySelectorAll("#trustItems .trust-item"))
      .map((item) => item.textContent.trim())
      .filter(Boolean);

    const schemaGraph = [
      {
        "@type": "WebSite",
        "@id": `${canonicalUrl}#website`,
        url: canonicalUrl,
        name: config.seo && config.seo.siteName ? config.seo.siteName : config.businessName,
        description: config.seo ? config.seo.description : config.subheadline,
        inLanguage: document.documentElement.lang || "en"
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: config.seo ? config.seo.title : config.businessName,
        isPartOf: {
          "@id": `${canonicalUrl}#website`
        },
        description: config.seo ? config.seo.description : config.subheadline,
        inLanguage: document.documentElement.lang || "en",
        about: trustTopics.map((item) => ({
          "@type": "Thing",
          name: item
        }))
      },
      {
        "@type": "ProfessionalService",
        "@id": `${canonicalUrl}#professional-service`,
        url: canonicalUrl,
        name: config.businessName,
        description: config.seo ? config.seo.description : config.subheadline,
        areaServed: config.serviceArea || "Texas",
        email: config.email,
        image: config.seo && config.seo.ogImage ? absoluteUrl(config.seo.ogImage) : undefined,
        serviceType: (config.services || []).map((service) => service.name),
        makesOffer: serviceOffers,
        sameAs: (((config.footer || {}).socialLinks) || []).map((item) => item.href)
      }
    ];

    if (architectureItems.length > 0) {
      schemaGraph.push({
        "@type": "ItemList",
        "@id": `${canonicalUrl}#content-paths`,
        name: "Core content paths",
        itemListElement: architectureItems
      });
    }

    const proofItems = (((config.proof || {}).items) || []).map((item, index) => ({
      "@type": "CreativeWork",
      position: index + 1,
      name: item.title,
      description: item.body || item.summary,
      url: item.href ? absoluteUrl(item.href) : undefined,
      image: item.image && item.image.src ? absoluteUrl(item.image.src) : undefined
    }));

    if (proofItems.length > 0) {
      schemaGraph.push({
        "@type": "ItemList",
        "@id": `${canonicalUrl}#proof-library`,
        name: "Client proof library",
        itemListElement: proofItems
      });
    }

    structuredData.textContent = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@graph": schemaGraph
      },
      null,
      2
    );
  }

  const previewCard = byId("previewCard");
  if (previewCard && config.previewBackgroundColor) {
    previewCard.style.backgroundColor = config.previewBackgroundColor;
  }

  const heroPoints = byId("heroPoints");
  config.heroPoints.forEach((point) => {
    const item = document.createElement("li");
    item.className = "hero-point";
    item.textContent = point;
    heroPoints.appendChild(item);
  });

  renderLinkRow("heroExploreLinks", config.heroExploreLinks);

  const servicesSummaryList = byId("servicesSummaryList");
  config.servicesSummary.items.forEach((itemConfig) => {
    const article = document.createElement("article");
    article.className = "services-summary-item";
    article.innerHTML = `
      <figure class="services-summary-visual">
        <img src="${itemConfig.image}" alt="${itemConfig.imageAlt}" width="1254" height="1254" loading="lazy" decoding="async" />
      </figure>
      <div class="services-summary-copy">
        <h3>${itemConfig.title}</h3>
        <p class="services-summary-tagline">${itemConfig.tagline}</p>
        <p>${itemConfig.body}</p>
      </div>
    `;
    servicesSummaryList.appendChild(article);
  });

  const architectureGrid = byId("architectureGrid");
  if (architectureGrid) {
    (config.architectureCards || []).forEach((card) => {
      const article = document.createElement("article");
      article.className = "architecture-card";
      article.setAttribute("data-reveal", "");
      article.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <div class="context-link-row architecture-links">
          ${(card.links || [])
            .map((link) => `<a class="context-link-chip" href="${link.href}">${link.label}</a>`)
            .join("")}
        </div>
      `;
      architectureGrid.appendChild(article);
    });
  }

  const audienceList = byId("audienceList");
  if (audienceList) {
    config.audience.list.forEach((itemText) => {
      const item = document.createElement("li");
      item.textContent = itemText;
      audienceList.appendChild(item);
    });
  }

  const fitMetrics = byId("fitMetrics");
  if (fitMetrics) {
    config.audience.metrics.forEach((metric) => {
      const article = document.createElement("article");
      article.className = "metric-card";
      article.innerHTML = `
        <strong>${metric.title}</strong>
        <span>${metric.body}</span>
      `;
      fitMetrics.appendChild(article);
    });
  }

  renderProofLibrary();

  renderLinkRow("faqExploreLinks", config.faqExploreLinks);

  const emailLink = byId("contactEmail");
  if (emailLink) {
    emailLink.textContent = config.email;
    emailLink.href = `mailto:${config.email}`;
  }

  const mobileLeadCapture = config.mobileLeadCapture || {};
  const mobileEnabled = Boolean(mobileLeadCapture.enabled && mobileLeadCapture.phoneHref);
  const contactPhone = byId("contactPhone");
  const contactSms = byId("contactSms");

  if (contactPhone) {
    const showPhone = mobileEnabled && mobileLeadCapture.showPhone !== false;
    contactPhone.hidden = !showPhone;

    if (showPhone) {
      contactPhone.textContent = `${mobileLeadCapture.phoneLabel || "Call"}: ${
        mobileLeadCapture.phoneDisplay || mobileLeadCapture.phoneHref
      }`;
      contactPhone.href = `tel:${mobileLeadCapture.phoneHref}`;
    }
  }

  if (contactSms) {
    const showSms = mobileEnabled && mobileLeadCapture.showSms !== false;
    contactSms.hidden = !showSms;

    if (showSms) {
      const smsBody = mobileLeadCapture.smsMessage
        ? `?&body=${encodeURIComponent(mobileLeadCapture.smsMessage)}`
        : "";
      contactSms.textContent = mobileLeadCapture.smsLabel || "Text us";
      contactSms.href = `sms:${mobileLeadCapture.phoneHref}${smsBody}`;
    }
  }

  const footerConfig = config.footer;

  if (footerConfig) {
    const footerTextMap = {
      footerCtaEyebrow: footerConfig.cta.eyebrow,
      footerCtaHeadline: footerConfig.cta.headline,
      footerCtaDescription: footerConfig.cta.description,
      footerCtaButton: footerConfig.cta.label,
      footerBrandHeading: footerConfig.brandName,
      footerLegalName: footerConfig.legalName,
      footerBrandDescription: footerConfig.brandDescription,
      footerBrandButton: footerConfig.cta.label,
      footerTrustDescription: footerConfig.trustDescription,
      footerAreaLabel: footerConfig.serviceAreaLabel,
      footerServiceArea: footerConfig.serviceArea,
      footerCredit: footerConfig.credit,
      footerCopyright: `Copyright ${new Date().getFullYear()} ${footerConfig.brandName}`
    };

    Object.entries(footerTextMap).forEach(([id, value]) => {
      const node = byId(id);
      if (node) {
        node.textContent = value;
      }
    });

    const footerButton = byId("footerCtaButton");
    footerButton.href = footerConfig.cta.href;

    const footerBrandButton = byId("footerBrandButton");
    footerBrandButton.href = footerConfig.cta.href;

    const footerBrandEmail = byId("footerBrandEmail");
    footerBrandEmail.textContent = footerConfig.contactEmail;
    footerBrandEmail.href = `mailto:${footerConfig.contactEmail}`;

    const footerBrandPhone = byId("footerBrandPhone");
    if (footerBrandPhone) {
      const showFooterPhone = mobileEnabled && mobileLeadCapture.showPhone !== false;
      footerBrandPhone.hidden = !showFooterPhone;

      if (showFooterPhone) {
        footerBrandPhone.textContent = mobileLeadCapture.phoneDisplay || mobileLeadCapture.phoneHref;
        footerBrandPhone.href = `tel:${mobileLeadCapture.phoneHref}`;
      }
    }

    renderFooterLinks("footerServicesList", footerConfig.services);
    renderFooterLinks("footerIndustriesList", footerConfig.industries);
    renderFooterLinks("footerAreasList", footerConfig.areas);
    renderFooterLinks("footerExploreList", footerConfig.exploreLinks);
    renderFooterLinks("footerBottomLinks", footerConfig.bottomLinks, true);
    renderFooterChips("footerTrustSignals", footerConfig.trustSignals);
    renderSocialLinks("footerSocialLinks", footerConfig.socialLinks);
  }

  const revealItems = () => document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealItems().forEach((item) => observer.observe(item));

  const header = byId("siteHeader");
  let lastScrollY = window.scrollY;

  function updateHeader() {
    const currentScrollY = window.scrollY;
    header.classList.toggle("is-scrolled", currentScrollY > 12);

    if (currentScrollY > lastScrollY && currentScrollY > 120) {
      header.classList.add("is-hidden");
    } else {
      header.classList.remove("is-hidden");
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  const form = byId("contactForm");
  const formButton = byId("formButton");
  const formStatus = byId("formStatus");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    formButton.disabled = true;
    formButton.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`);
      }

      form.reset();
      formStatus.textContent = "Thanks. Your request was sent successfully.";
      formStatus.classList.add("is-success");
    } catch (error) {
      formStatus.textContent = "We could not send your request. Please try again or contact us directly.";
      formStatus.classList.add("is-error");
    } finally {
      formButton.disabled = false;
      formButton.textContent = "Send Request";
    }
  });

  function renderFooterLinks(targetId, links, isNavRow) {
    const container = byId(targetId);

    if (!container || !Array.isArray(links)) {
      return;
    }

    links.forEach((link) => {
      const linkNode = document.createElement("a");
      linkNode.href = link.href;
      linkNode.textContent = link.label;

      if (isNavRow) {
        container.appendChild(linkNode);
        return;
      }

      const item = document.createElement("li");
      item.appendChild(linkNode);
      container.appendChild(item);
    });
  }

  function renderLinkRow(targetId, links) {
    const container = byId(targetId);

    if (!container || !Array.isArray(links)) {
      return;
    }

    links.forEach((link) => {
      const linkNode = document.createElement("a");
      linkNode.className = "context-link-chip";
      linkNode.href = link.href;
      linkNode.textContent = link.label;

      if (targetId === "heroExploreLinks") {
        linkNode.insertAdjacentHTML(
          "beforeend",
          `<span class="cta-interaction-cue" aria-hidden="true">
            <svg viewBox="0 0 32 32" focusable="false">
              <path d="M16 24V9.5c0-1.2-1-2.2-2.2-2.2s-2.2 1-2.2 2.2v8.3l-1.3-1.4c-.9-.9-2.3-.9-3.2 0-.8.8-.9 2.1-.2 3l4.7 6.1c1.1 1.4 2.8 2.2 4.6 2.2h2.6c3.2 0 5.8-2.6 5.8-5.8v-5.1c0-1.2-1-2.2-2.2-2.2-.7 0-1.3.3-1.7.8-.2-1-1.1-1.8-2.2-1.8-.7 0-1.3.3-1.7.8"></path>
            </svg>
          </span>`
        );
      }

      container.appendChild(linkNode);
    });
  }

  function renderProofLibrary() {
    const proofGrid = byId("proofGrid");
    const proofConfig = config.proof || {};

    if (!proofGrid) {
      return;
    }

    const proofItems = Array.isArray(proofConfig.items) ? proofConfig.items.filter((item) => item && item.title) : [];
    proofGrid.setAttribute("aria-label", "Client work");

    proofItems.forEach((item) => {
      const article = document.createElement("article");
      article.className = "proof-card proof-card-live";
      article.setAttribute("data-reveal", "");

      appendProofMedia(article, item);

      const meta = document.createElement("div");
      meta.className = "proof-card-meta";

      if (item.label || item.type || item.service) {
        const label = document.createElement("span");
        label.className = "proof-type";
        label.textContent = item.label || item.type || item.service;
        meta.appendChild(label);
      }

      const title = document.createElement("h3");
      title.textContent = item.title;

      const body = document.createElement("p");
      body.textContent = item.body || item.summary || "";

      meta.append(title, body);

      if (item.client || item.service) {
        const details = document.createElement("p");
        details.className = "proof-detail";
        details.textContent = [item.client, item.service].filter(Boolean).join(" | ");
        meta.appendChild(details);
      }

      if (item.href) {
        const link = document.createElement("a");
        link.className = "proof-link";
        link.href = item.href;
        link.textContent = item.linkLabel || "View case study";
        meta.appendChild(link);
      }

      article.appendChild(meta);
      proofGrid.appendChild(article);
    });
  }

  function appendProofMedia(container, item) {
    if (item.beforeImage && item.afterImage) {
      const comparison = document.createElement("div");
      comparison.className = "proof-comparison";

      [item.beforeImage, item.afterImage].forEach((image, index) => {
        const figure = document.createElement("figure");
        figure.className = "proof-media";

        const label = document.createElement("figcaption");
        label.textContent = index === 0 ? item.beforeLabel || "Before" : item.afterLabel || "After";

        const imageNode = document.createElement("img");
        imageNode.src = image.src;
        imageNode.alt = image.alt || "";
        imageNode.loading = "lazy";
        imageNode.decoding = "async";

        figure.append(imageNode, label);
        comparison.appendChild(figure);
      });

      container.appendChild(comparison);
      return;
    }

    if (item.image && item.image.src) {
      const figure = document.createElement("figure");
      figure.className = "proof-media";

      const imageNode = document.createElement("img");
      imageNode.src = item.image.src;
      imageNode.alt = item.image.alt || "";
      imageNode.loading = "lazy";
      imageNode.decoding = "async";

      figure.appendChild(imageNode);
      container.appendChild(figure);
    }
  }

  function renderFooterChips(targetId, chips) {
    const container = byId(targetId);

    if (!container || !Array.isArray(chips)) {
      return;
    }

    chips.forEach((chipText) => {
      const chip = document.createElement("span");
      chip.className = "footer-chip";
      chip.textContent = chipText;
      container.appendChild(chip);
    });
  }

  function renderSocialLinks(targetId, socialLinks) {
    const container = byId(targetId);

    if (!container || !Array.isArray(socialLinks)) {
      return;
    }

    const icons = {
      youtube:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.6 32.6 0 0 0 0 12a32.6 32.6 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.6 32.6 0 0 0 24 12a32.6 32.6 0 0 0-.5-5.8ZM9.6 15.5v-7L15.8 12l-6.2 3.5Z"/></svg>',
      instagram:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm11.2 1.6a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2.2a2.8 2.8 0 1 0 2.8 2.8A2.8 2.8 0 0 0 12 9.2Z"/></svg>',
      facebook:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.3-1.5 1.6-1.5H17V4.6c-.8-.1-1.5-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H8v3.1h2.8v8Z"/></svg>',
      bluesky:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 11.2c1.6-2.5 3.7-5 6.3-6.8 1.9-1.3 3.4-.6 3.4 1.6 0 1.1-.6 9.1-1 10.4-1.3 4.4-5.8 1.5-9 1.9 5.6.6 7 2.6 3.9 4.7-6 4.2-8.7-1-9.4-2.3-.1-.2-.1-.3-.2-.1-.7 1.3-3.4 6.5-9.4 2.3-3.1-2.1-1.7-4.1 3.9-4.7-3.2-.4-7.7 2.5-9-1.9C.1 15.1-.5 7.1-.5 6c0-2.2 1.5-2.9 3.4-1.6C5.5 6.2 7.6 8.7 9.2 11.2"/></svg>',
      linkedin:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.9 3.5A1.9 1.9 0 1 1 3 5.4a1.9 1.9 0 0 1 1.9-1.9ZM3.2 8h3.4v12H3.2Zm5.5 0H12v1.6h.1a3.6 3.6 0 0 1 3.2-1.8c3.4 0 4 2.2 4 5.2v7h-3.4v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.3H8.7Z"/></svg>'
    };

    socialLinks.forEach((link) => {
      const anchor = document.createElement("a");
      anchor.className = "footer-social-link";
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noreferrer";
      anchor.setAttribute("aria-label", link.label);
      anchor.innerHTML = icons[link.icon] || link.label.slice(0, 1);
      container.appendChild(anchor);
    });
  }
})();
