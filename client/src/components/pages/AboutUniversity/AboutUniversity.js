import React from "react";
import Header from "../../common/Header/Header";
import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@material-ui/core";
import "./AboutUniversity.css";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

export const AboutUniversity = () => {
	return (
		<div className="home">
			<Header />
			<div className="container" id="aboutContainer">
				<Grid container justify="center">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Grid
								container
								justify="center"
								alignItems="flex-start"
								className="p-3 ">
								<Grid item xs={8} md={4}>
									<Grid
										container
										justify="center"
										alignContent="center">
										{/* <CardMedia
											component="img"
											style={{ maxWidth: "150px" }}
											image="gbu_logo.png"
											label={"Logo"}
										/> */}
									</Grid>
								</Grid>
								<Grid item xs={12} md={12}>
									<Grid container justify="center">
										<CardContent className="text-center">
											<Typography
												gutterBottom
												variant="h3"
												component="h2">
												{"IIIT ALLAHABAD"}
											</Typography>
											<Typography
												gutterBottom
												variant="subtitle1">
												<a
													href="https://www.iiita.ac.in/"
													target="_blank"
													rel="noreferrer noopener">
													{
														"Official University Website"
													}
													<OpenInNewIcon fontSize="small" />
												</a>
											</Typography>
										</CardContent>
									</Grid>
								</Grid>
							</Grid>
						</Card>
					</Grid>
				</Grid>
				<Grid container justify="center" className="my-3">
					<Grid item xs={10}>
						<Card variant="outlined">
							<Container className="px-5 py-4">
								<Typography
									variant="h4"
									className="text-center pb-3">
									About University
								</Typography>
								<Typography variant="body2">
									{
										"Indian Institutes of Information Technology (IIITs) are a group of 25 interdisciplinary technology-based-engineering research institutions in India which are focused on information technology. Five of them are established, funded and managed by the Ministry of Education (MOE). The other 20 are set up on the public-private partnership (PPP) model, funded by the central government, state governments and industry partners in the ratio 50:35:15."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Prior to 2014, the IIITs at Gwalior, Allahabad, Jabalpur, and Kancheepuram were set up by the Ministry of Human Resource Development (MHRD)."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Admissions into undergraduate programmes in IIITs for about 7,000 seats are through the Joint Seat Allocation Authority and JEE-Main. For postgraduate programs admission is through Graduate Aptitude Test in Engineering (GATE)."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"Established in 1999, as a Centre of Excellence in Information Technology and allied areas, the IIIT-A was conferred the Deemed University status by Govt. of India in the year 2000."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The beautiful 100-acre campus, situated at Deoghat, Jhalwa, designed meticulously on the Penrose Geometry pattern, is being further topped by fine landscaping to give an all round soothing effect to create a stimulating environment. The campus is envisaged to be a fully residential one, with all its faculty, staff, and students housed in different pockets. All academic and residential areas are connected to the Institute network."
									}
								</Typography>
								<br />
								<Typography variant="body2">
									{
										"The campus is envisaged to be a fully residential one, with all its faculty, staff and students housed in different pockets. All academic and residential areas are connected to the Institute network."
									}
								</Typography>
							</Container>
						</Card>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
