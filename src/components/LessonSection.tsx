import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VerseLink from "components/VerseLink";
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

type bodyType = {
  title: string,
  verses: Array<string>
}

type lessonType = {
  lessonNumber: string,
  subtitleLesson: string,
  body: Array<bodyType>
}

const LessonSection = ({ data }: {data?: lessonType}) => {

  return <>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          variant="h3"
          component="h3"
          color="secondary"
        >
          {data?.lessonNumber}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          {data?.body.map(val => {
            return <div key={val.title}>
              <Typography variant="body1">{val.title}</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem'}}>
              {val.verses.map(verse => {
                const verseSplitted = verse.split("€")
                return <VerseLink key={verse} codeVerse={verseSplitted[0]} verse={verseSplitted[1]} />
              })}
              </Box>
            </div>
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  </>
}

export default LessonSection;