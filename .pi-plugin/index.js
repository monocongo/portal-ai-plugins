const workflows = {
  setup: "Set up and authenticate Spotify Portal",
  doctor: "Diagnose Portal access without changing state",
  search: "Search the software catalog and technical documentation",
  service: "Inspect a Portal service",
  actions: "Discover, inspect, and invoke Portal actions",
  feedback: "Submit Portal CLI feedback",
};

export default function portal(pi) {
  for (const [name, description] of Object.entries(workflows)) {
    pi.registerCommand(`portal:${name}`, {
      description,
      handler: (args) =>
        pi.sendUserMessage(`/skill:${name} ${args}`.trim(), {
          expandPromptTemplates: true,
        }),
    });
  }
}
