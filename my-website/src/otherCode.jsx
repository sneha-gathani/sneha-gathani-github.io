import React from 'react';
import { Typography, Box, Button, Card, CardActions, CardMedia, CardContent, Container, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Paper, ThemeProvider } from '@material-ui/core';
import { Person, Visibility, Receipt, CollectionsBookmark, ColorLens, Contacts, GitHub, Email, LinkedIn, School } from '@material-ui/icons';
import CampaignIcon from '@mui/icons-material/Campaign';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SearchIcon from '@mui/icons-material/Search';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PercentIcon from '@mui/icons-material/Percent';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ShortTextIcon from '@mui/icons-material/ShortText';
import theme from './theme.js';
import useStyles from './styles';
import { scroller } from "react-scroll";
import ArticleIcon from '@mui/icons-material/Article';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const drawerWidth = 240;

const App = () => {
    const classes = useStyles();

    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );

      {/* Publications section */}
      <Container maxWidth="xl" id="publications" style={{ margin: 0, padding: 0, }}>
      <Typography className={classes.headNames}>Publications</Typography>
      {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Paper variant="outlined" style={{ height: 'auto', width: '33%', }} className={classes.paper}>
              <div style={{ height: '265px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: '35px', }}>
                  <CardMedia
                      component="img"
                      image={require('./images/mapping_process.png')}
                      className={classes.cardMediaImage}
                  />
              </div>
              <CardContent>
                  <Typography className={classes.title}>
                      A Grammatic Approach to Applying Visualization Taxonomies to Interaction Logs
                  </Typography>
                  <Typography className={classes.authors}>
                      <b className={classes.bold}>Sneha Gathani</b>, Shayan Monadjemi, Alvitta Ottley, Leilani Battle
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '3px', }}>
                      <Button className={classes.keywords} disable>
                          Visualization Taxonomies
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Regular Languages
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Interaction Log Analysis
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Framework
                      </Button>
                  </Box>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <AutoAwesomeIcon className={classes.paperIcons} />
                      <Typography>
                          <i><b className={classes.bold}>EuroVis 2022</b> Eurographics Working Group on Data Visualization </i>
                      </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px', }}>
                      <ArticleIcon className={classes.paperIcons} />
                      <Typography>
                          <i>Full Paper</i><b> | </b><i><b className={classes.bold}>Acceptance</b></i>
                      </Typography>
                      <PercentIcon className={classes.paperIcons} />
                      <Typography>
                      <i> 25%</i>
                      </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px', }}>
                          <PictureAsPdfIcon className={classes.publicationIcons} />
                          <a href="https://arxiv.org/pdf/2201.03740.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                          <SearchIcon className={classes.publicationIcons} />
                          <a href="https://arxiv.org/abs/2201.03740#:~:text=A%20Programmatic%20Approach%20to%20Applying%20Visualization%20Taxonomies%20to%20Interaction%20Logs,-Sneha%20Gathani%2C%20Shayan&text=Researchers%20collect%20large%20amounts%20of,motivations%2C%20intuitions%2C%20and%20goals." target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <GitHub className={classes.publicationIcons} />
                          <a href="https://tinyurl.com/regular-grammar-taxonomies" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Code</Typography></a>
                      </div>
                  </div>
              </CardContent> 
          </Paper>

          <Paper variant="outlined" style={{ height: 'auto', width: '33%', }} className={classes.paper}>
              <div style={{ height: '265px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: '35px', }}>
                  <CardMedia
                      component="img"
                      image={require('./images/functionalities.png')}
                      className={classes.cardMediaImage}
                      style={{ paddingTop: '30px', }}
                  />
              </div>
              <CardContent>
                  <Typography className={classes.title}>
                      Augmenting Decision Making via Interactive What-If Analysis
                  </Typography>
                  <Typography className={classes.authors}>
                      <b className={classes.bold}>Sneha Gathani</b>, Madelon Hulsebos, James Gale , Peter J. Haas, Çağatay Demiralp
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '3px', marginBottom: '0px', }}>
                      <Button className={classes.keywords} disable>
                          Business Data Analysis
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Data-driven Decision Making
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Driver Importance Analysis
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Sensitivity Analysis
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Goal Inversion (Seeking) Analysis
                      </Button>
                      {bull}
                      <Button className={classes.keywords} disable>
                          Constrained Analysis
                      </Button>
                  </Box>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <AutoAwesomeIcon className={classes.paperIcons} />
                      <Typography>
                          <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i>
                      </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px', }}>
                      <ArticleIcon className={classes.paperIcons} />
                      <Typography>
                          <i>Full Paper</i><b> | </b><i><b className={classes.bold}>Acceptance</b></i>
                      </Typography>
                      <PercentIcon className={classes.paperIcons} />
                      <Typography>
                      <i> 28.8%</i>
                      </Typography>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px', }}>
                          <PictureAsPdfIcon className={classes.publicationIcons} />
                          <a href="https://arxiv.org/pdf/2109.06160.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                          <SearchIcon className={classes.publicationIcons} />
                          <a href="https://arxiv.org/abs/2109.06160" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                          <VideoLibraryIcon className={classes.publicationIcons} />
                          <a href="https://drive.google.com/file/d/1PZqyPjd99-HmsTDXZOJzEVVJJIHMSO82/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row' }}>
                          <RecordVoiceOverIcon className={classes.publicationIcons} />
                          <a href="https://www.youtube.com/watch?v=an-oTVQzHT0" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                      </div>
                  </div>
              </CardContent> 
          </Paper>

          <Paper variant="outlined" style={{ height: 'auto', width: '33%', }} className={classes.paper}>
              <div style={{ height: '265px', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', paddingTop: '35px', }}>
                  <CardMedia
                      component="img"
                      image={require('./images/SigmaTyper.png')}
                      className={classes.cardMediaImage}
                      style={{ paddingTop: '45px', }}
                  />
              </div>
              <CardContent>
              <Typography className={classes.title}>
                  Making Table Understanding Work in Practice
              </Typography>
              <Typography className={classes.authors}>
                  Madelon Hulsebos, <b className={classes.bold}>Sneha Gathani</b>, James Gale , Isil Dillig, Paul Groth, Çağatay Demiralp
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '3px', }}>
                  <Button className={classes.keywords} disable>
                      Semantic Column Type Detection
                  </Button>
                  {bull}
                  <Button className={classes.keywords} disable>
                      Table Understanding
                  </Button>
                  {bull}
                  <Button className={classes.keywords} disable>
                      Framework
                  </Button>
              </Box>
              <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '3px', }}>
              <AutoAwesomeIcon className={classes.paperIcons} />
                  <Typography>
                      <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i><b>| </b> 
                  </Typography>
                  <ShortTextIcon className={classes.paperIcons} />
                  <Typography>
                      <i>Abstract</i><b> | </b><i><b className={classes.bold}>Acceptance</b></i>
                  </Typography>
                  <PercentIcon className={classes.paperIcons} />
                  <Typography>
                  <i> 43.2%</i>
                  </Typography>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px', }}>
                      <PictureAsPdfIcon className={classes.publicationIcons} />
                      <a href="https://arxiv.org/pdf/2109.05173.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                      <SearchIcon className={classes.publicationIcons} />
                      <a href="https://arxiv.org/abs/2109.05173" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                      <VideoLibraryIcon className={classes.publicationIcons} />
                      <a href="https://drive.google.com/file/d/1sTrM7vI2o82tMFcHJRgcMpPlU1y0GRlt/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <RecordVoiceOverIcon className={classes.publicationIcons} />
                      <a href="https://www.youtube.com/watch?v=-BE5rWNMXnU" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                  </div>
              </div>
              </CardContent> 
          </Paper>
      </Grid> */}



      {/* Madelon's paper for Research section */}
      {/* <Box sx={{ flexGrow: 1, }} className={classes.researchPaper}>
                            <Grid container spacing={2} style={{ paddingLeft: '15px', }}>
                                <Grid item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', }}>
                                    <CardMedia
                                        component="img"
                                        image={require('./images/SigmaTyper.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '45px', }}
                                    />
                                    <CardMedia
                                        component="img"
                                        image={require('./images/sigmatyper2.png')}
                                        className={classes.cardMediaImage}
                                        style={{ paddingTop: '40px', }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2} style={{ justifyContent: 'center', }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography className={classes.title}>
                                            Making Table Understanding Work in Practice
                                        </Typography>
                                        <Typography className={classes.authors}>
                                            Madelon Hulsebos, <b className={classes.bold}>Sneha Gathani</b>, James Gale , Isil Dillig, Paul Groth, Çağatay Demiralp
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '5px', marginBottom: '5px', }}>
                                            <Button className={classes.keywords} disable>
                                                Semantic Column Type Detection
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Table Understanding
                                            </Button>
                                            {bull}
                                            <Button className={classes.keywords} disable>
                                                Framework
                                            </Button>
                                        </Box>
                                        <div style={{ display: 'flex', flexDirection: 'row', }}>
                                        <AutoAwesomeIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i><b className={classes.bold}>CIDR 2022</b> Conference on Innovative Data Systems Research </i><b>| </b> 
                                            </Typography>
                                            <ShortTextIcon className={classes.paperIcons} />
                                            <Typography>
                                                <i>Abstract</i><b> | </b><i><b className={classes.bold}>Acceptance</b></i>
                                            </Typography>
                                            <PercentIcon className={classes.paperIcons} />
                                            <Typography>
                                            <i> 43.2%</i>
                                            </Typography>
                                        </div>
                                        <Typography style={{ marginTop: '20px', marginBottom: '25px', }}>
                                            Understanding the semantics of tables at scale is crucial for tasks like data integration, preparation, and search. Table understanding methods aim at detecting a table's topic, semantic column types, column relations, or entities. With the rise of deep learning, powerful models have been developed for these tasks with excellent accuracy on benchmarks. However, we observe that there exists a gap between the performance of these models on these benchmarks and their applicability in practice. In this paper, we address the question: what do we need for these models to work in practice?
                                            <Typography style={{ display: 'block', }}>{'\n'}</Typography>
                                            We discuss three challenges of deploying table understanding models and propose a framework to address them. These challenges include 1) difficulty in customizing models to specific domains, 2) lack of training data for typical database tables often found in enterprises, and 3) lack of confidence in the inferences made by models. We present SigmaTyper which implements this framework for the semantic column type detection task. SigmaTyper encapsulates a hybrid model trained on GitTables and integrates a lightweight human-in-the-loop approach to customize the model. Lastly, we highlight avenues for future research that further close the gap towards making table understanding effective in practice.
                                        </Typography>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '10px', }}>
                                                <PictureAsPdfIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/pdf/2109.05173.pdf" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Paper</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                                                <SearchIcon className={classes.publicationIcons} />
                                                <a href="https://arxiv.org/abs/2109.05173" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>DOI</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', marginRight: '13px', }}>
                                                <VideoLibraryIcon className={classes.publicationIcons} />
                                                <a href="https://drive.google.com/file/d/1sTrM7vI2o82tMFcHJRgcMpPlU1y0GRlt/view?usp=sharing" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Video</Typography></a>
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <RecordVoiceOverIcon className={classes.publicationIcons} />
                                                <a href="https://www.youtube.com/watch?v=-BE5rWNMXnU" target="_blank" rel="noreferrer" className={classes.publicationLink}><Typography className={classes.publicationContent}>Talk</Typography></a>
                                            </div>
                                        </div>
                                    </CardContent> 
                                </Grid>
                                </Grid>
                            </Grid>
                        </Box> */}

    }