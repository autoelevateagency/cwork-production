export type Locale = "EN" | "UR";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    productions: string;
    capabilities: string;
    about: string;
    contact: string;
    enquiry: string;
    menu: string;
    homeAria: string;
    mainAria: string;
  };
  hero: {
    line1: string;
    line2Before: string;
    line2Accent: string;
    body: string;
    cta: string;
    secondary: string;
    sceneAria: string;
    scenePlaceholder: string;
    introAria: string;
  };
  statement: {
    title: string;
    titleEm: string;
    body: string;
  };
  capabilities: {
    laserTitle: string;
    laserAccent: string;
    laserBody: string;
    laserSceneAria: string;
    jetTitle: string;
    jetBody: string;
    jetSceneAria: string;
    liveTitle: string;
    liveBody1: string;
    liveBody2: string;
    placeholder: string;
  };
  productions: {
    title: string;
    titleAccent: string;
    prevAria: string;
    nextAria: string;
    stripAria: string;
    items: Array<{
      title: string;
      body: string;
      sceneAria: string;
      placeholder: string;
      color: string;
      beams: number;
    }>;
  };
  tech: {
    title: string;
    titleLine2: string;
    titleAccent: string;
    body: string;
    diagramAria: string;
    laserLabel: string;
    jetLabel: string;
    note: string;
  };
  process: {
    title: string;
    titleAccent: string;
    steps: Array<{
      number: string;
      title: string;
      body: string;
    }>;
  };
  cta: {
    title: string;
    titleLine2: string;
    titleAccent: string;
    body: string;
    button: string;
    aria: string;
  };
  enquiry: {
    title: string;
    body: string;
    email: string;
    phone: string;
    phoneHref: string;
    name: string;
    emailLabel: string;
    company: string;
    companyHint: string;
    eventType: string;
    eventTypeHint: string;
    eventTypes: string[];
    eventDate: string;
    eventDateHint: string;
    venue: string;
    venueHint: string;
    audience: string;
    audienceHint: string;
    needs: string;
    needsHint: string;
    needsPlaceholder: string;
    details: string;
    detailsHint: string;
    submit: string;
    nameError: string;
    emailError: string;
    fixFields: string;
    mailtoFallback: string;
    sendSuccess: string;
    sendFail: string;
  };
  footer: {
    tagline: string;
    explore: string;
    contact: string;
    rights: string;
  };
};
