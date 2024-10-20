import * as os from 'os';
import RetrieveList from "./retrieve-list.service";
import Filesystem from 'utils/src/filesystem.util';

export default class DiscardLine{
    public static run(path: string, needles: string[] | string): void {
        if (typeof needles === 'string') {
            needles = [needles];
        }
        Filesystem.write(`storage/${path}`, RetrieveList.run(path)
            .filter(line => !needles.includes(line))
            .join(os.EOL)
            .trim());
    }
}