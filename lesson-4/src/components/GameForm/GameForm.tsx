import * as React from 'react';
import * as s from './GameForm.scss';
import cn from 'classnames';
import { Button, FieldInput, Panel, IFieldInputData } from '@components';
import { IGame } from '@types';

export interface IGameFormProps {
	onAddGame(game: {
		title: string;
		genres?: string[];
		description?: string;
		rating?: number;
	}): void;
}
//
// export interface IGameFormState {
// 	title?: string;
// 	genres?: string;
// 	rating?: string;
// 	description?: string;
// }
//
// const initialState = {
// 	title: '',
// 	genres: '',
// 	rating: '',
// 	description: '',
// }

export interface IGameFormState {
	title?: string;
	genres?: string;
	rating?: string;
	description?: string;
}

const initialState = {
	title: '',
	genres: '',
	rating: '',
	description: '',
}

export class GameForm extends React.Component<IGameFormProps, IGameFormState> {
	constructor(props: IGameFormProps) {
		super(props);

		this.state = initialState;

		this.onChangeField = this.onChangeField.bind(this);
		this.addGame = this.addGame.bind(this);
		this.resetForm = this.resetForm.bind(this);
	}

	public onChangeField(data: IFieldInputData) {
		this.setState({
			[data.name]: data.value,
		});
	}

	addGame() {
		const {
			title,
			genres,
			rating,
			description,
		} = this.state;

		if (title?.length) {
			this.props.onAddGame({
				title,
				rating: Number(rating),
				description,
				genres: genres?.split(',').map(genre => genre.trim()),
			})

			this.resetForm();
		}
	}

	resetForm() {
		this.setState({
			...initialState,
		})
	}

	render() {
		const {
			title,
			genres,
			rating,
			description,
		} = this.state;

		return (
			<Panel className={s.block}>
				<FieldInput value={title} name="title" className={s.label} onChange={this.onChangeField} label="Заголовок"/>
				<FieldInput value={rating} name="rating" className={s.label} onChange={this.onChangeField} label="Рейтинг" type="number"/>
				<FieldInput value={description} name="description" className={s.label} onChange={this.onChangeField} label="Описание" isTextArea/>
				<FieldInput value={genres} name="genres" className={s.label} onChange={this.onChangeField} label="Жанры, через запятую"/>
				<div>
					<Button onClick={this.addGame} title="Добавить игру"/>
					<Button onClick={this.resetForm} title="Очистить поля"/>
				</div>
			</Panel>
		);
	}
}
