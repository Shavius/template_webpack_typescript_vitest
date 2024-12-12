import { describe, it, expect } from "vitest";

import Card from "../modules/Card";

describe("Card", () => {
	it("createCard", () => {
		const card = new Card("card", "body");
		const cardElement = card.createCard("Card - 1");

		expect(cardElement.outerHTML).toBe('<div class="card"><div class="card__title">Card - 1</div></div>');
	});

	it("parseCard", () => {
		const card = new Card("card", "body");
		card.parseCard("Card - 1");

		const cardFromElement = document.querySelector(".card");

		expect(cardFromElement?.outerHTML).toBe('<div class="card"><div class="card__title">Card - 1</div></div>');
	});

	it("parseCard no name", () => {
		const card = new Card("card2", "body");
		card.parseCard();

		const cardFromElement = document.querySelector(".card2");

		expect(cardFromElement?.outerHTML).toBe(
			'<div class="card2"><div class="card2__title">No Title Name</div></div>',
		);
	});

	it("No Root Dir", () => {
		const card = new Card("card-person", ".card-user");
		card.parseCard();

		const cardFromElement = document.querySelector(".card-person");

		expect(cardFromElement).toBe(null);
	});
});
