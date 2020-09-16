import React, { Fragment, useState, useEffect } from 'react';

//MUi stuff
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Container,
	SwipeableDrawer,
	Divider,
	IconButton,
	MenuList,
	MenuItem,
	ListItem
} from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
//component

import Register from './Register';
import Login from './Login';
import ResetPassword from './ResetPassword';
const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		background: '#fafafa',
		color: '#000000',
		boxShadow: 'none',
		marginBottom: theme.spacing(0)
	},
	menuButton: {
		marginLeft: theme.spacing(2)
	},
	userMenu: {
		margin: theme.spacing(-0.5, 0, -0.5, 0)
	},
	title: {
		flexGrow: 1,
		color: theme.palette.primary.main,
		fontSize: '30',
		fontWeight: '500',
		marginLeft: theme.spacing(-1.5)
	},
	toolbar: theme.mixins.toolbar,
	tool: {
		padding: theme.spacing(0)
	},
	drawerPaper: {
		minWidth: drawerWidth,
		maxWidth: drawerWidth
	},
	logo: {
		marginRight: theme.spacing(0)
	},
	listItemAvatar: {
		minWidth: theme.spacing(4),
		paddingTop: theme.spacing(0.5)
	},
	close: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	login: {
		marginTop: theme.spacing(2)
	}
}));

const Navbar = () => {
	const classes = useStyles();
	const [ state, setState ] = useState({
		left: false
	});

	const [ screenType, setScreenType ] = useState('menu');

	const toggleDrawer = (anchor, open) => (event) => {
		setScreenType('menu');
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	const drawer = (
		<div className={classes.drawerPaper} role="presentation" onKeyDown={toggleDrawer('left', false)}>
			<MenuList className="menu">
				<MenuItem onClick={toggleDrawer('left', false)}>
					{' '}
					<span>Home</span>{' '}
				</MenuItem>
				<MenuItem onClick={toggleDrawer('left', false)}> Find Experts </MenuItem>
				<MenuItem onClick={toggleDrawer('left', false)}> Astrology </MenuItem>
				<MenuItem onClick={toggleDrawer('left', false)}> Health & Fitness </MenuItem>
				<MenuItem onClick={toggleDrawer('left', false)}> Law </MenuItem>
				<MenuItem
					className={classes.login}
					onClick={() => {
						toggleDrawer('left', true);
						handleScreen('login');
					}}
				>
					{' '}
					Login{' '}
				</MenuItem>
				<MenuItem
					onClick={() => {
						toggleDrawer('left', true);
						handleScreen('register');
					}}
				>
					{' '}
					Signup{' '}
				</MenuItem>
				<MenuItem onClick={toggleDrawer('left', false)}>Become an Expert</MenuItem>
			</MenuList>
		</div>
	);

	const menu = (
		<div className={classes.drawerPaper}>
			<ListItem className={(classes.toolbar, classes.close)}>
				{' '}
				<IconButton onClick={toggleDrawer('left', false)}>
					<Close color="primary" />
				</IconButton>
			</ListItem>
			{drawer}
		</div>
	);
	const [ screen, setScreen ] = useState(menu);

	const handleScreen = (screenType) => {
		setScreenType(screenType);
		if (screenType === 'register') setScreen(register);
		else if (screenType === 'login') setScreen(login);
		else if (screenType === 'resetPassword') setScreen(resetPassword);
		else setScreen(menu);
	};

	useEffect(
		() => {
			handleScreen(screenType);
		},
		[ screenType ]
	);
	const register = (
		<div className={classes.drawerPaper}>
			<ListItem className={(classes.toolbar, classes.close)}>
				{' '}
				<IconButton onClick={toggleDrawer('left', false)}>
					<Close color="primary" />
				</IconButton>
			</ListItem>
			<Register handleScreen={handleScreen} />
		</div>
	);
	const login = (
		<div className={classes.drawerPaper}>
			<ListItem className={(classes.toolbar, classes.close)}>
				{' '}
				<IconButton onClick={toggleDrawer('left', false)}>
					<Close color="primary" />
				</IconButton>
			</ListItem>
			<Login handleScreen={handleScreen} />
		</div>
	);
	const resetPassword = (
		<div className={classes.drawerPaper}>
			<ListItem className={(classes.toolbar, classes.close)}>
				{' '}
				<IconButton onClick={toggleDrawer('left', false)}>
					<Close color="primary" />
				</IconButton>
			</ListItem>
			<ResetPassword handleScreen={handleScreen} />
		</div>
	);

	return (
		<Fragment>
			<nav>
				<AppBar className={classes.appBar}>
					<Container>
						<Toolbar className={classes.tool}>
							<Typography variant="h6" className={classes.title}>
								{' '}
							</Typography>

							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={toggleDrawer('left', true)}
							>
								<Menu color="primary" />
							</IconButton>
						</Toolbar>
					</Container>
					<Divider />
				</AppBar>
				<SwipeableDrawer
					anchor={'right'}
					open={state['left']}
					onClose={toggleDrawer('left', false)}
					onOpen={toggleDrawer('left', true)}
				>
					{screen}
				</SwipeableDrawer>
			</nav>
			{/* <div className={classes.toolbar}></div>
      <div className={classes.content}></div> */}
		</Fragment>
	);
};

export default Navbar;
