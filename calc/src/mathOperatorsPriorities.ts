enum EPriorities {
	FIRST,
	SECOND,
}

export const mathOperatorsPriorities: { [key: string]: EPriorities } = {
	"*": EPriorities.FIRST,
	"/": EPriorities.FIRST,
	"+": EPriorities.SECOND,
	"-": EPriorities.SECOND,
};
