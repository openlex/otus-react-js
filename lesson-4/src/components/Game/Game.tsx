import React from 'react';
import { GenreList, Panel } from '@components';
import * as s from './Game.scss';
import cn from 'classnames';

import { IGame } from '@types';

interface IGameProps extends IGame {
	className?: string;
}

export const Game: React.FC<IGameProps> = (props: IGameProps) =>{

	const {
		className,
		title,
		description,
		genres,
		rating,
	} = props;

	return (
		<Panel className={cn(s.block, className)}>
			<div className={s.info}>
				<div className={s.title}>{title}</div>
				{ rating && <div className={s.rating}>{rating}</div> }
			</div>
			{ description && <div className={s.description}>{description}</div> }
			{ genres && <div className={s.genres}>
				<GenreList genres={genres}/>
			</div> }
		</Panel>
	);
}
