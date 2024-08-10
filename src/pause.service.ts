import readline from 'readline';

export default class Pause {
    public static async run(exit: number = 0): Promise<void> {
        return new Promise((resolve) => {
            const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
            rl.question('Press any key to continue...', () => {
                rl.close();
                process.exit(exit);
            });
        });
    }
}