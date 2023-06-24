import React from 'react';
import './Header.scss';

// assets
import NoteVerse from '/NoteVerse.svg';
import back from '../../assets/back.svg';
import toddle from '../../assets/toddle.svg';
import { useNavigate } from 'react-router-dom';

const Header = ({
	title = '',
	rightSection = <></>,
	showBackButton = false,
	showLogo = false,
}) => {
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};

	return (
		<header>
			<div className='title'>
				{showBackButton && (
					<button className='back-button' onClick={goBack}>
						<img src={back} alt='back' />
					</button>
				)}
				<img src={NoteVerse} alt='logo' height={45} />
				{showLogo}
			</div>
			<div className='right-section'>{rightSection}</div>
		</header>
	);
};

export default Header;
