import Filesystem from 'utils/src/filesystem.util';
import DiscardLineService from './discard-line.service';

export default class ExcludeToken {
    public static run(token: string, folder:string): void {
        Filesystem.append(`storage/${folder}/excludes.txt`, token);
        DiscardLineService.run(`${folder}/list.txt`, token);
    }
}