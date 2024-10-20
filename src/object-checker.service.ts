export default class ObjectChecker {
	public run(obj: Object): void {
		if (!Object.values(obj).every((value) => this.validate(value))) {
			throw new Error('One or more object entries are empty.');
		}
	}

	private validate(value: any) {
		return value !== null && value !== undefined && value !== '';
	}
}
