import React from "react";
import withLayout from "../../hoc/withLayout";
import {
	Box,
	Fab,
	Grid, Typography, Card, CardContent, CardMedia,
} from "@mui/material";
import BearImg from '../../assets/images/bear.jpeg'
import SearchBar from "../../components/SearchBar.component";


const SearchPage: React.FC<any> = () => {

	return (
		<Grid container spacing={2} justifyContent="space-between" height="inherit" alignItems="center">
			<Grid item xs={12}>
				<SearchBar />
			</Grid>
			<Grid item xs={12}>
				<Box>
					
				</Box>
			</Grid>
		</Grid>

	);
};

export default withLayout(SearchPage);