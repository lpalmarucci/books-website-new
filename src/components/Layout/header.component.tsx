import React, { useState } from "react";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { RoutePaths } from "../../routes/common.routes";
import Sidebar from "./Sidebar.component";
import { useNavigate } from "react-router-dom";

const pages: { label: string; path: string }[] = [
	{
		label: "Search",
		path: RoutePaths.SEARCH,
	},
	{
		label: "Saved",
		path: "/saved",
	},
];

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	return (
		<AppBar
			position="static"
			sx={{ boxShadow: "0px .3px 1px rgba(225,225,255,0.3)" }}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href={RoutePaths.HOME}
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Books Website
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={() => setIsMobileMenuOpen(true)}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Sidebar
							isOpen={isMobileMenuOpen}
							setIsOpen={setIsMobileMenuOpen}
						/>
					</Box>
					<Typography
						variant="h5"
						noWrap
						component="a"
						href={RoutePaths.HOME}
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Books Website
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							ml: 12,
							gap: 2,
						}}
					>
						{pages.map((page,idx) => (
							<Button
								key={idx}
								onClick={() => navigate(page.path)}
								sx={{ my: 2, color: "white", display: "block" }}
							>
								{page.label}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
