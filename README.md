# CommunityAI

A lightweight, open-source community help desk starter. CommunityAI gives small developer communities a simple place to publish FAQs, search helpful resources, and collect questions from members.

> **Status:** Starter project / community prototype. It currently runs entirely in the browser and does not use an AI model or send data to a server.

## Features

- Search community FAQs and learning resources.
- Browse topics such as getting started, Git, web development, and contributing.
- Submit a question through a local demo form.
- Responsive layout for desktop and mobile.
- No API keys, build tools, or dependencies required.

## Run locally

1. Download or clone this repository.
2. Open `index.html` in your browser.

Or run a local server:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Customize

Edit `data.js` to add your community's FAQs and resources. Update the project name and links in `index.html`.

## Roadmap

- [ ] Connect a backend to store submitted questions.
- [ ] Add moderator review and spam protection.
- [ ] Add an optional LLM-powered answer assistant.
- [ ] Add user accounts and community-specific resource collections.

## Privacy

This starter has no analytics, tracking, account system, or backend. The question form is a front-end demo: it displays a confirmation but does not transmit or save submissions.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Please open an issue before making large changes.

## License

MIT. See [LICENSE](LICENSE).
