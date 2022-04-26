import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
	const { getUser } = useGithub();
	const [usernameForSearch, setUsernameForSearch] = useState();

	const submitGetUser = () => {
		if (!usernameForSearch) {
			return alert("Digite um nume de usuário no campo de busca.");
		}

		return getUser(usernameForSearch);
	};

	return (
		<header>
			<S.Wrapper>
				<input
					autoFocus
					type="text"
					placeholder="Digite o nome de usuário para pesquisa..."
					onChange={(event) => setUsernameForSearch(event.target.value)}
				/>
				<button type="submit" onClick={submitGetUser}>
					<span>Buscar</span>
				</button>
			</S.Wrapper>
		</header>
	);
};

export default Header;
