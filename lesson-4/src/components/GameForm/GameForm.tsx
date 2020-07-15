import * as React from 'react';
import * as s from './GameForm.scss';
import cn from 'classnames';
import { Panel } from '@components';

export interface IGameFormProps {
}

export interface IGameFormState {
}

export class GameForm extends React.Component<IGameFormProps, IGameFormState> {
	state: IGameFormState = {};

	render() {

		return (
			<Panel className={s.block}>
				<label className={s.label}>Заголовок<input className={s.input} type="text"/></label>
				<label className={s.label}>Рейтинг<input className={s.input} type="number" min="0" max="5"/></label>
				<label className={s.label}>Описание<textarea className={cn(s.description, s.input)}/></label>
				<label className={s.label}>Жанры, через запятую<input className={s.input} type="text"/></label>
			</Panel>
		);
	}
}
