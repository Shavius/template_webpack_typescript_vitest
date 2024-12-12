export default class User {
	protected name: string;

	constructor(name: string) {
		this.name = name;
	}

	public getInfo(): string {
		return this.name;
	}
}
