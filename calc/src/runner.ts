export const runner = (str: string) => {
	const symbols = str.split(' ');

	symbols.reduce((total: string[], current: string, index: number, arr: string[]) => {
		const isOperator = !Number(current);



		total.push(current);


		return total;
	}, []);


}
