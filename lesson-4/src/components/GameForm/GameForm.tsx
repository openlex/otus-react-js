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
				<label className={s.label}>
					<span>Заголовок</span>
					<div className={s.fieldWrapper}>
						<input className={s.input} type="text"/>
					</div>
				</label>
				<label className={s.label}>
					<span>Рейтинг</span>
					<div className={s.fieldWrapper}>
						<input className={s.input} type="number" min="0" max="5"/>
					</div>
				</label>
				<label className={s.label}>
					<span>Описание</span>
					<div className={s.fieldWrapper}>
						<textarea className={cn(s.description, s.input)}/>
					</div>
				</label>
				<label className={s.label}>
					<span>Жанры, через запятую</span>
					<div className={s.fieldWrapper}>
						<input className={s.input} type="text"/>
					</div>
				</label>
			</Panel>
		);
	}
}
