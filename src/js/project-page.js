import { getProjectBySlug, projects } from "./projects.js";

function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#039;");
}

function getSlugFromLocation() {
	const params = new URLSearchParams(window.location.search);
	return params.get("slug");
}

function renderProjectList() {
	const wrapper = document.createElement("div");
	wrapper.className = "project-list-groups";

	const groups = [
		{ key: "Manuscripts", label: "(02) / manuscripts" },
		{ key: "Fiction", label: "(04) / fiction" },
		{ key: "Articles", label: "(07) / articles" },
	];

	for (const group of groups) {
		const section = document.createElement("section");
		section.className = "project-list-group";

		const heading = document.createElement("h3");
		heading.className = "project-list-heading";
		heading.textContent = group.label;
		section.appendChild(heading);

		const list = document.createElement("ul");
		list.className = "project-list";

		for (const project of projects.filter((item) => item.category === group.key)) {
			const item = document.createElement("li");
			const link = document.createElement("a");
			link.href = `./project.html?slug=${encodeURIComponent(project.slug)}`;
			link.textContent = project.title;
			item.appendChild(link);
			list.appendChild(item);
		}

		section.appendChild(list);
		wrapper.appendChild(section);
	}

	return wrapper;
}

function setDrawerOpen({ drawer, overlay, openButton }, open) {
	if (!drawer || !overlay) return;

	if (open) {
		drawer.hidden = false;
		overlay.hidden = false;
		requestAnimationFrame(() => {
			drawer.dataset.open = "true";
		});
	} else {
		delete drawer.dataset.open;
		overlay.hidden = true;
		window.setTimeout(() => {
			drawer.hidden = true;
			openButton?.focus();
		}, 220);
	}
}

function main() {
	const slug = getSlugFromLocation();
	const project = slug ? getProjectBySlug(slug) : null;

	const titleEl = document.querySelector("[data-project-title]");
	const dateEl = document.querySelector("[data-project-date]");
	const descEl = document.querySelector("[data-project-description]");
	const bodyEl = document.querySelector("[data-project-body]");
	const drawer = document.querySelector("[data-project-drawer]");
	const overlay = document.querySelector("[data-project-drawer-overlay]");
	const drawerBody = document.querySelector("[data-project-drawer-body]");
	const openListBtn = document.querySelector("[data-open-project-list]");
	const closeListBtn = document.querySelector("[data-close-project-list]");

	drawerBody.replaceChildren(renderProjectList());

	openListBtn?.addEventListener("click", () =>
		setDrawerOpen({ drawer, overlay, openButton: openListBtn }, true),
	);
	closeListBtn?.addEventListener("click", () =>
		setDrawerOpen({ drawer, overlay, openButton: openListBtn }, false),
	);
	overlay?.addEventListener("click", () =>
		setDrawerOpen({ drawer, overlay, openButton: openListBtn }, false),
	);
	window.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			setDrawerOpen({ drawer, overlay, openButton: openListBtn }, false);
		}
	});

	if (!project) {
		titleEl.textContent = "Project not found";
		dateEl.textContent = "";
		descEl.textContent = "The link you opened doesn’t match any project.";
		bodyEl.innerHTML = `<p><a href="./index.html#selected-works">Back to selected works</a></p>`;
		return;
	}

	document.title = `${project.title} | Ahliyah Luna`;
	titleEl.textContent = project.title;
	dateEl.textContent = project.date ?? "";
	descEl.textContent = project.description ?? "";

	if (project.externalUrl) {
		bodyEl.innerHTML = `
			<div class="project-embed-wrap">
				<iframe
					class="project-embed"
					title="${escapeHtml(project.title)}"
					src="${escapeHtml(project.externalUrl)}"
					loading="lazy"
					referrerpolicy="no-referrer"
				></iframe>
			</div>
			<p class="project-embed-fallback">
				If the site blocks embedding, open it in a new tab:
				<a href="${escapeHtml(project.externalUrl)}" target="_blank" rel="noreferrer">Read article</a>
			</p>
		`;
		return;
	}

	if (project.pdf) {
		bodyEl.innerHTML = `
			<h2 class="section-title">FILE</h2>
			<p class="project-link">
				<a href="${escapeHtml(project.pdf)}" target="_blank" rel="noreferrer">Open PDF</a>
			</p>
		`;
		return;
	}

	bodyEl.innerHTML = `
		<h2 class="section-title">PREVIEW</h2>
		<p class="project-muted">Preview assets coming soon.</p>
	`;
}

main();
