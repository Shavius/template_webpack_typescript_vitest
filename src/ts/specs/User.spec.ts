import { describe, it, expect } from "vitest";

import User from "../modules/User";

describe("User", () => {
	it("getInfo", () => {
		const user = new User("User");

		expect(user.getInfo()).toBe("User");
	});
});
