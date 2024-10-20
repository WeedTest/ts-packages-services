import Filesystem from 'utils/src/filesystem.util';

export default class RetrieveList {
	public static run(name: string): string[] {
		const raw = Filesystem.read(`storage/${name}`).trim();
		if (raw.length === 0) return [];
		return raw.split(/\r?\n/);
	}
}
