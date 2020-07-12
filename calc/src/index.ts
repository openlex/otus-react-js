import { createInterface } from 'readline';

const rl = createInterface({
	input: process.stdin,
	output: process.stdout,
});

const question = (): Promise<null> =>
	new Promise(resolve => {
		rl.question('> ', (answer: string) => {
			if (answer !== undefined) {
				// eslint-disable-next-line no-console
				console.log(`Result: ${answer}`);
			}

			resolve();
		});
	});

async function app(): Promise<null> {
	while (true) {
		await question();
	}
}

app();
