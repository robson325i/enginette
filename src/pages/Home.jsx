import styled from "styled-components";
import plus from "../images/plus.svg";
import x from "../images/x.svg";
import Engine from "../components/Engines/Engine";
import NewEngine from "../components/Engines/NewEngine";
import { useState } from "react";
import DeleteEngine from "../components/Engines/DeleteEngine";

const HomeDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: calc(100% - 70px);
`;

const EngineSelector = styled.div`
	padding: 20px;
	border-radius: 20px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 650px;
	box-shadow: 0px 7px 29px rgba(100, 100, 111, 0.2);
	position: relative;
	> h1 {
		font-size: 48px;
		color: #080b2d;
		margin-bottom: 20px;
	}
`;

const Selector = styled.div`
	width: 100%;
`;

const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 15px;
	> h3 {
		color: #031b4e;
		font-size: 32px;
		font-weight: 500;
	}
	> img {
		width: 30px;
		height: 30px;
		cursor: pointer;
	}
`;

const Engines = styled.div`
	width: 100%;
`;

const Home = () => {
	const [isNewActive, setIsNewActive] = useState(false);
	const toggleIsNewActive = () => {
		setIsNewActive(!isNewActive);
	};

	const [isDeleteActive, setIsDeleteActive] = useState(false);
	const toggleIsDeleteActive = () => {
		setIsDeleteActive(!isDeleteActive);
	};

	return (
		<HomeDiv>
			<EngineSelector>
				{isDeleteActive && (
					<DeleteEngine cancel={toggleIsDeleteActive} />
				)}
				<h1>Enginette</h1>
				<Selector>
					<Top>
						<h3>Engines</h3>
						<img src={plus} onClick={toggleIsNewActive} alt="New" />
					</Top>
					<Engines>
						<Engine deleteClick={toggleIsDeleteActive}>
							Honda v12
						</Engine>
						{isNewActive && <NewEngine close={toggleIsNewActive} />}
					</Engines>
				</Selector>
			</EngineSelector>
		</HomeDiv>
	);
};

export default Home;
