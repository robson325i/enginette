import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Database from "../../../database/database";
import { LoadingScreen, Input } from "./General";
import { InternalEditor, Editor, EditorTop } from "./Bank";
import { MyInputs, ConnectingRodsDiv } from "./ConnectingRods";

import TuningTable2x1D from "../../../components/TuningTables/2x1D";

const CylinderheadDiv = styled(ConnectingRodsDiv)`
	width: 100%;
	height: calc(100% - 70px);
	padding: 15px;
	display: flex;
	flex-direction: column;
`;

const Cylinderhead = () => {
	let { id } = useParams();
	id = parseInt(id);
	const navigate = useNavigate();
	const [engine, setEngine] = useState(null);

	useEffect(() => {
		const engine = Database.Engines.getById({ id });
		if (!engine) return setEngine(undefined);
		setEngine(engine);
	}, []);

	if (engine === null) {
		return (
			<LoadingScreen>
				<h1>Loading...</h1>
				<p>Not Loading? <br/> Maybe the page encountered an error. Check the console for more details</p>
			</LoadingScreen>
		);
	} else if (engine === undefined) {
		navigate("/");
		return;
	}
	return (
		<CylinderheadDiv>
			<Header engine={engine} />
			<Editor>
				<InternalEditor>
					<EditorTop>
						<h1>Cylinder head</h1>
						{/*
						<img
							src={deleteIcon}
							alt="Delete"
							style={{ transform: "none" }}
						/>
						*/}
					</EditorTop>

					<MyInputs>

						<Input>
							<h1>Chamber volume:</h1>
							<p>cc</p>
							<input
								type="number"
								defaultValue={33}
								min="0"
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

                        <Input>
							<h1>Lift scale:</h1>
							<p></p>
							<input
								type="number"
								defaultValue={1.0}
								min="0"
								step="0.1"
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

                        <Input>
							<h1>Flow attenuation:</h1>
							<p></p>
							<input
								type="number"
								defaultValue={1.0}
								min="0"
								step="0.1"
								onChange={(e) => {
									// TODO: implement the database shit
								}}
							/>
						</Input>

                        <TuningTable2x1D />
						
					</MyInputs>
				</InternalEditor>
			</Editor>
		</CylinderheadDiv>
	);
};

export default Cylinderhead;
