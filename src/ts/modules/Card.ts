export default class Card {
	protected cardClass: string;
	protected classNameRootDir: string;

	constructor(cardClass: string, classNameRootDir: string) {
		this.cardClass = cardClass;
		this.classNameRootDir = classNameRootDir;
	}

	public createCard(titleName: string): HTMLElement {
		const card = document.createElement("div");
		const title = document.createElement("div");

		card.classList.add(`${this.cardClass}`);
		title.classList.add(`${this.cardClass}__title`);
		title.innerHTML = `${titleName}`;

		card.append(title);

		return card;
	}

	public parseCard(titleName = "No Title Name"): void {
		const rootDir = document.querySelector(`${this.classNameRootDir}`);

		if (rootDir) {
			const card = this.createCard(titleName);
			rootDir.append(card);
		} else {
			console.warn("No Fund Root Dir");
		}
	}
}
